import { CurrencyPipe, PercentPipe } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WBSDictionary } from 'src/app/models/wbs-dictionary';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-add-budget-line-item',
  templateUrl: './add-budget-line-item.component.html',
  styleUrls: ['./add-budget-line-item.component.scss']
})
export class AddBudgetLineItemComponent implements OnInit {
  currentProjectId: string;
  areas: any;
  units: any;
  @Output() title: string;
  createBudgetLineItemForm: FormGroup;
  formattedAmount: any;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private dataService: DataServiceService,
    private currencyPipe: CurrencyPipe, private percentPipe: PercentPipe, private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.currentProjectId = data['afe_id'];
      this.areas = data['areas'];
      this.units = data['units'];
      this.title = `Add Budget Line Item - ${this.currentProjectId}`;
    });
    this.initializeForm();
  }

  initializeForm() {
    this.createBudgetLineItemForm = this.formBuilder.group({
      afE_Id: [this.currentProjectId, Validators.required],
      gate: [, Validators.required],
      wbS_Id: [, Validators.required],
      area_Id: [, Validators.required],
      unit_Id: [, Validators.required],
      quantity: [1, Validators.required],
      unit_Cost: [50.0, Validators.required],
      tax_Rate: [0.07, Validators.required],
      total_Cost: [50.0, Validators.required],
      comment: ['test', Validators.required],
      wbsForm: this.formBuilder.group({
        category: ['', Validators.required],
        account_Description: ['', Validators.required],
        scope_Description: ['', Validators.required]
      })
    });
  }

  submit() {
    const data = this.createBudgetLineItemForm.value;
    const wbsForm = this.createBudgetLineItemForm.get('wbsForm')?.value;
    data['unit_Cost'] = this.removeTextFromString(data['unit_Cost'], '$');
    data['tax_Rate'] = this.removeTextFromString(data['tax_Rate'], '%');

    // call to get the WBS Dictionary and assign the id to the form data
    this.dataService.getWBSDictionaries(wbsForm).subscribe(response => {
      const wbs = response[0];
      data['wbS_Id'] = wbs['id'];
      const formData = this.dataService.getAsFormData(data);

      this.dataService.createNewBudgetLineItem(formData).subscribe(resp => {
        this.router.navigate([`overview/${this.currentProjectId}`]);
      });
    });
  }

  cancel(event: any) {
    event.preventDefault();
    this.router.navigate([`overview/${this.currentProjectId}`]);
  }

  removeTextFromString(str: any, char: string) {
    let result = str.toString();
    if (result.indexOf(char) > 0) {
      result = str.replace(char, '');
    }
    return result;
  }

  transformToCurrency(event: any) {
    let value = event.srcElement.value;

    if (value.length > 0 && value.indexOf('$') < 0) {
      value = this.currencyPipe.transform(value, '$');

      event.target.value = value;
    }
  }

  transformToPercent(event: any) {
    let value = event.srcElement.value;

    if (value.length > 0 && value.indexOf('%') < 0) {
      value = this.percentPipe.transform(value, '1.2-2');

      event.target.value = value;
    }
  }

}

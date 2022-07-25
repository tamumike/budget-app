import { CurrencyPipe, PercentPipe } from '@angular/common';
import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-detail-budget-line-item',
  templateUrl: './detail-budget-line-item.component.html',
  styleUrls: ['./detail-budget-line-item.component.scss']
})
export class DetailBudgetLineItemComponent implements OnInit {
  areas: any;
  units: any;
  budgetLineItem: any;
  @Output() title: string;
  @Output() wbsInfo: any;
  createBudgetLineItemForm: FormGroup;
  formattedAmount: any;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private dataService: DataServiceService,
    private currencyPipe: CurrencyPipe, private percentPipe: PercentPipe, private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.budgetLineItem = data['budgetLineItem'];
      this.areas = data['areas'];
      this.units = data['units'];
      this.title = `Edit Budget Line Item - ${this.budgetLineItem.id}`;
      this.wbsInfo = this.budgetLineItem.wbs;
    });
    this.initializeForm();
  }

  initializeForm() {
    this.createBudgetLineItemForm = this.formBuilder.group({
      id: [this.budgetLineItem.id, Validators.required],
      afE_Id: [this.budgetLineItem.afE_Id, Validators.required],
      gate: [this.budgetLineItem.gate, Validators.required],
      wbS_Id: [this.budgetLineItem.wbS_Id, Validators.required],
      area_Id: [this.budgetLineItem.area_Id, Validators.required],
      unit_Id: [this.budgetLineItem.unit_Id, Validators.required],
      quantity: [this.budgetLineItem.quantity, Validators.required],
      unit_Cost: [this.budgetLineItem.unit_Cost, Validators.required],
      tax_Rate: [this.budgetLineItem.tax_Rate, Validators.required],
      total_Cost: [this.budgetLineItem.total_Cost, Validators.required],
      comment: [this.budgetLineItem.comment, Validators.required],
      parent_Id: [this.budgetLineItem.parent_Id, Validators.required],
      wbsForm: this.formBuilder.group({
        category: [this.budgetLineItem.wbs.category, Validators.required],
        account_Description: [this.budgetLineItem.wbs.account_Description, Validators.required],
        scope_Description: [this.budgetLineItem.wbs.scope_Description, Validators.required]
      })
    });
  }

  submit() {
    const data = this.createBudgetLineItemForm.value;
    const wbsForm = this.createBudgetLineItemForm.get('wbsForm')?.value;
    data['unit_Cost'] = parseFloat(this.removeTextFromString(data['unit_Cost'], '$'));
    data['tax_Rate'] = parseFloat(this.removeTextFromString(data['tax_Rate'], '%'));

    // call to get the WBS Dictionary and assign the id to the form data
    this.dataService.getWBSDictionaries(wbsForm).subscribe(response => {
      const wbs = response[0];
      data['wbS_Id'] = wbs['id'];
      delete data.wbsForm;

      if (this.checkForChanges(this.budgetLineItem, data)) {
        const formData = this.dataService.getAsFormData(data);

        this.dataService.updateBudgetLineItem(formData, this.budgetLineItem.id).subscribe(resp => {
          this.router.navigate([`overview/${this.budgetLineItem.afE_Id}`]);
        });
      }
    });
  }

  checkForChanges(parent: any, child: any): boolean {
    for (const prop in child)
    {
      if (parent[prop] !== child[prop])
      {
        console.log(`${prop}: ${parent[prop]}, ${typeof(parent[prop])}`);
        console.log(`${prop}: ${child[prop]}, ${typeof(child[prop])}`);
        return true;
      }

    }
    return false;
  }

  cancel(event: any) {
    event.preventDefault();
    this.router.navigate([`overview/${this.budgetLineItem.afE_Id}`]);
  }

  removeTextFromString(str: any, char: string): string {
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

  costMetricsChange(event: any) {
    const formValue = this.createBudgetLineItemForm.value;
    const tax_Rate = formValue.tax_Rate;
    const quantity = formValue.quantity;
    const total_Cost = formValue.total_Cost;
    const unit_Cost = formValue.unit_Cost;

    let total = (quantity * unit_Cost);
    total = total + (tax_Rate * total);
    this.createBudgetLineItemForm.patchValue({total_Cost: total});
    // console.log(`unit_cost: ${unit_Cost}, tax_Rate: ${tax_Rate}, quantity: ${quantity}, total_Cost: ${total_Cost}, total: ${total}`);
  }

}

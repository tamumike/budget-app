import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { WBSDictionary } from 'src/app/models/wbs-dictionary';
import { WbsOptions } from 'src/app/models/wbs-options';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-wbs-form',
  templateUrl: './wbs-form.component.html',
  styleUrls: ['./wbs-form.component.scss']
})
export class WbsFormComponent implements OnInit {
  @Input() wbsForm: any;
  @Input() wbsInfo: any;
  wbsData: WBSDictionary[] = [];
  wbsOptions: WbsOptions;
  @ViewChild('Category') categoryForm: ElementRef;
  @ViewChild('account_Description') accountDescForm: ElementRef;
  @ViewChild('scope_Description') scopeDescForm: ElementRef;

  constructor(private route: ActivatedRoute, private dataService: DataServiceService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.wbsData = data['wbs'];
      this.wbsOptions = this.getWBSOptions(this.wbsData);
      if (this.wbsInfo) {
        this.updateWBSOptions(this.setFilteredOptions(data['wbs']), 3);
      }
    });
  }

  ngAfterViewInit() {
    if (this.wbsInfo) {
      let wbsInfo = this.wbsForm.value;
      this.wbsForm.setValue({
        category: wbsInfo.category,
        account_Description: wbsInfo.account_Description,
        scope_Description: wbsInfo.scope_Description
      });
    }
    return;
  }

  // if in edit mode, need to have the wbs selects pre-filtered with current wbs selections
  setFilteredOptions(data) {
    let wbsInfo = this.wbsForm.value;
    let filteredData;
    filteredData = data.filter(x => {
      return x.category == wbsInfo.category;
    });
    return filteredData;
  }

  categoryChange():void {
    const value = this.categoryForm.nativeElement.value;
    console.log(value);
    let data;
    this.resetWBSForms(true);

    data = this.wbsData.filter(x => {
      return x.category == value;
    });

    this.updateWBSOptions(data, 1);
  }

  getWBSOptions(data: WBSDictionary[]): WbsOptions {
    const wbsOptions = {
      "category": new Set(),
      "account_Description": new Set(),
      "scope_Description": new Set()
    };

    data.forEach(x => {
      wbsOptions["category"].add(x.category);
      wbsOptions["account_Description"].add(x.account_Description);
      wbsOptions["scope_Description"].add(x.scope_Description);
    });

    for (let set in wbsOptions) {
      let wbsOption = wbsOptions[set];
      wbsOptions[set] = this.convertSetToArray(wbsOption);
    }

    return wbsOptions;
  }

  updateWBSOptions(data: WBSDictionary[], level: number): void {
    const wbsOptions = {
      "category": new Set(),
      "account_Description": new Set(),
      "scope_Description": new Set()
    };

    data.forEach(x => {
      if (level === 1 || level === 3) {
        wbsOptions["account_Description"].add(x.account_Description);
      }
      wbsOptions["scope_Description"].add(x.scope_Description);
    });

    wbsOptions['category'] = this.wbsOptions['category'];
    if (level === 2) {
      wbsOptions['account_Description'] = this.wbsOptions['account_Description'];
    }

    // WILL ONLY BE LEVEL 3 IN EDIT MODE. LEVEL 3 SETS WBS OPTIONS BASED ON THE CURRENT VALUE
    if (level === 3) {
      wbsOptions['scope_Description'] = new Set();
      data.forEach(x => {
        if (x.category == this.wbsInfo.category && x.account_Description === this.wbsInfo.account_Description) {
          wbsOptions['scope_Description'].add(x.scope_Description);
        }
      });
    }

    for (let set in wbsOptions) {
      let wbsOption = wbsOptions[set];
      wbsOptions[set] = this.convertSetToArray(wbsOption);
    }

    this.wbsOptions = wbsOptions;
  }

  convertSetToArray(set: Set<string>): string[] {
    return Array.from(set).sort();
  }


  resetWBSForms(isTotal?: boolean) {
    if (isTotal) {
      [this.accountDescForm, this.scopeDescForm].forEach(x => {
        x.nativeElement.value = '';
      });
    }
    else {
      this.scopeDescForm.nativeElement.value = '';
    }
  }

  accountDescriptionChange(): void {
    const value = this.accountDescForm.nativeElement.value;
    let data;
    this.resetWBSForms();

    data = this.wbsData.filter(x => {
      return x.account_Description == value;
    });

    this.updateWBSOptions(data, 2);
  }



}


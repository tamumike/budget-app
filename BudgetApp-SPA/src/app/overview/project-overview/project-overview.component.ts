import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DxDataGridModule, DxCheckBoxModule } from 'devextreme-angular';
import { BudgetLineItem } from 'src/app/models/budget-line-item';
import  CustomStore  from '../../../../node_modules/devextreme/data/custom_store';
import { environment } from '../../../environments/environment';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})
export class ProjectOverviewComponent implements OnInit {
  @Output() title: string = 'Overview';
  @Output() KPI: any = [];
  @Output() focusedData: any;
  currentProjectId: string;
  budgetLineItems: BudgetLineItem[];
  focusedRowKey: any;
  newFocusedRowKey: any;
  autoNavigateToFocusedRow = true;
  dataSource: any;
  baseUrl: string = environment.baseUrl;
  refreshMode: string = 'repaint';
  units: any;
  areas: any;

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataServiceService) {
    this.dataSource = new CustomStore({
      key: 'id',
      load: () => this.budgetLineItems,
      update: (key, values) => this.updateItem(key, values)

    });
   }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.currentProjectId = data['data']['afe_id'];
      this.budgetLineItems = data['data'];
      this.units = data['units'];
      this.areas = data['areas'];
      this.KPI.push(data['kpi']);
      this.seedKPIs();
      this.title = `${this.title} ${this.currentProjectId}`;
    });
    console.log(this.areas);
  }

  updateItem(key, values): any {
    console.log(key, values);
      const formData = this.dataService.getAsFormData(values);

      this.dataService.updateBudgetLineItem(formData, key).subscribe(resp => {
        // this.router.navigate([`overview/${this.budgetLineItem.afE_Id}`]);
        console.log(resp);
      });
  }

  goBack() {
    this.router.navigate([`overview/${this.currentProjectId}`]);
  }

  onFocusedRowChanging(e: any) {
    const rowsCount = e.component.getVisibleRows().length;
    const pageCount = e.component.pageCount();
    const pageIndex = e.component.pageIndex();
    const key = e.event && e.event.key;

    if (key && e.prevRowIndex === e.newRowIndex) {
      if (e.newRowIndex === rowsCount - 1 && pageIndex < pageCount - 1) {
        e.component.pageIndex(pageIndex + 1).done(() => {
          e.component.option('focusedRowIndex', 0);
        });
      } else if (e.newRowIndex === 0 && pageIndex > 0) {
        e.component.pageIndex(pageIndex - 1).done(() => {
          e.component.option('focusedRowIndex', rowsCount - 1);
        });
      }
    }
  }

  onFocusedRowChanged(e: any) {
    const rowData = e.row && e.row.data;
    this.focusedData = rowData;
  }

  // THIS IS JUST FOR DEVELOPEMENT. IT IS SEEDING THE KPIs
  seedKPIs() {
    const seedData = {'Orders': 200, 'LTO': 71, 'Invoices': 250, 'LTI': 71, 'ETC': 5000, 'O/U': -100000};
    Object.keys(seedData).forEach(key => {
      this.KPI[0][key] = seedData[key];
    });
    delete this.KPI[0]['actuals'];
  }

}

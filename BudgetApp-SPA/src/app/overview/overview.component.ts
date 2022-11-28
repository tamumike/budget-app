import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BudgetLineItem } from '../models/budget-line-item';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  @Output() title: string = 'Overview';
  budgetLineItems: BudgetLineItem[];
  currentProjectId: string;
  @Output() KPI: any = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.budgetLineItems = data['data'];
      this.currentProjectId = data['data']['afe_id'];
      this.KPI.push(data['kpi']);
      // this.title = `${this.title} - ${this.currentProjectId}`;
    });
  }

  navToAddBudgetLineItem() {
    this.router.navigate(['add-budget-line-item' + '/' + this.currentProjectId]);
  }

  navToBudgetLineItemDetail(id?: number) {
    this.router.navigate(['detail-budget-line-item' + '/' + id]);
  }

  navToProjectOverview() {
    this.router.navigate([`project-overview/${this.currentProjectId}`])
  }

  goBack() {
    this.router.navigate(['all-projects']);
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
  budgetLineItems: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getBudgets();
  }

  getBudgets() {
    this.http.get(environment.baseUrl + "/Budget").subscribe(response => {
      this.budgetLineItems = response;
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

}

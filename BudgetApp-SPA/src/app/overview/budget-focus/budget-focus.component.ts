import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-focus',
  templateUrl: './budget-focus.component.html',
  styleUrls: ['./budget-focus.component.scss']
})
export class BudgetFocusComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}

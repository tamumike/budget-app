import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  @Output() title: string = 'Reports';

  constructor() { }

  ngOnInit(): void {
  }

}

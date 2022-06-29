import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.scss']
})
export class KpiComponent implements OnInit {
  @Input() metrics: any = [];
  x: any;
  @Output() tests: any;

  constructor() { }

  ngOnInit(): void {
    this.x = this.metrics[0];
  }

}

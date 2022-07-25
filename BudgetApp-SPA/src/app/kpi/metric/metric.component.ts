import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.scss']
})
export class MetricComponent implements OnInit {
  types: string[] = ['budget', 'eac', 'actuals', 'total_Budget'];
  @Input() metric: any;

  constructor() { }

  ngOnInit(): void {
  }

  formatMetric(value: string) {
    if (this.types.includes(value)) {
      return true;
    }
    return false;
  }

}

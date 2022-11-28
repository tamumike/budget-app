import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.scss']
})
export class MetricComponent implements OnInit {
  types: string[] = ['budget', 'eac', 'actuals', 'total_Budget'];
  aliases: {} = {
    'budget': 'Budget',
    'eac': 'EAC',
    'actuals': 'Actuals',
    'total_Budget': 'Total Budget'
  };
  @Input() metric: any;
  math = Math;

  constructor() { }

  ngOnInit(): void {
  }

  formatMetric(value: string) {
    if (this.types.includes(value)) {
      return true;
    }
    return false;
  }

  formatKey(value: string) {
    let alias = value;
    if (this.aliases[value]) {
      alias = this.aliases[value];
    }

    return alias;
  }

  isWarning(value: string) {
    return value == 'eac';
  }

}

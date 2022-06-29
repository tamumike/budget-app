import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kpi-format'
})
export class KpiFormatPipe implements PipeTransform {
  types: string[] = ['budget', 'eac', 'actuals'];

  transform(value: any, args?: any): any {
    this.types.forEach(type => {
      if (value === type) {
        return true;
      }
      return null;
    });
    return null;
  }

}

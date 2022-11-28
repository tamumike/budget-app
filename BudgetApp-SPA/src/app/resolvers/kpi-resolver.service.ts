import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { DataServiceService } from '../services/data-service.service';

@Injectable({
  providedIn: 'root'
})
export class KpiResolverService implements Resolve<any> {

constructor(private dataService: DataServiceService, private router: Router) { }

resolve(route: ActivatedRouteSnapshot) {
  return this.dataService.getProjectSummary(route.params['afe_id'])
  .pipe(
    catchError(error => {
      console.log(`${error} overview-kpi-resolver`);
      this.router.navigate(['all-projects']);
      return of(null);
    })
  );
}

}

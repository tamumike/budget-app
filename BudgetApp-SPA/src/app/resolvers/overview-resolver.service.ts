import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { DataServiceService } from '../services/data-service.service';

@Injectable({
  providedIn: 'root'
})
export class OverviewResolverService implements Resolve<any> {

constructor(private dataService: DataServiceService, private router: Router) { }

resolve(route: ActivatedRouteSnapshot) {
  return this.dataService.getBudgetLineItemsByAFE(route.params['afe_id'])
  .pipe(
    catchError(error => {
      console.log(`${error} overview-resolver`);
      this.router.navigate(['all-projects']);
      return of(null);
    })
  )
}

}

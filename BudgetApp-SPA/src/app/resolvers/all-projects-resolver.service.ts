import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, of } from 'rxjs';
import { DataServiceService } from '../services/data-service.service';

@Injectable({
  providedIn: 'root'
})
export class AllProjectsResolverService implements Resolve<any> {

constructor(private dataService: DataServiceService, private router: Router) { }

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  return this.dataService.getProjectSumariesKPIs()
  .pipe(
    catchError(error => {
      console.log('all-projects-resolve.service - ERROR');
      this.router.navigate(['all-projects']);
      return of(null);
    })
  );
}

}

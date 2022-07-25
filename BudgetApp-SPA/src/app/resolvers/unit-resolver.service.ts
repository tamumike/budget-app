import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { DataServiceService } from '../services/data-service.service';

@Injectable({
  providedIn: 'root'
})
export class UnitResolverService implements Resolve<any> {

constructor(private dataService: DataServiceService, private router: Router) { }

resolve() {
  return this.dataService.getUnits()
  .pipe(
    catchError(error => {
      console.log(error);
      this.router.navigate(['all-projects']);
      return of(null);
    })
  );
}
}

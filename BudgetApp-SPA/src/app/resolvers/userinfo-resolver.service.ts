import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserinfoResolverService implements Resolve<any> {

constructor(private userService: UserService, private router: Router) { }

resolve(route: ActivatedRouteSnapshot) {
  return this.userService.getUserInfo()
  .pipe(
    catchError(error => {
      console.log(`${error} userinfo resolver`);
      this.router.navigate(['all-projects']);
      return of(null);
    })
  );
}

}

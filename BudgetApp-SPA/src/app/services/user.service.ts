import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.userUrl;

constructor(private http: HttpClient) { }

getUserInfo(): Observable<any> {
  let product;
  return this.http.get(this.baseUrl, {observe: 'response' })
  .pipe(
    map(response => {
      product = response.body;
      return product;
    })
  );
}

}

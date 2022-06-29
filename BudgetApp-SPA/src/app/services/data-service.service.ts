import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjectSummary } from '../models/project-summary';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

baseUrl = environment.baseUrl;

constructor(private http: HttpClient) { }

getProjectSummaries(): Observable<any> {
  let product;
  return this.http.get(this.baseUrl + '/AllProjects', { observe: 'response' })
    .pipe(
      map(response => {
        product = response.body;
        return product;
      })
    );
}

getProjectSumariesKPIs(): Observable<any> {
  let product;
  return this.http.get(this.baseUrl + '/AllProjects/KPIs', { observe: 'response'})
  .pipe(
    map(response => {
      product = response.body;
      return product;
    })
  );
}

}

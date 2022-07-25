import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

baseUrl = environment.baseUrl;

constructor(private http: HttpClient) { }

  getBudgetLineItemsByAFE(afe_id: string): Observable<any> {
    let product;
    return this.http.get(this.baseUrl + '/Project/' + afe_id, { observe : 'response' })
    .pipe(
      map(response => {
        product = response.body;
        product['afe_id'] = afe_id;
        return product;
      })
    );
  }

  getBudgetLineItem(id: number): Observable<any> {
    let product;
    return this.http.get(this.baseUrl + `/${id}`, { observe: 'response' })
      .pipe(
        map(response => {
          product = response.body;
          return product;
        })
      );
  }

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

  getProjectSummary(afe_Id: string): Observable<any> {
    let product;
    return this.http.get(this.baseUrl + `/Overview/KPIs/${afe_Id}`, { observe: 'response' })
    .pipe(
      map(response => {
        product = response.body;
        return product;
      })
    );
  }

  getAreas(): Observable<any> {
    let product;
    return this.http.get(this.baseUrl + '/Areas', { observe: 'response'})
    .pipe(
      map(response => {
        product = response.body;
        return product;
      })
    );
  }

  getUnits(): Observable<any> {
    let product;
    return this.http.get(this.baseUrl + '/Units', { observe: 'response'})
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

  getWBSDictionaries(wbsParams?: any): Observable<any> {
    let product;
    let params = new HttpParams();
    if (wbsParams != null) {
      Object.keys(wbsParams).forEach(x => {
        params = params.append(x, wbsParams[x]);
      });
    }

    return this.http.get(this.baseUrl + '/WBS', { observe: 'response', params })
    .pipe(
      map(response => {
        product = response.body;
        return product;
      })
    );
  }

  getWBSDictionaryById(id: number): Observable<any> {
    let product;
    return this.http.get(this.baseUrl + `/WBS/${id}`, { observe: 'response' })
      .pipe(
        map(response => {
          product = response.body;
          return product;
        })
      );
  }

  createNewBudgetLineItem(budgetLineItem: any): Observable<any> {
    return this.http.post(this.baseUrl, budgetLineItem);
  }

  updateBudgetLineItem(budgetLineItem: any, id: number): Observable<any> {
    console.log('data service updatebudgetlinitem');
    return this.http.post(this.baseUrl + `/update/${id}`, budgetLineItem);
  }

  convertSetToArray(set: Set<string>): string[] {
    return Array.from(set).sort();
  }

  getAsFormData(data: any): FormData {
    const formData = new FormData();

    for (const item in data) {
      formData.append(item, data[item]);
    }

    return formData;
  }
}

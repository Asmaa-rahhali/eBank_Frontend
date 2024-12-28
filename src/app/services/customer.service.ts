import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  backendHost:string = "http://localhost:8085";
  constructor(private http:HttpClient) { }
  public getCustomers():Observable<Array<Customer>>{
    //Méthodes Get Post Put retournent des objets de type observable
    return this.http.get<Array<Customer>>(this.backendHost+"/customers")
  }
  public searchCustomers(keyword : string):Observable<Array<Customer>>{
    //Méthodes Get Post Put retournent des objets de type observable
    return this.http.get<Array<Customer>>(this.backendHost+"/customers/search?keyword="+keyword)
  }
  public saveCustomer(customer: Customer):Observable<Customer>{
    //Méthodes Get Post Put retournent des objets de type observable
    return this.http.post<Customer>(this.backendHost+"/customers",customer)
  }
  public deleteCustomer(id: number){
    //Méthodes Get Post Put retournent des objets de type observable
    return this.http.delete(this.backendHost+"/customers/"+id)
  }
}

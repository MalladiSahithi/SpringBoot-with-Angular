import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
private createCustomer="http://localhost:8080/api/addCustomers";
private getCustomerList="http://localhost:8080/api/getAllCustomers";
private getCustomerbyid="http://localhost:8080/api/getCustomerById";
private updatecustomer="http://localhost:8080/api/updateCustomer";
private delCustomer="http://localhost:8080/api/deleteCustomer";
  constructor(private httpClient:HttpClient) { }
  
  addCustomer(customer:Customer):Observable<Object>{
    return this.httpClient.post(`${this.createCustomer}`,customer);
  }
  getAllCustomerList():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.getCustomerList}`);
  }
  getCustomerById(id:number):Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.getCustomerbyid}/${id}`);
  }
  updateCustomer(id:number,customer:Customer):Observable<Object>{
    return this.httpClient.put<Customer>(`${this.updatecustomer}/${id}`,customer);
  }
  deleteCustomer(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.delCustomer}/${id}`);
  }
}

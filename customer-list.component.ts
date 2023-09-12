import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent  implements OnInit{
customers:Customer[] | undefined;
constructor(private customerService: CustomerService,private router:Router){}
ngOnInit(): void{
  this.getCustomerList();
}
private getCustomerList(){
this.customerService.getAllCustomerList().subscribe(data=>{
  this.customers=data;
})
}
updateCustomer(id:number){
this.router.navigate(['update-customer',id]);
}
deleteCustomer(id:number){
this.customerService.deleteCustomer(id).subscribe(data=>{
  console.log(data);
  this.reloadComponent();
},
error=>console.log(error));
}
reloadComponent(){
  this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
  this.router.onSameUrlNavigation='reload';
  this.router.navigate(['/get-customers']);
}
}

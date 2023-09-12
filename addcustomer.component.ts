import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit{
  customer:Customer=new Customer();
  constructor(private customerService: CustomerService,private router:Router){}
  ngOnInit(): void {

  }

  saveCustomer(){
    this.customerService.addCustomer(this.customer).subscribe(data=>{
      console.log(data);
      this.goToCustomerList();
    })
  }
    goToCustomerList(){
      this.router.navigate(['/get-customers']);
    }

    onSubmit(){
      this.saveCustomer();
    }
  }
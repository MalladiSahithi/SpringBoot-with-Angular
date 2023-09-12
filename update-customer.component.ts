import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit{
  customer:Customer=new Customer();
  id!:number;
  constructor(private customerService: CustomerService,
    private router:Router,
    private route:ActivatedRoute){}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.customerService.getCustomerById(this.id).subscribe(data=>{
      this.customer=data;
    },
    error=>console.log(error));
  }
  onSubmit(){
this.customerService.updateCustomer(this.id,this.customer).subscribe(data=>{
  console.log(data);
})
  }
goToCustomerList(){
  this.router.navigate(['/get-customers']);
}
}

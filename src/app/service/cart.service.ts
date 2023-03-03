import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

 public cartitemlist: any =[]
 public productlist = new BehaviorSubject<any>([]);

  constructor() { }

  getproducts(){
   return this.productlist.asObservable();
  }

  setproduct(product:any){
 this.cartitemlist.push(...product);
 this.productlist.next(product);
  }

  addtoCart(product:any){
    this.cartitemlist.push(product);
    this.productlist.next(this.cartitemlist);
     this.gettotalprice();
  }

  gettotalprice(){
    let grantprice= 0;
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  public productlist : any;
  constructor(private api: ApiserviceService) { }

  ngOnInit(): void {
    this.api.getproduct().subscribe(res=>{
      this.productlist = res;
    })
  }

}

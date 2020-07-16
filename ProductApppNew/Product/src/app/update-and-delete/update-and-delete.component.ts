import { Component, OnInit } from '@angular/core';
import { ProductModel} from '../product-list/product.model';
import { ProductService} from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-and-delete',
  templateUrl: './update-and-delete.component.html',
  styleUrls: ['./update-and-delete.component.css']
})
export class UpdateAndDeleteComponent implements OnInit {
  title:String = "Product List";
  products: ProductModel[];
  imageWidth: number = 50;
  imageMargin: number = 2;

  showImage: boolean = false;
  // delete function
  deleteProduct(id){
    console.log("deleted" + id);
    this.productService.deleteProduct(id);
    alert("Product Deleted");
    this.router.navigate(['/']);
  }

  constructor(private productService:ProductService, private router:Router) { }
  
  
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    })
  }

}



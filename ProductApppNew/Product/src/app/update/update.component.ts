import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductModel } from '../product-list/product.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit, OnDestroy {
  title:String = "Update Product List";
  productItem = new ProductModel(null,null,null,null,null,null,null,null);
  id;
  sub;

  constructor(private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {

    this.sub =
    this.activatedRoute.paramMap.subscribe((params)=>
            {
              this.id=params.get('id');
              console.log("id"+ this.id);
              this.productService.oneProduct(this.id).subscribe((data)=>
              {
                this.productItem = JSON.parse(JSON.stringify(data));
                console.log(this.productItem);
              });  
              console.log(this.productItem);
            });
          }
  ngOnDestroy()   
    {
      this.sub.unsubscribe();
    }     

    updateProduct()
    {
      console.log(this.productItem);
      this.productService.updateProduct(this.productItem);
      console.log("Single product is updated successfully");
      alert("Product Updated Successfully!!");
      this.router.navigate(['/']);
    }

  }


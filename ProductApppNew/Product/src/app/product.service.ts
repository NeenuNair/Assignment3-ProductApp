import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _deleteProductUrl ="http://localhost:3000/deleteProduct"
  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get("http://localhost:3000/products");
  }
  newProduct(item){
    return this.http.post("http://localhost:3000/insert",{"product":item})
    .subscribe(data =>{console.log(data)})
  }
  updateProduct(item){
    return this.http.post("http://localhost:3000/update",{"product":item})
    .subscribe(data =>{console.log(data)})
  }
  oneProduct(id){
    return this.http.post("http://localhost:3000/oneProduct",{"id":id})
  }
  deleteProduct(id){
    console.log(id);
    return this.http.post(this._deleteProductUrl,{"id":id}).subscribe((status)=>{
    console.log(status);
    })
  }
}
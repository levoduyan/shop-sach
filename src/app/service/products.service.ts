import { Injectable, Injector } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService{

  constructor(injector:Injector) {
    super(injector);
   }
  getData(params:any){
    return this.get(`/products`,params);
  }
  postData(body:any){
   return this.post(`/products`,body);
 }
  removeData(id:number){
    return this.delete(`/products/${id}`);
  }
  editData(id:number,body:any){
    return this.patch(`/products/${id}`,body);
  }
  getlistData(id:number,params:any){
    return this.get(`/products/${id}`,params);
  }
}

import { Injectable, Injector } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService extends BaseService{

  constructor(injector:Injector) {
    super(injector);
   }
  getData(params:any){
    return this.get(`/orders`,params);
  }
  postData(body:any){
   return this.post(`/orders`,body);
 }
  removeData(id:number){
    return this.delete(`/orders/${id}`);
  }
}

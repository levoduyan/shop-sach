import { Injectable, Injector } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService{

  constructor(injector:Injector ) {
    super(injector);
   }

   getData(params:any){
    return this.get("/users",params)
  }
}

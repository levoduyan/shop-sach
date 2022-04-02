import { Injectable, Injector } from '@angular/core';
import { Admin } from '../models/admin.model';
import { BaseService } from './base.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService{

  data:Admin=new Admin
  users:Admin=new Admin

  constructor(injector:Injector,private userService:UsersService) {
    super(injector);
    this.loadAD();
  }

  loadAD(){
    this.userService.getData({}).then((res:any)=>{
      this.data = res;
    })
  }

  verifyUsers(user:string,password:string){
    if(this.data.user == user && this.data.password == password){
      return true
    }
      return false
  }
  
  checkLogin(){
    let users=localStorage.getItem('user');
    if(users){
        let user=<Admin>JSON.parse(users);
        if(this.users==null){
          return this.verifyUsers(user.user,user.password);
        }else{
          return true
        }
        
      }
      return false
  }

  Login(user:Admin){
    if(this.verifyUsers(user.user,user.password)){
      localStorage.setItem('user',JSON.stringify(user))
      return true;
    }
    return false
  }
  
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../models/admin.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:Admin = new Admin;
  form:FormGroup|any;
  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if(form.valid){
      if(this.authService.Login(this.user)){
        this.router.navigateByUrl('/admin')
      }else{
        alert('Đăng nhập không thành công, vui lòng thử lại!');
      }
      
    }
  }

}

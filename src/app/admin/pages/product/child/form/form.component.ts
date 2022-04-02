import { Component,EventEmitter,Input,OnInit, Output} from '@angular/core';
import { NgForm,FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/service/products.service';

import { Sanpham } from 'src/app/models/sanpham.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form:FormGroup|any;
  sanpham:Sanpham=new Sanpham;
  showForm:boolean = false;

  @Output('cancel') CancelForm:EventEmitter<any> = new EventEmitter;

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    
  }

  onSubmit(form:NgForm){
    if(form.valid){
      this.productsService.postData(this.sanpham).then((res:any)=>{
        alert("Thêm thành công!")
        this.CancelForm.emit(false);
        location.reload();
      }).catch((err)=>{
        console.error(err);
      })
    }else{
      alert("Đã xảy ra lỗi, vui lòng kiểm tra lại !")
    }
  }
  
  Cancel(){
    this.CancelForm.emit(false);
    this.sanpham= new Sanpham;
  }
}

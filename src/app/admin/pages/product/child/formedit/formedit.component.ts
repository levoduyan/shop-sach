import { ProductsService } from 'src/app/service/products.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Sanpham } from 'src/app/models/sanpham.model';

@Component({
  selector: 'app-formedit',
  templateUrl: './formedit.component.html',
  styleUrls: ['./formedit.component.scss']
})
export class FormeditComponent implements OnInit {

  form:FormGroup|any;
  
  @Input('edit') sanpham:Sanpham = new Sanpham;
  @Output('cancel') CancelForm:EventEmitter<any> = new EventEmitter;

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
  }
  
  onSubmit(form:NgForm){
    if(form.valid){
      this.productsService.editData(this.sanpham.id,this.sanpham).then((res:any)=>{
        alert("Update thành công!")
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

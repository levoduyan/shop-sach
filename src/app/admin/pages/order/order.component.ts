import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from 'src/app/models/order.model';
import { OrdersService } from 'src/app/service/orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  data:Order[]=[];
  order:Order=new Order;

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.ordersService.getData({}).then((res:any)=>{
      this.data = res;
    });
  }
  onSubmit(form:NgForm){
    if(form.valid){
      this.ordersService.postData(this.order).then((res:any)=>{
        alert("Thêm thành công!")
        location.reload();
      }).catch((err)=>{
        console.error(err);
      })
    }else{
      alert("Đã xảy ra lỗi, vui lòng kiểm tra lại !")
    }
  }

  remove(item:Order){
    if(confirm("Bạn có chắc xóa dòng này không?")){
      this.ordersService.removeData(item.id).then((res:any)=>{
        alert("Xóa thành công!");
        location.reload();
      });
    }
  }
}


import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Sanpham } from 'src/app/models/sanpham.model';
import { ProductsService } from 'src/app/service/products.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  
  @Output('edit') editSP:EventEmitter<any> = new EventEmitter;
  @Output('showform') showEdit:EventEmitter<any> = new EventEmitter;
  @Input('list') data:Sanpham[]=[];

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    
  }

  remove(item:Sanpham){
    if(confirm("Bạn có chắc xóa dòng này không?")){
      this.productsService.removeData(item.id).then((res:any)=>{
        alert("Xóa thành công!");
        location.reload();
      });
    }
  }
  Edit(index:number){
    this.editSP.emit(index);
    this.showEdit.emit(true);
   }

   
}

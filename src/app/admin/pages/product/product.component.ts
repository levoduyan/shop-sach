import { Component, OnInit } from '@angular/core';
import { Sanpham } from 'src/app/models/sanpham.model';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  listSP: Sanpham[] = [];
  data:Sanpham[]=[];
  sanpham: Sanpham = new Sanpham();
  showForm: boolean = false;
  showEdit: boolean = false;
  search:string = "";
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.loadData();
  }
  // hiện form
  ShowForm() {
    this.showForm = true;
  }
  cancelForm(value: boolean) {
    this.showForm = value;
    this.sanpham = new Sanpham();
  }
  getlist(index: number) {
    this.productsService.getlistData(index, {}).then((res: any) => {
      this.sanpham = res;
    });
  }
  showedit(value: boolean) {
    this.showEdit = value;
  }
  cancelEdit(value: boolean) {
    this.showEdit = value;
    this.sanpham = new Sanpham();
  }
  loadData(){
    this.productsService.getData({}).then((res:any)=>{
      this.data = res;
    });
  }
  // doSearch() {
  //   if(this.search === "" || !this.search)
  //   {
  //     this.listSP = this.data;
  //   }else{
  //     this.listSP = this.data.filter(ele=>{
  //       return ele.name.toLowerCase().includes(this.search.toLowerCase());
  //     });
  //   }
  // }
}

import { HttpClient} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private httpClient:HttpClient |any;
  private API_SERVER = "https://shop-sach.herokuapp.com";

  constructor( injector: Injector) {
    if(injector){
      this.httpClient = injector.get(HttpClient);
    }
   }

   public get(path:string, params:any){
     return new Promise((thanhcong,thatbai)=>{
       try{
         this.httpClient.get(this.API_SERVER + path,{params}).subscribe((res:any)=>{
           thanhcong(res);
         });
      } catch (error){
        thatbai(error);
      }
     })
   }
   public post(path:string, body:any){
    return new Promise((thanhcong, thatbai)=>{
      try{
        this.httpClient.post(this.API_SERVER + path,body).subscribe((res:any)=>{
          thanhcong(res);
        });
     } catch (error){
       thatbai(error);
     }
    })
  }

  public delete(path:string){
    return new Promise((thanhcong, thatbai)=>{
      try{
        this.httpClient.delete(this.API_SERVER + path).subscribe((res:any)=>{
          thanhcong(res);
        });
     } catch (error){
       thatbai(error);
     }
    })
  }

  public patch(path:string, body:any){
    return new Promise((thanhcong, thatbai)=>{
      try{
        this.httpClient.patch(this.API_SERVER + path,body).subscribe((res:any)=>{
          thanhcong(res);
        });
     } catch (error){
       thatbai(error);
     }
    })
  }

}

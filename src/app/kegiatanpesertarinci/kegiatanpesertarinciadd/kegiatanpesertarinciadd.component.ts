import { Component, OnInit } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';
import { KegiatanPesertaRinciAddModel } from './kegiatanpesertarinciadd.model';

@Component({
  selector: 'app-kegiatanpesertarinciadd',
  templateUrl: './kegiatanpesertarinciadd.component.html',
  styleUrls: ['./kegiatanpesertarinciadd.component.css']
})
export class KegiatanpesertarinciaddComponent implements OnInit {

  dataAdd: KegiatanPesertaRinciAddModel;
  constructor(private http:Http, private route:ActivatedRoute) {}

  ngOnInit() {
    this.dataAdd=new KegiatanPesertaRinciAddModel()
  }

  postKegiatanPesertaRinci(dataAdd){
    let header = new Headers({"Content-Type":"application/json"});
    let opsi = new RequestOptions({headers:header});
    this.http.post("http://localhost:8820/api/kegiatanpesertarinci",JSON.stringify(this.dataAdd),opsi)
    .subscribe((res:Response) => {
      window.location.href='./kegiatanpesertarinci';
    })
  }

  kegiatanPesertaRinciBack(){
    window.location.href='./kegiatanpesertarinci';
  }
}

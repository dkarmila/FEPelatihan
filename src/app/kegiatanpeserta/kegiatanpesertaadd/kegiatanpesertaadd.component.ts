import { Component, OnInit } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';
import { KegiatanPesertaAddModel } from './kegiatanpesertaadd.model';

@Component({
  selector: 'app-kegiatanpesertaadd',
  templateUrl: './kegiatanpesertaadd.component.html',
  styleUrls: ['./kegiatanpesertaadd.component.css']
})
export class KegiatanpesertaaddComponent implements OnInit {

  dataAdd: KegiatanPesertaAddModel;
  constructor(private http:Http, private route:ActivatedRoute) {}

  ngOnInit() {
    this.dataAdd=new KegiatanPesertaAddModel()
  }

  postKegiatanPeserta(dataAdd){
    let header = new Headers({"Content-Type":"application/json"});
    let opsi = new RequestOptions({headers:header});
    this.http.post("http://localhost:8820/api/kegiatanpeserta",JSON.stringify(this.dataAdd),opsi)
    .subscribe((res:Response) => {
      window.location.href='./kegiatanpeserta';
    })
  }

  kegiatanPesertaBack(){
    window.location.href='./kegiatanpeserta';
  }

}

import { Component, OnInit } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';
import { JejakPesertaAddModel } from './jejakpesertaadd.model';

@Component({
  selector: 'app-jejakpesertaadd',
  templateUrl: './jejakpesertaadd.component.html',
  styleUrls: ['./jejakpesertaadd.component.css']
})
export class JejakpesertaaddComponent implements OnInit {

  dataAdd: JejakPesertaAddModel;
  constructor(private http: Http, private route:ActivatedRoute) { }

  ngOnInit() {
    this.dataAdd = new JejakPesertaAddModel();
  }

  postJejakPeserta(dataAdd){
    debugger;
    let header = new Headers({'Content-Type':'application/json'});
    let opsi = new RequestOptions({headers:header});
    //let data = JSON.stringify({kdProvinsi:kode, NamaProvinsi:nama})
    debugger;
    this.http.post('http://localhost:8820/api/jejakpeserta?'+document.cookie,JSON.stringify(dataAdd),opsi)
    .subscribe((res: Response) => {
      window.location.href = './jejakpeserta';
    });
  }

  jejakPesertaBack(){
    window.location.href="./jejakpeserta";
  }
}

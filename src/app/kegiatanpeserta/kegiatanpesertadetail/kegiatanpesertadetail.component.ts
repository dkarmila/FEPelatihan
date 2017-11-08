import { Component, OnInit } from '@angular/core';
import { Http, Request, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kegiatanpesertadetail',
  templateUrl: './kegiatanpesertadetail.component.html',
  styleUrls: ['./kegiatanpesertadetail.component.css']
})
export class KegiatanpesertadetailComponent implements OnInit {

  dataDetail: Object;
  id: string;
  constructor(private http: Http, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
  }

  ngOnInit() {
    this.http.get('http://localhost:8820/api/kegiatanpeserta/' +this.id+'?'+document.cookie)
    .subscribe((res: Response) => {
      this.dataDetail = res.json();
    });
  }

  kegiatanPesertaBack(){
    window.location.href='./kegiatanpeserta';
  }

}

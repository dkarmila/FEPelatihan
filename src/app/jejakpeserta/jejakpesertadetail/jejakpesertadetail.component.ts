import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jejakpesertadetail',
  templateUrl: './jejakpesertadetail.component.html',
  styleUrls: ['./jejakpesertadetail.component.css']
})
export class JejakpesertadetailComponent implements OnInit {

  id: string;
  dataDetail: Object;
  constructor(private http: Http, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.http.get('http://localhost:8820/api/jejakpeserta/' +this.id+'?'+document.cookie)
    .subscribe((res: Response) => {
      this.dataDetail = res.json();
    });
  }

  jejakPesertaBack(){
    window.location.href="./jejakpeserta";
  }

}

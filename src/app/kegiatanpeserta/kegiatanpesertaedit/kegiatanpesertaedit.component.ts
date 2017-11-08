import { Component, OnInit } from '@angular/core';
import { Http, Response, Request} from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kegiatanpesertaedit',
  templateUrl: './kegiatanpesertaedit.component.html',
  styleUrls: ['./kegiatanpesertaedit.component.css']
})
export class KegiatanpesertaeditComponent implements OnInit {

  id: string;
  dataEdit : Object;

  constructor(private http: Http, private route:ActivatedRoute) { 
    this.route.params.subscribe(params =>{
      this.id=params['id'];
    })
  }

  ngOnInit() {
    debugger;
    this.http.get('http://localhost:8820/api/kegiatanpeserta/'+this.id+'?'+document.cookie)
    .subscribe((res:Response) => {
      this.dataEdit=res.json();
    });
    debugger;
  }

  putKegiatanPeserta(id){
    this.http.put('http://localhost:8820/api/kegiatanpeserta/'+this.id+'?'+document.cookie, this.dataEdit)
    .subscribe((res: Response) => {
      window.location.href='./kegiatanpeserta';
    })
    //debugger;
  }

  kegiatanPesertaBack(){
    window.location.href="./kegiatanpeserta";
  }

}

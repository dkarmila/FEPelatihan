import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-kegiatanpeserta',
  templateUrl: './kegiatanpeserta.component.html',
  styleUrls: ['./kegiatanpeserta.component.css']
})
export class KegiatanpesertaComponent implements OnInit {

  dataTampil:Object
  constructor(private http:Http) { }

  ngOnInit() {
    this.http.get('http://localhost:8820/api/kegiatanpeserta?'+document.cookie)
    .subscribe((res:Response) => {
      this.dataTampil=res.json();
      debugger;
    })
  }

  KegiatanPesertaDelete(id){
    this.http.delete("http://localhost:8820/api/kegiatanpeserta/"+id+"?"+document.cookie)
    .subscribe((res:Response) => {
      window.location.href="./kegiatanpeserta";
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-kegiatanpesertarinci',
  templateUrl: './kegiatanpesertarinci.component.html',
  styleUrls: ['./kegiatanpesertarinci.component.css']
})
export class KegiatanpesertarinciComponent implements OnInit {

  dataTampil:Object;
  constructor(private http:Http) { }

  ngOnInit() {
    this.http.get('http://localhost:8820/api/kegiatanpesertarinci?'+document.cookie)
    .subscribe((res:Response) => {
      this.dataTampil=res.json();
    })
  }

}

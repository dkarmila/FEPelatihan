import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-jejakpeserta',
  templateUrl: './jejakpeserta.component.html',
  styleUrls: ['./jejakpeserta.component.css']
})
export class JejakpesertaComponent implements OnInit {

  dataTampil:Object;
  id:string;
  //key:String;
  constructor(private http:Http) { }

  ngOnInit() {
    if(document.cookie == ''){
      window.location.href='./signin'
    }else{
      //this.key = window.localStorage.getItem('currentUser');
      this.http.get('http://localhost:8820/api/jejakpeserta?'+document.cookie)
      .subscribe((res:Response) => {
        this.dataTampil=res.json();
      })
    }
  }

  jejakPesertaDelete(id){
    this.http.delete('http://localhost:8820/api/jejakpeserta/'+id+'?'+document.cookie)
    .subscribe((res:Response) => {
      window.location.href='./jejakpeserta';
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jejakpesertaedit',
  templateUrl: './jejakpesertaedit.component.html',
  styleUrls: ['./jejakpesertaedit.component.css']
})
export class JejakpesertaeditComponent implements OnInit {

  id: string;
  dataEdit: Object;

  constructor(private http: Http, private route:ActivatedRoute) { 
    this.route.params.subscribe(params =>{
      this.id=params['id'];
    })
  }

  ngOnInit() {
    debugger;
    this.http.get('http://localhost:8820/api/jejakpeserta/'+this.id+'?'+document.cookie)
    .subscribe((res:Response) => {
      this.dataEdit=res.json();
    });
    debugger;
  }

  putJejakPeserta(id){
    this.http.put('http://localhost:8820/api/jejakpeserta/'+this.id+'?'+document.cookie, this.dataEdit)
    .subscribe((res: Response) => {
      window.location.href='./jejakpeserta';
    })
    //debugger;
  }

  jejakPesertaBack(){
    window.location.href="./jejakpeserta";
  }

}

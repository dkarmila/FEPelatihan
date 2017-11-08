import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IndexheaderComponent } from './indexheader/indexheader.component';
import { IndexsidebarComponent } from './indexsidebar/indexsidebar.component';
import { IndexfooterComponent } from './indexfooter/indexfooter.component';
import { JejakpesertaComponent } from './jejakpeserta/jejakpeserta.component';
import { KegiatanpesertaComponent } from './kegiatanpeserta/kegiatanpeserta.component';
import { KegiatanpesertarinciComponent } from './kegiatanpesertarinci/kegiatanpesertarinci.component';
import { JejakpesertadetailComponent } from './jejakpeserta/jejakpesertadetail/jejakpesertadetail.component';
import { JejakpesertaeditComponent } from './jejakpesertaedit/jejakpesertaedit.component';
import { JejakpesertaaddComponent } from './jejakpeserta/jejakpesertaadd/jejakpesertaadd.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { KegiatanpesertadetailComponent } from './kegiatanpeserta/kegiatanpesertadetail/kegiatanpesertadetail.component';
import { KegiatanpesertaeditComponent } from './kegiatanpeserta/kegiatanpesertaedit/kegiatanpesertaedit.component';
import { KegiatanpesertaaddComponent } from './kegiatanpeserta/kegiatanpesertaadd/kegiatanpesertaadd.component';
import { KegiatanpesertarincidetailComponent } from './kegiatanpesertarinci/kegiatanpesertarincidetail/kegiatanpesertarincidetail.component';
import { KegiatanpesertarincieditComponent } from './kegiatanpesertarinci/kegiatanpesertarinciedit/kegiatanpesertarinciedit.component';
import { KegiatanpesertarinciaddComponent } from './kegiatanpesertarinci/kegiatanpesertarinciadd/kegiatanpesertarinciadd.component';

let routes: Routes = [
  {path: 'signin', component: SigninComponent},
  {path: 'jejakpeserta', component: JejakpesertaComponent},
  {path: 'jejakpeserta/detail/:id', component: JejakpesertadetailComponent},
  {path: 'jejakpeserta/edit/:id', component: JejakpesertaeditComponent},
  {path: 'jejakpeserta/add', component: JejakpesertaaddComponent},
  {path: 'kegiatanpeserta', component: KegiatanpesertaComponent},
  {path: 'kegiatanpeserta/detail/:id', component:KegiatanpesertadetailComponent},
  {path: 'kegiatanpeserta/edit/:id', component:KegiatanpesertaeditComponent},
  {path: 'kegiatanpeserta/add', component:KegiatanpesertaaddComponent},
  {path: 'kegiatanpesertarinci', component: KegiatanpesertarinciComponent},
  {path: 'kegiatanpesertarinci/detail/:id', component: KegiatanpesertarincidetailComponent},
  {path: 'kegiatanpesertarinci/edit/:id', component: KegiatanpesertarincieditComponent},
  {path: 'kegiatanpesertarinci/add', component: KegiatanpesertarinciaddComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    IndexheaderComponent,
    IndexsidebarComponent,
    IndexfooterComponent,
    JejakpesertaComponent,
    KegiatanpesertaComponent,
    KegiatanpesertarinciComponent,
    JejakpesertadetailComponent,
    JejakpesertaeditComponent,
    JejakpesertaaddComponent,
    SigninComponent,
    HomeComponent,
    KegiatanpesertadetailComponent,
    KegiatanpesertaeditComponent,
    KegiatanpesertaaddComponent,
    KegiatanpesertarincidetailComponent,
    KegiatanpesertarincieditComponent,
    KegiatanpesertarinciaddComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //*==>Template var pulled out locally to component
  @ViewChild('sidenav') localSideNav;
  toggle(){
    this.localSideNav.toggle();
  } //*<==
  
  title = 'Angular Core Workshop';

  links = [
    {path:'/', icon:'home',title: 'Home'},
    {path:'/customers', icon:'face', title: 'Customer'},
    {path: '/projects', icon:'work', title:'Projects'}
  ]
}

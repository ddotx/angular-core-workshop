import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Core Workshop';

  private show = true;

  links = [
    { path: '/', icon: 'home', title: 'Home'},
    { path: '/customers', icon: 'face', title: 'Customer'},
    { path: '/projects', icon: 'work', title: 'Projects'},
  ]

  switch() {
    this.show =!this.show
  }
}

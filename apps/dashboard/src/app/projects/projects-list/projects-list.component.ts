import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '@workshop/core-data';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  //TODO: === Make Presentation Component
  @Input() projects: Project[];
  
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}

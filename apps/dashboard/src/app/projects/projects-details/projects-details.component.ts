import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '@workshop/core-data';

@Component({
  selector: 'app-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.scss']
})
export class ProjectsDetailsComponent {

  //! === Fix shared mutable state
  currentProject: Project;
  originalTitle;
  @Input() set project(value){
    //TODO - make a local copy (only value)
    this.currentProject = Object.assign({}, value)
    if(value) this.originalTitle = value.title;
  };
  //!===

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

}

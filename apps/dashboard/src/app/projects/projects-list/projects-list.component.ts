import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '@workshop/core-data';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent{

  //TODO: === Presentation Component (NO LOGIC)
  @Input() projects: Project[];
  // projects: Project[];
  readonly;

  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

}

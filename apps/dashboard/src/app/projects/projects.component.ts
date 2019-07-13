import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '@workshop/core-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  primaryColor = 'red';
  projects: Project[];
  selectedProject: Project;

  constructor(private projectsService: ProjectsService) {
    //TODO: this.localValue = this.remoteAsyncValue
  }

  ngOnInit() {
    //TODO: thing is fired when all of the data, bindings has been satisfied ==> Safest place to put something. 

    this.getProjects();
  }

  selectProject(project) {
    this.selectedProject = project;
  }

  getProjects(){
    this.projects = this.projectsService.all();
  }

  cancel() {
    this.selectProject(null);
  }
}

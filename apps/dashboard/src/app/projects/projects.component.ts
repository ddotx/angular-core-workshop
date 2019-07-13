import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '@workshop/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  primaryColor = 'red';
  //projects: Project[];
  //TODO == observable
  projects$
  selectedProject: Project;

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit() {
    this.getProjects();
  }

  selectProject(project) {
    this.selectedProject = project;
  }

  getProjects() {
    //this.projects = this.projectsService.all();
    //!==> Observable Stream
    // this.projectsService.all()
    // .subscribe(
    //   (result: any) => this.projects = result
    // );
    //TODO == Handling Observable with async filter
    this.projects$ = this.projectsService.all();
  }

  deleteProject(project) {
    this.projectsService.delete(project.id)
    .subscribe(result => this.getProjects());
  }

  cancel() {
    this.selectProject(null);
  }
}

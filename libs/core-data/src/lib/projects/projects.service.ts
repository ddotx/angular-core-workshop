import { Project } from '@workshop/core-data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  // private projects: Project[] = [
  //   {
  //     id: '1',
  //     title: 'REMOTE Project One',
  //     details: 'This is a sample project',
  //     percentComplete: 20,
  //     approved: false,
  //   },
  //   {
  //     id: '2',
  //     title: 'REMOTE Project Two',
  //     details: 'This is a sample project',
  //     percentComplete: 40,
  //     approved: false,
  //   },
  //   {
  //     id: '3',
  //     title: 'REMOTE Project Three',
  //     details: 'This is a sample project',
  //     percentComplete: 100,
  //     approved: true,
  //   }
  // ];

  model = 'projects'; //TODO==> fetch from server

  constructor(private httpClient: HttpClient) {}

  getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  create(project) {
    return this.httpClient.post(this.getUrl(), project);
  }

  update(project) {
    return this.httpClient.patch(this.getUrlForId(project.id), project);
  }

  delete(projectId) {
    return this.httpClient.delete(this.getUrlForId(projectId));
  }
}

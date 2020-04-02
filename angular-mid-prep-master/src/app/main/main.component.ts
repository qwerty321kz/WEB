import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../services/faculty.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  faculties = [];

  constructor(private facultyService: FacultyService) { }

  ngOnInit() {
    this.getFaculties();
  }

  getFaculties(): void {
    this.facultyService.getFaculties().subscribe(faculties => this.faculties = faculties);
  }

}

import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students = [];

  constructor(private studentService: StudentsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getStudentByFaculty();
  }

  getStudentByFaculty(): void {
  const id = +this.route.snapshot.paramMap.get('id');
    // tslint:disable-next-line:align
    this.studentService.getStudentsByFaculty(id).subscribe(res => this.students = res);
  }

}

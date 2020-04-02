import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { STUDENTS } from '../data/students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  getStudentsByFaculty(facultyId: number): Observable<any> {
    return of(STUDENTS.filter(student => student.faculty_id === facultyId));
  }
}

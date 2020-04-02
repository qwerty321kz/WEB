import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FACULTIES } from '../data/faculties';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor() { }

  getFaculties(): Observable<any> {
    return of(FACULTIES);
  }


}

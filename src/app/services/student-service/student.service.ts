import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService{

  constructor(private http: HttpClient) {}

  api: string = "http://localhost:8080/students"
  

  getAll(): Observable<any>{
    return this.http.get(this.api);
  }

  getByIdNum(idNum: string): Observable<any>{
    return this.http.get(this.api+"/"+idNum);
  }

  getById(Id: string): Observable<any>{
    return this.http.get(this.api+"/"+Id);
  }

  getByName(name: string): Observable<any>{
    return this.http.get(this.api+"/"+name);
  }

  getByCourseId(courseId: string): Observable<any>{
    return this.http.get(this.api+"/"+courseId);
  }

  postStudent(studentDTO: Student): Observable<any>{
    return this.http.post(this.api,studentDTO);
  }

  putStudent(studentDTO: Student): Observable<any>{
    return this.http.put(this.api,studentDTO);
  }

  deleteStudent(studentId: string): Observable<any>{
    return this.http.delete(this.api+"/"+studentId);
  }
}


import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookservieService {
  
  private bookurl="http://localhost:8082/book/v1/add";
  private bookurl2="http://localhost:8082/book/v1/get";
  constructor(private http:HttpClient) { }
  addbook(book:Book):Observable<Book> {
   
    return this.http.post<Book>(`${this.bookurl}`,book);
  }
  get(): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.bookurl2}`); 
  }
  
}

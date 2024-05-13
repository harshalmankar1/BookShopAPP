import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookservieService {
 
  
  private bookurl=  "http://localhost:8082/book/v1/add";
  private bookurl2= "http://localhost:8082/book/v1/get";
  private bookurl3="http://localhost:8082/book/v1/delete/"
  private bookurl4="http://localhost:8082/book/v1/edit/"
  private bookurl5=  "http://localhost:8082/book/v1/update";
  
  constructor(private http:HttpClient) { }
  addbook(book:Book):Observable<Book> {
   
    return this.http.post<Book>(`${this.bookurl}`,book);
  }
  get(): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.bookurl2}`); 
  }
  deletebooks(id:number)
    {
    return this.http.get(`${this.bookurl3}${id}`);
  }
  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.bookurl4}${id}`);
  }
  editbook(book:Book){
   
    return this.http.post(`${this.bookurl5}`,book);
  }
}
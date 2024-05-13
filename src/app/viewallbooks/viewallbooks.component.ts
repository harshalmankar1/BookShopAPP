import { Component } from '@angular/core';
import { Book } from '../book';
import { BookservieService } from '../bookservie.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewallbooks',
  templateUrl: './viewallbooks.component.html',
  styleUrls: ['./viewallbooks.component.css']
})
export class ViewallbooksComponent {
  books: Book[] = [];
  constructor(private bookservice: BookservieService,private router:Router) {

  }
  ngOnInit(): any {
    this.bookservice.get().subscribe(data => { this.books = data }, error => { console.log("error") })

  }

  deletebook(id: any,i:number) {
    console.log("data", id)
    alert("do you want to delete this book")
    this.bookservice.deletebooks(id)
      .subscribe(
        () => {
          alert(`Book with ID ${id} deleted successfully.`);
          // Optionally, perform any additional actions after deletion
          this.books.splice(i,1);
        },
        error => {
          console.error('Error deleting book:', error);
          // Optionally, handle error, display message, etc.
        }
      );

  }
  edit(id:any)
  {    
       this.router.navigate(['/editbook',id])
  }
}

import { Component } from '@angular/core';
import { Book } from '../book';

import { Router } from '@angular/router';
import { BookservieService } from '../bookservie.service';


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {
  book:Book=new Book();
  constructor(private bookservice:BookservieService,private router:Router)
  {

  }
  add(){
    console.log("data added successfully",this.book)
    this.bookservice.addbook(this.book).subscribe(data=>{console.log("data posted successfully")},error=>{console.log("error")})
    }
}
  
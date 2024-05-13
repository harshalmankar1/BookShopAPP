import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookservieService } from '../bookservie.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent  {
  book:Book=new Book();
  id: number=0;
  
  constructor(private bookservice:BookservieService,private router:ActivatedRoute,private r:Router)
  {

  }
  
  ngOnInit():void
  {
    this.id = this.router.snapshot.params['id'];
    console.log(this.id)
   
    this.bookservice.getBookById(this.id).subscribe( data => {
      this.book = data;
    });

  }
  
  update(){
    console.log("data added successfully",this.book)
    this.bookservice.editbook(this.book).subscribe(data=>{console.log("data updated successfully") ;alert("data added successfully");this.r.navigate(['/viewbook'])},error=>{console.log("error",error)})
    }
}

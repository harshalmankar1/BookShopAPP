import { Component } from '@angular/core';
import { Book } from '../book';
import { BookservieService } from '../bookservie.service';

@Component({
  selector: 'app-viewallbooks',
  templateUrl: './viewallbooks.component.html',
  styleUrls: ['./viewallbooks.component.css']
})
export class ViewallbooksComponent {
 books:Book[]=[];
constructor(private bookservice:BookservieService)
{

}
ngOnInit():any{
this.bookservice.get().subscribe(data=>{this.books=data},error=>{console.log("error")})

}
}

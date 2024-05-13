import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ViewallbooksComponent } from './viewallbooks/viewallbooks.component';
import { EditbookComponent } from './editbook/editbook.component';

const routes: Routes = [{path:"home",component:HomeComponent},
  {path:"addbook",component:AddbookComponent},
  {path:"viewbook",component:ViewallbooksComponent},
  {path:"editbook/:id",component:EditbookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ViewallbooksComponent } from './viewallbooks/viewallbooks.component';

const routes: Routes = [{path:"home",component:HomeComponent},
  {path:"addbook",component:AddbookComponent},
  {path:"viewbook",component:ViewallbooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

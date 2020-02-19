import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChaussuresListComponent } from './components/chaussures-list/chaussures-list.component';
import { ChaussureDetailsComponent } from './components/chaussure-details/chaussure-details.component';
import { AddChaussureFormComponent } from './components/add-chaussure-form/add-chaussure-form.component';
import { EditChaussureFormComponent } from './components/edit-chaussure-form/edit-chaussure-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/chaussures', pathMatch: 'full' },
  { path: 'chaussures/:id', component: ChaussureDetailsComponent },
  { path: 'chaussures', component: ChaussuresListComponent },
  { path: 'add-chaussure-form', component: AddChaussureFormComponent },
  { path: 'edit-chaussure-form/:id', component: EditChaussureFormComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

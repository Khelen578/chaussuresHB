import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChaussuresListComponent } from './components/chaussures-list/chaussures-list.component';
import { ChaussureDetailsComponent } from './components/chaussure-details/chaussure-details.component';
import { AddChaussureFormComponent } from './components/add-chaussure-form/add-chaussure-form.component';
import { EditChaussureFormComponent } from './components/edit-chaussure-form/edit-chaussure-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChaussureComponent } from './components/chaussure/chaussure.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatRadioModule } from '@angular/material/radio';
// For MDB Angular Free
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Toastr
import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AutofocusDirective } from './directive/autofocus.directive';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ChaussuresListComponent,
    ChaussureDetailsComponent,
    AddChaussureFormComponent,
    EditChaussureFormComponent,
    MenuComponent,
    ChaussureComponent,
    NotFoundComponent,
    AutofocusDirective,
    PokemonListComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    NavbarModule,
    MatRadioModule,
    MatIconModule,
    AppRoutingModule,
    WavesModule,
    FormsModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

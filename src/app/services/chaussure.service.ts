import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chaussure } from '../models/chaussure';
import { Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { catchError, retry } from 'rxjs/internal/operators';
import { SearchResult } from '../models/search-result';

@Injectable({
  providedIn: 'root'
})
export class ChaussureService {

  chaussures: Chaussure[];
  listTypes = ['Sport', 'Ville', 'Football'];
  listMarques = ['Adidas', 'Nike', 'Puma'];
  apiUrl = "http://localhost:3000/chaussure";
  foxApi = "http://93.29.84.137:3500/renard";

  constructor(private http: HttpClient, private toastr: ToastrService) { }


  showSuccess(titre: string, message: string) {
    this.toastr.success(message, titre);
  }

  showInfo(titre: string, message: string) {
    this.toastr.info(message, titre);
  }

  getTypes(): string[] {
    return this.listTypes;
  }

  getMarques(): string[] {
    return this.listMarques;
  }

  getRenard(): Observable<SearchResult> {
    return this.http.get<SearchResult>(this.foxApi).pipe(

    );
  }

  getChaussures(): Observable<Chaussure[]> {
    return this.http.get<Chaussure[]>(this.apiUrl).pipe(
      retry(1),
      catchError(this.handlError)
    );
  }

  getChaussureById(id: number): Observable<Chaussure> {
    return this.http.get<Chaussure>(this.apiUrl + '/' + id).pipe(
      retry(1),
      catchError(this.handlError)
    );
  }

  addChaussure(chaussure: Chaussure): Observable<Chaussure> {
    return this.http.post<Chaussure>(this.apiUrl, chaussure).pipe(
      catchError(this.handlError)
    );
  }

  editChaussure(chaussure: Chaussure): Observable<Chaussure> {
    return this.http.put<Chaussure>(this.apiUrl + '/' + chaussure.id, chaussure).pipe(
      retry(1),
      catchError(this.handlError)
    );
  }

  deleteChaussure(id: number): Observable<Chaussure> {
    return this.http.delete<Chaussure>(this.apiUrl + '/' + id).pipe(
      retry(1),
      catchError(this.handlError)
    );
  }

  handlError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }



}

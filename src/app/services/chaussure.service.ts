import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chaussure } from '../models/chaussure';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ChaussureService {

  chaussures: Chaussure[];
  listTypes = ['Sport', 'Ville', 'Football'];
  listMarques = ['Adidas', 'Nike', 'Puma'];
  apiUrl = "http://localhost:3000/chaussure";

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

  getChaussures(): Observable<Chaussure[]> {
    return this.http.get<Chaussure[]>(this.apiUrl).pipe(

    );
  }

  getChaussureById(id: number): Observable<Chaussure> {
    return this.http.get<Chaussure>(this.apiUrl + '/' + id).pipe(

    );
  }

  addChaussure(chaussure: Chaussure): Observable<Chaussure> {
    return this.http.post<Chaussure>(this.apiUrl, chaussure).pipe(

    );
  }

  editChaussure(chaussure: Chaussure): Observable<Chaussure> {
    return this.http.put<Chaussure>(this.apiUrl + '/' + chaussure.id, chaussure).pipe(

    );
  }

  deleteChaussure(id: number): Observable<Chaussure> {
    return this.http.delete<Chaussure>(this.apiUrl + '/' + id).pipe(

    );
  }





}

import { Component, OnInit } from '@angular/core';
import { ChaussureService } from 'src/app/services/chaussure.service';
import { Chaussure } from 'src/app/models/chaussure';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-chaussure-form',
  templateUrl: './add-chaussure-form.component.html',
  styleUrls: ['./add-chaussure-form.component.css']
})
export class AddChaussureFormComponent implements OnInit {

  listTypes: string[];
  listMarques: string[];
  FormChaussure: Chaussure;

  constructor(private chaussuresService: ChaussureService, private router: Router) { }

  ngOnInit() {
    this.listTypes = this.chaussuresService.getTypes();
    this.listMarques = this.chaussuresService.getMarques();
    this.FormChaussure = new Chaussure();
  }

  onSubmit() {
    this.FormChaussure.dateEntreStock = new Date();
    this.chaussuresService.addChaussure(this.FormChaussure).subscribe(response => {
      this.chaussuresService.showSuccess('Création terminée !', 'la chaussure "' + this.FormChaussure.nom +
        '" a bien été ajoutée à la liste');
      this.router.navigate(['chaussures/']);
    });
  }

}

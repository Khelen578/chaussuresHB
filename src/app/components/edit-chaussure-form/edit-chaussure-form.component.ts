import { Component, OnInit } from '@angular/core';
import { ChaussureService } from 'src/app/services/chaussure.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Chaussure } from 'src/app/models/chaussure';

@Component({
  selector: 'app-edit-chaussure-form',
  templateUrl: './edit-chaussure-form.component.html',
  styleUrls: ['./edit-chaussure-form.component.css']
})
export class EditChaussureFormComponent implements OnInit {

  listTypes: string[];
  listMarques: string[];
  FormChaussure: Chaussure;
  ChaussureOriginale: Chaussure;
  isLoading: boolean;

  constructor(private chaussuresService: ChaussureService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.isLoading = true;
    this.listTypes = this.chaussuresService.getTypes();
    this.listMarques = this.chaussuresService.getMarques();
    this.chaussuresService.getChaussureById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe((data: Chaussure) => {
      this.ChaussureOriginale = data;
      this.FormChaussure = data;
      this.isLoading = false;
    });
  }

  onSubmit() {
    this.chaussuresService.editChaussure(this.FormChaussure).subscribe(response => {
      this.chaussuresService.showInfo('Edition terminée !', 'la chaussure "' + this.FormChaussure.nom + '" a bien été modifiée');
      this.router.navigate(['chaussures/']);
    });
  }

}

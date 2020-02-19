import { Component, OnInit, TemplateRef } from '@angular/core';
import { Chaussure } from 'src/app/models/chaussure';
import { ChaussureService } from 'src/app/services/chaussure.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SearchResult } from 'src/app/models/search-result';

@Component({
  selector: 'app-chaussures-list',
  templateUrl: './chaussures-list.component.html',
  styleUrls: ['./chaussures-list.component.css']
})
export class ChaussuresListComponent implements OnInit {


  chaussures: Chaussure[];
  isLoading: boolean;
  renardLoading: boolean;
  renard: SearchResult;

  constructor(private chaussureService: ChaussureService, private modalService: BsModalService) { }

  ngOnInit() {
    this.renardLoading = true;
    this.isLoading = true;
    this.chaussureService.getChaussures().subscribe((data: Chaussure[]) => {
      this.chaussures = data;
      this.isLoading = false;
    });
    this.chaussureService.getRenard().subscribe((data: SearchResult) => {
      this.renard = data;
      this.renardLoading = false;
    });
    this.refreshRenard();
  }

  refreshRenard() {
    setInterval(function () {
      this.renardLoading = true;
      this.chaussureService.getRenard().subscribe((data: SearchResult) => {
        this.renard = data;
        console.log('hello');
        this.renardLoading = false;
      });
    }, 1000);
  }

  onDelete($event) {
    this.chaussureService.deleteChaussure($event.id).subscribe((response) => {
      this.chaussureService.getChaussures().subscribe((data: Chaussure[]) => {
        this.chaussureService.showSuccess('Suppression terminée !', 'la chaussure "' + $event.nom + '" a bien été supprimée');
        this.chaussures = data;
      });
    });
  }



}

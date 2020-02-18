import { Component, OnInit } from '@angular/core';
import { Chaussure } from 'src/app/models/chaussure';
import { ChaussureService } from 'src/app/services/chaussure.service';

@Component({
  selector: 'app-chaussures-list',
  templateUrl: './chaussures-list.component.html',
  styleUrls: ['./chaussures-list.component.css']
})
export class ChaussuresListComponent implements OnInit {

  chaussures: Chaussure[];
  isLoading: boolean;

  constructor(private chaussureService: ChaussureService) { }

  ngOnInit() {
    this.isLoading = true;
    this.chaussureService.getChaussures().subscribe((data: Chaussure[]) => {
      this.chaussures = data;
      this.isLoading = false;
    });
  }

  onDelete($event) {
    this.chaussureService.deleteChaussure($event.id).subscribe((response) => {
      this.chaussureService.getChaussures().subscribe((data: Chaussure[]) => {
        this.chaussureService.showSuccess('Suppression terminée !', 'la chaussure a bien été supprimée');
        this.chaussures = data;
      });
    });
  }

}

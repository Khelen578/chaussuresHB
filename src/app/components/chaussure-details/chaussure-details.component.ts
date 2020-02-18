import { Component, OnInit } from '@angular/core';
import { Chaussure } from 'src/app/models/chaussure';
import { ChaussureService } from 'src/app/services/chaussure.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chaussure-details',
  templateUrl: './chaussure-details.component.html',
  styleUrls: ['./chaussure-details.component.css']
})
export class ChaussureDetailsComponent implements OnInit {

  isLoading: boolean;
  chaussure: Chaussure;

  constructor(private chaussureService: ChaussureService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.isLoading = true;
    this.chaussureService.getChaussureById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe((data: Chaussure) => {
      this.chaussure = data;
      this.isLoading = false;
    });
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Chaussure } from 'src/app/models/chaussure';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-chaussure',
  templateUrl: './chaussure.component.html',
  styleUrls: ['./chaussure.component.css']
})
export class ChaussureComponent implements OnInit {

  @Input() chaussure: Chaussure;
  @Output() deleteEmmiter: EventEmitter<Chaussure> = new EventEmitter<Chaussure>();

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }
  ngOnInit() {
  }

  onDelete() {
    this.deleteEmmiter.emit(this.chaussure);
  }

}

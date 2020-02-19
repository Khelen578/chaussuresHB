import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { Chaussure } from 'src/app/models/chaussure';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-chaussure',
  templateUrl: './chaussure.component.html',
  styleUrls: ['./chaussure.component.css']
})
export class ChaussureComponent implements OnInit {

  @Input() chaussure: Chaussure;
  @Output() deleteEmmiter: EventEmitter<Chaussure> = new EventEmitter<Chaussure>();
  modalRef: BsModalRef;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private modalService: BsModalService) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }
  ngOnInit() {
  }

  onDelete() {
    this.deleteEmmiter.emit(this.chaussure);
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}

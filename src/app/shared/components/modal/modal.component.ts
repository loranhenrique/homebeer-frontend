import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { ModalModel } from '@shared/models/modal.model';
import { fadeInOut, slideInOut } from '@shared/components/modal/modal-animation';

@Component({
  selector: 'bra-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [slideInOut(), fadeInOut()],
})
export class ModalComponent implements OnDestroy {
  @Input() modal: ModalModel;

  @Output() clickActionFecharModal = new EventEmitter();

  constructor() {}

  ngOnDestroy(): void {
    if (this.modal.focoElementRef) {
      this.modal.focoElementRef.nativeElement.focus();
    }
  }

  public clickFecharModalHandler(): void {
    this.clickActionFecharModal.emit();
  }

  public getClassTipoModal(): unknown {
    return {
      'bra-modal--integral': this.verificaSeModalIntegral(),
      'bra-modal--parcial': this.verificaSeModalParcial(),
    };
  }

  public verificaSeModalIntegral(): boolean {
    return (this.modal && this.modal.tipo === 'integral') || this.modal.tipo === undefined;
  }

  public verificaSeModalParcial(): boolean {
    return this.modal && this.modal.tipo === 'parcial';
  }
}

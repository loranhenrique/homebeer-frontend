import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InputViewModel } from '@shared/models/input-view.model';

@Component({
  selector: 'bra-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @ViewChild('campoInput', { static: false }) campoInput: ElementRef;
  @Input() inputControl: FormControl;
  @Input() titulo: string;
  @Input() inputType: string;

  public viewModel: InputViewModel;

  constructor() {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  public clickInput(): void {
    this.campoInput.nativeElement.focus();
  }

  private construirViewModel(): void {
    this.viewModel = {
      inputControl: this.inputControl,
      titulo: this.titulo,
      inputType: this.inputType,
      textoCampoObrigatorio: 'Campo obrigatório',
    };
  }
}

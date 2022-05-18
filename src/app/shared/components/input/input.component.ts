import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InputViewModel } from '@shared/models/input-view.model';

@Component({
  selector: 'bra-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit, AfterViewInit {
  @ViewChild('campoInput', { static: false }) campoInput: ElementRef;
  @Input() inputControl: FormControl;
  @Input() titulo: string;
  @Input() inputType: string;

  public viewModel: InputViewModel;

  constructor() {}

  ngAfterViewInit(): void {
    this.validarCampoValido();
  }

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

  private validarCampoValido(): void {
    this.inputControl.valueChanges.subscribe(_ => {
      this.validarEmail();
      this.validarSenha();
      this.validarDataNascimento();
    });
  }

  private validarEmail(): void {
    if (!(this.titulo === 'CADASTRAR__LABEL--EMAIL')) return;

    if (this.inputControl.value.length < 1) {
      this.viewModel.textoCampoObrigatorio = 'Campo obrigatório';
      return;
    }

    if (!this.inputControl.valid) {
      this.viewModel.textoCampoObrigatorio = 'E-mail inválido.';
      return;
    }

    if (this.inputControl.valid) {
      this.viewModel.textoCampoObrigatorio = '';
      return;
    }
  }

  private validarSenha(): void {
    if (!(this.titulo === 'CADASTRAR__LABEL--SENHA')) return;

    if (this.inputControl.value.length < 1) {
      this.viewModel.textoCampoObrigatorio = 'Campo obrigatório';
      return;
    }

    if (!this.inputControl.valid) {
      this.viewModel.textoCampoObrigatorio =
        'Senha deve conter pelo menos 8 caracteres, com pelo menos uma letra e um número.';
      return;
    }

    if (this.inputControl.valid) {
      this.viewModel.textoCampoObrigatorio = '';
      return;
    }
  }

  private validarDataNascimento(): void {
    if (!(this.titulo === 'CADASTRAR__LABEL--DATA-NASCIMENTO')) return;

    if (this.inputControl.value.length < 1) {
      this.viewModel.textoCampoObrigatorio = 'Campo obrigatório';
      return;
    }

    if (!this.inputControl.valid) {
      this.viewModel.textoCampoObrigatorio = 'Data deve estar no formato DD/MM/YYYY';
      return;
    }

    if (this.inputControl.valid) {
      this.viewModel.textoCampoObrigatorio = '';
      return;
    }
  }
}

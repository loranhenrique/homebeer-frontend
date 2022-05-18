import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastrarViewModel } from '@perfil/models/cadastrar-view.model';
import { CadastrarModel } from '@perfil/models/cadastrar.model';

@Component({
  selector: 'bra-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss'],
})
export class CadastrarComponent implements OnInit, OnChanges {
  @Input() exibirErroCadastrar: string;
  @Output() clickAction = new EventEmitter<CadastrarModel>();

  public formGroup: FormGroup;
  public viewModel: CadastrarViewModel;

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.exibirErroCadastrar.firstChange) {
      this.construirViewModel();
    }
  }

  ngOnInit(): void {
    this.criarFormulario();
    this.construirViewModel();
    this.validarDigitacao();
  }

  public clickContinuarHandle(): void {
    if (!this.formGroup.valid) return;

    const email = this.viewModel.controlEmail.value;
    const senha = this.viewModel.controlSenha.value;
    const nomeCompleto = this.viewModel.controlNomeCompleto.value;
    const dataNascimento = this.viewModel.controlDataNascimento.value;

    this.clickAction.emit({
      email,
      senha,
      nomeCompleto,
      dataNascimento,
    });
  }

  private construirViewModel(): void {
    this.viewModel = {
      labelInpuEmail: 'CADASTRAR__LABEL--EMAIL',
      inputTypeTexto: 'text',
      controlEmail: this.formGroup.controls.email,

      labelInpuSenha: 'CADASTRAR__LABEL--SENHA',
      inputTypeSenha: 'password',
      controlSenha: this.formGroup.controls.senha,

      labelDataNascimento: 'CADASTRAR__LABEL--DATA-NASCIMENTO',
      controlDataNascimento: this.formGroup.controls.dataNascimento,

      labelNomeCompleto: 'CADASTRAR__LABEL--NOME-COMPLETO',
      controlNomeCompleto: this.formGroup.controls.nomeCompleto,

      textoBotao: 'CADASTRAR__LABEL--BOTAO',
      exibirErroCadastrar: this.exibirErroCadastrar,
    } as CadastrarViewModel;
  }

  private criarFormulario(): void {
    this.formGroup = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.pattern(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i)]),
      senha: this.formBuilder.control('', [Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
      dataNascimento: this.formBuilder.control('', [Validators.pattern(/^(\d{2})\/(\d{2})\/(\d{4})$/)]),
      nomeCompleto: this.formBuilder.control('', [Validators.required]),
    });
  }

  private validarDigitacao(): void {
    this.viewModel.controlEmail.valueChanges.subscribe(() => {
      this.viewModel.exibirErroCadastrar = '';
    });

    this.viewModel.controlSenha.valueChanges.subscribe(() => {
      this.viewModel.exibirErroCadastrar = '';
    });
  }
}

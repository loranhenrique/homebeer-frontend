import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginViewModel } from '@perfil/models/login-view.model';
import { LoginModel } from '@perfil/models/login.model';

@Component({
  selector: 'bra-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output() clickAction = new EventEmitter<LoginModel>();

  public formGroup: FormGroup;
  public viewModel: LoginViewModel;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.criarFormulario();
    this.construirViewModel();
  }

  public clickContinuarHandle(): void {
    const email = this.viewModel.controlEmail.value;
    const senha = this.viewModel.controlSenha.value;
    this.clickAction.emit({ email, senha });
  }

  private construirViewModel(): void {
    this.viewModel = {
      labelInpuEmail: 'LOGIN__LABEL--EMAIL',
      inputTypeEmail: 'text',
      controlEmail: this.formGroup.controls.email,
      labelInpuSenha: 'LOGIN__LABEL--SENHA',
      inputTypeSenha: 'password',
      controlSenha: this.formGroup.controls.senha,
      textoBotao: 'LOGIN__LABEL--BOTAO',
    } as LoginViewModel;
  }

  private criarFormulario(): void {
    this.formGroup = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required]),
      senha: this.formBuilder.control('', [Validators.required]),
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { MenuFooterModel } from '@shared/models/menu-footer.model';

@Component({
  selector: 'bra-parceiro-page',
  templateUrl: './parceiro-page.component.html',
  styleUrls: ['./parceiro-page.component.scss'],
})
export class ParceiroPageComponent implements OnInit {
  public viewModel: MenuFooterModel;

  constructor() {}

  ngOnInit(): void {
    this.viewModel = {
      selecionado: 'perfil',
    };
  }
}

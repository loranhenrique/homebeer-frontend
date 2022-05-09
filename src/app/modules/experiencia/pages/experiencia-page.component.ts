import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CardCervejaModel } from '@experiencia/models/card-cerveja.model';
import { ExperienciaViewModel } from '@experiencia/models/experiencia-view.model';
import { IdentificadorCervejaModel } from '@experiencia/models/identificador-cerveja.model';
import { BuscarParceiroModel } from '@service/models/buscar-parceiro.model';
import { ProdutoModel } from '@service/models/produto.model';

@Component({
  selector: 'app-experiencia-page',
  templateUrl: './experiencia-page.component.html',
  styleUrls: ['./experiencia-page.component.scss'],
})
export class ExperienciaPageComponent implements OnInit {
  private parceiro: BuscarParceiroModel;
  private produtos: ProdutoModel[];
  public viewModel: ExperienciaViewModel;

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.carregarDadosResolver();
    this.construirViewModel();
  }

  public clickHandle(identificadorCerveja: IdentificadorCervejaModel): void {
    console.log(identificadorCerveja);
  }

  private construirViewModel(): void {
    this.viewModel = {
      imagemParceiro: this.domSanitizer.bypassSecurityTrustStyle(`url(${this.parceiro.imagemLoja})`),
      nomeParceiro: this.parceiro.nomeLoja,
      descricaoParceiro: this.parceiro.descricaoLoja,
      cervejas: this.construirCervejas(),
    };
  }

  private construirCervejas(): CardCervejaModel[] {
    return this.produtos.map((produto: ProdutoModel) => ({
      id: produto.id,
      nome: produto.nome,
      descricao: produto.descricao,
      imagem: produto.imagem,
      precoUnitario: produto.preco,
      quantidade: 1,
    }));
  }

  private carregarDadosResolver(): void {
    this.parceiro = this.activatedRoute.snapshot.data.parceiro;
    this.produtos = this.activatedRoute.snapshot.data.produto;
  }
}

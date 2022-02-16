import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'bra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.setupTranslate();
  }

  private setupTranslate(): void {
    this.translateService.setDefaultLang('pt');
    this.translateService.use('pt');
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'bra-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss'],
})
export class MenuHeaderComponent {
  @Input() titulo: string;

  constructor() {}
}

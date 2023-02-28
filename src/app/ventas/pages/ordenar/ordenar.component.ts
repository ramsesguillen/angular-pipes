import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {
  enMayusculas: boolean = true;
  private _label: string = '';

  get label() {
    return this.enMayusculas
      ? 'Cambiar a minusculas'
      : 'Cambiar a mayusculas';
  }

  toggleMayusculas() {
    this.enMayusculas = !this.enMayusculas;
  }



}

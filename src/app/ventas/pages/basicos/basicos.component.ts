import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {


  nombreLower: string = 'Laura';
  nombreUpper: string = 'LAURA';
  nombreTitle: string = 'lAUrA';

  fecha: Date = new Date();
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Laura';
  genero: string = 'M';
  ivitacionMap = {
    'H': 'invitarlo',
    'M': 'invitarla',
  };

  // i18nPlural
  clientes: string[] = ['Laura', 'Jesus', 'Carlos'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos cliente esperando',
    'other': 'tenemos # clientes esperando'
  }


  cambiarPersona() {
    console.log(this.genero);
    if (this.genero === 'M')  {
      this.genero = 'H';
    } else if (this.genero === 'H') {
      this.genero = 'M';
    }

    console.log(this.genero);
  }

  eliminarCliente() {
    this.clientes.pop()
    console.log(this.clientes);
  }


  // keyvalue pipe
  persona = {
    nombre: 'Laura',
    edad: 25,
    pais: 'México'
  };

}

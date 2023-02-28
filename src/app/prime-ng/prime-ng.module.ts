import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import {MenubarModule} from 'primeng/menubar';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule
  ]
})
export class PrimeNgModule { }

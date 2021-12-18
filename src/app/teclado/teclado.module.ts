import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TecladoComponent } from './teclado/teclado.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';



@NgModule({
  declarations: [
    TecladoComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule
  ],exports:[TecladoComponent]
})
export class TecladoModule { }

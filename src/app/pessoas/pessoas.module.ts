import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputMaskModule } from 'primeng/inputmask';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';

import { SharedModule } from './../shared/shared.module';
import { PesquisaPessoasComponent } from './pesquisa-pessoas/pesquisa-pessoas.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoasRoutingModule } from './pessoas-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputMaskModule,

    SharedModule,
    PessoasRoutingModule
  ],
  declarations: [
    PessoaCadastroComponent,
    PesquisaPessoasComponent
  ],
  exports: []
})
export class PessoasModule { }
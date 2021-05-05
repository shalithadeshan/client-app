import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {MaterialModule} from '../shared/material/material.module';



@NgModule({
  declarations: [
    MainMenuComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class PrivateModule { }

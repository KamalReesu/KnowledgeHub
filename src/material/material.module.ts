import { NgModule } from '@angular/core';
import {MatButtonModule } from '@angular/material';

const MaterialModul=[ MatButtonModule]

@NgModule({

  imports: [ MaterialModul],
  exports:[ MaterialModul]
})
export class MaterialModule { }

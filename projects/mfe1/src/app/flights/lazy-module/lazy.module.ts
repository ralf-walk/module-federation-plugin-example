import { NgModule } from '@angular/core';

import { LazyComponent } from './lazy.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './lazy.routes';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LazyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(APP_ROUTES)
  ],
  bootstrap: [LazyComponent]
})
export class LazyModule {
}

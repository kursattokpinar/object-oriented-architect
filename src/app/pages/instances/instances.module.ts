import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstancesComponent } from './instances.component';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  declarations: [
    InstancesComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
  ],
})
export class InstancesModule { }

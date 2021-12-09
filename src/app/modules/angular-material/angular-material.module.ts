import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Material modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

const modulesToExport = [
  CommonModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatTabsModule,
  MatCardModule,
];

@NgModule({
  declarations: [],
  imports: modulesToExport,
  exports: modulesToExport,
})
export class AngularMaterialModule {}

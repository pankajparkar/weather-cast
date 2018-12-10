import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatMenuModule,
  MatRippleModule,
  MatSelectModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

const materialImports = [
  MatButtonModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatMenuModule,
  MatRippleModule,
  MatSelectModule,
  MatToolbarModule,
  MatTooltipModule
];

@NgModule({
  imports: [...materialImports],
  exports: [...materialImports]
})
export class CustomMaterialModule { }

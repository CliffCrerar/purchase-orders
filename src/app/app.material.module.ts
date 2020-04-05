import { MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY, MatMomentDateModule } from '@angular/material-moment-adapter';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';

const MatMods = {
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatMenuModule,
    MatDialogModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatInputModule,
    MatTooltipModule,
    MatChipsModule,
    MatTableModule,
    MatSnackBarModule,
    MatSelectModule
  ],
  providers: [
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY, useValue: { useUtc: true } }
  ],
};

@NgModule({
  imports: [CommonModule],
  exports: [...MatMods.imports],
  providers: [...MatMods.providers]
})
export class MaterialModulesClass { }

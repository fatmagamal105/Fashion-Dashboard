import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule} from '@angular/material/divider';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatBadgeModule} from '@angular/material/badge';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import{ MatToolbarModule } from '@angular/material/toolbar'

const MaterialComponent = [
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatPaginatorModule,
  MatTableModule,
  MatDialogModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
]

@NgModule({
  imports: [MaterialComponent],
  exports:[MaterialComponent]
})
export class MaterialModule { }

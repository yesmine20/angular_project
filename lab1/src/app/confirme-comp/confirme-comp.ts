import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirme-comp',
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './confirme-comp.html',
  styleUrl: './confirme-comp.css',
})
export class ConfirmComp {
  constructor(public dialogRef: MatDialogRef<ConfirmComp>) { }


}
//YELZM TEKHDEM

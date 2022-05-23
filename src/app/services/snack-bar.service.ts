import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(public snackBar: MatSnackBar, public zone: NgZone,) { }

  openSnack(message: string, buttonText: string) {
    this.zone.run(() => {
      this.snackBar.open(message, buttonText, {
        duration: 5000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
    });
}
}

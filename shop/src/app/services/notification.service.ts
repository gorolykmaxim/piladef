import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material";

const LONG: number = 5000;
const SHORT: number = 2000;

@Injectable()
export class NotificationService {

  constructor(private snackBar: MatSnackBar) {}

  notify(message: string) {
    this.snackBar.open(message, undefined, {duration: LONG});
  }

  notifyShort(message: string) {
    this.snackBar.open(message, undefined, {duration: SHORT});
  }
}

import {Component} from '@angular/core';
import {ModelService} from "./services/model.service";
import {Product} from "./services/domain.model";
import {NotificationService} from "./services/notification.service";
import {ErrorStateMatcher, MatDialog, MatDialogRef} from "@angular/material";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private modelService: ModelService, private notificationService: NotificationService,
                private dialog: MatDialog) {}

    get isAuthorized(): boolean {
        return this.modelService.isUserAuthorized();
    }

    get userName(): string {
        return this.modelService.currentUser.login;
    }

    get shoppingBasket(): Array<Product> {
        return this.modelService.currentUser.getBasketItems();
    }

    async createProduct() {
      const dialog: MatDialogRef<AddProductPromptComponent> = this.dialog.open(AddProductPromptComponent);
      const result: any = await dialog.afterClosed().toPromise();
      if (result !== undefined) {
        try {
          await this.modelService.createProduct(result.name, result.amount, result.price);
          this.notificationService.notify(`${result.name} product created`);
        } catch (error) {
          this.notificationService.notify(error.message);
        }
      }
    }

    async removeItemFromShoppingBasket(item: Product) {
      try {
        await this.modelService.removeItemFromBasket(item);
        this.notificationService.notify(`Removed ${item.name} from the shopping basket`);
      } catch (error) {
        this.notificationService.notify(error.message);
      }
    }
}


@Component({
  selector: 'app-add-product-prompt',
  templateUrl: './add.product.prompt.component.html',
  styleUrls: ['./add.product.prompt.component.css']
})
export class AddProductPromptComponent {
  name: string;
  amount: number;
  price: number;
  nameFormControl: FormControl;
  amountFormControl: FormControl;
  priceFormControl: FormControl;

  constructor(private dialog: MatDialogRef<AddProductPromptComponent>) {
    this.nameFormControl = new FormControl('', [Validators.required, Validators.minLength(1)]);
    this.priceFormControl = new FormControl('', [Validators.required, Validators.min(1)]);
    this.amountFormControl = new FormControl('', [Validators.required, Validators.min(1)]);
  }

  isNameValid(): boolean {
    return !this.nameFormControl.hasError('required') && !this.nameFormControl.hasError('minLength');
  }

  isPriceValid(): boolean {
    return !this.priceFormControl.hasError('required') && !this.priceFormControl.hasError('min');
  }

  isAmountValid(): boolean {
    return !this.amountFormControl.hasError('required') && !this.amountFormControl.hasError('min');
  }

  create() {
    if (this.isNameValid() && this.isPriceValid() && this.isAmountValid()) {
      this.dialog.close({name: this.name, amount: this.amount, price: this.price});
    }
  }

  close() {
    this.dialog.close()
  }
}

import {Component, OnInit} from "@angular/core";
import {ModelService} from "../services/model.service";
import {Product} from "../services/domain.model";
import {NotificationService} from "../services/notification.service";
import {MatDialogRef} from "@angular/material";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private modelService: ModelService, private notificationService: NotificationService) {}

  ngOnInit() {
    this.updateProductList();
  }

  async addToUsersBasket(product: Product) {
    try {
      await this.modelService.addItemToBasket(product);
      this.notificationService.notify(`Added ${product.name} to the shopping basket`);
    } catch (error) {
      this.notificationService.notifyShort(error.message);
    }
  }

  async updateCriteriaAndSearch(name: string, price: number, amount: number) {
    try {
      await this.modelService.updateProductsSearchCriteria(name, price, amount);
      await this.modelService.updateProductsList();
    } catch (error) {
      this.notificationService.notifyShort(error.message);
    }
  }

  async updateProductList() {
    try {
      await this.modelService.updateProductsList();
    } catch (error) {
      this.notificationService.notifyShort(error.message);
    }
  }

  async updateProductListCriteria(name: string, price: number, amount: number) {
    try {
      await this.modelService.updateProductsSearchCriteria(name, price, amount);
    } catch (error) {
      this.notificationService.notifyShort(error.message);
    }
  }

  set name(value: string) {
    this.updateCriteriaAndSearch(value, undefined, undefined);
  }

  get name(): string {
    return this.modelService.getSearchName();
  }

  set price(value: number) {
    this.updateProductListCriteria(undefined, value, undefined);
  }

  get price(): number {
    return this.modelService.getSearchPrice();
  }

  set amount(value: number) {
    this.updateProductListCriteria(undefined, undefined, value);
  }

  get amount(): number {
    return this.modelService.getSearchAmount();
  }

  get products(): Array<Product> {
    return this.modelService.products;
  }
}

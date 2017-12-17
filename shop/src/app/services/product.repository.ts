import {Api} from "./api";
import {Product} from "./domain.model";
import {HttpClient} from "@angular/common/http";


export class ProductRepository {
  private api: Api;
  constructor(httpClient: HttpClient) {
    this.api = new Api('/shop/product', httpClient);
  }

  async getOneProduct(id: string): Promise<Product> {
    const data: any = await this.api.getOne(id);
    return new Product(id, data['name'], data['amount'], data['price'])
  }

  async getProductsLike(query: any): Promise<Array<Product>> {
    const data: any = await this.api.getLike(query);
    const products: Array<Product> = [];
    for (let item of data) {
      products.push(new Product(item['_id']['$oid'], item['name'], item['amount'], item['price']));
    }
    return products;
  }

  async save(product: Product) {
    if (product.isNew()) {
      await this.api.create({name: product.name, amount: product.amount, price: product.price});
    } else {
      await this.api.update(product.id, {name: product.name, amount: product.amount, price: product.price});
    }
  }

  async remove(product: Product) {
    await this.api.delete(product);
  }
}

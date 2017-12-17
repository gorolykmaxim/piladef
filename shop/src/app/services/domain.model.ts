import {Md5} from "ts-md5/dist/md5";

export class Entity {
  constructor(public id: string) {}

  isNew(): boolean {
    return this.id === undefined;
  }
}


export class User extends Entity {
  login: string;
  password: string;
  private shoppingBasket: Array<Product>;

  constructor(id: string, login: string, password: string) {
    super(id);
    this.login = login;
    this.password = this.isNew() ? Md5.hashStr(password, false).toString() : password;
    this.shoppingBasket = [];
  }

  getBasketItems(): Array<Product> {
    return this.shoppingBasket;
  }

  addItemToBasket(item: Product) {
    this.shoppingBasket.push(item);
  }

  remoteItemFromBasket(item: Product) {
    const index: number = this.shoppingBasket.indexOf(item);
    this.shoppingBasket.splice(index, 1);
  }
}


export class Product extends Entity {
  constructor(id: string, public name: string, public amount: number, public price: number) {
    super(id);
  }
}

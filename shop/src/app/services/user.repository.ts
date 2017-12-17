import {Api} from "./api";
import {Product, User} from "./domain.model";
import {HttpClient} from "@angular/common/http";


export class UserRepository {
  private api: Api;
  constructor(httpClient: HttpClient) {
    this.api = new Api('/shop/user', httpClient);
  }

  async getOneUser(id: string): Promise<User> {
    const data: any = await this.api.getOne(id);
    return new User(id, data['login'], data['password']);
  }

  async getUsersLike(query: any): Promise<Array<User>> {
    const data: any = await this.api.getLike(query);
    const users: Array<User> = [];
    for (let item of data) {
      const user: User = new User(item['_id']['$oid'], item['login'], item['password']);
      for (let product of item['shoppingBasket']) {
        user.addItemToBasket(new Product(product['id'], product['name'], product['amount'], product['price']));
      }
      users.push(user);
    }
    return users;
  }

  async save(user: User) {
    if (user.isNew()) {
      await this.api.create({login: user.login, password: user.password, shoppingBasket: user.getBasketItems()});
    } else {
      await this.api.update(user.id, {login: user.login, password: user.password, shoppingBasket: user.getBasketItems()});
    }
  }

  async remove(user: User) {
    await this.api.delete(user);
  }
}

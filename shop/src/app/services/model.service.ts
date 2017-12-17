import { Injectable } from '@angular/core';
import {UserRepository} from "./user.repository";
import {ProductRepository} from "./product.repository";
import {Product, User} from "./domain.model";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class ModelService {
  private userRepository: UserRepository;
  private productRepository: ProductRepository;
  private user: User;
  private productsSearchCriteria: any;
  products: Array<Product>;

  constructor(httpClient: HttpClient) {
    this.userRepository = new UserRepository(httpClient);
    this.productRepository = new ProductRepository(httpClient);
    this.products = [];
    this.productsSearchCriteria = {name: {$regex: ''}};
  }

  get currentUser(): User {
    return this.user;
  }

  isUserAuthorized(): boolean {
    try {
      this.assertUserIsAuthorized();
      return true;
    } catch (error) {
      return false;
    }
  }

  async login(login: string, password: string) {
    const user: User = new User(undefined, login, password);
    const query: any = {login: user.login, password: user.password};
    const users: Array<User> = await this.userRepository.getUsersLike(query);
    if (users.length == 0) {
      throw new LoginFailedError();
    }
    this.user = users[0];
  }

  async register(login: string, password: string) {
    const user: User = new User(undefined, login, password);
    await this.userRepository.save(user);
  }

  async addItemToBasket(product: Product) {
    this.assertUserIsAuthorized();
    this.user.addItemToBasket(product);
    await this.productRepository.remove(product);
    await this.userRepository.save(this.user);
    await this.updateProductsList();
  }

  async removeItemFromBasket(product: Product) {
    this.assertUserIsAuthorized();
    this.user.remoteItemFromBasket(product);
    await this.userRepository.save(this.user);
    await this.createProduct(product.name, product.amount, product.price);
    await this.updateProductsList();
  }

  async createProduct(name: string, amount: number, price: number) {
    this.assertUserIsAuthorized();
    const product: Product = new Product(undefined, name, amount, price);
    await this.productRepository.save(product);
    await this.updateProductsList();
  }

  async updateProductsSearchCriteria(name: string, price: number, amount: number) {
    if (name !== undefined) {
      this.productsSearchCriteria.name.$regex = name;
    }
    if (price !== undefined) {
      this.productsSearchCriteria.price = price;
      if (price === null) {
        delete this.productsSearchCriteria.price;
      }
    }
    if (amount !== undefined) {
      this.productsSearchCriteria.amount = amount;
      if (amount === null) {
        delete this.productsSearchCriteria.amount;
      }
    }
  }

  getSearchName(): string {
    return this.productsSearchCriteria.name.$regex;
  }

  getSearchPrice(): number {
    return this.productsSearchCriteria.price;
  }

  getSearchAmount(): number {
    return this.productsSearchCriteria.amount;
  }

  async updateProductsList() {
    this.products = await this.productRepository.getProductsLike(this.productsSearchCriteria);
  }

  private assertUserIsAuthorized() {
    if (this.user === undefined) {
      throw new UnauthorizedActionError();
    }
  }
}


export class LoginFailedError extends Error {
  __proto__: Error;
  constructor() {
    const trueProto = new.target.prototype;
    super('Login or password are incorrect');
    this.__proto__ = trueProto;
  }
}


export class UnauthorizedActionError extends Error {
  __proto__: Error;
  constructor() {
    const trueProto = new.target.prototype;
    super('You need to log in first, in order to do this.');
    this.__proto__ = trueProto;
  }
}

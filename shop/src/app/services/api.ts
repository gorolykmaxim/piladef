import {HttpClient, HttpHeaders} from "@angular/common/http";


class Credentials {
  constructor(private username: string, private password: string) {}

  public toString(): string {
    return `Basic ${btoa(`${this.username}:${this.password}`)}`;
  }
}


class ApiHeaders extends HttpHeaders {
  constructor(username: string, password: string) {
    super();
    const credentials: Credentials = new Credentials(username, password);
    this.append('Authorization', credentials.toString());
  }
}


export class Api {
  private username: string = 'admin';
  private password: string = 'changeit';

  constructor(private url: string, private httpClient: HttpClient) {}

  async getOne(id: string): Promise<any> {
    return await this.httpClient.get(this.url + `/${id}`, this.createApiOptions()).toPromise();
  }

  async getLike(query: any): Promise<any> {
    const serializedQuery: string = JSON.stringify(query);
    const data: any = await this.httpClient.get(this.url + `?filter=${serializedQuery}`, this.createApiOptions()).toPromise();
    return data['_embedded'];
  }

  async create(record: any) {
    await this.httpClient.post(this.url, record, this.createApiOptions()).toPromise();
  }

  async update(id: string, record: any) {
    await this.httpClient.put(this.url + `/${id}`, record, this.createApiOptions()).toPromise();
  }

  async delete(record: any) {
    await this.httpClient.delete(this.url + `/${record.id}`, this.createApiOptions()).toPromise();
  }

  private createApiOptions(): any {
    return {headers: new ApiHeaders(this.username, this.password)};
  }
}

import { RESTDataSource } from 'apollo-datasource-rest';

export class AuthorAPI extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = 'http://localhost:4000/';
  }

  async getOneAuthor(id: number) {
    return this.get(`author/${id}`);
  }


}

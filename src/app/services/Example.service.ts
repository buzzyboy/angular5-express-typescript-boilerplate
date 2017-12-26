import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ExampleService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get('/api/example');
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../constant';
import {Configurations} from '../models';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) {
  }

  public addConfig(q: Configurations) {
    return this.http.post(`${API_URL}/configs`, q);
  }

  public getAll() {
    return this.http.get<Configurations[]>(`${API_URL}/configs`);
  }

  public deleteById(id: number) {
    return this.http.delete(`${API_URL}/configs/${id}`);
  }
}

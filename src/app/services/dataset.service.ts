import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })


export class DatasetsService {

  /** start http service client */
  constructor(private http: HttpClient) {
  }

  public async get_datasets(): Promise<any> {
    const response = await this.http.get(`http://127.0.0.1:8000/get_datasets.json`).toPromise();
    return response;
  }

}
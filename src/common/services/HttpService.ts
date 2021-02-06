import axios, { AxiosPromise } from 'axios';

export class HttpService {
  GET<R>(url: string): AxiosPromise<R> {
    return axios.get(url);
  }

  POST<T, R>(url: string, body: T): AxiosPromise<R> {
    return axios.post(url, body);
  }
}

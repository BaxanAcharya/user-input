import axios, { AxiosInstance, AxiosPromise } from 'axios';

import environment from '../../config/environment';
import { IGetArgs, IHttpService } from '../../interfaces/IRequest';


const apiUrl: string = environment.apiUrl as string;

export default class HttpClient<T extends AxiosPromise<any>> implements IHttpService<T> {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: apiUrl,
      responseType: 'json',
      withCredentials: false,
    });
  }

  get(args: IGetArgs):T{
      const headers: any={
          ...args.headers,
      };
      return this.instance.get(args.endpoint,{
          headers,
      }) as T;
  }

}
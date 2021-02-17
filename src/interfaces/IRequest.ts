export interface IGetArgs {
    endpoint: string;
    headers?: any;
  }
  
  
  export interface IHttpService<T> {
    get(args: IGetArgs): T;
  }
  
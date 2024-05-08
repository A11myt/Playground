export interface IPage {
    pageNumber: number;
    name: string;
  }
  
  export interface ICallback {
    (name: string): void;
  }
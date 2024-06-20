export interface IPage {
  pageNumber: number;
  name: string;
}

export interface ICallback {
  (name: string): void;
}

export interface IModal {
  number: number;
  name: string;
}

export interface PaginationParams {
  number: number;
  size: number;
}

export interface Pagination<T> {
  currentPage: number;
  pageSize: number;
  totalPages: number;
  content: T[];
}

export interface ResponseData {
  detail: string;
}

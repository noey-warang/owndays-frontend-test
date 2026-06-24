export interface ApiResponse<T> {
  success: boolean;
  message: string;
  total?: number;
  not_found: any[];
  data: T;
}
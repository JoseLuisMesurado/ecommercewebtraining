export interface IProductResponse {
  id?: string;
  categoryId: number
  name?: string;
  price?: number;
  stock?: number;
  inventoryStatus?: string;
  category?: string;
  thumbnail?: string;
  description?: string;
}

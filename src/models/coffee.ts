export default interface Coffee {
  id: string;
  imageURL: string | undefined;
  title: string;
  subTitle: string;
  price: number;
  rating: number;
  favorite: boolean;
  description?: string;
}

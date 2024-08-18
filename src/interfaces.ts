
export interface IDrinkDetails {
  category: string;
  imgUrl: string;
  tags: string[];
  glass: string;
  ingredients: {ingr: string; msr: string | null}[];
  name: string;
}

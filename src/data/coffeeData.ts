import CoffeeCategory from "../models/category";
import Coffee from "../models/coffee";

const categories: Array<CoffeeCategory> = new Array<CoffeeCategory>(
  {
    id: 1,
    categoryName: "Cappuccino",
  },
  {
    id: 2,
    categoryName: "Cold Brew",
  },
  {
    id: 3,
    categoryName: "Espresso",
  }
);

const coffeeData: Array<Coffee> = new Array<Coffee>(
  {
    id: "1",
    imageURL: "https://coffee.alexflipnote.dev/random",
    title: "Cappuccino",
    favorite: true,
    price: 5.12,
    subTitle: "without sugar",
    rating: 4.5,
    description: "Get three ice flavoured cappuccinos for the",
  },
  {
    id: "2",
    imageURL: "https://coffee.alexflipnote.dev/vIoCt3wSspk_coffee.jpg",
    title: "Espresso",
    favorite: true,
    price: 5.12,
    subTitle: "with cream",
    rating: 4.5,
    description: "Get three ice flavoured cappuccinos for the",
  },
  {
    id: "3",
    imageURL: "https://coffee.alexflipnote.dev/random",
    title: "Cappuccino",
    favorite: true,
    price: 5.12,
    subTitle: "with low fat milk",
    rating: 4.5,
    description: "Get three ice flavoured cappuccinos for the",
  },
  {
    id: "4",
    imageURL: "https://coffee.alexflipnote.dev/vIoCt3wSspk_coffee.jpg",
    title: "Cappuccino",
    favorite: true,
    price: 5.12,
    subTitle: "without sugar",
    rating: 4.5,
    description: "Get three ice flavoured cappuccinos for the",
  }
);

export const getCategories = (): Array<CoffeeCategory> => {
  return categories;
};

export const getCoffeeList = (): Array<Coffee> => {
  return coffeeData;
};

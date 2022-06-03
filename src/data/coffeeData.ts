import CoffeeCategory from "../models/category";
import Coffee from "../models/coffee";

const categories: Array<CoffeeCategory> = new Array<CoffeeCategory>({
        id: 1,
        categoryName: 'Cappacino',
        iconName: 'coffee'
    }, {
        id: 2,
        categoryName: 'Coca cola',
        iconName: 'food-fork-drink'
    }, {
        id: 3,
        categoryName: 'Espresso',
        iconName: 'coffee-maker'
    }
)

const coffeeData: Array<Coffee> = new Array<Coffee>({
    imageURL: 'https://coffee.alexflipnote.dev/random',
    title: 'Cappacino asdf sdf asdf',
    favorite: true,
    price: 5.12,
    subTitle: 'without sugar',
    rating: 4.5
}, {
    imageURL: 'https://coffee.alexflipnote.dev/vIoCt3wSspk_coffee.jpg',
    title: 'Espresso',
    favorite: true,
    price: 5.12,
    subTitle: 'with cream',
    rating: 4.5
}, {
    imageURL: 'https://coffee.alexflipnote.dev/random',
    title: 'Cappacino',
    favorite: true,
    price: 5.12,
    subTitle: 'without sugar',
    rating: 4.5,
}, {
    imageURL: 'https://coffee.alexflipnote.dev/vIoCt3wSspk_coffee.jpg',
    title: 'Cappacino',
    favorite: true,
    price: 5.12,
    subTitle: 'without sugar',
    rating: 4.5
})

export const getCategories = (): Array<CoffeeCategory> => {
    return categories
}


export const getCoffeeList = (): Array<Coffee> => {
    return coffeeData
}

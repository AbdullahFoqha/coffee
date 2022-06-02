import CoffeeCategory from "../models/category";
import Coffee from "../models/coffee";

const categories: Array<CoffeeCategory> = new Array<CoffeeCategory>({
        categoryName: 'Cappacino',
        iconName: 'coffee'
    }, {
        categoryName: 'Coca cola',
        iconName: 'food-fork-drink'
    }, {
        categoryName: 'Express',
        iconName: 'coffee-maker'
    }
)

const coffeeData: Array<Coffee> = new Array<Coffee>({
    imageURL: 'https://coffee.alexflipnote.dev/random',
    title: 'Cappacino',
    favorite: true,
    price: 5.12,
    subTitle: 'without sugar',
    rating: 4.5
}, {
    imageURL: 'https://coffee.alexflipnote.dev/vIoCt3wSspk_coffee.jpg',
    title: 'Cappacino',
    favorite: true,
    price: 5.12,
    subTitle: 'without sugar',
    rating: 4.5
}, {
    imageURL: 'https://coffee.alexflipnote.dev/random',
    title: 'Cappacino',
    favorite: true,
    price: 5.12,
    subTitle: 'without sugar',
    rating: 4.5
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

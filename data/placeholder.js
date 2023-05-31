import Category from '../models/category';
import Product from '../models/product';
import {Ionicons, MaterialIcons} from "@expo/vector-icons";


export const CATEGORIES = [
    new Category(
        1,
        "Ассорти",
        () => <MaterialIcons name="set-meal" size={40} color="black" />
    ),
    new Category(
        2,
        "Большие роллы",
        () => <MaterialIcons name="set-meal" size={40} color="black" />
    ),
    new Category(
        3,
        "Гункан суши",
        () => <MaterialIcons name="set-meal" size={40} color="black" />
    ),
    new Category(
        4,
        "Допы",
        () => <MaterialIcons name="set-meal" size={40} color="black" />
    ),
    new Category(
        5,
        "Жаренные роллы",
        () => <MaterialIcons name="set-meal" size={40} color="black" />
    ),
    new Category(
        6,
        "Маленькие роллы",
        () => <MaterialIcons name="set-meal" size={40} color="black" />
    ),
    new Category(
        7,
        "Нигири",
        () => <MaterialIcons name="set-meal" size={40} color="black" />
    ),
    new Category(
        8,
        "НОВИНКИ",
        () => <MaterialIcons name="set-meal" size={40} color="black" />
    ),
    new Category(
        9,
        "Пицца",
        () => <MaterialIcons name="set-meal" size={40} color="black" />
    ),
    new Category(
        10,
        "Салаты",
        () => <MaterialIcons name="set-meal" size={40} color="black" />
    ),
    new Category(
        11,
        "Супы",
        () => <MaterialIcons name="set-meal" size={40} color="black" />
    ),
];

export const PRODUCTS = [
    new Product(
        1,
        "Сет темпура (70шт.)",
        "сингапур темпура маки, осака темпура маки, эби темпура маки, сикай темпура маки, банзай маки, унаги темпура маки, roll 005, хаманиши маки, roll 004",
        11099,
        1,
        1,
        "https://www.thespruceeats.com/thmb/KKVYHEcAN6Jt7yvULfCB4r3ad30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sushi-5079606-hero-01-e5a0a26f194a49478f84e04193baaefa.jpg",
        true
    ),
    new Product(
        2,
        "Сет ассорти (70шт.)",
        "филадельфия маки, сейко маки, якудза маки, майами маки, roll 004, калифорния маки new, канада маки, хаманиши маки, сикай темпура маки",
        12099,
        2,
        1,
        "https://www.thespruceeats.com/thmb/KKVYHEcAN6Jt7yvULfCB4r3ad30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sushi-5079606-hero-01-e5a0a26f194a49478f84e04193baaefa.jpg",
        false
    ),
    new Product(
        3,
        "Сет запеченный (48шт.)",
        "якудза маки, лава маки, калифорния с угрем, roll 001, roll 002, roll 003",
        7049,
        2,
        1,
        "https://www.thespruceeats.com/thmb/KKVYHEcAN6Jt7yvULfCB4r3ad30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sushi-5079606-hero-01-e5a0a26f194a49478f84e04193baaefa.jpg",
        false
    ),
    new Product(
        4,
        "Самурай",
        "окинава маки, калифорния маки NEW, бонито маки, сикай темпура маки",
        4849,
        3,
        1,
        "https://www.thespruceeats.com/thmb/KKVYHEcAN6Jt7yvULfCB4r3ad30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sushi-5079606-hero-01-e5a0a26f194a49478f84e04193baaefa.jpg",
        true
    ),
    new Product(
        5,
        "Фуне",
        "Филадельфия гриль маки 4шт, Филадельфия маки 4шт, Калифорния маки 4 шт, Калифорния маки NEW 4шт",
        3299,
        3,
        1,
        "https://www.thespruceeats.com/thmb/KKVYHEcAN6Jt7yvULfCB4r3ad30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sushi-5079606-hero-01-e5a0a26f194a49478f84e04193baaefa.jpg",
        true
    )
]

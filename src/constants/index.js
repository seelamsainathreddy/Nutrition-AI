import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { artist1, artist2, bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];


export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const artists = [
    {
        thumbnail: thumbnailShoe1,
        artist: artist1,
    },
    {
        thumbnail: thumbnailShoe2,
        artist: artist2,
    }
];





export const statistics = [
    { value: '1k+', label: 'Artists' },
    { value: '500+', label: 'events' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free for artists",
        subtext: "Enjoy seamless onbording"
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "Working with the artists here was a game-changer for our brand!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "Amazing talent! I hired a designer for my album cover, and it exceeded expectations."
    }
];


export const footerLinks = [
    // {
    //     title: "Products",
    //     links: [
    //         { name: "Air Force 1", link: "/" },
    //         { name: "Air Max 1", link: "/" },
    //         { name: "Air Jordan 1", link: "/" },
    //         { name: "Air Force 2", link: "/" },
    //         { name: "Nike Waffle Racer", link: "/" },
    //         { name: "Nike Cortez", link: "/" },
    //     ],
    // },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@beatnik.com", link: "mailto:customer@beatnik.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    }
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

import { createSlice } from "@reduxjs/toolkit";


 const storeSlice = createSlice({
    name: 'state',
    initialState: {
        cart: false,
        cartArray: [{
            "id": 1,
            "slug": "yx1-earphones",
            "name": "YX1 Wireless Earphones",
            "number":3,
            "total": 4290,
            "shortName": "YX1",
            "image": {
                "mobile": "/images/product-yx1-earphones/mobile/image-product.jpg",
                "tablet": "/images/product-yx1-earphones/tablet/image-product.jpg",
                "desktop": "/images/product-yx1-earphones/desktop/image-product.jpg"
            },
            "cartImage": "/images/cart/image-yx1-earphones.jpg",
            "category": "earphones",
            "categoryImage": {
                "mobile": "/images/category-earphones/mobile/image-yx1-earphones.jpg",
                "tablet": "/images/category-earphones/tablet/image-yx1-earphones.jpg",
                "desktop": "/images/category-earphones/desktop/image-yx1-earphones.jpg"
            },
            "new": true,
            "price": 599,
            "description": "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
            "features": "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
            "includedItems": [
                {
                    "quantity": 2,
                    "item": "Earphone unit"
                },
                {
                    "quantity": 6,
                    "item": "Multi-size earplugs"
                },
                {
                    "quantity": 1,
                    "item": "User manual"
                },
                {
                    "quantity": 1,
                    "item": "USB-C charging cable"
                },
                {
                    "quantity": 1,
                    "item": "Travel pouch"
                }
            ],
            "gallery": {
                "first": {
                    "mobile": "/images/product-yx1-earphones/mobile/image-gallery-1.jpg",
                    "tablet": "/images/product-yx1-earphones/tablet/image-gallery-1.jpg",
                    "desktop": "/images/product-yx1-earphones/desktop/image-gallery-1.jpg"
                },
                "second": {
                    "mobile": "/images/product-yx1-earphones/mobile/image-gallery-2.jpg",
                    "tablet": "/images/product-yx1-earphones/tablet/image-gallery-2.jpg",
                    "desktop": "/images/product-yx1-earphones/desktop/image-gallery-2.jpg"
                },
                "third": {
                    "mobile": "/images/product-yx1-earphones/mobile/image-gallery-3.jpg",
                    "tablet": "/images/product-yx1-earphones/tablet/image-gallery-3.jpg",
                    "desktop": "/images/product-yx1-earphones/desktop/image-gallery-3.jpg"
                }
            },
            "others": [
                {
                    "slug": "headphones/xx99-mark-one-headphones",
                    "name": "XX99 Mark I",
                    "image": {
                        "mobile": "/images/shared/mobile/image-xx99-mark-one-headphones.jpg",
                        "tablet": "/images/shared/tablet/image-xx99-mark-one-headphones.jpg",
                        "desktop": "/images/shared/desktop/image-xx99-mark-one-headphones.jpg"
                    }
                },
                {
                    "slug": "headphones/xx59-headphones",
                    "name": "XX59",
                    "image": {
                        "mobile": "/images/shared/mobile/image-xx59-headphones.jpg",
                        "tablet": "/images/shared/tablet/image-xx59-headphones.jpg",
                        "desktop": "/images/shared/desktop/image-xx59-headphones.jpg"
                    }
                },
                {
                    "slug": "speakers/zx9-speaker",
                    "name": "ZX9 Speaker",
                    "image": {
                        "mobile": "/images/shared/mobile/image-zx9-speaker.jpg",
                        "tablet": "/images/shared/tablet/image-zx9-speaker.jpg",
                        "desktop": "/images/shared/desktop/image-zx9-speaker.jpg"
                    }
                }
            ]
        },
           ],
        cartTotal: 0,
        cartItemsNumber: 0,
        shipping: 50,
        vat: 0,
        grandTotal: 0,
        personalData:[],
    },
    reducers: {
        toggleCart: (state, action) => {
            state.cart = action.payload
        },
        updateCart: (state, action) => {
            state.cartArray =action.payload
        },
        updateCartTotal: (state, action) => {
            state.cartTotal = action.payload
        },
        updateCartItemsNumber: (state, action) => {
            state.cartItemsNumber = action.payload
        },
        updateVat: (state, action) => {
            state.vat = action.payload
        },
        updateGrandTotal: (state, action) => {
            state.grandTotal = action.payload
        },
        updatePersonalData: (state, action) => {
            state.personalData = action.payload
        }
    }
 })


 export default storeSlice.reducer;
export const { toggleCart, updateCart, updateCartTotal, updateCartItemsNumber, updateVat, updateGrandTotal, updatePersonalData } = storeSlice.actions
# Introduction

Nixo is a online shoe store inspired by Nike. It is built by me, Udit Kundu. 
Hello, I am a learner and I build this website as a practice fullstack prodject.
I am a self-taught fullstack developer.
https://nixo.vercel.app  [Product URL]

## How to setup this project locally
- Clone this repo
- Clone https://github.com/Udit8158/nixo-backend this nixo-backend repo to access the backend [But I think you will be faced some security issues]
- Add env variables:
                    1. NEXT_PUBLIC_API_TOKEN -> it will be your strapi api token
                    2. NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY -> it will be your stripe public token

### See the finished version here: https://nixo.vercel.app

Use this and give me some feedback or try to help to make this project better

## Features

Nixo has almost all mandatory features which is necessery to have for a ecommerce website in 2023.
- It has proper routing with productId
- It has proper category system
- It has product grid
- It has cart functionality 
- It has strpe payment integration

## Features will be added in the upcoming versions

- Authentication system
- Product wishlist section for every user
- Rating and comments in the product
- Sending confirmation mail after complete successful purchase of a product

## Tech used in this project

- Next Js -> Full frontend is built in Next JS, which is a React framework. This project used it's server-side rendering, routes management system and many more.
- Redux JS -> Used to manage global cart state.
- Tailwind CSS -> Used for styling this fully responsive website.
- React Carousel -> Used for displaying product carousel.
- Strapi -> For this initial version of website I use strapi headless CMS to manage my whole backend.
- Postgresql -> Used as a database.
- Stripe -> Used as payment integration api.

## Version History

- This frontend project started on 20/04/2023
- Version 1.0.0 released on 21/04/2023 [Initial version only frontend done ✅. No backend api interaction till now ❌.]
- Version 1.0.1 on 21/04/2023 [Fix a bug of adding checkout button on cart page ✅😅.]
- Version 2.0 on 24/04/2023 [Add backend and finish this project initially]

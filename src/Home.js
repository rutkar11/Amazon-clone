import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img 
          className="home_image"
         src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/PC_HERO_NTA_BOE_TODAY_2X_EN._CB574639543_.jpg"
        />
       <div className="home_row">
          <Product 
           id={1}
           title="Meditations: Discover the profound wisdom and guidance of Meditations"
           price={99}
           image="https://m.media-amazon.com/images/I/81ZeeOjADFL._SL1500_.jpg" 
           />
          <Product 
          id={2}
           title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones "
           price={499}
           image="https://m.media-amazon.com/images/I/91bYsX41DVL._SY466_.jpg" 
           />
          <Product 
          id={3}
           title="Apple iPhone 14 Pro (128 GB) - Gold A16 Bionic, the ultimate smartphone chip. "
           price={129999}
           image="https://m.media-amazon.com/images/I/71ZDY57yTQL._SX679_.jpg" 
           />
          <Product 
          id={4}
           title="Pixel 7a 5G (Sea, 8GB RAM, 128GB Storage)"
           price={42990}
           image="https://m.media-amazon.com/images/I/616Vqq0rQML._SX522_.jpg" 
           />
       </div>
         
       <div className="home_row">
       <Product 
           id={5}
           title="HP OMEN Gaming Laptop, AMD Ryzen 7 6800H, 8GB RTX 3070 Ti GPU, 16.1-inch (40.9 cm), QHD, IPS, 300 nits"
           price={114990}
           image="https://m.media-amazon.com/images/I/71PlJMFYA4L._SX679_.jpg" 
           />
         <Product 
           id={6}
           title="ASUS TUF Gaming F15 Laptop 15.6 FHD , Intel Core i5-10300H 10th Gen, GeForce GTX 1650 4GB GDDR6 Graphics"
           price={69990}
           image="https://m.media-amazon.com/images/I/81UWgnVKDBL._SY450_.jpg" 
           />   
        <Product 
           id={7}
           title="ASUS ROG Strix Scar 18 (2023) Gaming Laptop, 18” Nebula Display 16:10 QHD 240Hz/3ms"
           price={517772}
           image="https://m.media-amazon.com/images/I/819IGJqXvOL._SY450_.jpg" 
           /> 
           <Product 
           id={8}
           title="Lenovo IdeaPad Gaming 3 Intel Core i5-11320H 15.6 (39.62cm) FHD IPS 144Hz Gaming Laptop"
           price={49990}
           image="https://m.media-amazon.com/images/I/61H5nnM7ZBL._SX679_.jpg" 
           />  
        </div>

        <div className="home_row">
        <Product 
           id={9}
           title="Dennis Lingo Men's Solid Slim Fit Cotton Casual Shirt with Spread Collar & Full Sleeves"
           price={454}
           image="https://m.media-amazon.com/images/I/61XzMtVz3PL._UY606_.jpg" 
           />
        <Product 
           id={10}
           title="Levi's Men 511 Mid Rise Slim Fit Jeans"
           price={1449}
           image="https://m.media-amazon.com/images/I/51Wrr3Qi-VL._UX679_.jpg" 
           />
           <Product 
           id={11}
           title="AVVATAR WHEY PROTEIN | 1 KG | Unflavoured | 27g Protein | 29 Servings | Isolate & Concentrate Blend "
           price={3999}
           image="https://m.media-amazon.com/images/I/51iSW5pjjXL._SX679_.jpg" 
           /> 
           <Product 
           id={12}
           title="beatXP Gravity Digital Weight Machine For Body Weight with Thick Tempered Glass"
           price={399}
           image="https://m.media-amazon.com/images/I/61fYvx0CIWL._SX679_.jpg" 
           />
         </div>

      </div>
     </div>
  )
}

export default Home
import React from "react";
import {
  bestSellerFour,
  bestSellerOne,
  bestSellerThree,
  bestSellerTwo,
} from "../../../assets/images/index";
import Heading from "../Products/Heading";
import Product from "../Products/Product";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Flower Base"
          price="35.00"
          color="Blank and White"
          badge={true}
          des="A flower base, often referred to as a flower vase, is a container designed to hold and display cut flowers. These bases come in a wide range of materials, shapes, and sizes to complement different floral arrangements and interior styles."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="New Backpack"
          price="180.00"
          color="Gray"
          badge={false}
          des="Introducing our new backpack: sleek, durable, and designed with practical features like multiple compartments and ergonomic straps. Perfect for both daily commutes and travel adventures. Check out high-quality images and glowing reviews on social media. Don't miss out—explore exclusive offers and influencer highlights today!"
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Household materials"
          price="25.00"
          color="Mixed"
          badge={true}
          des="Discover our range of essential household materials, combining durability with stylish design. From versatile cleaning tools to practical storage solutions, our products are crafted to meet your everyday needs. Explore detailed images and customer reviews online. Take advantage of special promotions and seasonal offers to upgrade your home essentials today!"
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Travel Bag"
          price="220.00"
          color="Black"
          badge={false}
          des="Explore our new travel bag, designed for both style and functionality. With spacious compartments, durable materials, and ergonomic features, it’s perfect for any adventure. Check out our high-quality images and customer reviews online. Don't miss out—grab yours today with exclusive promotions and offers!"
        />
      </div>
    </div>
  );
};

export default BestSellers;

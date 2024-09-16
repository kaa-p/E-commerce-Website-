import React from "react";
import Slider from "react-slick";
import {
  newArrFour,
  newArrOne,
  newArrThree,
  newArrTwo,
} from "../../../assets/images/index";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="Round Table Clock"
            price="44.00"
            color="Black"
            badge={true}
            des="Introducing our elegant round table clock, a timeless addition to any space. Crafted with precision, it features a classic round design, clear numerals, and a refined finish that complements both modern and traditional decor."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Smart Watch"
            price="250.00"
            color="Black"
            badge={true}
            des="Upgrade with our sleek smartwatch, featuring fitness tracking, notifications, and seamless connectivity. Explore detailed specs and high-quality images online. Take advantage of exclusive promotions and enhance your daily routine today!"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="cloth Basket"
            price="80.00"
            color="Mixed"
            badge={true}
            des="Organize effortlessly with our stylish cloth basket, designed for durability and versatility. Ideal for laundry, storage, or decor, it combines practical function with a chic look."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Funny toys for babies"
            price="60.00"
            color="Mixed"
            badge={false}
            des="Brighten your baby’s day with our collection of funny toys, designed to entertain and delight. With playful designs and engaging sounds, these toys spark joy and curiosity."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrTwo}
            productName="Funny toys for babies"
            price="60.00"
            color="Mixed"
            badge={false}
            des="Brighten your baby’s day with our collection of funny toys, designed to entertain and delight. With playful designs and engaging sounds, these toys spark joy and curiosity."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;

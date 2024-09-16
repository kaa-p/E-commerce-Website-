import React from "react";
import {
  spfFour,
  spfOne,
  spfThree,
  spfTwo,
} from "../../../assets/images/index";
import Heading from "../Products/Heading";
import Product from "../Products/Product";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="Cap for Boys"
          price="35.00"
          color="Blank and White"
          badge={true}
          des="Discover our stylish cap for boys, featuring a comfortable fit and adjustable strap. Explore vibrant designs online and enjoy special offers today!"
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="Tea Table"
          price="180.00"
          color="Gray"
          badge={true}
          des="Elevate your space with our elegant tea table, designed for both style and functionality. Explore our selection online to find the perfect addition to your home, with special offers available now!"
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="Headphones"
          price="25.00"
          color="Mixed"
          badge={true}
          des="Experience superior sound with our premium headphones, offering comfort and exceptional audio quality. Discover the latest models and special offers online today!"
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="Sun glasses"
          price="220.00"
          color="Black"
          badge={true}
          des="Enhance your style with our chic sunglasses, offering both UV protection and a trendy look. Explore our collection online and enjoy exclusive deals today!"
        />
      </div>
    </div>
  );
};

export default SpecialOffers;

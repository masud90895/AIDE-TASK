import React from "react";
import Marquee from "react-fast-marquee";

const News = () => {
  const news = [
    "শুধু আজকের জন্য তেল পাচ্ছেন ২০% পর্যন্ত ছাড়",
    "শীতকালীন সকল সবজির উপর পেয়ে যাচ্ছেন ১২% পর্যন্ত ছাড়",
    "নতুন গ্রহকদের জন্য রয়েছে ৫০% ছাড়",
  ];
  console.log(news);
  return (
    <div className="flex gap-3 mb-3">
      <div className="md:w-[120px] w-[150px] bg-red-600 text-white text-lg md:p-1 rounded-r-3xl">
        Update Offer
      </div>
       
          <Marquee gradient={false}>
          {news.map((item, index) =>  <h1 key={index}  className="ml-10">{item}</h1>)}
           
          </Marquee>
        
    </div>
  );
};

export default News;

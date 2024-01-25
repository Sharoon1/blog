'use client'
import Image from "next/image";
import React, { Component } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import Card from "./card/page";
import SignUp from "./signUp/page";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
 
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2
  };
  return (
   <>
   <div className='my-10 space-y-5'>
<div className='text-center text-3xl font-bold'><h1>A few words about this blog</h1><h1>platform,Ghost and how this</h1><h1>site was made</h1></div>
<div className='text-xs text-center'><h1>Why Ghost (& Figma) instead of Medium, WirdPress</h1><h1>or other options?</h1></div>
    </div>
    {/* react slink slider */}
    <Slider {...settings}>
    <div >
      <Image src="/kajetan-daroch-0fbvVEthY4o-unsplash.jpg" width='1366' height='200' style={{height:'550px'}}  alt="Car Image"/>
    </div>
    <div >
      <Image src="/kajetan-daroch-HkvkOYbmGVc-unsplash.jpg" width='1366' height='200' style={{height:'550px'}}  alt="Car Image"/>
    </div>
    </Slider>
    <div className="w-full flex justify-center">
      <div className="w-2/4">

      <div className="my-10"><h1 className="border-4 w-full  border-black "></h1></div>
     <div className="flex justify-between">
      <div className="gap-4 flex items-center">
<div>
  <Image src='/download (3).jpeg' width='50' height='30'  className=" rounded-full" alt="My pic" />
</div>
<div><h1 className="font-bold">Bill Gates</h1>
<h1>Apr 15, 1987 - 4 min</h1></div>
     </div>
     <div className="flex gap-x-2">
   <p className="border p-2 px-4 h-8 shadow-md hover:bg-slate-200"><FaFacebook /></p>  
     <p className="border p-2 px-4 shadow-md  hover:bg-slate-200 h-8"><FaTwitter /></p>

     </div>
      </div>
      <div   >
        <p className="my-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. 

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus. </p>
      <h1 className="font-bold text-3xl">Next on the pipeline</h1>
      <p className="my-8">Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
<p>
Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. </p>
      </div>
      <div className="my-10">
        <figure>
        <Image src='/images (11).jpeg' width='700' height='100' alt="pic" />
        </figure>
<figcaption className="text-center text-xs"><p>Image caption centered this way and I'll make this a bit longer </p>
<p>to indicate the amount of line-height.</p></figcaption>
      </div>
<div className="mb-10"><p className="mb-10">Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. </p>
<p>In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo lacinia, auctor nisl et, consequat ante. Donec sit amet nisi arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. Nulla non volutpat leo.</p></div>
     <div>
      <h1>A list looks like this:</h1>
      <div style={{ listStyleType: 'lower-roman', marginLeft: '20px' }}>
    <div>1. First item in the list</div>
    <div>2. Second item in the list lorem ipsum dolor sit amet nunc felis <br /> &nbsp; &nbsp; dolor lorem ipsum sit </div>
    <div>3. Third item in the list</div>
  </div>
     <div>
      <p className="mb-10">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. </p>
    <p className="text-sm">Thanks for reading</p>
    <p className="text-xs">Sharoon Sarfraz</p>
     </div>
     <div className="flex justify-center my-10">
      <p className="border px-20 md:px-40 py-2  shadow-md hover:bg-slate-200 text-center" > <FaFacebook/></p>
      <p className="border px-20 md:px-40 py-2   shadow-md hover:bg-slate-200"><FaTwitter/></p>
     </div>
     <div>
      <p>Tags: product design, culture</p>
      <p className="border-dotted"></p>
     </div>
     <div className="flex my-10 mb-20 justify-between">
      <div className="gap-4 flex items-center">
<div>
  <Image src='/download (3).jpeg' width='150' height='30'  className=" rounded-full" alt="My pic" />
</div>
<div><h1 className="font-bold"><b>Mika Matikainen</b> is a Design Founder & Advisor, Berlin School of Creative Leadership Executive MBA participant, Zippie advisor, Wolt co-founder, and Nordic Rose stakeholder.  </h1>
</div> 
     </div>
      </div>
     </div>
     <div className="flex mb-10 text-center">
<h1 className="border-b-2 mb-5 border-black flex-1 "></h1>
<span><Image  src='/eye-transformed-removebg-preview.png' alt='eye image' width='70'height='50'/></span>
<h1 className="border-b-2 mb-5  border-black flex-1 "></h1>
     </div>
      </div>
    </div>
    <div>
      <h1 className="text-4xl font-bold text-center mb-10">What to read next</h1>
      <Card/>
      <SignUp/>
     </div>
   </>
  );
}

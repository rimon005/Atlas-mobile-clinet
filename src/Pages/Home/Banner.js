import React from 'react';
import img1 from '../../assets/pexels-jess-bailey-designs-788946 (1).jpg'
import img2 from '../../assets/pexels-cottonbro-studio-5083490.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="carousel w-full py-16">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img alt='' src={img1} className="w-full rounded-xl" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-white text-5xl font-bold banner-heading'>
                        SELL YOUR SMART  <br />
                        <span className='mr-2' style={{color:'#00A4CF'}}>PHONE FOR</span>
                         QUICK CASH
                    </h1>
                </div>
                <div className="w-1/2 absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                    <p className='text-xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                </div>
                <div className="w-1/2 absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4">
                    <button className="btn btn-primary rounded-none mr-5 border-none "  style={{background:'#00A4CF'}}>Buy Now</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-primary  btn-circle border-none"  style={{background:'#00A4CF'}}>❮</a>
                    <a href="#slide2" className="btn btn-primary btn-circle border-none"  style={{background:'#00A4CF'}}>❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img alt='' src={img2} className="w-full rounded-xl" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-white text-5xl font-bold banner-heading'>
                        SELL YOUR SMART  <br />
                        <span className='mr-2' style={{color:'#00A4CF'}}>PHONE FOR</span>QUICK CASH
                    </h1>
                </div>
                <div className="w-1/2 absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                    <p className='text-xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                </div>
                <div className="w-1/2 absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4">
                    <button className="btn  rounded-none mr-5 border-none" style={{background:'#00A4CF'}}>Buy Now</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-primary btn-circle border-none"  style={{background:'#00A4CF'}}>❮</a>
                    <a href="#slide1" className="btn btn-primary btn-circle border-none"  style={{background:'#00A4CF'}}>❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
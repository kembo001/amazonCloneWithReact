import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='homeImage' src='https://m.media-amazon.com/images/I/61K8Nn7dSNL._SX1500_.jpg' alt=''/>

            <div className='homeRow'>

                <Product title= "OBSBOT Tiny PTZ 4K Webcam" 
                price= {228.99} 
                image='https://m.media-amazon.com/images/I/51ywbwEdrIL._AC_SX679_.jpg'
                rating={4}/>
                
                <Product title= "Sigma 16mm f/1.4 DC DN Contemporary Lens for Sony E (402965)" 
                price= {358.81} 
                image='https://m.media-amazon.com/images/I/61ClARj6CiL._AC_SX679_.jpg'
                rating={5}/>
                
            </div>
            <div className='homeRow'>
            <Product title= "Amazon Basics Small Digital Alarm Clock with LED Display, Nightlight and Battery Backup - 4.5 x 3.5 x 2.4 Inches" 
                price= {12.62} 
                image='https://m.media-amazon.com/images/I/61j17FjPhtL._AC_SX679_.jpg'
                rating={4}/>
                
                <Product title= "Amazon Basics Mesh, Mid-Back, Adjustable, Swivel Office Desk Chair with Armrests, Black" 
                price= {76.98} 
                image='https://m.media-amazon.com/images/I/91vH3ZqS2sL._AC_SX679_.jpg'
                rating={4}/>
                
                <Product title= "USB Wall Charger, Surge Protector, QINLIANF 5 Outlet Extender with 4 USB Charging Ports ( 4.8A Total) 3-Sided 1680J Power Strip Multi Plug Outlets Wall Adapter Spaced for Home Travel Office (3U1C)" 
                price= {16.98} 
                image='https://m.media-amazon.com/images/I/61Hh-YlfJOL._AC_SX679_.jpg'
                rating={3}/>
            </div>
            <div className='homeRow'>
            <Product title= "Premier Protein Shake 30g Protein 1g Sugar 24 Vitamins Minerals Nutrients to Support Immune Health, Chocolate, 11.5 Fl Oz (Pack of 12)" 
                price= {23.74} 
                image='https://m.media-amazon.com/images/I/719eDVmYeYL._AC_SX679_PIbundle-12,TopRight,0,0_SH20_.jpg'
                rating={5}/>
            </div>
        </div>  
    </div>
  )
}

export default Home
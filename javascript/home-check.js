import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
            <div className="home__row">
                <Product
                title="The lean startup"
                price={29.99}
                image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"
                rating={5} 
                />
                 <Product
                 title="pTron Bassbuds in-Ear True Wireless Bluetooth 5.0 Headphones (Black)"
                 price={499.99}
                 image="https://m.media-amazon.com/images/I/41ImsZy3u5L.__AC_SY200_.jpg"
                 rating={4} 
                 />
                 <Product
                 title="New Apple iPhone 12 Pro (256GB) - (Graphite)"
                 price={1,279.99}
                 image="https://m.media-amazon.com/images/I/71YlH-4MUQL._AC_UY218_.jpg"
                 rating={5} 
                 />
                 <Product
                 title="OnePlus Bullets Wireless Z in-Ear Bluetooth Earphones with Mic (Black)"
                 price={1,999.99}
                 image="https://m.media-amazon.com/images/I/616bhfyXimL._AC_UY218_.jpg"
                 rating={4} 
                 />
            </div>
            <div className="home__row">
                <Product
                title="OnePlus Nord 5G (Gray Onyx, 8GB RAM, 128GB Storage)"
                price={499.99}
                image="https://m.media-amazon.com/images/I/71gag816F7L._AC_UY218_.jpg"
                rating={5} 
                />
                <Product 
                title="Samsung Galaxy M51 (Electric Blue, 6GB RAM, 128GB Storage)"
                price={499.99}
                image="https://m.media-amazon.com/images/I/710weRkP-nL._AC_UY218_.jpg"
                rating={5} 
                />
                <Product 
                title="Zinq 2A Single Port Mobile Charger with 1Mtr USB Cable Included (White)"
                price={199.99}
                image="https://m.media-amazon.com/images/I/518eOCL8nPL._AC_UL320_.jpg"
                rating={3} 
                />
                <Product 
                title="oraimo firefly-2s 5.0v/2.4a dual usb fast wall charger and micro-usb cable with multi-protection- Black"
                price={99.99}
                image="https://m.media-amazon.com/images/I/51PU2R0hdXL._AC_UL320_.jpg"
                rating={5} 
                />
            </div>
            <div className="home__row">
            <Product 
                title="Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5121 x 1440"
                price={1094.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />                
            </div>
            <div className="home__row">
            <Product 
                title="Norton 360 Premium 2021 – Antivirus software for 10 Devices with Auto Renewal - Includes VPN, PC Cloud Backup & Dark Web Monitoring"
                price={220.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51a2hHhvyuL.jpg"
                />
                <Product 
                title="PlayStation 4 Slim 1TB Console Brand: PlayStation"
                price={2990.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/31qwualUaLL.jpg"
                />
                <Product 
                title="UNEN MFi Certified 5Pack[3/3/6/6/10ft] Nylon Braided iPhone Charger Lightning Cable Fast Charging & Syncing Long Cord"
                price={90.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51i6vc8DppL.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                title="Vega Crux Half Face Helmet (Black, M)"
                price={99.99}
                image="https://images-eu.ssl-images-amazon.com/images/I/31NAQirJ+sL._AC_SX184_.jpg"
                rating={2} 
                />
                <Product
                title="Lenovo Legion Y540 9th Gen Intel Core i5 15.6-inch Full HD Gaming Laptop"
                price={499.99}
                image="https://m.media-amazon.com/images/I/71zm3gbS9SL._AC_SX480_SY360_.jpg"
                rating={5} 
                />
                <Product 
                title="Acer Nitro 5 Intel Core i7 10750H 15.6 FHD IPS 144Hz Display Thin and Light Gaming...
"
                price={9009.99}
                image="https://images-na.ssl-images-amazon.com/images/I/61gv6ERzCBL._SL1029_.jpg"
                rating={5} 
                />
                <Product 
                title="Redmi 9 Power (Blazing Blue, 4GB RAM, 64GB Storage) - 6000mAh Battery | 48MP Quad Camera"
                price={799.99}
                image="https://m.media-amazon.com/images/I/41+aHRW9EqL.jpg"
                rating={4} 
                />
            </div>
            <div className="home__row">
                <Product 
                title="Roku Ultra 2020 | Streaming Media Player HD/4K/HDR/Dolby Vision with Dolby Atmos, Bluetooth Streaming, and Roku Voice Remote with Headphone Jack and Personal Shortcuts"
                price={1094.99}
                rating={4}
                image="https://m.media-amazon.com/images/I/81Jc5Hf41JL._AC_UY218_.jpg"
                />
                <Product 
                title="Sabrent 4-Port USB 2.0 Hub with Individual LED lit Power Switches (HB-UMLS)"
                price={10.99}
                rating={4}
                image="https://m.media-amazon.com/images/I/71igbmDJwDL._AC_UY218_.jpg"
                />
            </div>
            </div>
        </div>
    )
}

export default Home

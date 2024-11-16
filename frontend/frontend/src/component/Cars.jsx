import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from './Cards';

function cars() {
    const filterData = list.filter((data) => data.category === "Best");
    // console.log(filterData);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ],
    };
    
  return (<>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
      <h1 className=" font-bold text-xl pb-2"> Our Best Cars</h1>
    <p>Mahindra's best cars include the XUV700 and Scorpio-N for their advanced technology,
         powerful performance, and premium features, making them top picks in the SUV segment. The rugged
          Thar and reliable Bolero are ideal for off-road enthusiasts and rural terrains, showcasing Mahindra's versatility.</p>
      </div>
      
     
    
    <div className="mt-9">
    <Slider {...settings}>
        {filterData.map((item)=>(
            <Cards item={item} key={item.id}/>
        ) )}
        
      </Slider>
    </div>
    </div>
    </>
  )
}

export default cars;

import React, { useState, useEffect } from 'react';
import '../../assets/styles/App.scss';
import Header from '../components/Header';
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import useInitialState from "../hooks/useInitialState";

const API = 'http://localhost:3000/initalState';
const App =  () => {
  const videos = useInitialState(API);
  return (
   <div className="App">
     <Header />
     <Search />

       {/*{videos.myList.length > 0 &&*/}
       {/*  <Categories title='Mi lista'>*/}
       {/*    <Carousel>*/}
       {/*      <CarouselItem key={item.id} {...item} />*/}
       {/*    </Carousel>*/}
       {/*  </Categories>*/}
       {/*}*/}

     <Categories title='Tendencias' />
     <Carousel>
       {videos.trends.map( item =>
          <CarouselItem key={item.id} {...item} />
       )}
     </Carousel>
     <Categories title='Originales de platzi video' />
     <Carousel>
       {videos.originals.map( item =>
          <CarouselItem key={item.id} {...item} />
       )}
     </Carousel>
     <Footer />
   </div>
  );
};
export default App;

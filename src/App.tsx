import React from 'react';
import Catalog from './Components/Catalog';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';
import ReachUs from './Components/ReachUs';
import { NoticeBoard } from './Components/Shared/NoticeBoard';
import NoticeBoardImage1 from './Assets/Images/NoticeBoard1.png'
function App() {
  return (
      <>
      <Header/>
      <Hero/>
      <Catalog/>
      <NoticeBoard title={(
        <h1 className="text-2xl lg:text-5xl  font-extrabold">On every purchase get colour Eye contact lenses <span className="header-head-span">free</span>.</h1>
      )} subtitle="Best Quality Eyewear by top Brands." background="#F2F9FF" image={NoticeBoardImage1} />
      <ReachUs/>
      <Footer/>
      </>
  );
}

export default App;

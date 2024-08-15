import React from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/propertyList'
import FeaturedProperties from '../../components/featuredProperties/featuredProperties'
import MailList from '../../components/mailList/mailList'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured/>
      <div className="homeTitle">Explore Properties by Type</div>
      <PropertyList/>
      <div className="homeTitle">Popular Guest Choices</div>
      <FeaturedProperties/>
      <MailList/>
      <Footer/>
      </div>
    </div>
  )
}

export default Home
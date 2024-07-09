import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeadSection from './components/Header.jsx'
import family from './assets/family.jpg'
import BodySection from './components/Body.jsx'
import FooterSection from './components/Footer.jsx'

function App() {
  return( <>
    <HeadSection 
    title="Family Wellness" 
    subTitle="MASSAGE THERAPY" 
    list1="HOME" 
    list2="ABOUT" 
    list3="SERVICES" 
    list4="FAQ" 
    list5="CONTACTS"/>
    <BodySection 
    familyImg={family} 
    message="Think Health. Think Massage."
    para="We are open 9am to 6pm; Monday through Sunday. If you would like to schedule an appointment with us, please call us at 987-654-3210 today!"
    btn1="Learn More About Us"
    btn2="Contact Us Today"
    text1="Are you looking for a professional, registered massage therapist? Sample Massage Therapy has 4 registered massage therapists who can provide clinical massage."
    text2="We are committed to your long term health and well-being. Our multi-disciplinary clinic provides a balanced approach to a healthy lifestyle. Enhance your health and improve your performance with our treatments."
    text3="We welcome you to come explore all the benefits you’ll enjoy as one of our valued guests. Our professional staff is committed to offering the best massage therapy in Mainland."
    addr_msg="Family Wellness Massage Therapy"
    addr="888 Griffiths Way, Mainland ML 12345"
     Tel="Tel: 987.654.3210"
    email="Email: info@yoursite.com"/>
    
    <FooterSection copyText="Copyright 2019 Family Wellness. All Rights Reserved." 
    bottomText="Website Created & Hosted with Website.com Website Builder"/>
      </>
     )
}

export default App

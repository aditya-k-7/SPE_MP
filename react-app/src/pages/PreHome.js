import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

import './PreHome.css'

function Page2() {
  const nav = useNavigate();
  const nav_login = () => {nav('/login')}
  const nav_signup = () => {nav('/signup')}
  const navLinks = document.querySelectorAll('.pre-nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const sectionId = link.getAttribute('href');
      const section = document.querySelector(sectionId);
      section.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  return (
  <div>


    <nav className="pre-navbar">
      <ul className="pre-navbar-nav">
        <li className="pre-nav-item">
          <a href="#home" className=".nav-link"><span>Home</span></a>
        </li>
        <li className="pre-nav-item">
          <a href="#about" className=".nav-link">About</a>
        </li>
        <li className="pre-nav-item">
          <a href="#services" className=".nav-link">Categories</a>
        </li>
        <li className="pre-nav-item">
          <a href="#contact" className=".nav-link">Contact</a>
        </li>
      </ul>
    </nav>

    <section id="home">
      <button className="pg1-button" id="login" onClick={nav_login}>Login</button>
      <button className="pg1-button" id="signup" onClick={nav_signup}>Signup</button>
    </section>    

    <section id="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About us</h2>
          <p>
            Welcome to Crowdfund, your premier platform for transforming dreams into reality. We are a dynamic company passionate about empowering individuals, entrepreneurs, and organizations to bring their innovative ideas to life through the power of crowdfunding. With our cutting-edge platform and dedicated team, we provide a streamlined and user-friendly experience that connects project creators with a global community of supporters. Whether you're an aspiring artist, a social entrepreneur, or a tech visionary, Crowdfund offers you the tools, resources, and exposure to turn your dreams into successful campaigns. Our mission is to democratize funding and enable individuals from all walks of life to make a meaningful impact. Join us on this exciting journey and let's create a world where creativity and innovation know no boundaries. Welcome to the Crowdfund community!
          </p>
        </div>
      </div>
    </section>


    <section id="services">
      <h2>Categories</h2>
      <div className="grid-container">
        <div className="grid-item">
          <i className="fas fa-code"></i>
          <h3>Art and Creativity</h3>
          <p>Crowdfunding platforms in the art and creativity field allow artists, musicians, filmmakers, and writers to fund their projects. Whether it's creating an album, producing a film, publishing a book, or organizing an art exhibition, these platforms provide a space for artists to showcase their work and connect with supporters who believe in their artistic vision.</p>
        </div>
        <div className="grid-item">
          <i className="fas fa-paint-brush"></i>
          <h3>Technology and Innovation</h3>
          <p>Crowdfunding has played a significant role in supporting technological advancements and innovative ideas. Entrepreneurs and inventors can utilize crowdfunding platforms to raise funds for developing new products, prototypes, or software applications. From cutting-edge gadgets to groundbreaking software solutions, the technology and innovation field in crowdfunding nurtures disruptive ideas and supports the growth of startups.</p>
        </div>
        <div className="grid-item">
          <i className="fas fa-mobile-alt"></i>
          <h3>Social Causes and Nonprofits</h3>
          <p>Many crowdfunding platforms are dedicated to supporting social causes and nonprofit organizations. These platforms provide a space for individuals and organizations to raise funds for initiatives that aim to address social issues, promote environmental sustainability, support disaster relief efforts, or contribute to charitable projects. This field allows individuals to make a direct impact by supporting causes they believe in.</p>
        </div>
        <div className="grid-item">
          <i className="fas fa-search"></i>
          <h3>Business and Entrepreneurship</h3>
          <p>Crowdfunding platforms have become an alternative way for entrepreneurs to secure capital for their business ventures. Startups and small businesses can present their ideas, products, or services to potential investors and backers who are interested in supporting entrepreneurial endeavors. This field enables aspiring entrepreneurs to validate their business concepts, gain early adopters, and acquire the necessary funds for growth.</p>
        </div>
        <div className="grid-item">
          <i className="fas fa-chart-line"></i>
          <h3>Health and Medical Research</h3>
          <p>Crowdfunding has opened up opportunities for individuals and organizations involved in health-related projects, medical research, and healthcare initiatives. Patients seeking funds for medical treatments, researchers looking for support in conducting studies, and organizations dedicated to finding cures for specific diseases can all benefit from crowdfunding platforms. This field brings together people passionate about improving healthcare and supporting advancements in medical science.</p>
        </div>
        <div className="grid-item">
          <i className="fas fa-shopping-cart"></i>
          <h3>Education and Learning</h3>
          <p>Crowdfunding platforms focused on education provide opportunities for individuals, schools, and educational organizations to raise funds for various learning initiatives. From funding scholarships and educational programs to supporting the development of innovative teaching tools, this field helps make education more accessible and encourages lifelong learning.</p>
        </div>
      </div>
    </section>


    <section id="contact">
      <h2>Contact Us</h2>
      <p className="contact-us-text">We're always happy to hear from you!</p>
      <div className="contact-boxes">
        <div className="contact-box">
          <h3>Address</h3>
          <p>IIITB</p>
        </div>
        <div className="contact-box">
          <h3>Phone</h3>
          <p>+91 9848010107</p>
        </div>
        <div className="contact-box">
          <h3>Email</h3>
          <p>contact@crowdfund.com</p>
        </div>
        <div className="contact-box">
          <h3>Website</h3>
          <p>www.CrowdFund.com</p>
        </div>
      </div>
    </section> 


  </div>
  );
}

export default Page2;
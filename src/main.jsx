import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Banner from './components/Banner.jsx'
import Services from './components/Services.jsx'
import Reasons from './components/Reasons.jsx'
import Bottom from './components/Bottom.jsx';
import Footer  from './components/footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Banner />
    <Services />
    <Reasons />
    <Bottom />
    <Footer />
  </React.StrictMode>,
)

import './components css/services.css';
import construction from '../assets/Construction.svg';
import renovation from '../assets/Renovation.svg';
import consultation from '../assets/Consultation.svg';
import repair from '../assets/Repair Services.svg';
import architecture from '../assets/Architecture.svg';
import electric from '../assets/Electric.svg';

function Services (){
    return(
        <div className="services" id='services'>
            <h1 className="services-title">سرویس ها</h1>
            <div className="services-content">
                <div className="services-item-top d-flex justify-content-center">
                    <div className="item d-flex flex-column white">
                        <img src={construction} alt="" />
                        <div className='space'></div>
                        <p>Construction</p>
                    </div>
                    <div className="item d-flex flex-column gold">
                        <img src={renovation} alt="" />
                        <div className='space'></div>
                        <p>Renovation</p>
                    </div>
                    <div className="item d-flex flex-column white">
                        <img src={consultation} alt="" />
                        <div className='space'></div>
                        <p>Consultation</p>
                    </div>
                </div>
                <div className="services-item-bottom d-flex justify-content-center">
                    <div className="item d-flex flex-column gold">
                        <img src={repair} alt="" />
                        <div className='space'></div>
                        <p>Repair Services</p>
                    </div>
                    <div className="item d-flex flex-column white">
                        <img src={architecture} alt="" />
                        <div className='space'></div>
                        <p>Architecture</p>
                    </div>
                    <div className="item d-flex flex-column gold">
                        <img src={electric} alt="" />
                        <div className='space'></div>
                        <p>Electric</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
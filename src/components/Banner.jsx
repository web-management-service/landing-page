import banner from '../assets/banner image.png';
import './components css/banner.css';

function Banner(){
    return(
        <div className="banner" id='banner'>
            <div className="d-flex gap-3 gap-md-5">
                <div>
                    <img src={banner} alt="" className="banner-image" />
                </div>
                <div className="banner-content">
                    <h2 className="banner-title">پنل متصل به سامانه</h2>
                    <p className="banner-text">یه عالمه متن طولانی و طویل برای مدیریت فضا های خالی در تصویر و پلانیه عالمه متن طولانی و طویل برای مدیریت فضا های خالی در تصویر و پلان</p>
                    <button className="banner-btn">ورود به پنل</button>
                </div>
            </div>
        </div>
    );
}

export default Banner;
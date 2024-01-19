import './components css/reasons.css';
import improve from '../assets/improve.svg';
import conection from '../assets/conection.svg';

function Reasons(){
    return(
        <div className="reasons" id='reasons'>
            <h1 className="reasons-title">ویژگی های تیم ما</h1>
            <div className="reasons-item">
                <div className="reasons--item">
                    <img src={conection} alt="" />
                    <h2>بهبود عملکرد سیستم ها</h2>
                    <p>Ultricies at ipsum nunc, tristique nam lectus.</p>
                </div>
                <div className="reasons--item">
                    <img src={improve} alt="" />
                    <h2>رابط کاربری مدرن</h2>
                    <p>Cursus semper tellus volutpat aliquet lacus.</p>
                </div>
                <div className="reasons--item">
                    <img src={conection} alt="" />
                    <h2>سرویس های موثر</h2>
                    <p>Nullam senectus porttitor in eget. Eget rutrum leo interdum.</p>
                </div>
            </div>
        </div>
    );
}

export default Reasons;
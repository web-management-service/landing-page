import './components css/bottom.css';
import logo from '../assets/logo.svg';
import facebook from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';

function Bottom(){
    return(
        <div className="bottom" id='bottom'>
            <div className="bottom-left">
                <span className="">: اشتراک</span>
                <form>
                    <input type="text" className="text" placeholder='Your email here' />
                    <input type="button" className="button" value='ثبت' /> 
                </form>
                <span className="">: راه های ارتباطی</span>
                <div className="comunication">
                    <img src={facebook} alt="" className='facebook' />
                    <img src={linkedin} alt="" className='linkedin' />
                    <img src={twitter} alt="" className='twitter' />
                </div>
            </div>

            <div className="bottom-right">
                    <div className="right-item it1">
                        <p>6391 Elgin St. Celina, Delaware 10299</p>
                        <span>: آدرس</span>
                    </div>
                    <div className="right-item it2">
                        <p>+84 1102 2703</p>
                        <span>: شماره تماس</span>
                    </div>
                    <div className="right-item it3">
                        <p>hello@thebox.com</p>
                        <span>: ایمیل</span>
                    </div>
                    <div className='right-item it4'>
                        <h1>سامانه هوشمند</h1>
                        <img src={logo} alt="" />
                    </div>
            </div>
        </div>
    );
}

export default Bottom;
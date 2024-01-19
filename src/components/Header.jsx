import './components css/header.css';
import logo from '../assets/logo.svg';

function Header(){
    return(
        <>
            <div className="header d-flex" id='header'>
                <nav class="navbar navbar-expand-lg">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link call" href="#bottom">تماس با ما</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#reasons">ویژگی ها</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">سرویس ها</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="../index.html">خانه</a>
                        </li>
                        </ul>
                    </div>
                </nav>
                <div className="brand d-flex gap-4">
                        <a className="brand-text" href="../index.html">سامانه هوشمند</a>
                        <img src={logo} alt="" className="brand-image" style={{width:'38px' , height:'48px'}} />
                </div>
            </div>
        </>
    );
}

export default Header;
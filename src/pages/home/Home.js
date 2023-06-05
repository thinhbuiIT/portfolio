import './home.css';
import Profile from '../../assets/home.jpg';

import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
function Home() {
    return (
        <section className='home section grid'>
            <img src={Profile} alt="" className='home__img' />

            <div className='home__content'>

                <div className='home__data'>

                    <h1 className='home__title'>
                        <span>I'm Quoc Thinh.</span> <br/>
                        Front end Developer
                    </h1>
                    <p className='home__description'>
                        Quá đẹp trai
                    </p>

                    <Link to='/about' className='button'>
                        More about me
                        <span className='button__icon'>
                            <FaArrowRight />
                        </span>
                    </Link>

                </div>
            </div>

            <div className='color__block'>
                
            </div>
        </section>
    );
}

export default Home;
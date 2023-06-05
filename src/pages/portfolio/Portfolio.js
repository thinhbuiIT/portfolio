import './portfolio.css';
import { portfolio } from '../../data';
import PortfolioItem from '../../components/PortfolioItem';

function Portfolio() {
    
    return (
        <section className='portfolio section'>
            <h2 className='section__title'>My <span>Portfolio</span></h2>
            <div className='portfolio__container container grid'>
                {portfolio.map((item) => (
                    <PortfolioItem key={item.id} {...item} />
                ))}
            </div>
        </section>
    );
}

export default Portfolio;
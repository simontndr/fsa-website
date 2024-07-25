import Card from './Card';
import {CardProps} from './Types'

interface CardCarouselProps{
    cardsInfo: CardProps[];
}

/*ensuring cards arr is a multiple of 3, and not empty*/
const fixCardLen = (cardsInfo : CardProps[]) =>{
    while(cardsInfo.length%3!==0 || cardsInfo.length<6){
        let dataTemp : CardProps = {
            imageUrl:'https://www.horizonplant.com/wp-content/uploads/2017/05/placeholder-400x400.png',
            imageAlt:'placeholder alt',
            cardTitle:'placeholder title',
            cardSubtitle: 'placeholder subtitle',
            cardText:'placeholder text'}
        cardsInfo.push(dataTemp);
    }
}

const CardCarousel : React.FC<CardCarouselProps>= ({cardsInfo}) =>{

    fixCardLen(cardsInfo);

    let carouselSlides = [];
    let addedActiveClass = false;

    for(let i=3;i<=cardsInfo.length;i+=3){
        // Don't forget to add a unique key for each item in a list

        carouselSlides.push(
            <div className={'carousel-item ' + (!addedActiveClass ? 'active' : '')}>
                    <div className='cards-wrapper'>
                        {cardsInfo.slice(i-3,i).map((cardInfo) => (
                            <Card key={i}
                            imageUrl={cardInfo.imageUrl}
                            imageAlt={cardInfo.imageAlt}
                            cardTitle={cardInfo.cardTitle}
                            cardSubtitle={cardInfo.cardSubtitle}
                            cardText={cardInfo.cardText}
                            />
                        ))}
                    </div>
            </div>
        );

        addedActiveClass=true;
    }

    return (
        <div id="carouselAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {carouselSlides}
            </div>
            <button className="carousel-control-prev hidden" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default CardCarousel;
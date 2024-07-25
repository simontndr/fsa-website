import Card from './Card';
import {CardProps} from './Types'

interface SingleCardCarouselProps{
    cardsInfo: CardProps[];
}

const fixSingleCardLen = (cardsInfo : CardProps[]) =>{
    while(cardsInfo.length<2){
        let dataTemp : CardProps = {
            imageUrl:'https://www.horizonplant.com/wp-content/uploads/2017/05/placeholder-400x400.png',
            imageAlt:'placeholder alt',
            cardTitle:'placeholder title',
            cardSubtitle: 'placeholder subtitle',
            cardText:'placeholder text'}
        cardsInfo.push(dataTemp);
    }
}

const SingleCardCarousel : React.FC<SingleCardCarouselProps>= ({cardsInfo}) =>{

    fixSingleCardLen(cardsInfo);

    let carouselSlides = [];

    carouselSlides = cardsInfo.map((cardInfo,index) => (
        <div className={'carousel-item ' + (index===0 ? 'active' : '')} key={index}>
            <div className='single-cards-wrapper'>
                <Card
                imageUrl={cardInfo.imageUrl}
                imageAlt={cardInfo.imageAlt}
                cardTitle={cardInfo.cardTitle}
                cardSubtitle={cardInfo.cardSubtitle}
                cardText={cardInfo.cardText}
                />
            </div>
        </div>
    ))

    return (
        <div id="singleCarouselAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {carouselSlides}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#singleCarouselAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#singleCarouselAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default SingleCardCarousel;
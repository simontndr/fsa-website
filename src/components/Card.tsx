import {CardProps} from './Types'

const Card : React.FC<CardProps>= ({imageUrl,imageAlt,cardTitle,cardSubtitle,cardText}) =>{
    return (
        <div className="card">
            <img src={imageUrl} className="card-img-top" alt={imageAlt}/>
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <span className="card-subtitle">{cardSubtitle}</span>
                <p className="card-text">{cardText}</p>
            </div>
        </div>
    );
}

export default Card;
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
    
    const { id, category,title, background_color, background_title, title_text_color, image } = card;
  
    
    return (
        <Link to={`/card/${id}`}>
        <div className={`card card-compact ${background_color}`}>
            <figure><img className='pt-2' src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className={`card-title font-medium ${title_text_color}`}><span className={`${background_title} px-2 rounded`}>{category}</span></h2>
                <p className={`text-xl font-semibold ${title_text_color}`}>{title}</p>
                
            </div>
        
        </div>
        </Link>
    );
};

Card.propTypes = {

};

export default Card;
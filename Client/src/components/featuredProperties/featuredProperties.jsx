import "./featuredProperties.css";
import islamabadhotels from '../../images/islamabadhotel.png';
import karachihotels from '../../images/karachihotel.png';
import lahorehotels from '../../images/lahorehotel.png';
import hunzahotels from '../../images/hunzahotel.png';

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
      <img src={islamabadhotels} alt="" className='fpImg' />
        <span className="fpName">Hotel One Islamabad</span>
        <span className="fpCity">Islamabad</span>
        <span className="fpPrice">Starting from Rs12000</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
      <img src={lahorehotels} alt="" className='fpImg' />
        <span className="fpName">Avari Hotel</span>
        <span className="fpCity">Lahore</span>
        <span className="fpPrice">Starting from Rs.6500</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
      <img src={karachihotels} alt="" className='fpImg' />
        <span className="fpName">Four Seasons Hotel</span>
        <span className="fpCity">Karachi</span>
        <span className="fpPrice">Starting from Rs.7500</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
      <img src={hunzahotels} alt="" className='fpImg' />
        <span className="fpName">Marriott Hotel</span>
        <span className="fpCity">Hunza</span>
        <span className="fpPrice">Starting from Rs.10500</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
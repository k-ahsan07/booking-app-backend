import React from 'react'
import './Featured.css'
import karachiImage from '../../images/karachi.png';
import lahoreImage from '../../images/lahore.png';
import islamabadImage from '../../images/islamabad.png';
import hunzaImage from '../../images/hunza.png'; 
import murreeImage from '../../images/murree.png';
import peshawarImage from '../../images/peshawar.png';
import useFetch from '../../hooks/useFetch';

const Featured = () => {
  
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Karachi,Lahore"
  );
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
          <img src={lahoreImage} alt="" className='featuredImg' />
            <div className="featuredTitles">
              <h1>Lahore</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
          <img src={karachiImage} alt="" className='featuredImg' />
            <div className="featuredTitles">
              <h1>Karachi</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
          <img src={peshawarImage} alt="" className='featuredImg' />
            <div className="featuredTitles">
              <h1>Peshawar</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
          <img src={islamabadImage} alt="" className='featuredImg' />
            <div className="featuredTitles">
              <h1>Islamabad</h1>
              <h2>{data[3]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
          <img src={hunzaImage} alt="" className='featuredImg' />
            <div className="featuredTitles">
              <h1>Hunza</h1>
              <h2>{data[4]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
          <img src={murreeImage} alt="" className='featuredImg' />
            <div className="featuredTitles">
              <h1>Murree</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>


        </>
      )}
    </div>
  );
};

export default Featured;

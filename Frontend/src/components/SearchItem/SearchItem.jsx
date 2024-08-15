import { Link } from "react-router-dom";
import "./SearchItem.css";

const SearchItem = ({ item }) => {
  if (!item) {
    console.error("SearchItem received no item data");
    return null; // Handle case where item might be undefined
  }

  const imageUrl = item.photos?.[0] || "/default-image.jpg";
  const itemName = item.name || "Hotel Name";
  const itemDistance = item.distance || "Distance";
  const itemDesc = item.desc || "Description not available";
  const itemRating = item.rating || "No rating";
  const cheapestPrice = item.cheapestPrice || "Price not available";
  const itemId = item._id || "";

  return (
    <div className="searchItem">
      <img 
        src={imageUrl} 
        alt={itemName} 
        className="siImg" 
      />
      <div className="siDesc">
        <h1 className="siTitle">{itemName}</h1>
        <span className="siDistance">{itemDistance}m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">{itemDesc}</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {itemRating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{itemRating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">Rs. {cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${itemId}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
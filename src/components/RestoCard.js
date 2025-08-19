import { IMG_CDN_URL } from "../constant";

const RestoCard = (props) => {
  const { resData } = props;
  const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;
  return (
    <div className="resto-card">
      <img
        className="resto-logo"
        alt="res-logo"
        src={
          IMG_CDN_URL + cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
}; 

export default RestoCard;
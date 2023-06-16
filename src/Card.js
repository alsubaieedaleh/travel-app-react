import map from "./icons8-location-50.png";

function Card(props) {
  return (
    <div className="Card">
      <img className="Card-Img" src={props.ImageUrl} alt="no picture" />
      <div className="Card-Content">
        <div className="Location">
          <img src={map} className="Location-img" />
          <h4 className="Location-Title">{props.location}</h4>
          <a
            href={props.googleMapsUrl}
            target="_Blank"
            className="Location-Map"
          >
            View on Google Maps{" "}
          </a>
        </div>
        <div className="Card-Title"> {props.title}</div>
        <div className="Card-Date">
          {" "}
          {props.StartDate} - {props.EndDate}
        </div>
        <div className="Card-Description">
          <p>{props.Description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

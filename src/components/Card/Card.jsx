import "./Card.css"

const ProductCard = ({ product }) => {
    const {location ,when , price , img , name } = product;

  return (
    <>
      <div className="vertical-card-component">
        <div className="card-skeleton">
          <div className="image-container position-relative">
            <img className="image" src={img} alt="product-icon" />
          </div>

          <div className="content">
            <h3 className="card-content">{name}</h3>
            <h5>₹{price} / month</h5>
            <p>{location}</p>
            <p>Available from {when}</p>
          </div>

          <div className="footer-button">
            <button className="card-button" >
           Rent Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { ProductCard };

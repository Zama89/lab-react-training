function DriverCard({ name, rating, img, car }) {
    let rounding = Math.round(Number (rating));
  
    rating = "★".repeat(rounding) + "☆".repeat( 5 - rounding );
  
    return (
        <div className="card-driver">
          <img src={img} />
          <div>
            <h1>{name}</h1>
            <p>{rating}</p>
            <h4>{car.model} - {car.licensePlate}</h4>
          </div>
        </div>
      )
    }
    
    export default DriverCard;
import propTypes from 'prop-types';

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    const colours = {
        background: bgColor,
        color: color,
    }



    let numberFiltered = number.split("");
    for ( let i=0; i<numberFiltered.length; i++ ) {
      if ( i <= numberFiltered.length-5 ) {
        numberFiltered[i]= "*";
      }
  }

  return (
    <div className="card">
      <div style= {colours}>
        <h3> {type} </h3>
        <h3> {numberFiltered} </h3>
        <h3>
          Expires {expirationMonth} / {expirationYear} {bank}
        </h3>
        <h3> {owner} </h3>
      </div>
    </div>
  );
}

CreditCard.propTypes = {
  type: propTypes.oneOf(["Master Card", "Visa"]),
  number: propTypes.string,
  expirationMonth: propTypes.oneOf([1,2,3,4,5,6,7,8,9,10,11,12]),
  expirationYear: propTypes.number,
  bank: propTypes.string,
  owner: propTypes.string,
  bgColor: propTypes.string,
  color: propTypes.string,
};


export default CreditCard;
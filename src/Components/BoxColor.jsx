function ColourBox({ r, g, b}) {

    return (
        <div 
            style={{ backgroundColor: "gb(${r},${g},${b}" }}>
            <p> rgb ( {r}, {g}, {b}) </p>
        </div>
    );
}

export default ColourBox

/*import { number } from 'prop-types';

function BoxColor({ r, g, b }) {
  const divStyle = {
    background: "rgb(${r},${g},${b})"",
  };
  if (r >=0 && r <=255 && g >=0 && g <=255 && b >=0 && b <=255) {
      */
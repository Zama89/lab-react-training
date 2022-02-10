import propTypes from 'prop-types';

function Rating({ children }) {
  let assessment  = Math.round(children);

  if (assessment === 0) {
    return (<div>☆☆☆☆☆</div>);
  } else if ( assessment === 1) {
    return (<div>★☆☆☆☆</div>);
  } else if (assessment === 2) {
    return (<div>★★☆☆☆</div>);
  } else if (assessment === 3) {
    return (<div>★★★☆☆</div>);
  } else if (assessment === 4) {
    return (<div>★★★★☆</div>);
  } else if (assessment === 5) {
    return (<div>★★★★★</div>);
  }
}

Rating.propTypes = {
  children: propTypes.oneOf( [1,2,3,4,5] ),
};

export default Rating;
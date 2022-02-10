function IdCard({ firstName, lastName, birth, heigth, gender, picture }) {
    return (
    <div className="id-container">
      <div>
          <img src={ picture }/>
      </div>
      <div>
          <p>
              <strong>First name: </strong>{firstName}<br/>
              <strong>Last name: </strong>{lastName}<br/>
              <strong>Gender: </strong>{gender}<br/>
              <strong>Height: </strong>{heigth}<br/>
              <strong>Birth: </strong>{birth}<br/>
          </p>        
      </div>
    </div>
    );
  }
  
  export default IdCard
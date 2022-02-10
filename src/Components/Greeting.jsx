import PropTypes from "prop-types";

function Greetings({ lang, children }) {
  if (lang === "de") {
    return (
      <div className="card">
        <p>Hallo {children}</p>
      </div>
    );
    } else if (lang === "es") {
    return (
      <div className="card">
        <p>Hola {children}</p>
      </div>
    );
    } else if (lang === "en") {
    return (
      <div className="card">
        <p>Hello {children}</p>
      </div>
    );
    } else {
    return (
      <div className="card">
        <p>Bonjour {children}</p>
      </div>
    );
  }
}

Greetings.propTypes = {
                        lang: PropTypes.oneOf(["de", "en", "es", "fr"]),
                        children: PropTypes.string,
};

export default Greetings;
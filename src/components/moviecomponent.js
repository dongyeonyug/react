import PropTypes from "prop-types";
import { Link} from "react-router-dom";


function Movie({ CoverImage, title, summary, genres,Id }) {
  return (
    <div>
      <img src={CoverImage} alt={title} />
      <h2>
        <Link to={`/movie/${Id}`}>{title}</Link></h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  CoverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  Id:PropTypes.number.isRequired,
};

export default Movie;
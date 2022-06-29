import { Link } from "react-router-dom";
function Movie({ item }) {
  return (
    <div>
      <img src={item.medium_cover_image} alt={item.tilte} />
      <Link to="/movie">{item.title}</Link>
      <p>{item.summary}</p>
      <ul>
        {item.genres.map((g, index) => (
          <li key={index}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;

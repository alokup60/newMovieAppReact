import "./Movie.css";

const Movie = (props) => {
  return (
    <div className="movie">
      <img src={props.img} alt="" />
      <p>
        <span>Movie: </span> {props.title}
      </p>
      <p>
        <span>Year: </span>
        {props.year}
      </p>
      <p>
        <span>IMBD: </span>
        {props.imbd}
      </p>
    </div>
  );
};

export default Movie;

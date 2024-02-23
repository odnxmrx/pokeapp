import { Link } from "react-router-dom";

const Card = ({ id, name, image }) => {

  return (
    <div key={id}>
      <Link to={`/detail/${id}`}>
        <h4>{name}</h4>
        <img src={image} alt={name} />
      </Link>
    </div>
  )
}

export default Card;
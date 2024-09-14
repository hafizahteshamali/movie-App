
import Button from './Button';
import './Card.css';
import { useNavigate } from 'react-router';

const Card = ({data}) => {
  const {id, title,year} = data;
  const navigate = useNavigate()
  const redirection = (id)=>{
    navigate(id);
  }
  return (
    <div className='card-wrapper'>
        <h4>Movie Title: {title}</h4>
        <Button/>
        <p>Year {year}</p>
        <button  onClick={()=>redirection(`/movies/${id}`)}>View Details</button> 
    </div>
  )
}

export default Card
  
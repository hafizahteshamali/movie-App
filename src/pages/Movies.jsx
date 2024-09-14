
import Button from "../component/Header/comon/Button";
import Card from "../component/Header/comon/Card"
import { MoviesData } from "../utils/constant/MoviesData"
import './pages.css';

const Movies = () => {

  const handleClick = ()=>{
    console.log("click")
  }

  return (
    <div className="movie-wrapper">
       {MoviesData.map((item,index)=>{
        return(
          <Card key={index} data={item} />
        )
       })}
        <button onClick={handleClick}>Click me</button>
        <Button text='apple' img='fa-brands fa-google-play'/>
        <Button text='app' img='fa-brands fa-apple'/>
    </div>

   

     

  )
}

export default Movies

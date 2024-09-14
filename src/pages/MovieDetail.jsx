
import { useParams } from "react-router"
import { MoviesData } from "../utils/constant/MoviesData";
const MovieDetail = () => {
  const {id} = useParams();

  const singleData = MoviesData.find((item)=>{
    return item.id == id;
  })
  console.log(singleData);
  const {img,title,year} = singleData;
  return (
    
    <>
    {singleData ? 
    <div  style={{backgroundImage:`url(${img})`}} className="bgImg">

     <div className="detail-card">
     <h4>Movie Title: {title}</h4>
        <p>Year {year}</p>
      </div> 
     
    </div> : <div><h1>ni hai////</h1></div>}
    </>
  )
}

export default MovieDetail

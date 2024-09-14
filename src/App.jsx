import { Route, Routes } from "react-router"
import Movies from "./pages/Movies"
import MovieDetail from "./pages/MovieDetail"

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Movies/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/movies/:id" element={<MovieDetail/>}/>
      <Route path="*" element="Error"/>
      </Routes>
    </div>
  )
}

export default App

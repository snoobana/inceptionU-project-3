import { Link, useParams } from "react-router-dom";

import SuperheroDetail from '../components/SuperheroDetail'

const SuperheroDetailPage = () => {
  let params = useParams()
  return (
     <div>
       <SuperheroDetail superheroId={params.id}/>
       <Link className="btn btn-primary" to="edit"> Edit </Link>
     </div>
   ) 
}

export default SuperheroDetailPage
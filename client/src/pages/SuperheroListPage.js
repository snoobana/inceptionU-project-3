
import { useNavigate } from "react-router-dom"
import SuperheroList from "../components/SuperheroList"

const SuperheroListPage = () => {

    const navigate = useNavigate()

    function setSelectedSuperheroId(id) {
        navigate('/superhero/'+id)
    }

    return (
        <SuperheroList setSelectedSuperheroId={setSelectedSuperheroId} />
    )
}

export default SuperheroListPage
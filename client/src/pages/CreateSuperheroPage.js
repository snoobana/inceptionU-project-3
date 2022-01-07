import { useNavigate } from 'react-router-dom'

import SuperheroEditForm from "../components/SuperheroEditForm"

const CreateSuperheroPage = () => {

    let navigate = useNavigate()

    async function createSuperhero(newSuperhero) {
        await fetch('/api/superhero', {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newSuperhero)
        })
        navigate('/')
      }

   return (
     <SuperheroEditForm onSave={createSuperhero}/>
   ) 
}

export default CreateSuperheroPage
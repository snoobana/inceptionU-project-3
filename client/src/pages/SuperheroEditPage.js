import { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";

import SuperheroEditForm from '../components/SuperheroEditForm';

const SuperheroEditPage = () => {
    let params = useParams()
    let navigate = useNavigate()
    let superheroId = params.id

    const [hero, setHero] = useState()
    
    useEffect(() => {
      const fetchSuperhero = async () => {
        let fetchResult = await fetch('/api/superhero/'+superheroId)
        let fetchedHero = await fetchResult.json()
        setHero(fetchedHero)
      }
      fetchSuperhero()
    }, [superheroId])

    async function updateSuperhero(updatedSuperhero) {
        console.log('Posting to superhero id', superheroId, 'with data', updatedSuperhero)
        await fetch('/api/superhero/'+superheroId, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedSuperhero)
        })
        navigate(-1)
    }
  
    return (
        <div>
            <SuperheroEditForm existingValues={hero} onSave={updateSuperhero} />
        </div>
    )
}

export default SuperheroEditPage
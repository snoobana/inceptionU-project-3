import {useEffect, useState} from 'react'

import './SuperheroDetail.css'

const SuperheroEditForm = ({existingValues, onSave}) => {
    const [superheroName, setSuperheroName] = useState('')
    const [alterEgo, setAlterEgo] = useState('')
    const [homeCity, setHomeCity] = useState('')
    const [superpowers, setSuperpowers] = useState([])
    const [costume, setCostume] = useState('')
    const [nemesis, setNemesis] = useState('')

    const [powerToAdd, setPowerToAdd] = useState('')

    useEffect(() => {
        if (existingValues) {
            setSuperheroName(existingValues.superheroName)
            setAlterEgo(existingValues.alterEgo)
            setHomeCity(existingValues.homeCity)
            setSuperpowers(existingValues.superpowers)
            setCostume(existingValues.costume)
            setNemesis(existingValues.nemesis)    
        }
    }, [existingValues])

    function onInputUpdate(event, setter) {
        let newValue = event.target.value
        setter(newValue)
    }

    async function postData() {
        let newSuperhero = {
            superheroName, alterEgo, homeCity, superpowers, costume, nemesis
        }
        console.log('Saving superhero', newSuperhero)
        await onSave(newSuperhero)
    }

    function onAddSuperpower() {
        let newSuperpowers = [...superpowers]
        newSuperpowers.push(powerToAdd)
        setPowerToAdd('')
        setSuperpowers(newSuperpowers)
    }

    function onRemoveSuperpower(index) {
        console.log('removing superpower at index', index)
        let newSuperpowers = [...superpowers]
        newSuperpowers.splice(index,1) 
        console.log('superpowers are now', newSuperpowers)
        setSuperpowers(newSuperpowers)
    }

    return (
        <div>
            <h2>Superhero Entry</h2>
            <div className="detail-fields">
                <label className="field-title">Name</label>
                <input value={superheroName} onChange={(event) => onInputUpdate(event, setSuperheroName) } />
                <label className="field-title">Alter Ego</label>
                <input value={alterEgo} onChange={(event) => onInputUpdate(event, setAlterEgo) } />
                <label className="field-title">Home City</label>
                <input value={homeCity} onChange={(event) => onInputUpdate(event, setHomeCity) } />
                <label className="field-title">Super Powers</label>
                <div className="field-value">
                    {
                        superpowers.map((power, index) => (
                            <div key={index}>
                                {power}
                                <button className="btn-sm btn-danger" onClick={() => { onRemoveSuperpower(index)}}>X</button>
                            </div>
                        ))
                    }
                    <div>
                        <input value={powerToAdd} onChange={(event) => onInputUpdate(event, setPowerToAdd) } />
                        <button className="btn-sm btn-primary" onClick={onAddSuperpower}>Add</button>
                    </div>
                </div>
                <label className="field-title">Costume</label>
                <input value={costume} onChange={(event) => onInputUpdate(event, setCostume) } />
                <label className="field-title" >Nemesis</label>
                <input value={nemesis} onChange={(event) => onInputUpdate(event, setNemesis) }/>
            </div>
            <button className="btn btn-primary" onClick={postData} >Save Superhero</button>

        </div>
    )
}

export default SuperheroEditForm
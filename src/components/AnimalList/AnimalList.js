import React from 'react'
import {Animal} from './../'
import './AnimalList.scss'
import {observer} from 'mobx-react'
// import movies from './../../Store'

const AnimalList = observer(() => {
    
    const clickHandel = (animal) => {
        animal.favorit = !animal.favorit;
        animals.initialanimals.splice(animals.initialanimals.indexOf(animal), 1, animal);
    }
    
    const animalList = animals.initialanimals.map(animal => {
        return (
            <Animal 
                animal={animal} 
                key={animal.id}
                clickHandel={() => clickHandel(animal)}
            />
        )
    })

    return(
        <div className='animal-list' >
            {animalList}
        </div>
    )
})

export default AnimalList
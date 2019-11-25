import React, {useState} from 'react'
import './Animal.scss'

// importing images
import './penguin.png'
import './horse.png'
import './monkey.png'
import './rabbit.png'
import './bull.png'
import './syringRed.png'
import './syringBlue.png'

// animal types to load animal icon dynamically
var types = {
    penguin: './penguin.png',
    horse: './horse.png',
    monkey: './monkey.png',
    rabbit: './rabbit.png',
    bull: './bull.png',
}


var initialAnimals = JSON.stringify([
    {type: 'penguin', name: 'Flyer', medCheck: (new Date()), id: 1},
    {type: 'penguin', name: 'Maistro', medCheck: (new Date('2019-11-21')), id: 2},
    {type: 'horse', name: 'Lazy', medCheck: (new Date('2019-10-24')), id: 3},
    {type: 'monkey', name: 'Polite', medCheck: (new Date('2019-10-18')), id: 4},
    {type: 'bull', name: 'Calm', medCheck: (new Date('2019-09-21')), id: 5},
    {type: 'rabbit', name: 'Modest', medCheck: (new Date('2019-11-20')), id: 6},
]);

// sorting by last med check
var Animals = JSON.parse(initialAnimals).sort((a, b) => {
    return a.medCheck.substring(0,10) < b.medCheck.substring(0,10)? -1:1;
})


const Animal = () => {

    var [animalState, setanimalState] = useState(Animals)

    const treatment = (animal) =>{
        if(animal.medCheck.substring(0,8) < (new Date()).toISOString().substring(0,8)){
            var newAnimal = animal ;
            newAnimal.medCheck = (new Date()).toISOString()
            var Animals = [...animalState];
            Animals.splice(animalState.indexOf(animal), 1, newAnimal);
            Animals.sort((a, b) => {
                return a.medCheck.substring(0,10) < b.medCheck.substring(0,10)? -1:1;
            });
            setanimalState(Animals)
            initialAnimals = JSON.stringify(Animals)
        } 
    }

    var animals = animalState.map(animal => {
        // change syring icon to red when not medicaly checked for more than 1 month
        var syring = 
            animal.medCheck.substring(0,8) < (new Date()).toISOString().substring(0,8)?
            './syringRed.png' : './syringBlue.png';

        return(
            <div className="bar" key={animal.id}>
                <img src={require(`${types[animal.type]}`)} alt="Avatar"  />
                <h4 className="name">{animal.name}</h4>
                <h4 className="med">{ animal.medCheck.substring(0, 10) }</h4>
                <img className="med-check" 
                    src={require(`${syring}`)} 
                    alt="medical check"
                    onClick={()=>treatment(animal)}
                />
            </div> 
        )
    })

    return(
        <div className="anim-list">
            <div className="bar main-bar">
                <h4>Animal</h4>
                <h4>Name</h4>
                <h4>Last Check</h4>
                <h4>Treatment</h4>
            </div>

            {animals}

        </div>
    )

    
}

export default Animal
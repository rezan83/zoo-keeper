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

// animal icons to load animal icon dynamically
let icons = {
    penguin: './penguin.png',
    horse: './horse.png',
    monkey: './monkey.png',
    rabbit: './rabbit.png',
    bull: './bull.png',
}


let initialAnimals = JSON.stringify([
    {icon: 'penguin', name: 'Flyer', medCheck: (new Date()), id: 1},
    {icon: 'penguin', name: 'Maistro', medCheck: (new Date('2019-11-21')), id: 2},
    {icon: 'horse', name: 'Lazy', medCheck: (new Date('2019-10-24')), id: 3},
    {icon: 'monkey', name: 'Polite', medCheck: (new Date('2019-10-18')), id: 4},
    {icon: 'bull', name: 'Calm', medCheck: (new Date('2019-09-21')), id: 5},
    {icon: 'rabbit', name: 'Modest', medCheck: (new Date('2019-11-20')), id: 6},
]);

// sorting by last med check
let Animals = JSON.parse(initialAnimals).sort((a, b) => {
    return a.medCheck.substring(0,10) < b.medCheck.substring(0,10)? -1:1;
})


const Animal = () => {

    const [animalState, setanimalState] = useState(Animals)

    const treatment = (animal) =>{
        if(animal.medCheck.substring(0,8) < (new Date()).toISOString().substring(0,8)){
            const newAnimal = animal ;
            newAnimal.medCheck = (new Date()).toISOString()
            const Animals = [...animalState];
            Animals.splice(animalState.indexOf(animal), 1, newAnimal);
            Animals.sort((a, b) => {
                return a.medCheck.substring(0,10) < b.medCheck.substring(0,10)? -1:1;
            });
            setanimalState(Animals)
            initialAnimals = JSON.stringify(Animals)
        } 
    }

    const animals = animalState.map((animal, index) => {

        // change syring icon to red when not medicaly checked this month
        var syring = 
            animal.medCheck.substring(0,8) < (new Date()).toISOString().substring(0,8)?
            './syringRed.png' : './syringBlue.png';

        return(
            <div className={"bar " + (index%2? "even": "odd")} key={animal.id} >
                <img src={require(`${icons[animal.icon]}`)} alt="Avatar"  />
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
        <div className="animals">
            {animals}
        </div>
    )

    
}

export default Animal
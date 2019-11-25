import React from 'react'
import {Animal} from './../'
import './AnimalList.scss'

const AnimalList = () => {

    return(
        <div className="anim-list">
            <div className="bar main-bar">
                <h4>Animal</h4>
                <h4>Name</h4>
                <h4>Last Check</h4>
                <h4>Treatment</h4>
            </div>

            <Animal />

        </div>
    )
}

export default AnimalList
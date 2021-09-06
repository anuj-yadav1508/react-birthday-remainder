import React from 'react'
import './App.css'

const List = ({people}) => {
    
    
    // const people = props.people

    return (
        <div className="List-container">
           {
            people.map((person) => {
                const {id,name,age,image} = person
                return (
                    <div key={id} className='List-item'>
                        <img src={image} alt={name}/>
                        <div className="name-age">
                            <h3>{name}</h3>
                            <h5>{age} years</h5>
                        </div>
                    </div>
                )
            })
           }
        </div>
    )
}

export default List

import React from 'react'
import Tour from './Tour'
import './App.css'

const Tours = ({tours}) => {
    
    
    return (
        <section>
            {
                tours.map((tour) => {
                    // return <Tour key={tour.id} {...tour} />
                    return <Tour tour={tour} {...tour} />
                })
            }
        </section>
    )
}

export default Tours

import React,{useState} from 'react'
import './App.css'

const Tour = ({id,image,name,info,price}) => {
    const [readmore, setReadMore] = useState(false)
    return (
        <main className='tour-single'>
            <div className="img">
                <img src={image} alt={name} />
            </div>
            <div className="footer">
                <div className="text">
                    <h3 className='name'>{name}</h3>
                    <h3 className='price'>{price}</h3>
                </div>
                <div className="info">
                    {readmore ? info : `${info.substring(0,200)}....`}
                    <button onClick={() => {setReadMore(!readmore)}}>
                        {readmore ? 'show less' : 'read more'}
                    </button>
                </div>
                <button className='delete-btn'>not interested</button>
            </div>
        </main>
    )
}

export default Tour

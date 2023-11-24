import { useEffect, useState } from 'react'
import './Loader.css'
import logo from '../../assets/logoAdd.png'

const Loader = () => {

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const loadCharge = setInterval(() => {
            setCounter((prevCounter) =>{
                if(prevCounter < 100){
                    return ++prevCounter
                } else {
                    clearInterval(loadCharge)
                    return prevCounter
                }
            })
        }, 30);
    }, [])

    return(
        <div className="loaderApp">
            
            <img className='logoCharge' src={logo} alt="" />
            <div className='counter'>{`${counter}%`}</div>
            <svg className='svg'>
                <circle className='circle2' cx='80' cy='80'  r='60'>
                </circle>
                <circle className='circle' cx='80' cy='80'  r='60'>
                </circle>
            </svg>
        </div>
    )
}

export default Loader
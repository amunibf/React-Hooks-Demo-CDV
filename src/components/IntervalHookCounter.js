import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = ()=>{
        setCount(prevCount => prevCount+1)
    }

    useEffect(()=>{
        function doSomething(){
            console.log('Do something')
        }
        const interval = setInterval(tick, 1000)
        return ()=>{
            clearInterval(interval)
        }
    },[someprop])

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter

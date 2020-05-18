import React from 'react'
import ComponentC from './ComponentC'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App2() {
    return (
        <div className="App2">
        <UserContext.Provider value={"Munib"}>
            <ChannelContext.Provider value={"abc"}>
                <ComponentC/>
            </ChannelContext.Provider>
        </UserContext.Provider>
        </div>
    )
}

export default App2

import './Main.css'
import React from 'react'

const Main = props => {
    return (
        <React.Fragment>
            <main className="container-fluid content">
                <div className="p-3 mt-3">
                    {props.children}
                </div>
            </main>
        </React.Fragment>
    )
}

export default Main
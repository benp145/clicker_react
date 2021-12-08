import React, { useState } from 'react'


export const Main = () => {

    const [countState, setCountState] = useState(0)
    const [incrementState, setIncrementState] = useState(1)

    // setCountState(0)
    // var c = 0;

    function enterIncrement(event) {
        event.preventDefault();
        setIncrementState(parseInt(event.target.value));
    }
    
    function incrementCount() {

        setCountState(countState + incrementState);
    }



    return (
        <React.Fragment>
            <header>
                <h1>Clicker Counter</h1>
            </header>
            <main className="container">
                <p>Select increment value here:</p>
                <input type="number" onChange={enterIncrement} placeholder={1} />
                    
                <br />
                <button onClick={incrementCount} className="btn btn-danger">
                    Click Me!
                </button>
                <p>
                    Count: {countState}
                </p>

            </main>
        </React.Fragment>
    )
}

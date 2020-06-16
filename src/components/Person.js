import React from 'react'

// constructor() {
//     this.state= {
//         nombre:'Oscar '
//     }
//     this.setState({nombre:oscar})

//     render() {
//         <div>{this.state.nombre}</div>
//     }
// }

function Person (props) {
    return (
        <div>
            <h1>{props.nameUser}</h1> 
            <p>{props.email}</p>
        </div>
    )
}

export default Person
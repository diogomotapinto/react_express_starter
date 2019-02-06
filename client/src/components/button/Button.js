import React from 'react';
import axios from 'axios';


const Button = () => {

    const changeData = () => {
        axios.post('/enteruser', {
            id: 5,
            firstName: 'Diogo',
            lastName: 'Swanson'
        }).then((response) => console.log(response)).catch(error => console.log(error))
    }

    return (
        <div>
            <button onClick={() => changeData()}>Change</button>
        </div>
    );
};

export default Button;
import React from 'react';
import axios from "axios";

const FormButton = ({message, setMessage}) => {

    const testREST = async () => {

        // const result = await urlAPI.fetch('hello');

        return await axios.get('https://i3wn1o9ojd.execute-api.eu-central-1.amazonaws.com');

    }

    console.log(testREST());

    return (
        <div className="form-btn">
            <div className="form-btn__item">
                <button className="btn" onClick={() => setMessage('')}>Clear</button>
            </div>
            <div className="form-btn__item">
                <button className="btn" onClick={() => console.log(message)}>Send</button>
            </div>
        </div>
    );
};

export default FormButton;
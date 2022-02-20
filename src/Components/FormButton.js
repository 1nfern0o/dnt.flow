import React from 'react';

const FormButton = ({message, setMessage}) => {


    const apiTelegram = () => {
        try {
            const url = `https://api.telegram.org/bot5256664083:AAEuDa8tMQ_TCLX6GLkXeh5vLmMHU6w2hWo/sendMessage?chat_id=-623090000&parse_mode=html&text=${message}`;
            return fetch(url);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="form-btn">
            <div className="form-btn__item">
                <button className="btn" onClick={() => setMessage('')}>Clear</button>
            </div>
            <div className="form-btn__item">
                <button className="btn" onClick={() => alert(`Your massage: ${message}`)}>Send</button>
            </div>
            <div className="form-btn__item">
                <button className="btn" onClick={() => apiTelegram(message)}>Send to telegram</button>
            </div>
        </div>
    );
};

export default FormButton;
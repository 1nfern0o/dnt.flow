import React, {useState} from 'react';
import FormButton from "./FormButton";

const CustomTextarea = () => {
    const [message, setMessage] = useState('');
    const [btnBold, setBtnBold] = useState(false);
    const [btnItalic, setBtnItalic] = useState(false);
    const [btnCode, setBtnCode] = useState(false);
    const [btnStrike, setBtnStrike] = useState(false);
    const [btnU, setBtnU] = useState(false);
    const [btnPre, setBtnPre] = useState(false);

    const checkStyleText = (value) => (style, setStyle) => {
        setStyle(!style);

        if(!btnBold) {
            setMessage(message + value);
        } else  {
            setMessage(message + value);
        }
    }

    return (
        <>
            <div className="custom-textarea">
                <div className="custom-textarea__item">
                    <div className="custom-textarea__btn">
                        <button className={`btn ${btnBold ? 'active' : ''}`} onClick={() => checkStyleText(!btnBold ? '<strong>' : '</strong>')(btnBold, setBtnBold)}>Bold</button>
                    </div>
                    <div className="custom-textarea__btn">
                        <button className={`btn ${btnItalic ? 'active' : ''}`} onClick={() => checkStyleText(!btnItalic ? '<em>' : '</em>')(btnItalic, setBtnItalic)}>Italic</button>
                    </div>
                    <div className="custom-textarea__btn">
                        <button className={`btn ${btnCode ? 'active' : ''}`} onClick={() => checkStyleText(!btnCode ? '<code>' : '</code>')(btnCode, setBtnCode)}>Code</button>
                    </div>
                    <div className="custom-textarea__btn">
                        <button className={`btn ${btnStrike ? 'active' : ''}`} onClick={() => checkStyleText(!btnStrike ? '<s>' : '</s>')(btnStrike, setBtnStrike)}>Strike</button>
                    </div>
                    <div className="custom-textarea__btn">
                        <button className={`btn ${btnU ? 'active' : ''}`} onClick={() => checkStyleText(!btnU ? '<u>' : '</u>')(btnU, setBtnU)}>U</button>
                    </div>
                    <div className="custom-textarea__btn">
                        <button className={`btn ${btnPre ? 'active' : ''}`} onClick={() => checkStyleText(!btnPre ? '\n' + '```c++' + '\n' : '\n' + '```' + '\n')(btnPre, setBtnPre)}>Pre</button>
                    </div>
                </div>
                <div className="custom-textarea__item">
                    <textarea className="textarea" value={message} onChange={({target}) => setMessage(target.value)} />
                </div>
            </div>
            <FormButton message={message} setMessage={setMessage} />
        </>
    );
};

export default CustomTextarea;
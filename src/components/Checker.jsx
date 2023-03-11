import React, {useState} from "react";
import './Checker.css';
const Checker = () => {

    const [checker, setchecker] = useState(false);
    const [text, setText] = useState('');
    

    const updater = (e) => {
        setText(e.target.value);
        if (verificator(e.target.value)){
            setchecker(true);
        } else {
            setchecker(false);
        }
    }

    const restart = (e) => {
        setText('');
        setchecker(false);
    }

    const verificator = (texto) => {
        let str = texto.toUpperCase();
        let arrayReverse = [];
        let string = '';
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== ' '){
                arrayReverse.unshift(str[i]);
                string += str[i];
            }
        }
        let strReverse = arrayReverse.join('');
        console.log(string);
        console.log(strReverse)
        return string === strReverse;
    }

    return (
        <div className='conteiner'>
            <h1 className='title'>Introduce Your Palindrome</h1>
            <input className='input' type='text' onChange={updater} value={text}/>
            <div className='downDiv'>
                <div className='left'>
                    <h2 className='title'>{checker ? 'Is A Palindrome' : 'Is Not A Palindrome'}</h2>
                </div>
                <button className='restar' onClick={restart}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-refresh" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                        <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Checker;
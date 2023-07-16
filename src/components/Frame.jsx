import './Frame.css'
import Button from './Button';
import Pad from './Pad';
import { useState, useRef, useEffect } from 'react';

function Frame() {
    
    const textIndex = useRef(1),
          displayedTextTimer = useRef(0),
          initialPadText = "Desejo boas-vindas ao meu site! Espero que goste da estadia ;)";

    let [displayedPadText, setDisplayedPadText] = useState(""),
        [currentPadText, setCurrentPadText] = useState(initialPadText)


    function changePadText(newText){
        clearTimeout(displayedTextTimer.current)
        textIndex.current = 1;
        setCurrentPadText(newText)
    }

    useEffect(() => {
        if (displayedPadText != currentPadText) {
            displayedTextTimer.current = setTimeout(() => {
                setDisplayedPadText(currentPadText.substring(0, textIndex.current));
                textIndex.current++;
            }, 20);
        }else{
            textIndex.current = 1;
        }
    }, [currentPadText, displayedPadText]);

    return <div className="frame">
        <div className='frame__head'>
            <h5>HENRIQUE BARBOSA</h5>
        </div>
        <div className='frame__body'>
            <div className="buttons-container">
                <Button onHover={() => changePadText("Conheça mais sobre mim.")} onLeaving={() => changePadText(initialPadText)} iconName="user" text="Sobre Mim" />
                <Button onHover={() => changePadText("Veja meus trabalhos e projetos pessoais.")} onLeaving={() => changePadText(initialPadText)} iconName="folder" text="Projetos" />
                <a href="https://www.linkedin.com/in/henribdev/" target='_blank' rel='noreferrer'>
                    <Button onHover={() => changePadText("Acesse meu LinkedIn.")} onLeaving={() => changePadText(initialPadText)} iconName="linkedin" text="LinkedIn" />
                </a>
                <a href="https://github.com/HenriBDev" target='_blank' rel='noreferrer'>
                    <Button onHover={() => changePadText("Acesse meu GitHub.")} onLeaving={() => changePadText(initialPadText)}iconName="github" text="GitHub" />
                </a>
            </div>
            <Pad type="image" />
        </div>
        <Pad type="text" padText={displayedPadText} />
    </div>
}
 
export default Frame;
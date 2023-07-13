import './Frame.css'
import Button from './Button';
import Pad from './Pad';

function Frame() {
    return <div className="frame">
        <div className='frame__head'>
            <h5>HENRIQUE BARBOSA</h5>
        </div>
        <div className='frame__body'>
            <div className="buttons-container">
                <Button iconName="user" text="Sobre Mim" />
                <Button iconName="folder" text="Projetos" />
                <a href="https://www.linkedin.com/in/henribdev/" target='_blank' rel='noreferrer'>
                    <Button iconName="linkedin" text="LinkedIn" />
                </a>
                <a href="https://github.com/HenriBDev" target='_blank' rel='noreferrer'>
                    <Button iconName="github" text="GitHub" />
                </a>
            </div>
            <Pad type="image" />
        </div>
        <Pad type="text" padText="Teste?" />
    </div>
}
 
export default Frame;
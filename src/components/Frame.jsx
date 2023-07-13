import './Frame.css'
import Button from './Button';

function Frame() {
    return <div className="frame">
        <div className='frame__head'>
            <h5>HENRIQUE BARBOSA</h5>
        </div>
        <div className='frame__body'>
            <div className="buttons-container">
                <Button iconName="user" text="Sobre Mim"></Button>
                <Button iconName="folder" text="Projetos"></Button>
                <Button iconName="linkedin" text="LinkedIn"></Button>
                <Button iconName="github" text="GitHub"></Button>
            </div>
        </div>
        <footer></footer>
    </div>
}
 
export default Frame;
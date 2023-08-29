import './infos.css'
import phoneSvg from './Images/phone.svg';

function Infos () {
    return (
        <div className='Content-Infos'>
            <div className='Content-Infos-text'>
                <img src={phoneSvg} alt="Phone Icon"/><p>+55 (33) 9 9962 4996</p>
            </div>
        </div>
    )
}

export default Infos;
import './card.css'

function Card (props) {
    return (
        <div className="card-about">
            <div className="first-content">
                {props.children1}
            </div>
            <div className="second-content">
                {props.children2}
            </div>
        </div>
    )
}

export default Card
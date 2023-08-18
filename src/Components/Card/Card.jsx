import './card.css'

function Card (props) {
    return (
        <div class="card">
            <div class="first-content">
                <span>{props.children1}</span>
            </div>
            <div class="second-content">
                <span>{props.children2}</span>
            </div>
        </div>
    )
}

export default Card
import './card.css'

function Card (props) {
    return (
        <div class="card">
            <div class="first-content">
                {props.children1}
            </div>
            <div class="second-content">
                {props.children2}
            </div>
        </div>
    )
}

export default Card
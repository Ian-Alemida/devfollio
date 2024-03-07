import Image from 'next/image';
import './cardBook.css'

function CardBooks({ nome, img }) {

        return (
                <div className='content-cardCourses-books'>
                        <h3>{nome.length > 68 ? `${nome.substring(0, 68)}...` : nome}</h3>
                        <hr />
                        <img className='content-cardCourses-books-img' src={img} alt="Capa do livro"></img>
                </div>
        )
}

export default CardBooks;
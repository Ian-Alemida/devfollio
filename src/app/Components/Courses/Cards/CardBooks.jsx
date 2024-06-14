import './cardBook.css'
import Image from 'next/image'

function CardBooks({ nome, img }) {

        return (
                <div className='content-cardCourses-books'>
                        <h3>{nome.length > 68 ? `${nome.substring(0, 68)}...` : nome}</h3>
                        <hr />
                        <Image width={1000} height={1000} className='content-cardCourses-books-img' src={img} alt="Capa do livro"></Image>
                </div>
        )
}

export default CardBooks;
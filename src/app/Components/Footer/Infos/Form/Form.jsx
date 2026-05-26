'use client'
import { useState } from 'react'
import './form.css'

function Form () {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (email) setSubmitted(true);
    }

    return (
        <div className='Content-Infos-form'>
            {submitted ? (
                <p className='Content-Infos-form-div-legend'>Email recebido! Entrarei em contato em breve.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend className='Content-Infos-form-div-legend'>Entre em contato:</legend>
                        <div className='Content-Infos-form-div'>
                            <input
                                className='Content-Infos-form-div-input'
                                type="email"
                                name="email-contato"
                                id="email-contato"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button className='Content-Infos-form-div-button' type="submit">Enviar</button>
                        </div>
                    </fieldset>
                </form>
            )}
        </div>
    )
}

export default Form;
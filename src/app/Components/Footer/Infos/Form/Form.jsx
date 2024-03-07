import './form.css'

function Form () {
    return (
        <div className='Content-Infos-form'>
            <form action='#email-contato'>
				<fieldset>
					<legend className='Content-Infos-form-div-legend' for="email-contato">Entre em contato:</legend>
					<div className='Content-Infos-form-div'> 
						<input className='Content-Infos-form-div-input' type="email" name="email-contato" id="email-contato"></input>
						<button className='Content-Infos-form-div-button' type="submit">Enviar</button>
					</div>
				</fieldset>
			</form>
        </div>
    )
}

export default Form;
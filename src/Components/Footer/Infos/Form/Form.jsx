import './form.css'

function Form () {
    return (
        <div className='Content-Infos-form'>
            <form class="rodapePrincipal-contatoForm" action="#">
				<fieldset>
					<legend class="rodapePrincipal-contatoForm-legend" for="email-contato">Entre em contato conosco</legend>
					<div class="rodapePrincipal-contatoForm-fieldset"> 
						<input class="rodapePrincipal-contatoForm-emailInput" type="email" name="email-contato" id="email-contato"></input>
						<button class="rodapePrincipal-contatoForm-submit" type="submit">Enviar</button>
					</div>
				</fieldset>
			</form>
        </div>
    )
}

export default Form;
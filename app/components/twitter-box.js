import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TwitterBoxComponent extends Component {
	@tracked text;

	@action 
	handleChange(text) {
		this.text = text;
	}

	@action
	onInput (value){
		this.error = false;
		this.text = value;
	}

	@action 
	handleSubmit() { //aync es clave para usar await
		let text = this.text;
		let req = this.args.handleSubmit(text); //Ejecuta esta linea pero vuelve, se pone cuando se va a hacer una peticion afuera
		//this.error = req.error;
		this.text = "";
	}
}
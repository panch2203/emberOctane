import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
	@tracked tweets = [
		{ id:1, userName:"Yvone", description:"hola"},
		{ id:2, userName:"Yvone", description:"hola"},
		{ id:3, userName:"Yvone", description:"hola"},
	];

	@action
	onSubmit (text) {


		let post = this.store.createRecord('draft_tweet', {
			avatar: "https://upload.wikimedia.org/wikipedia/commons/5/58/Shiba_inu_taiki.jpg",
			user_name: "Francisco",
			description: text,
			created_at: "2019-04-16"
		});

		post.save(); // => POST to '/posts'
	}
}

import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
	@tracked tweets = [
		{ id:1, userName:"Yvone", description:"hola"},
		{ id:2, userName:"Yvone", description:"hola"},
		{ id:3, userName:"Yvone", description:"hola"},
	];
}

const path = require('path');
const camelCase = require('lodash/camelCase');
const Generator = require('yeoman-generator');

class Component extends Generator {
	constructor(args, opts) {
		super(args, opts);
		this.argument('StateName', { type: String, required: false });
	}

	prompting() {
		const questions = [
			{
				when: () => {
					return !(this.options && this.options.StateName);
				},
				type: 'input',
				name: 'StateName',
				message: 'What will the name of the state be? (use space for camel casing .e.g "Foo Bar" will become fooBar)',
			}
		];

		return this.prompt(questions).then(answers => {
			this.templateOptions = Object.assign({}, this.options, answers);
		});
	}

	writing() {
		const stateName = camelCase(this.templateOptions.StateName);
		const outRoot = path.join('.', stateName);
		const options = {
			StateName: stateName,
			StateNameUC: stateName.toUpperCase()
		};
		this.fs.copyTpl(
			this.templatePath('index.js'),
			path.join(outRoot, 'index.js'),
			options
		);
		this.fs.copyTpl(
			this.templatePath('reducer.js'),
			path.join(outRoot, stateName + 'Reducer.js'),
			options
		);
		this.fs.copyTpl(
			this.templatePath('constants.js'),
			path.join(outRoot, stateName + 'Constants.js'),
			options
		);
		this.fs.copyTpl(
			this.templatePath('actions.js'),
			path.join(outRoot, stateName + 'Actions.js'),
			options
		);
	}

}

module.exports = Component;

const path = require('path');
const camelCase = require('lodash/camelCase');
const Generator = require('yeoman-generator');

class Component extends Generator {
	constructor(args, opts) {
		super(args, opts);
		this.argument('UtilName', { type: String, required: false });
	}

	prompting() {
		const questions = [
			{
				when: () => {
					return !(this.options && this.options.UtilName);
				},
				type: 'input',
				name: 'UtilName',
				message: 'What will the name of the utility be?',
			}
		];

		return this.prompt(questions).then(answers => {
			this.templateOptions = Object.assign({}, this.options, answers);
		});
	}

	writing() {
		const {
			UtilName,
		} = this.templateOptions;
		const utilName = camelCase(UtilName);
		const outRoot = path.join('.', utilName);
		const options = {
			UtilName: utilName
		};
		this.fs.copyTpl(
			this.templatePath('index.js'),
			path.join(outRoot, 'index.js'),
			options
		);
		this.fs.copyTpl(
			this.templatePath('util.js'),
			path.join(outRoot, utilName + '.js'),
			options
		);
	}

}

module.exports = Component;

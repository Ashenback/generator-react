const path = require('path');
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
		const outRoot = path.join('.', UtilName);
		this.fs.copyTpl(
			this.templatePath('index.js'),
			path.join(outRoot, 'index.js'),
			this.templateOptions
		);
		this.fs.copyTpl(
			this.templatePath('util.js'),
			path.join(outRoot, UtilName + '.js'),
			this.templateOptions
		);
	}

}

module.exports = Component;

const path = require('path');
const upperFirst = require('lodash/upperFirst');
const camelCase = require('lodash/camelCase');
const Generator = require('yeoman-generator');

class Component extends Generator {
	constructor(args, opts) {
		super(args, opts);
		this.argument('ComponentName', { type: String, required: false });
		this.argument('ComponentType', { type: String, required: false });
	}

	prompting() {
		const questions = [
			{
				when: () => {
					return !(this.options && this.options.ComponentName);
				},
				type: 'input',
				name: 'ComponentName',
				message: 'What will the name of the component be?',
			},
			{
				when: () => {
					return !(this.options && this.options.ComponentType);
				},
				type: 'list',
				choices: [
					{
						name: 'Component',
						value: 'component'
					},
					{
						name: 'Pure Component',
						value: 'pure'
					},
					{
						name: 'Static Funtion',
						value: 'static'
					}
				],
				name: 'ComponentType',
				message: 'What type of Component will it be?'
			}
		];

		return this.prompt(questions).then(answers => {
			this.templateOptions = Object.assign({}, this.options, answers);
		});
	}

	writing() {
		const {
			ComponentName,
			ComponentType,
		} = this.templateOptions;
		const componentName = upperFirst(camelCase(ComponentName));
		const outRoot = path.join('.', componentName);
		const options = {
			ComponentName: componentName
		};
		this.fs.copyTpl(
			this.templatePath('index.js'),
			path.join(outRoot, 'index.js'),
			options
		);
		this.fs.copyTpl(
			this.templatePath('component.css'),
			path.join(outRoot, componentName + '.css'),
			options
		);
		let templateName;
		switch (ComponentType) {
		case 'pure':
			templateName = 'pureComponent.js';
			break;
		case 'static':
			templateName = 'staticFunction.js';
			break;
		case 'component':
			templateName = 'component.js';
			break;
		}
		this.fs.copyTpl(
			this.templatePath(templateName),
			path.join(outRoot, componentName + '.js'),
			options
		);
	}

}

module.exports = Component;

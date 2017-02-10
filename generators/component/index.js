const yeoman = require('yeoman-generator').Base;

const component = yeoman.extend({
	prompting: function () {
		const done = this.async();

		const prompts = [
			{
				when: () => {
					return !(this.options && this.options.ComponentName);
				},
				type: 'input',
				name: 'ComponentName',
				message: 'What will the name of the component be?',
			},
			{
				choices: [
					'Component',
					'Pure Component',
					'Static Funtion'
				],
				name: 'ComponentType',
				message: 'What type of Component will it be?'
			}
		];

		this.prompt(prompts, (props) => {
			if (props.ComponentName) {
				this.ComponentName = props.ComponentName;
				this.componentPath = './';
			} else {
				this.ComponentName = this.options.ComponentName;
				this.componentPath = this.options.ComponentName + '/';
			}
			done();
		});
	},

	writing: function () {
		const done = this.async();
		this.template('component.css', this.componentPath + this.ComponentName + '.css', this);
		this.template('component.js', this.componentPath + this.ComponentName + '.js', this);
		this.template('index.js', this.componentPath + 'index.js', this);
		done();
	},

});

module.exports = component;
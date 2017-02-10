const yeoman = require('yeoman-generator');
const yosay = require('yosay');

const ComponentGenerator = yeoman.Base.extend({

	constructor: () => {
		yeoman.Base.apply(this, arguments);
		this.argument('ComponentName', { type: String, required: false });
	},

	prompting: () => {
		const done = this.async();

		this.log(yosay(
			'Welcome to the Epiceros frontend component generator!'
		));

		if (this.ComponentName) {
			this.composeWith("component:component", { options: { 'ComponentName': this.ComponentName } });
			done();
		} else {
			const prompts = [
				{
					type: 'input',
					name: 'ComponentName',
					message: 'What will the name of the component be?',
				}
			];

			this.prompt(prompts, props => {
				this.composeWith("component:component", { options: { 'ComponentName': props.ComponentName } });
				done();
			});
		}

	}
});

module.exports = ComponentGenerator;
const Generator = require('yeoman-generator');
const yosay = require('yosay');

class App extends Generator {
	constructor(args, opts) {
		super(args, opts);
		this.argument('type', { type: String, required: false });
	}

	runSubGenerator(args) {
		if (args) {
			switch(args.type) {
			case 'Component':
				this.composeWith(require.resolve('../component'));
				break;
			case 'State':
				this.composeWith(require.resolve('../state'));
				break;
			case 'Utility':
				this.composeWith(require.resolve('../utility'));
				break;
			}
		}
	};

	prompting() {
		const {
			type
		} = this.options;
		this.log(yosay(
			'Welcome to the Epiceros frontend component generator!'
		));
		if (type) {
			this.runSubGenerator({ type });
		} else {
			const questions = [
				{
					type: 'list',
					name: 'type',
					message: 'What do you want to generate?',
					choices: [
						'Component',
						'State',
						'Utility'
					]
				}
			];
			return this.prompt(questions).then(this.runSubGenerator.bind(this));
		}
	}
}

module.exports = App;
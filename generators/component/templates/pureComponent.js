import React from 'react';
import styles from './<%= ComponentName %>.css';

class <%= ComponentName %> extends React.PureComponent {

	static propTypes = {
		children: React.PropTypes.node,
	};

	render() {
		const {
			children,
		} = this.props;
		return (
			<div>
				{children}
			</div>
		);
	}

}

export default <%= ComponentName %>;

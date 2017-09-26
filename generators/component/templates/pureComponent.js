import React from 'react';
import PropTypes from 'prop-types';
import styles from './<%= ComponentName %>.css';

class <%= ComponentName %> extends React.PureComponent {

	static propTypes = {
		children: PropTypes.node,
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

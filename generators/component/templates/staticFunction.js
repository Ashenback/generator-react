import React from 'react';
import styles from './<%= ComponentName %>.css';

const <%= ComponentName %> = props => {
	return (
		const {
			children,
		} = props;
		<div>
			{children}
		</div>
	);
}

<%= ComponentName %>.propTypes = {
	children: React.PropTypes.node,
};

export default <%= ComponentName %>;

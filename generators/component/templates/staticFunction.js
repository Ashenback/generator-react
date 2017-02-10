import React from 'react';
import styles from './<%= ComponentName %>.css';

const <%= ComponentName %> = props => {
	const {
		children,
	} = props;
	return (
		<div>
			{children}
		</div>
	);
};

<%= ComponentName %>.propTypes = {
	children: React.PropTypes.node,
};

export default <%= ComponentName %>;

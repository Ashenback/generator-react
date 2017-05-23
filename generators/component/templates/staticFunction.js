import React from 'react';
import styles from './<%= ComponentName %>.css';

const <%= ComponentName %> = ({ children }) => {
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

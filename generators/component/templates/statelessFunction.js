import React from 'react';
import PropTypes from 'prop-types';
import styles from './<%= ComponentName %>.css';

const <%= ComponentName %> = ({ children }) => {
	return (
		<div>
			{children}
		</div>
	);
};

<%= ComponentName %>.propTypes = {
	children: PropTypes.node,
};

export default <%= ComponentName %>;

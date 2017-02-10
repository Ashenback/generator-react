import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import <%= StateNameUC %> from './<%= StateName %>Constants';

const initialState = {};

const reducer = handleActions(
	{},
	Immutable.fromJS(initialState)
);

export default reducer;

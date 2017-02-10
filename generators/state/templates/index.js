import reducer from './<%= StateName %>Reducer';
import * as <%= StateName %>Actions from './<%= StateName %>Actions';
import <%= StateNameUC %> from './<%= StateName %>Constants';

export {
	<%= StateName %>Actions,
	<%= StateNameUC %>
};
export default reducer;

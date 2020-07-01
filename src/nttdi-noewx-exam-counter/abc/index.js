import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';


const view = (state, {updateState}) => {
	return (
		<div>abc</div>
	);
};

createCustomElement('nttdi-nowex-counter-abc', {
	renderer: {type: snabbdom},
	view,
});

import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {updateState}) => {
	return (
		<div></div>
	);
};

createCustomElement('nttdi-nowex-users-table', {
	renderer: {type: snabbdom},
	view,
	styles
});

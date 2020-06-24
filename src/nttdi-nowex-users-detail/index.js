import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {updateState}) => {
	return (
		<div>nttdi-nowex-users-detail</div>
	);
};

createCustomElement('nttdi-nowex-users-detail', {
	renderer: {type: snabbdom},
	view,
	styles
});

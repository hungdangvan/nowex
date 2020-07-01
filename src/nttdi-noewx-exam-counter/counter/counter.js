import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import style from './counter.scss';
import view from './view';

createCustomElement('nttdi-noewx-exam-counter-sds', {
	renderer: {type: snabbdom},
	view,
	initialState: {
		tally: 0
	},
	styles: style
});

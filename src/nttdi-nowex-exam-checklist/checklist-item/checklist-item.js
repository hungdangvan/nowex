import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './checklist-item_style.scss';
import view from './checklist-item_view';
import checklistItemAction from './checklist-item_action';

createCustomElement('nttdi-nowex-checklist-item-abc', {
	renderer: {type: snabbdom},
	view,
	properties: {
		itemId: {},
		label: {},
		completed: {
			default: false
		},
		editing: {
			default: false
		}
	},
	styles,
	...checklistItemAction
});

import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import view from './checklist_view';
import styles from './checklist_style.scss';
import checklistActions from  './checklist_action';
import rtlBehavior from '@servicenow/behavior-rtl';
import {FILTER, CHECKLIST_UNLOAD} from '../constants';

createCustomElement('nttdi-nowex-exam-checklist', {
    renderer: {type: snabbdom},
	view,
	initialState: {
		inputValue: '',
		items: []
	},
	properties: {
		itemsLeft: {
			computed({items = []}) {
				return items.filter(item => !item.completed).length;
			}
		},
		filter: {
			default: FILTER.ALL
		}
	},
	...checklistActions,
	styles,
	behaviors: [rtlBehavior]
})
import cuid from 'cuid';
import { actionTypes } from '@servicenow/ui-core';
import { CHECKLIST_LOAD, CHECKLIST_LOAD_SUCCEEDED, CHECKLIST_ITEM_ADD,CHECKLIST_INPUT_CHANGED, CHECKLIST_UPDATED } from '../constants';
import { makeGetFromLocalStorageHandler, makeStoreStateInLocalStorageHandler } from './effect'

const makeUpdateStateHandler = checklistHandler => coeffects => {
	coeffects.updateState(checklistHandler(coeffects));
	coeffects.dispatch(CHECKLIST_UPDATED);
};

export default {
    actionHandlers: {
        [actionTypes.COMPONENT_BOOSTRAPPED]: ({ dispatch }) => {
            dispatch(CHECKLIST_LOAD);
        },
        [CHECKLIST_LOAD]: {
            ...makeGetFromLocalStorageHandler('state', CHECKLIST_LOAD_SUCCEEDED),
            stopPropagation: true
        },
        [CHECKLIST_LOAD_SUCCEEDED]: {
            stopPropagation: true,
            effect: ({ action, updateState }) =>
                updateState(JSON.parse(action.payload))
        },
        [CHECKLIST_ITEM_ADD]: {
            stopPropagation: true,
            effect: makeUpdateStateHandler(({ state }) => ({
                inputValue: '',
                items: state.items.concat({
                    itemId: cuid(),
                    label: state.inputValue,
                    completed: false
                })
            }))
        },
        [CHECKLIST_INPUT_CHANGED]: {
			stopPropagation: true,
			effect: makeUpdateStateHandler(({action}) => ({
				inputValue: action.payload
			}))
        },
		[CHECKLIST_UPDATED]: {
			stopPropagation: true,
			...makeStoreStateInLocalStorageHandler('state')
		}
    }
}
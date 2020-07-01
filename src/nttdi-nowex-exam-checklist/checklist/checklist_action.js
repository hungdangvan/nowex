import cuid from 'cuid';
import { actionTypes } from '@servicenow/ui-core';
import { CHECKLIST_LOAD, CHECKLIST_LOAD_SUCCEEDED } from '../constants';
import { makeGetFromLocalStorageHandler } from './effect'

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
			effect: ({action, updateState}) =>
				updateState(JSON.parse(action.payload))
		}
    }
}
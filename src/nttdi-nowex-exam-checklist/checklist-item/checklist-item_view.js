import '@servicenow/now-toggle';

import {
	CHECKLIST_ITEM_UPDATED,
	ENTER_KEY_CODE,
	ESC_KEY_CODE
} from '../constants';

export default (state) => {
	const {
		properties: { itemId, label, completed, editing }
	} = state;

	const setEditing = editing => updateProperties({ editing });
	const labelCell = (
		<span
			className="now-checklist-item-cell"
			role="cell"
			on-dblclick={() => setEditing(true)}
			data-test="label">
			{label}
		</span>
	);


	const inputCell = (
		<span className="now-checklist-item-cell" role="cell">
			<input
				className="now-checklist-item-input"
				value={label}
				hook-insert={vnode => vnode.elm.focus()}
				on-keydown={({ keyCode, target: { value: label } }) => {
					const newLabel = label.trim();
					if (keyCode === ENTER_KEY_CODE) {
						setEditing(false);
						if (newLabel) {
							dispatch(CHECKLIST_ITEM_UPDATED, { itemId, label: newLabel });
						}
					} else if (keyCode === ESC_KEY_CODE) {
						setEditing(false);
					}
				}}
				on-blur={() => setEditing(false)}
			/>
		</span>
	);

	return (
		<div className="now-checklist-item" role="row">
			<span className="now-checklist-item-cell -center" role="cell">
				<now-toggle checked={completed} disabled={editing} />
			</span>
			{editing ? inputCell : labelCell}
		</div>
	);

}
import '@servicenow/now-heading';
import '@servicenow/now-button';
import {
    CHECKLIST_INPUT_CHANGED,
    CHECKLIST_ITEM_ADD,
    ENTER_KEY_CODE
}
    from '../constants'

export default (state, { dispatch }) => {
    const { inputValue } = state;
    return (
        <div className="now-checklist">
            <header>
                <now-heading label="checklist">dasdsadasd</now-heading>
                <input
                    className="now-checklist-input"
                    placeholder="What needs to be done?"
                    autoFocus
                    value={inputValue}
                    on-input={({ target: { value } }) =>
                        dispatch(CHECKLIST_INPUT_CHANGED, value.trim())
                    }
                    on-keypress={({ keyCode }) => {
                        if (keyCode === ENTER_KEY_CODE && inputValue) {
                            dispatch(CHECKLIST_ITEM_ADD);
                        }
                    }}
                />
            </header>
        </div>
    );
}
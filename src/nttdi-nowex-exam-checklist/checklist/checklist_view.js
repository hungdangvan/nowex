import '@servicenow/now-heading';
import '@servicenow/now-button';
import '../checklist-item'
import {
    CHECKLIST_INPUT_CHANGED,
    CHECKLIST_ITEM_ADD,
    ENTER_KEY_CODE,
    FILTER
}
    from '../constants'

const filterItems = (items, filter) => {
    switch (filter) {
        case FILTER.ALL:
            return items;
        case FILTER.INCOMPLETE:
            return items.filter(item => !item.completed);
        case FILTER.COMPLETE:
            return items.filter(item => item.completed);
    }
};

export default (state, { dispatch }) => {
    const { inputValue, items, properties: {itemLeft, filter} } = state;
    const filteredItems = filterItems(items, filter);
    return (
        <div className="now-checklist">
            <header>
                <now-heading label="checklist"/>
            </header>
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
            <div className="now-m-block-end--lg" role="table" aria-label="Checklist">
                <div role="rowgroup">
                    <div className="now-checklist-thead" role="row">
                        <span className="now-checklist-th -center" role="columnheader">
                            Mark as done
						</span>
                        <span className="now-checklist-th" role="columnheader">
                            Task
						</span>
                    </div>
                </div>
                <div role="rowgroup">
                    {filteredItems.map(item => (
                        <nttdi-nowex-checklist-item-abc
                            key={item.itemId}
                            itemId={item.itemId}
                            label={item.label}
                            completed={item.completed}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
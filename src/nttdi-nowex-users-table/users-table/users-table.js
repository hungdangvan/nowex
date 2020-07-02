import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import view from './users-table.view'
import styles from './users-table.scss'
import actions from './users-table.actions'

createCustomElement('users-table', {
  renderer: { type: snabbdom },
  view,
  initialState: {
    items: [
      { order: 1, name: 'Chung', email: 'chungpt@gmail.com' },
      { order: 2, name: 'Thanh', email: 'thanh@gmail.com' },
      { order: 3, name: 'Tung', email: 'tung@gmail.com' },
      { order: 4, name: 'Tuan', email: 'tuan@gmail.com' }
    ],
    showingItems: []
  },
  properties: {
    headers: {
      default: [
        { field: 'user_name', label: 'Username' },
        { field: 'email', label: 'User Email' }
      ]
    },
    showFilters: {
      default: false
    }
  },
  transformState(state) {
    const {
      properties: {
        headers
      },
      items
    } = state;

    state.showingItems = items.map(n => {
      const output = {}
      headers.forEach(h => {
        const { field } = h
        output[field] = n[field]
      })

      return output
    })

    return state;
  },
  ...actions,
  styles
});
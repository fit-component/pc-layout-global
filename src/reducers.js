/**
 * Created by andycall on 15/12/17.
 */

import { combineReducers } from 'redux'
import { SET_HEADER_HEIGHT, SET_FOOTER_HEIGHT, SET_SIDERBAR_WIDTH, SET_SIDERBAR_DIRECTION, SET_FOOTER_NEW_LINE} from './actions'

function Layout(state = [], action) {
    switch (action.type) {
    case SET_HEADER_HEIGHT:
        return Object.assign({}, state, {
            headerHeight: action.height
        })

    case SET_FOOTER_HEIGHT:
        return Object.assign({}, state, {
            footerHeight: action.height
        })

    case SET_SIDERBAR_WIDTH:
        return Object.assign({}, state, {
            siderbarWidth: action.width
        })

    case SET_SIDERBAR_DIRECTION:
        return Object.assign({}, state, {
            siderbarDirection: action.direction
        })

    case SET_FOOTER_NEW_LINE:
        return Object.assign({}, state, {
            footerNewLine: action.newLine
        })

    default:
        return state
    }
}

const LayoutApp = combineReducers({
    Layout
})

export default LayoutApp
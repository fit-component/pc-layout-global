export const SET_HEADER_HEIGHT = 'SET_HEADER_HEIGHT'
export const SET_FOOTER_HEIGHT = 'SET_FOOTER_HEIGHT'
export const SET_SIDERBAR_WIDTH = 'SET_SIDERBAR_WIDTH'
export const SET_SIDERBAR_DIRECTION = 'SET_SIDERBAR_DIRECTION'
export const SET_FOOTER_NEW_LINE = 'SET_FOOTER_NEW_LINE'

export function setHeaderHeight(height: number) {
    return {
        type: SET_HEADER_HEIGHT,
        height
    }
}

export function setFooterHeight(height: number) {
    return {
        type: SET_FOOTER_HEIGHT,
        height
    }
}

export function setSiderBarWidth(width: number) {
    return {
        type: SET_SIDERBAR_WIDTH,
        width
    }
}

export function setSiderbarDirection(direction: string) {
    return {
        type: SET_SIDERBAR_DIRECTION,
        direction
    }
}

export function setFooterNewLine(newLine: boolean) {
    return {
        type: SET_FOOTER_NEW_LINE,
        newLine
    }
}
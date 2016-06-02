import * as React from 'react'

export interface PropsInterface {
    /**
     * 宽度
     */
    width?: number

    /**
     * 方向
     */
    direction?: string

    [x: string]: any
}

export class Props implements PropsInterface {
    width = 60
    direction = 'left'
}

export interface StateInterface {
    top?: number
    bottom?: number
    footerNewLine?: boolean
    direction?: string
}

export class State implements StateInterface {
    top = 0
    bottom = 0
    footerNewLine = true
    direction = 'left'
}
import * as React from 'react'
import Store from '../store'

export interface PropsInterface {
    /**
     * 高度
     */
    height?: number

    /**
     * 有侧边栏时,是否另起一行
     */
    newLine?: boolean

    store?: Store

    [x: string]: any
}

export class Props implements PropsInterface {
    height = 100
    newLine = true
}

export interface StateInterface {
    /**
     * 侧边栏宽度
     */
    sidebarWidth?: number

    /**
     * 侧边栏位置 left right
     */
    siderbarDirection?: string
}

export class State implements StateInterface {
    sidebarWidth = 0
    siderbarDirection = 'left'
}
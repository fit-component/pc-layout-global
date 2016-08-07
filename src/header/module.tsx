import * as React from 'react'
import Store from '../store'

export interface PropsInterface {
    /**
     * 高度
     */
    height?: number

    store?: Store

    [x: string]: any
}

export class Props implements PropsInterface {
    height = 100
}

export interface StateInterface {

}

export class State implements StateInterface {

}
import * as React from 'react'
import Store from '../store'

export interface PropsInterface {
    /**
     *
     */
    direction?: string

    store?: Store

    [x: string]: any
}

export class Props implements PropsInterface {

}

export interface StateInterface {
    top?: number
    bottom?: number
    left?: number
    right?: number
}

export class State implements StateInterface {
    top = 0
    bottom = 0
    left = 0
    right = 0
}
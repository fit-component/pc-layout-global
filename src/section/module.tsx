import * as React from 'react'

export interface PropsInterface {
    /**
     *
     */
    direction?: string

    store?: any

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
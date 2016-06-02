import * as React from 'react'

export interface PropsInterface {
    /**
     * 高度
     */
    height?: number

    [x: string]: any
}

export class Props implements PropsInterface {
    height = 100
}

export interface StateInterface {

}

export class State implements StateInterface {

}
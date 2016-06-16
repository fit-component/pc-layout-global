import * as React from 'react'
import * as classNames from 'classnames'
import * as module from './module'
import {others} from '../../../../common/transmit-transparently/src'
import {setHeaderHeight} from '../actions'
import './index.scss'

export default class Header extends React.Component<module.PropsInterface, module.StateInterface> {
    static defaultProps: module.PropsInterface = new module.Props()
    public state: module.StateInterface = new module.State()

    constructor(props: any) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props['store'].dispatch(setHeaderHeight(this.props.height))
    }

    render() {
        const {width, headerWidth, height, headerHeight, children} = this.props
        const classes = classNames({
            '_namespace': true,
            'header': true,
            [this.props['className']]: !!this.props['className']
        })

        let style = {
            position: 'absolute',
            top: 0,
            left: 0,
            width: width || headerWidth || '100%',
            height: height || headerHeight
        }

        let _others: any = others(new module.Props(), this.props)
        _others.style = Object.assign(_others.style || {}, style)

        return (
            <div {..._others}
                className={classes}>
                {children}
            </div>
        )
    }
}
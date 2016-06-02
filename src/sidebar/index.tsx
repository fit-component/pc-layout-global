import * as React from 'react'
import * as classNames from 'classnames'
import {setSiderBarWidth, setSiderbarDirection} from '../actions'
import * as module from './module'
import {others} from '../../../../common/transmit-transparently/src'
import './index.scss'

export default class Sidebar extends React.Component<module.PropsInterface, module.StateInterface> {
    static defaultProps: module.PropsInterface = new module.Props()
    public state: module.StateInterface = new module.State()

    constructor(props: any) {
        super(props)
        this.state = {
            direction: this.props.direction
        }
    }

    componentWillMount() {
        this.props['store'].subscribe(() => {
            let layout = this.props['store'].getState().Layout

            this.setState({
                top: layout.headerHeight || 0,
                bottom: layout.footerHeight || 0,
                footerNewLine: layout.footerNewLine
            })
        })
    }

    componentDidMount() {
        this.props['store'].dispatch(setSiderBarWidth(this.props.width))
        this.props['store'].dispatch(setSiderbarDirection(this.props.direction))
    }

    render() {
        const {top, bottom, left, right, width, children} = this.props
        const classes = classNames({
            '_namespace': true,
            [this.props['className']]: !!this.props['className']
        })

        let style = {
            position: 'absolute',
            left: this.state.direction === 'left' ? left || 0 : left || 'auto',
            right: this.state.direction === 'right' ? right || 0 : right || 'auto',
            top: top || this.state.top,
            bottom: this.state.footerNewLine ? (bottom || this.state.bottom) : 0,
            overflow: 'auto',
            width: width
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
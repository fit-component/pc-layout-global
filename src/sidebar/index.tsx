import * as React from 'react'
import * as classNames from 'classnames'
import * as module from './module'
import {others} from '../../../../common/transmit-transparently/src'
import {observer} from 'mobx-react'
import './index.scss'

@observer
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
        this.props.store.setSidebarWidth(this.props.width)
        this.props.store.setSiderbarDirection(this.props.direction)
    }

    componentWillReceiveProps(nextProps: module.PropsInterface) {
        // 通知修改宽度
        this.props.store.setSidebarWidth(nextProps.width)
        this.props.store.setSiderbarDirection(nextProps.direction)
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
            top: top || this.props.store.headerHeight,
            bottom: this.props.store.footerNewLine ? (bottom || this.props.store.footerHeight) : 0,
            overflow: 'auto',
            width: width
        }

        let _others: any = others(new module.Props(), this.props)
        _others.style = Object.assign(_others.style || {}, style)
        delete _others.store

        return (
            <div {..._others}
                className={classes}>
                {children}
            </div>
        )
    }
}
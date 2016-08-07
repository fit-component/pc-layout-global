import * as React from 'react'
import * as classNames from 'classnames'
import * as module from './module'
import {others} from '../../../../common/transmit-transparently/src'
import './index.scss'

export default class Section extends React.Component<module.PropsInterface, module.StateInterface> {
    static defaultProps: module.PropsInterface = new module.Props()
    public state: module.StateInterface = new module.State()

    constructor(props: module.PropsInterface) {
        super(props)
    }

    render() {
        const {top, bottom, left, right, children} = this.props
        const classes = classNames({
            '_namespace': true,
            [this.props['className']]: !!this.props['className']
        })

        let style = {
            position: 'absolute',
            top: top || this.props.store.headerHeight,
            bottom: bottom || this.props.store.footerHeight,
            left: left || (this.props.store.siderbarDirection === 'left' ? this.props.store.siderbarWidth : 0),
            right: right || (this.props.store.siderbarDirection === 'left' ? 0 :
                this.props.store.siderbarWidth) || 0
        }

        let _others: any = others(new module.Props(), this.props)
        _others.style = Object.assign(_others.style || {}, style)
        delete _others.store;

        return (
            <div {..._others}
                className={classes}>
                {children}
            </div>
        )
    }
}

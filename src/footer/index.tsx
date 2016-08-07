import * as React from 'react'
import * as classNames from 'classnames'
import * as module from './module'
import {others} from '../../../../common/transmit-transparently/src'
import './index.scss'

export default class Footer extends React.Component<module.PropsInterface, module.StateInterface> {
    static defaultProps: module.PropsInterface = new module.Props()
    public state: module.StateInterface = new module.State()

    constructor(props: any) {
        super(props)
        this.state = {
            sidebarWidth: 0,
            siderbarDirection: null
        }
    }

    componentWillMount() {
        this.props.store.setFooterNewLine(this.props.newLine)
        this.props.store.setFooterHeight(this.props.height)
    }

    render() {
        const {bottom, height, left, newLine, footerHeight, children} = this.props
        const classes = classNames({
            '_namespace': true,
            [this.props['className']]: !!this.props['className']
        })

        let style = {
            position: 'absolute',
            bottom: bottom || 0,
            height: height || footerHeight,
            left: left || 0,
            right: 0
        }

        if (!newLine) {
            switch (this.props.store.siderbarDirection) {
                case 'right':
                    style.left = 0
                    style.right = this.props.store.siderbarWidth
                    break
                case 'left':
                    style.left = this.props.store.siderbarWidth
                    style.right = 0
                    break
            }
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
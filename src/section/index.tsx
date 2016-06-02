import * as React from 'react'
import * as classNames from 'classnames'
import * as module from './module'
import {others} from '../../../../common/transmit-transparently/src'
import './index.scss'

export default class Section extends React.Component<module.PropsInterface, module.StateInterface> {
    static defaultProps: module.PropsInterface = new module.Props()
    public state: module.StateInterface = new module.State()
    private unsubscribe: any

    constructor(props: any) {
        super(props)
    }

    componentWillMount() {
        this.unsubscribe = this.props['store'].subscribe(() => {
            let layout = this.props['store'].getState().Layout

            this.setState({
                top: layout.headerHeight || 0,
                bottom: layout.footerHeight || 0,
                left: layout.siderbarDirection === 'left' ? layout.siderbarWidth :
                    0,
                right: layout.siderbarDirection === 'left' ? 0 :
                    layout.siderbarWidth
            })
        })
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        const {top, bottom, left, right, children} = this.props
        const classes = classNames({
            '_namespace': true,
            [this.props['className']]: !!this.props['className']
        })

        let style = {
            position: 'absolute',
            top: top || this.state.top,
            bottom: bottom || this.state.bottom,
            left: left || this.state.left,
            right: right || this.state.right || 0
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

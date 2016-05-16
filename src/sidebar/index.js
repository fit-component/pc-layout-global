import React from 'react'
import classNames from 'classnames'
import { setSiderBarWidth, setSiderbarDirection } from '../actions'
import './index.scss'

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            direction: this.props.direction || this.props.sectionDirection || 'left',
            top: this.props.top || this.props.headerHeight || 0,
            bottom: this.props.bottom || this.props.footerHeight || 0,
            footerNewLine: true
        }
    }

    componentWillMount() {
        this.props.store.subscribe(() => {
            let layout = this.props.store.getState().Layout

            this.setState({
                top: layout.headerHeight || 0,
                bottom: layout.footerHeight || 0,
                footerNewLine: layout.footerNewLine
            })
        })
    }

    componentDidMount() {
        this.props.store.dispatch(setSiderBarWidth(this.props.width || this.props.siderbarWidth))
        this.props.store.dispatch(setSiderbarDirection(this.props.direction || this.props.sectionDirection))
    }

    render() {
        const {className, top, bottom, left, right, width, siderbarWidth, children, ...others} = this.props
        const classes = classNames({
            '_namespace': true,
            [className]: className
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

        others.style = Object.assign({}, style, others.style)

        return (
            <div {...others} className={classes}>
                {children}
            </div>
        )
    }
}

Sidebar.defaultProps = {
    // @desc 宽度
    width: 100,

    // @desc 方向,左边或者右边
    // @enum left right
    direction: 'left'
}

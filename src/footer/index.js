import React from 'react'
import classNames from 'classnames'
import { setFooterHeight, setFooterNewLine } from '../actions'
import './index.scss'

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sidebarWidth: 0,
            siderbarDirection: null
        }
    }

    componentWillMount() {
        this.unsubscribe = this.props.store.subscribe(() => {
            let layout = this.props.store.getState().Layout

            this.setState({
                sidebarWidth: layout.siderbarWidth,
                siderbarDirection: layout.siderbarDirection
            })
        })
        this.props.store.dispatch(setFooterNewLine(this.props.newLine))
    }

    componentDidMount() {
        this.props.store.dispatch(setFooterHeight(this.props.height || this.props.footerHeight || 100))
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        const {className, bottom, height, left, newLine, footerHeight, children, ...others} = this.props
        const classes = classNames({
            '_namespace': true,
            [className]: className
        })

        let style = {
            position: 'absolute',
            bottom: bottom || 0,
            height: height || footerHeight,
            left: left || 0,
            right: 0
        }

        if (!newLine) {
            switch (this.state.siderbarDirection) {
            case 'right':
                style.left = 0
                style.right = this.state.sidebarWidth
                break
            case 'left':
                style.left = this.state.sidebarWidth
                style.right = 0
                break
            }
        }

        others.style = Object.assign({}, style, others.style)

        return (
            <div {...others} className={classes}>
                {children}
            </div>
        )
    }
}

Footer.defaultProps = {
    // @desc 高度
    height: 100,

    // @desc 有侧边栏时,是否另起一行
    newLine: true
}
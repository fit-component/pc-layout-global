import React from 'react'
import classNames from 'classnames'
import { setHeaderHeight } from '../actions'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.store.dispatch(setHeaderHeight(this.props.height || this.props.headerHeight || 0))
    }

    render() {
        const {className, width, headerWidth, height, headerHeight, children, ...others} = this.props
        const classes = classNames({
            '_namespace': true,
            [className]: className
        })

        let style = {
            position: 'absolute',
            top: 0,
            left: 0,
            width: width || headerWidth || '100%',
            height: height || headerHeight,
            zIndex: 3
        }

        others.style = Object.assign({}, style, others.style)

        return (
            <div {...others} className={classes}>
                {children}
            </div>
        )
    }
}

Header.defaultProps = {
    // @desc 高度
    height: 100
}
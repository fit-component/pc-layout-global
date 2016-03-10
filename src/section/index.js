import React from 'react'
import classNames from 'classnames'
import './index.scss'

export default class Section extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            direction: this.props.sectionDirection || 'left',
            top: this.props.headerHeight || 0,
            left: this.props.siderbarWidth || 0,
            right: 0,
            bottom: this.props.footerHeight || 0
        }
    }

    componentWillMount() {
        this.unsubscribe = this.props.store.subscribe(() => {
            let layout = this.props.store.getState().Layout

            this.setState({
                top: layout.headerHeight || 0,
                bottom: layout.footerHeight || 0,
                left: layout.siderbarDirection === 'left' ? layout.siderbarWidth :
                    0,
                right: layout.siderbarDirection === 'left' ? 0 :
                    layout.siderbarWidth,
                direction: layout.siderbarDirection
            })
        })
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        const {className, top, bottom, left, right, children, ...others} = this.props
        const classes = classNames({
            '_namespace': true,
            [className]: className
        })

        let style = {
            position: 'absolute',
            top: top || this.state.top,
            bottom: bottom || this.state.bottom,
            left: left || this.state.left,
            right: right || this.state.right || 0
        }

        others.style = Object.assign({}, style, others.style)

        return (
            <div {...others} className={classes}>
                {children}
            </div>
        )
    }
}

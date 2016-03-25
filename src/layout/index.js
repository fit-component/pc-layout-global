import React from 'react'
import { createStore } from 'redux'
import LayoutApp from '../reducers'
import $ from 'jquery'
import classNames from 'classnames'
import './index.scss'

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        // 设置全局样式
        $('html,body').css({
            width: '100%',
            height: '100%',
            overflow: 'hidden'
        })
    }

    componentWillUnmount() {
        // 设置全局样式
        $('html,body').css({
            width: 'auto',
            height: 'auto',
            overflow: 'auto'
        })
    }

    render() {
        const {className, ...others} = this.props
        const classes = classNames({
            '_namespace': true,
            [className]: className
        })

        let store = createStore(LayoutApp)

        let childs = React.Children.map(this.props.children, (children, index)=> {
            return React.cloneElement(children, {
                key: index,
                store: store
            })
        })

        return (
            <div {...others} className={classes}>
                {childs}
            </div>
        )
    }
}

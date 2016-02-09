import React from 'react'
import { createStore } from 'redux'
import LayoutApp from '../reducers'
import $ from 'jquery'
import './index.scss'

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentWillMount() {
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
        let store = createStore(LayoutApp)

        let childs = React.Children.map(this.props.children, (children, index)=> {
            return React.cloneElement(children, {
                key: index,
                headerHeight: this.props.headerHeight,
                headerWidth: this.props.headerWidth,
                siderbarWidth: this.props.siderbarWidth,
                siderbarHeight: this.props.siderbarHeight,
                footerHeight: this.props.footerHeight,
                footerWidth: this.props.footerWidth,
                sectionDirection: this.props.sectionDirection,
                store: store
            })
        })

        return (
            <div className="_namespace" {...this.props}>
                {childs}
            </div>
        )
    }
}

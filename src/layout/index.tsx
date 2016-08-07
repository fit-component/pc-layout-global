import * as React from 'react'
import {createStore} from 'redux'
import * as module from './module'
import {others} from '../../../../common/transmit-transparently/src'
import * as $ from 'jquery'
import * as classNames from 'classnames'
import Store from '../store'
import './index.scss'

export default class Layout extends React.Component<module.PropsInterface, module.StateInterface> {
    static defaultProps: module.PropsInterface = new module.Props()
    public state: module.StateInterface = new module.State()
    private store = new Store()

    constructor(props: any) {
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
        // 所有子组件都收集完数据了,强制更新
        this.forceUpdate()
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
        const classes = classNames({
            '_namespace': true,
            [this.props['className']]: !!this.props['className']
        })

        let childs = React.Children.map(this.props.children, (children: any, index: number) => {
            return React.cloneElement(children, {
                key: index,
                store: this.store
            })
        })

        return (
            <div {...others(new module.Props(), this.props) }
                className={classes}>
                {childs}
            </div>
        )
    }
}

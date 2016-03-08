import React from 'react'
import { setFooterHeight, setFooterNewLine } from '../actions'

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
        let style = {
            position: 'absolute',
            bottom: this.props.bottom || 0,
            height: this.props.height || this.props.footerHeight,
            left: this.props.left || 0,
            right: 0
        }

        if (!this.props.newLine) {
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

        return (
            <div style={style}>
                {this.props.children}
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
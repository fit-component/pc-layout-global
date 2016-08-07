import {observable} from 'mobx'

export default class Store {
    @observable headerHeight = 0
    @observable footerHeight = 0
    @observable siderbarWidth = 0
    @observable siderbarDirection = ''
    @observable footerNewLine = false

    setHeaderHeight(value: number) {
        this.headerHeight = value
    }

    setFooterHeight(value: number) {
        this.footerHeight = value
    }

    setSidebarWidth(value: number) {
        this.siderbarWidth = value
    }

    setSiderbarDirection(value: string) {
        this.siderbarDirection = value
    }

    setFooterNewLine(value: boolean) {
        this.footerNewLine = value
    }
}
import * as React from 'react'
import { Layout, Sidebar, Section, Footer } from '../../src'

export default class Demo extends React.Component <any, any> {
    render() {
        return (
            <Layout>
                <Sidebar>侧边栏</Sidebar>
                <Section>主体</Section>
                <Footer newLine={false}>页尾</Footer>
            </Layout>
        )
    }
}
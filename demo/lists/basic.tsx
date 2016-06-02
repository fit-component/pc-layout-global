import * as React from 'react'
import { Layout, Sidebar, Section } from '../../src'

export default class Demo extends React.Component <any, any> {
    render() {
        return (
            <Layout>
                <Sidebar width={60}>侧边栏</Sidebar>
                <Section>主体</Section>
            </Layout>
        )
    }
}
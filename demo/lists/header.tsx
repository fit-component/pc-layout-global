import * as React from 'react'
import { Layout, Header, Sidebar, Section } from '../../src'

export default class Demo extends React.Component <any, any> {
    render() {
        return (
            <Layout>
                <Header height={60}>导航条</Header>
                <Sidebar width={60}>侧边栏</Sidebar>
                <Section>主体</Section>
            </Layout>
        )
    }
}
import React from 'react'
import { Layout, Sidebar, Section, Footer } from 'fit-layout-global'

export default class Demo extends React.Component {
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
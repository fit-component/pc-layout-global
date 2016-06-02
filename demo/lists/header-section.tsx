import * as React from 'react'
import { Layout, Header, Sidebar, Section } from '../../src'

export default class Demo extends React.Component <any, any> {
    render() {
        return (
            <Layout>
                <Header height={40}>导航条</Header>
                <Section>主体</Section>
            </Layout>
        )
    }
}
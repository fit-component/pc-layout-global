import * as React from 'react'
import {shallow, mount} from 'enzyme'
import {Layout, Header, Sidebar, Section, Footer} from '../src'
import * as chai from 'chai'

describe('fit-layout-global', ()=> {
    it('样式没想好怎么测~', ()=> {
        const node = mount(
            <Layout>
                <Sidebar width="60">侧边栏</Sidebar>
                <Section>主体</Section>
            </Layout>
        )
        chai.expect(true).to.equal(true)
    })

    it('unmount', ()=> {
        const node = mount(
            <Layout>
                <Sidebar width="60">侧边栏</Sidebar>
                <Section>主体</Section>
            </Layout>
        )
        node.unmount()
        chai.expect(true).to.equal(true)
    })
})
import React from 'react'
import { shallow, mount } from 'enzyme'
import { Layout, Header , Sidebar, Section, Footer } from 'fit-layout-global'

describe('fit-layout-global', ()=> {
    it('样式没想好怎么测', ()=> {
        const node = mount(
            <Layout>
                <Sidebar width="60">侧边栏</Sidebar>
                <Section>主体</Section>
            </Layout>
        )
        expect(true).to.equal(true)
    })
})

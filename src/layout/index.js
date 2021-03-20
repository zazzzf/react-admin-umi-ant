import React, { Component } from 'react';
import { Layout } from 'antd'


class BasicLayout  extends Component {
    render() {
        return (
            <Layout>
                <Layout.Sider width={256} style={{ minHeight: '100vh', color: 'white' }}>Slider</Layout.Sider>
                <Layout>
                    <Layout.Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>
                        header
                    </Layout.Header>
                    <Layout.Content style={{ margin: '24px 16px 0' }}>
                        {this.props.children}
                    </Layout.Content>
                    <Layout.Footer style={{ textAlign: 'center' }}>
                        footer
                    </Layout.Footer>
                </Layout>
            </Layout>
        );
    }
}

export default BasicLayout ;

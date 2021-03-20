export default {
    singular: true,
    dva: {},
    antd: {},
    plugins: [
        
    ],
    alias: {
        "@": 'src'
    },
    routes: [
        {
            path: '/',
            component: '../layout',
            routes: [
                {
                    path: 'helloworld',
                    component: './HelloWorld'
                }
            ]
        }
    ]
}
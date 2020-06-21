module.exports = {
    title: 'korn的博客',
    base: "/blog/",
    description: '专注 Node.js 技术栈分享，从前端到Node.js再到数据库',
    themeConfig: {
        sidebar: {
            "/node/": [
                ["learn", "学习"],
            ],
            "/web/": [
                {
                    title: "css",
                    name: "css",
                    collabsable: false,
                    children: [
                        ['css/css', "css常考面试题"],
                        ['css/canvas', 'canvas'],
                    ]
                },
                {
                    title: "js",
                    name: "js",
                    collabsable: false,
                    children: [
                        ['js/js', "js常考面试题"],
                        ['js/errorReport', "错误上报"],
                        ['js/this 指向', "this 指向"],
                        ['js/typescript', "typescript"]
                    ]
                },
                {
                    title: "vue",
                    name: "vue",
                    collabsable: false,
                    children: [
                        ['vue/vue-router', "vue-router"],
                        ['vue/vuex', "vuex"],
                        ['vue/vue', "vue 面试题"],
                        ['vue/directive', "自定义指令"]
                    ]
                },
                {
                    title: "network",
                    name: "network",
                    collabsable: false,
                    children: [
                        ['network/network', "网络"],
                        ['network/https', "https"],
                    ]
                },
                {
                    title: "webpack",
                    name: "webpack",
                    collabsable: false,
                    children: [
                        ['webpack/learn', "learn"],
                    ]
                }

            ],
        },
        nav: [
            { text: "主页", link: "/" },
            {
                text: "前端",
                items: [
                    { text: "css", link: "/web/css/css" },
                    { text: "js", link: "/web/js/js" },
                    { text: "vue", link: "/web/vue/vue" },
                    { text: "network", link: "/web/network/network" },
                    { text: "webpack", link: "/web/webpack/learn" }
                ]
            },
            { text: "node", link: "/node/learn" },
        ],
        plugins: [
            ["@vuepress/back-to-top"], // 返回顶部
            ["@vuepress/nprogress"],   // 加载进度条
        ],

    }
}
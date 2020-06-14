/*
 * @Description: 
 * @Autor: tianzhen
 * @Date: 2020-06-14 16:39:15
 */
module.exports = {
    title: 'tianzhen的博客',
    description: '专注 Node.js 技术栈分享，从前端到Node.js再到数据库',
    themeConfig: {
        sidebar: {
            "/node/":[
                ["", "node目录"],
                ["path", "作为前端也需要知道的路径知识"],
            ],
            "/web/": [
                {
                    title: "css",
                    name: "css",
                    collabsable: false,
                    children: [
                        ['css/1', "css常考面试题"],
                        ['css/2','css 总结']
                    ]
                },
                {
                    title: "html",
                    name: "html",
                    collabsable: false,
                    children: [
                        ['html/1', "css常考面试题"],
                    ]
                }

            ],
        },
        nav: [{ text: "主页", link: "/" },
        {
            text: "前端",
            items: [
                { text: "html", link: "/web/html/" },
                { text: "css", link: "/web/css/" },
                { text: "vue", link: "/web/vue/" },
            ]
        },
        { text: "node", link: "/node/" },
        { text: "数据库", link: "/database/" },
        { text: "面试问题", link: "/interview/" }
        ],
        plugins: [
            ["@vuepress/back-to-top"], // 返回顶部
            ["@vuepress/nprogress"],   // 加载进度条
        ]

    }
}
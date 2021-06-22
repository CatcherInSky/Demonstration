// 根据模块自动生成？？？  需要vite配合
export const list = [
    {
        label: '首页',
        value: 'home'
    }, 
    {
        label: 'CSS形状',
        value: 'css-shapes',
    },
    {
        label: 'canvas画布',
        value: 'canvas', 
    },
    {
        label: '皮卡丘',
        value: 'pikaqiu',
    },
]

export const routes = list.map(it => {
    const url = `views/${it}/index.vue`;
    return {
        name: it,
        path: `/${it}`,
        components: () => import(url),
    }
})

export const menu_list = list.map(({label, value}) => ({
    label,
    value,
}))
// 根据模块自动生成
// vite api
const modules = import.meta.glob('../views/**/index.vue');
console.log('modules', modules)
export const list = Object.keys(modules).map(key => {
    const name = key.match(/\/views\/(.+)\/index\.vue/)
    return name[1]
})
// [
//     {
//         label: '首页',
//         value: 'home'
//     }, 
//     {
//         label: 'CSS形状',
//         value: 'css-shapes',
//     },
//     {
//         label: 'canvas画布',
//         value: 'canvas', 
//     },
//     {
//         label: '皮卡丘',
//         value: 'pikaqiu',
//     },
//     {
//         label: '鸿蒙',
//         value: 'harmony',
//     },
// ]

export const routes = list.map(value => ({
    name: value,
    path: `/${value}`,
    url: `../views/${value}/index.vue`,
}))

export const menu_list = list.map(value => ({
    label: value,
    value,
}))
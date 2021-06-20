
import { nextTick } from 'vue';
import store from '../store';

const prefix = `anchor_`;

export const getAnchorList = () => {
    nextTick(() => {
        store.commit('update_anchor_list', Array.prototype.map.call(window.document.all, dom => ({
          label: dom.getAttribute('title'),
          value: dom.getAttribute('id'),
        })).filter(it => Boolean(it.value) && new RegExp(`^${prefix}`).test(it.value)))
    })
};

export const setAnchor = (title) => ({id: `${prefix + title}`, title})
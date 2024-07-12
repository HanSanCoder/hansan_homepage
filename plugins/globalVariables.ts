import Vue from 'vue';

declare module 'vue/types/vue' {
    interface Vue {
        $myGlobalVariable: string;
    }
}

Vue.prototype.$myGlobalVariable = '豫ICP备2023014855号-2';

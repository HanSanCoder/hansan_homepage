import Vue from 'vue';

declare module 'vue/types/vue' {
    interface Vue {
        $myGlobalVariable: string;
    }
}

Vue.prototype.$myGlobalVariable = 'YOUR ICP NUMBER';

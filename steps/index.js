import { Component } from 'rgui-ui-base';
import template from './index.rgl';

/**
 * @class Steps
 * @extend Component
 * @description 该版本暂不支持可选择
 * @param {object}                  options.data                     =  绑定属性
 * @param {number=0}                options.data.current            <=> 当前步骤
 * @param {string}                  options.data.titleTemplate      @=> 标题模板
 * @param {boolean=true}            options.data.visible             => 是否显示
 * @param {string=''}               options.data.class               => 补充class
 */
const Steps = Component.extend({
    name: 'steps',
    template,
    /**
     * @protected
     * @override
     */
    config() {
        this.data = Object.assign({
            _list: [],
            current: 0,
            titleTemplate: undefined,
        }, this.data);
        this.supr();
        this.watch();
    },
    /**
     * @protected
     * @override
     */
    watch() {
        this.$watch('current', (newValue, oldValue) => {
            /**
             * @event change 选择页改变时触发
             * @property {object} sender 事件发送对象
             * @property {number} current 改变后的步骤
             */
            this.$emit('change', {
                sender: this,
                current: newValue,
            });
        });
    },
});

export default Steps;

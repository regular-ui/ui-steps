import { Component } from 'rgui-ui-base';

/**
 * @class Step
 * @extend Component
 * @param {object}                  options.data                     =  绑定属性
 * @param {boolean=false}           options.data.selected           <=> 该项是否被选中
 * @param {string=''}               options.data.title               => 该项的工具提示
 * @param {boolean=false}           options.data.disabled            => 禁用该项
 * @param {boolean=true}            options.data.visible             => 是否显示
 * @param {string=''}               options.data.class               => 补充class
 */
const Step = Component.extend({
    name: 'step',
    template: '<div r-hide={this.$outer.data.current != this.$outer.data._list.indexOf(this)}>{#inc this.$body}</div>',
    /**
     * @protected
     * @override
     */
    config() {
        this.defaults({
            // @inherited selected: false,
            // @inherited disabled: false,
            title: '',
        });
        this.supr();

        // 没有$outer就直接报错
        this.$outer.data._list.push(this);
    },
    /**
     * @protected
     * @override
     */
    destroy() {
        // 从$outer组件的列表中删除自己
        const index = this.$outer.data._list.indexOf(this);
        ~index && this.$outer.data._list.splice(index, 1);
        this.supr();
    },
});

export default Step;

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("regularjs"));
	else if(typeof define === 'function' && define.amd)
		define(["Regular"], factory);
	else if(typeof exports === 'object')
		exports["RGUI"] = factory(require("regularjs"));
	else
		root["RGUI"] = factory(root["Regular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _rguiUiBase = __webpack_require__(1);\n\nObject.keys(_rguiUiBase).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _rguiUiBase[key];\n    }\n  });\n});\n\nvar _index = __webpack_require__(7);\n\nObject.keys(_index).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _index[key];\n    }\n  });\n});\n\n/*****************\n ** WEBPACK FOOTER\n ** ./.rgui-cache/js/index.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./.rgui-cache/js/index.js?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports._ = exports.Component = undefined;\n\nvar _component = __webpack_require__(2);\n\nvar _component2 = _interopRequireDefault(_component);\n\nvar _util = __webpack_require__(6);\n\nvar _util2 = _interopRequireDefault(_util);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.Component = _component2.default;\nexports._ = _util2.default;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/rgui-ui-base/index.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/rgui-ui-base/index.js?");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _regularjs = __webpack_require__(3);\n\nvar _regularjs2 = _interopRequireDefault(_regularjs);\n\nvar _filter = __webpack_require__(4);\n\nvar _filter2 = _interopRequireDefault(_filter);\n\nvar _directive = __webpack_require__(5);\n\nvar _directive2 = _interopRequireDefault(_directive);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * @class Component\n * @extend Regular\n * @param {boolean=false}           options.data.readonly            => 是否只读\n * @param {boolean=false}           options.data.disabled            => 是否禁用\n * @param {boolean=true}            options.data.visible             => 是否显示\n * @param {string=''}               options.data.class               => 补充class\n */\nvar Component = _regularjs2.default.extend({\n    /**\n     * @protected\n     */\n    config: function config() {\n        this.data = Object.assign({\n            readonly: false,\n            disabled: false,\n            visible: true,\n            'class': ''\n        }, this.data);\n        this.supr();\n    },\n\n    /**\n     * @protected\n     */\n    watch: function watch() {\n        // just for override\n        // recommand put all `this.$watch` here.\n    }\n}).filter(_filter2.default).directive(_directive2.default);\n\nexports.default = Component;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/rgui-ui-base/component/index.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/rgui-ui-base/component/index.js?");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("module.exports = __WEBPACK_EXTERNAL_MODULE_3__;\n\n/*****************\n ** WEBPACK FOOTER\n ** external {\"root\":\"Regular\",\"amd\":\"Regular\",\"commonjs\":\"regularjs\",\"commonjs2\":\"regularjs\"}\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%7B%22root%22:%22Regular%22,%22amd%22:%22Regular%22,%22commonjs%22:%22regularjs%22,%22commonjs2%22:%22regularjs%22%7D?");

/***/ },
/* 4 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar filter = {};\n\nfilter.dateFormat = function () {\n    var fix = function fix() {\n        var str = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];\n\n        str = str + '';\n        return str.length <= 1 ? '0' + str : str;\n    };\n\n    var MAPS = {\n        yyyy: function yyyy(date) {\n            return date.getFullYear();\n        },\n        MM: function MM(date) {\n            return fix(date.getMonth() + 1);\n        },\n        dd: function dd(date) {\n            return fix(date.getDate());\n        },\n        HH: function HH(date) {\n            return fix(date.getHours());\n        },\n        mm: function mm(date) {\n            return fix(date.getMinutes());\n        },\n        ss: function ss(date) {\n            return fix(date.getSeconds());\n        }\n    };\n\n    var trunk = new RegExp(Object.keys(MAPS).join('|'), 'g');\n\n    return function (value) {\n        var format = arguments.length <= 1 || arguments[1] === undefined ? 'yyyy-MM-dd HH:mm' : arguments[1];\n\n        if (!value) return '';\n        value = new Date(value);\n\n        return format.replace(trunk, function (capture) {\n            return MAPS[capture] ? MAPS[capture](value) : '';\n        });\n    };\n}();\n\nfilter.format = function (value, type) {\n    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n        args[_key - 2] = arguments[_key];\n    }\n\n    return filter[type + 'Format'].apply(filter, [value].concat(args));\n};\n\nexports.default = filter;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/rgui-ui-base/filter/index.js\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/rgui-ui-base/filter/index.js?");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _util = __webpack_require__(6);\n\nvar _util2 = _interopRequireDefault(_util);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar directive = {};\n\ndirective['z-crt'] = _util2.default.createBoolClassDirective('z-crt');\ndirective['z-sel'] = _util2.default.createBoolClassDirective('z-sel');\ndirective['z-chk'] = _util2.default.createBoolClassDirective('z-chk');\ndirective['z-act'] = _util2.default.createBoolClassDirective('z-act');\ndirective['z-dis'] = _util2.default.createBoolClassDirective('z-dis');\n\ndirective['r-show'] = _util2.default.createBoolDirective(function (elem, value) {\n    elem.style.display = value ? 'block' : '';\n});\n\ndirective['r-autofocus'] = _util2.default.createBoolDirective(function (elem, value) {\n    value && setTimeout(function () {\n        return elem.focus();\n    }, 0);\n});\n\nexports.default = directive;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/rgui-ui-base/directive/index.js\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/rgui-ui-base/directive/index.js?");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\nvar _regularjs = __webpack_require__(3);\n\nvar _ = {};\n\n_.createBoolDirective = function (func) {\n    return function (elem, value) {\n        var _this = this;\n\n        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.type === 'expression') {\n            this.$watch(value, function (newValue, oldValue) {\n                if (!newValue === !oldValue) return;\n                func.call(_this, elem, newValue);\n            });\n        } else if (!!value || value === '') func.call(this, elem, true);\n    };\n};\n\n_.createBoolClassDirective = function (boolClass) {\n    return _.createBoolDirective(function (elem, value) {\n        _regularjs.dom[value ? 'addClass' : 'delClass'](elem, boolClass);\n    });\n};\n\nexports.default = _;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/rgui-ui-base/util/index.js\n ** module id = 6\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/rgui-ui-base/util/index.js?");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Step = exports.Steps = undefined;\n\nvar _steps = __webpack_require__(8);\n\nvar _steps2 = _interopRequireDefault(_steps);\n\nvar _step = __webpack_require__(10);\n\nvar _step2 = _interopRequireDefault(_step);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.Steps = _steps2.default;\nexports.Step = _step2.default;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./index.js\n ** module id = 7\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./index.js?");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _rguiUiBase = __webpack_require__(1);\n\nvar _index = __webpack_require__(9);\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * @class Steps\n * @extend Component\n * @description 该版本暂不支持可选择\n * @param {object}                  options.data                     =  绑定属性\n * @param {number=0}                options.data.current            <=> 当前步骤\n * @param {string}                  options.data.titleTemplate      @=> 标题模板\n * @param {boolean=true}            options.data.visible             => 是否显示\n * @param {string=''}               options.data.class               => 补充class\n */\nvar Steps = _rguiUiBase.Component.extend({\n    name: 'steps',\n    template: _index2.default,\n    /**\n     * @protected\n     * @override\n     */\n    config: function config() {\n        this.data = Object.assign({\n            _list: [],\n            current: 0,\n            titleTemplate: undefined\n        }, this.data);\n        this.supr();\n        this.watch();\n    },\n\n    /**\n     * @protected\n     * @override\n     */\n    watch: function watch() {\n        var _this = this;\n\n        this.$watch('current', function (newValue, oldValue) {\n            /**\n             * @event change 选择页改变时触发\n             * @property {object} sender 事件发送对象\n             * @property {number} current 改变后的步骤\n             */\n            _this.$emit('change', {\n                sender: _this,\n                current: newValue\n            });\n        });\n    }\n});\n\nexports.default = Steps;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./steps/index.js\n ** module id = 8\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./steps/index.js?");

/***/ },
/* 9 */
/***/ function(module, exports) {

	eval("module.exports =[{\"type\":\"element\",\"tag\":\"div\",\"attrs\":[{\"type\":\"attribute\",\"name\":\"class\",\"value\":{\"type\":\"expression\",\"body\":\"['m-steps ',c._sg_('class', d, e)].join('')\",\"constant\":false,\"setbody\":false}},{\"type\":\"attribute\",\"name\":\"z-dis\",\"value\":{\"type\":\"expression\",\"body\":\"c._sg_('disabled', d, e)\",\"constant\":false,\"setbody\":\"c._ss_('disabled',p_,d, '=', 1)\"}},{\"type\":\"attribute\",\"name\":\"r-hide\",\"value\":{\"type\":\"expression\",\"body\":\"(!c._sg_('visible', d, e))\",\"constant\":false,\"setbody\":false}}],\"children\":[{\"type\":\"text\",\"text\":\"\\n    \"},{\"type\":\"element\",\"tag\":\"ul\",\"attrs\":[{\"type\":\"attribute\",\"name\":\"class\",\"value\":\"steps_hd\"}],\"children\":[{\"type\":\"text\",\"text\":\"\\n        \"},{\"type\":\"list\",\"sequence\":{\"type\":\"expression\",\"body\":\"c._sg_('_list', d, e)\",\"constant\":false,\"setbody\":\"c._ss_('_list',p_,d, '=', 1)\"},\"alternate\":[],\"variable\":\"item\",\"body\":[{\"type\":\"text\",\"text\":\"\\n        \"},{\"type\":\"element\",\"tag\":\"li\",\"attrs\":[{\"type\":\"attribute\",\"name\":\"z-act\",\"value\":{\"type\":\"expression\",\"body\":\"c._sg_('item_index', d, e)<=c._sg_('current', d, e)\",\"constant\":false,\"setbody\":false}},{\"type\":\"attribute\",\"name\":\"z-dis\",\"value\":{\"type\":\"expression\",\"body\":\"c._sg_('disabled', c._sg_('data', c._sg_('item', d, e)))\",\"constant\":false,\"setbody\":\"c._ss_('disabled',p_,c._sg_('data', c._sg_('item', d, e)), '=', 0)\"}},{\"type\":\"attribute\",\"name\":\"title\",\"value\":{\"type\":\"expression\",\"body\":\"c._sg_('title', c._sg_('data', c._sg_('item', d, e)))\",\"constant\":false,\"setbody\":\"c._ss_('title',p_,c._sg_('data', c._sg_('item', d, e)), '=', 0)\"}},{\"type\":\"attribute\",\"name\":\"r-hide\",\"value\":{\"type\":\"expression\",\"body\":\"(!c._sg_('visible', c._sg_('data', c._sg_('item', d, e))))\",\"constant\":false,\"setbody\":false}}],\"children\":[{\"type\":\"text\",\"text\":\"\\n            \"},{\"type\":\"if\",\"test\":{\"type\":\"expression\",\"body\":\"c._sg_('titleTemplate', d, e)\",\"constant\":false,\"setbody\":\"c._ss_('titleTemplate',p_,d, '=', 1)\",\"once\":true},\"consequent\":[{\"type\":\"text\",\"text\":\"\\n                \"},{\"type\":\"template\",\"content\":{\"type\":\"expression\",\"body\":\"c._sg_('titleTemplate', d, e)\",\"constant\":false,\"setbody\":\"c._ss_('titleTemplate',p_,d, '=', 1)\",\"once\":true}},{\"type\":\"text\",\"text\":\"\\n            \"}],\"alternate\":[{\"type\":\"text\",\"text\":\"\\n                \"},{\"type\":\"element\",\"tag\":\"span\",\"attrs\":[],\"children\":[{\"type\":\"expression\",\"body\":\"c._sg_('title', c._sg_('data', c._sg_('item', d, e)))\",\"constant\":false,\"setbody\":\"c._ss_('title',p_,c._sg_('data', c._sg_('item', d, e)), '=', 0)\"}]},{\"type\":\"text\",\"text\":\"\\n            \"}]},{\"type\":\"text\",\"text\":\"\\n        \"}]},{\"type\":\"text\",\"text\":\"\\n        \"}]},{\"type\":\"text\",\"text\":\"\\n    \"}]},{\"type\":\"text\",\"text\":\"\\n    \"},{\"type\":\"element\",\"tag\":\"div\",\"attrs\":[{\"type\":\"attribute\",\"name\":\"class\",\"value\":\"steps_bd\"}],\"children\":[{\"type\":\"text\",\"text\":\"\\n        \"},{\"type\":\"template\",\"content\":{\"type\":\"expression\",\"body\":\"c._sg_('$body', c)\",\"constant\":false,\"setbody\":\"c._ss_('$body',p_,c, '=', 0)\"}},{\"type\":\"text\",\"text\":\"\\n    \"}]},{\"type\":\"text\",\"text\":\"\\n\"}]}]\n\n/*****************\n ** WEBPACK FOOTER\n ** ./steps/index.rgl\n ** module id = 9\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./steps/index.rgl?");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _rguiUiBase = __webpack_require__(1);\n\n/**\n * @class Step\n * @extend Component\n * @param {object}                  options.data                     =  绑定属性\n * @param {boolean=false}           options.data.selected           <=> 该项是否被选中\n * @param {string=''}               options.data.title               => 该项的工具提示\n * @param {boolean=false}           options.data.disabled            => 禁用该项\n * @param {boolean=true}            options.data.visible             => 是否显示\n * @param {string=''}               options.data.class               => 补充class\n */\nvar Step = _rguiUiBase.Component.extend({\n    name: 'step',\n    template: '<div r-hide={this.$outer.data.current != this.$outer.data._list.indexOf(this)}>{#inc this.$body}</div>',\n    /**\n     * @protected\n     * @override\n     */\n    config: function config() {\n        this.data = Object.assign({\n            // @inherited selected: false,\n            // @inherited disabled: false,\n            title: ''\n        }, this.data);\n        this.supr();\n\n        // 没有$outer就直接报错\n        this.$outer.data._list.push(this);\n    },\n\n    /**\n     * @protected\n     * @override\n     */\n    destroy: function destroy() {\n        // 从$outer组件的列表中删除自己\n        var index = this.$outer.data._list.indexOf(this);\n        ~index && this.$outer.data._list.splice(index, 1);\n        this.supr();\n    }\n});\n\nexports.default = Step;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./step/index.js\n ** module id = 10\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./step/index.js?");

/***/ }
/******/ ])
});
;
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-number-transitions"] = factory();
	else
		root["vue-number-transitions"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/number-animation/index.vue?vue&type=template&id=c04be1b0
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', _vm._l([_vm.formattedValue.integer, _vm.formattedValue.decimal ? _vm.formattedValue.decimalSeparator : null, _vm.formattedValue.decimal], function (item, index) {
    return _c('span', {
      key: index
    }, [_vm._v(_vm._s(item))]);
  }), 0);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/number-animation/index.vue?vue&type=script&lang=js
/**
 * active	boolean	true	是否开始动画	
 * duration	number	3000	动画持续时间	
 * from	number	0	数值动画起始值	
 * locale	string	国际化的语言	
 * precision	number	0	精度，保留小数点后几位	
 * show-separator	boolean	false	是否显示分隔符	
 * to	number	undefined	目标值	
 * on-finish	() => void	undefined	动画结束的回调	
 */
function createRound(methodName) {
  const func = Math[methodName];
  return (number, precision) => {
    precision = precision == null ? 0 : precision >= 0 ? Math.min(precision, 292) : Math.max(precision, -292);
    if (precision) {
      let pair = `${number}e`.split('e');
      const value = func(`${pair[0]}e${+pair[1] + precision}`);
      pair = `${value}e`.split('e');
      return +`${pair[0]}e${+pair[1] - precision}`;
    }
    return func(number);
  };
}
const round = createRound('round');
/* harmony default export */ var number_animationvue_type_script_lang_js = ({
  name: 'NumberAnimation',
  props: {
    to: {
      type: Number,
      default: 0
    },
    precision: {
      type: Number,
      default: 0
    },
    showSeparator: {
      type: Boolean,
      default: false
    },
    from: {
      type: Number,
      default: 0
    },
    locale: {
      type: String,
      default: 'en-US'
    },
    active: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 2000
    },
    onFinish: {
      type: Object,
      default: () => new Function()
    }
  },
  data() {
    return {
      displayedValue: 0,
      animating: false
    };
  },
  computed: {
    mergedLocale() {
      if (this.locale) {
        return this.locale;
      }
      return '';
    },
    formattedValue() {
      const formatted = round(this.displayedValue, this.precision).toFixed(this.precision);
      const splitValue = formatted.split('.');
      const numberFormatter = new Intl.NumberFormat(this.mergedLocale);
      const decimalSeparator = numberFormatter.formatToParts(0.5).find(part => part.type === 'decimal')?.value;
      const integer = this.showSeparator ? numberFormatter.format(Number(splitValue[0])) : splitValue[0];
      const decimal = splitValue[1];
      return {
        integer,
        decimal,
        decimalSeparator
      };
    }
  },
  methods: {
    easeOut(t) {
      return 1 - Math.pow(1 - t, 5);
    },
    onFinishFunc() {
      this.displayedValue = this.to;
      this.animating = false;
      this.onFinish();
    },
    onUpdate(currentValue) {
      this.displayedValue = currentValue;
    },
    animate() {
      this.animating = true;
      this.displayedValue = this.from;
      if (this.from !== this.to) {
        this.tween({
          from: this.from,
          to: this.to,
          duration: this.duration
        });
      }
    },
    play() {
      if (this.animating) {
        return;
      }
      this.animate();
    },
    tween(props) {
      const {
        from,
        to,
        duration
      } = props;
      const tick = () => {
        const current = performance.now();
        const elapsedTime = Math.min(current - startTime, duration);
        const currentValue = from + (to - from) * this.easeOut(elapsedTime / duration);
        if (elapsedTime === duration) {
          this.onFinish();
          return;
        }
        this.onUpdate(currentValue);
        requestAnimationFrame(tick);
      };
      const startTime = performance.now();
      tick();
    }
  }
});
;// CONCATENATED MODULE: ./src/package/number-animation/index.vue?vue&type=script&lang=js
 /* harmony default export */ var package_number_animationvue_type_script_lang_js = (number_animationvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/package/number-animation/index.vue





/* normalize component */
;
var component = normalizeComponent(
  package_number_animationvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var number_animation = (component.exports);
;// CONCATENATED MODULE: ./src/package/index.js

number_animation.install = function (Vue) {
  Vue.component('VueNumberTransitions', number_animation);
};
/* harmony default export */ var src_package = (number_animation);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_package);


/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=vue-number-transitions.umd.js.map
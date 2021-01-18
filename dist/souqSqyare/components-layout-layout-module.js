(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-layout-layout-module"],{

/***/ "+HUQ":
/*!***************************************************************************************!*\
  !*** ./node_modules/ngx-shimmer-loading/__ivy_ngcc__/fesm2015/ngx-shimmer-loading.js ***!
  \***************************************************************************************/
/*! exports provided: NgxShimmerLoadingModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxShimmerLoadingModule", function() { return NgxShimmerLoadingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgxShimmerLoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-shimmer-loading.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



const _c0 = function (a0, a1, a2) { return { width: a0, height: a1, borderRadius: a2 }; };
const _c1 = function (a0) { return { rtl: a0 }; };
class NgxShimmerLoadingComponent {
    constructor() {
        this.class = 'shimmer-loading';
        this.width = '80%';
        this.height = '12px';
        this.shape = 'rect';
        this.borderRadius = '5px';
        this.direction = 'ltr';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    get shimmerHeight() {
        switch (this.shape) {
            case 'circle':
                return this.width;
            case 'square':
                return this.width;
            case 'rect':
                return this.height;
            default:
                return this.height;
        }
    }
    /**
     * @return {?}
     */
    get shimmerBorderRadius() {
        return this.shape === 'circle' ? '50%' : this.borderRadius;
    }
}
NgxShimmerLoadingComponent.ɵfac = function NgxShimmerLoadingComponent_Factory(t) { return new (t || NgxShimmerLoadingComponent)(); };
NgxShimmerLoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxShimmerLoadingComponent, selectors: [["ngx-shimmer-loading"]], hostVars: 2, hostBindings: function NgxShimmerLoadingComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.class);
    } }, inputs: { width: "width", height: "height", shape: "shape", borderRadius: "borderRadius", direction: "direction" }, decls: 1, vars: 8, consts: [[1, "ngx-shimmer", 3, "ngStyle", "ngClass"]], template: function NgxShimmerLoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx.width, ctx.shimmerHeight, ctx.shimmerBorderRadius))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.direction === "rtl"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [":host{display:block;line-height:1.75}.ngx-shimmer{display:inline-block;width:100%;height:12px;background-color:#f6f7f8;background-image:linear-gradient(to right,#f6f7f8 0,#edeef1 20%,#f6f7f8 40%,#f6f7f8 100%);background-position:0 0;background-repeat:no-repeat;background-size:1000px 1000px;-webkit-animation:1s linear infinite forwards shimmerEffect;animation:1s linear infinite forwards shimmerEffect}.ngx-shimmer.rtl{-webkit-animation:1s linear infinite forwards shimmerEffectRTL;animation:1s linear infinite forwards shimmerEffectRTL}@-webkit-keyframes shimmerEffect{0%{background-position:-1000px 0}100%{background-position:1000px 0}}@keyframes shimmerEffect{0%{background-position:-1000px 0}100%{background-position:1000px 0}}@-webkit-keyframes shimmerEffectRTL{0%{background-position:1000px 0}100%{background-position:-1000px 0}}@keyframes shimmerEffectRTL{0%{background-position:1000px 0}100%{background-position:-1000px 0}}"], encapsulation: 2 });
/** @nocollapse */
NgxShimmerLoadingComponent.ctorParameters = () => [];
NgxShimmerLoadingComponent.propDecorators = {
    class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    shape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    borderRadius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxShimmerLoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-shimmer-loading',
                template: "<div\r\n  class=\"ngx-shimmer\"\r\n  [ngStyle]=\"{\r\n    width: width,\r\n    height: shimmerHeight,\r\n    borderRadius: shimmerBorderRadius\r\n  }\"\r\n  [ngClass]=\"{ rtl: direction === 'rtl' }\"\r\n></div>\r\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [":host{display:block;line-height:1.75}.ngx-shimmer{display:inline-block;width:100%;height:12px;background-color:#f6f7f8;background-image:linear-gradient(to right,#f6f7f8 0,#edeef1 20%,#f6f7f8 40%,#f6f7f8 100%);background-position:0 0;background-repeat:no-repeat;background-size:1000px 1000px;-webkit-animation:1s linear infinite forwards shimmerEffect;animation:1s linear infinite forwards shimmerEffect}.ngx-shimmer.rtl{-webkit-animation:1s linear infinite forwards shimmerEffectRTL;animation:1s linear infinite forwards shimmerEffectRTL}@-webkit-keyframes shimmerEffect{0%{background-position:-1000px 0}100%{background-position:1000px 0}}@keyframes shimmerEffect{0%{background-position:-1000px 0}100%{background-position:1000px 0}}@-webkit-keyframes shimmerEffectRTL{0%{background-position:1000px 0}100%{background-position:-1000px 0}}@keyframes shimmerEffectRTL{0%{background-position:1000px 0}100%{background-position:-1000px 0}}"]
            }]
    }], function () { return []; }, { class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], shape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], borderRadius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-shimmer-loading.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxShimmerLoadingModule {
}
NgxShimmerLoadingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxShimmerLoadingModule });
NgxShimmerLoadingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgxShimmerLoadingModule_Factory(t) { return new (t || NgxShimmerLoadingModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxShimmerLoadingModule, { declarations: function () { return [NgxShimmerLoadingComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [NgxShimmerLoadingComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxShimmerLoadingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [NgxShimmerLoadingComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [NgxShimmerLoadingComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-shimmer-loading.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-shimmer-loading.js.map

/***/ }),

/***/ "9KET":
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 1, vars: 0, template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "KZlS":
/*!****************************************************!*\
  !*** ./src/app/components/layout/layout.module.ts ***!
  \****************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout-routing.module */ "dX0S");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.component */ "9KET");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/home.component */ "BuFo");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../about-us/about-us.component */ "ukFw");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contact-us/contact-us.component */ "pO+s");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cart/cart.component */ "QWKc");
/* harmony import */ var ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-shimmer-loading */ "+HUQ");
/* harmony import */ var _single_product_single_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../single-product/single-product.component */ "GWuc");
/* harmony import */ var _cart_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../cart/check-out/check-out.component */ "0FC5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../home/product-list/product-list.component */ "wGHT");
/* harmony import */ var _category_by_id_category_by_id_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../category-by-id/category-by-id.component */ "dlCO");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _cart_check_out_thanks_thanks_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../cart/check-out/thanks/thanks.component */ "Zoew");
/* harmony import */ var _cart_check_out_finalstep_finalstep_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../cart/check-out/finalstep/finalstep.component */ "idLh");

















// import { AngularFireModule } from 'angularfire2';
// // for AngularFireDatabase
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// // for AngularFireAuth
// import { AngularFireAuthModule } from 'angularfire2/auth';
// import { environment } from 'src/environments/environment';
// import { SwiperModule } from 'swiper/angular';


class LayoutModule {
}
LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__["LayoutRoutingModule"],
            ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_8__["NgxShimmerLoadingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__["AboutUSComponent"],
        _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__["ContactUsComponent"],
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_7__["CartComponent"],
        _single_product_single_product_component__WEBPACK_IMPORTED_MODULE_9__["SingleProductComponent"],
        _cart_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_10__["CheckOutComponent"],
        _home_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_12__["ProductListComponent"],
        _category_by_id_category_by_id_component__WEBPACK_IMPORTED_MODULE_13__["CategoryByIdComponent"],
        _cart_check_out_thanks_thanks_component__WEBPACK_IMPORTED_MODULE_16__["ThanksComponent"],
        _cart_check_out_finalstep_finalstep_component__WEBPACK_IMPORTED_MODULE_17__["FinalstepComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__["LayoutRoutingModule"],
        ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_8__["NgxShimmerLoadingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__["AboutUSComponent"],
                    _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__["ContactUsComponent"],
                    _cart_cart_component__WEBPACK_IMPORTED_MODULE_7__["CartComponent"],
                    _single_product_single_product_component__WEBPACK_IMPORTED_MODULE_9__["SingleProductComponent"],
                    _cart_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_10__["CheckOutComponent"],
                    _home_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_12__["ProductListComponent"],
                    _category_by_id_category_by_id_component__WEBPACK_IMPORTED_MODULE_13__["CategoryByIdComponent"],
                    _cart_check_out_thanks_thanks_component__WEBPACK_IMPORTED_MODULE_16__["ThanksComponent"],
                    _cart_check_out_finalstep_finalstep_component__WEBPACK_IMPORTED_MODULE_17__["FinalstepComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__["LayoutRoutingModule"],
                    ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_8__["NgxShimmerLoadingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-layout-layout-module.js.map
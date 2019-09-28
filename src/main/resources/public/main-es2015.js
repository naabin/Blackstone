(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin/category/tag-list/tag-list.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin/category/tag-list/tag-list.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12  create\">\n            <button mat-raised-button [routerLink]=\"['/add-category']\" routerLinkActive=\"router-link-active\"  class=\"mat-primary\">Create New Category</button>\n        </div>\n        <div *ngFor=\"let tag of tagList\" class=\"col-sm-12\">\n            <button [matMenuTriggerFor]=\"belowMenu\" class=\"tagButton\" mat-raised-button\n                matToolTip=\"click here to see the menu\">{{tag.name}}</button>\n            <mat-menu #belowMenu yPosition=\"below\">\n                <button mat-menu-item [routerLink]=\"['/catering/tagName', tag.name]\" routerLinkActive=\"router-link-active\" >Show menu with this Category</button>\n                <button mat-menu-item [routerLink]=\"['/add-category', tag.id]\" routerLinkActive=\"router-link-active\" >Edit tag</button>\n                <button mat-menu-item>Delete Category</button>\n            </mat-menu>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin/category/tag/tag.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin/category/tag/tag.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n\n        <div style=\"margin-top: 20px;\"  class=\"col-sm-12\">\n            <form (submit)=\"onSubmit()\">\n                <mat-form-field class=\"full-width\">\n                    <input matInput type=\"text\" id=\"name\" name=\"name\" [(ngModel)]=\"tag.name\"\n                        placeholder=\"Enter a category name\">\n                </mat-form-field>\n                <div>\n                    <button matInput mat-raised-button type=\"submit\" class=\"mat-primary\">{{tagId ? \"Update\" : \"Create\"}}</button>\n                    <button [routerLink]=\"['/category-list']\" routerLinkActive=\"router-link-active\"  matInput mat-raised-button type=\"button\" class=\"mat-primary\"  style=\"margin-left: 5px;\">Cancel</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin/catering/add-catering/add-catering.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin/catering/add-catering/add-catering.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div [hidden]=\"cateringAdded\" class=\"col-sm-12\">\n            <h3>New Menu Information<span>* is a required field</span></h3>\n            <form (submit)=\"onSubmit()\" [formGroup]=\"cateringForm\">\n                <mat-grid-list cols=\"4\" rowHeight=\"60px\">\n                    <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n                        <mat-form-field  class=\"full-width\">\n                            <mat-label>Category</mat-label>\n                            <mat-select formControlName=\"tag\"  matNativeControl [(ngModel)]=\"tag.name\" name=\"name\" id=\"name\">\n                                <mat-option  *ngFor=\"let tag of tags\" [value]=\"tag.name\">{{tag.name}}</mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </mat-grid-tile>\n                </mat-grid-list>\n                <mat-grid-list cols=\"4\" rowHeight=\"60px\">\n                    <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n                        <mat-form-field class=\"full-width\">\n                            <input formControlName=\"name\" type=\"text\" name=\"name\" matInput id=\"name\" [(ngModel)]=\"catering.name\" required\n                                placeholder=\"Name of the item\">\n                        </mat-form-field>\n                    </mat-grid-tile>\n                </mat-grid-list>\n                <mat-grid-list cols=\"4\" rowHeight=\"60px\">\n                    <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n                        <mat-form-field class=\"full-width\">\n                            <input formControlName=\"description\" type=\"text\" matInput id=\"description\" name=\"descrition\"\n                                [(ngModel)]=\"catering.description\"  placeholder=\"Description...\">\n                        </mat-form-field>\n                    </mat-grid-tile>\n                </mat-grid-list>\n                <mat-grid-list cols=\"4\" rowHeight=\"60px\">\n                    <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n                        <mat-form-field class=\"full-width\">\n                            <input formControlName=\"minimumNo\" type=\"number\" matInput id=\"minimumNo\" name=\"minimumNo\"\n                                [(ngModel)]=\"catering.minimumNo\" required placeholder=\"Minimun number...\">\n                        </mat-form-field>\n                    </mat-grid-tile>\n                    <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n                        <mat-form-field class=\"full-width\">\n                            <input formControlName=\"pricePerPerson\" type=\"number\" matInput id=\"pricePerPerson\" name=\"pricePerPerson\"\n                                [(ngModel)]=\"catering.pricePerPerson\" required placeholder=\"Price per person\">\n                        </mat-form-field>\n                    </mat-grid-tile>\n                </mat-grid-list>\n                <mat-grid-list cols=\"2\" rowHeight=\"60px\">\n                    <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n                        <button [disabled]=\"!cateringForm.valid\" matInput mat-raised-button class=\"mat-primary\" type=\"submit\">Add Catering</button>\n                    </mat-grid-tile>\n                    <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n                        <button matInput mat-raised-button class=\"mat-warn\" [routerLink]=\"['/catering']\">Cancel</button>\n                    </mat-grid-tile>\n                </mat-grid-list>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin/catering/catering-item/catering-item.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin/catering/catering-item/catering-item.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"panel panel-primary\">\n                <div class=\"panel-heading\">\n                    <h3>Category Information</h3>\n                </div>\n                <div *ngIf=\"catering ? catering: null\" class=\"panel-body\">\n                    <ul class=\"list-group\">\n                        <li class=\"list-group-item\" *ngFor=\"let tag of tags\">Category: {{tag.name}}</li>\n                        <li class=\"list-group-item\">Name: {{catering.name}}</li>\n                        <li class=\"list-group-item\">Description: {{catering.description}}</li>\n                        <li class=\"list-group-item\">Price per Person: ${{catering.pricePerPerson}}</li>\n                        <li class=\"list-group-item\">Created on: {{catering.createdOn | date}}</li>\n                    </ul>\n                    <div class=\"btn-group justify\">\n                        <button type=\"button\" class=\"btn btn-primary\" \n                                mat-raised-button [routerLink]=\"['/add-catering', cateringId]\" \n                                routerLinkActive=\"router-link-active\">Edit Menu</button>\n                        <button type=\"button\" (click)=\"onDelete(catering.id)\" mat-raised-button class=\"btn btn-danger\">\n                            Delete Menu\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin/catering/catering-list/catering-list.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin/catering/catering-list/catering-list.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <h3 class=\"text-center\">Catering Menu</h3>\n            <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 full-width\">\n                <ng-container matColumnDef=\"name\">\n                    <th mat-header-cell *matHeaderCellDef>Name</th>\n                    <td style=\"cursor: pointer\" mat-cell *matCellDef=\"let catering\" [routerLink]=\"['/catering',catering.id]\" routerLinkActive=\"router-link-active\" >{{catering.name}}</td>\n                </ng-container>\n                <ng-container matColumnDef=\"tag\">\n                    <th mat-header-cell *matHeaderCellDef>Category</th>\n                    <td mat-cell *matCellDef=\"let catering\">{{catering.tags[0].name}}</td>\n                </ng-container>\n                <ng-container matColumnDef=\"minNum\">\n                    <th mat-header-cell *matHeaderCellDef>Minimum No.</th>\n                    <td mat-cell *matCellDef=\"let catering\">{{ catering.minimumNo }}</td>\n                </ng-container>\n                <ng-container matColumnDef=\"price\">\n                    <th mat-header-cell *matHeaderCellDef>Price per Person</th>\n                    <td mat-cell *matCellDef=\"let catering\">{{catering.pricePerPerson}}</td>\n                </ng-container>\n                <ng-container matColumnDef=\"createdOn\">\n                    <th mat-header-cell *matHeaderCellDef>Created On</th>\n                    <td mat-cell *matCellDef=\"let catering\">{{catering.createdOn|date}}</td>\n                </ng-container>\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            </table>\n            <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n        </div>\n        <div class=\"col-sm-6 col-md-8\">\n            <button mat-raised-button class=\"mat-primary\" [routerLink]=\"['/add-catering']\" routerLinkActive=\"router-link-active\">Add Catering</button>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin/catering/tagged-catering-list/tagged-catering-list.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin/catering/tagged-catering-list/tagged-catering-list.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container \">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <h3 class=\"text-center\">{{tagName}}</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12 col-md-4 col-lg-4 matCard\">\n            <div *ngFor=\"let catering of cateringList\">\n                <mat-card>\n                    <mat-card-title class=\"title\">\n                        <h4>{{catering.name}}</h4>\n                    </mat-card-title>\n                    <mat-card-content>\n                        <p>Minimum No: {{catering.minimumNo}}</p>\n                        <p>Price per Person: {{catering.pricePerPerson | currency}}</p>\n                        <p>Description: {{catering.description}}</p>\n                        <p>Category: {{catering.tags[0].name}}</p>\n                        <p>Created on: {{catering.createdOn |date}}</p>\n                    </mat-card-content>\n                    <mat-card-actions class=\"button-group\">\n                        <button [routerLink]=\"['/add-catering', catering.id]\" routerLinkActive=\"router-link-active\"  mat-raised-button class=\"mat-primary\">Edit</button>\n                        <button mat-raised-button class=\"delete\">Delete</button>\n                    </mat-card-actions>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin/image/image.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin/image/image.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12 col-md-8\">\n            <form (submit)=\"processFile(imageInput, $event)\" [formGroup]=\"imageForm\">\n                <div [hidden]=\"loading\" class=\"col-sm-12 \">\n                    <div class=\"input-group mb-3\">\n                        <label>Image Name:</label>\n                        <input formControlName=\"name\" class=\"form-control\" (keyup)=\"getName($event)\" type=\"text\">\n                    </div>\n\n                    <div class=\"btn btn-primary col-sm-12\">\n                        <span>Choose Image</span>\n                        <input formControlName=\"image\" class=\"form-control\" #imageInput accept=\".png, .jpg, .jpeg\"\n                            type=\"file\">\n                    </div>\n\n                    <div class=\"button-group\">\n                        <button [disabled]=\"!imageForm.valid\" class=\"btn btn-primary\" type=\"submit\">Upload</button>\n                    </div>\n                </div>\n                <div [hidden]=\"!loading\" class=\"col-sm-12 justify-content-center\">\n                    <button class=\"btn btn-primary\" type=\"button\" disabled>\n                        <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n                        <span class=\"sr-only\">Loading...</span>\n                    </button>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div *ngFor=\"let image of images\" class=\"col-sm-12 col-md-4\">\n            <mat-card class=\"image-card\">\n                <mat-card-title class=\"text-center\">{{image.name}}</mat-card-title>\n                <mat-card-content>\n                    <img class=\"img-fluid rounded mx-auto d-block\" mat-card-sm-image src=\"{{image.imageUrl}}\">\n                </mat-card-content>\n                <mat-card-actions>\n                    <button [hidden]=\"loading\" (click)=\"deleteImage(image.id)\" mat-raised-button\n                        class=\"mat-warn deleteButton\">Delete</button>\n                    <button [hidden] =\"!loading\" class=\"btn btn-primary\" type=\"button\" disabled>\n                        <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n                        <span class=\"sr-only\">Loading...</span>\n                    </button>\n                </mat-card-actions>\n            </mat-card>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin/login/login.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div [hidden]=\"!error\" class=\" col-sm-12 alert alert-danger\">\n        Invalid credentials\n    </div>\n    <div [hidden]=\"isLoggedIn\">\n        <mat-grid-list rowHeight=\"200\" [cols]=\"6\" [style.margin-top]=\"'150px'\">\n            <mat-grid-tile [colspan]=\"1\">\n            </mat-grid-tile>\n            <mat-grid-tile [colspan]=\"4\">\n                <form [formGroup]=\"loginForm\" (submit)=\"onSubmit()\">\n                    <mat-form-field class=\"full-width\">\n                        <input formControlName=\"name\" matInput type=\"text\" name=\"username\" placeholder=\"Your Username\"\n                            [(ngModel)]=\"credentials.username\" id=\"username\">\n                    </mat-form-field>\n                    <mat-form-field class=\"full-width\">\n                        <input formControlName=\"password\" matInput [type]=\"hide ? 'password' : 'text'\" name=\"username\"\n                            placeholder=\"Your Password\" [(ngModel)]=\"credentials.password\" id=\"password\">\n                        <button type=\"button\" mat-icon-button matSuffix (click)=\"hidden()\"\n                            [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                            <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                        </button>\n                    </mat-form-field>\n                    <div>\n                        <button [disabled]=\"!loginForm.valid\" matInput mat-raised-button type=\"submit\"\n                            class=\"mat-primary\">Login</button>\n                    </div>\n\n                </form>\n            </mat-grid-tile>\n        </mat-grid-list>\n            <div [hidden]=\"!success\" class=\" col-sm-12 alert alert-success\">\n                Logged in Successfully\n    </div>\n    </div>\n    <div [ngStyle]=\"{textAlign: center}\" [hidden]=\"!isLoggedIn\">\n        <h1>Welcome to Blackstone</h1>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin/menu/add-menu/add-menu.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin/menu/add-menu/add-menu.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div [hidden]=\"menuAdded\">\n                <h3>New Menu Information<span>* is a required field</span></h3>\n                <form [formGroup]=\"menuForm\" (submit)=\"onSubmit()\">\n                    <mat-grid-list cols=\"4\" rowHeight=\"60px\">\n                        <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n                            <mat-form-field class=\"full-width\">\n                                <input formControlName=\"name\" type=\"text\" matInput id=\"name\" name=\"name\" [(ngModel)]=\"menu.name\" required\n                                    placeholder=\"Name of the Menu\">\n                            </mat-form-field>\n                        </mat-grid-tile>\n                    </mat-grid-list>\n                    <mat-grid-list cols=\"4\" rowHeight=\"60px\">\n                        <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n                            <mat-form-field class=\"full-width\">\n                                <input formControlName=\"description\" type=\"text\" matInput id=\"description\" name=\"description\"\n                                    [(ngModel)]=\"menu.description\" required placeholder=\"Description...\">\n                            </mat-form-field>\n                        </mat-grid-tile>\n                    </mat-grid-list>\n                    <mat-grid-list cols=\"4\" rowHeight=\"60px\">\n                        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n                            <mat-form-field class=\"full-width\">\n                                <input formControlName=\"price\" matInput type=\"number\" required id=\"price\" name=\"price\" [(ngModel)]=\"menu.price\"\n                                    placeholder=\"Price\">\n                            </mat-form-field>\n                        </mat-grid-tile>\n                    </mat-grid-list>\n                    <mat-grid-list cols=\"4\" rowHeight=\"60px\">\n                        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n                            <mat-form-field class=\"full-width\">\n                                <input formControlName=\"addExtra\" type=\"text\" matInput id=\"addExtra\" name=\"addExtra\" [(ngModel)]=\"menu.addExtra\"\n                                    placeholder=\"Add Extra\">\n                            </mat-form-field>\n                        </mat-grid-tile>\n                        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n                            <mat-form-field class=\"full-width\">\n                                <input formControlName=\"addedPrice\" type=\"number\" matInput id=\"addedPrice\" name=\"addedPrice\"\n                                    [(ngModel)]=\"menu.addedPrice\" placeholder=\"Added price\">\n                            </mat-form-field>\n                        </mat-grid-tile>\n                    </mat-grid-list>\n                    <mat-grid-list cols=\"4\" rowHeight=\"80px\">\n                        <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\n                            <mat-checkbox formControlName=\"control\" required  [checked]=\"menu.burger\"\n                                [(ngModel)]=\"menu.burger\">Menu is Burger</mat-checkbox>\n                        </mat-grid-tile>\n                        <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\n                            <mat-checkbox formControlName=\"control\" required  [checked]=\"menu.breakFast\" \n                                [(ngModel)]=\"menu.breakFast\">Menu is BreakFast</mat-checkbox>\n                            <!-- </mat-form-field> -->\n                        </mat-grid-tile>\n                        <mat-grid-tile  [colspan]=\"1\" [rowspan]=\"1\">\n                            <mat-checkbox formControlName=\"control\"  [checked]=\"menu.pasta\" \n                                [(ngModel)]=\"menu.pasta\">Menu is Pasta</mat-checkbox>\n                        </mat-grid-tile>\n                        <mat-grid-tile  [colspan]=\"1\" [rowspan]=\"1\">\n                            <mat-checkbox formControlName=\"control\" required [checked]=\"menu.salad\" \n                                [(ngModel)]=\"menu.salad\">Menu is Salad</mat-checkbox>\n                        </mat-grid-tile>\n                    </mat-grid-list>\n                    <mat-grid-list cols=\"2\" rowHeight=\"60px\">\n                        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n                            <button [disabled]=\"!menuForm.valid\" matInput mat-raised-button class=\"mat-primary\" type=\"submit\">Add Menu</button>\n                        </mat-grid-tile>\n                        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n                            <button matInput mat-raised-button class=\"mat-warn\" [routerLink]=\"['/menu']\">Cancel</button>\n                        </mat-grid-tile>\n                    </mat-grid-list>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin/menu/menu-item/menu-item.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin/menu/menu-item/menu-item.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div *ngIf=\"menu else null\">\n                <div class=\"panel panel-primary\">\n                    <div class=\"panel-heading\">\n                        <h3>Menu Information</h3>\n                    </div>\n                    <div class=\"panel-body\">\n                        <ul class=\"list-group\">\n                            <li class=\"list-group-item\">Name: {{menu.name}}</li>\n                            <li class=\"list-group-item\">Description: {{menu.description}}</li>\n                            <li class=\"list-group-item\">Price: ${{menu.price}}</li>\n                            <li class=\"list-group-item\">Add Extra: {{menu.addExtra}}</li>\n                            <li class=\"list-group-item\">Added Price: {{menu.addedPrice}}</li>\n                            <li class=\"list-group-item\">Created on: {{dateConverter(menu.createdOn)}}</li>\n                        </ul>\n                        <div class=\"btn-group justify\">\n                            <button type=\"button\" class=\"btn btn-primary\" mat-raised-button\n                                [routerLink]=\"['/add-menu', menu.id]\" routerLinkActive=\"router-link-active\">Edit\n                                Menu</button>\n                            <button type=\"button\" (click)=\"deleteMenu(menu.id)\" mat-raised-button\n                                class=\"btn btn-danger\">\n                                Delete Menu</button>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin/menu/menu-list/menu-list.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin/menu/menu-list/menu-list.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <h2 class=\"text-center\">Breakfast</h2>\n            <table mat-table [dataSource]=\"breakfastList\" class=\"mat-elevation-z8\" (click)=\"testFunc()\">\n                <div class=\"container\">\n                    <ng-container matColumnDef=\"title\">\n                        <th mat-header-cell *matHeaderCellDef>Name</th>\n                        <td style=\"cursor: pointer;\" mat-cell *matCellDef=\"let menu\"\n                            [routerLink]=\"['/menuById', menu.id]\" routerLinkActive=\"router-link-active\">\n                            {{menu.name}}\n                        </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"price\">\n                        <th mat-header-cell *matHeaderCellDef>Price</th>\n                        <td mat-cell *matCellDef=\"let menu\">${{menu.price}}</td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"createdOn\">\n                        <th mat-header-cell *matHeaderCellDef>Created On</th>\n                        <td mat-cell *matCellDef=\"let menu\">{{convertDate(menu.createdOn)}}</td>\n                    </ng-container>\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n                </div>\n            </table>\n            <div>\n                <h2 class=\"text-center\">Lunch</h2>\n                <hr>\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <h5 class=\"text-center\">Salads</h5>\n                        <table mat-table [dataSource]=\"saladsList\" class=\"mat-elevation-z8\" (click)=\"testFunc()\">\n                            <div class=\"container\">\n                                <ng-container matColumnDef=\"title\">\n                                    <th mat-header-cell *matHeaderCellDef>Name</th>\n                                    <td style=\"cursor: pointer;\" mat-cell *matCellDef=\"let menu\"\n                                        [routerLink]=\"['/menuById', menu.id]\" routerLinkActive=\"router-link-active\">\n                                        {{menu.name}}\n                                    </td>\n                                </ng-container>\n                                <ng-container matColumnDef=\"price\">\n                                    <th mat-header-cell *matHeaderCellDef>Price</th>\n                                    <td mat-cell *matCellDef=\"let menu\">${{menu.price}}</td>\n                                </ng-container>\n                                <ng-container matColumnDef=\"createdOn\">\n                                    <th mat-header-cell *matHeaderCellDef>Created On</th>\n                                    <td mat-cell *matCellDef=\"let menu\">{{convertDate(menu.createdOn)}}</td>\n                                </ng-container>\n                                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                                <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n                            </div>\n                        </table>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <h5 class=\"text-center\">Pasta</h5>\n                        <table mat-table [dataSource]=\"pastaList\" class=\"mat-elevation-z8\" (click)=\"testFunc()\">\n                            <div class=\"container\">\n                                <ng-container matColumnDef=\"title\">\n                                    <th mat-header-cell *matHeaderCellDef>Name</th>\n                                    <td style=\"cursor: pointer;\" mat-cell *matCellDef=\"let menu\"\n                                        [routerLink]=\"['/menuById', menu.id]\" routerLinkActive=\"router-link-active\">\n                                        {{menu.name}}\n                                    </td>\n                                </ng-container>\n                                <ng-container matColumnDef=\"price\">\n                                    <th mat-header-cell *matHeaderCellDef>Price</th>\n                                    <td mat-cell *matCellDef=\"let menu\">${{menu.price}}</td>\n                                </ng-container>\n                                <ng-container matColumnDef=\"createdOn\">\n                                    <th mat-header-cell *matHeaderCellDef>Created On</th>\n                                    <td mat-cell *matCellDef=\"let menu\">{{convertDate(menu.createdOn)}}</td>\n                                </ng-container>\n                                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                                <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n                            </div>\n                        </table>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <h5 class=\"text-center\">Burgers</h5>\n                        <table mat-table [dataSource]=\"burgersList\" class=\"mat-elevation-z8\" (click)=\"testFunc()\">\n                            <div class=\"container\">\n                                <ng-container matColumnDef=\"title\">\n                                    <th mat-header-cell *matHeaderCellDef>Name</th>\n                                    <td style=\"cursor: pointer;\" mat-cell *matCellDef=\"let menu\"\n                                        [routerLink]=\"['/menuById', menu.id]\" routerLinkActive=\"router-link-active\">\n                                        {{menu.name}}\n                                    </td>\n                                </ng-container>\n                                <ng-container matColumnDef=\"price\">\n                                    <th mat-header-cell *matHeaderCellDef>Price</th>\n                                    <td mat-cell *matCellDef=\"let menu\">${{menu.price}}</td>\n                                </ng-container>\n                                <ng-container matColumnDef=\"createdOn\">\n                                    <th mat-header-cell *matHeaderCellDef>Created On</th>\n                                    <td mat-cell *matCellDef=\"let menu\">{{convertDate(menu.createdOn)}}</td>\n                                </ng-container>\n                                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                                <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n                            </div>\n                        </table>\n                    </div>\n                </div>\n            </div>\n            <span><a mat-raised-button [routerLink]=\"['/add-menu']\" class=\"mat-primary\"\n                    routerLinkActive=\"router-link-active\">Add\n                    Menu</a></span>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin/nav-bar/nav-bar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin/nav-bar/nav-bar.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar [hidden]=\"!isLoggedIn\" color=\"primary\">\n        <h3 class=\"example-spacer\" [ngStyle]=\"{color: white}\">Blackstone\n        </h3>\n        <span class=\"example-spacer\"></span>\n        <span [hidden]=\"!isLoggedIn\" [routerLink]=\"['/image']\" routerLinkActive=\"router-link-active\"><a\n                        mat-button>Gallery</a></span>\n        <span [hidden]=\"!isLoggedIn\" [routerLink]=\"['/menu']\" routerLinkActive=\"router-link-active\"><a\n                        mat-button>Menu</a></span>\n        <span [hidden]=\"!isLoggedIn\" [routerLink]=\"['/category-list']\" routerLinkActive=\"router-link-active\"><a\n                        mat-button>Category</a></span>\n        <span [hidden]=\"!isLoggedIn\"><a mat-button [routerLink]=\"['/catering']\"\n                        routerLinkActive=\"router-link-active\">Catering</a></span>\n        <span [hidden]=\"!isLoggedIn\"><a mat-button (click)=\"logout()\">Logout</a></span>\n</mat-toolbar>\n<nav [hidden]=\"isLoggedIn\" class=\"navbar navbar-light navbar-expand-md navigation-clean\">\n        <div class=\"row\">\n                <a class=\"navbar-brand\" href=\"#\" style=\"font-family: Poppins, sans-serif;font-size: 30px;\">Blackstone Cafe</a>\n                <button data-toggle=\"collapse\" class=\"navbar-toggler collapsed\" data-target=\"#navcol-1\">\n                        <span class=\"sr-only\">Toggle navigation</span>\n                        <span class=\"navbar-toggler-icon\"></span>\n                </button>\n                <div class=\"navbar-collapse collapse\" id=\"navcol-1\">\n                        <ul class=\"nav navbar-nav ml-auto\">\n                                <li class=\"nav-item\" role=\"presentation\">\n                                        <a class=\"nav-link\" style=\"font-size: 20px;\" href=\"#\">About</a>\n                                </li>\n                                <li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link\" href=\"#\" style=\"font-size: 20px;\">Reservation</a></li>\n                                <li class=\"nav-item\" role=\"presentation\">\n                                        <a class=\"nav-link\" href=\"#\" style=\"font-size: 20px;\">Contact us</a>\n                                </li>\n                                <li class=\"dropdown nav-item\"><a class=\"dropdown-toggle nav-link\" data-toggle=\"dropdown\" aria-expanded=\"false\" href=\"#\" style=\"font-size: 20px;\">More</a>\n                                <div class=\"dropdown-menu\" role=\"menu\">\n                                        <a class=\"dropdown-item\" role=\"presentation\" [routerLink]=\"['/our-menu']\" routerLinkActive=\"router-link-active\" >Our Menu</a>\n                                        <a class=\"dropdown-item\" role=\"presentation\" href=\"#\">Gallery</a>\n                                        <a class=\"dropdown-item\" role=\"presentation\" href=\"events.html\">Events</a>\n                                </div>\n                                </li>\n                        </ul>\n                </div>\n        </div>\n\n</nav>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin/special-ofd/special-ofd.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin/special-ofd/special-ofd.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>special-ofd works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/ui/about/about.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/ui/about/about.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container .home-section-1\">\n    <div class=\"row\">\n        <div class=\"col-md-6\" style=\"margin-top: 70px;\">\n            <h1 class=\"text-center home-grid-heading\" style=\"font-family: Courgette, cursive;color: rgb(238,12,26);\">\n                Some Restaraunt</h1>\n            <h1 class=\"text-center\" style=\"font-family: Poppins, sans-serif;\">Welcome</h1>\n            <p class=\"text-center\"><br>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots\n                in a piece of classical Latin literature from 45 BC,&nbsp;<br><br></p>\n            <p class=\"text-center\"><button class=\"btn btn-secondary btn-sm\" type=\"button\">More About us</button></p>\n        </div>\n        <div class=\"col-md-6\"><img class=\"rounded img-fluid\" style=\"height: 402px;margin: 0px;margin-top: 70px;\"\n                src=\"../../../../assets/bcicon.png\" width=\"400px\" height=\"60vh\"></div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/ui/carousel/carousel.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/ui/carousel/carousel.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"fw_al_007\" class=\"carousel ps_rotate_scale_c ps_indicators_l ps_control_rotate_f swipe_x ps_easeOutQuint\"\n    data-ride=\"carousel\" data-pause=\"hover\" data-interval=\"5000\" data-duration=\"2000\">\n\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\">\n        <li data-target=\"#fw_al_007\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#fw_al_007\" data-slide-to=\"1\"></li>\n        <li data-target=\"#fw_al_007\" data-slide-to=\"2\"></li>\n    </ol>\n\n    <!-- Wrapper For Slides -->\n    <div class=\"carousel-inner\" role=\"listbox\">\n\n        <!-- First Slide -->\n        <div class=\"carousel-item active\">\n\n            <!-- Slide Background -->\n            <img src=\"https://scontent.fcbr2-1.fna.fbcdn.net/v/t1.0-9/35545495_387604691759943_54429390397767680_n.jpg?_nc_cat=106&_nc_oc=AQnueKBRtIqkWA2b1--FFz9PbtHiaCCXg1Ye2paUNIDkQ0espn8b40iv4KgkyqANQE0&_nc_ht=scontent.fcbr2-1.fna&oh=a66da40a429cc6547435f3949264ab4e&oe=5DF7176F\" alt=\"fw_al_007_01\">\n\n            <!-- Slide Text Layer -->\n            <div class=\"fw_al_007_slide\">\n                <h3 data-animation=\"animated flipInX\">my restaraunt</h3>\n                <h1 data-animation=\"animated flipInX\"><span>AWESOME</span> Food</h1>\n                <p data-animation=\"animated flipInX\">Vestibulum et urna aliquam pretium urna nec dapibus vehicula tellus\n                </p>\n                <a href=\"#\" data-animation=\"animated flipInX\">Our Menu</a>\n            </div>\n        </div>\n        <div class=\"carousel-item\">\n\n            <!-- Slide Background -->\n            <img src=\"https://scontent.fcbr2-1.fna.fbcdn.net/v/t1.0-9/66465449_634585277061882_8895897565266968576_n.jpg?_nc_cat=106&_nc_oc=AQl7hAL3nZ5WBj3zse18k9K9nuyBqM23w22DN5AhUloLLvqSatNxzhrk-Zd-kWIrwzk&_nc_ht=scontent.fcbr2-1.fna&oh=c476950c65f5184e765f0067d89dcb2f&oe=5DF45BC7\" alt=\"fw_al_007_02\">\n\n            <!-- Slide Text Layer -->\n            <div class=\"fw_al_007_slide\">\n                <h3 data-animation=\"animated flipInX\">Reservations</h3>\n                <h1 data-animation=\"animated flipInX\"><span>Reserve</span> your table</h1>\n                <p data-animation=\"animated flipInX\">Vestibulum et urna aliquam pretium urna nec dapibus vehicula\n                    tellus</p>\n                <a href=\"#\" data-animation=\"animated flipInX\">Reserve Table</a>\n            </div>\n\n        </div>\n        <div class=\"carousel-item\">\n\n            <!-- Slide Background -->\n            <img src=\"https://scontent.fcbr2-1.fna.fbcdn.net/v/t1.0-9/46844888_503346586852419_3944689932504662016_n.jpg?_nc_cat=109&_nc_oc=AQnV71x5nlEdQjoeI9-nYqpi4_fnVSthJghMcC3wDzbRBfy9asF3Zg8r6ROuKdIMLcU&_nc_ht=scontent.fcbr2-1.fna&oh=46bc01505c671cec2bd3734dd5d40303&oe=5E1050F2\" alt=\"fw_al_007_03\">\n\n            <!-- Slide Text Layer -->\n            <div class=\"fw_al_007_slide\">\n                <h3 data-animation=\"animated flipInX\">Event's</h3>\n                <h1 data-animation=\"animated flipInX\"><span>Catering</span> Service</h1>\n                <p data-animation=\"animated flipInX\">Vestibulum et urna aliquam pretium urna nec dapibus vehicula tellus\n                </p>\n                <a href=\"#\" data-animation=\"animated flipInX\">Contact Us</a>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/ui/footer/footer.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/ui/footer/footer.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"row\">\n        <div class=\"col-sm-6 col-md-4 footer-navigation\">\n            <h3><a href=\"#\"><span><img class=\"footer-icon\" src=\"../../../../assets/blackstoneicon2.png\"></span></a></h3>\n            <p class=\"links\">\n                <a href=\"#\">Contact</a>\n                <a [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\" >Admin login</a>\n            </p>\n            <p class=\"company-name\">Blackstone © 2019</p>\n        </div>\n        <div class=\"col-sm-6 col-md-4 footer-contacts\">\n            <div><span class=\"fa fa-map-marker footer-contacts-icon\"> </span>\n                <p><span class=\"new-line-span\">CnrJerrabomberra Ave & Hindmarsh Dr</span>Symonston, ACT, Australia</p>\n            </div>\n            <div><i class=\"fa fa-phone footer-contacts-icon\"></i>\n                <p class=\"footer-center-info email text-left\"> +61 1234 123456</p>\n            </div>\n            <div><i class=\"fa fa-envelope footer-contacts-icon\"></i>\n                <p> <a href=\"#\" target=\"_blank\">support@company.com</a></p>\n            </div>\n        </div>\n        <div class=\"clearfix\"></div>\n        <div class=\"col-md-4 footer-about\">\n            <h4>About the company</h4>\n            <p> Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus\n                vehicula sit amet. </p>\n            <div class=\"social-links social-icons\">\n                <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n                <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n                <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n            </div>\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/ui/home/home.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/ui/home/home.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-carousel></app-carousel>\n<app-about></app-about>\n<app-reservation></app-reservation>\n<app-menu-feature></app-menu-feature>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/ui/menu-feature/menu-feature.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/ui/menu-feature/menu-feature.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-feature-block\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6\"><img class=\"rounded img-fluid home-feature-imge\" data-aos=\"flip-up\"\n                    data-aos-duration=\"900\" data-aos-delay=\"100\"\n                    src=\"https://scontent.fcbr2-1.fna.fbcdn.net/v/t1.0-9/37363186_417026215484457_1816804636888137728_n.jpg?_nc_cat=100&_nc_oc=AQm4BscGWPT105Mz5MYhgQmKn8BzEKMwOsUbCWqM1IKW1Q1ncQBzzAtyuWQVboKGBJg&_nc_ht=scontent.fcbr2-1.fna&oh=59444b0dc4dc92c85f13e831f80e63e3&oe=5DF8E55F\">\n                <h3 class=\"text-center\" style=\"font-family: Poppins, sans-serif;\">Catering Service</h3>\n                <p class=\"text-center\">Lorem Ipsum has been the industry's standard dummy text ever since the\n                    1500s,<br><br></p>\n            </div>\n            <div class=\"col-md-6\"><img class=\"rounded img-fluid home-feature-imge\" data-aos=\"flip-down\"\n                    data-aos-duration=\"900\" data-aos-delay=\"100\"\n                    src=\"https://scontent.fcbr2-1.fna.fbcdn.net/v/t1.0-9/53585273_565151360671941_8885768456130002944_n.jpg?_nc_cat=104&_nc_oc=AQn0whhN4DCrAQndtHoQWZ90q8fiYOB1a24Eb54xdDfzXwYJF7yjh02V17S7e6s-a7c&_nc_ht=scontent.fcbr2-1.fna&oh=a712e8f366e8e944db01173672f73e67&oe=5DF269AC\">\n                <h3 class=\"text-center\" style=\"font-family: Poppins, sans-serif;\">Delicious Food</h3>\n                <p class=\"text-center\">Lorem Ipsum has been the industry's standard dummy text ever since the\n                    1500s,<br><br><br></p>\n            </div>\n        </div>\n    </div>\n</div>\n<section style=\"background-color: #d9d9d9;\">\n    <h1 class=\"text-center menu-heading-1\" style=\"color: rgb(241,60,71);font-family: Courgette, cursive;\">Discover<br>\n    </h1>\n    <h1 class=\"text-center\" style=\"color: rgb(0,0,0);font-family: Poppins, sans-serif;\">Our Menu<br></h1>\n    <div class=\"container our-menu-container\">\n        <div class=\"row\">\n            <div class=\"col-md-4 our-menu-image\"><img class=\"rounded img-fluid our-menu-image\"\n                    src=\"https://scontent.fcbr2-1.fna.fbcdn.net/v/t1.0-9/55448467_567391420447935_4394288208561569792_n.jpg?_nc_cat=106&_nc_oc=AQmp0CXW8WEWi96Ge0D7O0EhRnG9-7qjb1oyDBzjoEKuHwYc6Savtbz4rIiDTghGMv0&_nc_ht=scontent.fcbr2-1.fna&oh=5da21644c0f4a97f50fe88d09355d45d&oe=5DFEE5CB\" width=\"300px\"><button\n                    class=\"btn btn-primary our-menu-btn\" type=\"button\">Breakfast</button></div>\n            <div class=\"col-md-4\"><img class=\"rounded img-fluid our-menu-image\"\n                    src=\"https://scontent.fcbr2-1.fna.fbcdn.net/v/t1.0-9/36826290_406846389835773_8477994636026052608_n.jpg?_nc_cat=110&_nc_oc=AQk3B9Ay3ErnX0_J2GWfWQua2BayxK8LL-V6bFgiEkJaDxGCE8nfq3MhXyRgE8cCfSQ&_nc_ht=scontent.fcbr2-1.fna&oh=c3a8ff20357d5491640efe56320ddca6&oe=5E001B20\" width=\"300px\"><button\n                    class=\"btn btn-primary our-menu-btn\" type=\"button\">Lunch</button></div>\n            <div class=\"col-md-4\"><img class=\"rounded img-fluid our-menu-image\"\n                    src=\"https://scontent.fcbr2-1.fna.fbcdn.net/v/t1.0-9/19399827_222266468293767_5293410222836914583_n.jpg?_nc_cat=111&_nc_oc=AQmjegahJcOMqXC25pYJbpXCMGkEBf4RT7Y1mTgazdfNogACwkF0HFNS7geCvRoO9f0&_nc_ht=scontent.fcbr2-1.fna&oh=fe36d3add96930c6a110904abfd26906&oe=5E0064C0\" width=\"300px\"><button\n                    class=\"btn btn-primary our-menu-btn\" type=\"button\">Cofee</button></div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/ui/reservation/reservation.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/ui/reservation/reservation.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"row\">\n        <div class=\"col\" style=\"background-color: #d9d9d9;\">\n            <h1 class=\"text-center call-to-action-booking\" style=\"font-family: Poppins, sans-serif;background-color: #d9d9d9;\">Reserve a table&nbsp;&nbsp;</h1>\n            <p class=\"text-center\" style=\"font-family: Courgette, cursive;\"><br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br></p>\n            <div class=\"text-center home-modal-button-reservation\"><a class=\"btn btn-primary btn-lg\" role=\"button\" data-toggle=\"modal\" href=\"#myModal\">Book a Table</a>\n                <div class=\"modal fade\" role=\"dialog\" tabindex=\"-1\" id=\"myModal\">\n                    <div class=\"modal-dialog\" role=\"document\">\n                        <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                                <h4>Reserve A Table</h4><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button></div>\n                            <div class=\"modal-body\">\n                                <p class=\"text-center text-muted\"></p>\n                                <div class=\"form-group\">\n                                    <form><input class=\"border rounded-0 form-control\" type=\"text\" placeholder=\"Your Name\"></form>\n                                </div>\n                                <div class=\"form-group\">\n                                    <form><input class=\"border rounded form-control\" type=\"email\" placeholder=\"Email\"></form>\n                                </div>\n                                <div class=\"form-group\">\n                                    <form><input class=\"form-control\" type=\"tel\" placeholder=\"Contact Phone\"></form>\n                                </div>\n                                <div class=\"form-group text-left\"><input type=\"number\" value=\"Person\" placeholder=\"No. of People\" min=\"1\" max=\"20\" style=\"width: 100%;\"></div>\n                                <div class=\"form-group text-left\"><div>\n<input placeholder=\"time\" type=\"time\" id=\"appt\" name=\"appt\"\n       min=\"9:00\" max=\"18:00\" style=\"width: 100%;\"  required>\n    <p>Time</p>\n</div></div>\n                                <div class=\"form-group text-left\"><input type=\"date\"></div>\n                            </div>\n                            <div class=\"modal-footer\"><button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\">Cancel</button><button class=\"btn btn-primary\" type=\"button\">Book</button></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/ui/ui-menu/ui-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/ui/ui-menu/ui-menu.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron header-jumbotron-display\" style=\"height: 250px;\">\n    <h1 class=\"text-center jumbotron-header\" style=\"font-family: Poppins, sans-serif;color: rgb(246,247,248);\">Our Menu\n    </h1>\n    <p></p>\n</div>\n<h1 class=\"text-center\" style=\"color: rgb(215,8,8);font-family: Courgette, cursive;\">Fan Favorite</h1>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div>\n                <h3 style=\"font-family: Poppins, sans-serif;\">STARTERS<br></h3>\n                <div *ngFor=\"let menu of menuList\" class=\"row\">\n                    <div class=\"col-md-6\">\n                        <p style=\"font-family: Poppins, sans-serif;\">{{menu.name}}</p>\n                        <p class=\"food-description\" style=\"font-family: Courgette, cursive;font-size: 13px;\">\n                            {{menu.description}}</p>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <p class=\"text-right\" style=\"font-family: Poppins, sans-serif;\">{{menu.price| currency}}<br></p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'blackstone-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/login.service */ "./src/app/service/login.service.ts");
/* harmony import */ var _service_add_menu_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/add-menu.service */ "./src/app/service/add-menu.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/shared.service */ "./src/app/shared/shared.service.ts");
/* harmony import */ var _service_catering_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/catering.service */ "./src/app/service/catering.service.ts");
/* harmony import */ var _service_tag_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/tag.service */ "./src/app/service/tag.service.ts");
/* harmony import */ var _components_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/admin/nav-bar/nav-bar.component */ "./src/app/components/admin/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_admin_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/admin/login/login.component */ "./src/app/components/admin/login/login.component.ts");
/* harmony import */ var _components_admin_menu_add_menu_add_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/admin/menu/add-menu/add-menu.component */ "./src/app/components/admin/menu/add-menu/add-menu.component.ts");
/* harmony import */ var _components_admin_menu_menu_list_menu_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/admin/menu/menu-list/menu-list.component */ "./src/app/components/admin/menu/menu-list/menu-list.component.ts");
/* harmony import */ var _components_admin_menu_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/admin/menu/menu-item/menu-item.component */ "./src/app/components/admin/menu/menu-item/menu-item.component.ts");
/* harmony import */ var _components_admin_catering_add_catering_add_catering_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/admin/catering/add-catering/add-catering.component */ "./src/app/components/admin/catering/add-catering/add-catering.component.ts");
/* harmony import */ var _components_admin_catering_catering_list_catering_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/admin/catering/catering-list/catering-list.component */ "./src/app/components/admin/catering/catering-list/catering-list.component.ts");
/* harmony import */ var _components_admin_catering_catering_item_catering_item_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/admin/catering/catering-item/catering-item.component */ "./src/app/components/admin/catering/catering-item/catering-item.component.ts");
/* harmony import */ var _components_admin_category_tag_tag_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/admin/category/tag/tag.component */ "./src/app/components/admin/category/tag/tag.component.ts");
/* harmony import */ var _components_admin_category_tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/admin/category/tag-list/tag-list.component */ "./src/app/components/admin/category/tag-list/tag-list.component.ts");
/* harmony import */ var _components_admin_catering_tagged_catering_list_tagged_catering_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/admin/catering/tagged-catering-list/tagged-catering-list.component */ "./src/app/components/admin/catering/tagged-catering-list/tagged-catering-list.component.ts");
/* harmony import */ var _components_admin_image_image_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/admin/image/image.component */ "./src/app/components/admin/image/image.component.ts");
/* harmony import */ var _components_admin_special_ofd_special_ofd_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/admin/special-ofd/special-ofd.component */ "./src/app/components/admin/special-ofd/special-ofd.component.ts");
/* harmony import */ var _components_ui_home_home_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/ui/home/home.component */ "./src/app/components/ui/home/home.component.ts");
/* harmony import */ var _components_ui_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/ui/carousel/carousel.component */ "./src/app/components/ui/carousel/carousel.component.ts");
/* harmony import */ var _components_ui_about_about_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/ui/about/about.component */ "./src/app/components/ui/about/about.component.ts");
/* harmony import */ var _components_ui_reservation_reservation_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/ui/reservation/reservation.component */ "./src/app/components/ui/reservation/reservation.component.ts");
/* harmony import */ var _components_ui_menu_feature_menu_feature_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/ui/menu-feature/menu-feature.component */ "./src/app/components/ui/menu-feature/menu-feature.component.ts");
/* harmony import */ var _components_ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/ui/footer/footer.component */ "./src/app/components/ui/footer/footer.component.ts");
/* harmony import */ var _components_ui_ui_menu_ui_menu_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/ui/ui-menu/ui-menu.component */ "./src/app/components/ui/ui-menu/ui-menu.component.ts");




































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_16__["NavBarComponent"],
            _components_admin_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
            _components_admin_menu_add_menu_add_menu_component__WEBPACK_IMPORTED_MODULE_18__["AddMenuComponent"],
            _components_admin_menu_menu_list_menu_list_component__WEBPACK_IMPORTED_MODULE_19__["MenuListComponent"],
            _components_admin_menu_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_20__["MenuItemComponent"],
            _components_admin_catering_add_catering_add_catering_component__WEBPACK_IMPORTED_MODULE_21__["AddCateringComponent"],
            _components_admin_catering_catering_list_catering_list_component__WEBPACK_IMPORTED_MODULE_22__["CateringListComponent"],
            _components_admin_catering_catering_item_catering_item_component__WEBPACK_IMPORTED_MODULE_23__["CateringItemComponent"],
            _components_admin_category_tag_tag_component__WEBPACK_IMPORTED_MODULE_24__["TagComponent"],
            _components_admin_category_tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_25__["TagListComponent"],
            _components_admin_catering_tagged_catering_list_tagged_catering_list_component__WEBPACK_IMPORTED_MODULE_26__["TaggedCateringListComponent"],
            _components_admin_image_image_component__WEBPACK_IMPORTED_MODULE_27__["ImageComponent"],
            _components_admin_special_ofd_special_ofd_component__WEBPACK_IMPORTED_MODULE_28__["SpecialOfdComponent"],
            _components_ui_home_home_component__WEBPACK_IMPORTED_MODULE_29__["HomeComponent"],
            _components_ui_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_30__["CarouselComponent"],
            _components_ui_about_about_component__WEBPACK_IMPORTED_MODULE_31__["AboutComponent"],
            _components_ui_reservation_reservation_component__WEBPACK_IMPORTED_MODULE_32__["ReservationComponent"],
            _components_ui_menu_feature_menu_feature_component__WEBPACK_IMPORTED_MODULE_33__["MenuFeatureComponent"],
            _components_ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_34__["FooterComponent"],
            _components_ui_ui_menu_ui_menu_component__WEBPACK_IMPORTED_MODULE_35__["UiMenuComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_8__["routing"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            // tslint:disable-next-line: deprecation
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        ],
        providers: [
            _service_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"],
            _service_add_menu_service__WEBPACK_IMPORTED_MODULE_11__["AddMenuService"],
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"], useValue: {} },
            _shared_shared_service__WEBPACK_IMPORTED_MODULE_13__["SharedService"],
            _service_catering_service__WEBPACK_IMPORTED_MODULE_14__["CateringService"],
            _service_tag_service__WEBPACK_IMPORTED_MODULE_15__["TagService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_admin_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/admin/login/login.component */ "./src/app/components/admin/login/login.component.ts");
/* harmony import */ var _components_admin_menu_menu_list_menu_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/admin/menu/menu-list/menu-list.component */ "./src/app/components/admin/menu/menu-list/menu-list.component.ts");
/* harmony import */ var _components_admin_menu_add_menu_add_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin/menu/add-menu/add-menu.component */ "./src/app/components/admin/menu/add-menu/add-menu.component.ts");
/* harmony import */ var _components_admin_menu_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin/menu/menu-item/menu-item.component */ "./src/app/components/admin/menu/menu-item/menu-item.component.ts");
/* harmony import */ var _components_admin_catering_add_catering_add_catering_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin/catering/add-catering/add-catering.component */ "./src/app/components/admin/catering/add-catering/add-catering.component.ts");
/* harmony import */ var _components_admin_catering_catering_list_catering_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin/catering/catering-list/catering-list.component */ "./src/app/components/admin/catering/catering-list/catering-list.component.ts");
/* harmony import */ var _components_admin_catering_catering_item_catering_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin/catering/catering-item/catering-item.component */ "./src/app/components/admin/catering/catering-item/catering-item.component.ts");
/* harmony import */ var _components_admin_category_tag_tag_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin/category/tag/tag.component */ "./src/app/components/admin/category/tag/tag.component.ts");
/* harmony import */ var _components_admin_category_tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/admin/category/tag-list/tag-list.component */ "./src/app/components/admin/category/tag-list/tag-list.component.ts");
/* harmony import */ var _components_admin_catering_tagged_catering_list_tagged_catering_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/admin/catering/tagged-catering-list/tagged-catering-list.component */ "./src/app/components/admin/catering/tagged-catering-list/tagged-catering-list.component.ts");
/* harmony import */ var _components_admin_image_image_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/admin/image/image.component */ "./src/app/components/admin/image/image.component.ts");
/* harmony import */ var _components_ui_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ui/home/home.component */ "./src/app/components/ui/home/home.component.ts");
/* harmony import */ var _components_ui_ui_menu_ui_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/ui/ui-menu/ui-menu.component */ "./src/app/components/ui/ui-menu/ui-menu.component.ts");














const appRoutes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _components_ui_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"]
    },
    {
        path: 'login',
        component: _components_admin_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    },
    {
        path: 'menu',
        component: _components_admin_menu_menu_list_menu_list_component__WEBPACK_IMPORTED_MODULE_2__["MenuListComponent"]
    },
    {
        path: 'add-menu',
        component: _components_admin_menu_add_menu_add_menu_component__WEBPACK_IMPORTED_MODULE_3__["AddMenuComponent"],
    },
    {
        path: 'add-menu/:id',
        component: _components_admin_menu_add_menu_add_menu_component__WEBPACK_IMPORTED_MODULE_3__["AddMenuComponent"]
    },
    {
        path: 'menuById/:id',
        component: _components_admin_menu_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_4__["MenuItemComponent"]
    },
    {
        path: 'add-catering',
        component: _components_admin_catering_add_catering_add_catering_component__WEBPACK_IMPORTED_MODULE_5__["AddCateringComponent"]
    },
    {
        path: 'add-catering/:id',
        component: _components_admin_catering_add_catering_add_catering_component__WEBPACK_IMPORTED_MODULE_5__["AddCateringComponent"]
    },
    {
        path: 'catering',
        component: _components_admin_catering_catering_list_catering_list_component__WEBPACK_IMPORTED_MODULE_6__["CateringListComponent"]
    },
    {
        path: 'catering/:id',
        component: _components_admin_catering_catering_item_catering_item_component__WEBPACK_IMPORTED_MODULE_7__["CateringItemComponent"]
    },
    {
        path: 'add-category',
        component: _components_admin_category_tag_tag_component__WEBPACK_IMPORTED_MODULE_8__["TagComponent"]
    },
    {
        path: 'add-category/:id',
        component: _components_admin_category_tag_tag_component__WEBPACK_IMPORTED_MODULE_8__["TagComponent"]
    },
    {
        path: 'category-list',
        component: _components_admin_category_tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_9__["TagListComponent"]
    },
    {
        path: 'catering/tagName/:tagName',
        component: _components_admin_catering_tagged_catering_list_tagged_catering_list_component__WEBPACK_IMPORTED_MODULE_10__["TaggedCateringListComponent"]
    },
    {
        path: 'image',
        component: _components_admin_image_image_component__WEBPACK_IMPORTED_MODULE_11__["ImageComponent"]
    },
    {
        path: 'our-menu',
        component: _components_ui_ui_menu_ui_menu_component__WEBPACK_IMPORTED_MODULE_13__["UiMenuComponent"]
    }
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/components/admin/category/tag-list/tag-list.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/admin/category/tag-list/tag-list.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create {\n    margin: 4px;\n    padding-left: 40%;  \n}\n.tagButton {\n    display: -webkit-box;\n    display: flex;\n    width: 100%;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    margin: 10px;\n    padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9jYXRlZ29yeS90YWctbGlzdC90YWctbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsV0FBVztJQUNYLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluL2NhdGVnb3J5L3RhZy1saXN0L3RhZy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlYXRlIHtcbiAgICBtYXJnaW46IDRweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwJTsgIFxufVxuLnRhZ0J1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/admin/category/tag-list/tag-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/admin/category/tag-list/tag-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: TagListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagListComponent", function() { return TagListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_tag_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/tag.service */ "./src/app/service/tag.service.ts");



let TagListComponent = class TagListComponent {
    constructor(tagService) {
        this.tagService = tagService;
    }
    ngOnInit() {
        this.tagService.getTags(0, 10).subscribe((res) => {
            if (res.ok) {
                this.tagList = res.json().content;
            }
        }, error => {
            console.error(error);
        });
    }
};
TagListComponent.ctorParameters = () => [
    { type: src_app_service_tag_service__WEBPACK_IMPORTED_MODULE_2__["TagService"] }
];
TagListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tag-list',
        template: __webpack_require__(/*! raw-loader!./tag-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin/category/tag-list/tag-list.component.html"),
        styles: [__webpack_require__(/*! ./tag-list.component.css */ "./src/app/components/admin/category/tag-list/tag-list.component.css")]
    })
], TagListComponent);



/***/ }),

/***/ "./src/app/components/admin/category/tag/tag.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/admin/category/tag/tag.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vY2F0ZWdvcnkvdGFnL3RhZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/admin/category/tag/tag.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/admin/category/tag/tag.component.ts ***!
  \****************************************************************/
/*! exports provided: TagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return TagComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_models_catering__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/catering */ "./src/models/catering.ts");
/* harmony import */ var src_app_service_tag_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/tag.service */ "./src/app/service/tag.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let TagComponent = class TagComponent {
    constructor(tagService, route, router) {
        this.tagService = tagService;
        this.route = route;
        this.router = router;
        this.tag = new src_models_catering__WEBPACK_IMPORTED_MODULE_2__["Tag"]();
    }
    showForm() {
    }
    onSubmit() {
        if (this.tagId !== null && this.tagId !== undefined) {
            this.tagService.updateTags(this.tagId, this.tag).subscribe((res) => {
                if (res.ok) {
                    confirm('Category updated successfully');
                    this.router.navigate(['/category-list']);
                }
            }, error => console.error(error));
        }
        this.tagService.postTags(this.tag).subscribe((res) => {
            if (res.ok) {
                this.tag = new src_models_catering__WEBPACK_IMPORTED_MODULE_2__["Tag"]();
            }
        }, error => {
            console.error(error);
        });
    }
    ngOnInit() {
        this.route.params.subscribe((res) => {
            if (res !== null && res.id !== undefined) {
                this.tagService.getTagById(res.id).subscribe((response) => {
                    if (response.ok) {
                        this.tag = response.json();
                        this.tagId = res.id;
                    }
                }, error => {
                    console.error(error);
                });
            }
        });
    }
};
TagComponent.ctorParameters = () => [
    { type: src_app_service_tag_service__WEBPACK_IMPORTED_MODULE_3__["TagService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
TagComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tag',
        template: __webpack_require__(/*! raw-loader!./tag.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin/category/tag/tag.component.html"),
        styles: [__webpack_require__(/*! ./tag.component.css */ "./src/app/components/admin/category/tag/tag.component.css")]
    })
], TagComponent);



/***/ }),

/***/ "./src/app/components/admin/catering/add-catering/add-catering.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/admin/catering/add-catering/add-catering.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vY2F0ZXJpbmcvYWRkLWNhdGVyaW5nL2FkZC1jYXRlcmluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/admin/catering/add-catering/add-catering.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/admin/catering/add-catering/add-catering.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AddCateringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCateringComponent", function() { return AddCateringComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_models_catering__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/catering */ "./src/models/catering.ts");
/* harmony import */ var src_app_service_tag_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/tag.service */ "./src/app/service/tag.service.ts");
/* harmony import */ var src_app_service_catering_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/catering.service */ "./src/app/service/catering.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let AddCateringComponent = class AddCateringComponent {
    constructor(route, tagService, cateringService, router) {
        this.route = route;
        this.tagService = tagService;
        this.cateringService = cateringService;
        this.router = router;
        this.catering = new src_models_catering__WEBPACK_IMPORTED_MODULE_2__["Catering"]();
        this.tag = new src_models_catering__WEBPACK_IMPORTED_MODULE_2__["Tag"]();
        this.cateringAdded = false;
        this.cateringForm = this.cateringFormValidator();
    }
    cateringFormValidator() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            tag: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [(control) => !control.touched ? { required: true } : null]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].nullValidator]),
            minimumNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
            pricePerPerson: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])
        });
    }
    onSubmit() {
        if (this.cateringId !== null && this.cateringId !== undefined) {
            this.catering.tags = this.tags.filter(t => t.name === this.tag.name);
            this.cateringService.updateCatering(this.cateringId, this.catering).subscribe((res) => {
                if (res.ok) {
                    console.log('Catering updated.');
                }
            }, error => console.error(error));
        }
        else {
            this.catering.tags = this.tags.filter(t => t.name === this.tag.name);
            this.cateringService.addCatering(this.catering).subscribe((res) => {
                if (res.ok) {
                    this.cateringAdded = true;
                    this.router.navigate(['/catering']);
                }
            }, error => {
                console.error(error);
            });
        }
    }
    ngOnInit() {
        this.route.params.subscribe((res) => {
            if (res.id !== null && res.id !== undefined) {
                this.cateringService.getCateringById(res.id).subscribe((response) => {
                    if (response.ok) {
                        this.catering = response.json();
                        this.tag = this.catering.tags[0];
                    }
                }, error => console.error(error));
            }
        });
        this.catering.createdOn = new Date();
        this.tagService.getTags(0, 10).subscribe((res) => {
            if (res.ok) {
                this.tags = res.json().content;
            }
        }, error => {
            console.error(error);
        });
    }
};
AddCateringComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_service_tag_service__WEBPACK_IMPORTED_MODULE_3__["TagService"] },
    { type: src_app_service_catering_service__WEBPACK_IMPORTED_MODULE_4__["CateringService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AddCateringComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-catering',
        template: __webpack_require__(/*! raw-loader!./add-catering.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin/catering/add-catering/add-catering.component.html"),
        styles: [__webpack_require__(/*! ./add-catering.component.css */ "./src/app/components/admin/catering/add-catering/add-catering.component.css")]
    })
], AddCateringComponent);



/***/ }),

/***/ "./src/app/components/admin/catering/catering-item/catering-item.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/admin/catering/catering-item/catering-item.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vY2F0ZXJpbmcvY2F0ZXJpbmctaXRlbS9jYXRlcmluZy1pdGVtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/admin/catering/catering-item/catering-item.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/admin/catering/catering-item/catering-item.component.ts ***!
  \************************************************************************************/
/*! exports provided: CateringItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringItemComponent", function() { return CateringItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_catering_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/catering.service */ "./src/app/service/catering.service.ts");




let CateringItemComponent = class CateringItemComponent {
    constructor(route, cateringService, router) {
        this.route = route;
        this.cateringService = cateringService;
        this.router = router;
    }
    onDelete(id) {
        this.cateringService.deleteCaterinng(id).subscribe((res) => {
            if (res.ok) {
                console.log('Item deleted');
                this.router.navigate(['/catering']);
            }
        }, error => console.error(error));
    }
    ngOnInit() {
        this.route.params.subscribe(res => {
            if (res.id !== null && res.id !== undefined) {
                this.cateringId = res.id;
                this.cateringService.getCateringById(res.id).subscribe((response) => {
                    if (response.ok) {
                        this.catering = response.json();
                        this.tags = this.catering.tags;
                    }
                }, error => console.error(error));
            }
        });
    }
};
CateringItemComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_catering_service__WEBPACK_IMPORTED_MODULE_3__["CateringService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CateringItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-catering-item',
        template: __webpack_require__(/*! raw-loader!./catering-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin/catering/catering-item/catering-item.component.html"),
        styles: [__webpack_require__(/*! ./catering-item.component.css */ "./src/app/components/admin/catering/catering-item/catering-item.component.css")]
    })
], CateringItemComponent);



/***/ }),

/***/ "./src/app/components/admin/catering/catering-list/catering-list.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/admin/catering/catering-list/catering-list.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vY2F0ZXJpbmcvY2F0ZXJpbmctbGlzdC9jYXRlcmluZy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/admin/catering/catering-list/catering-list.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/admin/catering/catering-list/catering-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: CateringListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringListComponent", function() { return CateringListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_catering_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/catering.service */ "./src/app/service/catering.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let CateringListComponent = class CateringListComponent {
    constructor(cateringService) {
        this.cateringService = cateringService;
        this.displayedColumns = ['name', 'tag', 'minNum', 'price', 'createdOn'];
    }
    ngOnInit() {
        this.cateringService.getCatering(0, 10).subscribe((res) => {
            if (res.ok) {
                this.cateringList = res.json().content;
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.cateringList);
                this.dataSource.paginator = this.paginator;
            }
        }, error => {
            console.error(error);
        });
    }
};
CateringListComponent.ctorParameters = () => [
    { type: src_app_service_catering_service__WEBPACK_IMPORTED_MODULE_2__["CateringService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], CateringListComponent.prototype, "paginator", void 0);
CateringListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-catering-list',
        template: __webpack_require__(/*! raw-loader!./catering-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin/catering/catering-list/catering-list.component.html"),
        styles: [__webpack_require__(/*! ./catering-list.component.css */ "./src/app/components/admin/catering/catering-list/catering-list.component.css")]
    })
], CateringListComponent);



/***/ }),

/***/ "./src/app/components/admin/catering/tagged-catering-list/tagged-catering-list.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/admin/catering/tagged-catering-list/tagged-catering-list.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n    /* display: block; */\n    /* position: relative; */\n    /* padding: 16px;   */\n    margin: 10px;\n}\n\n.matCard{\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    /* flex-wrap:wrap; */\n    padding: 20px;\n    min-width:-webkit-fit-content;\n    min-width:-moz-fit-content;\n    min-width:fit-content;\n}\n\n.title {\n    min-width: 300px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9jYXRlcmluZy90YWdnZWQtY2F0ZXJpbmctbGlzdC90YWdnZWQtY2F0ZXJpbmctbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsNkJBQXFCO0lBQXJCLDBCQUFxQjtJQUFyQixxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluL2NhdGVyaW5nL3RhZ2dlZC1jYXRlcmluZy1saXN0L3RhZ2dlZC1jYXRlcmluZy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQge1xuICAgIC8qIGRpc3BsYXk6IGJsb2NrOyAqL1xuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbiAgICAvKiBwYWRkaW5nOiAxNnB4OyAgICovXG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4ubWF0Q2FyZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgLyogZmxleC13cmFwOndyYXA7ICovXG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtaW4td2lkdGg6Zml0LWNvbnRlbnQ7XG59XG4udGl0bGUge1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/admin/catering/tagged-catering-list/tagged-catering-list.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/admin/catering/tagged-catering-list/tagged-catering-list.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: TaggedCateringListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaggedCateringListComponent", function() { return TaggedCateringListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_catering_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/catering.service */ "./src/app/service/catering.service.ts");




let TaggedCateringListComponent = class TaggedCateringListComponent {
    constructor(activatedRoute, cateringService) {
        this.activatedRoute = activatedRoute;
        this.cateringService = cateringService;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((res) => {
            if (res.tagName !== undefined && res.tagName !== null) {
                this.tagName = res.tagName;
                this.cateringService.getCategoryByTagName(res.tagName).subscribe((result) => {
                    if (result.ok) {
                        this.cateringList = result.json();
                        console.log(result.json());
                    }
                }, error => console.error(error));
            }
        }, error => console.error(error));
    }
};
TaggedCateringListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_catering_service__WEBPACK_IMPORTED_MODULE_3__["CateringService"] }
];
TaggedCateringListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tagged-catering-list',
        template: __webpack_require__(/*! raw-loader!./tagged-catering-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin/catering/tagged-catering-list/tagged-catering-list.component.html"),
        styles: [__webpack_require__(/*! ./tagged-catering-list.component.css */ "./src/app/components/admin/catering/tagged-catering-list/tagged-catering-list.component.css")]
    })
], TaggedCateringListComponent);



/***/ }),

/***/ "./src/app/components/admin/image/image.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/admin/image/image.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-image{\n    display: block;\n    position: relative;\n    -webkit-box-pack: center;\n            justify-content: center;\n    /* padding: 20px; */\n    width: 100%;\n}\n\n.image-card{\n    /* background-color: grey; */\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-pack: center;\n            justify-content: center;\n    width: 100%;\n    margin: 10px;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9pbWFnZS9pbWFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTs7QUFFaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluL2ltYWdlL2ltYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1pbWFnZXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLyogcGFkZGluZzogMjBweDsgKi9cbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmltYWdlLWNhcmR7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JleTsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxMHB4O1xuXG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/admin/image/image.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/admin/image/image.component.ts ***!
  \***********************************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/image.service */ "./src/app/service/image.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ImageComponent = class ImageComponent {
    constructor(imageService, router) {
        this.imageService = imageService;
        this.router = router;
        this.loading = false;
        this.imageForm = this.imageFormValidator();
    }
    imageFormValidator() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
    }
    getName(event) {
        this.imageName = event.target.value;
    }
    processFile(imageInput, event) {
        const file = imageInput.files[0];
        event.preventDefault();
        this.loading = true;
        this.imageService.postImage(file, this.imageName).subscribe(() => {
            this.loading = false;
            console.log('Image saved');
        }, (error) => {
            console.error(error);
        });
    }
    deleteImage(id) {
        this.loading = true;
        this.imageService.deleteImageById(id).subscribe((res) => {
            if (res.ok) {
                this.loading = false;
                this.imageService.getImages(0, 10).subscribe((res) => {
                    if (res.ok) {
                        this.images = res.json().content;
                    }
                });
            }
        }, error => {
            console.log(error);
            this.loading = false;
        });
    }
    ngOnInit() {
        this.imageService.getImages(0, 10).subscribe((res) => {
            if (res.ok) {
                this.images = res.json().content;
                console.log(this.images);
            }
        }, error => console.error(error));
    }
};
ImageComponent.ctorParameters = () => [
    { type: src_app_service_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image',
        template: __webpack_require__(/*! raw-loader!./image.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin/image/image.component.html"),
        styles: [__webpack_require__(/*! ./image.component.css */ "./src/app/components/admin/image/image.component.css")]
    })
], ImageComponent);



/***/ }),

/***/ "./src/app/components/admin/login/login.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/admin/login/login.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/admin/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/admin/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/login.service */ "./src/app/service/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.credentials = { username: '', password: '' };
        this.isLoggedIn = false;
        this.hide = true;
        this.loginForm = this.loginFormValidator();
    }
    loginFormValidator() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
    }
    onSubmit() {
        this.loginService.sendCredential(this.credentials.username, this.credentials.password)
            .subscribe((res) => {
            sessionStorage.setItem('token', res.json().token);
            this.isLoggedIn = true;
            this.success = true;
            this.router.navigate(['/menu']);
        }, error => {
            this.isLoggedIn = false;
            this.error = true;
            console.log(error);
        });
    }
    hidden() {
        this.hide = !this.hide;
    }
    ngOnInit() {
        if (sessionStorage.getItem('token') !== null) {
            this.isLoggedIn = true;
        }
        else {
            this.isLoggedIn = false;
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/admin/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/admin/menu/add-menu/add-menu.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/admin/menu/add-menu/add-menu.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3{\n    margin-top: 30px;\n}\n\nspan {\n    font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9tZW51L2FkZC1tZW51L2FkZC1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluL21lbnUvYWRkLW1lbnUvYWRkLW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgze1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbnNwYW4ge1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/admin/menu/add-menu/add-menu.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/admin/menu/add-menu/add-menu.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMenuComponent", function() { return AddMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_models_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/menu */ "./src/models/menu.ts");
/* harmony import */ var src_app_service_add_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/add-menu.service */ "./src/app/service/add-menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let AddMenuComponent = class AddMenuComponent {
    constructor(addMenuService, router, menuService, route) {
        this.addMenuService = addMenuService;
        this.router = router;
        this.menuService = menuService;
        this.route = route;
        this.menu = new src_models_menu__WEBPACK_IMPORTED_MODULE_2__["Menu"]();
        this.menuAdded = false;
        this.menuForm = this.menuValidator();
    }
    onSubmit() {
        if (this.menuId !== null && this.menuId !== undefined) {
            this.menuService.updateMenu(this.menu.id, this.menu).subscribe(res => {
                if (res.ok) {
                    console.log('The menu has been suceessfully updated');
                    console.log(res);
                    this.router.navigate(['/menu']);
                }
            }, error => {
                console.error(error);
            });
        }
        else {
            this.addMenuService.addMenu(this.menu).subscribe(() => {
                this.menuAdded = true;
                this.menu = new src_models_menu__WEBPACK_IMPORTED_MODULE_2__["Menu"]();
                this.menu.createdOn = new Date();
                this.router.navigate(['/menu']);
            }, error => {
                console.log(error);
            });
        }
    }
    menuValidator() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            addExtra: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].nullValidator),
            addedPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].nullValidator),
            control: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [(control) => !control.touched ? { required: true } : null])
        });
    }
    ngOnInit() {
        this.route.params.subscribe((res) => {
            if (res.id !== null && res.id !== undefined) {
                this.menuService.getMenuById(res.id).subscribe((response) => {
                    if (response.ok) {
                        this.menuId = res.id;
                        this.menu = response.json();
                        console.log(Object.entries(this.menu).length);
                    }
                }, error => {
                    console.error(error);
                });
            }
        });
    }
};
AddMenuComponent.ctorParameters = () => [
    { type: src_app_service_add_menu_service__WEBPACK_IMPORTED_MODULE_3__["AddMenuService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_service_add_menu_service__WEBPACK_IMPORTED_MODULE_3__["GetMenuListService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
AddMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-menu',
        template: __webpack_require__(/*! raw-loader!./add-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin/menu/add-menu/add-menu.component.html"),
        styles: [__webpack_require__(/*! ./add-menu.component.css */ "./src/app/components/admin/menu/add-menu/add-menu.component.css")]
    })
], AddMenuComponent);



/***/ }),

/***/ "./src/app/components/admin/menu/menu-item/menu-item.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/admin/menu/menu-item/menu-item.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card{\n    width: 100%;\n}\n\n.list-group-item{\n    text-align: left;\n    font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9tZW51L21lbnUtaXRlbS9tZW51LWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9tZW51L21lbnUtaXRlbS9tZW51LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJke1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubGlzdC1ncm91cC1pdGVte1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/admin/menu/menu-item/menu-item.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/admin/menu/menu-item/menu-item.component.ts ***!
  \************************************************************************/
/*! exports provided: MenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemComponent", function() { return MenuItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_add_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/add-menu.service */ "./src/app/service/add-menu.service.ts");
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.service */ "./src/app/shared/shared.service.ts");





let MenuItemComponent = class MenuItemComponent {
    constructor(route, router, menuService, sharedService) {
        this.route = route;
        this.router = router;
        this.menuService = menuService;
        this.sharedService = sharedService;
    }
    dateConverter(date) {
        return this.sharedService.convertDate(date);
    }
    deleteMenu(id) {
        confirm('Are you sure want to delete ?');
        this.menuService.deleteMenu(id).subscribe(res => {
            if (res.ok) {
                console.log('Menu with an id ' + id + ' has been deleted');
                this.router.navigate(['/menu']);
            }
        }, error => {
            console.log(error);
        });
    }
    ngOnInit() {
        this.route.params.subscribe((res) => {
            if (res !== null) {
                this.menuService.getMenuById(res.id).subscribe(menu => {
                    if (menu && menu.ok) {
                        this.menu = menu.json();
                    }
                }, error => {
                    console.error(error);
                });
            }
        });
    }
};
MenuItemComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_service_add_menu_service__WEBPACK_IMPORTED_MODULE_3__["GetMenuListService"] },
    { type: src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] }
];
MenuItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-item',
        template: __webpack_require__(/*! raw-loader!./menu-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin/menu/menu-item/menu-item.component.html"),
        styles: [__webpack_require__(/*! ./menu-item.component.css */ "./src/app/components/admin/menu/menu-item/menu-item.component.css")]
    })
], MenuItemComponent);



/***/ }),

/***/ "./src/app/components/admin/menu/menu-list/menu-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/admin/menu/menu-list/menu-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9tZW51L21lbnUtbGlzdC9tZW51LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vbWVudS9tZW51LWxpc3QvbWVudS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZXtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/admin/menu/menu-list/menu-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/admin/menu/menu-list/menu-list.component.ts ***!
  \************************************************************************/
/*! exports provided: MenuListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuListComponent", function() { return MenuListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_add_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/add-menu.service */ "./src/app/service/add-menu.service.ts");
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.service */ "./src/app/shared/shared.service.ts");




let MenuListComponent = class MenuListComponent {
    constructor(getMenuListService, sharedService) {
        this.getMenuListService = getMenuListService;
        this.sharedService = sharedService;
        this.displayedColumns = ['title', 'price', 'createdOn'];
        this.menuId = 0;
        this.idSelected = false;
    }
    convertDate(date) {
        return this.sharedService.convertDate(date);
    }
    testFunc() {
        this.breakfastList = this.menuList.filter(menu => menu.breakFast === true);
        console.log(this.breakfastList);
    }
    ngOnInit() {
        this.getMenuListService.getMenu(0, 10).subscribe((res) => {
            if (res.ok) {
                console.log(res.json());
                this.menuList = res.json().content;
                this.breakfastList = this.menuList && this.menuList.filter(menu => menu.breakFast === true);
                this.burgersList = this.menuList && this.menuList.filter(menu => menu.burger === true);
                this.saladsList = this.menuList && this.menuList.filter(menu => menu.salad === true);
                this.pastaList = this.menuList && this.menuList.filter(menu => menu.pasta === true);
            }
        }, error => {
            console.log(error);
        });
    }
};
MenuListComponent.ctorParameters = () => [
    { type: src_app_service_add_menu_service__WEBPACK_IMPORTED_MODULE_2__["GetMenuListService"] },
    { type: src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] }
];
MenuListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-list',
        template: __webpack_require__(/*! raw-loader!./menu-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin/menu/menu-list/menu-list.component.html"),
        styles: [__webpack_require__(/*! ./menu-list.component.css */ "./src/app/components/admin/menu/menu-list/menu-list.component.css")]
    })
], MenuListComponent);



/***/ }),

/***/ "./src/app/components/admin/nav-bar/nav-bar.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/admin/nav-bar/nav-bar.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation-clean {\n  background: #fff;\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n  color: #333;\n  border-radius: 0;\n  box-shadow: none;\n  border: none;\n  margin-bottom: 0;\n}\n\n@media (min-width:767px) {\n  .navigation-clean {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n  .navbar-brand{\n    margin-left: 200px;\n  }\n  .navigation-clean .navbar-collapse, .navigation-clean .form-inline{\n    margin-left: 700px;\n  }\n}\n\n@media (max-width:1024px) {\n  .navigation-clean {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n  .navbar-brand{\n    margin-left: 0;\n  }\n  .navigation-clean .navbar-collapse, .navigation-clean .form-inline{\n    margin-left: 10px;\n  }\n}\n\n.navigation-clean .navbar-brand {\n  /* margin-left: 200px; */\n  font-weight: bold;\n  color: inherit;\n}\n\n.navigation-clean .navbar-brand:hover {\n  color: #222;\n}\n\n.navigation-clean .navbar-toggler {\n  border-color: #ddd;\n}\n\n.navigation-clean .navbar-toggler:hover, .navigation-clean .navbar-toggler:focus {\n  \n  background: none;\n}\n\n.navigation-clean .navbar-toggler {\n  color: #888;\n}\n\n.navigation-clean .navbar-collapse, .navigation-clean .form-inline {\n  border-top-color: #ddd;\n}\n\n.navigation-clean.navbar-light .navbar-nav .nav-link.active, .navigation-clean.navbar-light .navbar-nav .nav-link.active:focus, .navigation-clean.navbar-light .navbar-nav .nav-link.active:hover {\n  color: #8f8f8f;\n  box-shadow: none;\n  background: none;\n  pointer-events: none;\n}\n\n.navigation-clean.navbar .navbar-nav .nav-link {\n  padding-left: 18px;\n  padding-right: 18px;\n}\n\n.navigation-clean.navbar-light .navbar-nav .nav-link {\n  \n  color: #465765;\n}\n\n.navigation-clean.navbar-light .navbar-nav .nav-link:focus, .navigation-clean.navbar-light .navbar-nav .nav-link:hover {\n  color: #37434d !important;\n  background-color: transparent;\n}\n\n.navigation-clean .navbar-nav > li > .dropdown-menu {\n  margin-top: -5px;\n  box-shadow: none;\n  background-color: #fff;\n  border-radius: 2px;\n}\n\n.navigation-clean .dropdown-menu .dropdown-item:focus, .navigation-clean .dropdown-menu .dropdown-item {\n  line-height: 2;\n  color: #37434d;\n}\n\n.navigation-clean .dropdown-menu .dropdown-item:focus, .navigation-clean .dropdown-menu .dropdown-item:hover {\n  background: #eee;\n  color: inherit;\n}\n\n/*admin nav*/\n\n.example-spacer {\n\t-webkit-box-flex: 1;\n\t        flex: 1 1 auto;\n}\n\n.mat-radio-button {\n\tmargin: 0 20px;\n\tdisplay: -webkit-box;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: reverse;\n\t        flex-direction: column-reverse;\n\tpadding: 10%;\n}\n\na{\n\tcolor: inherit;\n\ttext-decoration: none;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBLFlBQVk7O0FBQ1o7Q0FDQyxtQkFBYztTQUFkLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxvQkFBYTtDQUFiLGFBQWE7Q0FDYiw0QkFBOEI7Q0FBOUIsOEJBQThCO1NBQTlCLDhCQUE4QjtDQUM5QixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QscUJBQXFCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZpZ2F0aW9uLWNsZWFuIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZy10b3A6IC43NXJlbTtcbiAgcGFkZGluZy1ib3R0b206IC43NXJlbTtcbiAgY29sb3I6ICMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6NzY3cHgpIHtcbiAgLm5hdmlnYXRpb24tY2xlYW4ge1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICB9XG4gIC5uYXZiYXItYnJhbmR7XG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xuICB9XG4gIC5uYXZpZ2F0aW9uLWNsZWFuIC5uYXZiYXItY29sbGFwc2UsIC5uYXZpZ2F0aW9uLWNsZWFuIC5mb3JtLWlubGluZXtcbiAgICBtYXJnaW4tbGVmdDogNzAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOjEwMjRweCkge1xuICAubmF2aWdhdGlvbi1jbGVhbiB7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIH1cbiAgLm5hdmJhci1icmFuZHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAubmF2aWdhdGlvbi1jbGVhbiAubmF2YmFyLWNvbGxhcHNlLCAubmF2aWdhdGlvbi1jbGVhbiAuZm9ybS1pbmxpbmV7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbn1cblxuLm5hdmlnYXRpb24tY2xlYW4gLm5hdmJhci1icmFuZCB7XG4gIC8qIG1hcmdpbi1sZWZ0OiAyMDBweDsgKi9cbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4ubmF2aWdhdGlvbi1jbGVhbiAubmF2YmFyLWJyYW5kOmhvdmVyIHtcbiAgY29sb3I6ICMyMjI7XG59XG5cbi5uYXZpZ2F0aW9uLWNsZWFuIC5uYXZiYXItdG9nZ2xlciB7XG4gIGJvcmRlci1jb2xvcjogI2RkZDtcbn1cblxuLm5hdmlnYXRpb24tY2xlYW4gLm5hdmJhci10b2dnbGVyOmhvdmVyLCAubmF2aWdhdGlvbi1jbGVhbiAubmF2YmFyLXRvZ2dsZXI6Zm9jdXMge1xuICBcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLm5hdmlnYXRpb24tY2xlYW4gLm5hdmJhci10b2dnbGVyIHtcbiAgY29sb3I6ICM4ODg7XG59XG5cbi5uYXZpZ2F0aW9uLWNsZWFuIC5uYXZiYXItY29sbGFwc2UsIC5uYXZpZ2F0aW9uLWNsZWFuIC5mb3JtLWlubGluZSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNkZGQ7XG59XG5cbi5uYXZpZ2F0aW9uLWNsZWFuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsuYWN0aXZlLCAubmF2aWdhdGlvbi1jbGVhbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rLmFjdGl2ZTpmb2N1cywgLm5hdmlnYXRpb24tY2xlYW4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluay5hY3RpdmU6aG92ZXIge1xuICBjb2xvcjogIzhmOGY4ZjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5uYXZpZ2F0aW9uLWNsZWFuLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE4cHg7XG59XG5cbi5uYXZpZ2F0aW9uLWNsZWFuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICBcbiAgY29sb3I6ICM0NjU3NjU7XG59XG5cbi5uYXZpZ2F0aW9uLWNsZWFuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbms6Zm9jdXMsIC5uYXZpZ2F0aW9uLWNsZWFuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbms6aG92ZXIge1xuICBjb2xvcjogIzM3NDM0ZCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm5hdmlnYXRpb24tY2xlYW4gLm5hdmJhci1uYXYgPiBsaSA+IC5kcm9wZG93bi1tZW51IHtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4ubmF2aWdhdGlvbi1jbGVhbiAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpmb2N1cywgLm5hdmlnYXRpb24tY2xlYW4gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW0ge1xuICBsaW5lLWhlaWdodDogMjtcbiAgY29sb3I6ICMzNzQzNGQ7XG59XG5cbi5uYXZpZ2F0aW9uLWNsZWFuIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOmZvY3VzLCAubmF2aWdhdGlvbi1jbGVhbiAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4vKmFkbWluIG5hdiovXG4uZXhhbXBsZS1zcGFjZXIge1xuXHRmbGV4OiAxIDEgYXV0bztcbn1cblxuLm1hdC1yYWRpby1idXR0b24ge1xuXHRtYXJnaW46IDAgMjBweDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuXHRwYWRkaW5nOiAxMCU7XG59XG5cbmF7XG5cdGNvbG9yOiBpbmhlcml0O1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/admin/nav-bar/nav-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/admin/nav-bar/nav-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/login.service */ "./src/app/service/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NavBarComponent = class NavBarComponent {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.isLoggedIn = false;
    }
    logout() {
        this.loginService.logout().subscribe((res) => {
            sessionStorage.clear();
            this.isLoggedIn = false;
            this.router.navigate(['/']);
        }, error => {
            console.log(error);
        });
    }
    ngOnInit() {
        if (sessionStorage.getItem('token') !== null) {
            this.isLoggedIn = true;
        }
        else {
            this.isLoggedIn = false;
        }
    }
};
NavBarComponent.ctorParameters = () => [
    { type: src_app_service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/admin/nav-bar/nav-bar.component.css")]
    })
], NavBarComponent);



/***/ }),

/***/ "./src/app/components/admin/special-ofd/special-ofd.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/admin/special-ofd/special-ofd.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vc3BlY2lhbC1vZmQvc3BlY2lhbC1vZmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/admin/special-ofd/special-ofd.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/admin/special-ofd/special-ofd.component.ts ***!
  \***********************************************************************/
/*! exports provided: SpecialOfdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialOfdComponent", function() { return SpecialOfdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SpecialOfdComponent = class SpecialOfdComponent {
    constructor() { }
    ngOnInit() {
    }
};
SpecialOfdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-special-ofd',
        template: __webpack_require__(/*! raw-loader!./special-ofd.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin/special-ofd/special-ofd.component.html"),
        styles: [__webpack_require__(/*! ./special-ofd.component.css */ "./src/app/components/admin/special-ofd/special-ofd.component.css")]
    })
], SpecialOfdComponent);



/***/ }),

/***/ "./src/app/components/ui/about/about.component.css":
/*!*********************************************************!*\
  !*** ./src/app/components/ui/about/about.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdWkvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/ui/about/about.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/ui/about/about.component.ts ***!
  \********************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/ui/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/ui/about/about.component.css")]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/components/ui/carousel/carousel.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/ui/carousel/carousel.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes bounce {\n}\n\n@keyframes bounce {\n}\n\n.bounce {\n  -webkit-animation-name: bounce;\n  animation-name: bounce;\n  -webkit-transform-origin: center bottom;\n  transform-origin: center bottom;\n}\n\n@-webkit-keyframes flash {\n}\n\n@keyframes flash {\n}\n\n.flash {\n  -webkit-animation-name: flash;\n  animation-name: flash;\n}\n\n@-webkit-keyframes pulse {\n}\n\n@keyframes pulse {\n}\n\n.pulse {\n  -webkit-animation-name: pulse;\n  animation-name: pulse;\n}\n\n@-webkit-keyframes rubberBand {\n}\n\n@keyframes rubberBand {\n}\n\n.rubberBand {\n  -webkit-animation-name: rubberBand;\n  animation-name: rubberBand;\n}\n\n@-webkit-keyframes shake {\n}\n\n@keyframes shake {\n}\n\n.shake {\n  -webkit-animation-name: shake;\n  animation-name: shake;\n}\n\n@-webkit-keyframes headShake {\n}\n\n@keyframes headShake {\n}\n\n.headShake {\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-name: headShake;\n  animation-name: headShake;\n}\n\n@-webkit-keyframes swing {\n}\n\n@keyframes swing {\n}\n\n.swing {\n  -webkit-transform-origin: top center;\n  transform-origin: top center;\n  -webkit-animation-name: swing;\n  animation-name: swing;\n}\n\n@-webkit-keyframes tada {\n}\n\n@keyframes tada {\n}\n\n.tada {\n  -webkit-animation-name: tada;\n  animation-name: tada;\n}\n\n@-webkit-keyframes wobble {\n}\n\n@keyframes wobble {\n}\n\n.wobble {\n  -webkit-animation-name: wobble;\n  animation-name: wobble;\n}\n\n@-webkit-keyframes jello {\n}\n\n@keyframes jello {\n}\n\n.jello {\n  -webkit-animation-name: jello;\n  animation-name: jello;\n  -webkit-transform-origin: center;\n  transform-origin: center;\n}\n\n@-webkit-keyframes bounceIn {\n}\n\n@keyframes bounceIn {\n}\n\n.bounceIn {\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s;\n  -webkit-animation-name: bounceIn;\n  animation-name: bounceIn;\n}\n\n.bounceOut, .flipOutX {\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s;\n}\n\n@-webkit-keyframes bounceInDown {\n}\n\n@keyframes bounceInDown {\n}\n\n.bounceInDown {\n  -webkit-animation-name: bounceInDown;\n  animation-name: bounceInDown;\n}\n\n@-webkit-keyframes bounceInLeft {\n}\n\n@keyframes bounceInLeft {\n}\n\n.bounceInLeft {\n  -webkit-animation-name: bounceInLeft;\n  animation-name: bounceInLeft;\n}\n\n@-webkit-keyframes bounceInRight {\n}\n\n@keyframes bounceInRight {\n}\n\n.bounceInRight {\n  -webkit-animation-name: bounceInRight;\n  animation-name: bounceInRight;\n}\n\n@-webkit-keyframes bounceInUp {\n}\n\n@keyframes bounceInUp {\n}\n\n.bounceInUp {\n  -webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp;\n}\n\n@-webkit-keyframes bounceOut {\n}\n\n@keyframes bounceOut {\n}\n\n.bounceOut {\n  -webkit-animation-name: bounceOut;\n  animation-name: bounceOut;\n}\n\n@-webkit-keyframes bounceOutDown {\n}\n\n@keyframes bounceOutDown {\n}\n\n.bounceOutDown {\n  -webkit-animation-name: bounceOutDown;\n  animation-name: bounceOutDown;\n}\n\n@-webkit-keyframes bounceOutLeft {\n}\n\n@keyframes bounceOutLeft {\n}\n\n.bounceOutLeft {\n  -webkit-animation-name: bounceOutLeft;\n  animation-name: bounceOutLeft;\n}\n\n@-webkit-keyframes bounceOutRight {\n}\n\n@keyframes bounceOutRight {\n}\n\n.bounceOutRight {\n  -webkit-animation-name: bounceOutRight;\n  animation-name: bounceOutRight;\n}\n\n@-webkit-keyframes bounceOutUp {\n}\n\n@keyframes bounceOutUp {\n}\n\n.bounceOutUp {\n  -webkit-animation-name: bounceOutUp;\n  animation-name: bounceOutUp;\n}\n\n@-webkit-keyframes fadeIn {\n}\n\n@keyframes fadeIn {\n}\n\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n\n@-webkit-keyframes fadeInDown {\n}\n\n@keyframes fadeInDown {\n}\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n}\n\n@-webkit-keyframes fadeInDownBig {\n}\n\n@keyframes fadeInDownBig {\n}\n\n.fadeInDownBig {\n  -webkit-animation-name: fadeInDownBig;\n  animation-name: fadeInDownBig;\n}\n\n@-webkit-keyframes fadeInLeft {\n}\n\n@keyframes fadeInLeft {\n}\n\n.fadeInLeft {\n  -webkit-animation-name: fadeInLeft;\n  animation-name: fadeInLeft;\n}\n\n@-webkit-keyframes fadeInLeftBig {\n}\n\n@keyframes fadeInLeftBig {\n}\n\n.fadeInLeftBig {\n  -webkit-animation-name: fadeInLeftBig;\n  animation-name: fadeInLeftBig;\n}\n\n@-webkit-keyframes fadeInRight {\n}\n\n@keyframes fadeInRight {\n}\n\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight;\n}\n\n@-webkit-keyframes fadeInRightBig {\n}\n\n@keyframes fadeInRightBig {\n}\n\n.fadeInRightBig {\n  -webkit-animation-name: fadeInRightBig;\n  animation-name: fadeInRightBig;\n}\n\n@-webkit-keyframes fadeInUp {\n}\n\n@keyframes fadeInUp {\n}\n\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n  animation-name: fadeInUp;\n}\n\n@-webkit-keyframes fadeInUpBig {\n}\n\n@keyframes fadeInUpBig {\n}\n\n.fadeInUpBig {\n  -webkit-animation-name: fadeInUpBig;\n  animation-name: fadeInUpBig;\n}\n\n@-webkit-keyframes fadeOut {\n}\n\n@keyframes fadeOut {\n}\n\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut;\n}\n\n@-webkit-keyframes fadeOutDown {\n}\n\n@keyframes fadeOutDown {\n}\n\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n  animation-name: fadeOutDown;\n}\n\n@-webkit-keyframes fadeOutDownBig {\n}\n\n@keyframes fadeOutDownBig {\n}\n\n.fadeOutDownBig {\n  -webkit-animation-name: fadeOutDownBig;\n  animation-name: fadeOutDownBig;\n}\n\n@-webkit-keyframes fadeOutLeft {\n}\n\n@keyframes fadeOutLeft {\n}\n\n.fadeOutLeft {\n  -webkit-animation-name: fadeOutLeft;\n  animation-name: fadeOutLeft;\n}\n\n@-webkit-keyframes fadeOutLeftBig {\n}\n\n@keyframes fadeOutLeftBig {\n}\n\n.fadeOutLeftBig {\n  -webkit-animation-name: fadeOutLeftBig;\n  animation-name: fadeOutLeftBig;\n}\n\n@-webkit-keyframes fadeOutRight {\n}\n\n@keyframes fadeOutRight {\n}\n\n.fadeOutRight {\n  -webkit-animation-name: fadeOutRight;\n  animation-name: fadeOutRight;\n}\n\n@-webkit-keyframes fadeOutRightBig {\n}\n\n@keyframes fadeOutRightBig {\n}\n\n.fadeOutRightBig {\n  -webkit-animation-name: fadeOutRightBig;\n  animation-name: fadeOutRightBig;\n}\n\n@-webkit-keyframes fadeOutUp {\n}\n\n@keyframes fadeOutUp {\n}\n\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp;\n}\n\n@-webkit-keyframes fadeOutUpBig {\n}\n\n@keyframes fadeOutUpBig {\n}\n\n.fadeOutUpBig {\n  -webkit-animation-name: fadeOutUpBig;\n  animation-name: fadeOutUpBig;\n}\n\n@-webkit-keyframes flip {\n}\n\n@keyframes flip {\n}\n\n.animated.flip {\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n  -webkit-animation-name: flip;\n  animation-name: flip;\n}\n\n@-webkit-keyframes flipInX {\n}\n\n@keyframes flipInX {\n}\n\n.flipInX {\n  -webkit-backface-visibility: visible!important;\n  backface-visibility: visible!important;\n  -webkit-animation-name: flipInX;\n  animation-name: flipInX;\n}\n\n.flipInY, .flipOutX {\n  -webkit-backface-visibility: visible!important;\n  backface-visibility: visible!important;\n}\n\n@-webkit-keyframes flipInY {\n}\n\n@keyframes flipInY {\n}\n\n.flipInY {\n  -webkit-animation-name: flipInY;\n  animation-name: flipInY;\n}\n\n@-webkit-keyframes flipOutX {\n}\n\n@keyframes flipOutX {\n}\n\n.flipOutX {\n  -webkit-animation-name: flipOutX;\n  animation-name: flipOutX;\n}\n\n@-webkit-keyframes flipOutY {\n}\n\n@keyframes flipOutY {\n}\n\n.flipOutY {\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s;\n  -webkit-backface-visibility: visible!important;\n  backface-visibility: visible!important;\n  -webkit-animation-name: flipOutY;\n  animation-name: flipOutY;\n}\n\n@-webkit-keyframes lightSpeedIn {\n}\n\n@keyframes lightSpeedIn {\n}\n\n.lightSpeedIn {\n  -webkit-animation-name: lightSpeedIn;\n  animation-name: lightSpeedIn;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n}\n\n@-webkit-keyframes lightSpeedOut {\n}\n\n@keyframes lightSpeedOut {\n}\n\n.lightSpeedOut {\n  -webkit-animation-name: lightSpeedOut;\n  animation-name: lightSpeedOut;\n  -webkit-animation-timing-function: ease-in;\n  animation-timing-function: ease-in;\n}\n\n@-webkit-keyframes rotateIn {\n}\n\n@keyframes rotateIn {\n}\n\n.rotateIn {\n  -webkit-animation-name: rotateIn;\n  animation-name: rotateIn;\n}\n\n@-webkit-keyframes rotateInDownLeft {\n}\n\n@keyframes rotateInDownLeft {\n}\n\n.rotateInDownLeft {\n  -webkit-animation-name: rotateInDownLeft;\n  animation-name: rotateInDownLeft;\n}\n\n@-webkit-keyframes rotateInDownRight {\n}\n\n@keyframes rotateInDownRight {\n}\n\n.rotateInDownRight {\n  -webkit-animation-name: rotateInDownRight;\n  animation-name: rotateInDownRight;\n}\n\n@-webkit-keyframes rotateInUpLeft {\n}\n\n@keyframes rotateInUpLeft {\n}\n\n.rotateInUpLeft {\n  -webkit-animation-name: rotateInUpLeft;\n  animation-name: rotateInUpLeft;\n}\n\n@-webkit-keyframes rotateInUpRight {\n}\n\n@keyframes rotateInUpRight {\n}\n\n.rotateInUpRight {\n  -webkit-animation-name: rotateInUpRight;\n  animation-name: rotateInUpRight;\n}\n\n@-webkit-keyframes rotateOut {\n}\n\n@keyframes rotateOut {\n}\n\n.rotateOut {\n  -webkit-animation-name: rotateOut;\n  animation-name: rotateOut;\n}\n\n@-webkit-keyframes rotateOutDownLeft {\n}\n\n@keyframes rotateOutDownLeft {\n}\n\n.rotateOutDownLeft {\n  -webkit-animation-name: rotateOutDownLeft;\n  animation-name: rotateOutDownLeft;\n}\n\n@-webkit-keyframes rotateOutDownRight {\n}\n\n@keyframes rotateOutDownRight {\n}\n\n.rotateOutDownRight {\n  -webkit-animation-name: rotateOutDownRight;\n  animation-name: rotateOutDownRight;\n}\n\n@-webkit-keyframes rotateOutUpLeft {\n}\n\n@keyframes rotateOutUpLeft {\n}\n\n.rotateOutUpLeft {\n  -webkit-animation-name: rotateOutUpLeft;\n  animation-name: rotateOutUpLeft;\n}\n\n@-webkit-keyframes rotateOutUpRight {\n}\n\n@keyframes rotateOutUpRight {\n}\n\n.rotateOutUpRight {\n  -webkit-animation-name: rotateOutUpRight;\n  animation-name: rotateOutUpRight;\n}\n\n@-webkit-keyframes hinge {\n}\n\n@keyframes hinge {\n}\n\n.hinge {\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s;\n  -webkit-animation-name: hinge;\n  animation-name: hinge;\n}\n\n@-webkit-keyframes jackInTheBox {\n}\n\n@keyframes jackInTheBox {\n}\n\n.jackInTheBox {\n  -webkit-animation-name: jackInTheBox;\n  animation-name: jackInTheBox;\n}\n\n@-webkit-keyframes rollIn {\n}\n\n@keyframes rollIn {\n}\n\n.rollIn {\n  -webkit-animation-name: rollIn;\n  animation-name: rollIn;\n}\n\n@-webkit-keyframes rollOut {\n}\n\n@keyframes rollOut {\n}\n\n.rollOut {\n  -webkit-animation-name: rollOut;\n  animation-name: rollOut;\n}\n\n@-webkit-keyframes zoomIn {\n}\n\n@keyframes zoomIn {\n}\n\n.zoomIn {\n  -webkit-animation-name: zoomIn;\n  animation-name: zoomIn;\n}\n\n@-webkit-keyframes zoomInDown {\n}\n\n@keyframes zoomInDown {\n}\n\n.zoomInDown {\n  -webkit-animation-name: zoomInDown;\n  animation-name: zoomInDown;\n}\n\n@-webkit-keyframes zoomInLeft {\n}\n\n@keyframes zoomInLeft {\n}\n\n.zoomInLeft {\n  -webkit-animation-name: zoomInLeft;\n  animation-name: zoomInLeft;\n}\n\n@-webkit-keyframes zoomInRight {\n}\n\n@keyframes zoomInRight {\n}\n\n.zoomInRight {\n  -webkit-animation-name: zoomInRight;\n  animation-name: zoomInRight;\n}\n\n@-webkit-keyframes zoomInUp {\n}\n\n@keyframes zoomInUp {\n}\n\n.zoomInUp {\n  -webkit-animation-name: zoomInUp;\n  animation-name: zoomInUp;\n}\n\n@-webkit-keyframes zoomOut {\n}\n\n@keyframes zoomOut {\n}\n\n.zoomOut {\n  -webkit-animation-name: zoomOut;\n  animation-name: zoomOut;\n}\n\n@-webkit-keyframes zoomOutDown {\n}\n\n@keyframes zoomOutDown {\n}\n\n.zoomOutDown {\n  -webkit-animation-name: zoomOutDown;\n  animation-name: zoomOutDown;\n}\n\n@-webkit-keyframes zoomOutLeft {\n}\n\n@keyframes zoomOutLeft {\n}\n\n.zoomOutLeft {\n  -webkit-animation-name: zoomOutLeft;\n  animation-name: zoomOutLeft;\n}\n\n@-webkit-keyframes zoomOutRight {\n}\n\n@keyframes zoomOutRight {\n}\n\n.zoomOutRight {\n  -webkit-animation-name: zoomOutRight;\n  animation-name: zoomOutRight;\n}\n\n@-webkit-keyframes zoomOutUp {\n}\n\n@keyframes zoomOutUp {\n}\n\n.zoomOutUp {\n  -webkit-animation-name: zoomOutUp;\n  animation-name: zoomOutUp;\n}\n\n@-webkit-keyframes slideInDown {\n}\n\n@keyframes slideInDown {\n}\n\n.slideInDown {\n  -webkit-animation-name: slideInDown;\n  animation-name: slideInDown;\n}\n\n@-webkit-keyframes slideInLeft {\n}\n\n@keyframes slideInLeft {\n}\n\n.slideInLeft {\n  -webkit-animation-name: slideInLeft;\n  animation-name: slideInLeft;\n}\n\n@-webkit-keyframes slideInRight {\n}\n\n@keyframes slideInRight {\n}\n\n.slideInRight {\n  -webkit-animation-name: slideInRight;\n  animation-name: slideInRight;\n}\n\n@-webkit-keyframes slideInUp {\n}\n\n@keyframes slideInUp {\n}\n\n.slideInUp {\n  -webkit-animation-name: slideInUp;\n  animation-name: slideInUp;\n}\n\n@-webkit-keyframes slideOutDown {\n}\n\n@keyframes slideOutDown {\n}\n\n.slideOutDown {\n  -webkit-animation-name: slideOutDown;\n  animation-name: slideOutDown;\n}\n\n@-webkit-keyframes slideOutLeft {\n}\n\n@keyframes slideOutLeft {\n}\n\n.slideOutLeft {\n  -webkit-animation-name: slideOutLeft;\n  animation-name: slideOutLeft;\n}\n\n@-webkit-keyframes slideOutRight {\n}\n\n@keyframes slideOutRight {\n}\n\n.slideOutRight {\n  -webkit-animation-name: slideOutRight;\n  animation-name: slideOutRight;\n}\n\n@-webkit-keyframes slideOutUp {\n}\n\n@keyframes slideOutUp {\n}\n\n.slideOutUp {\n  -webkit-animation-name: slideOutUp;\n  animation-name: slideOutUp;\n}\n\n#fw_al_007 {\n  overflow: hidden;\n  max-height: 658px;\n  position: relative;\n  background: #000;\n}\n\n#fw_al_007:hover {\n  cursor: -webkit-grab;\n}\n\n#fw_al_007:active {\n  cursor: -webkit-grabbing;\n}\n\n#fw_al_007 > .carousel-inner > .carousel-item > a > img, #fw_al_007 > .carousel-inner > .carousel-item > img {\n  display: block;\n  opacity: .4;\n  margin: auto;\n  width: 100%!important;\n  position: relative;\n  max-height: 950px;\n  overflow: hidden;\n}\n\n.ps_rotate_scale_c {\n  opacity: 1;\n  -webkit-transform: scale(1) rotate(0);\n  transform: scale(1) rotate(0);\n}\n\n.ps_rotate_scale_c .carousel-item {\n  top: 0;\n  z-index: 1;\n  opacity: 0;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  display: block;\n  -webkit-transform: scale(2) rotate(45deg);\n  transform: scale(2) rotate(45deg);\n  -webkit-transition: -webkit-transform 2s cubic-bezier(.23,1,.32,1) 0s,opacity cubic-bezier(.23,1,.32,1) 2s;\n  -webkit-transition: opacity cubic-bezier(.23,1,.32,1) 2s,-webkit-transform 2s cubic-bezier(.23,1,.32,1) 0s;\n  transition: opacity cubic-bezier(.23,1,.32,1) 2s,-webkit-transform 2s cubic-bezier(.23,1,.32,1) 0s;\n  transition: transform 2s cubic-bezier(.23,1,.32,1) 0s,opacity cubic-bezier(.23,1,.32,1) 2s;\n  transition: transform 2s cubic-bezier(.23,1,.32,1) 0s,opacity cubic-bezier(.23,1,.32,1) 2s,-webkit-transform 2s cubic-bezier(.23,1,.32,1) 0s;\n}\n\n.ps_rotate_scale_c .carousel-item:first-child {\n  top: auto;\n  position: relative;\n}\n\n.ps_rotate_scale_c .carousel-item.active {\n  opacity: 1;\n  z-index: 2;\n  -webkit-transform: scale(1) rotate(0);\n  transform: scale(1) rotate(0);\n  -webkit-transition: -webkit-transform 2s cubic-bezier(.23,1,.32,1) 0s,opacity cubic-bezier(.23,1,.32,1) 2s;\n  -webkit-transition: opacity cubic-bezier(.23,1,.32,1) 2s,-webkit-transform 2s cubic-bezier(.23,1,.32,1) 0s;\n  transition: opacity cubic-bezier(.23,1,.32,1) 2s,-webkit-transform 2s cubic-bezier(.23,1,.32,1) 0s;\n  transition: transform 2s cubic-bezier(.23,1,.32,1) 0s,opacity cubic-bezier(.23,1,.32,1) 2s;\n  transition: transform 2s cubic-bezier(.23,1,.32,1) 0s,opacity cubic-bezier(.23,1,.32,1) 2s,-webkit-transform 2s cubic-bezier(.23,1,.32,1) 0s;\n}\n\n.ps_indicators_l > .carousel-indicators {\n  left: 0;\n  width: 100%;\n  bottom: 5%;\n  right: 0;\n  margin: auto;\n  display: block;\n  text-align: right;\n  padding-right: 5%;\n}\n\n.ps_indicators_l > .carousel-indicators li {\n  width: 13px;\n  height: 13px;\n  margin: 0 3px;\n  display: inline-block;\n  background: rgba(255,255,255,1);\n  border-radius: 0;\n  -webkit-border-radius: 0;\n  border: 2px solid rgba(255,255,255,1);\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n.ps_indicators_l > .carousel-indicators .active {\n  width: 13px;\n  height: 13px;\n  margin: 0 3px;\n  background: #f04d4e;\n  border: 2px solid #f04d4e;\n}\n\n.ps_control_rotate_f .carousel-control-next, .ps_control_rotate_f .carousel-control-prev {\n  top: 45%;\n  opacity: 0;\n  width: 50px;\n  height: 50px;\n  z-index: 100;\n  color: #000;\n  display: block;\n  font-size: 34px;\n  cursor: pointer;\n  overflow: hidden;\n  line-height: 48px;\n  text-shadow: none;\n  position: absolute;\n  font-weight: 400;\n  background: rgba(255,255,255,.8);\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n.ps_control_rotate_f:hover .carousel-control-next, .ps_control_rotate_f:hover .carousel-control-prev {\n  opacity: 1;\n  -webkit-transition: all 1s cubic-bezier(.23,1,.32,1);\n  transition: all 1s cubic-bezier(.23,1,.32,1);\n}\n\n.ps_control_rotate_f .carousel-control-next > span, .ps_control_rotate_f .carousel-control-prev > span {\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n\n.ps_control_rotate_f .carousel-control-prev {\n  left: 3%;\n  border-radius: 0;\n}\n\n.ps_control_rotate_f .carousel-control-next {\n  right: 3%;\n  border-radius: 0;\n}\n\n.ps_control_rotate_f .carousel-control-next:hover, .ps_control_rotate_f .carousel-control-prev:hover {\n  color: #fff;\n  background: #f04d4e;\n}\n\n.ps_control_rotate_f .carousel-control-prev > span:nth-child(1) {\n  left: 45%;\n}\n\n.ps_control_rotate_f .carousel-control-next > span:nth-child(1) {\n  right: 45%;\n}\n\n.fw_al_007_slide {\n  left: 0;\n  top: 22%;\n  right: 0;\n  margin: auto;\n  position: absolute;\n  text-align: center;\n}\n\n.fw_al_007_slide > h3 {\n  color: #fff;\n  font-size: 20px;\n  font-weight: 700;\n  text-shadow: none;\n  font-style: normal;\n  position: relative;\n  padding-bottom: 2px;\n  display: inline-block;\n  text-transform: uppercase;\n  font-family: Poppins;\n  box-shadow: none;\n  -webkit-animation-delay: .7s;\n  animation-delay: .7s;\n}\n\n.fw_al_007_slide > h3::after, .fw_al_007_slide > h3::before {\n  content: \"\";\n  top: 50%;\n  height: 3px;\n  width: 75px;\n  display: block;\n  margin-top: -2px;\n  position: absolute;\n  border-bottom: 2px solid #fff;\n}\n\n.fw_al_007_slide > h1, .fw_al_007_slide > p {\n  padding: 0;\n  font-style: normal;\n  -webkit-box-shadow: none;\n  text-shadow: none;\n  font-family: Poppins;\n}\n\n.fw_al_007_slide > h3::before {\n  right: 100%;\n  margin-right: .5em;\n}\n\n.fw_al_007_slide > h3::after {\n  left: 100%;\n  margin-left: .5em;\n}\n\n.fw_al_007_slide > h1 {\n  color: #fff;\n  font-size: 65px;\n  font-weight: 900;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  box-shadow: none;\n  -webkit-animation-delay: 1.4s;\n  animation-delay: 1.4s;\n}\n\n.fw_al_007_slide > h1 > span {\n  color: #f04d4e;\n}\n\n.fw_al_007_slide > p {\n  color: #fff;\n  font-size: 18px;\n  font-weight: 400;\n  letter-spacing: 1px;\n  margin: 30px 0 0;\n  box-shadow: none;\n  -webkit-animation-delay: 2.1s;\n  animation-delay: 2.1s;\n  font-family: 'Courgette';\n}\n\n.fw_al_007_slide > a {\n  color: #000;\n  cursor: pointer;\n  font-weight: 500;\n  font-size: 12px;\n  position: relative;\n  margin: 50px 0 0;\n  text-align: center;\n  padding: 15px 30px;\n  white-space: nowrap;\n  letter-spacing: 2px;\n  display: inline-block;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: uppercase;\n  background: #fff;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto,sans-serif;\n  border-radius: 0;\n  box-shadow: none;\n  -webkit-animation-delay: 2.8s;\n  animation-delay: 2.8s;\n  -webkit-transition: all .5s cubic-bezier(.23,1,.32,1);\n  transition: all .5s cubic-bezier(.23,1,.32,1);\n}\n\n.fw_al_007_slide > a:active, .fw_al_007_slide > a:hover {\n  color: #fff;\n  background: #f04d4e;\n}\n\n@media only screen and (max-width:480px) {\n  .fw_al_007_slide {\n    top: 0;\n    padding: 5px;\n  }\n}\n\n@media only screen and (max-width:480px) {\n  .fw_al_007_slide > h1 {\n    font-size: 20px;\n    letter-spacing: 0;\n    margin: 10px 0 0;\n  }\n}\n\n@media only screen and (max-width:480px) {\n  .fw_al_007_slide > p {\n    font-size: 14px;\n    margin: 10px 0 0;\n    letter-spacing: 0;\n  }\n}\n\n@media only screen and (max-width:480px) {\n  .fw_al_007_slide > a {\n    margin: 10px 0 0;\n    padding: 7px 15px;\n  }\n}\n\n@media only screen and (max-width:480px) {\n  .ps_control_rotate_f .carousel-control {\n    display: none;\n  }\n}\n\n@media (min-width:481px) and (max-width:600px) {\n  .fw_al_007_slide {\n    top: 5%;\n    padding: 5px;\n  }\n}\n\n@media (min-width:481px) and (max-width:600px) {\n  .fw_al_007_slide > h1 {\n    font-size: 35px;\n    margin: 10px 0 0;\n  }\n}\n\n@media (min-width:601px) and (max-width:767px) {\n  .fw_al_007_slide {\n    top: 10%;\n  }\n}\n\n@media (min-width:601px) and (max-width:767px) {\n  .fw_al_007_slide > h1 {\n    font-size: 50px;\n    margin: 10px 0 0;\n  }\n}\n\n.ps_ease .carousel-item {\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease;\n}\n\n.ps_easeInOut .carousel-item {\n  -webkit-transition-timing-function: ease-in-out;\n  transition-timing-function: ease-in-out;\n}\n\n.ps_speedy .carousel-item {\n  -webkit-transition-timing-function: cubic-bezier(0,1,0,1);\n  transition-timing-function: cubic-bezier(0,1,0,1);\n}\n\n.ps_slowSpeedy .carousel-item {\n  -webkit-transition-timing-function: cubic-bezier(.3,1,0,1);\n  transition-timing-function: cubic-bezier(.3,1,0,1);\n}\n\n.ps_easeOutInCubic .carousel-item {\n  -webkit-transition-timing-function: cubic-bezier(.22,.81,.01,.99);\n  transition-timing-function: cubic-bezier(.22,.81,.01,.99);\n}\n\n.ps_swing .carousel-item {\n  -webkit-transition-timing-function: cubic-bezier(.02,.01,.47,1);\n  transition-timing-function: cubic-bezier(.02,.01,.47,1);\n}\n\n.ps_easeOutCubic .carousel-item {\n  -webkit-transition-timing-function: cubic-bezier(.215,.61,.355,1);\n  transition-timing-function: cubic-bezier(.215,.61,.355,1);\n}\n\n.ps_easeInOutCubic .carousel-item {\n  -webkit-transition-timing-function: cubic-bezier(.645,.045,.355,1);\n  transition-timing-function: cubic-bezier(.645,.045,.355,1);\n}\n\n.ps_easeOutCirc .carousel-item {\n  -webkit-transition-timing-function: cubic-bezier(.075,.82,.165,1);\n  transition-timing-function: cubic-bezier(.075,.82,.165,1);\n}\n\n.ps_easeOutExpo .carousel-item {\n  -webkit-transition-timing-function: cubic-bezier(.19,1,.22,1);\n  transition-timing-function: cubic-bezier(.19,1,.22,1);\n}\n\n.ps_easeInQuad .carousel-item {\n  -webkit-transition-timing-function: cubic-bezier(.55,.085,.68,.53);\n  transition-timing-function: cubic-bezier(.55,.085,.68,.53);\n}\n\n.ps_easeOutQuad .carousel-item {\n  -webkit-transition-timing-function: cubic-bezier(.25,.46,.45,.94);\n  transition-timing-function: cubic-bezier(.25,.46,.45,.94);\n}\n\n.ps_easeInOutQuad .carousel-item {\n  -webkit-transition-timing-function: cubic-bezier(.455,.03,.515,.955);\n  transition-timing-function: cubic-bezier(.455,.03,.515,.955);\n}\n\n.ps_easeOutQuart .carousel-item {\n  -webkit-transition-timing-function: cubic-bezier(.165,.84,.44,1);\n  transition-timing-function: cubic-bezier(.165,.84,.44,1);\n}\n\n.ps_easeInOutQuart .carousel-item {\n  -webkit-transition-timing-function: cubic-bezier(.77,0,.175,1);\n  transition-timing-function: cubic-bezier(.77,0,.175,1);\n}\n\n.ps_easeOutQuint .carousel-item {\n  -webkit-transition-timing-function: cubic-bezier(.23,1,.32,1);\n  transition-timing-function: cubic-bezier(.23,1,.32,1);\n}\n\n.ps_easeInSine .carousel-item {\n  -webkit-transition-timing-function: cubic-bezier(.47,0,.745,.715);\n  transition-timing-function: cubic-bezier(.47,0,.745,.715);\n}\n\n.ps_easeOutSine .carousel-item {\n  -webkit-transition-timing-function: cubic-bezier(.39,.575,.565,1);\n  transition-timing-function: cubic-bezier(.39,.575,.565,1);\n}\n\n.ps_easeInOutSine .carousel-item {\n  -webkit-transition-timing-function: cubic-bezier(.445,.05,.55,.95);\n  transition-timing-function: cubic-bezier(.445,.05,.55,.95);\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91aS9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixpQ0FBaUM7RUFDakMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLG1DQUFtQztBQUNyQzs7QUFFQTtBQUNBOztBQURBO0FBQ0E7O0FBSUE7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLHVDQUF1QztFQUN2QywrQkFBK0I7QUFDakM7O0FBRUE7QUFDQTs7QUFEQTtBQUNBOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtBQUNBOztBQURBO0FBQ0E7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0FBQ0E7O0FBREE7QUFDQTs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQywwQkFBMEI7QUFDNUI7O0FBRUE7QUFDQTs7QUFEQTtBQUNBOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtBQUNBOztBQURBO0FBQ0E7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsc0NBQXNDO0VBQ3RDLGlDQUFpQztFQUNqQyx5QkFBeUI7QUFDM0I7O0FBRUE7QUFDQTs7QUFEQTtBQUNBOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0FBQ0E7O0FBREE7QUFDQTs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixvQkFBb0I7QUFDdEI7O0FBRUE7QUFDQTs7QUFEQTtBQUNBOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4Qjs7QUFFQTtBQUNBOztBQURBO0FBQ0E7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLGdDQUFnQztFQUNoQyx3QkFBd0I7QUFDMUI7O0FBRUE7QUFDQTs7QUFEQTtBQUNBOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtFQUN4QixnQ0FBZ0M7RUFDaEMsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtBQUMxQjs7QUFFQTtBQUNBOztBQURBO0FBQ0E7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsNEJBQTRCO0FBQzlCOztBQUVBO0FBQ0E7O0FBREE7QUFDQTs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyw0QkFBNEI7QUFDOUI7O0FBRUE7QUFDQTs7QUFEQTtBQUNBOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLDZCQUE2QjtBQUMvQjs7QUFFQTtBQUNBOztBQURBO0FBQ0E7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsMEJBQTBCO0FBQzVCOztBQUVBO0FBQ0E7O0FBREE7QUFDQTs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyx5QkFBeUI7QUFDM0I7O0FBRUE7QUFDQTs7QUFEQTtBQUNBOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLDZCQUE2QjtBQUMvQjs7QUFFQTtBQUNBOztBQURBO0FBQ0E7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsNkJBQTZCO0FBQy9COztBQUVBO0FBQ0E7O0FBREE7QUFDQTs7QUFFQTtFQUNFLHNDQUFzQztFQUN0Qyw4QkFBOEI7QUFDaEM7O0FBRUE7QUFDQTs7QUFEQTtBQUNBOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLDJCQUEyQjtBQUM3Qjs7QUFFQTtBQUNBOztBQURBO0FBQ0E7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBO0FBQ0E7O0FBREE7QUFDQTs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQywwQkFBMEI7QUFDNUI7O0FBRUE7QUFDQTs7QUFEQTtBQUNBOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLDZCQUE2QjtBQUMvQjs7QUFFQTtBQUNBOztBQURBO0FBQ0E7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsMEJBQTBCO0FBQzVCOztBQUVBO0FBQ0E7O0FBREE7QUFDQTs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyw2QkFBNkI7QUFDL0I7O0FBRUE7QUFDQTs7QUFEQTtBQUNBOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLDJCQUEyQjtBQUM3Qjs7QUFFQTtBQUNBOztBQURBO0FBQ0E7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsOEJBQThCO0FBQ2hDOztBQUVBO0FBQ0E7O0FBREE7QUFDQTs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyx3QkFBd0I7QUFDMUI7O0FBRUE7QUFDQTs7QUFEQTtBQUNBOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLDJCQUEyQjtBQUM3Qjs7QUFFQTtBQUNBOztBQURBO0FBQ0E7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsdUJBQXVCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBREE7QUFDQTs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQywyQkFBMkI7QUFDN0I7O0FBRUE7QUFDQTs7QUFEQTtBQUNBOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLDhCQUE4QjtBQUNoQzs7QUFFQTtBQUNBOztBQURBO0FBQ0E7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsMkJBQTJCO0FBQzdCOztBQUVBO0FBQ0E7O0FBREE7QUFDQTs7QUFFQTtFQUNFLHNDQUFzQztFQUN0Qyw4QkFBOEI7QUFDaEM7O0FBRUE7QUFDQTs7QUFEQTtBQUNBOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDRCQUE0QjtBQUM5Qjs7QUFFQTtBQUNBOztBQURBO0FBQ0E7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsK0JBQStCO0FBQ2pDOztBQUVBO0FBQ0E7O0FBREE7QUFDQTs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyx5QkFBeUI7QUFDM0I7O0FBRUE7QUFDQTs7QUFEQTtBQUNBOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDRCQUE0QjtBQUM5Qjs7QUFFQTtBQUNBOztBQURBO0FBQ0E7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixvQkFBb0I7QUFDdEI7O0FBRUE7QUFDQTs7QUFEQTtBQUNBOztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLHNDQUFzQztFQUN0QywrQkFBK0I7RUFDL0IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLHNDQUFzQztBQUN4Qzs7QUFFQTtBQUNBOztBQURBO0FBQ0E7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsdUJBQXVCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBREE7QUFDQTs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyx3QkFBd0I7QUFDMUI7O0FBRUE7QUFDQTs7QUFEQTtBQUNBOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtFQUN4Qiw4Q0FBOEM7RUFDOUMsc0NBQXNDO0VBQ3RDLGdDQUFnQztFQUNoQyx3QkFBd0I7QUFDMUI7O0FBRUE7QUFDQTs7QUFEQTtBQUNBOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDRCQUE0QjtFQUM1QiwyQ0FBMkM7RUFDM0MsbUNBQW1DO0FBQ3JDOztBQUVBO0FBQ0E7O0FBREE7QUFDQTs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyw2QkFBNkI7RUFDN0IsMENBQTBDO0VBQzFDLGtDQUFrQztBQUNwQzs7QUFFQTtBQUNBOztBQURBO0FBQ0E7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsd0JBQXdCO0FBQzFCOztBQUVBO0FBQ0E7O0FBREE7QUFDQTs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxnQ0FBZ0M7QUFDbEM7O0FBRUE7QUFDQTs7QUFEQTtBQUNBOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGlDQUFpQztBQUNuQzs7QUFFQTtBQUNBOztBQURBO0FBQ0E7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsOEJBQThCO0FBQ2hDOztBQUVBO0FBQ0E7O0FBREE7QUFDQTs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QywrQkFBK0I7QUFDakM7O0FBRUE7QUFDQTs7QUFEQTtBQUNBOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLHlCQUF5QjtBQUMzQjs7QUFFQTtBQUNBOztBQURBO0FBQ0E7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsaUNBQWlDO0FBQ25DOztBQUVBO0FBQ0E7O0FBREE7QUFDQTs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxrQ0FBa0M7QUFDcEM7O0FBRUE7QUFDQTs7QUFEQTtBQUNBOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLCtCQUErQjtBQUNqQzs7QUFFQTtBQUNBOztBQURBO0FBQ0E7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0FBQ0E7O0FBREE7QUFDQTs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtBQUNBOztBQURBO0FBQ0E7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsNEJBQTRCO0FBQzlCOztBQUVBO0FBQ0E7O0FBREE7QUFDQTs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7QUFDQTs7QUFEQTtBQUNBOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLHVCQUF1QjtBQUN6Qjs7QUFFQTtBQUNBOztBQURBO0FBQ0E7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBO0FBQ0E7O0FBREE7QUFDQTs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQywwQkFBMEI7QUFDNUI7O0FBRUE7QUFDQTs7QUFEQTtBQUNBOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLDBCQUEwQjtBQUM1Qjs7QUFFQTtBQUNBOztBQURBO0FBQ0E7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsMkJBQTJCO0FBQzdCOztBQUVBO0FBQ0E7O0FBREE7QUFDQTs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyx3QkFBd0I7QUFDMUI7O0FBRUE7QUFDQTs7QUFEQTtBQUNBOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLHVCQUF1QjtBQUN6Qjs7QUFFQTtBQUNBOztBQURBO0FBQ0E7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsMkJBQTJCO0FBQzdCOztBQUVBO0FBQ0E7O0FBREE7QUFDQTs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQywyQkFBMkI7QUFDN0I7O0FBRUE7QUFDQTs7QUFEQTtBQUNBOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDRCQUE0QjtBQUM5Qjs7QUFFQTtBQUNBOztBQURBO0FBQ0E7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMseUJBQXlCO0FBQzNCOztBQUVBO0FBQ0E7O0FBREE7QUFDQTs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQywyQkFBMkI7QUFDN0I7O0FBRUE7QUFDQTs7QUFEQTtBQUNBOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLDJCQUEyQjtBQUM3Qjs7QUFFQTtBQUNBOztBQURBO0FBQ0E7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsNEJBQTRCO0FBQzlCOztBQUVBO0FBQ0E7O0FBREE7QUFDQTs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyx5QkFBeUI7QUFDM0I7O0FBRUE7QUFDQTs7QUFEQTtBQUNBOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDRCQUE0QjtBQUM5Qjs7QUFFQTtBQUNBOztBQURBO0FBQ0E7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsNEJBQTRCO0FBQzlCOztBQUVBO0FBQ0E7O0FBREE7QUFDQTs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyw2QkFBNkI7QUFDL0I7O0FBRUE7QUFDQTs7QUFEQTtBQUNBOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUVFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUVFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLFVBQVU7RUFDVixxQ0FBcUM7RUFDckMsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsTUFBTTtFQUNOLFVBQVU7RUFDVixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsY0FBYztFQUNkLHlDQUF5QztFQUN6QyxpQ0FBaUM7RUFDakMsMEdBQTBHO0VBQzFHLDBHQUEwRjtFQUExRixrR0FBMEY7RUFBMUYsMEZBQTBGO0VBQTFGLDRJQUEwRjtBQUM1Rjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLHFDQUFxQztFQUNyQyw2QkFBNkI7RUFDN0IsMEdBQTBHO0VBQzFHLDBHQUEwRjtFQUExRixrR0FBMEY7RUFBMUYsMEZBQTBGO0VBQTFGLDRJQUEwRjtBQUM1Rjs7QUFFQTtFQUNFLE9BQU87RUFDUCxXQUFXO0VBQ1gsVUFBVTtFQUNWLFFBQVE7RUFDUixZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIscUNBQXFDO0VBRXJDLGdDQUFnQztFQUNoQyx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFFaEMsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixvREFBb0Q7RUFDcEQsNENBQTRDO0FBQzlDOztBQUVBO0VBRUUsaUNBQWlDO0VBQ2pDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFFBQVE7RUFFUixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0VBRVQsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLE9BQU87RUFDUCxRQUFRO0VBQ1IsUUFBUTtFQUNSLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsb0JBQW9CO0VBRXBCLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFFBQVE7RUFDUixXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFDbkMsOEJBQThCO0VBRTlCLGdCQUFnQjtFQUVoQixnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixxREFBcUQ7RUFDckQsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsTUFBTTtJQUNOLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxPQUFPO0lBQ1AsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsUUFBUTtFQUNWO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwrQ0FBK0M7RUFDL0MsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UseURBQXlEO0VBQ3pELGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLDBEQUEwRDtFQUMxRCxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxpRUFBaUU7RUFDakUseURBQXlEO0FBQzNEOztBQUVBO0VBQ0UsK0RBQStEO0VBQy9ELHVEQUF1RDtBQUN6RDs7QUFFQTtFQUNFLGlFQUFpRTtFQUNqRSx5REFBeUQ7QUFDM0Q7O0FBRUE7RUFDRSxrRUFBa0U7RUFDbEUsMERBQTBEO0FBQzVEOztBQUVBO0VBQ0UsaUVBQWlFO0VBQ2pFLHlEQUF5RDtBQUMzRDs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCxxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSxrRUFBa0U7RUFDbEUsMERBQTBEO0FBQzVEOztBQUVBO0VBQ0UsaUVBQWlFO0VBQ2pFLHlEQUF5RDtBQUMzRDs7QUFFQTtFQUNFLG9FQUFvRTtFQUNwRSw0REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSxnRUFBZ0U7RUFDaEUsd0RBQXdEO0FBQzFEOztBQUVBO0VBQ0UsOERBQThEO0VBQzlELHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCxxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSxpRUFBaUU7RUFDakUseURBQXlEO0FBQzNEOztBQUVBO0VBQ0UsaUVBQWlFO0VBQ2pFLHlEQUF5RDtBQUMzRDs7QUFFQTtFQUNFLGtFQUFrRTtFQUNsRSwwREFBMEQ7QUFDNUQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VpL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5pbWF0ZWQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLmFuaW1hdGVkLmluZmluaXRlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlIHtcbn1cblxuXG5cbi5ib3VuY2Uge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2U7XG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2U7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbn1cblxuQGtleWZyYW1lcyBmbGFzaCB7XG59XG5cbi5mbGFzaCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZsYXNoO1xuICBhbmltYXRpb24tbmFtZTogZmxhc2g7XG59XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xufVxuXG4ucHVsc2Uge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBwdWxzZTtcbiAgYW5pbWF0aW9uLW5hbWU6IHB1bHNlO1xufVxuXG5Aa2V5ZnJhbWVzIHJ1YmJlckJhbmQge1xufVxuXG4ucnViYmVyQmFuZCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJ1YmJlckJhbmQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBydWJiZXJCYW5kO1xufVxuXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbn1cblxuLnNoYWtlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2hha2U7XG4gIGFuaW1hdGlvbi1uYW1lOiBzaGFrZTtcbn1cblxuQGtleWZyYW1lcyBoZWFkU2hha2Uge1xufVxuXG4uaGVhZFNoYWtlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGhlYWRTaGFrZTtcbiAgYW5pbWF0aW9uLW5hbWU6IGhlYWRTaGFrZTtcbn1cblxuQGtleWZyYW1lcyBzd2luZyB7XG59XG5cbi5zd2luZyB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc3dpbmc7XG4gIGFuaW1hdGlvbi1uYW1lOiBzd2luZztcbn1cblxuQGtleWZyYW1lcyB0YWRhIHtcbn1cblxuLnRhZGEge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB0YWRhO1xuICBhbmltYXRpb24tbmFtZTogdGFkYTtcbn1cblxuQGtleWZyYW1lcyB3b2JibGUge1xufVxuXG4ud29iYmxlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogd29iYmxlO1xuICBhbmltYXRpb24tbmFtZTogd29iYmxlO1xufVxuXG5Aa2V5ZnJhbWVzIGplbGxvIHtcbn1cblxuLmplbGxvIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogamVsbG87XG4gIGFuaW1hdGlvbi1uYW1lOiBqZWxsbztcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbn1cblxuQGtleWZyYW1lcyBib3VuY2VJbiB7XG59XG5cbi5ib3VuY2VJbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAuNzVzO1xuICBhbmltYXRpb24tZHVyYXRpb246IC43NXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluO1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlSW47XG59XG5cbi5ib3VuY2VPdXQsIC5mbGlwT3V0WCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAuNzVzO1xuICBhbmltYXRpb24tZHVyYXRpb246IC43NXM7XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlSW5Eb3duIHtcbn1cblxuLmJvdW5jZUluRG93biB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluRG93bjtcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluRG93bjtcbn1cblxuQGtleWZyYW1lcyBib3VuY2VJbkxlZnQge1xufVxuXG4uYm91bmNlSW5MZWZ0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlSW5MZWZ0O1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlSW5MZWZ0O1xufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZUluUmlnaHQge1xufVxuXG4uYm91bmNlSW5SaWdodCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluUmlnaHQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblJpZ2h0O1xufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZUluVXAge1xufVxuXG4uYm91bmNlSW5VcCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblVwO1xufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZU91dCB7XG59XG5cbi5ib3VuY2VPdXQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXQ7XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlT3V0RG93biB7XG59XG5cbi5ib3VuY2VPdXREb3duIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlT3V0RG93bjtcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dERvd247XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlT3V0TGVmdCB7XG59XG5cbi5ib3VuY2VPdXRMZWZ0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlT3V0TGVmdDtcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dExlZnQ7XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlT3V0UmlnaHQge1xufVxuXG4uYm91bmNlT3V0UmlnaHQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXRSaWdodDtcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dFJpZ2h0O1xufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZU91dFVwIHtcbn1cblxuLmJvdW5jZU91dFVwIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlT3V0VXA7XG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXRVcDtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xufVxuXG4uZmFkZUluIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluO1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xufVxuXG4uZmFkZUluRG93biB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd25CaWcge1xufVxuXG4uZmFkZUluRG93bkJpZyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd25CaWc7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duQmlnO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbkxlZnQge1xufVxuXG4uZmFkZUluTGVmdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkxlZnQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5MZWZ0O1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbkxlZnRCaWcge1xufVxuXG4uZmFkZUluTGVmdEJpZyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkxlZnRCaWc7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5MZWZ0QmlnO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJblJpZ2h0IHtcbn1cblxuLmZhZGVJblJpZ2h0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluUmlnaHQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5SaWdodDtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW5SaWdodEJpZyB7XG59XG5cbi5mYWRlSW5SaWdodEJpZyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJblJpZ2h0QmlnO1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluUmlnaHRCaWc7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluVXAge1xufVxuXG4uZmFkZUluVXAge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcDtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblVwO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJblVwQmlnIHtcbn1cblxuLmZhZGVJblVwQmlnIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluVXBCaWc7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcEJpZztcbn1cblxuQGtleWZyYW1lcyBmYWRlT3V0IHtcbn1cblxuLmZhZGVPdXQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0O1xuICBhbmltYXRpb24tbmFtZTogZmFkZU91dDtcbn1cblxuQGtleWZyYW1lcyBmYWRlT3V0RG93biB7XG59XG5cbi5mYWRlT3V0RG93biB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXREb3duO1xuICBhbmltYXRpb24tbmFtZTogZmFkZU91dERvd247XG59XG5cbkBrZXlmcmFtZXMgZmFkZU91dERvd25CaWcge1xufVxuXG4uZmFkZU91dERvd25CaWcge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0RG93bkJpZztcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXREb3duQmlnO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVPdXRMZWZ0IHtcbn1cblxuLmZhZGVPdXRMZWZ0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dExlZnQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0TGVmdDtcbn1cblxuQGtleWZyYW1lcyBmYWRlT3V0TGVmdEJpZyB7XG59XG5cbi5mYWRlT3V0TGVmdEJpZyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRMZWZ0QmlnO1xuICBhbmltYXRpb24tbmFtZTogZmFkZU91dExlZnRCaWc7XG59XG5cbkBrZXlmcmFtZXMgZmFkZU91dFJpZ2h0IHtcbn1cblxuLmZhZGVPdXRSaWdodCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRSaWdodDtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRSaWdodDtcbn1cblxuQGtleWZyYW1lcyBmYWRlT3V0UmlnaHRCaWcge1xufVxuXG4uZmFkZU91dFJpZ2h0QmlnIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dFJpZ2h0QmlnO1xuICBhbmltYXRpb24tbmFtZTogZmFkZU91dFJpZ2h0QmlnO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVPdXRVcCB7XG59XG5cbi5mYWRlT3V0VXAge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0VXA7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0VXA7XG59XG5cbkBrZXlmcmFtZXMgZmFkZU91dFVwQmlnIHtcbn1cblxuLmZhZGVPdXRVcEJpZyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRVcEJpZztcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRVcEJpZztcbn1cblxuQGtleWZyYW1lcyBmbGlwIHtcbn1cblxuLmFuaW1hdGVkLmZsaXAge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGU7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZsaXA7XG4gIGFuaW1hdGlvbi1uYW1lOiBmbGlwO1xufVxuXG5Aa2V5ZnJhbWVzIGZsaXBJblgge1xufVxuXG4uZmxpcEluWCB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSFpbXBvcnRhbnQ7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUhaW1wb3J0YW50O1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmbGlwSW5YO1xuICBhbmltYXRpb24tbmFtZTogZmxpcEluWDtcbn1cblxuLmZsaXBJblksIC5mbGlwT3V0WCB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSFpbXBvcnRhbnQ7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUhaW1wb3J0YW50O1xufVxuXG5Aa2V5ZnJhbWVzIGZsaXBJblkge1xufVxuXG4uZmxpcEluWSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZsaXBJblk7XG4gIGFuaW1hdGlvbi1uYW1lOiBmbGlwSW5ZO1xufVxuXG5Aa2V5ZnJhbWVzIGZsaXBPdXRYIHtcbn1cblxuLmZsaXBPdXRYIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmxpcE91dFg7XG4gIGFuaW1hdGlvbi1uYW1lOiBmbGlwT3V0WDtcbn1cblxuQGtleWZyYW1lcyBmbGlwT3V0WSB7XG59XG5cbi5mbGlwT3V0WSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAuNzVzO1xuICBhbmltYXRpb24tZHVyYXRpb246IC43NXM7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSFpbXBvcnRhbnQ7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUhaW1wb3J0YW50O1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmbGlwT3V0WTtcbiAgYW5pbWF0aW9uLW5hbWU6IGZsaXBPdXRZO1xufVxuXG5Aa2V5ZnJhbWVzIGxpZ2h0U3BlZWRJbiB7XG59XG5cbi5saWdodFNwZWVkSW4ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBsaWdodFNwZWVkSW47XG4gIGFuaW1hdGlvbi1uYW1lOiBsaWdodFNwZWVkSW47XG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIGxpZ2h0U3BlZWRPdXQge1xufVxuXG4ubGlnaHRTcGVlZE91dCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGxpZ2h0U3BlZWRPdXQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBsaWdodFNwZWVkT3V0O1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlSW4ge1xufVxuXG4ucm90YXRlSW4ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb3RhdGVJbjtcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZUluRG93bkxlZnQge1xufVxuXG4ucm90YXRlSW5Eb3duTGVmdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluRG93bkxlZnQ7XG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVJbkRvd25MZWZ0O1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZUluRG93blJpZ2h0IHtcbn1cblxuLnJvdGF0ZUluRG93blJpZ2h0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm90YXRlSW5Eb3duUmlnaHQ7XG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVJbkRvd25SaWdodDtcbn1cblxuQGtleWZyYW1lcyByb3RhdGVJblVwTGVmdCB7XG59XG5cbi5yb3RhdGVJblVwTGVmdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluVXBMZWZ0O1xuICBhbmltYXRpb24tbmFtZTogcm90YXRlSW5VcExlZnQ7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlSW5VcFJpZ2h0IHtcbn1cblxuLnJvdGF0ZUluVXBSaWdodCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluVXBSaWdodDtcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluVXBSaWdodDtcbn1cblxuQGtleWZyYW1lcyByb3RhdGVPdXQge1xufVxuXG4ucm90YXRlT3V0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm90YXRlT3V0O1xuICBhbmltYXRpb24tbmFtZTogcm90YXRlT3V0O1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZU91dERvd25MZWZ0IHtcbn1cblxuLnJvdGF0ZU91dERvd25MZWZ0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm90YXRlT3V0RG93bkxlZnQ7XG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXREb3duTGVmdDtcbn1cblxuQGtleWZyYW1lcyByb3RhdGVPdXREb3duUmlnaHQge1xufVxuXG4ucm90YXRlT3V0RG93blJpZ2h0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm90YXRlT3V0RG93blJpZ2h0O1xuICBhbmltYXRpb24tbmFtZTogcm90YXRlT3V0RG93blJpZ2h0O1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZU91dFVwTGVmdCB7XG59XG5cbi5yb3RhdGVPdXRVcExlZnQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXRVcExlZnQ7XG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXRVcExlZnQ7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlT3V0VXBSaWdodCB7XG59XG5cbi5yb3RhdGVPdXRVcFJpZ2h0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm90YXRlT3V0VXBSaWdodDtcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dFVwUmlnaHQ7XG59XG5cbkBrZXlmcmFtZXMgaGluZ2Uge1xufVxuXG4uaGluZ2Uge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGhpbmdlO1xuICBhbmltYXRpb24tbmFtZTogaGluZ2U7XG59XG5cbkBrZXlmcmFtZXMgamFja0luVGhlQm94IHtcbn1cblxuLmphY2tJblRoZUJveCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGphY2tJblRoZUJveDtcbiAgYW5pbWF0aW9uLW5hbWU6IGphY2tJblRoZUJveDtcbn1cblxuQGtleWZyYW1lcyByb2xsSW4ge1xufVxuXG4ucm9sbEluIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm9sbEluO1xuICBhbmltYXRpb24tbmFtZTogcm9sbEluO1xufVxuXG5Aa2V5ZnJhbWVzIHJvbGxPdXQge1xufVxuXG4ucm9sbE91dCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvbGxPdXQ7XG4gIGFuaW1hdGlvbi1uYW1lOiByb2xsT3V0O1xufVxuXG5Aa2V5ZnJhbWVzIHpvb21JbiB7XG59XG5cbi56b29tSW4ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tSW47XG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tSW47XG59XG5cbkBrZXlmcmFtZXMgem9vbUluRG93biB7XG59XG5cbi56b29tSW5Eb3duIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogem9vbUluRG93bjtcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21JbkRvd247XG59XG5cbkBrZXlmcmFtZXMgem9vbUluTGVmdCB7XG59XG5cbi56b29tSW5MZWZ0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogem9vbUluTGVmdDtcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21JbkxlZnQ7XG59XG5cbkBrZXlmcmFtZXMgem9vbUluUmlnaHQge1xufVxuXG4uem9vbUluUmlnaHQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tSW5SaWdodDtcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21JblJpZ2h0O1xufVxuXG5Aa2V5ZnJhbWVzIHpvb21JblVwIHtcbn1cblxuLnpvb21JblVwIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogem9vbUluVXA7XG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tSW5VcDtcbn1cblxuQGtleWZyYW1lcyB6b29tT3V0IHtcbn1cblxuLnpvb21PdXQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tT3V0O1xuICBhbmltYXRpb24tbmFtZTogem9vbU91dDtcbn1cblxuQGtleWZyYW1lcyB6b29tT3V0RG93biB7XG59XG5cbi56b29tT3V0RG93biB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21PdXREb3duO1xuICBhbmltYXRpb24tbmFtZTogem9vbU91dERvd247XG59XG5cbkBrZXlmcmFtZXMgem9vbU91dExlZnQge1xufVxuXG4uem9vbU91dExlZnQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tT3V0TGVmdDtcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21PdXRMZWZ0O1xufVxuXG5Aa2V5ZnJhbWVzIHpvb21PdXRSaWdodCB7XG59XG5cbi56b29tT3V0UmlnaHQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tT3V0UmlnaHQ7XG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tT3V0UmlnaHQ7XG59XG5cbkBrZXlmcmFtZXMgem9vbU91dFVwIHtcbn1cblxuLnpvb21PdXRVcCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21PdXRVcDtcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21PdXRVcDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZUluRG93biB7XG59XG5cbi5zbGlkZUluRG93biB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5Eb3duO1xuICBhbmltYXRpb24tbmFtZTogc2xpZGVJbkRvd247XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbkxlZnQge1xufVxuXG4uc2xpZGVJbkxlZnQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZUluTGVmdDtcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5MZWZ0O1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlSW5SaWdodCB7XG59XG5cbi5zbGlkZUluUmlnaHQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZUluUmlnaHQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluUmlnaHQ7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJblVwIHtcbn1cblxuLnNsaWRlSW5VcCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5VcDtcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5VcDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZU91dERvd24ge1xufVxuXG4uc2xpZGVPdXREb3duIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2xpZGVPdXREb3duO1xuICBhbmltYXRpb24tbmFtZTogc2xpZGVPdXREb3duO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlT3V0TGVmdCB7XG59XG5cbi5zbGlkZU91dExlZnQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dExlZnQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dExlZnQ7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVPdXRSaWdodCB7XG59XG5cbi5zbGlkZU91dFJpZ2h0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2xpZGVPdXRSaWdodDtcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlT3V0UmlnaHQ7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVPdXRVcCB7XG59XG5cbi5zbGlkZU91dFVwIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2xpZGVPdXRVcDtcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlT3V0VXA7XG59XG5cbiNmd19hbF8wMDcge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXgtaGVpZ2h0OiA2NThweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xufVxuXG4jZndfYWxfMDA3OmhvdmVyIHtcbiAgY3Vyc29yOiAtbW96LWdyYWI7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xufVxuXG4jZndfYWxfMDA3OmFjdGl2ZSB7XG4gIGN1cnNvcjogLW1vei1ncmFiYmluZztcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xufVxuXG4jZndfYWxfMDA3ID4gLmNhcm91c2VsLWlubmVyID4gLmNhcm91c2VsLWl0ZW0gPiBhID4gaW1nLCAjZndfYWxfMDA3ID4gLmNhcm91c2VsLWlubmVyID4gLmNhcm91c2VsLWl0ZW0gPiBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogLjQ7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC1oZWlnaHQ6IDk1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5cbi5wc19yb3RhdGVfc2NhbGVfYyB7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDApO1xufVxuXG4ucHNfcm90YXRlX3NjYWxlX2MgLmNhcm91c2VsLWl0ZW0ge1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMikgcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgyKSByb3RhdGUoNDVkZWcpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDJzIGN1YmljLWJlemllciguMjMsMSwuMzIsMSkgMHMsb3BhY2l0eSBjdWJpYy1iZXppZXIoLjIzLDEsLjMyLDEpIDJzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMnMgY3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKSAwcyxvcGFjaXR5IGN1YmljLWJlemllciguMjMsMSwuMzIsMSkgMnM7XG59XG5cbi5wc19yb3RhdGVfc2NhbGVfYyAuY2Fyb3VzZWwtaXRlbTpmaXJzdC1jaGlsZCB7XG4gIHRvcDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHNfcm90YXRlX3NjYWxlX2MgLmNhcm91c2VsLWl0ZW0uYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMCk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMnMgY3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKSAwcyxvcGFjaXR5IGN1YmljLWJlemllciguMjMsMSwuMzIsMSkgMnM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAycyBjdWJpYy1iZXppZXIoLjIzLDEsLjMyLDEpIDBzLG9wYWNpdHkgY3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKSAycztcbn1cblxuLnBzX2luZGljYXRvcnNfbCA+IC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogNSU7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogNSU7XG59XG5cbi5wc19pbmRpY2F0b3JzX2wgPiAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gIHdpZHRoOiAxM3B4O1xuICBoZWlnaHQ6IDEzcHg7XG4gIG1hcmdpbjogMCAzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4ucHNfaW5kaWNhdG9yc19sID4gLmNhcm91c2VsLWluZGljYXRvcnMgLmFjdGl2ZSB7XG4gIHdpZHRoOiAxM3B4O1xuICBoZWlnaHQ6IDEzcHg7XG4gIG1hcmdpbjogMCAzcHg7XG4gIGJhY2tncm91bmQ6ICNmMDRkNGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmMDRkNGU7XG59XG5cbi5wc19jb250cm9sX3JvdGF0ZV9mIC5jYXJvdXNlbC1jb250cm9sLW5leHQsIC5wc19jb250cm9sX3JvdGF0ZV9mIC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICB0b3A6IDQ1JTtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgei1pbmRleDogMTAwO1xuICBjb2xvcjogIzAwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuOCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5wc19jb250cm9sX3JvdGF0ZV9mOmhvdmVyIC5jYXJvdXNlbC1jb250cm9sLW5leHQsIC5wc19jb250cm9sX3JvdGF0ZV9mOmhvdmVyIC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBjdWJpYy1iZXppZXIoLjIzLDEsLjMyLDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgY3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKTtcbn1cblxuLnBzX2NvbnRyb2xfcm90YXRlX2YgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCA+IHNwYW4sIC5wc19jb250cm9sX3JvdGF0ZV9mIC5jYXJvdXNlbC1jb250cm9sLXByZXYgPiBzcGFuIHtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLnBzX2NvbnRyb2xfcm90YXRlX2YgLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XG4gIGxlZnQ6IDMlO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5wc19jb250cm9sX3JvdGF0ZV9mIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICByaWdodDogMyU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLnBzX2NvbnRyb2xfcm90YXRlX2YgLmNhcm91c2VsLWNvbnRyb2wtbmV4dDpob3ZlciwgLnBzX2NvbnRyb2xfcm90YXRlX2YgLmNhcm91c2VsLWNvbnRyb2wtcHJldjpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjZjA0ZDRlO1xufVxuXG4ucHNfY29udHJvbF9yb3RhdGVfZiAuY2Fyb3VzZWwtY29udHJvbC1wcmV2ID4gc3BhbjpudGgtY2hpbGQoMSkge1xuICBsZWZ0OiA0NSU7XG59XG5cbi5wc19jb250cm9sX3JvdGF0ZV9mIC5jYXJvdXNlbC1jb250cm9sLW5leHQgPiBzcGFuOm50aC1jaGlsZCgxKSB7XG4gIHJpZ2h0OiA0NSU7XG59XG5cbi5md19hbF8wMDdfc2xpZGUge1xuICBsZWZ0OiAwO1xuICB0b3A6IDIyJTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5md19hbF8wMDdfc2xpZGUgPiBoMyB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLjdzO1xuICBhbmltYXRpb24tZGVsYXk6IC43cztcbn1cblxuLmZ3X2FsXzAwN19zbGlkZSA+IGgzOjphZnRlciwgLmZ3X2FsXzAwN19zbGlkZSA+IGgzOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB0b3A6IDUwJTtcbiAgaGVpZ2h0OiAzcHg7XG4gIHdpZHRoOiA3NXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogLTJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcbn1cblxuLmZ3X2FsXzAwN19zbGlkZSA+IGgxLCAuZndfYWxfMDA3X3NsaWRlID4gcCB7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG59XG5cbi5md19hbF8wMDdfc2xpZGUgPiBoMzo6YmVmb3JlIHtcbiAgcmlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogLjVlbTtcbn1cblxuLmZ3X2FsXzAwN19zbGlkZSA+IGgzOjphZnRlciB7XG4gIGxlZnQ6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAuNWVtO1xufVxuXG4uZndfYWxfMDA3X3NsaWRlID4gaDEge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiA2NXB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS40cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjRzO1xufVxuXG4uZndfYWxfMDA3X3NsaWRlID4gaDEgPiBzcGFuIHtcbiAgY29sb3I6ICNmMDRkNGU7XG59XG5cbi5md19hbF8wMDdfc2xpZGUgPiBwIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbWFyZ2luOiAzMHB4IDAgMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDIuMXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMi4xcztcbiAgZm9udC1mYW1pbHk6ICdDb3VyZ2V0dGUnO1xufVxuXG4uZndfYWxfMDA3X3NsaWRlID4gYSB7XG4gIGNvbG9yOiAjMDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDUwcHggMCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgZm9udC1mYW1pbHk6IFJvYm90byxzYW5zLXNlcmlmO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDIuOHM7XG4gIGFuaW1hdGlvbi1kZWxheTogMi44cztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjVzIGN1YmljLWJlemllciguMjMsMSwuMzIsMSk7XG4gIHRyYW5zaXRpb246IGFsbCAuNXMgY3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKTtcbn1cblxuLmZ3X2FsXzAwN19zbGlkZSA+IGE6YWN0aXZlLCAuZndfYWxfMDA3X3NsaWRlID4gYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjZjA0ZDRlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDgwcHgpIHtcbiAgLmZ3X2FsXzAwN19zbGlkZSB7XG4gICAgdG9wOiAwO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDgwcHgpIHtcbiAgLmZ3X2FsXzAwN19zbGlkZSA+IGgxIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDgwcHgpIHtcbiAgLmZ3X2FsXzAwN19zbGlkZSA+IHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0ODBweCkge1xuICAuZndfYWxfMDA3X3NsaWRlID4gYSB7XG4gICAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgICBwYWRkaW5nOiA3cHggMTVweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDgwcHgpIHtcbiAgLnBzX2NvbnRyb2xfcm90YXRlX2YgLmNhcm91c2VsLWNvbnRyb2wge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6NDgxcHgpIGFuZCAobWF4LXdpZHRoOjYwMHB4KSB7XG4gIC5md19hbF8wMDdfc2xpZGUge1xuICAgIHRvcDogNSU7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOjQ4MXB4KSBhbmQgKG1heC13aWR0aDo2MDBweCkge1xuICAuZndfYWxfMDA3X3NsaWRlID4gaDEge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBtYXJnaW46IDEwcHggMCAwO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOjYwMXB4KSBhbmQgKG1heC13aWR0aDo3NjdweCkge1xuICAuZndfYWxfMDA3X3NsaWRlIHtcbiAgICB0b3A6IDEwJTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDo2MDFweCkgYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcbiAgLmZ3X2FsXzAwN19zbGlkZSA+IGgxIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgfVxufVxuXG4ucHNfZWFzZSAuY2Fyb3VzZWwtaXRlbSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xufVxuXG4ucHNfZWFzZUluT3V0IC5jYXJvdXNlbC1pdGVtIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuLnBzX3NwZWVkeSAuY2Fyb3VzZWwtaXRlbSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLDEsMCwxKTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLDEsMCwxKTtcbn1cblxuLnBzX3Nsb3dTcGVlZHkgLmNhcm91c2VsLWl0ZW0ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjMsMSwwLDEpO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC4zLDEsMCwxKTtcbn1cblxuLnBzX2Vhc2VPdXRJbkN1YmljIC5jYXJvdXNlbC1pdGVtIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC4yMiwuODEsLjAxLC45OSk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjIyLC44MSwuMDEsLjk5KTtcbn1cblxuLnBzX3N3aW5nIC5jYXJvdXNlbC1pdGVtIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC4wMiwuMDEsLjQ3LDEpO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC4wMiwuMDEsLjQ3LDEpO1xufVxuXG4ucHNfZWFzZU91dEN1YmljIC5jYXJvdXNlbC1pdGVtIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKTtcbn1cblxuLnBzX2Vhc2VJbk91dEN1YmljIC5jYXJvdXNlbC1pdGVtIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC42NDUsLjA0NSwuMzU1LDEpO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC42NDUsLjA0NSwuMzU1LDEpO1xufVxuXG4ucHNfZWFzZU91dENpcmMgLmNhcm91c2VsLWl0ZW0ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjA3NSwuODIsLjE2NSwxKTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguMDc1LC44MiwuMTY1LDEpO1xufVxuXG4ucHNfZWFzZU91dEV4cG8gLmNhcm91c2VsLWl0ZW0ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjE5LDEsLjIyLDEpO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC4xOSwxLC4yMiwxKTtcbn1cblxuLnBzX2Vhc2VJblF1YWQgLmNhcm91c2VsLWl0ZW0ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjU1LC4wODUsLjY4LC41Myk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjU1LC4wODUsLjY4LC41Myk7XG59XG5cbi5wc19lYXNlT3V0UXVhZCAuY2Fyb3VzZWwtaXRlbSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguMjUsLjQ2LC40NSwuOTQpO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC4yNSwuNDYsLjQ1LC45NCk7XG59XG5cbi5wc19lYXNlSW5PdXRRdWFkIC5jYXJvdXNlbC1pdGVtIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC40NTUsLjAzLC41MTUsLjk1NSk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjQ1NSwuMDMsLjUxNSwuOTU1KTtcbn1cblxuLnBzX2Vhc2VPdXRRdWFydCAuY2Fyb3VzZWwtaXRlbSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguMTY1LC44NCwuNDQsMSk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjE2NSwuODQsLjQ0LDEpO1xufVxuXG4ucHNfZWFzZUluT3V0UXVhcnQgLmNhcm91c2VsLWl0ZW0ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjc3LDAsLjE3NSwxKTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguNzcsMCwuMTc1LDEpO1xufVxuXG4ucHNfZWFzZU91dFF1aW50IC5jYXJvdXNlbC1pdGVtIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguMjMsMSwuMzIsMSk7XG59XG5cbi5wc19lYXNlSW5TaW5lIC5jYXJvdXNlbC1pdGVtIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC40NywwLC43NDUsLjcxNSk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjQ3LDAsLjc0NSwuNzE1KTtcbn1cblxuLnBzX2Vhc2VPdXRTaW5lIC5jYXJvdXNlbC1pdGVtIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC4zOSwuNTc1LC41NjUsMSk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjM5LC41NzUsLjU2NSwxKTtcbn1cblxuLnBzX2Vhc2VJbk91dFNpbmUgLmNhcm91c2VsLWl0ZW0ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjQ0NSwuMDUsLjU1LC45NSk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjQ0NSwuMDUsLjU1LC45NSk7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/ui/carousel/carousel.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/ui/carousel/carousel.component.ts ***!
  \**************************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CarouselComponent = class CarouselComponent {
    constructor() { }
    ngOnInit() {
    }
};
CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carousel',
        template: __webpack_require__(/*! raw-loader!./carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/ui/carousel/carousel.component.html"),
        styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/components/ui/carousel/carousel.component.css")]
    })
], CarouselComponent);



/***/ }),

/***/ "./src/app/components/ui/footer/footer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/ui/footer/footer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  background-color: #292c2f;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\n  box-sizing: border-box;\n  width: 100%;\n  text-align: left;\n  font: bold 16px sans-serif;\n  padding: 55px 50px;\n  margin-top: 80px;\n  bottom: 0;\n  color: #fff;\n}\n\n.footer-navigation h3 {\n  margin: 0;\n  font: normal 36px Cookie, cursive;\n  margin-bottom: 20px;\n  color: #fff;\n}\n\n.footer-navigation h3 a {\n  text-decoration: none;\n  color: #fff;\n}\n\n.footer-navigation h3 span {\n  color: #f13c47;\n}\n\n.footer-navigation p.links a {\n  color: #fff;\n  text-decoration: none;\n}\n\n.footer-navigation p.company-name {\n  color: #8f9296;\n  font-size: 14px;\n  font-weight: normal;\n  margin-top: 20px;\n}\n\n@media (max-width:767px) {\n  .footer-contacts {\n    margin: 30px 0;\n  }\n}\n\n.footer-contacts p {\n  display: inline-block;\n  color: #ffffff;\n  vertical-align: middle;\n}\n\n.footer-contacts p a {\n  color: #5383d3;\n  text-decoration: none;\n}\n\n.fa.footer-contacts-icon {\n  background-color: #33383b;\n  color: #fff;\n  font-size: 18px;\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 38px;\n  margin: 10px 15px 10px 0;\n}\n\nspan.new-line-span {\n  display: block;\n  font-weight: normal;\n  display: block;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 2;\n}\n\n.footer-about h4 {\n  display: block;\n  color: #fff;\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n\n.footer-about p {\n  line-height: 20px;\n  color: #92999f;\n  font-size: 13px;\n  font-weight: normal;\n  margin: 0;\n}\n\ndiv.social-links {\n  margin-top: 20px;\n  color: #fff;\n}\n\n.social-links a {\n  display: inline-block;\n  width: 35px;\n  height: 35px;\n  cursor: pointer;\n  background-color: #33383b;\n  border-radius: 2px;\n  font-size: 20px;\n  color: #ffffff;\n  text-align: center;\n  line-height: 35px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n\n.footer-icon {\n    display: block;\n    height: 10%;\n    width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91aS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsMkNBQTJDO0VBQzNDLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdWkvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MmMyZjtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IDDCoHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250OiBib2xkIDE2cHggc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogNTVweCA1MHB4O1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBib3R0b206IDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZm9vdGVyLW5hdmlnYXRpb24gaDMge1xuICBtYXJnaW46IDA7XG4gIGZvbnQ6IG5vcm1hbCAzNnB4IENvb2tpZSwgY3Vyc2l2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5mb290ZXItbmF2aWdhdGlvbiBoMyBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmZvb3Rlci1uYXZpZ2F0aW9uIGgzIHNwYW4ge1xuICBjb2xvcjogI2YxM2M0Nztcbn1cblxuLmZvb3Rlci1uYXZpZ2F0aW9uIHAubGlua3MgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb290ZXItbmF2aWdhdGlvbiBwLmNvbXBhbnktbmFtZSB7XG4gIGNvbG9yOiAjOGY5Mjk2O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KSB7XG4gIC5mb290ZXItY29udGFjdHMge1xuICAgIG1hcmdpbjogMzBweCAwO1xuICB9XG59XG5cbi5mb290ZXItY29udGFjdHMgcCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5mb290ZXItY29udGFjdHMgcCBhIHtcbiAgY29sb3I6ICM1MzgzZDM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmZhLmZvb3Rlci1jb250YWN0cy1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzgzYjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgd2lkdGg6IDM4cHg7XG4gIGhlaWdodDogMzhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICBtYXJnaW46IDEwcHggMTVweCAxMHB4IDA7XG59XG5cbnNwYW4ubmV3LWxpbmUtc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjtcbn1cblxuLmZvb3Rlci1hYm91dCBoNCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZvb3Rlci1hYm91dCBwIHtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjOTI5OTlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbjogMDtcbn1cblxuZGl2LnNvY2lhbC1saW5rcyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc29jaWFsLWxpbmtzIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzgzYjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uZm9vdGVyLWljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTAlO1xuICAgIHdpZHRoOiAzMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/ui/footer/footer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/ui/footer/footer.component.ts ***!
  \**********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/ui/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/ui/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/ui/home/home.component.css":
/*!*******************************************************!*\
  !*** ./src/app/components/ui/home/home.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdWkvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/ui/home/home.component.ts":
/*!******************************************************!*\
  !*** ./src/app/components/ui/home/home.component.ts ***!
  \******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/ui/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/ui/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/ui/menu-feature/menu-feature.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/ui/menu-feature/menu-feature.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdWkvbWVudS1mZWF0dXJlL21lbnUtZmVhdHVyZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/ui/menu-feature/menu-feature.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/ui/menu-feature/menu-feature.component.ts ***!
  \**********************************************************************/
/*! exports provided: MenuFeatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuFeatureComponent", function() { return MenuFeatureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuFeatureComponent = class MenuFeatureComponent {
    constructor() { }
    ngOnInit() {
    }
};
MenuFeatureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-feature',
        template: __webpack_require__(/*! raw-loader!./menu-feature.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/ui/menu-feature/menu-feature.component.html"),
        styles: [__webpack_require__(/*! ./menu-feature.component.css */ "./src/app/components/ui/menu-feature/menu-feature.component.css")]
    })
], MenuFeatureComponent);



/***/ }),

/***/ "./src/app/components/ui/reservation/reservation.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/ui/reservation/reservation.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdWkvcmVzZXJ2YXRpb24vcmVzZXJ2YXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/ui/reservation/reservation.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/ui/reservation/reservation.component.ts ***!
  \********************************************************************/
/*! exports provided: ReservationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationComponent", function() { return ReservationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReservationComponent = class ReservationComponent {
    constructor() { }
    ngOnInit() {
    }
};
ReservationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reservation',
        template: __webpack_require__(/*! raw-loader!./reservation.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/ui/reservation/reservation.component.html"),
        styles: [__webpack_require__(/*! ./reservation.component.css */ "./src/app/components/ui/reservation/reservation.component.css")]
    })
], ReservationComponent);



/***/ }),

/***/ "./src/app/components/ui/ui-menu/ui-menu.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/ui/ui-menu/ui-menu.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdWkvdWktbWVudS91aS1tZW51LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/ui/ui-menu/ui-menu.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/ui/ui-menu/ui-menu.component.ts ***!
  \************************************************************/
/*! exports provided: UiMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiMenuComponent", function() { return UiMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_add_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/add-menu.service */ "./src/app/service/add-menu.service.ts");



let UiMenuComponent = class UiMenuComponent {
    constructor(menuService) {
        this.menuService = menuService;
    }
    ngOnInit() {
        this.menuService.getMenu(0, 10).subscribe((res) => {
            if (res.ok) {
                this.menuList = res.json().content;
            }
        }, error => console.error(error));
    }
};
UiMenuComponent.ctorParameters = () => [
    { type: src_app_service_add_menu_service__WEBPACK_IMPORTED_MODULE_2__["GetMenuListService"] }
];
UiMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ui-menu',
        template: __webpack_require__(/*! raw-loader!./ui-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/ui/ui-menu/ui-menu.component.html"),
        styles: [__webpack_require__(/*! ./ui-menu.component.css */ "./src/app/components/ui/ui-menu/ui-menu.component.css")]
    })
], UiMenuComponent);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"]
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"]
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/service/add-menu.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/add-menu.service.ts ***!
  \*********************************************/
/*! exports provided: AddMenuService, GetMenuListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMenuService", function() { return AddMenuService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMenuListService", function() { return GetMenuListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _shared_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/url */ "./src/app/shared/url.ts");




let AddMenuService = class AddMenuService {
    // tslint:disable-next-line: deprecation
    constructor(http) {
        this.http = http;
        this.url = new _shared_url__WEBPACK_IMPORTED_MODULE_3__["RemoteURL"]().url + '/menu';
        // tslint:disable-next-line: deprecation
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json'
        });
    }
    addMenu(menu) {
        this.headers.append('Authorization', 'Bearer' + sessionStorage.getItem('token'));
        console.log(this.headers);
        return this.http.post(this.url, JSON.stringify(menu), { headers: this.headers });
    }
};
AddMenuService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
AddMenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AddMenuService);

let GetMenuListService = class GetMenuListService {
    // tslint:disable-next-line: deprecation
    constructor(http) {
        this.http = http;
        this.url = new _shared_url__WEBPACK_IMPORTED_MODULE_3__["RemoteURL"]().url + '/menu';
        // tslint:disable-next-line: deprecation
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json'
        });
    }
    getMenu(pageNumber, pageSize) {
        const url = this.url + `?pagNumber=${pageNumber}&pageSize=${pageSize}`;
        return this.http.get(url, { headers: this.headers });
    }
    getMenuById(id) {
        const url = this.url + `/${id}`;
        return this.http.get(url, { headers: this.headers });
    }
    updateMenu(id, menu) {
        const url = this.url + `/${id}`;
        this.headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('xAuthToken'));
        return this.http.put(url, JSON.stringify(menu), { headers: this.headers });
    }
    deleteMenu(id) {
        const url = this.url + `/${id}`;
        this.headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('xAuthToken'));
        return this.http.delete(url, { headers: this.headers });
    }
};
GetMenuListService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
GetMenuListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GetMenuListService);



/***/ }),

/***/ "./src/app/service/catering.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/catering.service.ts ***!
  \*********************************************/
/*! exports provided: CateringService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringService", function() { return CateringService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");



let CateringService = class CateringService {
    // tslint:disable-next-line: deprecation
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8080/catering';
        // tslint:disable-next-line: deprecation
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
        });
    }
    addCatering(catering) {
        this.headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
        return this.http.post(this.url, JSON.stringify(catering), { headers: this.headers });
    }
    getCatering(pageNumber, pageSize) {
        const url = this.url + `?pageNumber=${pageNumber}&pageSize=${pageSize}`;
        return this.http.get(url, { headers: this.headers });
    }
    getCateringById(id) {
        const url = this.url + `/${id}`;
        return this.http.get(url, { headers: this.headers });
    }
    getCategoryByTagName(tag) {
        const url = this.url + `/tagName?tagName=${tag}`;
        return this.http.get(url, { headers: this.headers });
    }
    updateCatering(id, catering) {
        const url = this.url + `/${id}`;
        this.headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
        return this.http.put(url, JSON.stringify(catering), { headers: this.headers });
    }
    deleteCaterinng(id) {
        const url = this.url + `/${id}`;
        this.headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
        return this.http.delete(url, { headers: this.headers });
    }
};
CateringService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
CateringService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CateringService);



/***/ }),

/***/ "./src/app/service/image.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/image.service.ts ***!
  \******************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");



let ImageService = class ImageService {
    // tslint:disable-next-line: deprecation
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8080/images';
        // tslint:disable-next-line: deprecation
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({});
    }
    postImage(image, imageName) {
        const url = this.url + `?imageName=${imageName}`;
        const formdata = new FormData();
        formdata.append('file', image);
        this.headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
        return this.http.post(url, formdata, { headers: this.headers });
    }
    getImages(pageNumber, pageSize) {
        const url = this.url + `?pageNumber=${pageNumber}&pageSize=${pageSize}`;
        return this.http.get(url, { headers: this.headers });
    }
    getImageById(id) {
        const url = this.url + `${id}`;
        return this.http.get(url, { headers: this.headers });
    }
    deleteImageById(id) {
        const url = this.url + `/${id}`;
        this.headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
        return this.http.delete(url, { headers: this.headers });
    }
};
ImageService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
ImageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ImageService);



/***/ }),

/***/ "./src/app/service/login.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/login.service.ts ***!
  \******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _shared_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/url */ "./src/app/shared/url.ts");




let LoginService = class LoginService {
    // tslint:disable-next-line: deprecation
    constructor(http) {
        this.http = http;
        this.baseUrl = new _shared_url__WEBPACK_IMPORTED_MODULE_3__["RemoteURL"]().url;
        // tslint:disable-next-line: deprecation
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json'
        });
    }
    sendCredential(username, password) {
        const url = this.baseUrl + '/authenticate';
        return this.http.post(url, { username, password }, { headers: this.headers });
    }
    logout() {
        const url = this.baseUrl + '/logout';
        this.headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
        return this.http.post(url, null, { headers: this.headers });
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/service/tag.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/tag.service.ts ***!
  \****************************************/
/*! exports provided: TagService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagService", function() { return TagService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");



let TagService = class TagService {
    // tslint:disable-next-line: deprecation
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8080/tag';
        // tslint:disable-next-line: deprecation
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
        });
    }
    getTags(pageNumber, pageSize) {
        const url = this.url + `?pageNumber=${pageNumber}&pageSize=${pageSize}`;
        return this.http.get(url, { headers: this.headers });
    }
    getTagById(id) {
        const url = this.url + `/${id}`;
        return this.http.get(url, { headers: this.headers });
    }
    postTags(tag) {
        this.headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
        return this.http.post(this.url, JSON.stringify(tag), { headers: this.headers });
    }
    updateTags(id, tag) {
        const url = this.url + `/${id}`;
        this.headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
        return this.http.put(url, JSON.stringify(tag), { headers: this.headers });
    }
    deleteTags(id) {
        const url = this.url + `/${id}`;
        this.headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
        return this.http.delete(url, { headers: this.headers });
    }
};
TagService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
TagService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TagService);



/***/ }),

/***/ "./src/app/shared/shared.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/shared.service.ts ***!
  \******************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let SharedService = class SharedService {
    constructor(datePipe) {
        this.datePipe = datePipe;
    }
    convertDate(date) {
        let convertedDate;
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-AU');
        convertedDate = this.datePipe.transform(date, 'medium');
        return convertedDate;
    }
};
SharedService.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }
];
SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SharedService);



/***/ }),

/***/ "./src/app/shared/url.ts":
/*!*******************************!*\
  !*** ./src/app/shared/url.ts ***!
  \*******************************/
/*! exports provided: RemoteURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteURL", function() { return RemoteURL; });
class RemoteURL {
    constructor() {
        this.url = '';
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/models/catering.ts":
/*!********************************!*\
  !*** ./src/models/catering.ts ***!
  \********************************/
/*! exports provided: Catering, Tag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Catering", function() { return Catering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return Tag; });
class Catering {
}
class Tag {
}


/***/ }),

/***/ "./src/models/menu.ts":
/*!****************************!*\
  !*** ./src/models/menu.ts ***!
  \****************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
class Menu {
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nabin/Desktop/Blackstone/blackstone-cafe/src/main/resources/frontend/blackstone-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
webpackJsonp(["accordiondemo.module"],{

/***/ "../../../../../src/app/showcase/components/accordion/accordiondemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordiondemo__ = __webpack_require__("../../../../../src/app/showcase/components/accordion/accordiondemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccordionDemoRoutingModule = (function () {
    function AccordionDemoRoutingModule() {
    }
    return AccordionDemoRoutingModule;
}());
AccordionDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__accordiondemo__["a" /* AccordionDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], AccordionDemoRoutingModule);

//# sourceMappingURL=accordiondemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/accordion/accordiondemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Accordion</span>\n        <span>Accordion groups a collection of contents in tabs.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-growl [value]=\"msgs\"></p-growl>\n    \n    <h3 class=\"first\">Default</h3>\n    <p-accordion>\n        <p-accordionTab header=\"Godfather I\" [selected]=\"true\">\n            The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n        </p-accordionTab>\n        <p-accordionTab header=\"Godfather II\">\n            Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\n        </p-accordionTab>\n        <p-accordionTab header=\"Godfather III\">\n            After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\n        </p-accordionTab>\n    </p-accordion>\n\n    <h3>Multiple</h3>\n    <p-accordion [multiple]=\"true\">\n        <p-accordionTab header=\"Godfather I\">\n            The story begins  as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n        </p-accordionTab>\n        <p-accordionTab header=\"Godfather II\">\n            Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\n       </p-accordionTab>\n        <p-accordionTab header=\"Godfather III\">\n            After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\n        </p-accordionTab>\n    </p-accordion>\n    \n    <h3>Tab Change Event</h3>\n    <p-accordion (onClose)=\"onTabClose($event)\" (onOpen)=\"onTabOpen($event)\">\n        <p-accordionTab header=\"Godfather I\">\n            The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n        </p-accordionTab>\n        <p-accordionTab header=\"Godfather II\">\n            Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\n        </p-accordionTab>\n        <p-accordionTab header=\"Godfather III\">\n            After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\n        </p-accordionTab>\n        <p-accordionTab header=\"Godfather IV\" [disabled]=\"true\">\n            After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\n        </p-accordionTab>\n    </p-accordion>\n    \n    <h3>Programmatic Change</h3>\n    <div style=\"margin-bottom: 1em\">\n        <button type=\"button\" pButton icon=\"fa fa-chevron-up\" (click)=\"openPrev()\"></button>\n        <button type=\"button\" pButton icon=\"fa fa-chevron-down\" (click)=\"openNext()\"></button>\n    </div>\n        \n    <p-accordion [activeIndex]=\"index\">\n        <p-accordionTab header=\"Godfather I\">\n            The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n        </p-accordionTab>\n        <p-accordionTab header=\"Godfather II\">\n            Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\n        </p-accordionTab>\n        <p-accordionTab header=\"Godfather III\">\n            After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\n        </p-accordionTab>\n        <p-accordionTab header=\"Godfather IV\">\n            After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\n        </p-accordionTab>\n    </p-accordion>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header =\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;AccordionModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Accordion element consists of one or more p-accordionTab elements. Title of the tab is defined using header attribute.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-accordion&gt;\n    &lt;p-accordionTab header=\"Header 1\"&gt;\n       Content 1\n    &lt;/p-accordionTab&gt;\n    &lt;p-accordionTab header=\"Header 2\"&gt;\n        Content 2\n    &lt;/p-accordionTab&gt;\n    &lt;p-accordionTab header=\"Header 3\"&gt;\n        Content 3    \n    &lt;/p-accordionTab&gt;\n&lt;/p-accordion&gt;\n</code>\n</pre>\n\n            <h3>Selected</h3>\n            <p>Visibility of the content is specified with the selected property that supports one or two-way binding.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-accordion&gt;\n    &lt;p-accordionTab header=\"Header 1\" [selected]=\"true\"&gt;\n       Content 1\n    &lt;/p-accordionTab&gt;\n    &lt;p-accordionTab header=\"Header 2\"&gt;\n        Content 2\n    &lt;/p-accordionTab&gt;\n    &lt;p-accordionTab header=\"Header 3\"&gt;\n        Content 3    \n    &lt;/p-accordionTab&gt;\n&lt;/p-accordion&gt;\n</code>\n</pre>\n\n        <h3>Multiple</h3>\n        <p>By default only one tab at a time can be active, enabling multiple property changes this behavior to allow multiple\n            tabs be active at the same time.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-accordion [multiple]=\"true\"&gt;\n    &lt;p-accordionTab header=\"Header 1\"&gt;\n        Content 1\n    &lt;/p-accordionTab&gt;\n    &lt;p-accordionTab header=\"Header 2\"&gt;\n        Content 2\n    &lt;/p-accordionTab&gt;\n    &lt;p-accordionTab header=\"Header 3\"&gt;\n        Content 3    \n    &lt;/p-accordionTab&gt;\n&lt;/p-accordion&gt;\n</code>\n</pre>\n\n        <h3>Disabled</h3>\n        <p>A tab can be disabled by setting the disabled property to true.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-accordion&gt;\n    &lt;p-accordionTab header=\"Header 1\" [disabled]=\"true\"&gt;\n       Content 1\n    &lt;/p-accordionTab&gt;\n    &lt;p-accordionTab header=\"Header 2\"&gt;\n        Content 2\n    &lt;/p-accordionTab&gt;\n    &lt;p-accordionTab header=\"Header 3\"&gt;\n        Content 3    \n    &lt;/p-accordionTab&gt;\n&lt;/p-accordion&gt;\n</code>\n</pre>\n\n            <h3>Custom Content at Headers</h3>\n            <p>Custom content can be placed at an accordion header with header element.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SharedModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-accordionTab&gt;\n    &lt;p-header&gt;\n        Header Content\n    &lt;/p-header&gt;\n    Body Content\n&lt;/p-accordionTab&gt;\n</code>\n</pre>\n\n            <h3>Programmatic Control</h3>\n            <p>Tabs can be controlled programmatically using activeIndex property, in single mode it should be a number and in multiple mode an array of numbers\n            that define the indexes of active tabs.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;button type=\"button\" pButton icon=\"fa fa-chevron-up\" (click)=\"openPrev()\"&gt;&lt;/button&gt;\n&lt;button type=\"button\" pButton icon=\"fa fa-chevron-down\" (click)=\"openNext()\"&gt;&lt;/button&gt;\n        \n&lt;p-accordion [activeIndex]=\"index\"&gt;\n    &lt;p-accordionTab header=\"Header 1\"&gt;\n       Content 1\n    &lt;/p-accordionTab&gt;\n    &lt;p-accordionTab header=\"Header 2\"&gt;\n        Content 2\n    &lt;/p-accordionTab&gt;\n    &lt;p-accordionTab header=\"Header 3\"&gt;\n        Content 3    \n    &lt;/p-accordionTab&gt;\n&lt;/p-accordion&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class AccordionDemo &#123;\n    \n    index: number = 0;\n\n    openNext() &#123;\n        this.index = (this.index === 2) ? 0 : this.index + 1;\n    &#125;\n    \n    openPrev() &#123;\n        this.index = (this.index === 0) ? 2 : this.index - 1;\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Properties for Accordion</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>multiple</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When enabled, multiple tabs can be activated at the same time.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>false</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>lazy</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines whether the elements of an inactive panel are created on load or on demand when the panel gets selected.</td>\n                        </tr>\n                        <tr>\n                            <td>activeIndex</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Index of the active tab or an array of indexes to change selected tab programmatically.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Properties for AccordionTab</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>header</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Title of the tab.</td>\n                        </tr>\n                        <tr>\n                            <td>selected</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines if the tab is active.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines whether the tab can be selected.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onClose</td>\n                            <td>\n                                event.originalEvent: Click object<br>\n                                event.index: Index of the tab\n                            </td>\n                            <td>Callback to invoke when an active tab is collapsed by clicking on the header.</td>\n                        </tr>\n                        <tr>\n                            <td>onOpen</td>\n                            <td>\n                                event.originalEvent: Click object<br>\n                                event.index: Index of the tab\n                            </td>\n                            <td>Callback to invoke when a tab gets expanded.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-accordion (onOpen)=\"onTabOpen($event)\"&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nonTabOpen(e) &#123;\n    var index = e.index;\n&#125;\n</code>\n</pre>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-accordion</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-accordion-header</td>\n                            <td>Header of a tab.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-accordion-content</td>\n                            <td>Content of a tab.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefacestree/master/src/app/showcase/components/accordion\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-growl [value]=\"msgs\"&gt;&lt;/p-growl&gt;\n\n&lt;h3 class=\"first\"&gt;Default&lt;/h3&gt;\n&lt;p-accordion&gt;\n    &lt;p-accordionTab header=\"Godfather I\" [selected]=\"true\"&gt;\n        The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n    &lt;/p-accordionTab&gt;\n    &lt;p-accordionTab header=\"Godfather II\"&gt;\n        Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\n    &lt;/p-accordionTab&gt;\n    &lt;p-accordionTab header=\"Godfather III\"&gt;\n        After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\n    &lt;/p-accordionTab&gt;\n&lt;/p-accordion&gt;\n\n&lt;h3&gt;Multiple&lt;/h3&gt;\n&lt;p-accordion [multiple]=\"true\"&gt;\n    &lt;p-accordionTab header=\"Godfather I\"&gt;\n        The story begins  as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n    &lt;/p-accordionTab&gt;\n    &lt;p-accordionTab header=\"Godfather II\"&gt;\n        Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\n   &lt;/p-accordionTab&gt;\n    &lt;p-accordionTab header=\"Godfather III\"&gt;\n        After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\n    &lt;/p-accordionTab&gt;\n&lt;/p-accordion&gt;\n\n&lt;h3&gt;Tab Change Event&lt;/h3&gt;\n&lt;p-accordion (onClose)=\"onTabClose($event)\" (onOpen)=\"onTabOpen($event)\"&gt;\n    &lt;p-accordionTab header=\"Godfather I\"&gt;\n        The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n    &lt;/p-accordionTab&gt;\n    &lt;p-accordionTab header=\"Godfather II\"&gt;\n        Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\n    &lt;/p-accordionTab&gt;\n    &lt;p-accordionTab header=\"Godfather III\"&gt;\n        After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\n    &lt;/p-accordionTab&gt;\n    &lt;p-accordionTab header=\"Godfather IV\" [disabled]=\"true\"&gt;\n        After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\n    &lt;/p-accordionTab&gt;\n&lt;/p-accordion&gt;\n\n&lt;h3&gt;Programmatic Change&lt;/h3&gt;\n&lt;div style=\"margin-bottom: 1em\"&gt;\n    &lt;button type=\"button\" pButton icon=\"fa fa-chevron-up\" (click)=\"openPrev()\"&gt;&lt;/button&gt;\n    &lt;button type=\"button\" pButton icon=\"fa fa-chevron-down\" (click)=\"openNext()\"&gt;&lt;/button&gt;\n&lt;/div&gt;\n    \n&lt;p-accordion [activeIndex]=\"index\"&gt;\n    &lt;p-accordionTab header=\"Godfather I\"&gt;\n        The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n    &lt;/p-accordionTab&gt;\n    &lt;p-accordionTab header=\"Godfather II\"&gt;\n        Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\n    &lt;/p-accordionTab&gt;\n    &lt;p-accordionTab header=\"Godfather III\"&gt;\n        After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\n    &lt;/p-accordionTab&gt;\n    &lt;p-accordionTab header=\"Godfather IV\"&gt;\n        After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\n    &lt;/p-accordionTab&gt;\n&lt;/p-accordion&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Component&#125; from '@angular/core';\nimport &#123;Message&#125; from '/components/common/api';\n\n@Component(&#123;\n    templateUrl: './accordiondemo.html'\n&#125;)\nexport class AccordionDemo &#123;\n\n    msgs: Message[];\n    \n    index: number = 0;\n\n    onTabClose(event) &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity:'info', summary:'Tab Closed', detail: 'Index: ' + event.index&#125;);\n    &#125;\n    \n    onTabOpen(event) &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index&#125;);\n    &#125;\n    \n    openNext() &#123;\n        this.index = (this.index === 3) ? 0 : this.index + 1;\n    &#125;\n    \n    openPrev() &#123;\n        this.index = (this.index === 0) ? 3 : this.index - 1;\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/accordion/accordiondemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionDemoModule", function() { return AccordionDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordiondemo__ = __webpack_require__("../../../../../src/app/showcase/components/accordion/accordiondemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accordiondemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/accordion/accordiondemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_accordion_accordion__ = __webpack_require__("../../../../../src/app/components/accordion/accordion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_growl_growl__ = __webpack_require__("../../../../../src/app/components/growl/growl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AccordionDemoModule = (function () {
    function AccordionDemoModule() {
    }
    return AccordionDemoModule;
}());
AccordionDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__accordiondemo_routing_module__["a" /* AccordionDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_accordion_accordion__["a" /* AccordionModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_button_button__["a" /* ButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_growl_growl__["a" /* GrowlModule */],
            __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__accordiondemo__["a" /* AccordionDemo */]
        ]
    })
], AccordionDemoModule);

//# sourceMappingURL=accordiondemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/accordion/accordiondemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AccordionDemo = (function () {
    function AccordionDemo() {
        this.index = 0;
    }
    AccordionDemo.prototype.onTabClose = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Tab Closed', detail: 'Index: ' + event.index });
    };
    AccordionDemo.prototype.onTabOpen = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Tab Expanded', detail: 'Index: ' + event.index });
    };
    AccordionDemo.prototype.openNext = function () {
        this.index = (this.index === 3) ? 0 : this.index + 1;
    };
    AccordionDemo.prototype.openPrev = function () {
        this.index = (this.index === 0) ? 3 : this.index - 1;
    };
    return AccordionDemo;
}());
AccordionDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/showcase/components/accordion/accordiondemo.html")
    })
], AccordionDemo);

//# sourceMappingURL=accordiondemo.js.map

/***/ })

});
//# sourceMappingURL=accordiondemo.module.chunk.js.map
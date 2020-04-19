function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Iab2:function(t,e,n){var a,o;void 0===(o="function"==typeof(a=function(){"use strict";function e(t,e,n){var a=new XMLHttpRequest;a.open("GET",t),a.responseType="blob",a.onload=function(){r(a.response,e,n)},a.onerror=function(){console.error("could not download file")},a.send()}function n(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function a(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(n)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,r=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype?function(t,r,c){var i=o.URL||o.webkitURL,s=document.createElement("a");s.download=r=r||t.name||"download",s.rel="noopener","string"==typeof t?(s.href=t,s.origin===location.origin?a(s):n(s.href)?e(t,r,c):a(s,s.target="_blank")):(s.href=i.createObjectURL(t),setTimeout((function(){i.revokeObjectURL(s.href)}),4e4),setTimeout((function(){a(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,o,r){if(o=o||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,r),o);else if(n(t))e(t,o,r);else{var c=document.createElement("a");c.href=t,c.target="_blank",setTimeout((function(){a(c)}))}}:function(t,n,a,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof t)return e(t,n,a);var c="application/octet-stream"===t.type,i=/constructor/i.test(o.HTMLElement)||o.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||c&&i)&&"object"==typeof FileReader){var l=new FileReader;l.onloadend=function(){var t=l.result;t=s?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=t:location=t,r=null},l.readAsDataURL(t)}else{var u=o.URL||o.webkitURL,d=u.createObjectURL(t);r?r.location=d:location.href=d,r=null,setTimeout((function(){u.revokeObjectURL(d)}),4e4)}});o.saveAs=r.saveAs=r,t.exports=r})?a.apply(e,[]):a)||(t.exports=o)},j1ZV:function(t,e,n){"use strict";n.r(e),n.d(e,"ComponentsModule",(function(){return J}));var a,o,r=n("tyNb"),c=n("lJxs"),i=n("fXoL"),s=n("vkgz"),l=n("2Vo4"),u=n("qc5V"),d=((a=function(){function t(e){_classCallCheck(this,t),this.apiService=e,this.localDataSubject=new l.a(null),this._localData=this.localDataSubject.asObservable()}return _createClass(t,[{key:"fetchData",value:function(){var t=this;return this.apiService.get("/timeseries.json").pipe(Object(s.a)((function(e){t.localDataSubject.next(e)})))}},{key:"clearData",value:function(){this.localDataSubject.next(null)}},{key:"getAllData",value:function(){return this._localData}},{key:"getSummaryNumbers",value:function(){return this._localData.pipe(Object(c.a)((function(t){var e={confirmed:0,deaths:0,recovered:0};return t&&Object.keys(t).forEach((function(n){if(t[n]){var a=t[n][t[n].length-1];e.confirmed=e.confirmed+a.confirmed,e.deaths=e.deaths+a.deaths,e.recovered=e.recovered+a.recovered}})),e})))}},{key:"getListCountries",value:function(){return this._localData.pipe(Object(c.a)((function(t){return t?Object.keys(t):[]})))}},{key:"getByCountryName",value:function(t){return this._localData.pipe(Object(c.a)((function(e){if(e&&e[t])return _toConsumableArray(e[t])})))}}]),t}()).\u0275fac=function(t){return new(t||a)(i.Wb(u.a))},a.\u0275prov=i.Ib({token:a,factory:a.\u0275fac,providedIn:"root"}),a),b=n("/t3+"),f=n("NFeN"),p=n("Wp6s"),m=n("ofXK"),h=((o=function(){function t(e){_classCallCheck(this,t),this.covidDataStoreService=e}return _createClass(t,[{key:"ngOnInit",value:function(){this.totalConfirmed$=this.covidDataStoreService.getSummaryNumbers().pipe(Object(c.a)((function(t){return t.confirmed.toLocaleString()}))),this.totalRecovered$=this.covidDataStoreService.getSummaryNumbers().pipe(Object(c.a)((function(t){return t.recovered.toLocaleString()}))),this.totalDeaths$=this.covidDataStoreService.getSummaryNumbers().pipe(Object(c.a)((function(t){return t.deaths.toLocaleString()})))}}]),t}()).\u0275fac=function(t){return new(t||o)(i.Mb(d))},o.\u0275cmp=i.Gb({type:o,selectors:[["app-components"]],decls:28,vars:9,consts:[[1,"header"],[1,"brand"],["src","assets/images/large-icon.png"],[1,"fill-remaining-space"],[1,"summary-wrap"],["title","Confirmed",1,"text-orange"],[1,"number"],["title","Deaths",1,"text-red"],["title","Recovered",1,"text-green"],[1,"info"],["href","https://github.com/pomber/covid19"]],template:function(t,e){1&t&&(i.Sb(0,"mat-toolbar",0),i.Sb(1,"span",1),i.Nb(2,"img",2),i.sc(3," CHART COVID-19 "),i.Rb(),i.Nb(4,"span",3),i.Sb(5,"div",4),i.Sb(6,"mat-icon",5),i.sc(7,"sentiment_dissatisfied"),i.Rb(),i.Sb(8,"span",6),i.sc(9),i.dc(10,"async"),i.Rb(),i.Sb(11,"mat-icon",7),i.sc(12,"sentiment_very_dissatisfied"),i.Rb(),i.Sb(13,"span",6),i.sc(14),i.dc(15,"async"),i.Rb(),i.Sb(16,"mat-icon",8),i.sc(17,"sentiment_very_satisfied"),i.Rb(),i.Sb(18,"span",6),i.sc(19),i.dc(20,"async"),i.Rb(),i.Rb(),i.Rb(),i.Sb(21,"mat-card"),i.Nb(22,"router-outlet"),i.Rb(),i.Sb(23,"mat-toolbar",9),i.Sb(24,"span"),i.sc(25,"Source data from "),i.Sb(26,"a",10),i.sc(27,"@pomber/covid19"),i.Rb(),i.Rb(),i.Rb()),2&t&&(i.Cb(9),i.tc(i.ec(10,3,e.totalConfirmed$)),i.Cb(5),i.tc(i.ec(15,5,e.totalDeaths$)),i.Cb(5),i.tc(i.ec(20,7,e.totalRecovered$)))},directives:[b.a,f.a,p.a,r.b],pipes:[m.b],styles:[".header[_ngcontent-%COMP%]{background-color:#fff;border-bottom:1px solid #cdcdcd}.header[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]{display:flex}.header[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px;height:30px;-webkit-animation:spin 4s linear infinite;animation:spin 4s linear infinite}@-webkit-keyframes spin{to{-webkit-transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn)}}.header[_ngcontent-%COMP%]   .summary-wrap[_ngcontent-%COMP%]{display:flex;align-items:center;line-height:1}.header[_ngcontent-%COMP%]   .summary-wrap[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-left:3px;margin-right:10px}.header[_ngcontent-%COMP%]   .summary-wrap[_ngcontent-%COMP%]   .text-orange[_ngcontent-%COMP%]{color:purple}.header[_ngcontent-%COMP%]   .summary-wrap[_ngcontent-%COMP%]   .text-red[_ngcontent-%COMP%]{color:red}.header[_ngcontent-%COMP%]   .summary-wrap[_ngcontent-%COMP%]   .text-green[_ngcontent-%COMP%]{color:green}@media (max-width:768px){.header[_ngcontent-%COMP%]{font-size:1em;flex-direction:column}}.info[_ngcontent-%COMP%]{font-size:11px;border-top:1px solid #cdcdcd;border-bottom:1px solid #cdcdcd;height:40px}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}"]}),o),y=n("3Pt+"),v=n("JX91"),g=n("Iab2"),C=n("cHiH"),S=n("jaxi"),_=n("kmnG"),w=n("qFsG"),O=n("/1cH"),D=n("qPpl"),R=n("bTqV"),k=n("+0xr"),j=n("FKr1");function x(t,e){if(1&t&&(i.Sb(0,"mat-option",25),i.sc(1),i.Rb()),2&t){var n=e.$implicit;i.ic("value",n),i.Cb(1),i.uc(" ",n," ")}}function M(t,e){1&t&&(i.Sb(0,"th",26),i.sc(1," Date "),i.Rb())}function P(t,e){if(1&t&&(i.Sb(0,"td",27),i.sc(1),i.dc(2,"date"),i.Rb()),2&t){var n=e.$implicit;i.Cb(1),i.uc(" ",i.fc(2,1,n.date,"mediumDate")," ")}}function A(t,e){1&t&&(i.Sb(0,"th",26),i.sc(1," Confirmed "),i.Rb())}function T(t,e){if(1&t&&(i.Sb(0,"td",27),i.sc(1),i.Rb()),2&t){var n=e.$implicit;i.Cb(1),i.uc(" ",n.confirmed," ")}}function L(t,e){1&t&&(i.Sb(0,"th",26),i.sc(1," Recovered "),i.Rb())}function B(t,e){if(1&t&&(i.Sb(0,"td",27),i.sc(1),i.Rb()),2&t){var n=e.$implicit;i.Cb(1),i.uc(" ",n.recovered," ")}}function E(t,e){1&t&&(i.Sb(0,"th",26),i.sc(1," Deaths "),i.Rb())}function N(t,e){if(1&t&&(i.Sb(0,"td",27),i.sc(1),i.Rb()),2&t){var n=e.$implicit;i.Cb(1),i.uc(" ",n.deaths," ")}}function $(t,e){1&t&&i.Nb(0,"tr",28)}function I(t,e){1&t&&i.Nb(0,"tr",29)}var H,U,V,F=[{path:"",component:h,children:[{path:"home",component:(H=function(){function t(e){_classCallCheck(this,t),this.covidDataStoreService=e,this.selectedCountry="Vietnam",this.countryControl=new y.b(this.selectedCountry),this.displayedColumns=["date","confirmed","recovered","deaths"],this.dataType="confirmed"}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.covidDataStoreService.fetchData().subscribe(),this.covidDataStoreService.getListCountries().subscribe((function(e){t.countries=e})),this.allData$=this.covidDataStoreService.getAllData(),this.allData$.subscribe((function(e){t._allData=e})),this.countriesOpts$=this.countryControl.valueChanges.pipe(Object(v.a)(""),Object(c.a)((function(e){return t._filter(e)}))),this._handleLoadDataByCountry(this.selectedCountry)}},{key:"_filter",value:function(t){var e=t.toLowerCase();return this.countries.filter((function(t){return t.toLowerCase().includes(e)}))}},{key:"onSelectCountry",value:function(t){t&&t.option&&t.option.value&&(this.selectedCountry=t.option.value,this._handleLoadDataByCountry(t.option.value))}},{key:"exportCSV",value:function(){if(this.selectedCountry&&this._dataByCountry&&this._dataByCountry.length>0){var t=Object.keys(this._dataByCountry[0]),e=[];this._dataByCountry.forEach((function(t){e.push(_toConsumableArray(Object.values(t)))}));var n=[t.join(","),e.join("\n")].join("\n"),a=new Blob([n],{type:"text/csv;charset=utf-8"});Object(g.saveAs)(a,"covid19_".concat(this.selectedCountry,"_").concat((new Date).getTime(),".csv"))}}},{key:"exportWorldCSV",value:function(){var t=this;if(this._allData){var e=Object.keys(this._allData),n=["country"].concat(_toConsumableArray(Object.keys(this._allData.US[0]))),a=[];e.forEach((function(e){var n=e;if(n.indexOf("Korea, South")>-1&&(n="South Korea"),t._allData[e]){var o=t._allData[e];a.push([n].concat(_toConsumableArray(Object.values(o[o.length-1]))))}}));var o=[n.join(","),a.join("\n")].join("\n"),r=new Blob([o],{type:"text/csv;charset=utf-8"});Object(g.saveAs)(r,"covid19_World_".concat((new Date).getTime(),".csv"))}}},{key:"_handleLoadDataByCountry",value:function(t){var e=this;this.dataByCountry$=this.covidDataStoreService.getByCountryName(t).pipe(Object(c.a)((function(t){return t&&t.length>0?t.sort((function(t,e){return new Date(e.date).getTime()-new Date(t.date).getTime()})):t}))).pipe(Object(s.a)((function(t){e._dataByCountry=t})))}}]),t}(),H.\u0275fac=function(t){return new(t||H)(i.Mb(d))},H.\u0275cmp=i.Gb({type:H,selectors:[["app-home"]],decls:44,vars:18,consts:[[3,"chartData","dataType"],[1,"types-data-buttons"],["name","dataType",3,"ngModel","ngModelChange"],["value","confirmed"],["value","deaths"],["value","recovered"],[1,"example-form"],[1,"example-full-width"],["type","text","placeholder","Search Country","matInput","",3,"formControl","matAutocomplete"],["autoActiveFirstOption","",3,"optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"chartData"],[1,"table-buttons"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","secondary",3,"click"],["mat-table","",1,"mat-elevation-z8","full-width",3,"dataSource"],["matColumnDef","date"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","confirmed"],["matColumnDef","recovered"],["matColumnDef","deaths"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"value"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(t,e){if(1&t&&(i.Sb(0,"div"),i.Nb(1,"app-world-map-chart",0),i.dc(2,"async"),i.Sb(3,"div",1),i.Sb(4,"mat-button-toggle-group",2),i.ac("ngModelChange",(function(t){return e.dataType=t})),i.Sb(5,"mat-button-toggle",3),i.sc(6,"Confirmed"),i.Rb(),i.Sb(7,"mat-button-toggle",4),i.sc(8,"Deaths"),i.Rb(),i.Sb(9,"mat-button-toggle",5),i.sc(10,"Recovered"),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Nb(11,"hr"),i.Sb(12,"form",6),i.Sb(13,"mat-form-field",7),i.Nb(14,"input",8),i.Sb(15,"mat-autocomplete",9,10),i.ac("optionSelected",(function(t){return e.onSelectCountry(t)})),i.rc(17,x,2,2,"mat-option",11),i.dc(18,"async"),i.Rb(),i.Rb(),i.Rb(),i.Nb(19,"hr"),i.Sb(20,"div"),i.Nb(21,"app-multi-data-chart",12),i.dc(22,"async"),i.Rb(),i.Sb(23,"div",13),i.Sb(24,"button",14),i.ac("click",(function(){return e.exportCSV()})),i.sc(25,"Export Country"),i.Rb(),i.Sb(26,"button",15),i.ac("click",(function(){return e.exportWorldCSV()})),i.sc(27,"Export World"),i.Rb(),i.Rb(),i.Sb(28,"table",16),i.dc(29,"async"),i.Qb(30,17),i.rc(31,M,2,0,"th",18),i.rc(32,P,3,4,"td",19),i.Pb(),i.Qb(33,20),i.rc(34,A,2,0,"th",18),i.rc(35,T,2,1,"td",19),i.Pb(),i.Qb(36,21),i.rc(37,L,2,0,"th",18),i.rc(38,B,2,1,"td",19),i.Pb(),i.Qb(39,22),i.rc(40,E,2,0,"th",18),i.rc(41,N,2,1,"td",19),i.Pb(),i.rc(42,$,1,0,"tr",23),i.rc(43,I,1,0,"tr",24),i.Rb()),2&t){var n=i.kc(16);i.Cb(1),i.ic("chartData",i.ec(2,10,e.allData$))("dataType",e.dataType),i.Cb(3),i.ic("ngModel",e.dataType),i.Cb(10),i.ic("formControl",e.countryControl)("matAutocomplete",n),i.Cb(3),i.ic("ngForOf",i.ec(18,12,e.countriesOpts$)),i.Cb(4),i.ic("chartData",i.ec(22,14,e.dataByCountry$)),i.Cb(7),i.ic("dataSource",i.ec(29,16,e.dataByCountry$)),i.Cb(14),i.ic("matHeaderRowDef",e.displayedColumns),i.Cb(1),i.ic("matRowDefColumns",e.displayedColumns)}},directives:[C.a,S.b,y.h,y.k,S.a,y.m,y.i,y.j,_.b,w.a,y.a,O.c,y.c,O.a,m.k,D.a,R.a,k.j,k.c,k.e,k.b,k.g,k.i,j.f,k.d,k.a,k.f,k.h],pipes:[m.b,m.e],styles:[".full-width[_ngcontent-%COMP%]{width:100%;color:#1eff00}.align-center[_ngcontent-%COMP%]{text-align:center}.types-data-buttons[_ngcontent-%COMP%]{text-align:center;font-size:14px}.types-data-buttons[_ngcontent-%COMP%]     .mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:35px}.table-buttons[_ngcontent-%COMP%]{margin-bottom:5px}.table-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:5px}"]}),H)},{path:"",redirectTo:"home",pathMatch:"full"}]}],W=((U=function t(){_classCallCheck(this,t)}).\u0275mod=i.Kb({type:U}),U.\u0275inj=i.Jb({factory:function(t){return new(t||U)},imports:[[r.a.forChild(F)],r.a]}),U),q=n("PCNd"),J=((V=function t(){_classCallCheck(this,t)}).\u0275mod=i.Kb({type:V}),V.\u0275inj=i.Jb({factory:function(t){return new(t||V)},imports:[[q.a,W]]}),V)}}]);
!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return e(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function o(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Iab2:function(t,e,n){var a,o;void 0===(o="function"==typeof(a=function(){"use strict";function e(t,e,n){var a=new XMLHttpRequest;a.open("GET",t),a.responseType="blob",a.onload=function(){r(a.response,e,n)},a.onerror=function(){console.error("could not download file")},a.send()}function n(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function a(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(n)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,r=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype?function(t,r,c){var i=o.URL||o.webkitURL,l=document.createElement("a");l.download=r=r||t.name||"download",l.rel="noopener","string"==typeof t?(l.href=t,l.origin===location.origin?a(l):n(l.href)?e(t,r,c):a(l,l.target="_blank")):(l.href=i.createObjectURL(t),setTimeout(function(){i.revokeObjectURL(l.href)},4e4),setTimeout(function(){a(l)},0))}:"msSaveOrOpenBlob"in navigator?function(t,o,r){if(o=o||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,r),o);else if(n(t))e(t,o,r);else{var c=document.createElement("a");c.href=t,c.target="_blank",setTimeout(function(){a(c)})}}:function(t,n,a,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof t)return e(t,n,a);var c="application/octet-stream"===t.type,i=/constructor/i.test(o.HTMLElement)||o.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||c&&i)&&"object"==typeof FileReader){var s=new FileReader;s.onloadend=function(){var t=s.result;t=l?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=t:location=t,r=null},s.readAsDataURL(t)}else{var u=o.URL||o.webkitURL,b=u.createObjectURL(t);r?r.location=b:location.href=b,r=null,setTimeout(function(){u.revokeObjectURL(b)},4e4)}});o.saveAs=r.saveAs=r,t.exports=r})?a.apply(e,[]):a)||(t.exports=o)},j1ZV:function(e,a,r){"use strict";r.r(a),r.d(a,"ComponentsModule",function(){return at});var c,i=r("tyNb"),l=r("XNiG"),s=r("1G5W"),u=r("aAC7"),b=r("3Pt+"),d=r("fXoL"),f=r("vkgz"),p=r("lJxs"),m=r("2Vo4"),h=r("qc5V"),g=((c=function(){function e(t){n(this,e),this.apiService=t,this.localDataSubject=new m.a(null),this._localData=this.localDataSubject.asObservable()}return o(e,[{key:"fetchData",value:function(){var t=this;return this.apiService.get("/timeseries.json").pipe(Object(f.a)(function(e){t.localDataSubject.next(e)}))}},{key:"clearData",value:function(){this.localDataSubject.next(null)}},{key:"getAllData",value:function(){return this._localData}},{key:"getSummaryNumbers",value:function(){return this._localData.pipe(Object(p.a)(function(t){var e={confirmed:0,deaths:0,recovered:0,date:""};return t&&Object.keys(t).forEach(function(n){if(t[n]){var a=t[n][t[n].length-1];e.date=a.date,e.confirmed=e.confirmed+a.confirmed,e.deaths=e.deaths+a.deaths,e.recovered=e.recovered+a.recovered}}),e}))}},{key:"getListCountries",value:function(){return this._localData.pipe(Object(p.a)(function(t){return t?Object.keys(t):[]}))}},{key:"getByCountryName",value:function(e){return this._localData.pipe(Object(p.a)(function(n){if(n&&n[e])return t(n[e])}))}}]),e}()).\u0275fac=function(t){return new(t||c)(d.Yb(h.a))},c.\u0275prov=d.Kb({token:c,factory:c.\u0275fac,providedIn:"root"}),c),v=r("/t3+"),y=r("NFeN"),w=r("kmnG"),O=r("d3UM"),D=r("ofXK"),C=r("Wp6s"),T=r("FKr1"),_=r("sYmb");function S(t,e){if(1&t&&(d.Ub(0,"mat-option",14),d.wc(1),d.Tb()),2&t){var n=e.$implicit;d.lc("value",n.id),d.Db(1),d.yc(" ",n.text," ")}}var M,x=((M=function(){function t(e,a){n(this,t),this.covidDataStoreService=e,this.appSettingsService=a,this.destroy$=new l.a,this.totalConfirmed="N/A",this.totalRecovered="N/A",this.totalDeaths="N/A",this.lastUpdateDate="N/A",this.languages=u.c,this.langControl=new b.b(u.b)}return o(t,[{key:"ngOnInit",value:function(){var t=this;this.covidDataStoreService.getSummaryNumbers().pipe(Object(s.a)(this.destroy$)).subscribe(function(e){t.totalConfirmed=e.confirmed.toLocaleString(),t.totalRecovered=e.recovered.toLocaleString(),t.totalDeaths=e.deaths.toLocaleString(),t.lastUpdateDate=e.date})}},{key:"ngOnDestroy",value:function(){this.destroy$.next(),this.destroy$.complete()}},{key:"onChangeLang",value:function(t){t&&t.value&&this.appSettingsService.setLanguage(t.value)}}]),t}()).\u0275fac=function(t){return new(t||M)(d.Ob(g),d.Ob(u.a))},M.\u0275cmp=d.Ib({type:M,selectors:[["app-components"]],decls:37,vars:14,consts:[[1,"header"],[1,"brand"],["src","assets/images/large-icon.png"],[1,"fill-remaining-space"],[1,"summary-wrap"],["title","Confirmed",1,"text-orange"],[1,"number"],["title","Deaths",1,"text-red"],[1,"info"],[1,"lang-wrap"],[3,"formControl","selectionChange"],[3,"value",4,"ngFor","ngForOf"],["href","https://github.com/pomber/covid19"],["href","https://github.com/ngmikeng"],[3,"value"]],template:function(t,e){1&t&&(d.Ub(0,"mat-toolbar",0),d.Ub(1,"span",1),d.Pb(2,"img",2),d.wc(3," CHART COVID-19 "),d.Tb(),d.Pb(4,"span",3),d.Ub(5,"div",4),d.Ub(6,"mat-icon",5),d.wc(7,"sentiment_dissatisfied"),d.Tb(),d.Ub(8,"span",6),d.wc(9),d.Tb(),d.Ub(10,"mat-icon",7),d.wc(11,"sentiment_very_dissatisfied"),d.Tb(),d.Ub(12,"span",6),d.wc(13),d.Tb(),d.Tb(),d.Tb(),d.Ub(14,"mat-toolbar",8),d.Ub(15,"span"),d.wc(16),d.gc(17,"translate"),d.Tb(),d.Pb(18,"span",3),d.Ub(19,"div",9),d.Ub(20,"mat-form-field"),d.Ub(21,"mat-select",10),d.bc("selectionChange",function(t){return e.onChangeLang(t)}),d.vc(22,S,2,2,"mat-option",11),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Ub(23,"mat-card"),d.Pb(24,"router-outlet"),d.Tb(),d.Ub(25,"mat-toolbar",8),d.Ub(26,"span"),d.wc(27),d.gc(28,"translate"),d.Ub(29,"a",12),d.wc(30,"@pomber/covid19"),d.Tb(),d.Tb(),d.Pb(31,"span",3),d.Ub(32,"span"),d.wc(33),d.gc(34,"translate"),d.Ub(35,"a",13),d.wc(36,"@ngmikeng"),d.Tb(),d.Tb(),d.Tb()),2&t&&(d.Db(9),d.xc(e.totalConfirmed),d.Db(4),d.xc(e.totalDeaths),d.Db(3),d.zc("",d.hc(17,8,"ROOT.LATEST_DATA_DATE"),": ",e.lastUpdateDate,""),d.Db(5),d.lc("formControl",e.langControl),d.Db(1),d.lc("ngForOf",e.languages),d.Db(5),d.yc("",d.hc(28,10,"ROOT.DATA_INFO")," "),d.Db(6),d.yc("",d.hc(34,12,"ROOT.FOLLOW_ME")," "))},directives:[v.a,y.a,w.b,O.a,b.h,b.c,D.k,C.a,i.b,T.e],pipes:[_.c],styles:[".header[_ngcontent-%COMP%]{background-color:#fff;border-bottom:1px solid #cdcdcd}.header[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]{display:flex}.header[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px;height:30px;-webkit-animation:spin 4s linear infinite;animation:spin 4s linear infinite}@-webkit-keyframes spin{to{-webkit-transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn)}}.header[_ngcontent-%COMP%]   .summary-wrap[_ngcontent-%COMP%]{display:flex;align-items:center;line-height:1}.header[_ngcontent-%COMP%]   .summary-wrap[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-left:3px;margin-right:10px}.header[_ngcontent-%COMP%]   .summary-wrap[_ngcontent-%COMP%]   .text-orange[_ngcontent-%COMP%]{color:purple}.header[_ngcontent-%COMP%]   .summary-wrap[_ngcontent-%COMP%]   .text-red[_ngcontent-%COMP%]{color:red}.header[_ngcontent-%COMP%]   .summary-wrap[_ngcontent-%COMP%]   .text-green[_ngcontent-%COMP%]{color:green}@media (max-width:768px){.header[_ngcontent-%COMP%]{font-size:1em;flex-direction:column}}.info[_ngcontent-%COMP%]{font-size:11px;border-top:1px solid #cdcdcd;border-bottom:1px solid #cdcdcd;height:40px}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}.lang-wrap[_ngcontent-%COMP%]     .mat-form-field-infix{width:100px}"]}),M),U=r("JX91"),k=r("Iab2"),j=r("+0xr"),P=r("M9IT"),E=r("cHiH"),A=r("jaxi"),R=r("qFsG"),L=r("/1cH"),H=r("qPpl"),B=r("bTqV");function $(t,e){if(1&t&&(d.Ub(0,"mat-option",26),d.wc(1),d.Tb()),2&t){var n=e.$implicit;d.lc("value",n),d.Db(1),d.yc(" ",n," ")}}function F(t,e){1&t&&(d.Ub(0,"th",27),d.wc(1),d.gc(2,"translate"),d.Tb()),2&t&&(d.Db(1),d.yc(" ",d.hc(2,1,"HOME.DATE")," "))}function I(t,e){if(1&t&&(d.Ub(0,"td",28),d.wc(1),d.gc(2,"date"),d.Tb()),2&t){var n=e.$implicit;d.Db(1),d.yc(" ",d.ic(2,1,n.date,"dd/MM/yyyy")," ")}}function N(t,e){1&t&&(d.Ub(0,"th",27),d.wc(1),d.gc(2,"translate"),d.Tb()),2&t&&(d.Db(1),d.yc(" ",d.hc(2,1,"HOME.CONFIRMED")," "))}function V(t,e){if(1&t&&(d.Ub(0,"td",28),d.wc(1),d.Tb()),2&t){var n=e.$implicit;d.Db(1),d.yc(" ",n.confirmed," ")}}function z(t,e){1&t&&(d.Ub(0,"th",27),d.wc(1),d.gc(2,"translate"),d.Tb()),2&t&&(d.Db(1),d.yc(" ",d.hc(2,1,"HOME.RECOVERED")," "))}function X(t,e){if(1&t&&(d.Ub(0,"td",28),d.wc(1),d.Tb()),2&t){var n=e.$implicit;d.Db(1),d.yc(" ",n.recovered," ")}}function W(t,e){1&t&&(d.Ub(0,"th",27),d.wc(1),d.gc(2,"translate"),d.Tb()),2&t&&(d.Db(1),d.yc(" ",d.hc(2,1,"HOME.DEATHS")," "))}function q(t,e){if(1&t&&(d.Ub(0,"td",28),d.wc(1),d.Tb()),2&t){var n=e.$implicit;d.Db(1),d.yc(" ",n.deaths," ")}}function G(t,e){1&t&&d.Pb(0,"tr",29)}function K(t,e){1&t&&d.Pb(0,"tr",30)}var J,Y,Q,Z=function(){return[10,20,30]},tt=[{path:"",component:x,children:[{path:"home",component:(J=function(){function e(t){n(this,e),this.covidDataStoreService=t,this.selectedCountry="Vietnam",this.countryControl=new b.b(this.selectedCountry),this.displayedColumns=["date","confirmed","recovered","deaths"],this.dataSource=new j.k([]),this.dataType="confirmed"}return o(e,[{key:"ngOnInit",value:function(){var t=this;this.covidDataStoreService.fetchData().subscribe(),this.covidDataStoreService.getListCountries().subscribe(function(e){t.countries=e}),this.allData$=this.covidDataStoreService.getAllData(),this.allData$.subscribe(function(e){t._allData=e}),this.countriesOpts$=this.countryControl.valueChanges.pipe(Object(U.a)(""),Object(p.a)(function(e){return t._filter(e)})),this._handleLoadDataByCountry(this.selectedCountry)}},{key:"ngAfterViewInit",value:function(){this.dataSource.paginator=this.paginator}},{key:"_filter",value:function(t){var e=t.toLowerCase();return this.countries.filter(function(t){return t.toLowerCase().includes(e)})}},{key:"onSelectCountry",value:function(t){t&&t.option&&t.option.value&&(this.selectedCountry=t.option.value,this._handleLoadDataByCountry(t.option.value))}},{key:"exportCSV",value:function(){if(this.selectedCountry&&this._dataByCountry&&this._dataByCountry.length>0){var e=Object.keys(this._dataByCountry[0]),n=[];this._dataByCountry.forEach(function(e){n.push(t(Object.values(e)))});var a=[e.join(","),n.join("\n")].join("\n"),o=new Blob([a],{type:"text/csv;charset=utf-8"});Object(k.saveAs)(o,"covid19_".concat(this.selectedCountry,"_").concat((new Date).getTime(),".csv"))}}},{key:"exportWorldCSV",value:function(){var e=this;if(this._allData){var n=Object.keys(this._allData),a=["country"].concat(t(Object.keys(this._allData.US[0]))),o=[];n.forEach(function(n){var a=n;if(a.indexOf("Korea, South")>-1&&(a="South Korea"),e._allData[n]){var r=e._allData[n];o.push([a].concat(t(Object.values(r[r.length-1]))))}});var r=[a.join(","),o.join("\n")].join("\n"),c=new Blob([r],{type:"text/csv;charset=utf-8"});Object(k.saveAs)(c,"covid19_World_".concat((new Date).getTime(),".csv"))}}},{key:"_handleLoadDataByCountry",value:function(t){var e=this;this.dataByCountry$=this.covidDataStoreService.getByCountryName(t).pipe(Object(p.a)(function(t){return t&&t.length>0?t.sort(function(t,e){return new Date(e.date).getTime()-new Date(t.date).getTime()}):t})).pipe(Object(f.a)(function(t){t&&(e._dataByCountry=t,e.dataSource.data=t)}))}}]),e}(),J.\u0275fac=function(t){return new(t||J)(d.Ob(g))},J.\u0275cmp=d.Ib({type:J,selectors:[["app-home"]],viewQuery:function(t,e){var n;1&t&&d.Ac(P.a,1),2&t&&d.oc(n=d.cc())&&(e.paginator=n.first)},decls:50,vars:36,consts:[[3,"chartData","dataType"],[1,"types-data-buttons"],["name","dataType",3,"ngModel","ngModelChange"],["value","confirmed"],["value","deaths"],["value","recovered"],[1,"example-form"],[1,"example-full-width"],["type","text","matInput","",3,"placeholder","formControl","matAutocomplete"],["autoActiveFirstOption","",3,"optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"chartData"],[1,"table-buttons"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","secondary",3,"click"],["mat-table","",1,"mat-elevation-z8","full-width",3,"dataSource"],["matColumnDef","date"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","confirmed"],["matColumnDef","recovered"],["matColumnDef","deaths"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],[3,"value"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(t,e){if(1&t&&(d.Ub(0,"div"),d.Pb(1,"app-world-map-chart",0),d.gc(2,"async"),d.Ub(3,"div",1),d.Ub(4,"mat-button-toggle-group",2),d.bc("ngModelChange",function(t){return e.dataType=t}),d.Ub(5,"mat-button-toggle",3),d.wc(6),d.gc(7,"translate"),d.Tb(),d.Ub(8,"mat-button-toggle",4),d.wc(9),d.gc(10,"translate"),d.Tb(),d.Ub(11,"mat-button-toggle",5),d.wc(12),d.gc(13,"translate"),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Pb(14,"hr"),d.Ub(15,"form",6),d.Ub(16,"mat-form-field",7),d.Pb(17,"input",8),d.gc(18,"translate"),d.Ub(19,"mat-autocomplete",9,10),d.bc("optionSelected",function(t){return e.onSelectCountry(t)}),d.vc(21,$,2,2,"mat-option",11),d.gc(22,"async"),d.Tb(),d.Tb(),d.Tb(),d.Pb(23,"hr"),d.Ub(24,"div"),d.Pb(25,"app-multi-data-chart",12),d.gc(26,"async"),d.Tb(),d.Ub(27,"div",13),d.Ub(28,"button",14),d.bc("click",function(){return e.exportCSV()}),d.wc(29),d.gc(30,"translate"),d.Tb(),d.Ub(31,"button",15),d.bc("click",function(){return e.exportWorldCSV()}),d.wc(32),d.gc(33,"translate"),d.Tb(),d.Tb(),d.Ub(34,"table",16),d.Sb(35,17),d.vc(36,F,3,3,"th",18),d.vc(37,I,3,4,"td",19),d.Rb(),d.Sb(38,20),d.vc(39,N,3,3,"th",18),d.vc(40,V,2,1,"td",19),d.Rb(),d.Sb(41,21),d.vc(42,z,3,3,"th",18),d.vc(43,X,2,1,"td",19),d.Rb(),d.Sb(44,22),d.vc(45,W,3,3,"th",18),d.vc(46,q,2,1,"td",19),d.Rb(),d.vc(47,G,1,0,"tr",23),d.vc(48,K,1,0,"tr",24),d.Tb(),d.Pb(49,"mat-paginator",25)),2&t){var n=d.pc(20);d.Db(1),d.lc("chartData",d.hc(2,17,e.allData$))("dataType",e.dataType),d.Db(3),d.lc("ngModel",e.dataType),d.Db(2),d.xc(d.hc(7,19,"HOME.CONFIRMED")),d.Db(3),d.xc(d.hc(10,21,"HOME.DEATHS")),d.Db(3),d.xc(d.hc(13,23,"HOME.RECOVERED")),d.Db(5),d.mc("placeholder",d.hc(18,25,"HOME.SELECT")),d.lc("formControl",e.countryControl)("matAutocomplete",n),d.Db(4),d.lc("ngForOf",d.hc(22,27,e.countriesOpts$)),d.Db(4),d.lc("chartData",d.hc(26,29,e.dataByCountry$)),d.Db(4),d.xc(d.hc(30,31,"HOME.EXPORT_COUNTRY")),d.Db(3),d.xc(d.hc(33,33,"HOME.EXPORT_WORLD")),d.Db(2),d.lc("dataSource",e.dataSource),d.Db(13),d.lc("matHeaderRowDef",e.displayedColumns),d.Db(1),d.lc("matRowDefColumns",e.displayedColumns),d.Db(1),d.lc("pageSizeOptions",d.nc(35,Z))}},directives:[E.a,A.b,b.h,b.k,A.a,b.m,b.i,b.j,w.b,R.a,b.a,L.c,b.c,L.a,D.k,H.a,B.a,j.j,j.c,j.e,j.b,j.g,j.i,P.a,T.e,j.d,j.a,j.f,j.h],pipes:[D.b,_.c,D.e],styles:[".full-width[_ngcontent-%COMP%]{width:100%;color:#1eff00}.align-center[_ngcontent-%COMP%]{text-align:center}.types-data-buttons[_ngcontent-%COMP%]{text-align:center;font-size:14px}.types-data-buttons[_ngcontent-%COMP%]     .mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:35px}.table-buttons[_ngcontent-%COMP%]{margin-bottom:5px}.table-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:5px}"]}),J)},{path:"",redirectTo:"home",pathMatch:"full"}]}],et=((Y=o(function t(){n(this,t)})).\u0275fac=function(t){return new(t||Y)},Y.\u0275mod=d.Mb({type:Y}),Y.\u0275inj=d.Lb({imports:[[i.a.forChild(tt)],i.a]}),Y),nt=r("PCNd"),at=((Q=o(function t(){n(this,t)})).\u0275fac=function(t){return new(t||Q)},Q.\u0275mod=d.Mb({type:Q}),Q.\u0275inj=d.Lb({imports:[[nt.a,et]]}),Q)}}])}();
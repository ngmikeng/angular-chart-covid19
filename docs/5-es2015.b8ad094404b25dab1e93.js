(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Iab2:function(t,e,o){var a,n;void 0===(n="function"==typeof(a=function(){"use strict";function e(t,e,o){var a=new XMLHttpRequest;a.open("GET",t),a.responseType="blob",a.onload=function(){c(a.response,e,o)},a.onerror=function(){console.error("could not download file")},a.send()}function o(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function a(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(o)}}var n="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,c=n.saveAs||("object"!=typeof window||window!==n?function(){}:"download"in HTMLAnchorElement.prototype?function(t,c,r){var i=n.URL||n.webkitURL,s=document.createElement("a");s.download=c=c||t.name||"download",s.rel="noopener","string"==typeof t?(s.href=t,s.origin===location.origin?a(s):o(s.href)?e(t,c,r):a(s,s.target="_blank")):(s.href=i.createObjectURL(t),setTimeout((function(){i.revokeObjectURL(s.href)}),4e4),setTimeout((function(){a(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,n,c){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,c),n);else if(o(t))e(t,n,c);else{var r=document.createElement("a");r.href=t,r.target="_blank",setTimeout((function(){a(r)}))}}:function(t,o,a,c){if((c=c||open("","_blank"))&&(c.document.title=c.document.body.innerText="downloading..."),"string"==typeof t)return e(t,o,a);var r="application/octet-stream"===t.type,i=/constructor/i.test(n.HTMLElement)||n.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||r&&i)&&"object"==typeof FileReader){var l=new FileReader;l.onloadend=function(){var t=l.result;t=s?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),c?c.location.href=t:location=t,c=null},l.readAsDataURL(t)}else{var d=n.URL||n.webkitURL,u=d.createObjectURL(t);c?c.location=u:location.href=u,c=null,setTimeout((function(){d.revokeObjectURL(u)}),4e4)}});n.saveAs=c.saveAs=c,t.exports=c})?a.apply(e,[]):a)||(t.exports=n)},j1ZV:function(t,e,o){"use strict";o.r(e),o.d(e,"ComponentsModule",(function(){return U}));var a=o("tyNb"),n=o("lJxs"),c=o("fXoL"),r=o("vkgz"),i=o("2Vo4"),s=o("qc5V");let l=(()=>{class t{constructor(t){this.apiService=t,this.localDataSubject=new i.a(null),this._localData=this.localDataSubject.asObservable()}fetchData(){return this.apiService.get("/timeseries.json").pipe(Object(r.a)(t=>{this.localDataSubject.next(t)}))}clearData(){this.localDataSubject.next(null)}getAllData(){return this._localData}getSummaryNumbers(){return this._localData.pipe(Object(n.a)(t=>{const e={confirmed:0,deaths:0,recovered:0};return t&&Object.keys(t).forEach(o=>{if(t[o]){const a=t[o][t[o].length-1];e.confirmed=e.confirmed+a.confirmed,e.deaths=e.deaths+a.deaths,e.recovered=e.recovered+a.recovered}}),e}))}getListCountries(){return this._localData.pipe(Object(n.a)(t=>t?Object.keys(t):[]))}getByCountryName(t){return this._localData.pipe(Object(n.a)(e=>{if(e&&e[t])return[...e[t]]}))}}return t.\u0275fac=function(e){return new(e||t)(c.Wb(s.a))},t.\u0275prov=c.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=o("/t3+"),u=o("NFeN"),b=o("Wp6s"),m=o("ofXK");let p=(()=>{class t{constructor(t){this.covidDataStoreService=t}ngOnInit(){this.totalConfirmed$=this.covidDataStoreService.getSummaryNumbers().pipe(Object(n.a)(t=>t.confirmed.toLocaleString())),this.totalRecovered$=this.covidDataStoreService.getSummaryNumbers().pipe(Object(n.a)(t=>t.recovered.toLocaleString())),this.totalDeaths$=this.covidDataStoreService.getSummaryNumbers().pipe(Object(n.a)(t=>t.deaths.toLocaleString()))}}return t.\u0275fac=function(e){return new(e||t)(c.Mb(l))},t.\u0275cmp=c.Gb({type:t,selectors:[["app-components"]],decls:27,vars:9,consts:[[1,"header"],[1,"fill-remaining-space"],[1,"summary-wrap"],["title","Confirmed",1,"text-orange"],[1,"number"],["title","Deaths",1,"text-red"],["title","Recovered",1,"text-green"],[1,"info"],["href","https://github.com/pomber/covid19"]],template:function(t,e){1&t&&(c.Sb(0,"mat-toolbar",0),c.Sb(1,"span"),c.sc(2,"CHART COVID-19"),c.Rb(),c.Nb(3,"span",1),c.Sb(4,"div",2),c.Sb(5,"mat-icon",3),c.sc(6,"sentiment_dissatisfied"),c.Rb(),c.Sb(7,"span",4),c.sc(8),c.dc(9,"async"),c.Rb(),c.Sb(10,"mat-icon",5),c.sc(11,"sentiment_very_dissatisfied"),c.Rb(),c.Sb(12,"span",4),c.sc(13),c.dc(14,"async"),c.Rb(),c.Sb(15,"mat-icon",6),c.sc(16,"sentiment_very_satisfied"),c.Rb(),c.Sb(17,"span",4),c.sc(18),c.dc(19,"async"),c.Rb(),c.Rb(),c.Rb(),c.Sb(20,"mat-card"),c.Nb(21,"router-outlet"),c.Rb(),c.Sb(22,"mat-toolbar",7),c.Sb(23,"span"),c.sc(24,"Source data from "),c.Sb(25,"a",8),c.sc(26,"@pomber/covid19"),c.Rb(),c.Rb(),c.Rb()),2&t&&(c.Cb(8),c.tc(c.ec(9,3,e.totalConfirmed$)),c.Cb(5),c.tc(c.ec(14,5,e.totalDeaths$)),c.Cb(5),c.tc(c.ec(19,7,e.totalRecovered$)))},directives:[d.a,u.a,b.a,a.b],pipes:[m.b],styles:[".header[_ngcontent-%COMP%]{background-color:#fff}.header[_ngcontent-%COMP%], .info[_ngcontent-%COMP%]{border-bottom:1px solid #cdcdcd}.info[_ngcontent-%COMP%]{font-size:11px;border-top:1px solid #cdcdcd;height:40px}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}.summary-wrap[_ngcontent-%COMP%]{display:flex;align-items:center}.summary-wrap[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-left:3px;margin-right:10px}.summary-wrap[_ngcontent-%COMP%]   .text-orange[_ngcontent-%COMP%]{color:purple}.summary-wrap[_ngcontent-%COMP%]   .text-red[_ngcontent-%COMP%]{color:red}.summary-wrap[_ngcontent-%COMP%]   .text-green[_ngcontent-%COMP%]{color:green}"]}),t})();var f=o("3Pt+"),h=o("JX91"),y=o("Iab2"),v=o("cHiH"),g=o("jaxi"),C=o("kmnG"),S=o("qFsG"),w=o("/1cH"),R=o("qPpl"),D=o("bTqV"),O=o("+0xr"),_=o("FKr1");function j(t,e){if(1&t&&(c.Sb(0,"mat-option",24),c.sc(1),c.Rb()),2&t){const t=e.$implicit;c.ic("value",t),c.Cb(1),c.uc(" ",t," ")}}function x(t,e){1&t&&(c.Sb(0,"th",25),c.sc(1," Date "),c.Rb())}function M(t,e){if(1&t&&(c.Sb(0,"td",26),c.sc(1),c.dc(2,"date"),c.Rb()),2&t){const t=e.$implicit;c.Cb(1),c.uc(" ",c.fc(2,1,t.date,"mediumDate")," ")}}function L(t,e){1&t&&(c.Sb(0,"th",25),c.sc(1," Confirmed "),c.Rb())}function k(t,e){if(1&t&&(c.Sb(0,"td",26),c.sc(1),c.Rb()),2&t){const t=e.$implicit;c.Cb(1),c.uc(" ",t.confirmed," ")}}function P(t,e){1&t&&(c.Sb(0,"th",25),c.sc(1," Recovered "),c.Rb())}function T(t,e){if(1&t&&(c.Sb(0,"td",26),c.sc(1),c.Rb()),2&t){const t=e.$implicit;c.Cb(1),c.uc(" ",t.recovered," ")}}function B(t,e){1&t&&(c.Sb(0,"th",25),c.sc(1," Deaths "),c.Rb())}function $(t,e){if(1&t&&(c.Sb(0,"td",26),c.sc(1),c.Rb()),2&t){const t=e.$implicit;c.Cb(1),c.uc(" ",t.deaths," ")}}function N(t,e){1&t&&c.Nb(0,"tr",27)}function E(t,e){1&t&&c.Nb(0,"tr",28)}const A=[{path:"",component:p,children:[{path:"home",component:(()=>{class t{constructor(t){this.covidDataStoreService=t,this.selectedCountry="Vietnam",this.countryControl=new f.b(this.selectedCountry),this.displayedColumns=["date","confirmed","recovered","deaths"],this.dataType="confirmed"}ngOnInit(){this.covidDataStoreService.fetchData().subscribe(),this.covidDataStoreService.getListCountries().subscribe(t=>{this.countries=t}),this.allData$=this.covidDataStoreService.getAllData(),this.countriesOpts$=this.countryControl.valueChanges.pipe(Object(h.a)(""),Object(n.a)(t=>this._filter(t))),this._handleLoadDataByCountry(this.selectedCountry)}_filter(t){const e=t.toLowerCase();return this.countries.filter(t=>t.toLowerCase().includes(e))}onSelectCountry(t){t&&t.option&&t.option.value&&(this.selectedCountry=t.option.value,this._handleLoadDataByCountry(t.option.value))}exportCSV(){if(console.log(this._dataByCountry),this.selectedCountry&&this._dataByCountry&&this._dataByCountry.length>0){const t=Object.keys(this._dataByCountry[0]),e=[];this._dataByCountry.forEach(t=>{e.push([...Object.values(t)])});const o=[t.join(","),e.join("\n")].join("\n"),a=new Blob([o],{type:"text/csv;charset=utf-8"});Object(y.saveAs)(a,`covid19_${this.selectedCountry}_${(new Date).getTime()}.csv`)}}_handleLoadDataByCountry(t){this.dataByCountry$=this.covidDataStoreService.getByCountryName(t).pipe(Object(n.a)(t=>t&&t.length>0?t.sort((t,e)=>new Date(e.date).getTime()-new Date(t.date).getTime()):t)).pipe(Object(r.a)(t=>{this._dataByCountry=t}))}}return t.\u0275fac=function(e){return new(e||t)(c.Mb(l))},t.\u0275cmp=c.Gb({type:t,selectors:[["app-home"]],decls:42,vars:18,consts:[[3,"chartData","dataType"],[1,"align-center"],["name","dataType",3,"ngModel","ngModelChange"],["value","confirmed"],["value","deaths"],["value","recovered"],[1,"example-form"],[1,"example-full-width"],["type","text","placeholder","Search Country","matInput","",3,"formControl","matAutocomplete"],["autoActiveFirstOption","",3,"optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"chartData"],[1,""],["mat-raised-button","","color","primary",3,"click"],["mat-table","",1,"mat-elevation-z8","full-width",3,"dataSource"],["matColumnDef","date"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","confirmed"],["matColumnDef","recovered"],["matColumnDef","deaths"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"value"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(t,e){if(1&t&&(c.Sb(0,"div"),c.Nb(1,"app-world-map-chart",0),c.dc(2,"async"),c.Sb(3,"div",1),c.Sb(4,"mat-button-toggle-group",2),c.ac("ngModelChange",(function(t){return e.dataType=t})),c.Sb(5,"mat-button-toggle",3),c.sc(6,"Confirmed"),c.Rb(),c.Sb(7,"mat-button-toggle",4),c.sc(8,"Deaths"),c.Rb(),c.Sb(9,"mat-button-toggle",5),c.sc(10,"Recovered"),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Nb(11,"hr"),c.Sb(12,"form",6),c.Sb(13,"mat-form-field",7),c.Nb(14,"input",8),c.Sb(15,"mat-autocomplete",9,10),c.ac("optionSelected",(function(t){return e.onSelectCountry(t)})),c.rc(17,j,2,2,"mat-option",11),c.dc(18,"async"),c.Rb(),c.Rb(),c.Rb(),c.Nb(19,"hr"),c.Sb(20,"div"),c.Nb(21,"app-multi-data-chart",12),c.dc(22,"async"),c.Rb(),c.Sb(23,"div",13),c.Sb(24,"button",14),c.ac("click",(function(){return e.exportCSV()})),c.sc(25,"Export CSV"),c.Rb(),c.Rb(),c.Sb(26,"table",15),c.dc(27,"async"),c.Qb(28,16),c.rc(29,x,2,0,"th",17),c.rc(30,M,3,4,"td",18),c.Pb(),c.Qb(31,19),c.rc(32,L,2,0,"th",17),c.rc(33,k,2,1,"td",18),c.Pb(),c.Qb(34,20),c.rc(35,P,2,0,"th",17),c.rc(36,T,2,1,"td",18),c.Pb(),c.Qb(37,21),c.rc(38,B,2,0,"th",17),c.rc(39,$,2,1,"td",18),c.Pb(),c.rc(40,N,1,0,"tr",22),c.rc(41,E,1,0,"tr",23),c.Rb()),2&t){const t=c.kc(16);c.Cb(1),c.ic("chartData",c.ec(2,10,e.allData$))("dataType",e.dataType),c.Cb(3),c.ic("ngModel",e.dataType),c.Cb(10),c.ic("formControl",e.countryControl)("matAutocomplete",t),c.Cb(3),c.ic("ngForOf",c.ec(18,12,e.countriesOpts$)),c.Cb(4),c.ic("chartData",c.ec(22,14,e.dataByCountry$)),c.Cb(5),c.ic("dataSource",c.ec(27,16,e.dataByCountry$)),c.Cb(14),c.ic("matHeaderRowDef",e.displayedColumns),c.Cb(1),c.ic("matRowDefColumns",e.displayedColumns)}},directives:[v.a,g.b,f.h,f.k,g.a,f.m,f.i,f.j,C.b,S.a,f.a,w.c,f.c,w.a,m.k,R.a,D.a,O.j,O.c,O.e,O.b,O.g,O.i,_.f,O.d,O.a,O.f,O.h],pipes:[m.b,m.e],styles:[".full-width[_ngcontent-%COMP%]{width:100%;color:#1eff00}.align-center[_ngcontent-%COMP%]{text-align:center}"]}),t})()},{path:"",redirectTo:"home",pathMatch:"full"}]}];let H=(()=>{class t{}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(e){return new(e||t)},imports:[[a.a.forChild(A)],a.a]}),t})();var F=o("PCNd");let U=(()=>{class t{}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(e){return new(e||t)},imports:[[F.a,H]]}),t})()}}]);
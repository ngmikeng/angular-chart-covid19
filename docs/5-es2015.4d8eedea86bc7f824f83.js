(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{j1ZV:function(t,e,a){"use strict";a.r(e),a.d(e,"ComponentsModule",(function(){return I}));var o=a("tyNb"),c=a("fXoL"),n=a("/t3+"),r=a("Wp6s");let i=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["app-components"]],decls:5,vars:0,template:function(t,e){1&t&&(c.Sb(0,"mat-toolbar"),c.Sb(1,"span"),c.sc(2,"CHART COVID 19"),c.Rb(),c.Rb(),c.Sb(3,"mat-card"),c.Nb(4,"router-outlet"),c.Rb())},directives:[n.a,r.a,o.b],styles:[""]}),t})();var s=a("3Pt+"),l=a("JX91"),u=a("lJxs"),b=a("vkgz"),d=a("2Vo4"),m=a("qc5V");let p=(()=>{class t{constructor(t){this.apiService=t,this.localDataSubject=new d.a(null),this._localData=this.localDataSubject.asObservable()}fetchData(){return this.apiService.get("/timeseries.json").pipe(Object(b.a)(t=>{this.localDataSubject.next(t)}))}clearData(){this.localDataSubject.next(null)}getListCountries(){return this._localData.pipe(Object(u.a)(t=>t?Object.keys(t):[]))}getByCountryName(t){return this._localData.pipe(Object(u.a)(e=>{if(e)return e[t]}))}}return t.\u0275fac=function(e){return new(e||t)(c.Wb(m.a))},t.\u0275prov=c.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var f=a("kmnG"),h=a("qFsG"),C=a("/1cH"),y=a("ofXK"),S=a("qPpl"),v=a("+0xr"),D=a("FKr1");function w(t,e){if(1&t&&(c.Sb(0,"mat-option",16),c.sc(1),c.Rb()),2&t){const t=e.$implicit;c.ic("value",t),c.Cb(1),c.uc(" ",t," ")}}function R(t,e){1&t&&(c.Sb(0,"th",17),c.sc(1," Date "),c.Rb())}function g(t,e){if(1&t&&(c.Sb(0,"td",18),c.sc(1),c.dc(2,"date"),c.Rb()),2&t){const t=e.$implicit;c.Cb(1),c.uc(" ",c.fc(2,1,t.date,"mediumDate")," ")}}function j(t,e){1&t&&(c.Sb(0,"th",17),c.sc(1," Confirmed "),c.Rb())}function O(t,e){if(1&t&&(c.Sb(0,"td",18),c.sc(1),c.Rb()),2&t){const t=e.$implicit;c.Cb(1),c.uc(" ",t.confirmed," ")}}function N(t,e){1&t&&(c.Sb(0,"th",17),c.sc(1," Recovered "),c.Rb())}function $(t,e){if(1&t&&(c.Sb(0,"td",18),c.sc(1),c.Rb()),2&t){const t=e.$implicit;c.Cb(1),c.uc(" ",t.recovered," ")}}function _(t,e){1&t&&(c.Sb(0,"th",17),c.sc(1," Deaths "),c.Rb())}function k(t,e){if(1&t&&(c.Sb(0,"td",18),c.sc(1),c.Rb()),2&t){const t=e.$implicit;c.Cb(1),c.uc(" ",t.deaths," ")}}function B(t,e){1&t&&c.Nb(0,"tr",19)}function L(t,e){1&t&&c.Nb(0,"tr",20)}const P=[{path:"",component:i,children:[{path:"home",component:(()=>{class t{constructor(t){this.covidDataStoreService=t,this.selectedCountry="Vietnam",this.countryControl=new s.b(this.selectedCountry),this.displayedColumns=["date","confirmed","recovered","deaths"]}ngOnInit(){this.covidDataStoreService.fetchData().subscribe(),this.covidDataStoreService.getListCountries().subscribe(t=>{this.countries=t}),this.countriesOpts$=this.countryControl.valueChanges.pipe(Object(l.a)(""),Object(u.a)(t=>this._filter(t))),this._handleLoadDataByCountry(this.selectedCountry)}_filter(t){const e=t.toLowerCase();return this.countries.filter(t=>t.toLowerCase().includes(e))}onSelectCountry(t){t&&t.option&&t.option.value&&(this.selectedCountry=t.option.value,this._handleLoadDataByCountry(t.option.value))}_handleLoadDataByCountry(t){this.dataByCountry$=this.covidDataStoreService.getByCountryName(t).pipe(Object(u.a)(t=>t&&t.length>0?t.sort((t,e)=>new Date(e.date).getTime()-new Date(t.date).getTime()):t))}}return t.\u0275fac=function(e){return new(e||t)(c.Mb(p))},t.\u0275cmp=c.Gb({type:t,selectors:[["app-home"]],decls:27,vars:13,consts:[[1,"example-form"],[1,"example-full-width"],["type","text","placeholder","Search Country","matInput","",3,"formControl","matAutocomplete"],["autoActiveFirstOption","",3,"optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"chartData"],["mat-table","",1,"mat-elevation-z8","full-width",3,"dataSource"],["matColumnDef","date"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","confirmed"],["matColumnDef","recovered"],["matColumnDef","deaths"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"value"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(t,e){if(1&t&&(c.Sb(0,"form",0),c.Sb(1,"mat-form-field",1),c.Nb(2,"input",2),c.Sb(3,"mat-autocomplete",3,4),c.ac("optionSelected",(function(t){return e.onSelectCountry(t)})),c.rc(5,w,2,2,"mat-option",5),c.dc(6,"async"),c.Rb(),c.Rb(),c.Rb(),c.Nb(7,"hr"),c.Sb(8,"div"),c.Nb(9,"app-multi-data-chart",6),c.dc(10,"async"),c.Rb(),c.Sb(11,"table",7),c.dc(12,"async"),c.Qb(13,8),c.rc(14,R,2,0,"th",9),c.rc(15,g,3,4,"td",10),c.Pb(),c.Qb(16,11),c.rc(17,j,2,0,"th",9),c.rc(18,O,2,1,"td",10),c.Pb(),c.Qb(19,12),c.rc(20,N,2,0,"th",9),c.rc(21,$,2,1,"td",10),c.Pb(),c.Qb(22,13),c.rc(23,_,2,0,"th",9),c.rc(24,k,2,1,"td",10),c.Pb(),c.rc(25,B,1,0,"tr",14),c.rc(26,L,1,0,"tr",15),c.Rb()),2&t){const t=c.kc(4);c.Cb(2),c.ic("formControl",e.countryControl)("matAutocomplete",t),c.Cb(3),c.ic("ngForOf",c.ec(6,7,e.countriesOpts$)),c.Cb(4),c.ic("chartData",c.ec(10,9,e.dataByCountry$)),c.Cb(2),c.ic("dataSource",c.ec(12,11,e.dataByCountry$)),c.Cb(14),c.ic("matHeaderRowDef",e.displayedColumns),c.Cb(1),c.ic("matRowDefColumns",e.displayedColumns)}},directives:[s.l,s.i,s.j,f.b,h.a,s.a,C.c,s.h,s.c,C.a,y.k,S.a,v.j,v.c,v.e,v.b,v.g,v.i,D.f,v.d,v.a,v.f,v.h],pipes:[y.b,y.e],styles:[".full-width[_ngcontent-%COMP%]{width:100%}"]}),t})()},{path:"",redirectTo:"home",pathMatch:"full"}]}];let x=(()=>{class t{}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(e){return new(e||t)},imports:[[o.a.forChild(P)],o.a]}),t})();var F=a("PCNd");let I=(()=>{class t{}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(e){return new(e||t)},imports:[[F.a,x]]}),t})()}}]);
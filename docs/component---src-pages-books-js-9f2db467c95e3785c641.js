(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{136:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return f});var r=a(6),n=a.n(r),i=a(0),o=a.n(i),s=a(142),l=a(150),c=a(146),d=a(147),u=a(160),A=(a(143),function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges.filter(function(e){return"book"===e.node.frontmatter.posttype&&!e.node.frontmatter.draft});return o.a.createElement(c.a,{location:this.props.location,title:t},o.a.createElement(d.a,{title:"Alle Bücher",keywords:["book"]}),o.a.createElement(l.a,null),o.a.createElement(s.Link,{to:"/blogs"},"All Blogs"),o.a.createElement("h1",null,"Alle Bücher"),a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return o.a.createElement(u.a,{title:a,author:t.frontmatter.author,date:t.frontmatter.date,tags:t.frontmatter.tags,publicURL:t.frontmatter.cover.publicURL,link:t.fields.slug,excerpt:t.excerpt})}))},t}(o.a.Component));t.default=A;var f="2314858908"},142:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return A}),a.d(t,"StaticQuery",function(){return f});var r=a(0),n=a.n(r),i=a(4),o=a.n(i),s=a(141),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var c=a(144),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var u=a(29);a.d(t,"parsePath",function(){return u.a});var A=n.a.createContext({}),f=function(e){return n.a.createElement(A.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},143:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return c});var r=a(154),n=a.n(r),i=a(155),o=a.n(i),s=new n.a(o.a);var l=s.rhythm,c=s.scale},144:function(e,t,a){var r;e.exports=(r=a(145))&&r.default||r},145:function(e,t,a){"use strict";a.r(t);a(28);var r=a(0),n=a.n(r),i=a(4),o=a.n(i),s=a(46),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},146:function(e,t,a){"use strict";a(28);var r=a(6),n=a.n(r),i=a(0),o=a.n(i),s=a(142),l=a(143),c=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,n=t.children;return e="/mliebelts-blog/"===a.pathname?o.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},o.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(l.a)(0)}},o.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(30),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},e,n)},t}(o.a.Component);t.a=c},147:function(e,t,a){"use strict";var r=a(148),n=a(0),i=a.n(n),o=a(4),s=a.n(o),l=a(156),c=a.n(l),d=a(142);function u(e){var t=e.description,a=e.lang,n=e.meta,o=e.keywords,s=e.title;return i.a.createElement(d.StaticQuery,{query:A,render:function(e){var r=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:s},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:r}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})},data:r})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u;var A="1025518380"},148:function(e){e.exports={data:{site:{siteMetadata:{title:"mliebelt Starter Blog",description:"My first blog in using Gatsby.js.",author:"Markus Liebelt"}}}}},150:function(e,t,a){"use strict";a(151);var r=a(152),n=a(0),i=a.n(n),o=a(142),s=a(153),l=a.n(s),c=a(143);var d="4046613625";t.a=function(){return i.a.createElement(o.StaticQuery,{query:d,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(1)}},i.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"}}),i.a.createElement("p",null,"Written by ",i.a.createElement("strong",null,a)," who lives and works near Stuttgart in Germany."," ",i.a.createElement("a",{href:"https://twitter.com/"+r.twitter},"You should follow him on Twitter"),", or see ",i.a.createElement("a",{href:"https://stackexchange.com/users/18210/mliebelt"},"his stats on Stackoverflow"),"."))},data:r})}},151:function(e,t,a){"use strict";a(149)("fixed",function(e){return function(){return e(this,"tt","","")}})},152:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAaa1jLXtc42sJAr/xAAaEAEAAgMBAAAAAAAAAAAAAAABABECEiEi/9oACAEBAAEFAh6ZQy5VTUZrcT1RCf/EABYRAAMAAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPwEj/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAFxAAAwEAAAAAAAAAAAAAAAAAARAxAP/aAAgBAQAGPwIs6OL/xAAbEAADAAMBAQAAAAAAAAAAAAAAAREhMUFhcf/aAAgBAQABPyFOw9GKnI7d10oyjjuRQtnwVweQ0P/aAAwDAQACAAMAAAAQ4Mh8/8QAGREBAAIDAAAAAAAAAAAAAAAAAAERITFB/9oACAEDAQE/EMUo5Cdv/8QAGBEBAQADAAAAAAAAAAAAAAAAABEBIUH/2gAIAQIBAT8Qu1dYf//EAB0QAQEBAAICAwAAAAAAAAAAAAERACExQVGBwdH/2gAIAQEAAT8QNaUAH3e8ssT2iGfQrOecYoD4719aBfjfBxjwOgGvE8/rpzE9QN//2Q==",width:50,height:50,src:"/mliebelts-blog/static/2b753544b472097643f0c1275c36d60f/d2d31/profile-pic.jpg",srcSet:"/mliebelts-blog/static/2b753544b472097643f0c1275c36d60f/d2d31/profile-pic.jpg 1x,\n/mliebelts-blog/static/2b753544b472097643f0c1275c36d60f/0b804/profile-pic.jpg 1.5x,\n/mliebelts-blog/static/2b753544b472097643f0c1275c36d60f/753c3/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Markus Liebelt",social:{twitter:"mliebelt"}}}}}},153:function(e,t,a){"use strict";var r=a(7);t.__esModule=!0,t.default=void 0;var n,i=r(a(6)),o=r(a(47)),s=r(a(157)),l=r(a(158)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},A={},f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!A[a]||(A[a]=!0,!1)},p=[];var h=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),p.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+r+n+"<img "+s+l+t+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=c.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,n=e.onError,i=(0,s.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},i,{onLoad:r,onError:n,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});g.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!0,i=!1,s=t.fadeIn,l=f(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!1,i=!0),"undefined"==typeof window&&(r=!1,n=!1),t.critical&&(r=!0,n=!1,i=!1);var d=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:n,IOSupported:i,fadeIn:s,hasNoScript:d,seenBefore:l},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,A=void 0===d?{}:d,f=e.placeholderClassName,p=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.Tag,E="boolean"==typeof y?"lightgray":y,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,A),v=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),S={title:t,alt:this.state.isVisible?"":a,style:w,className:f};if(p){var j=p;return c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),j.base64&&c.default.createElement(g,(0,l.default)({src:j.base64},S)),j.tracedSVG&&c.default.createElement(g,(0,l.default)({src:j.tracedSVG},S)),E&&c.default.createElement(b,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,j.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),c.default.createElement("source",{srcSet:j.srcSet,sizes:j.sizes}),c.default.createElement(g,{alt:a,title:t,src:j.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},j))}}))}if(h){var R=h,B=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},i);return"inherit"===i.display&&delete B.display,c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&c.default.createElement(g,(0,l.default)({src:R.base64},S)),R.tracedSVG&&c.default.createElement(g,(0,l.default)({src:R.tracedSVG},S)),E&&c.default.createElement(b,{title:t,style:{backgroundColor:E,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&c.default.createElement("picture",null,R.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),c.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),c.default.createElement(g,{alt:a,title:t,width:R.width,height:R.height,src:R.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),E=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:b,sizes:E,fixed:b,fluid:E,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,Tag:d.default.string};var w=y;t.default=w},159:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(142),o=a(163);t.a=function(e){var t=e.children,a="/authors/"+o.kebabCase(t);return n.a.createElement(i.Link,{to:a},t)}},160:function(e,t,a){"use strict";a(161);var r=a(6),n=a.n(r),i=a(0),o=a.n(i),s=a(142),l=a(143),c=a(159),d=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props,t=e.link,a=e.date,r=e.tags,n=e.publicURL,i=e.excerpt,d=e.author,u=e.title;return o.a.createElement("div",{key:t},o.a.createElement("h3",{style:{marginBottom:Object(l.a)(.25)}},o.a.createElement(c.a,null,d),":",o.a.createElement(s.Link,{style:{boxShadow:"2px 2px 3px #118888",padding:"2px",lineHeight:"1.4"},to:t},u)),o.a.createElement("small",null,a,r.map(function(e){var t="/tags/"+e;return o.a.createElement("span",{style:{margin:"4px"},key:e},o.a.createElement(s.Link,{to:t},e))})),o.a.createElement(s.Link,{to:t},o.a.createElement("img",{style:{float:"left",marginRight:Object(l.a)(1)},src:n,width:"80px"})),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:i}}),o.a.createElement("div",{style:{clear:"both"}}))},t}(o.a.Component);t.a=d},161:function(e,t,a){"use strict";a(149)("link",function(e){return function(t){return e(this,"a","href",t)}})}}]);
//# sourceMappingURL=component---src-pages-books-js-9f2db467c95e3785c641.js.map
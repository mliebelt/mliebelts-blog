(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{133:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return s});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),u=a(146),l=(a(142),a(160)),c=function(e){var t,a=e.pageContext,n=e.data,i=(a.tag,n.books.edges),o=n.author;return o&&(o=n.author.edges[0].node.frontmatter,t=n.author.edges[0].node.html),console.log(o),r.a.createElement(u.a,{location:"/authors",title:"mliebelt Starter Blog"},r.a.createElement("div",null,r.a.createElement("h1",null,"Author: ",i[0].node.frontmatter.author),o&&r.a.createElement("div",null,o.homepage&&r.a.createElement("div",null,r.a.createElement("a",{href:o.homepage,target:"_blank"},"Home Page")),o.wiki&&r.a.createElement("div",null,r.a.createElement("a",{href:o.wiki,target:"_blank"},"Wikipedia")),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})),r.a.createElement("ul",null,i.map(function(e){var t=e.node;console.log(t);var a=t.frontmatter.title;return r.a.createElement(l.a,{key:a,title:a,author:t.frontmatter.author,date:t.frontmatter.date,tags:t.frontmatter.tags,publicURL:t.frontmatter.cover.publicURL,link:t.fields.slug,excerpt:t.excerpt})}))))};c.propTypes={pageContext:o.a.shape({author:o.a.string.isRequired}),data:o.a.shape({books:o.a.shape({edges:o.a.arrayOf(o.a.shape({node:o.a.shape({frontmatter:o.a.shape({path:o.a.string.isRequired,title:o.a.string.isRequired,author:o.a.string.isRequired})})}).isRequired)})})},t.default=c;var s="524730748"},142:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),u=a(141),l=a.n(u);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return u.withPrefix}),a.d(t,"navigate",function(){return u.navigate}),a.d(t,"push",function(){return u.push}),a.d(t,"replace",function(){return u.replace}),a.d(t,"navigateTo",function(){return u.navigateTo});var c=a(144),s=a.n(c);a.d(t,"PageRenderer",function(){return s.a});var d=a(29);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},143:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return c});var n=a(154),r=a.n(n),i=a(155),o=a.n(i),u=new r.a(o.a);var l=u.rhythm,c=u.scale},144:function(e,t,a){var n;e.exports=(n=a(145))&&n.default||n},145:function(e,t,a){"use strict";a.r(t);a(28);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),u=a(46),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},146:function(e,t,a){"use strict";a(28);var n=a(6),r=a.n(n),i=a(0),o=a.n(i),u=a(142),l=a(143),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,n=t.title,r=t.children;return e="/mliebelts-blog/"===a.pathname?o.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},o.a.createElement(u.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(l.a)(0)}},o.a.createElement(u.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(30),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},e,r)},t}(o.a.Component);t.a=c},159:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(142),o=a(163);t.a=function(e){var t=e.children,a="/authors/"+o.kebabCase(t);return r.a.createElement(i.Link,{to:a},t)}},160:function(e,t,a){"use strict";a(161);var n=a(6),r=a.n(n),i=a(0),o=a.n(i),u=a(142),l=a(143),c=a(159),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.link,a=e.date,n=e.tags,r=e.publicURL,i=e.excerpt,s=e.author,d=e.title;return o.a.createElement("div",{key:t},o.a.createElement("h3",{style:{marginBottom:Object(l.a)(.25)}},o.a.createElement(c.a,null,s),":",o.a.createElement(u.Link,{style:{boxShadow:"2px 2px 3px #118888",padding:"2px",lineHeight:"1.4"},to:t},d)),o.a.createElement("small",null,a,n.map(function(e){var t="/tags/"+e;return o.a.createElement("span",{style:{margin:"4px"},key:e},o.a.createElement(u.Link,{to:t},e))})),o.a.createElement(u.Link,{to:t},o.a.createElement("img",{style:{float:"left",marginRight:Object(l.a)(1)},src:r,width:"80px"})),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:i}}),o.a.createElement("div",{style:{clear:"both"}}))},t}(o.a.Component);t.a=s},161:function(e,t,a){"use strict";a(149)("link",function(e){return function(t){return e(this,"a","href",t)}})}}]);
//# sourceMappingURL=component---src-templates-author-js-abce8b73c38ed1ec02ca.js.map
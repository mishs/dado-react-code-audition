(this.webpackJsonpmain=this.webpackJsonpmain||[]).push([[0],{43:function(n,e,t){},44:function(n,e,t){},72:function(n,e,t){"use strict";t.r(e);var i=t(0),c=t.n(i),r=t(32),a=t.n(r),o=(t(43),t(44),t(11)),s=t(2),l=t(12),d=t(17);function p(n,e){switch(e.type){case"UPDATE_COMMITS":return Object(d.a)(Object(d.a)({},n),{},{commits:e.payload});case"UPDATE_SEARCH_QUERY":return Object(d.a)(Object(d.a)({},n),{},{searchQuery:e.payload});default:return n}}var x,j=t(1),b={commits:{},searchQuery:""},h=Object(i.createContext)(b),u=function(n){var e=n.children,t=Object(i.useReducer)(p,b),c=Object(l.a)(t,2),r=c[0],a=c[1];return Object(j.jsx)(h.Provider,{value:{commits:r.commits,searchQuery:r.searchQuery,updateCommits:function(n){a({type:"UPDATE_COMMITS",payload:n})},updateSearchQuery:function(n){a({type:"UPDATE_SEARCH_QUERY",payload:n})}},children:e})},g=t(38),m=t(9),f=t(10),O=t(7),v=f.a.div(x||(x=Object(m.a)(["\n    form {\n        display: flex;\n        justify-content: center;\n        max-width: 920px;\n        margin: 0 auto;\n\n        "," {\n            flex-direction: column;\n        }\n\n        .search-wrapper {            \n            display: flex;\n            align-items: center;\n            background-color: #DFE4EA;\n            flex: 1;\n            margin-right: 16px;\n            border-radius: 8px;\n            position: relative;\n\n            ",' {\n                margin-right: 0;\n                margin-bottom: 24px;\n            }\n            \n            svg {\n                padding: 16px;\n                fill: #29335C;\n            }\n\n            .search-icon {\n                position: absolute;\n            }\n\n            input[type="text"] {\n                border: none;\n                background: transparent;\n                font-size: 20px;\n                letter-spacing: -0.5px;\n                width: 100%;\n                height: 100%;\n                display: flex;\n                padding-left: 40px;\n                margin: auto 2px;\n\n                &::placeholder {\n                    color: #B1B5C5;\n                }\n\n                &:hover {\n                    outline-color: #98a1ab; \n                    border: 2px solid #29335C;\n                    border-radius: 8px;  \n                    height: 58px;  \n                }\n            }\n        }\n\n        input[type="submit"] {\n            background-color: #F3663F;\n            color: #fff;\n            border: none;\n            font-size: 20px;\n            letter-spacing: -0.5px;\n            font-weight: 600;\n            border-radius: 8px;\n            height: 58px;\n            cursor: pointer;\n            padding: 15px 30px;\n        }\n    }\n'])),Object(O.down)("xs"),Object(O.down)("xs"));var y,w=function(n){var e=Object(i.useContext)(h),t=e.searchQuery,c=e.updateSearchQuery,r=Object(i.useState)(""),a=Object(l.a)(r,2),o=a[0],d=a[1],p=Object(s.f)().push;return Object(j.jsx)(v,{children:Object(j.jsxs)("form",{onSubmit:function(n){n.preventDefault(),c(o),p("/commits")},children:[Object(j.jsxs)("div",{className:"search-wrapper",children:[Object(j.jsx)(g.a,{className:"search-icon"}),Object(j.jsx)("input",{type:"text",placeholder:""===t?"Eg. facebook/react":t,onChange:function(n){return d(n.target.value)}})]}),Object(j.jsx)("input",{type:"submit",value:"See commits \ud83d\ude80"})]})})},C=f.a.div(y||(y=Object(m.a)(["\n    margin: 24px auto;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n\n    ul {\n        list-style: none;\n        padding: 0;\n        display: flex;\n        justify-content: center;\n        margin-top: 24px;\n\n        li {\n            margin-right: 16px;\n            background: #29335C;\n            color: #fff;\n            padding: 8px 16px;\n            border-radius: 8px;\n            font-weight: 600;\n            letter-spacing: -0.4px;\n            cursor: pointer;\n        }\n    }\n\n    span {\n        text-align: center;\n        font-size: 14px;\n        color: #3E4462;\n        letter-spacing: -0.4px;\n    }\n"])));var E,k=function(){var n=Object(s.f)().push;return Object(j.jsxs)(C,{children:[Object(j.jsx)("span",{children:"Or pick one of these suggested repos"}),Object(j.jsx)("ul",{children:[{title:"django/django"},{title:"microsoft/vscode"},{title:"jezen/is-thirteen"},{title:"benawad/dogehouse"}].map((function(e){return Object(j.jsx)("li",{onClick:function(){return e.title,void n("/commits")},children:e.title})}))})]})},z=f.a.div(E||(E=Object(m.a)(["\n    nav {\n        display: flex;\n        justify-content: space-between;\n        padding: 48px 0 64px;\n        align-items: center;\n\n        "," {\n            flex-direction: column;\n            padding: 24px 0 16px;\n        }\n    }\n\n    h1, ul {\n        margin: 0;\n    }\n\n    h1 {\n        a {\n            text-decoration: none;\n            font-size: 28px;\n            font-weight: 700;\n            color: #18214D;\n            letter-spacing: -0.6px;\n        }\n\n        "," {\n            margin-bottom: 16px;\n        }\n    }\n\n    ul {\n        list-style: none;\n        padding: 0;\n        display: flex;\n        align-items: center;\n\n        li {\n            margin-left: 64px;\n\n            "," {\n                margin-left: 32px;\n            }\n\n            &:first-child {\n                margin-left: 0;\n            }\n\n            a {\n                text-decoration: none;\n                font-size: 20px;\n                color: #000;\n            }\n        }\n    }\n"])),Object(O.down)("xs"),Object(O.down)("xs"),Object(O.down)("xs"));var D,S=function(){return Object(j.jsx)(z,{children:Object(j.jsxs)("nav",{children:[Object(j.jsx)("h1",{children:Object(j.jsx)(o.b,{to:"/",children:"CommitViewer"})}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/about",children:"About"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/contact",children:"Contact"})})]})]})})},F=f.a.div(D||(D=Object(m.a)(["\n    .hero {\n        text-align: center;\n        max-width: 540px;\n        margin: 0 auto 64px;\n\n        h2 {                  \n            font-size: 72px;\n            color: #18214D;\n            font-weight: 600;\n            line-height: 80px;\n            letter-spacing: -3px;\n            margin-bottom: 16px;\n\n            "," {\n                margin-top: 32px;\n                font-size: 56px;\n                line-height: 62px;\n            }\n        }\n\n        p {\n            font-size: 20px;\n            line-height: 28px;\n            color: #3E4462;\n            letter-spacing: -0.4px;\n            max-width: 445px;\n            margin: 0 auto; \n        }\n    }\n"])),Object(O.down)("xs"));var N=function(){return Object(j.jsxs)(F,{className:"container",children:[Object(j.jsx)(S,{}),Object(j.jsxs)("div",{className:"hero",children:[Object(j.jsx)("h2",{children:"Discover the world of code"}),Object(j.jsx)("p",{children:"Explore open source projects from GitHub, and read their commit history to see the story of how they were built."})]}),Object(j.jsx)(w,{}),Object(j.jsx)(k,{})]})};var Q=function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(S,{}),"about"]})};var A,T=function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(S,{}),"contact"]})},_=t(36),M=t.n(_),P=f.a.div(A||(A=Object(m.a)(["\n    min-width: 768px;\n    margin: auto;\n    \n    nav {\n        padding: 36px 0;\n\n        > div {\n            flex: 1;\n        }\n\n        form {\n            margin-right: 0;\n        }\n\n        "," {\n            display: flex;\n            flex-direction: column;\n            padding: 24px 0 16px;\n        }\n\n    }\n\n    h3 {\n        text-align: center;\n        font-size: 36px;\n        color: #29335C;\n        font-weight: 600;\n        letter-spacing: -1.5px;\n    }\n\n    ul {\n        padding: 0;\n        list-style: none;\n        color: #18214D;\n\n        li {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n\n            span {\n                margin: 0 auto;\n                font-size: 20px;\n                letter-spacing: -0.4px;\n            }\n\n            > div {\n                display: grid;\n                grid-template-columns: 2fr 7fr;\n                grid-gap: 16px;\n                margin-bottom: 32px;\n                margin-right: 64px;\n                align-items: center;\n                flex: 8;\n            }\n\n            figure {\n                text-align: center;\n                img {\n                    border-radius: 50%;\n                    height: 60px;\n                    width: 60px;\n                    margin-bottom: 4px;\n                }\n\n                figcaption {\n                    font-size: 22px;\n                    font-weight: 600;\n                    letter-spacing: -0.55px;\n                    word-break: break-word;\n\n                    "," {\n                        font-size: 16px;\n                        letter-spacing: -1.3px;\n                        word-break: break-word;\n                \n                    }\n                }\n            }\n\n            p, time {\n                font-size: 20px;\n                letter-spacing: -0.4px;\n            }\n        }\n    }\n"])),Object(O.down)("md"),Object(O.down)("md")),U=t(37),Y=t.n(U);var B=function(){var n=Object(i.useContext)(h).searchQuery,e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(i.useState)(!1),s=Object(l.a)(a,2),d=s[0],p=s[1];return Object(i.useEffect)((function(){""!==n&&(p(!0),M.a.get("https://api.github.com/repos/".concat(n,"/commits?per_page=10")).then((function(n){r(n.data),console.log(n.data),p(!1)})))}),[n]),console.log(c),Object(j.jsxs)(P,{children:[Object(j.jsx)(z,{style:{background:"#EFF2F6",marginBottom:"32px"},children:Object(j.jsxs)("nav",{className:"container",children:[Object(j.jsx)("h1",{children:Object(j.jsx)(o.b,{to:"/",children:"CommitViewer"})}),Object(j.jsx)(w,{value:n})]})}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h3",{children:n}),Object(j.jsx)("ul",{className:"results",children:!0===d?Object(j.jsx)("li",{children:Object(j.jsx)("span",{className:"loading",children:"Loading..."})}):c.map((function(n){return Object(j.jsxs)("li",{children:[Object(j.jsxs)("div",{children:[Object(j.jsxs)("figure",{children:[Object(j.jsx)("img",{src:n.author.avatar_url,alt:"avatar"}),Object(j.jsx)("figcaption",{children:n.author.login})]}),Object(j.jsx)("p",{children:n.commit.message})]}),Object(j.jsx)(Y.a,{format:"HH:mm DD/MM/YYYY",children:n.commit.author.date})]},n.sha)}))})]})]})};function H(){return Object(j.jsx)(u,{children:Object(j.jsx)(o.a,{children:Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{path:"/",exact:!0,children:Object(j.jsx)(N,{})}),Object(j.jsx)(s.a,{path:"/about",children:Object(j.jsx)(Q,{})}),Object(j.jsx)(s.a,{path:"/contact",children:Object(j.jsx)(T,{})}),Object(j.jsx)(s.a,{path:"/commits",children:Object(j.jsx)(B,{})})]})})})}var R=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,73)).then((function(e){var t=e.getCLS,i=e.getFID,c=e.getFCP,r=e.getLCP,a=e.getTTFB;t(n),i(n),c(n),r(n),a(n)}))};a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(H,{})}),document.getElementById("root")),R()}},[[72,1,2]]]);
//# sourceMappingURL=main.66545b18.chunk.js.map
(this.webpackJsonpwebuild=this.webpackJsonpwebuild||[]).push([[0],{53:function(n,t,e){},54:function(n,t,e){"use strict";e.r(t);var r=e(0),i=e(1),a=e.n(i),c=e(13),o=e.n(c),s=e(14),d=e(15),u=e(4),l=e(2),f=e(3);function x(){var n=Object(l.a)(["\n    font-size: .8rem;\n    color: #060606;\n    padding-left: 5px;\n"]);return x=function(){return n},n}function p(){var n=Object(l.a)(["\n    display: flex;\n    padding: 5px;\n    margin-right: 20px;\n\n    @media screen and (max-width: 722px){\n        margin-right: 25px;\n    }\n"]);return p=function(){return n},n}function j(){var n=Object(l.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    padding: 0 24px;\n    max-width: 1200px;\n    \n    \n    @media screen and (max-width: 725px){\n        align-items: center;\n        justify-content: center;\n    }\n\n    @media screen and (max-width: 393px){\n        flex-direction: column;\n    }\n"]);return j=function(){return n},n}function b(){var n=Object(l.a)(["\n    background: #ffc50d;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 100;\n    right: 0;\n    left: 0;\n    top: 0;\n    position: fixed;\n\n    @media screen and (max-width: 960px) {\n        transition: 0.8s all ease;\n    }\n"]);return b=function(){return n},n}var h=f.a.nav(b()),g=f.a.div(j()),m=f.a.div(p()),O=f.a.p(x()),v=function(){return Object(r.jsx)(h,{children:Object(r.jsxs)(g,{children:[Object(r.jsxs)(m,{children:[Object(r.jsx)(u.e,{}),Object(r.jsx)(O,{children:"Bonifacio Global City, Taguig"})]}),Object(r.jsxs)(m,{children:[Object(r.jsx)(u.j,{}),Object(r.jsx)(O,{children:"webuild@gmail.com"})]}),Object(r.jsxs)(m,{children:[Object(r.jsx)(u.b,{}),Object(r.jsx)(O,{children:"(+63) 989 796 9594"})]})]})})},w=e(7);function y(){var n=Object(l.a)(["\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    padding: 0 1rem;\n    height: 100%;\n    cursor: pointer;\n    color: #ffffff;\n\n    &:hover {\n        background: #ffc50d;\n        color: #060606;\n        font-weight: bold;\n    }\n\n    &.active{\n        background: #ffc50d;\n        color: #060606;\n        font-weight: bold;\n    }\n"]);return y=function(){return n},n}function z(){var n=Object(l.a)(["\n    height: 80px;\n\n    \n"]);return z=function(){return n},n}function k(){var n=Object(l.a)(["\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    text-align: center;\n    list-style: none;\n    margin-right: -22px;\n\n    @media screen and (max-width: 768px){\n        display: none;\n    }\n"]);return k=function(){return n},n}function B(){var n=Object(l.a)(["\n    display: none;\n\n    @media screen and (max-width: 768px){\n        display: block;\n        position: absolute;\n        top: 0;\n        right: 0;\n        transform: translate(-100%, 60%);\n        font-size: 1.8rem;\n        color: #ffffff;\n        cursor: pointer;\n    }\n"]);return B=function(){return n},n}function I(){var n=Object(l.a)(["\n    color: #ffc50d;\n    justify-self: flex-start;\n    cursor: pointer;\n    font-size: 1.5rem;\n    display: flex;\n    align-items: center;\n    margin-left: 13px;\n    font-weight: bold;\n    text-decoration: none;\n"]);return I=function(){return n},n}function C(){var n=Object(l.a)(["\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    padding: 0 24px;\n    max-width: 1200px;\n    top: 10px;\n"]);return C=function(){return n},n}function A(){var n=Object(l.a)(["\n    background: #060606;\n    display: flex;\n    height: 80px;\n    font-size: 1rem;\n    align-items: center;\n    justify-content: center;\n    top: 25px;\n    left: 0;\n    right: 0;\n    position: fixed;\n    z-index: 150;\n\n    @media screen and (max-width: 722px){\n        top: 3rem;\n    }\n\n    @media screen and (max-width: 393px){\n        top: 5rem;\n    }\n"]);return A=function(){return n},n}var W=f.a.nav(A()),T=f.a.div(C()),S=Object(f.a)(s.b)(I()),_=f.a.div(B()),E=f.a.ul(k()),P=f.a.li(z()),X=Object(f.a)(w.Link)(y()),F=function(n){var t=n.toggle;return Object(r.jsx)(W,{children:Object(r.jsxs)(T,{children:[Object(r.jsx)(S,{to:"/",onClick:function(){w.animateScroll.scrollToTop()},children:"WeBuild"}),Object(r.jsx)(_,{onClick:t,children:Object(r.jsx)(u.k,{})}),Object(r.jsxs)(E,{children:[Object(r.jsx)(P,{children:Object(r.jsx)(X,{to:"about",smooth:!0,duration:500,spy:!0,exact:"true",offset:0,children:"Who we are"})}),Object(r.jsx)(P,{children:Object(r.jsx)(X,{to:"project",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:"Our Project"})}),Object(r.jsx)(P,{children:Object(r.jsx)(X,{to:"build",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:"What we Build"})}),Object(r.jsx)(P,{children:Object(r.jsx)(X,{to:"contact",smooth:!0,duration:500,spy:!0,exact:"true",offset:-200,children:"Our Contact"})})]})]})})};function G(){var n=Object(l.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(6, 80px);\n    text-align: center;\n    width: 100%;\n\n    @media screen and (max-width: 480px) {\n        grid-template-rows(5, 50px);\n    }\n"]);return G=function(){return n},n}function M(){var n=Object(l.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-decoration: none;\n    list-style: none;\n    font-size: 1.5rem;\n    transition: 0.2s ease-in-out;\n    color: #fff;\n    cursor: pointer;\n\n    &:hover {\n        background: #ffc50d;\n        color: #060606;\n        transition: 0.2s ease-in-out;\n    }\n"]);return M=function(){return n},n}function Y(){var n=Object(l.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #fffff;\n"]);return Y=function(){return n},n}function q(){var n=Object(l.a)(["\n    position: absolute;\n    top: 1.2rem;\n    right: 1.5rem;\n    background: #060606;\n    font-size: 2rem;\n    cursor: pointer;\n    outline: none;\n"]);return q=function(){return n},n}function L(){var n=Object(l.a)(["\n    color: #fff;\n"]);return L=function(){return n},n}function U(){var n=Object(l.a)(["\n    display: grid;\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 999;\n    align-items: center;\n    background: #060606;\n    trnsition: 0.3s ease-in-out;\n    top: ",";\n"]);return U=function(){return n},n}var D=f.a.aside(U(),(function(n){return n.isOpen?"0":"100"})),J=Object(f.a)(u.d)(L()),K=f.a.div(q()),N=f.a.div(Y()),Q=Object(f.a)(w.Link)(M()),R=f.a.ul(G()),V=function(n){var t=n.isOpen,e=n.toggle;return Object(r.jsxs)(D,{isOpen:t,children:[Object(r.jsx)(K,{onClick:e,children:Object(r.jsx)(J,{})}),Object(r.jsx)(N,{children:Object(r.jsxs)(R,{children:[Object(r.jsx)(Q,{to:"about",smooth:!0,duration:500,spy:!0,exact:"true",offset:0,onClick:e,children:"Who we are"}),Object(r.jsx)(Q,{to:"project",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,onClick:e,children:"Our Project"}),Object(r.jsx)(Q,{to:"build",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,onClick:e,children:"What we Build"}),Object(r.jsx)(Q,{to:"contact",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,onClick:e,children:"Our Contact"})]})})]})},H=e(8),Z=e.n(H),$=(e(22),e.p+"static/media/bgvideo.65426181.mp4");function nn(){var n=Object(l.a)(["\n    margin-left: 5px;\n    font-size: 20px;  \n"]);return nn=function(){return n},n}function tn(){var n=Object(l.a)(["\n    margin-left: 5px;\n    font-size: 20px;\n"]);return tn=function(){return n},n}function en(){var n=Object(l.a)(["\n    background: none;\n    outline: none;\n    border: solid 2px #fff;\n    color: #fff;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    padding: 20px;\n\n    &:hover {\n        border: none;\n        background: #ffc50d;\n        color: #060606;\n    }\n"]);return en=function(){return n},n}function rn(){var n=Object(l.a)(["\n    display: flex;\n    margin-top: 32px;\n    align-items: center;\n    flex-direction: column;\n"]);return rn=function(){return n},n}function an(){var n=Object(l.a)(["\n    font-size: 24px;\n    margin-top: 24px;\n    color: #fff;\n    text-align: center;\n    max-width: 600px;\n\n    @media screen and (max-width: 768px) {\n        font-size: 24px;\n    }\n\n    @media screen and (max-width: 480px) {\n        font-size: 18px;\n    }\n"]);return an=function(){return n},n}function cn(){var n=Object(l.a)(["\n    font-size: 48px;\n    color: #fff;\n    text-align: center;\n\n    @media screen and (max-width: 768px) {\n        font-size: 40px;\n    }\n\n    @media screen and (max-width: 480px) {\n        font-size: 32px;\n    }\n"]);return cn=function(){return n},n}function on(){var n=Object(l.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 3;\n    flex-direction: column;\n    max-width: 1200px;\n    padding: 8px 24px;\n"]);return on=function(){return n},n}function sn(){var n=Object(l.a)(["\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n    object-fit: cover;\n    background: #060606;\n"]);return sn=function(){return n},n}function dn(){var n=Object(l.a)(["\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n"]);return dn=function(){return n},n}function un(){var n=Object(l.a)(["\n    background: #383838;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0 30px;\n    height: 850px;\n    position: relative;\n    bottom: -100px;\n    z-index: 1;\n\n    :before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background: linear-gradient(\n            180deg, \n            rgba(4, 4, 4, 1.2) 0%,\n                rgba(4, 4, 4, 0.6) 30%\n            ),\n            linear-gradient(0deg, rgba(4, 4, 4, 1.2) 0%,\n            transparent 100%\n        );\n        z-index: 2;\n        \n    }\n"]);return un=function(){return n},n}var ln=f.a.div(un()),fn=f.a.div(dn()),xn=f.a.video(sn()),pn=f.a.div(on()),jn=f.a.h1(cn()),bn=f.a.p(an()),hn=f.a.div(rn()),gn=Object(f.a)(w.Link)(en()),mn=Object(f.a)(u.c)(tn()),On=Object(f.a)(u.a)(nn()),vn=function(){var n=Object(i.useState)(!1),t=Object(d.a)(n,2),e=t[0],a=t[1],c=function(){a(!e)};return Object(i.useEffect)((function(){Z.a.init({duration:2e3})}),[]),Object(r.jsxs)(ln,{id:"landing",children:[Object(r.jsx)(fn,{children:Object(r.jsx)(xn,{autoPlay:!0,loop:!0,muted:!0,src:$,type:"video/mp4"})}),Object(r.jsxs)(pn,{children:[Object(r.jsx)(jn,{children:"WeBuild is a Construction Company"}),Object(r.jsx)(bn,{children:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "}),Object(r.jsx)(hn,{children:Object(r.jsxs)(gn,{"data-aos":"fade-up",to:"about",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,onMouseEnter:c,onMouseLeave:c,children:["Get Continue ",e?Object(r.jsx)(On,{}):Object(r.jsx)(mn,{})]})})]})]})},wn=e.p+"static/media/about1.09d0d3c0.jpg",yn=e.p+"static/media/about2.80c514dd.jpg";function zn(){var n=Object(l.a)(["\n    height: 4px;\n    width: 25%;\n    background-color: #fff;\n    border: none;\n"]);return zn=function(){return n},n}function kn(){var n=Object(l.a)(["\n    max-width: 70%;\n\n    \n"]);return kn=function(){return n},n}function Bn(){var n=Object(l.a)(["\n    color: #060606;\n    font-size: 20px;\n    margin-top: 34px;\n\n    @media screen and (max-width: 768px) {\n        font-size: 20px;\n    }\n\n    @media screen and (max-width: 480px) {\n        font-size: 16px;\n    }\n"]);return Bn=function(){return n},n}function In(){var n=Object(l.a)(["\n    color: #060606;\n    font-size: 48px;\n\n    @media screen and (max-width: 768px){\n        font-size: 42px;\n    }\n\n    @media screen and (max-width: 480px){\n        font-size: 34px;\n    }\n"]);return In=function(){return n},n}function Cn(){var n=Object(l.a)(["\n    position: relative;\n    left: 200px;\n    grid-area: colB;\n    z-index: 2;\n\n    @media screen and (max-width: 1100px){\n        left:0;\n        transition: 0.8s all ease;\n    }\n"]);return Cn=function(){return n},n}function An(){var n=Object(l.a)(["\n    padding: 20px;\n    max-width: 500px;\n    height: 90%;\n    grid-area: colA;\n    background: #ffc50d;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    right: 200px;\n    z-index: 3;\n    box-shadow: 4px 4px 10px #2a2a2a;\n\n    @media screen and (max-width: 1100px){\n        left: 50%;\n        right: 0;\n        transform: translateX(-50%);\n        transition: 0.8s all ease;\n        height: 100%;\n        top: 100px\n    };\n"]);return An=function(){return n},n}function Wn(){var n=Object(l.a)(["\n    padding-top: 100px;\n    margin: 0 auto;\n    align-items: center;\n    justify-content: center;\n    max-width: 1150px;\n    display: grid;\n    grid-auto-columns: minmax(1fr, 1fr);\n    grid-template-areas: 'colB colA';\n    position: relative;\n\n\n    @media screen and (max-width: 1100px){\n        padding-top: 0px;\n        text-align: center;\n        justify-content: center;\n        \n        grid-template-areas: 'colA colA' 'colB colB';\n        transition: 0.8s all ease;\n    }\n"]);return Wn=function(){return n},n}function Tn(){var n=Object(l.a)(["\n    position: relative;\n    grid-area: colB;\n    z-index: 2;\n\n    @media screen and (max-width: 1100px){\n        right:0;\n        transition: 0.8s all ease;\n    }\n"]);return Tn=function(){return n},n}function Sn(){var n=Object(l.a)(["\n    padding: 20px;\n    max-width: 500px;\n    height: 90%;\n    grid-area: colA;\n    background: #ffc50d;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    z-index: 3;\n    left: 200px;\n    box-shadow: 10px 10px 20px black;\n\n    @media screen and (max-width: 1100px){\n        left: 50%;\n        transform: translateX(-50%);\n        transition: 0.8s all ease;\n        height: 100%;\n        top: 100px\n    };\n"]);return Sn=function(){return n},n}function _n(){var n=Object(l.a)(["\n    padding-top: 200px;\n    align-items: center;\n    justify-content: center;\n    margin: 0 auto;\n    max-width: 1150px;\n    display: grid;\n    grid-auto-columns: minmax(1fr, 1fr);\n    grid-template-areas: 'colA colB';\n    position: relative;\n    \n    @media screen and (max-width: 1100px){\n        padding-top: 50px;\n        text-align: center;\n        justify-content: center;\n        \n        grid-template-areas: 'colA colA' 'colB colB';\n        transition: 0.8s all ease;\n    }\n"]);return _n=function(){return n},n}function En(){var n=Object(l.a)(["\n    height: 100%;\n    background: #fff;\n    align-items: center;\n    padding-bottom: 100px\n\n"]);return En=function(){return n},n}var Pn=f.a.div(En()),Xn=f.a.div(_n()),Fn=f.a.div(Sn()),Gn=f.a.div(Tn()),Mn=f.a.div(Wn()),Yn=f.a.div(An()),qn=f.a.div(Cn()),Ln=f.a.h1(In()),Un=f.a.p(Bn()),Dn=f.a.img(kn()),Jn=f.a.hr(zn()),Kn=function(){return Object(r.jsxs)(Pn,{id:"about",children:[Object(r.jsxs)(Xn,{children:[Object(r.jsxs)(Fn,{children:[Object(r.jsx)(Ln,{children:"Who We Are"}),Object(r.jsx)(Jn,{}),Object(r.jsx)(Un,{children:"with nearly 50 years\u2019 experience, adco is one of the oldest and most established construction companies in australia. we are australian owned and are hugely proud of our heritage."})]}),Object(r.jsx)(Gn,{children:Object(r.jsx)(Dn,{src:wn,alt:"About Image"})})]}),Object(r.jsxs)(Mn,{children:[Object(r.jsx)(qn,{children:Object(r.jsx)(Dn,{src:yn,alt:"About Image"})}),Object(r.jsxs)(Yn,{children:[Object(r.jsx)(Ln,{children:"Value Through Technology"}),Object(r.jsx)(Jn,{}),Object(r.jsx)(Un,{children:"A progressive approach that amplifies results. Our tech-driven process = your economic agility."})]})]})]})};function Nn(){var n=Object(l.a)(["\n    font-size: 48px;\n    font-weight: bold;\n    color: #fff;\n"]);return Nn=function(){return n},n}function Qn(){var n=Object(l.a)(["\n    font-size: 24px;\n"]);return Qn=function(){return n},n}function Rn(){var n=Object(l.a)(["\n    text-align: center;\n    color: #ffc50d;\n    flex-grow: 1;\n    padding: 20px;\n"]);return Rn=function(){return n},n}function Vn(){var n=Object(l.a)(["\n    background: #060606;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    height: 150px;\n    \n    justify-content: center;\n    align-content: center;\n    align-items: center;\n\n    @media screen and (max-width: 1050px){\n        height: 100%;\n    }\n"]);return Vn=function(){return n},n}var Hn=f.a.div(Vn()),Zn=f.a.div(Rn()),$n=f.a.div(Qn()),nt=f.a.div(Nn()),tt=function(){return Object(r.jsxs)(Hn,{children:[Object(r.jsxs)(Zn,{children:[Object(r.jsx)(nt,{children:"127"}),Object(r.jsx)($n,{children:"Number of Clients"})]}),Object(r.jsxs)(Zn,{children:[Object(r.jsx)(nt,{children:"57"}),Object(r.jsx)($n,{children:"On Going Projects"})]}),Object(r.jsxs)(Zn,{children:[Object(r.jsx)(nt,{children:"39"}),Object(r.jsx)($n,{children:"Projects Completed"})]}),Object(r.jsxs)(Zn,{children:[Object(r.jsx)(nt,{children:"20"}),Object(r.jsx)($n,{children:"Years Established"})]})]})},et=e.p+"static/media/com.3346202c.png",rt=e.p+"static/media/ind.fa94e30f.png",it=e.p+"static/media/int.a970666b.png";function at(){var n=Object(l.a)(["\n    font-size: 1rem;\n    color: #060606;\n    text-align: center\n"]);return at=function(){return n},n}function ct(){var n=Object(l.a)(["\n    font-size: 2.5rem;\n    color: #060606;\n    margin-bottom: 20px;\n\n    @media screen and (max-width: 480px) {\n        font-size: 2rem;\n    }\n"]);return ct=function(){return n},n}function ot(){var n=Object(l.a)(["\n    height: 100px;\n    width: 100pxpx;\n    margin-bottom: 20px;\n    margin-top: 10px;\n"]);return ot=function(){return n},n}function st(){var n=Object(l.a)(["\n    background: #fff;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    height: 380px;\n    padding: 30px;\n    transition: all 0.2s ease-in-out;\n    box-shadow: 4px 4px 10px #2a2a2a;\n\n    &:hover{\n        transform: scale(1.02);\n        transition: all 0.2s ease-in-out;\n        cursor: pointer;\n    }\n"]);return st=function(){return n},n}function dt(){var n=Object(l.a)(["\n    max-width: 1150px;\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    align-items: center;\n    grid-gap: 16px;\n    padding: 0 50px;\n\n    @media screen and (max-width: 1000px) {\n        grid-template-columns: 1fr 1fr;\n    }\n\n    @media screen and (max-width: 768px) {\n        grid-template-columns: 1fr;\n        padding: 0 20px;\n    }\n"]);return dt=function(){return n},n}function ut(){var n=Object(l.a)(["\n    font-size: 1rem;\n"]);return ut=function(){return n},n}function lt(){var n=Object(l.a)(["\n    font-size: 48px;\n\n"]);return lt=function(){return n},n}function ft(){var n=Object(l.a)(["\n    text-align: center;\n    padding: 50px;\n"]);return ft=function(){return n},n}function xt(){var n=Object(l.a)(["\n    height: 910px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    background: #ffc50d;\n\n    @media screen and (max-width: 1002px) {\n        height: 1000px;\n    }\n\n    @media screen and (max-width: 768px) {\n        height: 1400px;\n    }\n\n    @media screen and (max-width: 480px) {\n        height: 1400px;\n    }\n    @media screen and (max-width: 445px) {\n        height: 1500px;\n    }\n"]);return xt=function(){return n},n}var pt=f.a.div(xt()),jt=f.a.div(ft()),bt=f.a.h1(lt()),ht=f.a.p(ut()),gt=f.a.div(dt()),mt=f.a.div(st()),Ot=f.a.img(ot()),vt=f.a.h1(ct()),wt=f.a.p(at()),yt=function(){return Object(i.useEffect)((function(){Z.a.init({duration:2e3})}),[]),Object(r.jsxs)(pt,{id:"build",children:[Object(r.jsxs)(jt,{children:[Object(r.jsx)(bt,{children:"What We Build"}),Object(r.jsx)(ht,{children:"We Build a 3 Types Commercial, Industrial, International"})]}),Object(r.jsxs)(gt,{children:[Object(r.jsxs)(mt,{"data-aos":"fade-right",children:[Object(r.jsx)(Ot,{src:et,alt:"Image"}),Object(r.jsx)(vt,{children:"Commercial"}),Object(r.jsx)(wt,{children:"More than 75% of our business is referral clients\u2014a testament to our business values, construction standards and safety practices."})]}),Object(r.jsxs)(mt,{"data-aos":"fade-up",children:[Object(r.jsx)(Ot,{src:rt,alt:"Image"}),Object(r.jsx)(vt,{children:"Industrial"}),Object(r.jsx)(wt,{children:"For over 50 years, we have had a group of design and construction professionals fully dedicated to the industrial industry."})]}),Object(r.jsxs)(mt,{"data-aos":"zoom-in",children:[Object(r.jsx)(Ot,{src:it,alt:"Image"}),Object(r.jsx)(vt,{children:"International"}),Object(r.jsx)(wt,{children:"Being 1 of 4 brands in a construction group operating worldwide, we have no limits to the projects we're capable of delivering for clients."})]})]})]})},zt=e(33),kt=e.n(zt);function Bt(){var n=Object(l.a)(["\n    \n"]);return Bt=function(){return n},n}function It(){var n=Object(l.a)(["\n    cursor: pointer;\n    color: #ffc50d;\n    font-size: 30px;\n"]);return It=function(){return n},n}function Ct(){var n=Object(l.a)(["\n    cursor: pointer;\n    color: #ffc50d;\n    font-size: 30px;\n"]);return Ct=function(){return n},n}function At(){var n=Object(l.a)(["\n    cursor: pointer;\n    color: #ffc50d;\n    font-size: 30px;\n"]);return At=function(){return n},n}function Wt(){var n=Object(l.a)(["\n    color: #fff;\n    font-size: 1rem;\n    margin-right: 12px;\n"]);return Wt=function(){return n},n}function Tt(){var n=Object(l.a)(["\n    color: #fff;\n    font-size: 1rem;\n    margin-right: 12px;\n"]);return Tt=function(){return n},n}function St(){var n=Object(l.a)(["\n    color: #fff;\n    font-size: 1rem;\n    margin-right: 12px;\n"]);return St=function(){return n},n}function _t(){var n=Object(l.a)(["\n    color: #fff;\n    font-size: 1rem;\n    margin-right: 12px;\n"]);return _t=function(){return n},n}function Et(){var n=Object(l.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    padding-top: 45px;\n    margin-bottom: 20px;\n"]);return Et=function(){return n},n}function Pt(){var n=Object(l.a)(["\n    font-size: 1rem;\n"]);return Pt=function(){return n},n}function Xt(){var n=Object(l.a)(["\n    display: flex;\n    flex-direction: row;\n    margin: 25px 24px;\n    align-items: center;\n    \n    @media screen and (max-width: 790px){\n        justify-content: center;\n    }\n"]);return Xt=function(){return n},n}function Ft(){var n=Object(l.a)(["\n    font-size: 48px;\n    padding-bottom: 10px;\n\n    @media screen and (max-width: 790px){\n        text-align: center;\n    }\n"]);return Ft=function(){return n},n}function Gt(){var n=Object(l.a)(["\n    background: #060606;\n    width: 400px;\n    color: #fff;\n    padding: 30px;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    left: -60px;\n    box-shadow: 4px 4px 10px #2a2a2a;\n\n    @media screen and (max-width: 790px){\n        width: 100%;\n        left: 0;\n        transform: translateY(0);\n        top: 0;\n    }\n"]);return Gt=function(){return n},n}function Mt(){var n=Object(l.a)(["\n    margin-top: 20px;\n    margin-left: 10px;\n    width: 180px;\n    font-size: 16px;\n    border: solid 3px #060606;\n    padding: 10px;\n    background: none;\n    font-weight: bold;\n    cursor: pointer;\n\n    &:hover{\n        background: #060606;\n        color: white;\n    }\n\n"]);return Mt=function(){return n},n}function Yt(){var n=Object(l.a)(["\n    width: 300px;\n    background: #cc9d0a;\n    font-size: 1rem;\n    border: none;\n    padding: 10px;\n    color: #fff;\n    margin-top: 20px;\n    margin-left: 10px;\n    outline-color: #060606;\n    resize: none;\n\n    ::placeholder{\n        color: #fff;\n    }\n"]);return Yt=function(){return n},n}function qt(){var n=Object(l.a)(["\n    width: 300px;\n    background: #cc9d0a;\n    font-size: 1rem;\n    border: none;\n    padding: 10px;\n    color: #fff;\n    margin-top: 20px;\n    margin-left: 10px;\n    outline-color: #060606;\n\n    ::placeholder{\n        color: #fff;\n    }\n"]);return qt=function(){return n},n}function Lt(){var n=Object(l.a)(["\n    width: 300px;\n    background: #cc9d0a;\n    font-size: 1rem;\n    border: none;\n    padding: 10px;\n    color: #fff;\n    margin-top: 20px;\n    margin-left: 10px;\n    outline-color: #060606;\n\n    ::placeholder{\n        color: #fff;\n    }\n"]);return Lt=function(){return n},n}function Ut(){var n=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n\n    @media screen and (max-width: 790px){\n        justify-content: center;\n        align-items: center;\n        text-align: center\n    }\n"]);return Ut=function(){return n},n}function Dt(){var n=Object(l.a)(["\n    font-size: 1rem;\n"]);return Dt=function(){return n},n}function Jt(){var n=Object(l.a)(["\n    font-size: 48px;\n    padding-top: 58px;\n\n    @media screen and (max-width: 790px){\n        padding-top: 500px;\n    }\n"]);return Jt=function(){return n},n}function Kt(){var n=Object(l.a)(["\n    left: 50%;\n    right: 0;\n    transform: translateX(-50%);\n    margin: auto auto;\n    max-width: 850px;\n    height: 500px;\n    background: #ffc50d;\n    margin: 30px;\n    position: relative;\n    padding-left: 400px;\n    margin-top: 150px;\n\n    @media screen and (max-width: 790px){\n        padding-left: 0px;\n        left: 0;\n        transform: translateX(0);\n        height: 1100px;\n        margin: 0;\n        margin-top: 30px;\n        text-align: center;\n    }\n"]);return Kt=function(){return n},n}function Nt(){var n=Object(l.a)(["\n    height: 670px;\n    margin: 0 auto;\n\n    @media screen and (max-width: 790px){\n        height: 1090px;\n    }\n"]);return Nt=function(){return n},n}var Qt=f.a.div(Nt()),Rt=f.a.div(Kt()),Vt=f.a.h1(Jt()),Ht=f.a.p(Dt()),Zt=f.a.form(Ut()),$t=f.a.input(Lt()),ne=f.a.input(qt()),te=f.a.textarea(Yt()),ee=f.a.button(Mt()),re=f.a.div(Gt()),ie=f.a.h1(Ft()),ae=f.a.div(Xt()),ce=f.a.p(Pt()),oe=f.a.div(Et()),se=Object(f.a)(u.e)(_t()),de=Object(f.a)(u.j)(St()),ue=Object(f.a)(u.i)(Tt()),le=Object(f.a)(u.b)(Wt()),fe=Object(f.a)(u.f)(At()),xe=Object(f.a)(u.g)(Ct()),pe=Object(f.a)(u.h)(It()),je=f.a.a(Bt()),be=function(){return Object(r.jsx)(Qt,{id:"contact",children:Object(r.jsxs)(Rt,{children:[Object(r.jsx)(Vt,{children:"Get in Touch"}),Object(r.jsx)(Ht,{children:"Feel free to drop us a line below!"}),Object(r.jsxs)(Zt,{onSubmit:function(n){n.preventDefault(),kt.a.sendForm("service_vv8kpce","template_3kl4lk8",n.target,"user_Rp1KtXFQU4qkx7XX0Ge4d").then((function(n){console.log(n.text)}),(function(n){console.log(n.text)})),window.alert("Sent Successfully "),n.target.reset()},children:[Object(r.jsx)($t,{name:"to_name",type:"text",placeholder:"Input your Name",required:!0}),Object(r.jsx)(ne,{name:"reply_to",type:"email",placeholder:"Input your Email",required:!0}),Object(r.jsx)(te,{name:"message",rows:"4",cols:"50",placeholder:"Your Message to Us",required:!0}),Object(r.jsx)(ee,{type:"submit",children:"Send"})]}),Object(r.jsxs)(re,{children:[Object(r.jsx)(ie,{children:"Contact Us"}),Object(r.jsxs)(ae,{children:[Object(r.jsx)(se,{}),Object(r.jsxs)(ce,{children:["Bonifacio Global City, Taguig,",Object(r.jsx)("br",{})," Kalakhang Maynila"]})]}),Object(r.jsxs)(ae,{children:[Object(r.jsx)(de,{}),Object(r.jsx)(ce,{children:"webuild@gmail.com"})]}),Object(r.jsxs)(ae,{children:[Object(r.jsx)(ue,{}),Object(r.jsx)(ce,{children:"webuild.company"})]}),Object(r.jsxs)(ae,{children:[Object(r.jsx)(le,{}),Object(r.jsx)(ce,{children:"+63 989 796 9594"})]}),Object(r.jsxs)(oe,{children:[Object(r.jsx)(je,{href:"https://www.facebook.com/",target:"_blank",children:Object(r.jsx)(fe,{})}),Object(r.jsx)(je,{href:"https://www.instagram.com/",target:"_blank",children:Object(r.jsx)(xe,{})}),Object(r.jsx)(je,{href:"https://twitter.com/",target:"_blank",children:Object(r.jsx)(pe,{})})]})]})]})})};function he(){var n=Object(l.a)(["\n    color: #fff;\n    margin-bottom: 16px;\n"]);return he=function(){return n},n}function ge(){var n=Object(l.a)(["\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return ge=function(){return n},n}function me(){var n=Object(l.a)(["\n    background: #060606;\n"]);return me=function(){return n},n}var Oe=f.a.div(me()),ve=f.a.div(ge()),we=f.a.small(he()),ye=function(){return Object(r.jsx)(Oe,{children:Object(r.jsx)(ve,{children:Object(r.jsxs)(we,{children:["WeBuild \xa9 ",(new Date).getFullYear()," All rights reserved."]})})})},ze=e.p+"static/media/2x2-1.a822d5a4.jpg",ke=e.p+"static/media/2x2-2.730b588a.jpg",Be=e.p+"static/media/2x2-3.32f73ad7.jpg",Ie=e.p+"static/media/2x2-4.16b2647a.jpg",Ce=e.p+"static/media/2x2-5.3c605ec5.jpg",Ae=e.p+"static/media/2x2-6.c9ae04c5.jpg",We=e.p+"static/media/4x2-1.b1fc63f1.jpg",Te=e.p+"static/media/4x2-2.d636acb5.jpg",Se=e.p+"static/media/4x2-3.52ca7179.jpg";function _e(){var n=Object(l.a)(["\n    width: 100%;\n    height: 200px;\n    grid-area: col9;\n\n    &:hover{\n        transform: scale(1.02);\n        transition: all 0.2s ease-in-out;\n        cursor: pointer\n    }\n"]);return _e=function(){return n},n}function Ee(){var n=Object(l.a)(["\n    width: 100%;\n    height: 200px;\n    grid-area: col8;\n\n    &:hover{\n        transform: scale(1.02);\n        transition: all 0.2s ease-in-out;\n        cursor: pointer\n    }\n"]);return Ee=function(){return n},n}function Pe(){var n=Object(l.a)(["\n    width: 100%;\n    height: 200px;\n    grid-area: col7;\n\n    &:hover{\n        transform: scale(1.02);\n        transition: all 0.2s ease-in-out;\n        cursor: pointer\n    }\n"]);return Pe=function(){return n},n}function Xe(){var n=Object(l.a)(["\n    width: 100%;\n    height: 200px;\n    grid-area: col6;\n\n    &:hover{\n        transform: scale(1.02);\n        transition: all 0.2s ease-in-out;\n        cursor: pointer\n    }\n"]);return Xe=function(){return n},n}function Fe(){var n=Object(l.a)(["\n    width: 100%;\n    height: 200px;\n    grid-area: col5;\n\n    &:hover{\n        transform: scale(1.02);\n        transition: all 0.2s ease-in-out;\n        cursor: pointer\n    }\n"]);return Fe=function(){return n},n}function Ge(){var n=Object(l.a)(["\n    width: 100%;\n    height: 200px;\n    grid-area: col4;\n\n    &:hover{\n        transform: scale(1.02);\n        transition: all 0.2s ease-in-out;\n        cursor: pointer\n    }\n"]);return Ge=function(){return n},n}function Me(){var n=Object(l.a)(["\n    width: 100%;\n    height: 200px;\n    grid-area: col3;\n\n    &:hover{\n        transform: scale(1.02);\n        transition: all 0.2s ease-in-out;\n        cursor: pointer\n    }\n"]);return Me=function(){return n},n}function Ye(){var n=Object(l.a)(["\n    width: 100%;\n    height: 200px;\n    grid-area: col2;\n\n    &:hover{\n        transform: scale(1.02);\n        transition: all 0.2s ease-in-out;\n        cursor: pointer\n    }\n"]);return Ye=function(){return n},n}function qe(){var n=Object(l.a)(["\n    width: 100%;\n    height: 200px;\n    grid-area: col1;\n\n    &:hover{\n        transform: scale(1.02);\n        transition: all 0.2s ease-in-out;\n        cursor: pointer\n    }\n"]);return qe=function(){return n},n}function Le(){var n=Object(l.a)(["\n    display: grid;\n    grid-auto-columns: minmax(1fr, 1fr, 1fr, 1fr);\n    align-items: center;\n    justify-content: center;\n    grid-gap: 10px;\n    margin-bottom: 50px;\n    grid-template-areas: \n        'col1 col1 col2 col3'\n        'col4 col5 col5 col6'\n        'col7 col8 col9 col9';\n\n    @media screen and (max-width: 1020px) {\n        grid-template-areas: \n        'col1 col1 col2'\n        'col3 col4 col6'\n        'col5 col5 col7'\n        'col8 col9 col9';\n        transition: 0.8s all ease;\n    }\n\n    @media screen and (max-width: 800px) {\n        grid-template-areas: \n        'col1 col1'\n        'col2 col3'\n        'col5 col5'\n        'col4 col6'\n        'col9 col9'\n        'col7 col8';\n        transition: 0.8s all ease;\n    }\n"]);return Le=function(){return n},n}function Ue(){var n=Object(l.a)(["\n    font-size: 1rem;\n"]);return Ue=function(){return n},n}function De(){var n=Object(l.a)(["\n    font-size: 48px;\n    line-height: 1.1;\n"]);return De=function(){return n},n}function Je(){var n=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 24px 48px;\n    margin-bottom: 50px;\n    margin-top: 50px;\n"]);return Je=function(){return n},n}function Ke(){var n=Object(l.a)(["\n    height: 100%;\n    width: 100%;\n    z-index: 1;\n    max-width: 1100px;\n    margin-right: auto;\n    margin-left: auto;\n    padding: 12px 24px;\n    justify-content: center;\n\n    @media screen and (max-width: 1020px) {\n        margin-right: 0;\n        margin-left: 0;\n    }\n\n    @media screen and (max-width: 800px) {\n        margin-right: 0;\n        margin-left: 0;\n    }\n\n"]);return Ke=function(){return n},n}function Ne(){var n=Object(l.a)(["\n    height: 980px;\n    background: #\n\n    @media screen and (max-width: 1020px) {\n        height: 1200px;\n    }\n\n    @media screen and (max-width: 1020px) {\n        height: 1200px;\n    }\n\n    @media screen and (max-width: 800px) {\n        height: 1700px;\n    }\n"]);return Ne=function(){return n},n}var Qe=f.a.div(Ne()),Re=f.a.div(Ke()),Ve=f.a.div(Je()),He=f.a.h1(De()),Ze=f.a.p(Ue()),$e=f.a.div(Le()),nr=f.a.img(qe()),tr=f.a.img(Ye()),er=f.a.img(Me()),rr=f.a.img(Ge()),ir=f.a.img(Fe()),ar=f.a.img(Xe()),cr=f.a.img(Pe()),or=f.a.img(Ee()),sr=f.a.img(_e()),dr=function(){return Object(i.useEffect)((function(){Z.a.init({duration:2e3})}),[]),Object(r.jsx)(Qe,{id:"project",children:Object(r.jsxs)(Re,{children:[Object(r.jsxs)(Ve,{children:[Object(r.jsx)(He,{children:"Our Project"}),Object(r.jsx)(Ze,{children:"This is our finish Project"})]}),Object(r.jsxs)($e,{children:[Object(r.jsx)(nr,{src:We,alt:"Building Image","data-aos":"fade-up"}),Object(r.jsx)(tr,{src:ze,alt:"Building Image","data-aos":"fade-up"}),Object(r.jsx)(er,{src:ke,alt:"Building Image","data-aos":"fade-up"}),Object(r.jsx)(rr,{src:Be,alt:"Building Image","data-aos":"fade-up"}),Object(r.jsx)(ir,{src:Te,alt:"Building Image","data-aos":"fade-up"}),Object(r.jsx)(ar,{src:Ie,alt:"Building Image","data-aos":"fade-up"}),Object(r.jsx)(cr,{src:Ce,alt:"Building Image","data-aos":"fade-up"}),Object(r.jsx)(or,{src:Ae,alt:"Building Image","data-aos":"fade-up"}),Object(r.jsx)(sr,{src:Se,alt:"Building Image","data-aos":"fade-up"})]})]})})},ur=function(){var n=Object(i.useState)(!1),t=Object(d.a)(n,2),e=t[0],a=t[1],c=function(){a(!e)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(v,{}),Object(r.jsx)(F,{toggle:c}),e?Object(r.jsx)(V,{isOpen:e,toggle:c}):null,Object(r.jsx)(vn,{}),Object(r.jsx)(Kn,{}),Object(r.jsx)(dr,{}),Object(r.jsx)(tt,{}),Object(r.jsx)(yt,{}),Object(r.jsx)(be,{}),Object(r.jsx)(ye,{})]})};e(53);var lr=function(){return Object(r.jsx)(s.a,{children:Object(r.jsx)(ur,{})})};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(lr,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.99d1b34b.chunk.js.map
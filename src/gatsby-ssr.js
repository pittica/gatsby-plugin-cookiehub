import React from "react";

export const onRenderBody = ({ setHeadComponents }, { cookie, code, debug }) =>
  setHeadComponents([
    <script
      key="pittica-cookiehub"
      dangerouslySetInnerHTML={{
        __html: `
        function allowCookie(category,value){
          document.cookie="${cookie}-"+category+"="+(value?"true":"false")+"; path=/; SameSite=Strict";
          document.dispatchEvent(new CustomEvent('consentchange',{detail:{category:category,allowed:value}}));
        }
        var cpm={onAllow:function(category){allowCookie(category,true);},onDeny:function(category){allowCookie(category,false);}};
        (function(h,u,b){
        var d=h.getElementsByTagName("script")[0],e=h.createElement("script");
        e.async=true;e.src='https://cookiehub.net/${
          debug ? "dev/" : ""
        }c2/${code}.js';
        e.onload=function(){u.cookiehub.load(b);}
        d.parentNode.insertBefore(e,d);
        })(document,window,cpm);
      `,
      }}
    />,
  ]);

(function(t,e){typeof exports=="object"&&typeof module!="undefined"?module.exports=e():typeof define=="function"&&define.amd?define(e):(t=typeof globalThis!="undefined"?globalThis:t||self,t["svelte-copyable"]=e())})(this,function(){"use strict";function t(e,o){const n=()=>{o&&o.length>0&&(navigator.clipboard?navigator.clipboard.writeText(o):console.error("Browser must have access to the navigator.clipboard object for the Svelte copyable package to work"),e.dispatchEvent(new CustomEvent("textCopied",{detail:o})))};return e.addEventListener("click",n,!0),{destroy(){document.removeEventListener("click",n,!0)}}}return t});

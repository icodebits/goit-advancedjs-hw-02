import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as h,i as p}from"./assets/vendor-77e16229.js";const a=document.querySelector("[data-start]"),y=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),I=document.querySelector("[data-seconds]"),l=document.querySelector("#datetime-picker");let r=null;const q={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0];e<=new Date?(a.disabled=!0,p.error({title:"Error",message:"Please choose a date in the future"})):(a.disabled=!1,a.addEventListener("click",()=>v(e)))}};h("#datetime-picker",q);function v(t){a.disabled=!0,l.disabled=!0,r&&clearInterval(r),r=setInterval(()=>{const n=t-new Date;if(n<=0){clearInterval(r),i(0,0,0,0);return}const{days:o,hours:u,minutes:c,seconds:d}=w(n);i(o,u,c,d)},1e3)}function w(t){const c=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:d,minutes:m,seconds:f}}function i(t,e,n,o){y.textContent=s(t),S.textContent=s(e),b.textContent=s(n),I.textContent=s(o),t===0&&e===0&&n===0&&o===0&&(l.disabled=!1,clearInterval(r))}function s(t){return String(t).padStart(2,"0")}document.onload=a.disabled=!0;
//# sourceMappingURL=commonHelpers2.js.map
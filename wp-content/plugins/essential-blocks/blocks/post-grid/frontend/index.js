(()=>{"use strict";var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.apiFetch;var a=e.n(t);function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var i=!!EssentialBlocksLocalize&&EssentialBlocksLocalize.rest_rootURL;function r(e,t){return new RegExp("(\\s|^)"+t+"(\\s|$)").test(e.className)}function o(e){var t=e.querySelector(".ebpg-pagination-item.active");if(t){var a=parseInt(t.dataset.pagenumber),n=e.querySelectorAll(".ebpg-pagination-item"),i=n.length,r=1;n.forEach((function(e){r=parseInt(e.dataset.pagenumber),function(e){e.classList.remove("show"),e.classList.add("hide")}(e),(1===a&&r<=3||r>=a&&r<=a+2||r===i||1===r&&(a>=i-2||a>=4))&&function(e){e.classList.remove("hide"),e.classList.add("show")}(e)}));var o=e.querySelectorAll(".ebpg-pagination-item-separator");o.length>0&&o.forEach((function(e){e.remove()}));var s='<button class="ebpg-pagination-item-separator">...</button>';a<n.length-2&&n[n.length-1].insertAdjacentHTML("beforebegin",s),(a>=i-2||i>4&&a>=4)&&n[1].insertAdjacentHTML("afterend",s),1===a?(e.querySelector(".ebpg-pagination-item-previous").disabled=!0,e.querySelector(".ebpg-pagination-item-next").disabled=!1):a===i?(e.querySelector(".ebpg-pagination-item-previous").disabled=!1,e.querySelector(".ebpg-pagination-item-next").disabled=!0):(e.querySelector(".ebpg-pagination-item-previous").disabled=!1,e.querySelector(".ebpg-pagination-item-next").disabled=!1)}}function s(e){var t=1,a=e.closest(".ebpg-pagination").querySelector(".ebpg-pagination-item.active");if(a){if(t=a.dataset?a.dataset.pagenumber:1,r(e,"ebpg-pagination-item-next")){for(var n=a.nextElementSibling;n&&!n.classList.contains("ebpg-pagination-item");)n=n.nextElementSibling;n.classList.add("active"),a.classList.remove("active")}else if(r(e,"ebpg-pagination-item-previous")){for(var i=a.previousElementSibling;i&&!i.classList.contains("ebpg-pagination-item");)i=i.previousElementSibling;i.classList.add("active"),a.classList.remove("active")}o(e.closest(".ebpg-pagination"))}return t}a().use(a().createRootURLMiddleware(i)),window.addEventListener("DOMContentLoaded",(function(){if(document.getElementsByClassName("ebpg-pagination").length>0){var e=document.querySelectorAll(".ebpg-pagination button");e.length>0&&(document.querySelectorAll(".ebpg-pagination").forEach((function(e){o(e)})),e.forEach((function(e){var t=1;e.addEventListener("click",(function(){var e=this,n=r(this,"ebpg-pagination-button"),i=r(this,"ebpg-pagination-item-previous"),c=r(this,"ebpg-pagination-item-next");t=n?parseInt(t)+1:i?parseInt(s(this))-1:c?parseInt(s(this))+1:parseInt(this.dataset.pagenumber);var l=this.closest(".eb-post-grid-wrapper");if(l){var p=l.dataset;a()({path:"essential-blocks/v1/queries?query_data=".concat(p.querydata,"&attributes=").concat(p.attributes,"&pageNumber=").concat(t)}).then((function(t){n?t?e.closest(".ebpg-pagination").insertAdjacentHTML("beforebegin",t):(e.closest(".ebpg-pagination").insertAdjacentHTML("beforebegin",'<p class="eb-no-posts">No more Posts</p>'),e.closest(".ebpg-pagination").remove()):(e.closest(".eb-post-grid-wrapper").querySelectorAll(".ebpg-grid-post").forEach((function(e){e.remove()})),e.closest(".ebpg-pagination").insertAdjacentHTML("beforebegin",t),r(e,"ebpg-pagination-item")&&(e.closest(".ebpg-pagination").querySelectorAll(".ebpg-pagination-item").forEach((function(e){e.classList.remove("active")})),e.classList.add("active")),o(e.closest(".ebpg-pagination")))}))}}))})))}})),window.addEventListener("DOMContentLoaded",(function(e){var t,i=function(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return s=e.done,e},e:function(e){c=!0,o=e},f:function(){try{s||null==a.return||a.return()}finally{if(c)throw o}}}}(document.getElementsByClassName("eb-post-grid-category-filter"));try{var r=function(){var e=t.value,n=e.dataset.ebpgtaxonomy;e.querySelectorAll(".ebpg-category-filter-list li").forEach((function(e){"all"===e.dataset.ebpgcategory&&e.classList.add("active"),e.addEventListener("click",(function(e){var t,i=this,r=e.target.getAttribute("data-ebpgCategory");t="all"===r?"&query_type=filter":"&taxonomy=".concat(n,"&category=").concat(r,"&query_type=filter");var o=this.closest(".eb-post-grid-wrapper").dataset;a()({path:"essential-blocks/v1/queries?query_data=".concat(o.querydata,"&attributes=").concat(o.attributes).concat(t)}).then((function(e){i.closest(".eb-post-grid-wrapper").querySelectorAll(".ebpg-grid-post").forEach((function(e){e.remove()})),i.closest(".eb-post-grid-category-filter").insertAdjacentHTML("afterend",e),i.closest(".eb-post-grid-category-filter").querySelectorAll(".ebpg-category-filter-list-item").forEach((function(e){e.classList.remove("active")})),i.classList.add("active")}))}))}))};for(i.s();!(t=i.n()).done;)r()}catch(e){i.e(e)}finally{i.f()}}))})();
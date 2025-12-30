(function () {
  "use strict";
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      (t.id = "mgx-shadow-style"),
        t.appendChild(
          document.createTextNode(
            '.mgx-overlay{position:fixed;pointer-events:none;z-index:999999;box-sizing:border-box}.mgx-overlay-inspect{background:#895af666;outline:1.5px dashed rgba(115,65,204,1)}.mgx-overlay-selected{outline:2px solid rgba(115,65,204,1);border-radius:12px}.mgx-made-by-wrapper[data-v-7586adae]{position:fixed;height:32px;width:125px;z-index:999;right:20px;bottom:calc(env(safe-area-inset-bottom,20px) + 20px);transition:all .5s ease-in-out;opacity:1}.mgx-made-by-wrapper .mgx-made-by_close[data-v-7586adae]{position:absolute;right:-8px;top:-8px;display:none;cursor:pointer}.mgx-made-by-wrapper:hover .mgx-made-by_close[data-v-7586adae]{display:block!important}.mgx-made-by-wrapper_closed[data-v-7586adae]{display:none}.mgx-made-by[data-v-7586adae]{position:absolute;border-radius:5px;background:#151529;box-shadow:0 1px 6px #7662dbb3;display:inline-flex;height:32px;width:125px;box-sizing:border-box;justify-content:center;align-items:center;cursor:pointer;transition:all 1s ease-in-out;overflow:hidden;border:1px solid rgba(31,31,50,0)}.mgx-made-by .mgx-made-by__text[data-v-7586adae],.mgx-made-by .mgx-made-by_create[data-v-7586adae],.mgx-made-by .mgx-made-by_made[data-v-7586adae]{color:var(--dark-text-color-text-2, rgba(255, 255, 255, .8));font-family:Inter;font-size:12px;font-style:normal;font-weight:500;line-height:normal;display:inline-flex;gap:4px;flex-shrink:0;justify-content:center;align-items:center;position:absolute;transition:all .5s ease-in-out}.mgx-made-by .mgx-made-by_made[data-v-7586adae]{position:absolute;top:6px}.mgx-made-by .mgx-made-by_create[data-v-7586adae]{position:absolute;top:100%}.mgx-made-by[data-v-7586adae]:after{content:"";position:absolute;left:-100%;top:-100%;width:59px;height:68px;background:#745eff7a;filter:blur(25px);transition:all 1s ease-in-out}.mgx-made-by.mgx-made-by_active[data-v-7586adae]{border:1px solid rgba(208,205,255,.75)}.mgx-made-by.mgx-made-by_active[data-v-7586adae]:after{left:100%;top:-48px}.mgx-made-by.mgx-made-by_active .mgx-made-by_create[data-v-7586adae]{position:absolute;top:7px}.mgx-made-by.mgx-made-by_active .mgx-made-by_made[data-v-7586adae]{position:absolute;top:-60%}#--unocss--{layer:__ALL__;escape-view:\\"\\\'\\`\\\\}#--unocss-layer-start--__ALL__--{start:__ALL__}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }@font-face{font-family:Inter;font-style:normal;font-weight:100;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyeAZJhiI2B.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Inter;font-style:normal;font-weight:100;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyeAZthiI2B.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:100;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyeAZNhiI2B.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:100;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyeAZxhiI2B.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:100;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyeAZBhiI2B.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:100;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyeAZFhiI2B.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:100;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyeAZ9hiA.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:200;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuDyfAZJhiI2B.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Inter;font-style:normal;font-weight:200;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuDyfAZthiI2B.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:200;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuDyfAZNhiI2B.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:200;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuDyfAZxhiI2B.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:200;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuDyfAZBhiI2B.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:200;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuDyfAZFhiI2B.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:200;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuDyfAZ9hiA.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuOKfAZJhiI2B.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Inter;font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuOKfAZthiI2B.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuOKfAZNhiI2B.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuOKfAZxhiI2B.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuOKfAZBhiI2B.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuOKfAZFhiI2B.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuOKfAZ9hiA.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZJhiI2B.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZthiI2B.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZNhiI2B.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZxhiI2B.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZBhiI2B.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZFhiI2B.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hiA.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fAZJhiI2B.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Inter;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fAZthiI2B.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fAZNhiI2B.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fAZxhiI2B.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fAZBhiI2B.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fAZFhiI2B.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fAZ9hiA.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYAZJhiI2B.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYAZthiI2B.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYAZNhiI2B.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYAZxhiI2B.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYAZBhiI2B.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYAZFhiI2B.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYAZ9hiA.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYAZJhiI2B.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Inter;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYAZthiI2B.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYAZNhiI2B.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYAZxhiI2B.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYAZBhiI2B.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYAZFhiI2B.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYAZ9hiA.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Yatra One;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/yatraone/v16/C8ch4copsHzj8p7NaF0BxVmAXRA.woff2) format("woff2");unicode-range:U+0900-097F,U+1CD0-1CF9,U+200C-200D,U+20A8,U+20B9,U+20F0,U+25CC,U+A830-A839,U+A8E0-A8FF,U+11B00-11B09}@font-face{font-family:Yatra One;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/yatraone/v16/C8ch4copsHzj8p7NaF0BylmAXRA.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Yatra One;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/yatraone/v16/C8ch4copsHzj8p7NaF0BxFmA.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.absolute{position:absolute}.fixed{position:fixed}.left--100\\%{left:-100%}.left-100\\%{left:100%}.right--8px{right:-8px}.top--100\\%{top:-100%}.top--48px{top:-48px}.top--60\\%{top:-60%}.top--8px{top:-8px}.top-100\\%{top:100%}.top-6px{top:6px}.top-7px{top:7px}.block{display:block}.hidden{display:none}.h-68px{height:68px}.h1{height:.25rem}.h2{height:.5rem}.w-59px{width:59px}.inline-flex{display:inline-flex}.flex-shrink{flex-shrink:1}.cursor-pointer{cursor:pointer}.border{border-width:1px}[fill-opacity~="0.98"]{--un-fill-opacity:.0098}[stroke-width~="1.08"]{stroke-width:1.08px}[stroke~="#63637D"]{--un-stroke-opacity:1;stroke:rgb(99 99 125 / var(--un-stroke-opacity))}.px{padding-left:1rem;padding-right:1rem}.outline{outline-style:solid}.blur{--un-blur:blur(8px);filter:var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia)}.filter{filter:var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.ease,.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}#--unocss-layer-end--__ALL__--{end:__ALL__}'
          )
        ),
        document.head.appendChild(t);
    }
  } catch (o) {
    console.error("vite-plugin-css-injected-by-js", o);
  }
})();
var dl = Object.defineProperty;
var pl = (e, t, n) =>
  t in e
    ? dl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Tn = (e, t, n) => pl(e, typeof t != "symbol" ? t + "" : t, n);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const o = {};
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = n(s);
    fetch(s.href, o);
  }
})();
/**
 * @vue/shared v3.5.19
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Xr(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ee = {},
  Bt = [],
  Ke = () => {},
  go = () => !1,
  Kn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Yr = (e) => e.startsWith("onUpdate:"),
  he = Object.assign,
  Qr = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  hl = Object.prototype.hasOwnProperty,
  Z = (e, t) => hl.call(e, t),
  $ = Array.isArray,
  Ut = (e) => Gn(e) === "[object Map]",
  bo = (e) => Gn(e) === "[object Set]",
  z = (e) => typeof e == "function",
  ie = (e) => typeof e == "string",
  mt = (e) => typeof e == "symbol",
  re = (e) => e !== null && typeof e == "object",
  yo = (e) => (re(e) || z(e)) && z(e.then) && z(e.catch),
  wo = Object.prototype.toString,
  Gn = (e) => wo.call(e),
  ml = (e) => Gn(e).slice(8, -1),
  xo = (e) => Gn(e) === "[object Object]",
  es = (e) =>
    ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  nn = Xr(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Jn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  gl = /-(\w)/g,
  dt = Jn((e) => e.replace(gl, (t, n) => (n ? n.toUpperCase() : ""))),
  bl = /\B([A-Z])/g,
  Lt = Jn((e) => e.replace(bl, "-$1").toLowerCase()),
  vo = Jn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  ur = Jn((e) => (e ? `on${vo(e)}` : "")),
  ft = (e, t) => !Object.is(e, t),
  fr = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  _o = (e, t, n, r = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: r,
      value: n,
    });
  },
  yl = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let Cs;
const Zn = () =>
  Cs ||
  (Cs =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function Xn(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = ie(r) ? _l(r) : Xn(r);
      if (s) for (const o in s) t[o] = s[o];
    }
    return t;
  } else if (ie(e) || re(e)) return e;
}
const wl = /;(?![^(]*\))/g,
  xl = /:([^]+)/,
  vl = /\/\*[^]*?\*\//g;
function _l(e) {
  const t = {};
  return (
    e
      .replace(vl, "")
      .split(wl)
      .forEach((n) => {
        if (n) {
          const r = n.split(xl);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function Vt(e) {
  let t = "";
  if (ie(e)) t = e;
  else if ($(e))
    for (let n = 0; n < e.length; n++) {
      const r = Vt(e[n]);
      r && (t += r + " ");
    }
  else if (re(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Cl =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Sl = Xr(Cl);
function Co(e) {
  return !!e || e === "";
}
const So = (e) => !!(e && e.__v_isRef === !0),
  Eo = (e) =>
    ie(e)
      ? e
      : e == null
      ? ""
      : $(e) || (re(e) && (e.toString === wo || !z(e.toString)))
      ? So(e)
        ? Eo(e.value)
        : JSON.stringify(e, To, 2)
      : String(e),
  To = (e, t) =>
    So(t)
      ? To(e, t.value)
      : Ut(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, s], o) => ((n[dr(r, o) + " =>"] = s), n),
            {}
          ),
        }
      : bo(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => dr(n)) }
      : mt(t)
      ? dr(t)
      : re(t) && !$(t) && !xo(t)
      ? String(t)
      : t,
  dr = (e, t = "") => {
    var n;
    return mt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.5.19
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ce;
class El {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this._on = 0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = Ce),
      !t && Ce && (this.index = (Ce.scopes || (Ce.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Ce;
      try {
        return (Ce = this), t();
      } finally {
        Ce = n;
      }
    }
  }
  on() {
    ++this._on === 1 && ((this.prevScope = Ce), (Ce = this));
  }
  off() {
    this._on > 0 &&
      --this._on === 0 &&
      ((Ce = this.prevScope), (this.prevScope = void 0));
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function Tl() {
  return Ce;
}
let Q;
const pr = new WeakSet();
class Ro {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      Ce && Ce.active && Ce.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), pr.has(this) && (pr.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Ao(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), Ss(this), ko(this);
    const t = Q,
      n = Me;
    (Q = this), (Me = !0);
    try {
      return this.fn();
    } finally {
      Po(this), (Q = t), (Me = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) rs(t);
      (this.deps = this.depsTail = void 0),
        Ss(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64
      ? pr.add(this)
      : this.scheduler
      ? this.scheduler()
      : this.runIfDirty();
  }
  runIfDirty() {
    Or(this) && this.run();
  }
  get dirty() {
    return Or(this);
  }
}
let Oo = 0,
  rn,
  sn;
function Ao(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = sn), (sn = e);
    return;
  }
  (e.next = rn), (rn = e);
}
function ts() {
  Oo++;
}
function ns() {
  if (--Oo > 0) return;
  if (sn) {
    let t = sn;
    for (sn = void 0; t; ) {
      const n = t.next;
      (t.next = void 0), (t.flags &= -9), (t = n);
    }
  }
  let e;
  for (; rn; ) {
    let t = rn;
    for (rn = void 0; t; ) {
      const n = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function ko(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t);
}
function Po(e) {
  let t,
    n = e.depsTail,
    r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), rs(r), Rl(r)) : (t = r),
      (r.dep.activeLink = r.prevActiveLink),
      (r.prevActiveLink = void 0),
      (r = s);
  }
  (e.deps = t), (e.depsTail = n);
}
function Or(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Lo(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function Lo(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === fn) ||
    ((e.globalVersion = fn),
    !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !Or(e)))
  )
    return;
  e.flags |= 2;
  const t = e.dep,
    n = Q,
    r = Me;
  (Q = e), (Me = !0);
  try {
    ko(e);
    const s = e.fn(e._value);
    (t.version === 0 || ft(s, e._value)) &&
      ((e.flags |= 128), (e._value = s), t.version++);
  } catch (s) {
    throw (t.version++, s);
  } finally {
    (Q = n), (Me = r), Po(e), (e.flags &= -3);
  }
}
function rs(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (
    (r && ((r.nextSub = s), (e.prevSub = void 0)),
    s && ((s.prevSub = r), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = r), !r && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep) rs(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Rl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0));
}
let Me = !0;
const Mo = [];
function nt() {
  Mo.push(Me), (Me = !1);
}
function rt() {
  const e = Mo.pop();
  Me = e === void 0 ? !0 : e;
}
function Ss(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = Q;
    Q = void 0;
    try {
      t();
    } finally {
      Q = n;
    }
  }
}
let fn = 0;
class Ol {
  constructor(t, n) {
    (this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0);
  }
}
class ss {
  constructor(t) {
    (this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0),
      (this.__v_skip = !0);
  }
  track(t) {
    if (!Q || !Me || Q === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Q)
      (n = this.activeLink = new Ol(Q, this)),
        Q.deps
          ? ((n.prevDep = Q.depsTail),
            (Q.depsTail.nextDep = n),
            (Q.depsTail = n))
          : (Q.deps = Q.depsTail = n),
        No(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const r = n.nextDep;
      (r.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = r),
        (n.prevDep = Q.depsTail),
        (n.nextDep = void 0),
        (Q.depsTail.nextDep = n),
        (Q.depsTail = n),
        Q.deps === n && (Q.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, fn++, this.notify(t);
  }
  notify(t) {
    ts();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ns();
    }
  }
}
function No(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) No(r);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const Ar = new WeakMap(),
  Ot = Symbol(""),
  kr = Symbol(""),
  dn = Symbol("");
function ue(e, t, n) {
  if (Me && Q) {
    let r = Ar.get(e);
    r || Ar.set(e, (r = new Map()));
    let s = r.get(n);
    s || (r.set(n, (s = new ss())), (s.map = r), (s.key = n)), s.track();
  }
}
function et(e, t, n, r, s, o) {
  const i = Ar.get(e);
  if (!i) {
    fn++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if ((ts(), t === "clear")) i.forEach(l);
  else {
    const a = $(e),
      u = a && es(n);
    if (a && n === "length") {
      const c = Number(r);
      i.forEach((p, h) => {
        (h === "length" || h === dn || (!mt(h) && h >= c)) && l(p);
      });
    } else
      switch (
        ((n !== void 0 || i.has(void 0)) && l(i.get(n)), u && l(i.get(dn)), t)
      ) {
        case "add":
          a ? u && l(i.get("length")) : (l(i.get(Ot)), Ut(e) && l(i.get(kr)));
          break;
        case "delete":
          a || (l(i.get(Ot)), Ut(e) && l(i.get(kr)));
          break;
        case "set":
          Ut(e) && l(i.get(Ot));
          break;
      }
  }
  ns();
}
function Ft(e) {
  const t = J(e);
  return t === e ? t : (ue(t, "iterate", dn), Pe(e) ? t : t.map(ce));
}
function Yn(e) {
  return ue((e = J(e)), "iterate", dn), e;
}
const Al = {
  __proto__: null,
  [Symbol.iterator]() {
    return hr(this, Symbol.iterator, ce);
  },
  concat(...e) {
    return Ft(this).concat(...e.map((t) => ($(t) ? Ft(t) : t)));
  },
  entries() {
    return hr(this, "entries", (e) => ((e[1] = ce(e[1])), e));
  },
  every(e, t) {
    return Xe(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Xe(this, "filter", e, t, (n) => n.map(ce), arguments);
  },
  find(e, t) {
    return Xe(this, "find", e, t, ce, arguments);
  },
  findIndex(e, t) {
    return Xe(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Xe(this, "findLast", e, t, ce, arguments);
  },
  findLastIndex(e, t) {
    return Xe(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return Xe(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return mr(this, "includes", e);
  },
  indexOf(...e) {
    return mr(this, "indexOf", e);
  },
  join(e) {
    return Ft(this).join(e);
  },
  lastIndexOf(...e) {
    return mr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Xe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Xt(this, "pop");
  },
  push(...e) {
    return Xt(this, "push", e);
  },
  reduce(e, ...t) {
    return Es(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Es(this, "reduceRight", e, t);
  },
  shift() {
    return Xt(this, "shift");
  },
  some(e, t) {
    return Xe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Xt(this, "splice", e);
  },
  toReversed() {
    return Ft(this).toReversed();
  },
  toSorted(e) {
    return Ft(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ft(this).toSpliced(...e);
  },
  unshift(...e) {
    return Xt(this, "unshift", e);
  },
  values() {
    return hr(this, "values", ce);
  },
};
function hr(e, t, n) {
  const r = Yn(e),
    s = r[t]();
  return (
    r !== e &&
      !Pe(e) &&
      ((s._next = s.next),
      (s.next = () => {
        const o = s._next();
        return o.value && (o.value = n(o.value)), o;
      })),
    s
  );
}
const kl = Array.prototype;
function Xe(e, t, n, r, s, o) {
  const i = Yn(e),
    l = i !== e && !Pe(e),
    a = i[t];
  if (a !== kl[t]) {
    const p = a.apply(e, o);
    return l ? ce(p) : p;
  }
  let u = n;
  i !== e &&
    (l
      ? (u = function (p, h) {
          return n.call(this, ce(p), h, e);
        })
      : n.length > 2 &&
        (u = function (p, h) {
          return n.call(this, p, h, e);
        }));
  const c = a.call(i, u, r);
  return l && s ? s(c) : c;
}
function Es(e, t, n, r) {
  const s = Yn(e);
  let o = n;
  return (
    s !== e &&
      (Pe(e)
        ? n.length > 3 &&
          (o = function (i, l, a) {
            return n.call(this, i, l, a, e);
          })
        : (o = function (i, l, a) {
            return n.call(this, i, ce(l), a, e);
          })),
    s[t](o, ...r)
  );
}
function mr(e, t, n) {
  const r = J(e);
  ue(r, "iterate", dn);
  const s = r[t](...n);
  return (s === -1 || s === !1) && as(n[0])
    ? ((n[0] = J(n[0])), r[t](...n))
    : s;
}
function Xt(e, t, n = []) {
  nt(), ts();
  const r = J(e)[t].apply(e, n);
  return ns(), rt(), r;
}
const Pl = Xr("__proto__,__v_isRef,__isVue"),
  Io = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(mt)
  );
function Ll(e) {
  mt(e) || (e = String(e));
  const t = J(this);
  return ue(t, "has", e), t.hasOwnProperty(e);
}
class Fo {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly,
      o = this._isShallow;
    if (n === "__v_isReactive") return !s;
    if (n === "__v_isReadonly") return s;
    if (n === "__v_isShallow") return o;
    if (n === "__v_raw")
      return r === (s ? (o ? Hl : Uo) : o ? Bo : jo).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0;
    const i = $(t);
    if (!s) {
      let a;
      if (i && (a = Al[n])) return a;
      if (n === "hasOwnProperty") return Ll;
    }
    const l = Reflect.get(t, n, de(t) ? t : r);
    return (mt(n) ? Io.has(n) : Pl(n)) || (s || ue(t, "get", n), o)
      ? l
      : de(l)
      ? i && es(n)
        ? l
        : l.value
      : re(l)
      ? s
        ? $o(l)
        : is(l)
      : l;
  }
}
class Do extends Fo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._isShallow) {
      const a = pt(o);
      if (
        (!Pe(r) && !pt(r) && ((o = J(o)), (r = J(r))), !$(t) && de(o) && !de(r))
      )
        return a || (o.value = r), !0;
    }
    const i = $(t) && es(n) ? Number(n) < t.length : Z(t, n),
      l = Reflect.set(t, n, r, de(t) ? t : s);
    return (
      t === J(s) && (i ? ft(r, o) && et(t, "set", n, r) : et(t, "add", n, r)), l
    );
  }
  deleteProperty(t, n) {
    const r = Z(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && et(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!mt(n) || !Io.has(n)) && ue(t, "has", n), r;
  }
  ownKeys(t) {
    return ue(t, "iterate", $(t) ? "length" : Ot), Reflect.ownKeys(t);
  }
}
class Ml extends Fo {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Nl = new Do(),
  Il = new Ml(),
  Fl = new Do(!0);
const Pr = (e) => e,
  Rn = (e) => Reflect.getPrototypeOf(e);
function Dl(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      o = J(s),
      i = Ut(o),
      l = e === "entries" || (e === Symbol.iterator && i),
      a = e === "keys" && i,
      u = s[e](...r),
      c = n ? Pr : t ? Bn : ce;
    return (
      !t && ue(o, "iterate", a ? kr : Ot),
      {
        next() {
          const { value: p, done: h } = u.next();
          return h
            ? { value: p, done: h }
            : { value: l ? [c(p[0]), c(p[1])] : c(p), done: h };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function On(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function jl(e, t) {
  const n = {
    get(s) {
      const o = this.__v_raw,
        i = J(o),
        l = J(s);
      e || (ft(s, l) && ue(i, "get", s), ue(i, "get", l));
      const { has: a } = Rn(i),
        u = t ? Pr : e ? Bn : ce;
      if (a.call(i, s)) return u(o.get(s));
      if (a.call(i, l)) return u(o.get(l));
      o !== i && o.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && ue(J(s), "iterate", Ot), Reflect.get(s, "size", s);
    },
    has(s) {
      const o = this.__v_raw,
        i = J(o),
        l = J(s);
      return (
        e || (ft(s, l) && ue(i, "has", s), ue(i, "has", l)),
        s === l ? o.has(s) : o.has(s) || o.has(l)
      );
    },
    forEach(s, o) {
      const i = this,
        l = i.__v_raw,
        a = J(l),
        u = t ? Pr : e ? Bn : ce;
      return (
        !e && ue(a, "iterate", Ot),
        l.forEach((c, p) => s.call(o, u(c), u(p), i))
      );
    },
  };
  return (
    he(
      n,
      e
        ? {
            add: On("add"),
            set: On("set"),
            delete: On("delete"),
            clear: On("clear"),
          }
        : {
            add(s) {
              !t && !Pe(s) && !pt(s) && (s = J(s));
              const o = J(this);
              return (
                Rn(o).has.call(o, s) || (o.add(s), et(o, "add", s, s)), this
              );
            },
            set(s, o) {
              !t && !Pe(o) && !pt(o) && (o = J(o));
              const i = J(this),
                { has: l, get: a } = Rn(i);
              let u = l.call(i, s);
              u || ((s = J(s)), (u = l.call(i, s)));
              const c = a.call(i, s);
              return (
                i.set(s, o),
                u ? ft(o, c) && et(i, "set", s, o) : et(i, "add", s, o),
                this
              );
            },
            delete(s) {
              const o = J(this),
                { has: i, get: l } = Rn(o);
              let a = i.call(o, s);
              a || ((s = J(s)), (a = i.call(o, s))), l && l.call(o, s);
              const u = o.delete(s);
              return a && et(o, "delete", s, void 0), u;
            },
            clear() {
              const s = J(this),
                o = s.size !== 0,
                i = s.clear();
              return o && et(s, "clear", void 0, void 0), i;
            },
          }
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
      n[s] = Dl(s, e, t);
    }),
    n
  );
}
function os(e, t) {
  const n = jl(e, t);
  return (r, s, o) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
      ? e
      : s === "__v_raw"
      ? r
      : Reflect.get(Z(n, s) && s in r ? n : r, s, o);
}
const Bl = { get: os(!1, !1) },
  Ul = { get: os(!1, !0) },
  $l = { get: os(!0, !1) };
const jo = new WeakMap(),
  Bo = new WeakMap(),
  Uo = new WeakMap(),
  Hl = new WeakMap();
function zl(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Vl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : zl(ml(e));
}
function is(e) {
  return pt(e) ? e : ls(e, !1, Nl, Bl, jo);
}
function ql(e) {
  return ls(e, !1, Fl, Ul, Bo);
}
function $o(e) {
  return ls(e, !0, Il, $l, Uo);
}
function ls(e, t, n, r, s) {
  if (!re(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = Vl(e);
  if (o === 0) return e;
  const i = s.get(e);
  if (i) return i;
  const l = new Proxy(e, o === 2 ? r : n);
  return s.set(e, l), l;
}
function $t(e) {
  return pt(e) ? $t(e.__v_raw) : !!(e && e.__v_isReactive);
}
function pt(e) {
  return !!(e && e.__v_isReadonly);
}
function Pe(e) {
  return !!(e && e.__v_isShallow);
}
function as(e) {
  return e ? !!e.__v_raw : !1;
}
function J(e) {
  const t = e && e.__v_raw;
  return t ? J(t) : e;
}
function Wl(e) {
  return (
    !Z(e, "__v_skip") && Object.isExtensible(e) && _o(e, "__v_skip", !0), e
  );
}
const ce = (e) => (re(e) ? is(e) : e),
  Bn = (e) => (re(e) ? $o(e) : e);
function de(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Le(e) {
  return Kl(e, !1);
}
function Kl(e, t) {
  return de(e) ? e : new Gl(e, t);
}
class Gl {
  constructor(t, n) {
    (this.dep = new ss()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : J(t)),
      (this._value = n ? t : ce(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      r = this.__v_isShallow || Pe(t) || pt(t);
    (t = r ? t : J(t)),
      ft(t, n) &&
        ((this._rawValue = t),
        (this._value = r ? t : ce(t)),
        this.dep.trigger());
  }
}
function Ho(e) {
  return de(e) ? e.value : e;
}
const Jl = {
  get: (e, t, n) => (t === "__v_raw" ? e : Ho(Reflect.get(e, t, n))),
  set: (e, t, n, r) => {
    const s = e[t];
    return de(s) && !de(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function zo(e) {
  return $t(e) ? e : new Proxy(e, Jl);
}
class Zl {
  constructor(t, n, r) {
    (this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new ss(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = fn - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = r);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && Q !== this))
      return Ao(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Lo(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Xl(e, t, n = !1) {
  let r, s;
  return z(e) ? (r = e) : ((r = e.get), (s = e.set)), new Zl(r, s, n);
}
const An = {},
  Un = new WeakMap();
let St;
function Yl(e, t = !1, n = St) {
  if (n) {
    let r = Un.get(n);
    r || Un.set(n, (r = [])), r.push(e);
  }
}
function Ql(e, t, n = ee) {
  const {
      immediate: r,
      deep: s,
      once: o,
      scheduler: i,
      augmentJob: l,
      call: a,
    } = n,
    u = (A) => (s ? A : Pe(A) || s === !1 || s === 0 ? ut(A, 1) : ut(A));
  let c,
    p,
    h,
    x,
    m = !1,
    g = !1;
  if (
    (de(e)
      ? ((p = () => e.value), (m = Pe(e)))
      : $t(e)
      ? ((p = () => u(e)), (m = !0))
      : $(e)
      ? ((g = !0),
        (m = e.some((A) => $t(A) || Pe(A))),
        (p = () =>
          e.map((A) => {
            if (de(A)) return A.value;
            if ($t(A)) return u(A);
            if (z(A)) return a ? a(A, 2) : A();
          })))
      : z(e)
      ? t
        ? (p = a ? () => a(e, 2) : e)
        : (p = () => {
            if (h) {
              nt();
              try {
                h();
              } finally {
                rt();
              }
            }
            const A = St;
            St = c;
            try {
              return a ? a(e, 3, [x]) : e(x);
            } finally {
              St = A;
            }
          })
      : (p = Ke),
    t && s)
  ) {
    const A = p,
      B = s === !0 ? 1 / 0 : s;
    p = () => ut(A(), B);
  }
  const b = Tl(),
    E = () => {
      c.stop(), b && b.active && Qr(b.effects, c);
    };
  if (o && t) {
    const A = t;
    t = (...B) => {
      A(...B), E();
    };
  }
  let O = g ? new Array(e.length).fill(An) : An;
  const M = (A) => {
    if (!(!(c.flags & 1) || (!c.dirty && !A)))
      if (t) {
        const B = c.run();
        if (s || m || (g ? B.some((q, K) => ft(q, O[K])) : ft(B, O))) {
          h && h();
          const q = St;
          St = c;
          try {
            const K = [B, O === An ? void 0 : g && O[0] === An ? [] : O, x];
            (O = B), a ? a(t, 3, K) : t(...K);
          } finally {
            St = q;
          }
        }
      } else c.run();
  };
  return (
    l && l(M),
    (c = new Ro(p)),
    (c.scheduler = i ? () => i(M, !1) : M),
    (x = (A) => Yl(A, !1, c)),
    (h = c.onStop =
      () => {
        const A = Un.get(c);
        if (A) {
          if (a) a(A, 4);
          else for (const B of A) B();
          Un.delete(c);
        }
      }),
    t ? (r ? M(!0) : (O = c.run())) : i ? i(M.bind(null, !0), !0) : c.run(),
    (E.pause = c.pause.bind(c)),
    (E.resume = c.resume.bind(c)),
    (E.stop = E),
    E
  );
}
function ut(e, t = 1 / 0, n) {
  if (t <= 0 || !re(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e;
  if ((n.add(e), t--, de(e))) ut(e.value, t, n);
  else if ($(e)) for (let r = 0; r < e.length; r++) ut(e[r], t, n);
  else if (bo(e) || Ut(e))
    e.forEach((r) => {
      ut(r, t, n);
    });
  else if (xo(e)) {
    for (const r in e) ut(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && ut(e[r], t, n);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.19
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function yn(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Qn(s, t, n);
  }
}
function Ge(e, t, n, r) {
  if (z(e)) {
    const s = yn(e, t, n, r);
    return (
      s &&
        yo(s) &&
        s.catch((o) => {
          Qn(o, t, n);
        }),
      s
    );
  }
  if ($(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++) s.push(Ge(e[o], t, n, r));
    return s;
  }
}
function Qn(e, t, n, r = !0) {
  const s = t ? t.vnode : null,
    { errorHandler: o, throwUnhandledErrorInProduction: i } =
      (t && t.appContext.config) || ee;
  if (t) {
    let l = t.parent;
    const a = t.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const c = l.ec;
      if (c) {
        for (let p = 0; p < c.length; p++) if (c[p](e, a, u) === !1) return;
      }
      l = l.parent;
    }
    if (o) {
      nt(), yn(o, null, 10, [e, a, u]), rt();
      return;
    }
  }
  ea(e, n, s, r, i);
}
function ea(e, t, n, r = !0, s = !1) {
  if (s) throw e;
  console.error(e);
}
const be = [];
let ze = -1;
const Ht = [];
let at = null,
  jt = 0;
const Vo = Promise.resolve();
let $n = null;
function ta(e) {
  const t = $n || Vo;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function na(e) {
  let t = ze + 1,
    n = be.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      s = be[r],
      o = pn(s);
    o < e || (o === e && s.flags & 2) ? (t = r + 1) : (n = r);
  }
  return t;
}
function cs(e) {
  if (!(e.flags & 1)) {
    const t = pn(e),
      n = be[be.length - 1];
    !n || (!(e.flags & 2) && t >= pn(n)) ? be.push(e) : be.splice(na(t), 0, e),
      (e.flags |= 1),
      qo();
  }
}
function qo() {
  $n || ($n = Vo.then(Ko));
}
function ra(e) {
  $(e)
    ? Ht.push(...e)
    : at && e.id === -1
    ? at.splice(jt + 1, 0, e)
    : e.flags & 1 || (Ht.push(e), (e.flags |= 1)),
    qo();
}
function Ts(e, t, n = ze + 1) {
  for (; n < be.length; n++) {
    const r = be[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid) continue;
      be.splice(n, 1),
        n--,
        r.flags & 4 && (r.flags &= -2),
        r(),
        r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Wo(e) {
  if (Ht.length) {
    const t = [...new Set(Ht)].sort((n, r) => pn(n) - pn(r));
    if (((Ht.length = 0), at)) {
      at.push(...t);
      return;
    }
    for (at = t, jt = 0; jt < at.length; jt++) {
      const n = at[jt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (at = null), (jt = 0);
  }
}
const pn = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function Ko(e) {
  try {
    for (ze = 0; ze < be.length; ze++) {
      const t = be[ze];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        yn(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ze < be.length; ze++) {
      const t = be[ze];
      t && (t.flags &= -2);
    }
    (ze = -1),
      (be.length = 0),
      Wo(),
      ($n = null),
      (be.length || Ht.length) && Ko();
  }
}
let We = null,
  Go = null;
function Hn(e) {
  const t = We;
  return (We = e), (Go = (e && e.type.__scopeId) || null), t;
}
function sa(e, t = We, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && Is(-1);
    const o = Hn(t);
    let i;
    try {
      i = e(...s);
    } finally {
      Hn(o), r._d && Is(1);
    }
    return i;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function vt(e, t, n, r) {
  const s = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    o && (l.oldValue = o[i].value);
    let a = l.dir[r];
    a && (nt(), Ge(a, n, 8, [e.el, l, e, t]), rt());
  }
}
const oa = Symbol("_vte"),
  ia = (e) => e.__isTeleport,
  la = Symbol("_leaveCb");
function us(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), us(e.component.subTree, t))
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
/*! #__NO_SIDE_EFFECTS__ */ function gt(e, t) {
  return z(e) ? he({ name: e.name }, t, { setup: e }) : e;
}
function Jo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function on(e, t, n, r, s = !1) {
  if ($(e)) {
    e.forEach((m, g) => on(m, t && ($(t) ? t[g] : t), n, r, s));
    return;
  }
  if (ln(r) && !s) {
    r.shapeFlag & 512 &&
      r.type.__asyncResolved &&
      r.component.subTree.component &&
      on(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? hs(r.component) : r.el,
    i = s ? null : o,
    { i: l, r: a } = e,
    u = t && t.r,
    c = l.refs === ee ? (l.refs = {}) : l.refs,
    p = l.setupState,
    h = J(p),
    x = p === ee ? go : (m) => Z(h, m);
  if (u != null && u !== a) {
    if (ie(u)) (c[u] = null), x(u) && (p[u] = null);
    else if (de(u)) {
      u.value = null;
      const m = t;
      m.k && (c[m.k] = null);
    }
  }
  if (z(a)) yn(a, l, 12, [i, c]);
  else {
    const m = ie(a),
      g = de(a);
    if (m || g) {
      const b = () => {
        if (e.f) {
          const E = m ? (x(a) ? p[a] : c[a]) : a.value;
          if (s) $(E) && Qr(E, o);
          else if ($(E)) E.includes(o) || E.push(o);
          else if (m) (c[a] = [o]), x(a) && (p[a] = c[a]);
          else {
            const O = [o];
            (a.value = O), e.k && (c[e.k] = O);
          }
        } else
          m
            ? ((c[a] = i), x(a) && (p[a] = i))
            : g && ((a.value = i), e.k && (c[e.k] = i));
      };
      i ? ((b.id = -1), Re(b, n)) : b();
    }
  }
}
Zn().requestIdleCallback;
Zn().cancelIdleCallback;
const ln = (e) => !!e.type.__asyncLoader,
  Zo = (e) => e.type.__isKeepAlive;
function aa(e, t) {
  Xo(e, "a", t);
}
function ca(e, t) {
  Xo(e, "da", t);
}
function Xo(e, t, n = ye) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
  if ((er(t, r, n), n)) {
    let s = n.parent;
    for (; s && s.parent; )
      Zo(s.parent.vnode) && ua(r, t, n, s), (s = s.parent);
  }
}
function ua(e, t, n, r) {
  const s = er(t, e, r, !0);
  wn(() => {
    Qr(r[t], s);
  }, n);
}
function er(e, t, n = ye, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          nt();
          const l = xn(n),
            a = Ge(t, n, e, i);
          return l(), rt(), a;
        });
    return r ? s.unshift(o) : s.push(o), o;
  }
}
const st =
    (e) =>
    (t, n = ye) => {
      (!gn || e === "sp") && er(e, (...r) => t(...r), n);
    },
  fa = st("bm"),
  Mt = st("m"),
  da = st("bu"),
  pa = st("u"),
  Yo = st("bum"),
  wn = st("um"),
  ha = st("sp"),
  ma = st("rtg"),
  ga = st("rtc");
function ba(e, t = ye) {
  er("ec", e, t);
}
const ya = Symbol.for("v-ndc");
function wa(e, t, n, r) {
  let s;
  const o = n,
    i = $(e);
  if (i || ie(e)) {
    const l = i && $t(e);
    let a = !1,
      u = !1;
    l && ((a = !Pe(e)), (u = pt(e)), (e = Yn(e))), (s = new Array(e.length));
    for (let c = 0, p = e.length; c < p; c++)
      s[c] = t(a ? (u ? Bn(ce(e[c])) : ce(e[c])) : e[c], c, void 0, o);
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let l = 0; l < e; l++) s[l] = t(l + 1, l, void 0, o);
  } else if (re(e))
    if (e[Symbol.iterator]) s = Array.from(e, (l, a) => t(l, a, void 0, o));
    else {
      const l = Object.keys(e);
      s = new Array(l.length);
      for (let a = 0, u = l.length; a < u; a++) {
        const c = l[a];
        s[a] = t(e[c], c, a, o);
      }
    }
  else s = [];
  return s;
}
const Lr = (e) => (e ? (vi(e) ? hs(e) : Lr(e.parent)) : null),
  an = he(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Lr(e.parent),
    $root: (e) => Lr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ei(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        cs(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = ta.bind(e.proxy)),
    $watch: (e) => $a.bind(e),
  }),
  gr = (e, t) => e !== ee && !e.__isScriptSetup && Z(e, t),
  xa = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: o,
        accessCache: i,
        type: l,
        appContext: a,
      } = e;
      let u;
      if (t[0] !== "$") {
        const x = i[t];
        if (x !== void 0)
          switch (x) {
            case 1:
              return r[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (gr(r, t)) return (i[t] = 1), r[t];
          if (s !== ee && Z(s, t)) return (i[t] = 2), s[t];
          if ((u = e.propsOptions[0]) && Z(u, t)) return (i[t] = 3), o[t];
          if (n !== ee && Z(n, t)) return (i[t] = 4), n[t];
          Mr && (i[t] = 0);
        }
      }
      const c = an[t];
      let p, h;
      if (c) return t === "$attrs" && ue(e.attrs, "get", ""), c(e);
      if ((p = l.__cssModules) && (p = p[t])) return p;
      if (n !== ee && Z(n, t)) return (i[t] = 4), n[t];
      if (((h = a.config.globalProperties), Z(h, t))) return h[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: o } = e;
      return gr(s, t)
        ? ((s[t] = n), !0)
        : r !== ee && Z(r, t)
        ? ((r[t] = n), !0)
        : Z(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((o[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: s,
          propsOptions: o,
          type: i,
        },
      },
      l
    ) {
      let a, u;
      return !!(
        n[l] ||
        (e !== ee && l[0] !== "$" && Z(e, l)) ||
        gr(t, l) ||
        ((a = o[0]) && Z(a, l)) ||
        Z(r, l) ||
        Z(an, l) ||
        Z(s.config.globalProperties, l) ||
        ((u = i.__cssModules) && u[l])
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : Z(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function Rs(e) {
  return $(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let Mr = !0;
function va(e) {
  const t = ei(e),
    n = e.proxy,
    r = e.ctx;
  (Mr = !1), t.beforeCreate && Os(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: o,
    methods: i,
    watch: l,
    provide: a,
    inject: u,
    created: c,
    beforeMount: p,
    mounted: h,
    beforeUpdate: x,
    updated: m,
    activated: g,
    deactivated: b,
    beforeDestroy: E,
    beforeUnmount: O,
    destroyed: M,
    unmounted: A,
    render: B,
    renderTracked: q,
    renderTriggered: K,
    errorCaptured: F,
    serverPrefetch: oe,
    expose: we,
    inheritAttrs: ot,
    components: Je,
    directives: bt,
    filters: yt,
  } = t;
  if ((u && _a(u, r, null), i))
    for (const G in i) {
      const k = i[G];
      z(k) && (r[G] = k.bind(n));
    }
  if (s) {
    const G = s.call(n, n);
    re(G) && (e.data = is(G));
  }
  if (((Mr = !0), o))
    for (const G in o) {
      const k = o[G],
        Ie = z(k) ? k.bind(n, n) : z(k.get) ? k.get.bind(n, n) : Ke,
        wt = !z(k) && z(k.set) ? k.set.bind(n) : Ke,
        Fe = Dr({ get: Ie, set: wt });
      Object.defineProperty(r, G, {
        enumerable: !0,
        configurable: !0,
        get: () => Fe.value,
        set: (xe) => (Fe.value = xe),
      });
    }
  if (l) for (const G in l) Qo(l[G], r, n, G);
  if (a) {
    const G = z(a) ? a.call(n) : a;
    Reflect.ownKeys(G).forEach((k) => {
      Oa(k, G[k]);
    });
  }
  c && Os(c, e, "c");
  function te(G, k) {
    $(k) ? k.forEach((Ie) => G(Ie.bind(n))) : k && G(k.bind(n));
  }
  if (
    (te(fa, p),
    te(Mt, h),
    te(da, x),
    te(pa, m),
    te(aa, g),
    te(ca, b),
    te(ba, F),
    te(ga, q),
    te(ma, K),
    te(Yo, O),
    te(wn, A),
    te(ha, oe),
    $(we))
  )
    if (we.length) {
      const G = e.exposed || (e.exposed = {});
      we.forEach((k) => {
        Object.defineProperty(G, k, {
          get: () => n[k],
          set: (Ie) => (n[k] = Ie),
          enumerable: !0,
        });
      });
    } else e.exposed || (e.exposed = {});
  B && e.render === Ke && (e.render = B),
    ot != null && (e.inheritAttrs = ot),
    Je && (e.components = Je),
    bt && (e.directives = bt),
    oe && Jo(e);
}
function _a(e, t, n = Ke) {
  $(e) && (e = Nr(e));
  for (const r in e) {
    const s = e[r];
    let o;
    re(s)
      ? "default" in s
        ? (o = Ln(s.from || r, s.default, !0))
        : (o = Ln(s.from || r))
      : (o = Ln(s)),
      de(o)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i),
          })
        : (t[r] = o);
  }
}
function Os(e, t, n) {
  Ge($(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Qo(e, t, n, r) {
  let s = r.includes(".") ? pi(n, r) : () => n[r];
  if (ie(e)) {
    const o = t[e];
    z(o) && yr(s, o);
  } else if (z(e)) yr(s, e.bind(n));
  else if (re(e))
    if ($(e)) e.forEach((o) => Qo(o, t, n, r));
    else {
      const o = z(e.handler) ? e.handler.bind(n) : t[e.handler];
      z(o) && yr(s, o, e);
    }
}
function ei(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: s,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    l = o.get(t);
  let a;
  return (
    l
      ? (a = l)
      : !s.length && !n && !r
      ? (a = t)
      : ((a = {}), s.length && s.forEach((u) => zn(a, u, i, !0)), zn(a, t, i)),
    re(t) && o.set(t, a),
    a
  );
}
function zn(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && zn(e, o, n, !0), s && s.forEach((i) => zn(e, i, n, !0));
  for (const i in t)
    if (!(r && i === "expose")) {
      const l = Ca[i] || (n && n[i]);
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Ca = {
  data: As,
  props: ks,
  emits: ks,
  methods: tn,
  computed: tn,
  beforeCreate: ge,
  created: ge,
  beforeMount: ge,
  mounted: ge,
  beforeUpdate: ge,
  updated: ge,
  beforeDestroy: ge,
  beforeUnmount: ge,
  destroyed: ge,
  unmounted: ge,
  activated: ge,
  deactivated: ge,
  errorCaptured: ge,
  serverPrefetch: ge,
  components: tn,
  directives: tn,
  watch: Ea,
  provide: As,
  inject: Sa,
};
function As(e, t) {
  return t
    ? e
      ? function () {
          return he(
            z(e) ? e.call(this, this) : e,
            z(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Sa(e, t) {
  return tn(Nr(e), Nr(t));
}
function Nr(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ge(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function tn(e, t) {
  return e ? he(Object.create(null), e, t) : t;
}
function ks(e, t) {
  return e
    ? $(e) && $(t)
      ? [...new Set([...e, ...t])]
      : he(Object.create(null), Rs(e), Rs(t ?? {}))
    : t;
}
function Ea(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = he(Object.create(null), e);
  for (const r in t) n[r] = ge(e[r], t[r]);
  return n;
}
function ti() {
  return {
    app: null,
    config: {
      isNativeTag: go,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Ta = 0;
function Ra(e, t) {
  return function (r, s = null) {
    z(r) || (r = he({}, r)), s != null && !re(s) && (s = null);
    const o = ti(),
      i = new WeakSet(),
      l = [];
    let a = !1;
    const u = (o.app = {
      _uid: Ta++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: uc,
      get config() {
        return o.config;
      },
      set config(c) {},
      use(c, ...p) {
        return (
          i.has(c) ||
            (c && z(c.install)
              ? (i.add(c), c.install(u, ...p))
              : z(c) && (i.add(c), c(u, ...p))),
          u
        );
      },
      mixin(c) {
        return o.mixins.includes(c) || o.mixins.push(c), u;
      },
      component(c, p) {
        return p ? ((o.components[c] = p), u) : o.components[c];
      },
      directive(c, p) {
        return p ? ((o.directives[c] = p), u) : o.directives[c];
      },
      mount(c, p, h) {
        if (!a) {
          const x = u._ceVNode || pe(r, s);
          return (
            (x.appContext = o),
            h === !0 ? (h = "svg") : h === !1 && (h = void 0),
            e(x, c, h),
            (a = !0),
            (u._container = c),
            (c.__vue_app__ = u),
            hs(x.component)
          );
        }
      },
      onUnmount(c) {
        l.push(c);
      },
      unmount() {
        a &&
          (Ge(l, u._instance, 16),
          e(null, u._container),
          delete u._container.__vue_app__);
      },
      provide(c, p) {
        return (o.provides[c] = p), u;
      },
      runWithContext(c) {
        const p = zt;
        zt = u;
        try {
          return c();
        } finally {
          zt = p;
        }
      },
    });
    return u;
  };
}
let zt = null;
function Oa(e, t) {
  if (ye) {
    let n = ye.provides;
    const r = ye.parent && ye.parent.provides;
    r === n && (n = ye.provides = Object.create(r)), (n[e] = t);
  }
}
function Ln(e, t, n = !1) {
  const r = sc();
  if (r || zt) {
    let s = zt
      ? zt._context.provides
      : r
      ? r.parent == null || r.ce
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : void 0;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && z(t) ? t.call(r && r.proxy) : t;
  }
}
const ni = {},
  ri = () => Object.create(ni),
  si = (e) => Object.getPrototypeOf(e) === ni;
function Aa(e, t, n, r = !1) {
  const s = {},
    o = ri();
  (e.propsDefaults = Object.create(null)), oi(e, t, s, o);
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
  n ? (e.props = r ? s : ql(s)) : e.type.props ? (e.props = s) : (e.props = o),
    (e.attrs = o);
}
function ka(e, t, n, r) {
  const {
      props: s,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    l = J(s),
    [a] = e.propsOptions;
  let u = !1;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let p = 0; p < c.length; p++) {
        let h = c[p];
        if (tr(e.emitsOptions, h)) continue;
        const x = t[h];
        if (a)
          if (Z(o, h)) x !== o[h] && ((o[h] = x), (u = !0));
          else {
            const m = dt(h);
            s[m] = Ir(a, l, m, x, e, !1);
          }
        else x !== o[h] && ((o[h] = x), (u = !0));
      }
    }
  } else {
    oi(e, t, s, o) && (u = !0);
    let c;
    for (const p in l)
      (!t || (!Z(t, p) && ((c = Lt(p)) === p || !Z(t, c)))) &&
        (a
          ? n &&
            (n[p] !== void 0 || n[c] !== void 0) &&
            (s[p] = Ir(a, l, p, void 0, e, !0))
          : delete s[p]);
    if (o !== l) for (const p in o) (!t || !Z(t, p)) && (delete o[p], (u = !0));
  }
  u && et(e.attrs, "set", "");
}
function oi(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1,
    l;
  if (t)
    for (let a in t) {
      if (nn(a)) continue;
      const u = t[a];
      let c;
      s && Z(s, (c = dt(a)))
        ? !o || !o.includes(c)
          ? (n[c] = u)
          : ((l || (l = {}))[c] = u)
        : tr(e.emitsOptions, a) ||
          ((!(a in r) || u !== r[a]) && ((r[a] = u), (i = !0)));
    }
  if (o) {
    const a = J(n),
      u = l || ee;
    for (let c = 0; c < o.length; c++) {
      const p = o[c];
      n[p] = Ir(s, a, p, u[p], e, !Z(u, p));
    }
  }
  return i;
}
function Ir(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const l = Z(i, "default");
    if (l && r === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && z(a)) {
        const { propsDefaults: u } = s;
        if (n in u) r = u[n];
        else {
          const c = xn(s);
          (r = u[n] = a.call(null, t)), c();
        }
      } else r = a;
      s.ce && s.ce._setProp(n, r);
    }
    i[0] &&
      (o && !l ? (r = !1) : i[1] && (r === "" || r === Lt(n)) && (r = !0));
  }
  return r;
}
const Pa = new WeakMap();
function ii(e, t, n = !1) {
  const r = n ? Pa : t.propsCache,
    s = r.get(e);
  if (s) return s;
  const o = e.props,
    i = {},
    l = [];
  let a = !1;
  if (!z(e)) {
    const c = (p) => {
      a = !0;
      const [h, x] = ii(p, t, !0);
      he(i, h), x && l.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  if (!o && !a) return re(e) && r.set(e, Bt), Bt;
  if ($(o))
    for (let c = 0; c < o.length; c++) {
      const p = dt(o[c]);
      Ps(p) && (i[p] = ee);
    }
  else if (o)
    for (const c in o) {
      const p = dt(c);
      if (Ps(p)) {
        const h = o[c],
          x = (i[p] = $(h) || z(h) ? { type: h } : he({}, h)),
          m = x.type;
        let g = !1,
          b = !0;
        if ($(m))
          for (let E = 0; E < m.length; ++E) {
            const O = m[E],
              M = z(O) && O.name;
            if (M === "Boolean") {
              g = !0;
              break;
            } else M === "String" && (b = !1);
          }
        else g = z(m) && m.name === "Boolean";
        (x[0] = g), (x[1] = b), (g || Z(x, "default")) && l.push(p);
      }
    }
  const u = [i, l];
  return re(e) && r.set(e, u), u;
}
function Ps(e) {
  return e[0] !== "$" && !nn(e);
}
const fs = (e) => e === "_" || e === "_ctx" || e === "$stable",
  ds = (e) => ($(e) ? e.map(Ve) : [Ve(e)]),
  La = (e, t, n) => {
    if (t._n) return t;
    const r = sa((...s) => ds(t(...s)), n);
    return (r._c = !1), r;
  },
  li = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (fs(s)) continue;
      const o = e[s];
      if (z(o)) t[s] = La(s, o, r);
      else if (o != null) {
        const i = ds(o);
        t[s] = () => i;
      }
    }
  },
  ai = (e, t) => {
    const n = ds(t);
    e.slots.default = () => n;
  },
  ci = (e, t, n) => {
    for (const r in t) (n || !fs(r)) && (e[r] = t[r]);
  },
  Ma = (e, t, n) => {
    const r = (e.slots = ri());
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? (ci(r, t, n), n && _o(r, "_", s, !0)) : li(t, r);
    } else t && ai(e, t);
  },
  Na = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let o = !0,
      i = ee;
    if (r.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (o = !1)
          : ci(s, t, n)
        : ((o = !t.$stable), li(t, s)),
        (i = t);
    } else t && (ai(e, t), (i = { default: 1 }));
    if (o) for (const l in s) !fs(l) && i[l] == null && delete s[l];
  },
  Re = Ga;
function Ia(e) {
  return Fa(e);
}
function Fa(e, t) {
  const n = Zn();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: s,
      patchProp: o,
      createElement: i,
      createText: l,
      createComment: a,
      setText: u,
      setElementText: c,
      parentNode: p,
      nextSibling: h,
      setScopeId: x = Ke,
      insertStaticContent: m,
    } = e,
    g = (
      f,
      d,
      w,
      C = null,
      v = null,
      _ = null,
      P = void 0,
      R = null,
      T = !!d.dynamicChildren
    ) => {
      if (f === d) return;
      f && !Yt(f, d) && ((C = ne(f)), xe(f, v, _, !0), (f = null)),
        d.patchFlag === -2 && ((T = !1), (d.dynamicChildren = null));
      const { type: S, ref: j, shapeFlag: L } = d;
      switch (S) {
        case nr:
          b(f, d, w, C);
          break;
        case ht:
          E(f, d, w, C);
          break;
        case Mn:
          f == null && O(d, w, C, P);
          break;
        case ke:
          Je(f, d, w, C, v, _, P, R, T);
          break;
        default:
          L & 1
            ? B(f, d, w, C, v, _, P, R, T)
            : L & 6
            ? bt(f, d, w, C, v, _, P, R, T)
            : (L & 64 || L & 128) && S.process(f, d, w, C, v, _, P, R, T, De);
      }
      j != null && v
        ? on(j, f && f.ref, _, d || f, !d)
        : j == null && f && f.ref != null && on(f.ref, null, _, f, !0);
    },
    b = (f, d, w, C) => {
      if (f == null) r((d.el = l(d.children)), w, C);
      else {
        const v = (d.el = f.el);
        d.children !== f.children && u(v, d.children);
      }
    },
    E = (f, d, w, C) => {
      f == null ? r((d.el = a(d.children || "")), w, C) : (d.el = f.el);
    },
    O = (f, d, w, C) => {
      [f.el, f.anchor] = m(f.children, d, w, C, f.el, f.anchor);
    },
    M = ({ el: f, anchor: d }, w, C) => {
      let v;
      for (; f && f !== d; ) (v = h(f)), r(f, w, C), (f = v);
      r(d, w, C);
    },
    A = ({ el: f, anchor: d }) => {
      let w;
      for (; f && f !== d; ) (w = h(f)), s(f), (f = w);
      s(d);
    },
    B = (f, d, w, C, v, _, P, R, T) => {
      d.type === "svg" ? (P = "svg") : d.type === "math" && (P = "mathml"),
        f == null ? q(d, w, C, v, _, P, R, T) : oe(f, d, v, _, P, R, T);
    },
    q = (f, d, w, C, v, _, P, R) => {
      let T, S;
      const { props: j, shapeFlag: L, transition: D, dirs: U } = f;
      if (
        ((T = f.el = i(f.type, _, j && j.is, j)),
        L & 8
          ? c(T, f.children)
          : L & 16 && F(f.children, T, null, C, v, br(f, _), P, R),
        U && vt(f, null, C, "created"),
        K(T, f, f.scopeId, P, C),
        j)
      ) {
        for (const Y in j) Y !== "value" && !nn(Y) && o(T, Y, null, j[Y], _, C);
        "value" in j && o(T, "value", null, j.value, _),
          (S = j.onVnodeBeforeMount) && $e(S, C, f);
      }
      U && vt(f, null, C, "beforeMount");
      const W = Da(v, D);
      W && D.beforeEnter(T),
        r(T, d, w),
        ((S = j && j.onVnodeMounted) || W || U) &&
          Re(() => {
            S && $e(S, C, f), W && D.enter(T), U && vt(f, null, C, "mounted");
          }, v);
    },
    K = (f, d, w, C, v) => {
      if ((w && x(f, w), C)) for (let _ = 0; _ < C.length; _++) x(f, C[_]);
      if (v) {
        let _ = v.subTree;
        if (
          d === _ ||
          (mi(_.type) && (_.ssContent === d || _.ssFallback === d))
        ) {
          const P = v.vnode;
          K(f, P, P.scopeId, P.slotScopeIds, v.parent);
        }
      }
    },
    F = (f, d, w, C, v, _, P, R, T = 0) => {
      for (let S = T; S < f.length; S++) {
        const j = (f[S] = R ? ct(f[S]) : Ve(f[S]));
        g(null, j, d, w, C, v, _, P, R);
      }
    },
    oe = (f, d, w, C, v, _, P) => {
      const R = (d.el = f.el);
      let { patchFlag: T, dynamicChildren: S, dirs: j } = d;
      T |= f.patchFlag & 16;
      const L = f.props || ee,
        D = d.props || ee;
      let U;
      if (
        (w && _t(w, !1),
        (U = D.onVnodeBeforeUpdate) && $e(U, w, d, f),
        j && vt(d, f, w, "beforeUpdate"),
        w && _t(w, !0),
        ((L.innerHTML && D.innerHTML == null) ||
          (L.textContent && D.textContent == null)) &&
          c(R, ""),
        S
          ? we(f.dynamicChildren, S, R, w, C, br(d, v), _)
          : P || k(f, d, R, null, w, C, br(d, v), _, !1),
        T > 0)
      ) {
        if (T & 16) ot(R, L, D, w, v);
        else if (
          (T & 2 && L.class !== D.class && o(R, "class", null, D.class, v),
          T & 4 && o(R, "style", L.style, D.style, v),
          T & 8)
        ) {
          const W = d.dynamicProps;
          for (let Y = 0; Y < W.length; Y++) {
            const X = W[Y],
              ve = L[X],
              _e = D[X];
            (_e !== ve || X === "value") && o(R, X, ve, _e, v, w);
          }
        }
        T & 1 && f.children !== d.children && c(R, d.children);
      } else !P && S == null && ot(R, L, D, w, v);
      ((U = D.onVnodeUpdated) || j) &&
        Re(() => {
          U && $e(U, w, d, f), j && vt(d, f, w, "updated");
        }, C);
    },
    we = (f, d, w, C, v, _, P) => {
      for (let R = 0; R < d.length; R++) {
        const T = f[R],
          S = d[R],
          j =
            T.el && (T.type === ke || !Yt(T, S) || T.shapeFlag & 198)
              ? p(T.el)
              : w;
        g(T, S, j, null, C, v, _, P, !0);
      }
    },
    ot = (f, d, w, C, v) => {
      if (d !== w) {
        if (d !== ee)
          for (const _ in d) !nn(_) && !(_ in w) && o(f, _, d[_], null, v, C);
        for (const _ in w) {
          if (nn(_)) continue;
          const P = w[_],
            R = d[_];
          P !== R && _ !== "value" && o(f, _, R, P, v, C);
        }
        "value" in w && o(f, "value", d.value, w.value, v);
      }
    },
    Je = (f, d, w, C, v, _, P, R, T) => {
      const S = (d.el = f ? f.el : l("")),
        j = (d.anchor = f ? f.anchor : l(""));
      let { patchFlag: L, dynamicChildren: D, slotScopeIds: U } = d;
      U && (R = R ? R.concat(U) : U),
        f == null
          ? (r(S, w, C), r(j, w, C), F(d.children || [], w, j, v, _, P, R, T))
          : L > 0 && L & 64 && D && f.dynamicChildren
          ? (we(f.dynamicChildren, D, w, v, _, P, R),
            (d.key != null || (v && d === v.subTree)) && ui(f, d, !0))
          : k(f, d, w, j, v, _, P, R, T);
    },
    bt = (f, d, w, C, v, _, P, R, T) => {
      (d.slotScopeIds = R),
        f == null
          ? d.shapeFlag & 512
            ? v.ctx.activate(d, w, C, P, T)
            : yt(d, w, C, v, _, P, T)
          : Ze(f, d, T);
    },
    yt = (f, d, w, C, v, _, P) => {
      const R = (f.component = rc(f, C, v));
      if ((Zo(f) && (R.ctx.renderer = De), oc(R, !1, P), R.asyncDep)) {
        if ((v && v.registerDep(R, te, P), !f.el)) {
          const T = (R.subTree = pe(ht));
          E(null, T, d, w), (f.placeholder = T.el);
        }
      } else te(R, f, d, w, v, _, P);
    },
    Ze = (f, d, w) => {
      const C = (d.component = f.component);
      if (Wa(f, d, w))
        if (C.asyncDep && !C.asyncResolved) {
          G(C, d, w);
          return;
        } else (C.next = d), C.update();
      else (d.el = f.el), (C.vnode = d);
    },
    te = (f, d, w, C, v, _, P) => {
      const R = () => {
        if (f.isMounted) {
          let { next: L, bu: D, u: U, parent: W, vnode: Y } = f;
          {
            const Be = fi(f);
            if (Be) {
              L && ((L.el = Y.el), G(f, L, P)),
                Be.asyncDep.then(() => {
                  f.isUnmounted || R();
                });
              return;
            }
          }
          let X = L,
            ve;
          _t(f, !1),
            L ? ((L.el = Y.el), G(f, L, P)) : (L = Y),
            D && fr(D),
            (ve = L.props && L.props.onVnodeBeforeUpdate) && $e(ve, W, L, Y),
            _t(f, !0);
          const _e = Ms(f),
            je = f.subTree;
          (f.subTree = _e),
            g(je, _e, p(je.el), ne(je), f, v, _),
            (L.el = _e.el),
            X === null && Ka(f, _e.el),
            U && Re(U, v),
            (ve = L.props && L.props.onVnodeUpdated) &&
              Re(() => $e(ve, W, L, Y), v);
        } else {
          let L;
          const { el: D, props: U } = d,
            { bm: W, m: Y, parent: X, root: ve, type: _e } = f,
            je = ln(d);
          _t(f, !1),
            W && fr(W),
            !je && (L = U && U.onVnodeBeforeMount) && $e(L, X, d),
            _t(f, !0);
          {
            ve.ce &&
              ve.ce._def.shadowRoot !== !1 &&
              ve.ce._injectChildStyle(_e);
            const Be = (f.subTree = Ms(f));
            g(null, Be, w, C, f, v, _), (d.el = Be.el);
          }
          if ((Y && Re(Y, v), !je && (L = U && U.onVnodeMounted))) {
            const Be = d;
            Re(() => $e(L, X, Be), v);
          }
          (d.shapeFlag & 256 ||
            (X && ln(X.vnode) && X.vnode.shapeFlag & 256)) &&
            f.a &&
            Re(f.a, v),
            (f.isMounted = !0),
            (d = w = C = null);
        }
      };
      f.scope.on();
      const T = (f.effect = new Ro(R));
      f.scope.off();
      const S = (f.update = T.run.bind(T)),
        j = (f.job = T.runIfDirty.bind(T));
      (j.i = f), (j.id = f.uid), (T.scheduler = () => cs(j)), _t(f, !0), S();
    },
    G = (f, d, w) => {
      d.component = f;
      const C = f.vnode.props;
      (f.vnode = d),
        (f.next = null),
        ka(f, d.props, C, w),
        Na(f, d.children, w),
        nt(),
        Ts(f),
        rt();
    },
    k = (f, d, w, C, v, _, P, R, T = !1) => {
      const S = f && f.children,
        j = f ? f.shapeFlag : 0,
        L = d.children,
        { patchFlag: D, shapeFlag: U } = d;
      if (D > 0) {
        if (D & 128) {
          wt(S, L, w, C, v, _, P, R, T);
          return;
        } else if (D & 256) {
          Ie(S, L, w, C, v, _, P, R, T);
          return;
        }
      }
      U & 8
        ? (j & 16 && it(S, v, _), L !== S && c(w, L))
        : j & 16
        ? U & 16
          ? wt(S, L, w, C, v, _, P, R, T)
          : it(S, v, _, !0)
        : (j & 8 && c(w, ""), U & 16 && F(L, w, C, v, _, P, R, T));
    },
    Ie = (f, d, w, C, v, _, P, R, T) => {
      (f = f || Bt), (d = d || Bt);
      const S = f.length,
        j = d.length,
        L = Math.min(S, j);
      let D;
      for (D = 0; D < L; D++) {
        const U = (d[D] = T ? ct(d[D]) : Ve(d[D]));
        g(f[D], U, w, null, v, _, P, R, T);
      }
      S > j ? it(f, v, _, !0, !1, L) : F(d, w, C, v, _, P, R, T, L);
    },
    wt = (f, d, w, C, v, _, P, R, T) => {
      let S = 0;
      const j = d.length;
      let L = f.length - 1,
        D = j - 1;
      for (; S <= L && S <= D; ) {
        const U = f[S],
          W = (d[S] = T ? ct(d[S]) : Ve(d[S]));
        if (Yt(U, W)) g(U, W, w, null, v, _, P, R, T);
        else break;
        S++;
      }
      for (; S <= L && S <= D; ) {
        const U = f[L],
          W = (d[D] = T ? ct(d[D]) : Ve(d[D]));
        if (Yt(U, W)) g(U, W, w, null, v, _, P, R, T);
        else break;
        L--, D--;
      }
      if (S > L) {
        if (S <= D) {
          const U = D + 1,
            W = U < j ? d[U].el : C;
          for (; S <= D; )
            g(null, (d[S] = T ? ct(d[S]) : Ve(d[S])), w, W, v, _, P, R, T), S++;
        }
      } else if (S > D) for (; S <= L; ) xe(f[S], v, _, !0), S++;
      else {
        const U = S,
          W = S,
          Y = new Map();
        for (S = W; S <= D; S++) {
          const Te = (d[S] = T ? ct(d[S]) : Ve(d[S]));
          Te.key != null && Y.set(Te.key, S);
        }
        let X,
          ve = 0;
        const _e = D - W + 1;
        let je = !1,
          Be = 0;
        const Zt = new Array(_e);
        for (S = 0; S < _e; S++) Zt[S] = 0;
        for (S = U; S <= L; S++) {
          const Te = f[S];
          if (ve >= _e) {
            xe(Te, v, _, !0);
            continue;
          }
          let Ue;
          if (Te.key != null) Ue = Y.get(Te.key);
          else
            for (X = W; X <= D; X++)
              if (Zt[X - W] === 0 && Yt(Te, d[X])) {
                Ue = X;
                break;
              }
          Ue === void 0
            ? xe(Te, v, _, !0)
            : ((Zt[Ue - W] = S + 1),
              Ue >= Be ? (Be = Ue) : (je = !0),
              g(Te, d[Ue], w, null, v, _, P, R, T),
              ve++);
        }
        const xs = je ? ja(Zt) : Bt;
        for (X = xs.length - 1, S = _e - 1; S >= 0; S--) {
          const Te = W + S,
            Ue = d[Te],
            vs = d[Te + 1],
            _s = Te + 1 < j ? vs.el || vs.placeholder : C;
          Zt[S] === 0
            ? g(null, Ue, w, _s, v, _, P, R, T)
            : je && (X < 0 || S !== xs[X] ? Fe(Ue, w, _s, 2) : X--);
        }
      }
    },
    Fe = (f, d, w, C, v = null) => {
      const { el: _, type: P, transition: R, children: T, shapeFlag: S } = f;
      if (S & 6) {
        Fe(f.component.subTree, d, w, C);
        return;
      }
      if (S & 128) {
        f.suspense.move(d, w, C);
        return;
      }
      if (S & 64) {
        P.move(f, d, w, De);
        return;
      }
      if (P === ke) {
        r(_, d, w);
        for (let L = 0; L < T.length; L++) Fe(T[L], d, w, C);
        r(f.anchor, d, w);
        return;
      }
      if (P === Mn) {
        M(f, d, w);
        return;
      }
      if (C !== 2 && S & 1 && R)
        if (C === 0) R.beforeEnter(_), r(_, d, w), Re(() => R.enter(_), v);
        else {
          const { leave: L, delayLeave: D, afterLeave: U } = R,
            W = () => {
              f.ctx.isUnmounted ? s(_) : r(_, d, w);
            },
            Y = () => {
              _._isLeaving && _[la](!0),
                L(_, () => {
                  W(), U && U();
                });
            };
          D ? D(_, W, Y) : Y();
        }
      else r(_, d, w);
    },
    xe = (f, d, w, C = !1, v = !1) => {
      const {
        type: _,
        props: P,
        ref: R,
        children: T,
        dynamicChildren: S,
        shapeFlag: j,
        patchFlag: L,
        dirs: D,
        cacheIndex: U,
      } = f;
      if (
        (L === -2 && (v = !1),
        R != null && (nt(), on(R, null, w, f, !0), rt()),
        U != null && (d.renderCache[U] = void 0),
        j & 256)
      ) {
        d.ctx.deactivate(f);
        return;
      }
      const W = j & 1 && D,
        Y = !ln(f);
      let X;
      if ((Y && (X = P && P.onVnodeBeforeUnmount) && $e(X, d, f), j & 6))
        Nt(f.component, w, C);
      else {
        if (j & 128) {
          f.suspense.unmount(w, C);
          return;
        }
        W && vt(f, null, d, "beforeUnmount"),
          j & 64
            ? f.type.remove(f, d, w, De, C)
            : S && !S.hasOnce && (_ !== ke || (L > 0 && L & 64))
            ? it(S, d, w, !1, !0)
            : ((_ === ke && L & 384) || (!v && j & 16)) && it(T, d, w),
          C && ae(f);
      }
      ((Y && (X = P && P.onVnodeUnmounted)) || W) &&
        Re(() => {
          X && $e(X, d, f), W && vt(f, null, d, "unmounted");
        }, w);
    },
    ae = (f) => {
      const { type: d, el: w, anchor: C, transition: v } = f;
      if (d === ke) {
        me(w, C);
        return;
      }
      if (d === Mn) {
        A(f);
        return;
      }
      const _ = () => {
        s(w), v && !v.persisted && v.afterLeave && v.afterLeave();
      };
      if (f.shapeFlag & 1 && v && !v.persisted) {
        const { leave: P, delayLeave: R } = v,
          T = () => P(w, _);
        R ? R(f.el, _, T) : T();
      } else _();
    },
    me = (f, d) => {
      let w;
      for (; f !== d; ) (w = h(f)), s(f), (f = w);
      s(d);
    },
    Nt = (f, d, w) => {
      const { bum: C, scope: v, job: _, subTree: P, um: R, m: T, a: S } = f;
      Ls(T),
        Ls(S),
        C && fr(C),
        v.stop(),
        _ && ((_.flags |= 8), xe(P, f, d, w)),
        R && Re(R, d),
        Re(() => {
          f.isUnmounted = !0;
        }, d);
    },
    it = (f, d, w, C = !1, v = !1, _ = 0) => {
      for (let P = _; P < f.length; P++) xe(f[P], d, w, C, v);
    },
    ne = (f) => {
      if (f.shapeFlag & 6) return ne(f.component.subTree);
      if (f.shapeFlag & 128) return f.suspense.next();
      const d = h(f.anchor || f.el),
        w = d && d[oa];
      return w ? h(w) : d;
    };
  let It = !1;
  const xt = (f, d, w) => {
      f == null
        ? d._vnode && xe(d._vnode, null, null, !0)
        : g(d._vnode || null, f, d, null, null, null, w),
        (d._vnode = f),
        It || ((It = !0), Ts(), Wo(), (It = !1));
    },
    De = {
      p: g,
      um: xe,
      m: Fe,
      r: ae,
      mt: yt,
      mc: F,
      pc: k,
      pbc: we,
      n: ne,
      o: e,
    };
  return { render: xt, hydrate: void 0, createApp: Ra(xt) };
}
function br({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function _t({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function Da(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function ui(e, t, n = !1) {
  const r = e.children,
    s = t.children;
  if ($(r) && $(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let l = s[o];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = s[o] = ct(s[o])), (l.el = i.el)),
        !n && l.patchFlag !== -2 && ui(i, l)),
        l.type === nr && l.patchFlag !== -1 && (l.el = i.el),
        l.type === ht && !l.el && (l.el = i.el);
    }
}
function ja(e) {
  const t = e.slice(),
    n = [0];
  let r, s, o, i, l;
  const a = e.length;
  for (r = 0; r < a; r++) {
    const u = e[r];
    if (u !== 0) {
      if (((s = n[n.length - 1]), e[s] < u)) {
        (t[r] = s), n.push(r);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        (l = (o + i) >> 1), e[n[l]] < u ? (o = l + 1) : (i = l);
      u < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), (n[o] = r));
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i]);
  return n;
}
function fi(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : fi(t);
}
function Ls(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const Ba = Symbol.for("v-scx"),
  Ua = () => Ln(Ba);
function yr(e, t, n) {
  return di(e, t, n);
}
function di(e, t, n = ee) {
  const { immediate: r, deep: s, flush: o, once: i } = n,
    l = he({}, n),
    a = (t && r) || (!t && o !== "post");
  let u;
  if (gn) {
    if (o === "sync") {
      const x = Ua();
      u = x.__watcherHandles || (x.__watcherHandles = []);
    } else if (!a) {
      const x = () => {};
      return (x.stop = Ke), (x.resume = Ke), (x.pause = Ke), x;
    }
  }
  const c = ye;
  l.call = (x, m, g) => Ge(x, c, m, g);
  let p = !1;
  o === "post"
    ? (l.scheduler = (x) => {
        Re(x, c && c.suspense);
      })
    : o !== "sync" &&
      ((p = !0),
      (l.scheduler = (x, m) => {
        m ? x() : cs(x);
      })),
    (l.augmentJob = (x) => {
      t && (x.flags |= 4),
        p && ((x.flags |= 2), c && ((x.id = c.uid), (x.i = c)));
    });
  const h = Ql(e, t, l);
  return gn && (u ? u.push(h) : a && h()), h;
}
function $a(e, t, n) {
  const r = this.proxy,
    s = ie(e) ? (e.includes(".") ? pi(r, e) : () => r[e]) : e.bind(r, r);
  let o;
  z(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = xn(this),
    l = di(s, o.bind(r), n);
  return i(), l;
}
function pi(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
const Ha = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${dt(t)}Modifiers`] || e[`${Lt(t)}Modifiers`];
function za(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || ee;
  let s = n;
  const o = t.startsWith("update:"),
    i = o && Ha(r, t.slice(7));
  i &&
    (i.trim && (s = n.map((c) => (ie(c) ? c.trim() : c))),
    i.number && (s = n.map(yl)));
  let l,
    a = r[(l = ur(t))] || r[(l = ur(dt(t)))];
  !a && o && (a = r[(l = ur(Lt(t)))]), a && Ge(a, e, 6, s);
  const u = r[l + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), Ge(u, e, 6, s);
  }
}
function hi(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e);
  if (s !== void 0) return s;
  const o = e.emits;
  let i = {},
    l = !1;
  if (!z(e)) {
    const a = (u) => {
      const c = hi(u, t, !0);
      c && ((l = !0), he(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a);
  }
  return !o && !l
    ? (re(e) && r.set(e, null), null)
    : ($(o) ? o.forEach((a) => (i[a] = null)) : he(i, o),
      re(e) && r.set(e, i),
      i);
}
function tr(e, t) {
  return !e || !Kn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      Z(e, t[0].toLowerCase() + t.slice(1)) || Z(e, Lt(t)) || Z(e, t));
}
function Ms(e) {
  const {
      type: t,
      vnode: n,
      proxy: r,
      withProxy: s,
      propsOptions: [o],
      slots: i,
      attrs: l,
      emit: a,
      render: u,
      renderCache: c,
      props: p,
      data: h,
      setupState: x,
      ctx: m,
      inheritAttrs: g,
    } = e,
    b = Hn(e);
  let E, O;
  try {
    if (n.shapeFlag & 4) {
      const A = s || r,
        B = A;
      (E = Ve(u.call(B, A, c, p, x, h, m))), (O = l);
    } else {
      const A = t;
      (E = Ve(
        A.length > 1 ? A(p, { attrs: l, slots: i, emit: a }) : A(p, null)
      )),
        (O = t.props ? l : Va(l));
    }
  } catch (A) {
    (cn.length = 0), Qn(A, e, 1), (E = pe(ht));
  }
  let M = E;
  if (O && g !== !1) {
    const A = Object.keys(O),
      { shapeFlag: B } = M;
    A.length &&
      B & 7 &&
      (o && A.some(Yr) && (O = qa(O, o)), (M = qt(M, O, !1, !0)));
  }
  return (
    n.dirs &&
      ((M = qt(M, null, !1, !0)),
      (M.dirs = M.dirs ? M.dirs.concat(n.dirs) : n.dirs)),
    n.transition && us(M, n.transition),
    (E = M),
    Hn(b),
    E
  );
}
const Va = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Kn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  qa = (e, t) => {
    const n = {};
    for (const r in e) (!Yr(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function Wa(e, t, n) {
  const { props: r, children: s, component: o } = e,
    { props: i, children: l, patchFlag: a } = t,
    u = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return r ? Ns(r, i, u) : !!i;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let p = 0; p < c.length; p++) {
        const h = c[p];
        if (i[h] !== r[h] && !tr(u, h)) return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable)
      ? !0
      : r === i
      ? !1
      : r
      ? i
        ? Ns(r, i, u)
        : !0
      : !!i;
  return !1;
}
function Ns(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (t[o] !== e[o] && !tr(n, o)) return !0;
  }
  return !1;
}
function Ka({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const mi = (e) => e.__isSuspense;
function Ga(e, t) {
  t && t.pendingBranch
    ? $(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : ra(e);
}
const ke = Symbol.for("v-fgt"),
  nr = Symbol.for("v-txt"),
  ht = Symbol.for("v-cmt"),
  Mn = Symbol.for("v-stc"),
  cn = [];
let Ae = null;
function kt(e = !1) {
  cn.push((Ae = e ? null : []));
}
function Ja() {
  cn.pop(), (Ae = cn[cn.length - 1] || null);
}
let hn = 1;
function Is(e, t = !1) {
  (hn += e), e < 0 && Ae && t && (Ae.hasOnce = !0);
}
function gi(e) {
  return (
    (e.dynamicChildren = hn > 0 ? Ae || Bt : null),
    Ja(),
    hn > 0 && Ae && Ae.push(e),
    e
  );
}
function mn(e, t, n, r, s, o) {
  return gi(Oe(e, t, n, r, s, o, !0));
}
function bi(e, t, n, r, s) {
  return gi(pe(e, t, n, r, s, !0));
}
function yi(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Yt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const wi = ({ key: e }) => e ?? null,
  Nn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? ie(e) || de(e) || z(e)
        ? { i: We, r: e, k: t, f: !!n }
        : e
      : null
  );
function Oe(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  o = e === ke ? 0 : 1,
  i = !1,
  l = !1
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && wi(t),
    ref: t && Nn(t),
    scopeId: Go,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: We,
  };
  return (
    l
      ? (ps(a, n), o & 128 && e.normalize(a))
      : n && (a.shapeFlag |= ie(n) ? 8 : 16),
    hn > 0 &&
      !i &&
      Ae &&
      (a.patchFlag > 0 || o & 6) &&
      a.patchFlag !== 32 &&
      Ae.push(a),
    a
  );
}
const pe = Za;
function Za(e, t = null, n = null, r = 0, s = null, o = !1) {
  if (((!e || e === ya) && (e = ht), yi(e))) {
    const l = qt(e, t, !0);
    return (
      n && ps(l, n),
      hn > 0 &&
        !o &&
        Ae &&
        (l.shapeFlag & 6 ? (Ae[Ae.indexOf(e)] = l) : Ae.push(l)),
      (l.patchFlag = -2),
      l
    );
  }
  if ((cc(e) && (e = e.__vccOpts), t)) {
    t = Xa(t);
    let { class: l, style: a } = t;
    l && !ie(l) && (t.class = Vt(l)),
      re(a) && (as(a) && !$(a) && (a = he({}, a)), (t.style = Xn(a)));
  }
  const i = ie(e) ? 1 : mi(e) ? 128 : ia(e) ? 64 : re(e) ? 4 : z(e) ? 2 : 0;
  return Oe(e, t, n, r, s, i, o, !0);
}
function Xa(e) {
  return e ? (as(e) || si(e) ? he({}, e) : e) : null;
}
function qt(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: l, transition: a } = e,
    u = t ? ec(s || {}, t) : s,
    c = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: u,
      key: u && wi(u),
      ref:
        t && t.ref
          ? n && o
            ? $(o)
              ? o.concat(Nn(t))
              : [o, Nn(t)]
            : Nn(t)
          : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== ke ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: a,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && qt(e.ssContent),
      ssFallback: e.ssFallback && qt(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return a && r && us(c, a.clone(c)), c;
}
function Ya(e = " ", t = 0) {
  return pe(nr, null, e, t);
}
function Qa(e, t) {
  const n = pe(Mn, null, e);
  return (n.staticCount = t), n;
}
function xi(e = "", t = !1) {
  return t ? (kt(), bi(ht, null, e)) : pe(ht, null, e);
}
function Ve(e) {
  return e == null || typeof e == "boolean"
    ? pe(ht)
    : $(e)
    ? pe(ke, null, e.slice())
    : yi(e)
    ? ct(e)
    : pe(nr, null, String(e));
}
function ct(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : qt(e);
}
function ps(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if ($(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), ps(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !si(t)
        ? (t._ctx = We)
        : s === 3 &&
          We &&
          (We.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    z(t)
      ? ((t = { default: t, _ctx: We }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [Ya(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function ec(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = Vt([t.class, r.class]));
      else if (s === "style") t.style = Xn([t.style, r.style]);
      else if (Kn(s)) {
        const o = t[s],
          i = r[s];
        i &&
          o !== i &&
          !($(o) && o.includes(i)) &&
          (t[s] = o ? [].concat(o, i) : i);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function $e(e, t, n, r = null) {
  Ge(e, t, 7, [n, r]);
}
const tc = ti();
let nc = 0;
function rc(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || tc,
    o = {
      uid: nc++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new El(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: ii(r, s),
      emitsOptions: hi(r, s),
      emit: null,
      emitted: null,
      propsDefaults: ee,
      inheritAttrs: r.inheritAttrs,
      ctx: ee,
      data: ee,
      props: ee,
      attrs: ee,
      slots: ee,
      refs: ee,
      setupState: ee,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = za.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let ye = null;
const sc = () => ye || We;
let Vn, Fr;
{
  const e = Zn(),
    t = (n, r) => {
      let s;
      return (
        (s = e[n]) || (s = e[n] = []),
        s.push(r),
        (o) => {
          s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
        }
      );
    };
  (Vn = t("__VUE_INSTANCE_SETTERS__", (n) => (ye = n))),
    (Fr = t("__VUE_SSR_SETTERS__", (n) => (gn = n)));
}
const xn = (e) => {
    const t = ye;
    return (
      Vn(e),
      e.scope.on(),
      () => {
        e.scope.off(), Vn(t);
      }
    );
  },
  Fs = () => {
    ye && ye.scope.off(), Vn(null);
  };
function vi(e) {
  return e.vnode.shapeFlag & 4;
}
let gn = !1;
function oc(e, t = !1, n = !1) {
  t && Fr(t);
  const { props: r, children: s } = e.vnode,
    o = vi(e);
  Aa(e, r, o, t), Ma(e, s, n || t);
  const i = o ? ic(e, t) : void 0;
  return t && Fr(!1), i;
}
function ic(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, xa));
  const { setup: r } = n;
  if (r) {
    nt();
    const s = (e.setupContext = r.length > 1 ? ac(e) : null),
      o = xn(e),
      i = yn(r, e, 0, [e.props, s]),
      l = yo(i);
    if ((rt(), o(), (l || e.sp) && !ln(e) && Jo(e), l)) {
      if ((i.then(Fs, Fs), t))
        return i
          .then((a) => {
            Ds(e, a);
          })
          .catch((a) => {
            Qn(a, e, 0);
          });
      e.asyncDep = i;
    } else Ds(e, i);
  } else _i(e);
}
function Ds(e, t, n) {
  z(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : re(t) && (e.setupState = zo(t)),
    _i(e);
}
function _i(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Ke);
  {
    const s = xn(e);
    nt();
    try {
      va(e);
    } finally {
      rt(), s();
    }
  }
}
const lc = {
  get(e, t) {
    return ue(e, "get", ""), e[t];
  },
};
function ac(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, lc),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function hs(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(zo(Wl(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in an) return an[n](e);
          },
          has(t, n) {
            return n in t || n in an;
          },
        }))
    : e.proxy;
}
function cc(e) {
  return z(e) && "__vccOpts" in e;
}
const Dr = (e, t) => Xl(e, t, gn),
  uc = "3.5.19";
/**
 * @vue/runtime-dom v3.5.19
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let jr;
const js = typeof window < "u" && window.trustedTypes;
if (js)
  try {
    jr = js.createPolicy("vue", { createHTML: (e) => e });
  } catch {}
const Ci = jr ? (e) => jr.createHTML(e) : (e) => e,
  fc = "http://www.w3.org/2000/svg",
  dc = "http://www.w3.org/1998/Math/MathML",
  Qe = typeof document < "u" ? document : null,
  Bs = Qe && Qe.createElement("template"),
  pc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const s =
        t === "svg"
          ? Qe.createElementNS(fc, e)
          : t === "mathml"
          ? Qe.createElementNS(dc, e)
          : n
          ? Qe.createElement(e, { is: n })
          : Qe.createElement(e);
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          s.setAttribute("multiple", r.multiple),
        s
      );
    },
    createText: (e) => Qe.createTextNode(e),
    createComment: (e) => Qe.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Qe.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, s, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (s && (s === o || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), n),
            !(s === o || !(s = s.nextSibling));

        );
      else {
        Bs.innerHTML = Ci(
          r === "svg"
            ? `<svg>${e}</svg>`
            : r === "mathml"
            ? `<math>${e}</math>`
            : e
        );
        const l = Bs.content;
        if (r === "svg" || r === "mathml") {
          const a = l.firstChild;
          for (; a.firstChild; ) l.appendChild(a.firstChild);
          l.removeChild(a);
        }
        t.insertBefore(l, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  hc = Symbol("_vtc");
function mc(e, t, n) {
  const r = e[hc];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const Us = Symbol("_vod"),
  gc = Symbol("_vsh"),
  bc = Symbol(""),
  yc = /(^|;)\s*display\s*:/;
function wc(e, t, n) {
  const r = e.style,
    s = ie(n);
  let o = !1;
  if (n && !s) {
    if (t)
      if (ie(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && In(r, l, "");
        }
      else for (const i in t) n[i] == null && In(r, i, "");
    for (const i in n) i === "display" && (o = !0), In(r, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = r[bc];
      i && (n += ";" + i), (r.cssText = n), (o = yc.test(n));
    }
  } else t && e.removeAttribute("style");
  Us in e && ((e[Us] = o ? r.display : ""), e[gc] && (r.display = "none"));
}
const $s = /\s*!important$/;
function In(e, t, n) {
  if ($(n)) n.forEach((r) => In(e, t, r));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const r = xc(e, t);
    $s.test(n)
      ? e.setProperty(Lt(r), n.replace($s, ""), "important")
      : (e[r] = n);
  }
}
const Hs = ["Webkit", "Moz", "ms"],
  wr = {};
function xc(e, t) {
  const n = wr[t];
  if (n) return n;
  let r = dt(t);
  if (r !== "filter" && r in e) return (wr[t] = r);
  r = vo(r);
  for (let s = 0; s < Hs.length; s++) {
    const o = Hs[s] + r;
    if (o in e) return (wr[t] = o);
  }
  return t;
}
const zs = "http://www.w3.org/1999/xlink";
function Vs(e, t, n, r, s, o = Sl(t)) {
  r && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(zs, t.slice(6, t.length))
      : e.setAttributeNS(zs, t, n)
    : n == null || (o && !Co(n))
    ? e.removeAttribute(t)
    : e.setAttribute(t, o ? "" : mt(n) ? String(n) : n);
}
function qs(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ci(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
    const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value,
      a = n == null ? (e.type === "checkbox" ? "on" : "") : String(n);
    (l !== a || !("_value" in e)) && (e.value = a),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean"
      ? (n = Co(n))
      : n == null && l === "string"
      ? ((n = ""), (i = !0))
      : l === "number" && ((n = 0), (i = !0));
  }
  try {
    e[t] = n;
  } catch {}
  i && e.removeAttribute(s || t);
}
function vc(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function _c(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Ws = Symbol("_vei");
function Cc(e, t, n, r, s = null) {
  const o = e[Ws] || (e[Ws] = {}),
    i = o[t];
  if (r && i) i.value = r;
  else {
    const [l, a] = Sc(t);
    if (r) {
      const u = (o[t] = Rc(r, s));
      vc(e, l, u, a);
    } else i && (_c(e, l, i, a), (o[t] = void 0));
  }
}
const Ks = /(?:Once|Passive|Capture)$/;
function Sc(e) {
  let t;
  if (Ks.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(Ks)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : Lt(e.slice(2)), t];
}
let xr = 0;
const Ec = Promise.resolve(),
  Tc = () => xr || (Ec.then(() => (xr = 0)), (xr = Date.now()));
function Rc(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    Ge(Oc(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = Tc()), n;
}
function Oc(e, t) {
  if ($(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    );
  } else return t;
}
const Gs = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Ac = (e, t, n, r, s, o) => {
    const i = s === "svg";
    t === "class"
      ? mc(e, r, i)
      : t === "style"
      ? wc(e, n, r)
      : Kn(t)
      ? Yr(t) || Cc(e, t, n, r, o)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : kc(e, t, r, i)
        )
      ? (qs(e, t, r),
        !e.tagName.includes("-") &&
          (t === "value" || t === "checked" || t === "selected") &&
          Vs(e, t, r, i, o, t !== "value"))
      : e._isVueCE && (/[A-Z]/.test(t) || !ie(r))
      ? qs(e, dt(t), r, o, t)
      : (t === "true-value"
          ? (e._trueValue = r)
          : t === "false-value" && (e._falseValue = r),
        Vs(e, t, r, i));
  };
function kc(e, t, n, r) {
  if (r)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Gs(t) && z(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "autocorrect" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Gs(t) && ie(n) ? !1 : t in e;
}
const Pc = he({ patchProp: Ac }, pc);
let Js;
function Lc() {
  return Js || (Js = Ia(Pc));
}
const Mc = (...e) => {
  const t = Lc().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (r) => {
      const s = Ic(r);
      if (!s) return;
      const o = t._component;
      !z(o) && !o.render && !o.template && (o.template = s.innerHTML),
        s.nodeType === 1 && (s.textContent = "");
      const i = n(s, !1, Nc(s));
      return (
        s instanceof Element &&
          (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
function Nc(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ic(e) {
  return ie(e) ? document.querySelector(e) : e;
}
const Et = class Et {
  static getInstance() {
    return Et.instance || (Et.instance = new Et()), Et.instance;
  }
  sendMessage(t, n) {
    var r;
    (r = window.top) == null ||
      r.postMessage({ type: t, data: n, targetName: window.name }, "*");
  }
  addListener(t) {
    const n = (r) => {
      t(r.data);
    };
    return (
      window.addEventListener("message", n),
      () => window.removeEventListener("message", n)
    );
  }
};
Tn(Et, "instance", null);
let Br = Et;
const tt = Br.getInstance(),
  Tt = class Tt {
    constructor() {
      Tn(this, "abortController");
      this.abortController = new AbortController();
    }
    static getInstance() {
      return Tt.instance || (Tt.instance = new Tt()), Tt.instance;
    }
    addEventListener(t, n, r) {
      window.addEventListener(t, n, {
        ...r,
        signal: this.abortController.signal,
      });
    }
    cleanup() {
      this.abortController.abort();
    }
  };
Tn(Tt, "instance", null);
let Ur = Tt;
const qe = Ur.getInstance(),
  Si = (e, t) => {
    let n = 0;
    return function (...r) {
      const s = Date.now();
      s - n > t && (e.apply(this, r), (n = s));
    };
  },
  Fc = "mgx-shadow-style",
  Dc = "mgx-shadow-host",
  jc = "devIframe",
  Ei = ["label", "span", "p", "h1", "h2", "h3", "h4", "h5", "h6"],
  vr = ["html", "body"],
  ms = "-",
  Bc = (e) => {
    const t = $c(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (i) => {
        const l = i.split(ms);
        return l[0] === "" && l.length !== 1 && l.shift(), Ti(l, t) || Uc(i);
      },
      getConflictingClassGroupIds: (i, l) => {
        const a = n[i] || [];
        return l && r[i] ? [...a, ...r[i]] : a;
      },
    };
  },
  Ti = (e, t) => {
    var i;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      s = r ? Ti(e.slice(1), r) : void 0;
    if (s) return s;
    if (t.validators.length === 0) return;
    const o = e.join(ms);
    return (i = t.validators.find(({ validator: l }) => l(o))) == null
      ? void 0
      : i.classGroupId;
  },
  Zs = /^\[(.+)\]$/,
  Uc = (e) => {
    if (Zs.test(e)) {
      const t = Zs.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  $c = (e) => {
    const { theme: t, classGroups: n } = e,
      r = { nextPart: new Map(), validators: [] };
    for (const s in n) $r(n[s], r, s, t);
    return r;
  },
  $r = (e, t, n, r) => {
    e.forEach((s) => {
      if (typeof s == "string") {
        const o = s === "" ? t : Xs(t, s);
        o.classGroupId = n;
        return;
      }
      if (typeof s == "function") {
        if (Hc(s)) {
          $r(s(r), t, n, r);
          return;
        }
        t.validators.push({ validator: s, classGroupId: n });
        return;
      }
      Object.entries(s).forEach(([o, i]) => {
        $r(i, Xs(t, o), n, r);
      });
    });
  },
  Xs = (e, t) => {
    let n = e;
    return (
      t.split(ms).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  Hc = (e) => e.isThemeGetter,
  zc = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const s = (o, i) => {
      n.set(o, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(o) {
        let i = n.get(o);
        if (i !== void 0) return i;
        if ((i = r.get(o)) !== void 0) return s(o, i), i;
      },
      set(o, i) {
        n.has(o) ? n.set(o, i) : s(o, i);
      },
    };
  },
  Hr = "!",
  zr = ":",
  Vc = zr.length,
  qc = (e) => {
    const { prefix: t, experimentalParseClassName: n } = e;
    let r = (s) => {
      const o = [];
      let i = 0,
        l = 0,
        a = 0,
        u;
      for (let m = 0; m < s.length; m++) {
        let g = s[m];
        if (i === 0 && l === 0) {
          if (g === zr) {
            o.push(s.slice(a, m)), (a = m + Vc);
            continue;
          }
          if (g === "/") {
            u = m;
            continue;
          }
        }
        g === "[" ? i++ : g === "]" ? i-- : g === "(" ? l++ : g === ")" && l--;
      }
      const c = o.length === 0 ? s : s.substring(a),
        p = Wc(c),
        h = p !== c,
        x = u && u > a ? u - a : void 0;
      return {
        modifiers: o,
        hasImportantModifier: h,
        baseClassName: p,
        maybePostfixModifierPosition: x,
      };
    };
    if (t) {
      const s = t + zr,
        o = r;
      r = (i) =>
        i.startsWith(s)
          ? o(i.substring(s.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: i,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (n) {
      const s = r;
      r = (o) => n({ className: o, parseClassName: s });
    }
    return r;
  },
  Wc = (e) =>
    e.endsWith(Hr)
      ? e.substring(0, e.length - 1)
      : e.startsWith(Hr)
      ? e.substring(1)
      : e,
  Kc = (e) => {
    const t = Object.fromEntries(e.orderSensitiveModifiers.map((r) => [r, !0]));
    return (r) => {
      if (r.length <= 1) return r;
      const s = [];
      let o = [];
      return (
        r.forEach((i) => {
          i[0] === "[" || t[i] ? (s.push(...o.sort(), i), (o = [])) : o.push(i);
        }),
        s.push(...o.sort()),
        s
      );
    };
  },
  Gc = (e) => ({
    cache: zc(e.cacheSize),
    parseClassName: qc(e),
    sortModifiers: Kc(e),
    ...Bc(e),
  }),
  Jc = /\s+/,
  Zc = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: s,
        sortModifiers: o,
      } = t,
      i = [],
      l = e.trim().split(Jc);
    let a = "";
    for (let u = l.length - 1; u >= 0; u -= 1) {
      const c = l[u],
        {
          isExternal: p,
          modifiers: h,
          hasImportantModifier: x,
          baseClassName: m,
          maybePostfixModifierPosition: g,
        } = n(c);
      if (p) {
        a = c + (a.length > 0 ? " " + a : a);
        continue;
      }
      let b = !!g,
        E = r(b ? m.substring(0, g) : m);
      if (!E) {
        if (!b) {
          a = c + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((E = r(m)), !E)) {
          a = c + (a.length > 0 ? " " + a : a);
          continue;
        }
        b = !1;
      }
      const O = o(h).join(":"),
        M = x ? O + Hr : O,
        A = M + E;
      if (i.includes(A)) continue;
      i.push(A);
      const B = s(E, b);
      for (let q = 0; q < B.length; ++q) {
        const K = B[q];
        i.push(M + K);
      }
      a = c + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function Xc() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Ri(t)) && (r && (r += " "), (r += n));
  return r;
}
const Ri = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Ri(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function Yc(e, ...t) {
  let n,
    r,
    s,
    o = i;
  function i(a) {
    const u = t.reduce((c, p) => p(c), e());
    return (n = Gc(u)), (r = n.cache.get), (s = n.cache.set), (o = l), l(a);
  }
  function l(a) {
    const u = r(a);
    if (u) return u;
    const c = Zc(a, n);
    return s(a, c), c;
  }
  return function () {
    return o(Xc.apply(null, arguments));
  };
}
const le = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  Oi = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Ai = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Qc = /^\d+\/\d+$/,
  eu = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  tu =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  nu = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  ru = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  su =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Dt = (e) => Qc.test(e),
  V = (e) => !!e && !Number.isNaN(Number(e)),
  lt = (e) => !!e && Number.isInteger(Number(e)),
  _r = (e) => e.endsWith("%") && V(e.slice(0, -1)),
  Ye = (e) => eu.test(e),
  ou = () => !0,
  iu = (e) => tu.test(e) && !nu.test(e),
  ki = () => !1,
  lu = (e) => ru.test(e),
  au = (e) => su.test(e),
  cu = (e) => !N(e) && !I(e),
  uu = (e) => Wt(e, Mi, ki),
  N = (e) => Oi.test(e),
  Ct = (e) => Wt(e, Ni, iu),
  Cr = (e) => Wt(e, mu, V),
  Ys = (e) => Wt(e, Pi, ki),
  fu = (e) => Wt(e, Li, au),
  kn = (e) => Wt(e, Ii, lu),
  I = (e) => Ai.test(e),
  Qt = (e) => Kt(e, Ni),
  du = (e) => Kt(e, gu),
  Qs = (e) => Kt(e, Pi),
  pu = (e) => Kt(e, Mi),
  hu = (e) => Kt(e, Li),
  Pn = (e) => Kt(e, Ii, !0),
  Wt = (e, t, n) => {
    const r = Oi.exec(e);
    return r ? (r[1] ? t(r[1]) : n(r[2])) : !1;
  },
  Kt = (e, t, n = !1) => {
    const r = Ai.exec(e);
    return r ? (r[1] ? t(r[1]) : n) : !1;
  },
  Pi = (e) => e === "position" || e === "percentage",
  Li = (e) => e === "image" || e === "url",
  Mi = (e) => e === "length" || e === "size" || e === "bg-size",
  Ni = (e) => e === "length",
  mu = (e) => e === "number",
  gu = (e) => e === "family-name",
  Ii = (e) => e === "shadow",
  bu = () => {
    const e = le("color"),
      t = le("font"),
      n = le("text"),
      r = le("font-weight"),
      s = le("tracking"),
      o = le("leading"),
      i = le("breakpoint"),
      l = le("container"),
      a = le("spacing"),
      u = le("radius"),
      c = le("shadow"),
      p = le("inset-shadow"),
      h = le("text-shadow"),
      x = le("drop-shadow"),
      m = le("blur"),
      g = le("perspective"),
      b = le("aspect"),
      E = le("ease"),
      O = le("animate"),
      M = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      A = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      B = () => [...A(), I, N],
      q = () => ["auto", "hidden", "clip", "visible", "scroll"],
      K = () => ["auto", "contain", "none"],
      F = () => [I, N, a],
      oe = () => [Dt, "full", "auto", ...F()],
      we = () => [lt, "none", "subgrid", I, N],
      ot = () => ["auto", { span: ["full", lt, I, N] }, lt, I, N],
      Je = () => [lt, "auto", I, N],
      bt = () => ["auto", "min", "max", "fr", I, N],
      yt = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      Ze = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      te = () => ["auto", ...F()],
      G = () => [
        Dt,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...F(),
      ],
      k = () => [e, I, N],
      Ie = () => [...A(), Qs, Ys, { position: [I, N] }],
      wt = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      Fe = () => ["auto", "cover", "contain", pu, uu, { size: [I, N] }],
      xe = () => [_r, Qt, Ct],
      ae = () => ["", "none", "full", u, I, N],
      me = () => ["", V, Qt, Ct],
      Nt = () => ["solid", "dashed", "dotted", "double"],
      it = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      ne = () => [V, _r, Qs, Ys],
      It = () => ["", "none", m, I, N],
      xt = () => ["none", V, I, N],
      De = () => ["none", V, I, N],
      En = () => [V, I, N],
      f = () => [Dt, "full", ...F()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Ye],
        breakpoint: [Ye],
        color: [ou],
        container: [Ye],
        "drop-shadow": [Ye],
        ease: ["in", "out", "in-out"],
        font: [cu],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [Ye],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [Ye],
        shadow: [Ye],
        spacing: ["px", V],
        text: [Ye],
        "text-shadow": [Ye],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", Dt, N, I, b] }],
        container: ["container"],
        columns: [{ columns: [V, N, I, l] }],
        "break-after": [{ "break-after": M() }],
        "break-before": [{ "break-before": M() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: B() }],
        overflow: [{ overflow: q() }],
        "overflow-x": [{ "overflow-x": q() }],
        "overflow-y": [{ "overflow-y": q() }],
        overscroll: [{ overscroll: K() }],
        "overscroll-x": [{ "overscroll-x": K() }],
        "overscroll-y": [{ "overscroll-y": K() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: oe() }],
        "inset-x": [{ "inset-x": oe() }],
        "inset-y": [{ "inset-y": oe() }],
        start: [{ start: oe() }],
        end: [{ end: oe() }],
        top: [{ top: oe() }],
        right: [{ right: oe() }],
        bottom: [{ bottom: oe() }],
        left: [{ left: oe() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [lt, "auto", I, N] }],
        basis: [{ basis: [Dt, "full", "auto", l, ...F()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [V, Dt, "auto", "initial", "none", N] }],
        grow: [{ grow: ["", V, I, N] }],
        shrink: [{ shrink: ["", V, I, N] }],
        order: [{ order: [lt, "first", "last", "none", I, N] }],
        "grid-cols": [{ "grid-cols": we() }],
        "col-start-end": [{ col: ot() }],
        "col-start": [{ "col-start": Je() }],
        "col-end": [{ "col-end": Je() }],
        "grid-rows": [{ "grid-rows": we() }],
        "row-start-end": [{ row: ot() }],
        "row-start": [{ "row-start": Je() }],
        "row-end": [{ "row-end": Je() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": bt() }],
        "auto-rows": [{ "auto-rows": bt() }],
        gap: [{ gap: F() }],
        "gap-x": [{ "gap-x": F() }],
        "gap-y": [{ "gap-y": F() }],
        "justify-content": [{ justify: [...yt(), "normal"] }],
        "justify-items": [{ "justify-items": [...Ze(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...Ze()] }],
        "align-content": [{ content: ["normal", ...yt()] }],
        "align-items": [{ items: [...Ze(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...Ze(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": yt() }],
        "place-items": [{ "place-items": [...Ze(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...Ze()] }],
        p: [{ p: F() }],
        px: [{ px: F() }],
        py: [{ py: F() }],
        ps: [{ ps: F() }],
        pe: [{ pe: F() }],
        pt: [{ pt: F() }],
        pr: [{ pr: F() }],
        pb: [{ pb: F() }],
        pl: [{ pl: F() }],
        m: [{ m: te() }],
        mx: [{ mx: te() }],
        my: [{ my: te() }],
        ms: [{ ms: te() }],
        me: [{ me: te() }],
        mt: [{ mt: te() }],
        mr: [{ mr: te() }],
        mb: [{ mb: te() }],
        ml: [{ ml: te() }],
        "space-x": [{ "space-x": F() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": F() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: G() }],
        w: [{ w: [l, "screen", ...G()] }],
        "min-w": [{ "min-w": [l, "screen", "none", ...G()] }],
        "max-w": [
          { "max-w": [l, "screen", "none", "prose", { screen: [i] }, ...G()] },
        ],
        h: [{ h: ["screen", "lh", ...G()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...G()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...G()] }],
        "font-size": [{ text: ["base", n, Qt, Ct] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [r, I, Cr] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              _r,
              N,
            ],
          },
        ],
        "font-family": [{ font: [du, N, t] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [s, I, N] }],
        "line-clamp": [{ "line-clamp": [V, "none", I, Cr] }],
        leading: [{ leading: [o, ...F()] }],
        "list-image": [{ "list-image": ["none", I, N] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", I, N] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: k() }],
        "text-color": [{ text: k() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...Nt(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [V, "from-font", "auto", I, Ct] },
        ],
        "text-decoration-color": [{ decoration: k() }],
        "underline-offset": [{ "underline-offset": [V, "auto", I, N] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: F() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              I,
              N,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", I, N] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: Ie() }],
        "bg-repeat": [{ bg: wt() }],
        "bg-size": [{ bg: Fe() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  lt,
                  I,
                  N,
                ],
                radial: ["", I, N],
                conic: [lt, I, N],
              },
              hu,
              fu,
            ],
          },
        ],
        "bg-color": [{ bg: k() }],
        "gradient-from-pos": [{ from: xe() }],
        "gradient-via-pos": [{ via: xe() }],
        "gradient-to-pos": [{ to: xe() }],
        "gradient-from": [{ from: k() }],
        "gradient-via": [{ via: k() }],
        "gradient-to": [{ to: k() }],
        rounded: [{ rounded: ae() }],
        "rounded-s": [{ "rounded-s": ae() }],
        "rounded-e": [{ "rounded-e": ae() }],
        "rounded-t": [{ "rounded-t": ae() }],
        "rounded-r": [{ "rounded-r": ae() }],
        "rounded-b": [{ "rounded-b": ae() }],
        "rounded-l": [{ "rounded-l": ae() }],
        "rounded-ss": [{ "rounded-ss": ae() }],
        "rounded-se": [{ "rounded-se": ae() }],
        "rounded-ee": [{ "rounded-ee": ae() }],
        "rounded-es": [{ "rounded-es": ae() }],
        "rounded-tl": [{ "rounded-tl": ae() }],
        "rounded-tr": [{ "rounded-tr": ae() }],
        "rounded-br": [{ "rounded-br": ae() }],
        "rounded-bl": [{ "rounded-bl": ae() }],
        "border-w": [{ border: me() }],
        "border-w-x": [{ "border-x": me() }],
        "border-w-y": [{ "border-y": me() }],
        "border-w-s": [{ "border-s": me() }],
        "border-w-e": [{ "border-e": me() }],
        "border-w-t": [{ "border-t": me() }],
        "border-w-r": [{ "border-r": me() }],
        "border-w-b": [{ "border-b": me() }],
        "border-w-l": [{ "border-l": me() }],
        "divide-x": [{ "divide-x": me() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": me() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...Nt(), "hidden", "none"] }],
        "divide-style": [{ divide: [...Nt(), "hidden", "none"] }],
        "border-color": [{ border: k() }],
        "border-color-x": [{ "border-x": k() }],
        "border-color-y": [{ "border-y": k() }],
        "border-color-s": [{ "border-s": k() }],
        "border-color-e": [{ "border-e": k() }],
        "border-color-t": [{ "border-t": k() }],
        "border-color-r": [{ "border-r": k() }],
        "border-color-b": [{ "border-b": k() }],
        "border-color-l": [{ "border-l": k() }],
        "divide-color": [{ divide: k() }],
        "outline-style": [{ outline: [...Nt(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [V, I, N] }],
        "outline-w": [{ outline: ["", V, Qt, Ct] }],
        "outline-color": [{ outline: k() }],
        shadow: [{ shadow: ["", "none", c, Pn, kn] }],
        "shadow-color": [{ shadow: k() }],
        "inset-shadow": [{ "inset-shadow": ["none", p, Pn, kn] }],
        "inset-shadow-color": [{ "inset-shadow": k() }],
        "ring-w": [{ ring: me() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: k() }],
        "ring-offset-w": [{ "ring-offset": [V, Ct] }],
        "ring-offset-color": [{ "ring-offset": k() }],
        "inset-ring-w": [{ "inset-ring": me() }],
        "inset-ring-color": [{ "inset-ring": k() }],
        "text-shadow": [{ "text-shadow": ["none", h, Pn, kn] }],
        "text-shadow-color": [{ "text-shadow": k() }],
        opacity: [{ opacity: [V, I, N] }],
        "mix-blend": [
          { "mix-blend": [...it(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": it() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [V] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": ne() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": ne() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": k() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": k() }],
        "mask-image-t-from-pos": [{ "mask-t-from": ne() }],
        "mask-image-t-to-pos": [{ "mask-t-to": ne() }],
        "mask-image-t-from-color": [{ "mask-t-from": k() }],
        "mask-image-t-to-color": [{ "mask-t-to": k() }],
        "mask-image-r-from-pos": [{ "mask-r-from": ne() }],
        "mask-image-r-to-pos": [{ "mask-r-to": ne() }],
        "mask-image-r-from-color": [{ "mask-r-from": k() }],
        "mask-image-r-to-color": [{ "mask-r-to": k() }],
        "mask-image-b-from-pos": [{ "mask-b-from": ne() }],
        "mask-image-b-to-pos": [{ "mask-b-to": ne() }],
        "mask-image-b-from-color": [{ "mask-b-from": k() }],
        "mask-image-b-to-color": [{ "mask-b-to": k() }],
        "mask-image-l-from-pos": [{ "mask-l-from": ne() }],
        "mask-image-l-to-pos": [{ "mask-l-to": ne() }],
        "mask-image-l-from-color": [{ "mask-l-from": k() }],
        "mask-image-l-to-color": [{ "mask-l-to": k() }],
        "mask-image-x-from-pos": [{ "mask-x-from": ne() }],
        "mask-image-x-to-pos": [{ "mask-x-to": ne() }],
        "mask-image-x-from-color": [{ "mask-x-from": k() }],
        "mask-image-x-to-color": [{ "mask-x-to": k() }],
        "mask-image-y-from-pos": [{ "mask-y-from": ne() }],
        "mask-image-y-to-pos": [{ "mask-y-to": ne() }],
        "mask-image-y-from-color": [{ "mask-y-from": k() }],
        "mask-image-y-to-color": [{ "mask-y-to": k() }],
        "mask-image-radial": [{ "mask-radial": [I, N] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": ne() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": ne() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": k() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": k() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": A() }],
        "mask-image-conic-pos": [{ "mask-conic": [V] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": ne() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": ne() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": k() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": k() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: Ie() }],
        "mask-repeat": [{ mask: wt() }],
        "mask-size": [{ mask: Fe() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", I, N] }],
        filter: [{ filter: ["", "none", I, N] }],
        blur: [{ blur: It() }],
        brightness: [{ brightness: [V, I, N] }],
        contrast: [{ contrast: [V, I, N] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", x, Pn, kn] }],
        "drop-shadow-color": [{ "drop-shadow": k() }],
        grayscale: [{ grayscale: ["", V, I, N] }],
        "hue-rotate": [{ "hue-rotate": [V, I, N] }],
        invert: [{ invert: ["", V, I, N] }],
        saturate: [{ saturate: [V, I, N] }],
        sepia: [{ sepia: ["", V, I, N] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", I, N] }],
        "backdrop-blur": [{ "backdrop-blur": It() }],
        "backdrop-brightness": [{ "backdrop-brightness": [V, I, N] }],
        "backdrop-contrast": [{ "backdrop-contrast": [V, I, N] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", V, I, N] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [V, I, N] }],
        "backdrop-invert": [{ "backdrop-invert": ["", V, I, N] }],
        "backdrop-opacity": [{ "backdrop-opacity": [V, I, N] }],
        "backdrop-saturate": [{ "backdrop-saturate": [V, I, N] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", V, I, N] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": F() }],
        "border-spacing-x": [{ "border-spacing-x": F() }],
        "border-spacing-y": [{ "border-spacing-y": F() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              I,
              N,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [V, "initial", I, N] }],
        ease: [{ ease: ["linear", "initial", E, I, N] }],
        delay: [{ delay: [V, I, N] }],
        animate: [{ animate: ["none", O, I, N] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [g, I, N] }],
        "perspective-origin": [{ "perspective-origin": B() }],
        rotate: [{ rotate: xt() }],
        "rotate-x": [{ "rotate-x": xt() }],
        "rotate-y": [{ "rotate-y": xt() }],
        "rotate-z": [{ "rotate-z": xt() }],
        scale: [{ scale: De() }],
        "scale-x": [{ "scale-x": De() }],
        "scale-y": [{ "scale-y": De() }],
        "scale-z": [{ "scale-z": De() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: En() }],
        "skew-x": [{ "skew-x": En() }],
        "skew-y": [{ "skew-y": En() }],
        transform: [{ transform: [I, N, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: B() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: f() }],
        "translate-x": [{ "translate-x": f() }],
        "translate-y": [{ "translate-y": f() }],
        "translate-z": [{ "translate-z": f() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: k() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: k() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              I,
              N,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": F() }],
        "scroll-mx": [{ "scroll-mx": F() }],
        "scroll-my": [{ "scroll-my": F() }],
        "scroll-ms": [{ "scroll-ms": F() }],
        "scroll-me": [{ "scroll-me": F() }],
        "scroll-mt": [{ "scroll-mt": F() }],
        "scroll-mr": [{ "scroll-mr": F() }],
        "scroll-mb": [{ "scroll-mb": F() }],
        "scroll-ml": [{ "scroll-ml": F() }],
        "scroll-p": [{ "scroll-p": F() }],
        "scroll-px": [{ "scroll-px": F() }],
        "scroll-py": [{ "scroll-py": F() }],
        "scroll-ps": [{ "scroll-ps": F() }],
        "scroll-pe": [{ "scroll-pe": F() }],
        "scroll-pt": [{ "scroll-pt": F() }],
        "scroll-pr": [{ "scroll-pr": F() }],
        "scroll-pb": [{ "scroll-pb": F() }],
        "scroll-pl": [{ "scroll-pl": F() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", I, N] },
        ],
        fill: [{ fill: ["none", ...k()] }],
        "stroke-w": [{ stroke: [V, Qt, Ct, Cr] }],
        stroke: [{ stroke: ["none", ...k()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  yu = Yc(bu);
function Fi(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (n = Fi(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function wu() {
  for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++)
    (e = arguments[n]) && (t = Fi(e)) && (r && (r += " "), (r += t));
  return r;
}
const Di = (e) => {
    var r;
    if (!e) return "";
    const t = [];
    let n = e;
    for (; n; ) {
      let s = n.tagName.toUpperCase();
      if (n.id) s += `#${n.id}`;
      else {
        const o = Array.from(
            ((r = n.parentNode) == null ? void 0 : r.children) || []
          ),
          i = n.tagName,
          l = o.filter((a) => a.tagName === i);
        if (l.length > 1) {
          const a = l.indexOf(n) + 1;
          s += `:nth-of-type(${a})`;
        }
      }
      t.unshift(s), (n = n.parentElement);
    }
    return t.join(" > ");
  },
  rr = (e) => {
    var n;
    const t = [];
    for (let r = 0; r < e.length; r++) {
      const s = e[r],
        o = (n = s.dataset) == null ? void 0 : n.mgxId;
      o &&
        t.push(
          ...Array.from(document.querySelectorAll(`[data-mgx-id="${o}"]`))
        ),
        t.push(s);
    }
    return t;
  },
  eo = (e) => {
    const t = {};
    return (
      e.split(";").forEach((r) => {
        const [s, o] = r.split(":");
        t[s.trim()] = o;
      }),
      t
    );
  },
  xu = (e, t, n = []) => {
    if (!e && !t) return "";
    if (!e) return t;
    if (!t) return e;
    const r = eo(e),
      s = eo(t),
      o = { ...r, ...s };
    return (
      console.log(o),
      Object.entries(o)
        .filter(([i]) => n.includes(i))
        .map(
          ([i, l]) => `${i.trim()}: ${(l == null ? void 0 : l.trim()) || ""}`
        )
        .join("; ")
    );
  },
  Vr = (e, t) => {
    const n = [];
    return (
      e &&
        Array.from(e.attributes).forEach((r) => {
          (!t || t(r)) && n.push({ name: r.name, value: r.value });
        }),
      n
    );
  },
  Sr = (e) => {
    let t = e;
    for (; t; ) {
      if (t.tagName.toLowerCase() === "svg") return t;
      t = t.parentElement;
    }
    return null;
  },
  vu = (e) => {
    const t = [
        /:class="[^"]*"/,
        /:className="[^"]*"/,
        /className={[^}]*}/,
        /class={[^}]*}/,
      ],
      n = decodeURIComponent(e.getAttribute("data-mgx-component") ?? "");
    return t.some((r) => r.test(n));
  },
  ji = (e) => {
    var t;
    return Ei.includes(
      (t = e == null ? void 0 : e.tagName) == null ? void 0 : t.toLowerCase()
    );
  },
  _u = (...e) => yu(wu(e)),
  Cu = gt({
    __name: "OverlayManager",
    setup(e, { expose: t }) {
      const n = Le([]);
      let r = null,
        s = null,
        o = null;
      const i = (m) => {
          const g = m.getBoundingClientRect();
          return {
            position: "fixed",
            top: `${g.top}px`,
            left: `${g.left}px`,
            width: `${g.width}px`,
            height: `${g.height}px`,
          };
        },
        l = Si(() => {
          n.value = n.value.map((m) => ({ ...m, style: i(m.element) }));
        }, 16),
        a = () => {
          window.ResizeObserver &&
            (r = new ResizeObserver((m) => {
              let g = !1;
              for (const b of m) {
                const E = b.target;
                if (n.value.some((O) => O.element === E)) {
                  g = !0;
                  break;
                }
              }
              g && l();
            })),
            (s = new MutationObserver((m) => {
              let g = !1;
              for (const b of m)
                if (
                  (b.type === "attributes" || b.type === "childList") &&
                  n.value.some((O) => {
                    var M, A, B, q;
                    return (
                      b.target === O.element ||
                      ((A = (M = b.target).contains) == null
                        ? void 0
                        : A.call(M, O.element)) ||
                      ((q = (B = O.element).contains) == null
                        ? void 0
                        : q.call(B, b.target))
                    );
                  })
                ) {
                  g = !0;
                  break;
                }
              g && l();
            })),
            s.observe(document.body, {
              childList: !0,
              subtree: !0,
              attributes: !0,
              attributeFilter: ["style", "class"],
            }),
            (o = window.setInterval(l, 100));
        },
        u = () => {
          r && (r.disconnect(), (r = null)),
            s && (s.disconnect(), (s = null)),
            o && (clearInterval(o), (o = null));
        },
        c = (m) => {
          r && r.observe(m);
        },
        p = (m) => {
          r && r.unobserve(m);
        },
        h = (m) => {
          n.value = n.value.filter((g) =>
            g.type === m ? (p(g.element), !1) : !0
          );
        };
      return (
        t({
          addOverlay: (m, g) => {
            h(g),
              rr([m]).forEach((E) => {
                n.value.push({ style: i(E), type: g, element: E }), c(E);
              });
          },
          clearOverlays: h,
          updateOverlays: l,
        }),
        Mt(() => {
          a();
        }),
        wn(() => {
          u();
        }),
        (m, g) => (
          kt(!0),
          mn(
            ke,
            null,
            wa(
              n.value,
              (b, E) => (
                kt(),
                mn(
                  "div",
                  {
                    key: E,
                    style: Xn(b.style),
                    class: Vt([
                      "mgx-overlay",
                      b.type === "inspect"
                        ? "mgx-overlay-inspect"
                        : "mgx-overlay-selected",
                    ]),
                  },
                  null,
                  6
                )
              )
            ),
            128
          )
        )
      );
    },
  }),
  Su = gt({
    __name: "ContentEditor",
    setup(e) {
      const t = Le(null),
        n = (h) => {
          if (!document.body.classList.contains("mgx-inspecting")) return !1;
          const m = h.target;
          return !ji(m);
        },
        r = () => {
          const h = "mgx-editable-styles";
          if (document.getElementById(h)) return;
          const x = document.createElement("style");
          (x.id = h),
            (x.textContent = `
    [data-mgx-editing] {
      outline: 2px solid #00000000 !important; 
    }
    
    [data-mgx-editing]:focus {
      outline: 2px solid #00000000 !important;
    }
  `),
            document.head.appendChild(x);
        },
        s = (h) => {
          const x = Vr(h, (m) => m.name.includes("data-mgx") && m.value !== "");
          console.log("syncElementData", h),
            tt.sendMessage("changeContent", {
              code: h.outerHTML,
              text: h.textContent ?? "",
              url: window.location.href,
              position: h.getBoundingClientRect(),
              isImage: !1,
              domPath: Di(h),
              component: {
                tag: h.tagName.toLowerCase(),
                style: JSON.stringify(window.getComputedStyle(h)),
                class: h.className,
                attributes: x,
              },
            });
        },
        o = () => {
          var h, x;
          t.value &&
            ((h = t.value) == null || h.removeAttribute("contenteditable"),
            (x = t.value) == null || x.removeAttribute("data-mgx-editing"),
            (t.value = null));
        },
        i = (h) => {
          const x = () => {
              console.log("handleBlur", h),
                o(),
                h.removeEventListener("blur", x);
            },
            m = (b) => {
              console.log("handleKeyDown", b),
                b.key === "Escape" &&
                  (b.preventDefault(),
                  o(),
                  h.removeEventListener("keydown", m));
            },
            g = (b) => {
              console.log("handleInput", b);
              const E = b.target;
              s(E);
            };
          console.log("bindInput", h),
            h.addEventListener("blur", x, { once: !0 }),
            h.addEventListener("keydown", m),
            h.addEventListener("input", g);
        },
        l = (h) => {
          o(),
            h.setAttribute("contenteditable", "true"),
            h.setAttribute("data-mgx-editing", "true"),
            h.focus(),
            (t.value = h);
          const x = document.createRange(),
            m = window.getSelection();
          x.selectNodeContents(h),
            x.collapse(!1),
            m == null || m.removeAllRanges(),
            m == null || m.addRange(x),
            i(h);
        },
        a = (h) => {
          var E;
          if (!document.body.classList.contains("mgx-inspecting")) return;
          const m = h.target;
          if (
            (n(h) && (h.preventDefault(), h.stopImmediatePropagation()),
            !((E = Vr(
              m,
              (O) => O.name.includes("data-mgx") && O.value !== ""
            ).find((O) => O.name === "data-mgx-text")) == null
              ? void 0
              : E.value) ||
              !Ei.includes(m.tagName.toLowerCase()) ||
              vu(m))
          ) {
            o();
            return;
          }
          l(m);
        },
        u = (h) => {
          const { targets: x, content: m } = h;
          x.forEach((g) => {
            const b = document.querySelector(g.domPath);
            b && (b.innerHTML = m);
          });
        },
        c = () => {
          r(),
            qe.addEventListener("mousedown", a, { passive: !1, capture: !0 }),
            qe.addEventListener(
              "click",
              (h) => {
                h.target,
                  n(h) && (h.preventDefault(), h.stopImmediatePropagation());
              },
              { passive: !1, capture: !0 }
            ),
            tt.addListener((h) => {
              h.type === "applyContent" && u(h.data);
            });
        },
        p = () => {
          o();
        };
      return (
        Mt(() => {
          setTimeout(() => {
            c();
          }, 1e3);
        }),
        wn(() => {
          p();
        }),
        () => {}
      );
    },
  }),
  Eu = gt({
    __name: "deleteElement",
    setup(e) {
      const t = (r) => {
          const { targets: s } = r,
            o = s.map((l) => document.querySelector(l.domPath)),
            i = rr(o);
          for (let l = 0; l < i.length; l++) i[l].remove();
        },
        n = () => {
          tt.addListener((r) => {
            r.type === "deleteElement" && t(r.data);
          });
        };
      return (
        Mt(() => {
          n();
        }),
        () => {}
      );
    },
  }),
  Tu = gt({
    __name: "inspectMode",
    setup(e) {
      const t = Le(null),
        n = Le(!1),
        r = Le(!1),
        s = Le(null),
        o = Le(null),
        i = (g) => {
          const b = g.target;
          return ji(b)
            ? !1
            : r.value && b.tagName.toLowerCase() === "label"
            ? !0
            : r.value;
        },
        l = (g) => {
          if (!r.value) return;
          const b = g.target;
          !b ||
            vr.includes(b.tagName.toLowerCase()) ||
            (b.tagName.toLowerCase() === "label" &&
              (g.preventDefault(), g.stopImmediatePropagation()),
            (n.value = !0));
        },
        a = Si((g) => {
          var O, M, A;
          if (!r.value) return;
          const b = g.target;
          if (!b || vr.includes(b.tagName.toLowerCase())) {
            (s.value = null),
              (O = t.value) == null || O.clearOverlays("inspect");
            return;
          }
          i(g) && (g.preventDefault(), g.stopImmediatePropagation());
          const E = Sr(b) || b;
          if (o.value === E) {
            (M = t.value) == null || M.clearOverlays("inspect"),
              (s.value = null);
            return;
          }
          s.value !== E &&
            ((s.value = E),
            (A = t.value) == null || A.addOverlay(E, "inspect"));
        }, 16),
        u = (g) => {
          var O, M;
          const b = Sr(g) || g;
          (o.value = b),
            (O = t.value) == null || O.addOverlay(b, "selected"),
            (M = t.value) == null || M.clearOverlays("inspect");
          const E = Vr(b, (A) => A.name.includes("data-mgx") && A.value !== "");
          tt.sendMessage("appViewerCodeSelect", {
            code: `${b.outerHTML}`,
            text: `${b.textContent}`,
            url: window.location.href,
            position: b.getBoundingClientRect(),
            isImage: b.tagName === "IMG",
            domPath: Di(b),
            component: {
              tag: b.tagName.toLowerCase(),
              style: JSON.stringify(window.getComputedStyle(b)),
              class: `${b.className}`,
              attributes: E,
            },
          });
        },
        c = (g) => {
          if (!r.value) return;
          const b = g.target;
          if (!b || vr.includes(b.tagName.toLowerCase())) return;
          const E = Sr(b) || b;
          if (o.value !== E) {
            if (
              (i(g) && (g.preventDefault(), g.stopImmediatePropagation()),
              E.tagName.toLowerCase() === "label")
            ) {
              g.preventDefault(), g.stopImmediatePropagation();
              const O = E.getAttribute("for");
              if (O) {
                const M = document.getElementById(O);
                M && M.blur();
              }
            }
            (n.value = !1), u(b);
          }
        },
        p = (g) => {
          var M, A;
          if (!r.value) return;
          const b = g.target,
            O = g.relatedTarget;
          if (!b || b === document.body || !O || O === document.body) {
            (s.value = null),
              (M = t.value) == null || M.clearOverlays("inspect");
            return;
          }
          document.contains(O) ||
            ((s.value = null),
            (A = t.value) == null || A.clearOverlays("inspect"));
        },
        h = (g) => {
          var b;
          r.value &&
            ((s.value = null),
            (b = t.value) == null || b.clearOverlays("inspect"));
        },
        x = () => {
          qe.addEventListener("mousedown", l, { capture: !0 }),
            qe.addEventListener("mousemove", a, { capture: !0 }),
            qe.addEventListener("click", c, { capture: !0 }),
            qe.addEventListener("mouseout", p, { capture: !0 }),
            qe.addEventListener("mouseleave", h, { capture: !0 });
        },
        m = async () => {
          tt.addListener(async (g) => {
            var b, E, O, M, A, B;
            if (g.type === "toggleInspectMode") {
              if (
                ((r.value = ((b = g.data) == null ? void 0 : b.open) ?? !1),
                r.value
                  ? document.body.classList.toggle("mgx-inspecting", r.value)
                  : document.body.classList.remove("mgx-inspecting"),
                r.value ||
                  ((E = t.value) == null || E.clearOverlays("inspect"),
                  (O = t.value) == null || O.clearOverlays("selected")),
                g.data.clearSelected)
              ) {
                (M = t.value) == null || M.clearOverlays("inspect"),
                  (A = t.value) == null || A.clearOverlays("selected"),
                  (o.value = null);
                return;
              }
              g.data.targets &&
                setTimeout(() => {
                  var K, F;
                  const q = ((K = g.data) == null ? void 0 : K.targets) ?? [];
                  if (q.length > 0 && q[0]) {
                    const oe = q[0],
                      we = document.querySelector(
                        oe == null ? void 0 : oe.domPath
                      );
                    we &&
                      ((o.value = we),
                      (F = t.value) == null || F.addOverlay(we, "selected"));
                  }
                }, 1e3);
            }
            if (g.type === "selectParent") {
              const q = ((B = g.data) == null ? void 0 : B.targets) ?? [];
              if (q.length > 0 && q[0]) {
                const K = q[0],
                  F = document.querySelector(K == null ? void 0 : K.domPath);
                u(F == null ? void 0 : F.parentElement);
              }
            }
          });
        };
      return (
        Mt(() => {
          x(), m();
        }),
        wn(() => {
          qe.cleanup();
        }),
        (g, b) => (
          kt(),
          mn(
            ke,
            null,
            [
              pe(Cu, { ref_key: "overlayManagerRef", ref: t }, null, 512),
              pe(Su),
              pe(Eu),
            ],
            64
          )
        )
      );
    },
  });
function Bi(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Ru } = Object.prototype,
  { getPrototypeOf: gs } = Object,
  { iterator: sr, toStringTag: Ui } = Symbol,
  or = ((e) => (t) => {
    const n = Ru.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ne = (e) => ((e = e.toLowerCase()), (t) => or(t) === e),
  ir = (e) => (t) => typeof t === e,
  { isArray: Gt } = Array,
  bn = ir("undefined");
function vn(e) {
  return (
    e !== null &&
    !bn(e) &&
    e.constructor !== null &&
    !bn(e.constructor) &&
    Se(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const $i = Ne("ArrayBuffer");
function Ou(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && $i(e.buffer)),
    t
  );
}
const Au = ir("string"),
  Se = ir("function"),
  Hi = ir("number"),
  _n = (e) => e !== null && typeof e == "object",
  ku = (e) => e === !0 || e === !1,
  Fn = (e) => {
    if (or(e) !== "object") return !1;
    const t = gs(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Ui in e) &&
      !(sr in e)
    );
  },
  Pu = (e) => {
    if (!_n(e) || vn(e)) return !1;
    try {
      return (
        Object.keys(e).length === 0 &&
        Object.getPrototypeOf(e) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  Lu = Ne("Date"),
  Mu = Ne("File"),
  Nu = Ne("Blob"),
  Iu = Ne("FileList"),
  Fu = (e) => _n(e) && Se(e.pipe),
  Du = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Se(e.append) &&
          ((t = or(e)) === "formdata" ||
            (t === "object" &&
              Se(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  ju = Ne("URLSearchParams"),
  [Bu, Uu, $u, Hu] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Ne
  ),
  zu = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Cn(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), Gt(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    if (vn(e)) return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let l;
    for (r = 0; r < i; r++) (l = o[r]), t.call(null, e[l], l, e);
  }
}
function zi(e, t) {
  if (vn(e)) return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const Rt =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Vi = (e) => !bn(e) && e !== Rt;
function qr() {
  const { caseless: e } = (Vi(this) && this) || {},
    t = {},
    n = (r, s) => {
      const o = (e && zi(t, s)) || s;
      Fn(t[o]) && Fn(r)
        ? (t[o] = qr(t[o], r))
        : Fn(r)
        ? (t[o] = qr({}, r))
        : Gt(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && Cn(arguments[r], n);
  return t;
}
const Vu = (e, t, n, { allOwnKeys: r } = {}) => (
    Cn(
      t,
      (s, o) => {
        n && Se(s) ? (e[o] = Bi(s, n)) : (e[o] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  qu = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Wu = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Ku = (e, t, n, r) => {
    let s, o, i;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
        (i = s[o]), (!r || r(i, e, t)) && !l[i] && ((t[i] = e[i]), (l[i] = !0));
      e = n !== !1 && gs(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Gu = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Ju = (e) => {
    if (!e) return null;
    if (Gt(e)) return e;
    let t = e.length;
    if (!Hi(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Zu = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && gs(Uint8Array)),
  Xu = (e, t) => {
    const r = (e && e[sr]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const o = s.value;
      t.call(e, o[0], o[1]);
    }
  },
  Yu = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Qu = Ne("HTMLFormElement"),
  ef = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  to = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  tf = Ne("RegExp"),
  qi = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Cn(n, (s, o) => {
      let i;
      (i = t(s, o, e)) !== !1 && (r[o] = i || s);
    }),
      Object.defineProperties(e, r);
  },
  nf = (e) => {
    qi(e, (t, n) => {
      if (Se(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Se(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  rf = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((o) => {
          n[o] = !0;
        });
      };
    return Gt(e) ? r(e) : r(String(e).split(t)), n;
  },
  sf = () => {},
  of = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function lf(e) {
  return !!(e && Se(e.append) && e[Ui] === "FormData" && e[sr]);
}
const af = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (_n(r)) {
          if (t.indexOf(r) >= 0) return;
          if (vn(r)) return r;
          if (!("toJSON" in r)) {
            t[s] = r;
            const o = Gt(r) ? [] : {};
            return (
              Cn(r, (i, l) => {
                const a = n(i, s + 1);
                !bn(a) && (o[l] = a);
              }),
              (t[s] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  cf = Ne("AsyncFunction"),
  uf = (e) => e && (_n(e) || Se(e)) && Se(e.then) && Se(e.catch),
  Wi = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          Rt.addEventListener(
            "message",
            ({ source: s, data: o }) => {
              s === Rt && o === n && r.length && r.shift()();
            },
            !1
          ),
          (s) => {
            r.push(s), Rt.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    Se(Rt.postMessage)
  ),
  ff =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Rt)
      : (typeof process < "u" && process.nextTick) || Wi,
  df = (e) => e != null && Se(e[sr]),
  y = {
    isArray: Gt,
    isArrayBuffer: $i,
    isBuffer: vn,
    isFormData: Du,
    isArrayBufferView: Ou,
    isString: Au,
    isNumber: Hi,
    isBoolean: ku,
    isObject: _n,
    isPlainObject: Fn,
    isEmptyObject: Pu,
    isReadableStream: Bu,
    isRequest: Uu,
    isResponse: $u,
    isHeaders: Hu,
    isUndefined: bn,
    isDate: Lu,
    isFile: Mu,
    isBlob: Nu,
    isRegExp: tf,
    isFunction: Se,
    isStream: Fu,
    isURLSearchParams: ju,
    isTypedArray: Zu,
    isFileList: Iu,
    forEach: Cn,
    merge: qr,
    extend: Vu,
    trim: zu,
    stripBOM: qu,
    inherits: Wu,
    toFlatObject: Ku,
    kindOf: or,
    kindOfTest: Ne,
    endsWith: Gu,
    toArray: Ju,
    forEachEntry: Xu,
    matchAll: Yu,
    isHTMLForm: Qu,
    hasOwnProperty: to,
    hasOwnProp: to,
    reduceDescriptors: qi,
    freezeMethods: nf,
    toObjectSet: rf,
    toCamelCase: ef,
    noop: sf,
    toFiniteNumber: of,
    findKey: zi,
    global: Rt,
    isContextDefined: Vi,
    isSpecCompliantForm: lf,
    toJSONObject: af,
    isAsyncFn: cf,
    isThenable: uf,
    setImmediate: Wi,
    asap: ff,
    isIterable: df,
  };
function H(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && ((this.response = s), (this.status = s.status ? s.status : null));
}
y.inherits(H, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: y.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Ki = H.prototype,
  Gi = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Gi[e] = { value: e };
});
Object.defineProperties(H, Gi);
Object.defineProperty(Ki, "isAxiosError", { value: !0 });
H.from = (e, t, n, r, s, o) => {
  const i = Object.create(Ki);
  return (
    y.toFlatObject(
      e,
      i,
      function (a) {
        return a !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    H.call(i, e.message, t, n, r, s),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  );
};
const pf = null;
function Wr(e) {
  return y.isPlainObject(e) || y.isArray(e);
}
function Ji(e) {
  return y.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function no(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, o) {
          return (s = Ji(s)), !n && o ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : t;
}
function hf(e) {
  return y.isArray(e) && !e.some(Wr);
}
const mf = y.toFlatObject(y, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function lr(e, t, n) {
  if (!y.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = y.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, b) {
        return !y.isUndefined(b[g]);
      }
    ));
  const r = n.metaTokens,
    s = n.visitor || c,
    o = n.dots,
    i = n.indexes,
    a = (n.Blob || (typeof Blob < "u" && Blob)) && y.isSpecCompliantForm(t);
  if (!y.isFunction(s)) throw new TypeError("visitor must be a function");
  function u(m) {
    if (m === null) return "";
    if (y.isDate(m)) return m.toISOString();
    if (y.isBoolean(m)) return m.toString();
    if (!a && y.isBlob(m))
      throw new H("Blob is not supported. Use a Buffer instead.");
    return y.isArrayBuffer(m) || y.isTypedArray(m)
      ? a && typeof Blob == "function"
        ? new Blob([m])
        : Buffer.from(m)
      : m;
  }
  function c(m, g, b) {
    let E = m;
    if (m && !b && typeof m == "object") {
      if (y.endsWith(g, "{}"))
        (g = r ? g : g.slice(0, -2)), (m = JSON.stringify(m));
      else if (
        (y.isArray(m) && hf(m)) ||
        ((y.isFileList(m) || y.endsWith(g, "[]")) && (E = y.toArray(m)))
      )
        return (
          (g = Ji(g)),
          E.forEach(function (M, A) {
            !(y.isUndefined(M) || M === null) &&
              t.append(
                i === !0 ? no([g], A, o) : i === null ? g : g + "[]",
                u(M)
              );
          }),
          !1
        );
    }
    return Wr(m) ? !0 : (t.append(no(b, g, o), u(m)), !1);
  }
  const p = [],
    h = Object.assign(mf, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: Wr,
    });
  function x(m, g) {
    if (!y.isUndefined(m)) {
      if (p.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      p.push(m),
        y.forEach(m, function (E, O) {
          (!(y.isUndefined(E) || E === null) &&
            s.call(t, E, y.isString(O) ? O.trim() : O, g, h)) === !0 &&
            x(E, g ? g.concat(O) : [O]);
        }),
        p.pop();
    }
  }
  if (!y.isObject(e)) throw new TypeError("data must be an object");
  return x(e), t;
}
function ro(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function bs(e, t) {
  (this._pairs = []), e && lr(e, this, t);
}
const Zi = bs.prototype;
Zi.append = function (t, n) {
  this._pairs.push([t, n]);
};
Zi.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, ro);
      }
    : ro;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function gf(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Xi(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || gf;
  y.isFunction(n) && (n = { serialize: n });
  const s = n && n.serialize;
  let o;
  if (
    (s
      ? (o = s(t, n))
      : (o = y.isURLSearchParams(t) ? t.toString() : new bs(t, n).toString(r)),
    o)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class so {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    y.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Yi = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  bf = typeof URLSearchParams < "u" ? URLSearchParams : bs,
  yf = typeof FormData < "u" ? FormData : null,
  wf = typeof Blob < "u" ? Blob : null,
  xf = {
    isBrowser: !0,
    classes: { URLSearchParams: bf, FormData: yf, Blob: wf },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  ys = typeof window < "u" && typeof document < "u",
  Kr = (typeof navigator == "object" && navigator) || void 0,
  vf =
    ys &&
    (!Kr || ["ReactNative", "NativeScript", "NS"].indexOf(Kr.product) < 0),
  _f =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Cf = (ys && window.location.href) || "http://localhost",
  Sf = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: ys,
        hasStandardBrowserEnv: vf,
        hasStandardBrowserWebWorkerEnv: _f,
        navigator: Kr,
        origin: Cf,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  fe = { ...Sf, ...xf };
function Ef(e, t) {
  return lr(e, new fe.classes.URLSearchParams(), {
    visitor: function (n, r, s, o) {
      return fe.isNode && y.isBuffer(n)
        ? (this.append(r, n.toString("base64")), !1)
        : o.defaultVisitor.apply(this, arguments);
    },
    ...t,
  });
}
function Tf(e) {
  return y
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function Rf(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function Qi(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const l = Number.isFinite(+i),
      a = o >= n.length;
    return (
      (i = !i && y.isArray(s) ? s.length : i),
      a
        ? (y.hasOwnProp(s, i) ? (s[i] = [s[i], r]) : (s[i] = r), !l)
        : ((!s[i] || !y.isObject(s[i])) && (s[i] = []),
          t(n, r, s[i], o) && y.isArray(s[i]) && (s[i] = Rf(s[i])),
          !l)
    );
  }
  if (y.isFormData(e) && y.isFunction(e.entries)) {
    const n = {};
    return (
      y.forEachEntry(e, (r, s) => {
        t(Tf(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function Of(e, t, n) {
  if (y.isString(e))
    try {
      return (t || JSON.parse)(e), y.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Sn = {
  transitional: Yi,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        o = y.isObject(t);
      if ((o && y.isHTMLForm(t) && (t = new FormData(t)), y.isFormData(t)))
        return s ? JSON.stringify(Qi(t)) : t;
      if (
        y.isArrayBuffer(t) ||
        y.isBuffer(t) ||
        y.isStream(t) ||
        y.isFile(t) ||
        y.isBlob(t) ||
        y.isReadableStream(t)
      )
        return t;
      if (y.isArrayBufferView(t)) return t.buffer;
      if (y.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let l;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Ef(t, this.formSerializer).toString();
        if ((l = y.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const a = this.env && this.env.FormData;
          return lr(
            l ? { "files[]": t } : t,
            a && new a(),
            this.formSerializer
          );
        }
      }
      return o || s ? (n.setContentType("application/json", !1), Of(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Sn.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (y.isResponse(t) || y.isReadableStream(t)) return t;
      if (t && y.isString(t) && ((r && !this.responseType) || s)) {
        const i = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (i)
            throw l.name === "SyntaxError"
              ? H.from(l, H.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: fe.classes.FormData, Blob: fe.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
y.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Sn.headers[e] = {};
});
const Af = y.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  kf = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (s = i.indexOf(":")),
              (n = i.substring(0, s).trim().toLowerCase()),
              (r = i.substring(s + 1).trim()),
              !(!n || (t[n] && Af[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  oo = Symbol("internals");
function en(e) {
  return e && String(e).trim().toLowerCase();
}
function Dn(e) {
  return e === !1 || e == null ? e : y.isArray(e) ? e.map(Dn) : String(e);
}
function Pf(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const Lf = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Er(e, t, n, r, s) {
  if (y.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!y.isString(t))) {
    if (y.isString(r)) return t.indexOf(r) !== -1;
    if (y.isRegExp(r)) return r.test(t);
  }
}
function Mf(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Nf(e, t) {
  const n = y.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0,
    });
  });
}
let Ee = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(l, a, u) {
      const c = en(a);
      if (!c) throw new Error("header name must be a non-empty string");
      const p = y.findKey(s, c);
      (!p || s[p] === void 0 || u === !0 || (u === void 0 && s[p] !== !1)) &&
        (s[p || a] = Dn(l));
    }
    const i = (l, a) => y.forEach(l, (u, c) => o(u, c, a));
    if (y.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (y.isString(t) && (t = t.trim()) && !Lf(t)) i(kf(t), n);
    else if (y.isObject(t) && y.isIterable(t)) {
      let l = {},
        a,
        u;
      for (const c of t) {
        if (!y.isArray(c))
          throw TypeError("Object iterator must return a key-value pair");
        l[(u = c[0])] = (a = l[u])
          ? y.isArray(a)
            ? [...a, c[1]]
            : [a, c[1]]
          : c[1];
      }
      i(l, n);
    } else t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = en(t)), t)) {
      const r = y.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return Pf(s);
        if (y.isFunction(n)) return n.call(this, s, r);
        if (y.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = en(t)), t)) {
      const r = y.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Er(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (((i = en(i)), i)) {
        const l = y.findKey(r, i);
        l && (!n || Er(r, r[l], l, n)) && (delete r[l], (s = !0));
      }
    }
    return y.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Er(this, this[o], o, t, !0)) && (delete this[o], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      y.forEach(this, (s, o) => {
        const i = y.findKey(r, o);
        if (i) {
          (n[i] = Dn(s)), delete n[o];
          return;
        }
        const l = t ? Mf(o) : String(o).trim();
        l !== o && delete n[o], (n[l] = Dn(s)), (r[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      y.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && y.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[oo] = this[oo] = { accessors: {} }).accessors,
      s = this.prototype;
    function o(i) {
      const l = en(i);
      r[l] || (Nf(s, i), (r[l] = !0));
    }
    return y.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
Ee.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
y.reduceDescriptors(Ee.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
y.freezeMethods(Ee);
function Tr(e, t) {
  const n = this || Sn,
    r = t || n,
    s = Ee.from(r.headers);
  let o = r.data;
  return (
    y.forEach(e, function (l) {
      o = l.call(n, o, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    o
  );
}
function el(e) {
  return !!(e && e.__CANCEL__);
}
function Jt(e, t, n) {
  H.call(this, e ?? "canceled", H.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
y.inherits(Jt, H, { __CANCEL__: !0 });
function tl(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new H(
          "Request failed with status code " + n.status,
          [H.ERR_BAD_REQUEST, H.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function If(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Ff(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (a) {
      const u = Date.now(),
        c = r[o];
      i || (i = u), (n[s] = a), (r[s] = u);
      let p = o,
        h = 0;
      for (; p !== s; ) (h += n[p++]), (p = p % e);
      if (((s = (s + 1) % e), s === o && (o = (o + 1) % e), u - i < t)) return;
      const x = c && u - c;
      return x ? Math.round((h * 1e3) / x) : void 0;
    }
  );
}
function Df(e, t) {
  let n = 0,
    r = 1e3 / t,
    s,
    o;
  const i = (u, c = Date.now()) => {
    (n = c), (s = null), o && (clearTimeout(o), (o = null)), e(...u);
  };
  return [
    (...u) => {
      const c = Date.now(),
        p = c - n;
      p >= r
        ? i(u, c)
        : ((s = u),
          o ||
            (o = setTimeout(() => {
              (o = null), i(s);
            }, r - p)));
    },
    () => s && i(s),
  ];
}
const qn = (e, t, n = 3) => {
    let r = 0;
    const s = Ff(50, 250);
    return Df((o) => {
      const i = o.loaded,
        l = o.lengthComputable ? o.total : void 0,
        a = i - r,
        u = s(a),
        c = i <= l;
      r = i;
      const p = {
        loaded: i,
        total: l,
        progress: l ? i / l : void 0,
        bytes: a,
        rate: u || void 0,
        estimated: u && l && c ? (l - i) / u : void 0,
        event: o,
        lengthComputable: l != null,
        [t ? "download" : "upload"]: !0,
      };
      e(p);
    }, n);
  },
  io = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  lo =
    (e) =>
    (...t) =>
      y.asap(() => e(...t)),
  jf = fe.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, fe.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(fe.origin),
        fe.navigator && /(msie|trident)/i.test(fe.navigator.userAgent)
      )
    : () => !0,
  Bf = fe.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, s, o) {
          const i = [e + "=" + encodeURIComponent(t)];
          y.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
            y.isString(r) && i.push("path=" + r),
            y.isString(s) && i.push("domain=" + s),
            o === !0 && i.push("secure"),
            (document.cookie = i.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Uf(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function $f(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function nl(e, t, n) {
  let r = !Uf(t);
  return e && (r || n == !1) ? $f(e, t) : t;
}
const ao = (e) => (e instanceof Ee ? { ...e } : e);
function Pt(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, p, h) {
    return y.isPlainObject(u) && y.isPlainObject(c)
      ? y.merge.call({ caseless: h }, u, c)
      : y.isPlainObject(c)
      ? y.merge({}, c)
      : y.isArray(c)
      ? c.slice()
      : c;
  }
  function s(u, c, p, h) {
    if (y.isUndefined(c)) {
      if (!y.isUndefined(u)) return r(void 0, u, p, h);
    } else return r(u, c, p, h);
  }
  function o(u, c) {
    if (!y.isUndefined(c)) return r(void 0, c);
  }
  function i(u, c) {
    if (y.isUndefined(c)) {
      if (!y.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function l(u, c, p) {
    if (p in t) return r(u, c);
    if (p in e) return r(void 0, u);
  }
  const a = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (u, c, p) => s(ao(u), ao(c), p, !0),
  };
  return (
    y.forEach(Object.keys({ ...e, ...t }), function (c) {
      const p = a[c] || s,
        h = p(e[c], t[c], c);
      (y.isUndefined(h) && p !== l) || (n[c] = h);
    }),
    n
  );
}
const rl = (e) => {
    const t = Pt({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: s,
      xsrfCookieName: o,
      headers: i,
      auth: l,
    } = t;
    (t.headers = i = Ee.from(i)),
      (t.url = Xi(
        nl(t.baseURL, t.url, t.allowAbsoluteUrls),
        e.params,
        e.paramsSerializer
      )),
      l &&
        i.set(
          "Authorization",
          "Basic " +
            btoa(
              (l.username || "") +
                ":" +
                (l.password ? unescape(encodeURIComponent(l.password)) : "")
            )
        );
    let a;
    if (y.isFormData(n)) {
      if (fe.hasStandardBrowserEnv || fe.hasStandardBrowserWebWorkerEnv)
        i.setContentType(void 0);
      else if ((a = i.getContentType()) !== !1) {
        const [u, ...c] = a
          ? a
              .split(";")
              .map((p) => p.trim())
              .filter(Boolean)
          : [];
        i.setContentType([u || "multipart/form-data", ...c].join("; "));
      }
    }
    if (
      fe.hasStandardBrowserEnv &&
      (r && y.isFunction(r) && (r = r(t)), r || (r !== !1 && jf(t.url)))
    ) {
      const u = s && o && Bf.read(o);
      u && i.set(s, u);
    }
    return t;
  },
  Hf = typeof XMLHttpRequest < "u",
  zf =
    Hf &&
    function (e) {
      return new Promise(function (n, r) {
        const s = rl(e);
        let o = s.data;
        const i = Ee.from(s.headers).normalize();
        let { responseType: l, onUploadProgress: a, onDownloadProgress: u } = s,
          c,
          p,
          h,
          x,
          m;
        function g() {
          x && x(),
            m && m(),
            s.cancelToken && s.cancelToken.unsubscribe(c),
            s.signal && s.signal.removeEventListener("abort", c);
        }
        let b = new XMLHttpRequest();
        b.open(s.method.toUpperCase(), s.url, !0), (b.timeout = s.timeout);
        function E() {
          if (!b) return;
          const M = Ee.from(
              "getAllResponseHeaders" in b && b.getAllResponseHeaders()
            ),
            B = {
              data:
                !l || l === "text" || l === "json"
                  ? b.responseText
                  : b.response,
              status: b.status,
              statusText: b.statusText,
              headers: M,
              config: e,
              request: b,
            };
          tl(
            function (K) {
              n(K), g();
            },
            function (K) {
              r(K), g();
            },
            B
          ),
            (b = null);
        }
        "onloadend" in b
          ? (b.onloadend = E)
          : (b.onreadystatechange = function () {
              !b ||
                b.readyState !== 4 ||
                (b.status === 0 &&
                  !(b.responseURL && b.responseURL.indexOf("file:") === 0)) ||
                setTimeout(E);
            }),
          (b.onabort = function () {
            b &&
              (r(new H("Request aborted", H.ECONNABORTED, e, b)), (b = null));
          }),
          (b.onerror = function () {
            r(new H("Network Error", H.ERR_NETWORK, e, b)), (b = null);
          }),
          (b.ontimeout = function () {
            let A = s.timeout
              ? "timeout of " + s.timeout + "ms exceeded"
              : "timeout exceeded";
            const B = s.transitional || Yi;
            s.timeoutErrorMessage && (A = s.timeoutErrorMessage),
              r(
                new H(
                  A,
                  B.clarifyTimeoutError ? H.ETIMEDOUT : H.ECONNABORTED,
                  e,
                  b
                )
              ),
              (b = null);
          }),
          o === void 0 && i.setContentType(null),
          "setRequestHeader" in b &&
            y.forEach(i.toJSON(), function (A, B) {
              b.setRequestHeader(B, A);
            }),
          y.isUndefined(s.withCredentials) ||
            (b.withCredentials = !!s.withCredentials),
          l && l !== "json" && (b.responseType = s.responseType),
          u && (([h, m] = qn(u, !0)), b.addEventListener("progress", h)),
          a &&
            b.upload &&
            (([p, x] = qn(a)),
            b.upload.addEventListener("progress", p),
            b.upload.addEventListener("loadend", x)),
          (s.cancelToken || s.signal) &&
            ((c = (M) => {
              b &&
                (r(!M || M.type ? new Jt(null, e, b) : M),
                b.abort(),
                (b = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(c),
            s.signal &&
              (s.signal.aborted ? c() : s.signal.addEventListener("abort", c)));
        const O = If(s.url);
        if (O && fe.protocols.indexOf(O) === -1) {
          r(new H("Unsupported protocol " + O + ":", H.ERR_BAD_REQUEST, e));
          return;
        }
        b.send(o || null);
      });
    },
  Vf = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        s;
      const o = function (u) {
        if (!s) {
          (s = !0), l();
          const c = u instanceof Error ? u : this.reason;
          r.abort(
            c instanceof H ? c : new Jt(c instanceof Error ? c.message : c)
          );
        }
      };
      let i =
        t &&
        setTimeout(() => {
          (i = null), o(new H(`timeout ${t} of ms exceeded`, H.ETIMEDOUT));
        }, t);
      const l = () => {
        e &&
          (i && clearTimeout(i),
          (i = null),
          e.forEach((u) => {
            u.unsubscribe
              ? u.unsubscribe(o)
              : u.removeEventListener("abort", o);
          }),
          (e = null));
      };
      e.forEach((u) => u.addEventListener("abort", o));
      const { signal: a } = r;
      return (a.unsubscribe = () => y.asap(l)), a;
    }
  },
  qf = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) (s = r + t), yield e.slice(r, s), (r = s);
  },
  Wf = async function* (e, t) {
    for await (const n of Kf(e)) yield* qf(n, t);
  },
  Kf = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  co = (e, t, n, r) => {
    const s = Wf(e, t);
    let o = 0,
      i,
      l = (a) => {
        i || ((i = !0), r && r(a));
      };
    return new ReadableStream(
      {
        async pull(a) {
          try {
            const { done: u, value: c } = await s.next();
            if (u) {
              l(), a.close();
              return;
            }
            let p = c.byteLength;
            if (n) {
              let h = (o += p);
              n(h);
            }
            a.enqueue(new Uint8Array(c));
          } catch (u) {
            throw (l(u), u);
          }
        },
        cancel(a) {
          return l(a), s.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  ar =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  sl = ar && typeof ReadableStream == "function",
  Gf =
    ar &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  ol = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  Jf =
    sl &&
    ol(() => {
      let e = !1;
      const t = new Request(fe.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  uo = 64 * 1024,
  Gr = sl && ol(() => y.isReadableStream(new Response("").body)),
  Wn = { stream: Gr && ((e) => e.body) };
ar &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Wn[t] &&
        (Wn[t] = y.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new H(
                `Response type '${t}' is not supported`,
                H.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const Zf = async (e) => {
    if (e == null) return 0;
    if (y.isBlob(e)) return e.size;
    if (y.isSpecCompliantForm(e))
      return (
        await new Request(fe.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (y.isArrayBufferView(e) || y.isArrayBuffer(e)) return e.byteLength;
    if ((y.isURLSearchParams(e) && (e = e + ""), y.isString(e)))
      return (await Gf(e)).byteLength;
  },
  Xf = async (e, t) => {
    const n = y.toFiniteNumber(e.getContentLength());
    return n ?? Zf(t);
  },
  Yf =
    ar &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: s,
        cancelToken: o,
        timeout: i,
        onDownloadProgress: l,
        onUploadProgress: a,
        responseType: u,
        headers: c,
        withCredentials: p = "same-origin",
        fetchOptions: h,
      } = rl(e);
      u = u ? (u + "").toLowerCase() : "text";
      let x = Vf([s, o && o.toAbortSignal()], i),
        m;
      const g =
        x &&
        x.unsubscribe &&
        (() => {
          x.unsubscribe();
        });
      let b;
      try {
        if (
          a &&
          Jf &&
          n !== "get" &&
          n !== "head" &&
          (b = await Xf(c, r)) !== 0
        ) {
          let B = new Request(t, { method: "POST", body: r, duplex: "half" }),
            q;
          if (
            (y.isFormData(r) &&
              (q = B.headers.get("content-type")) &&
              c.setContentType(q),
            B.body)
          ) {
            const [K, F] = io(b, qn(lo(a)));
            r = co(B.body, uo, K, F);
          }
        }
        y.isString(p) || (p = p ? "include" : "omit");
        const E = "credentials" in Request.prototype;
        m = new Request(t, {
          ...h,
          signal: x,
          method: n.toUpperCase(),
          headers: c.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: E ? p : void 0,
        });
        let O = await fetch(m, h);
        const M = Gr && (u === "stream" || u === "response");
        if (Gr && (l || (M && g))) {
          const B = {};
          ["status", "statusText", "headers"].forEach((oe) => {
            B[oe] = O[oe];
          });
          const q = y.toFiniteNumber(O.headers.get("content-length")),
            [K, F] = (l && io(q, qn(lo(l), !0))) || [];
          O = new Response(
            co(O.body, uo, K, () => {
              F && F(), g && g();
            }),
            B
          );
        }
        u = u || "text";
        let A = await Wn[y.findKey(Wn, u) || "text"](O, e);
        return (
          !M && g && g(),
          await new Promise((B, q) => {
            tl(B, q, {
              data: A,
              headers: Ee.from(O.headers),
              status: O.status,
              statusText: O.statusText,
              config: e,
              request: m,
            });
          })
        );
      } catch (E) {
        throw (
          (g && g(),
          E && E.name === "TypeError" && /Load failed|fetch/i.test(E.message)
            ? Object.assign(new H("Network Error", H.ERR_NETWORK, e, m), {
                cause: E.cause || E,
              })
            : H.from(E, E && E.code, e, m))
        );
      }
    }),
  Jr = { http: pf, xhr: zf, fetch: Yf };
y.forEach(Jr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const fo = (e) => `- ${e}`,
  Qf = (e) => y.isFunction(e) || e === null || e === !1,
  il = {
    getAdapter: (e) => {
      e = y.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let i;
        if (
          ((r = n),
          !Qf(n) && ((r = Jr[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new H(`Unknown adapter '${i}'`);
        if (r) break;
        s[i || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(s).map(
          ([l, a]) =>
            `adapter ${l} ` +
            (a === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let i = t
          ? o.length > 1
            ? `since :
` +
              o.map(fo).join(`
`)
            : " " + fo(o[0])
          : "as no adapter specified";
        throw new H(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Jr,
  };
function Rr(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Jt(null, e);
}
function po(e) {
  return (
    Rr(e),
    (e.headers = Ee.from(e.headers)),
    (e.data = Tr.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    il
      .getAdapter(e.adapter || Sn.adapter)(e)
      .then(
        function (r) {
          return (
            Rr(e),
            (r.data = Tr.call(e, e.transformResponse, r)),
            (r.headers = Ee.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            el(r) ||
              (Rr(e),
              r &&
                r.response &&
                ((r.response.data = Tr.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = Ee.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const ll = "1.11.0",
  cr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    cr[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const ho = {};
cr.transitional = function (t, n, r) {
  function s(o, i) {
    return (
      "[Axios v" +
      ll +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (o, i, l) => {
    if (t === !1)
      throw new H(
        s(i, " has been removed" + (n ? " in " + n : "")),
        H.ERR_DEPRECATED
      );
    return (
      n &&
        !ho[i] &&
        ((ho[i] = !0),
        console.warn(
          s(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, i, l) : !0
    );
  };
};
cr.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function ed(e, t, n) {
  if (typeof e != "object")
    throw new H("options must be an object", H.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s],
      i = t[o];
    if (i) {
      const l = e[o],
        a = l === void 0 || i(l, o, e);
      if (a !== !0)
        throw new H("option " + o + " must be " + a, H.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new H("Unknown option " + o, H.ERR_BAD_OPTION);
  }
}
const jn = { assertOptions: ed, validators: cr },
  He = jn.validators;
let At = class {
  constructor(t) {
    (this.defaults = t || {}),
      (this.interceptors = { request: new so(), response: new so() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(s)
          : (s = new Error());
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? o &&
              !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + o)
            : (r.stack = o);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Pt(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 &&
      jn.assertOptions(
        r,
        {
          silentJSONParsing: He.transitional(He.boolean),
          forcedJSONParsing: He.transitional(He.boolean),
          clarifyTimeoutError: He.transitional(He.boolean),
        },
        !1
      ),
      s != null &&
        (y.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : jn.assertOptions(
              s,
              { encode: He.function, serialize: He.function },
              !0
            )),
      n.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (n.allowAbsoluteUrls = !0)),
      jn.assertOptions(
        n,
        {
          baseUrl: He.spelling("baseURL"),
          withXsrfToken: He.spelling("withXSRFToken"),
        },
        !0
      ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = o && y.merge(o.common, o[n.method]);
    o &&
      y.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (m) => {
          delete o[m];
        }
      ),
      (n.headers = Ee.concat(i, o));
    const l = [];
    let a = !0;
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == "function" && g.runWhen(n) === !1) ||
        ((a = a && g.synchronous), l.unshift(g.fulfilled, g.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (g) {
      u.push(g.fulfilled, g.rejected);
    });
    let c,
      p = 0,
      h;
    if (!a) {
      const m = [po.bind(this), void 0];
      for (
        m.unshift(...l), m.push(...u), h = m.length, c = Promise.resolve(n);
        p < h;

      )
        c = c.then(m[p++], m[p++]);
      return c;
    }
    h = l.length;
    let x = n;
    for (p = 0; p < h; ) {
      const m = l[p++],
        g = l[p++];
      try {
        x = m(x);
      } catch (b) {
        g.call(this, b);
        break;
      }
    }
    try {
      c = po.call(this, x);
    } catch (m) {
      return Promise.reject(m);
    }
    for (p = 0, h = u.length; p < h; ) c = c.then(u[p++], u[p++]);
    return c;
  }
  getUri(t) {
    t = Pt(this.defaults, t);
    const n = nl(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Xi(n, t.params, t.paramsSerializer);
  }
};
y.forEach(["delete", "get", "head", "options"], function (t) {
  At.prototype[t] = function (n, r) {
    return this.request(
      Pt(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
y.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, i, l) {
      return this.request(
        Pt(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: i,
        })
      );
    };
  }
  (At.prototype[t] = n()), (At.prototype[t + "Form"] = n(!0));
});
let td = class al {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let o;
        const i = new Promise((l) => {
          r.subscribe(l), (o = l);
        }).then(s);
        return (
          (i.cancel = function () {
            r.unsubscribe(o);
          }),
          i
        );
      }),
      t(function (o, i, l) {
        r.reason || ((r.reason = new Jt(o, i, l)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new al(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
};
function nd(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function rd(e) {
  return y.isObject(e) && e.isAxiosError === !0;
}
const Zr = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Zr).forEach(([e, t]) => {
  Zr[t] = e;
});
function cl(e) {
  const t = new At(e),
    n = Bi(At.prototype.request, t);
  return (
    y.extend(n, At.prototype, t, { allOwnKeys: !0 }),
    y.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return cl(Pt(e, s));
    }),
    n
  );
}
const se = cl(Sn);
se.Axios = At;
se.CanceledError = Jt;
se.CancelToken = td;
se.isCancel = el;
se.VERSION = ll;
se.toFormData = lr;
se.AxiosError = H;
se.Cancel = se.CanceledError;
se.all = function (t) {
  return Promise.all(t);
};
se.spread = nd;
se.isAxiosError = rd;
se.mergeConfig = Pt;
se.AxiosHeaders = Ee;
se.formToJSON = (e) => Qi(y.isHTMLForm(e) ? new FormData(e) : e);
se.getAdapter = il.getAdapter;
se.HttpStatusCode = Zr;
se.default = se;
const {
  Axios: Rd,
  AxiosError: Od,
  CanceledError: Ad,
  isCancel: kd,
  CancelToken: Pd,
  VERSION: Ld,
  all: Md,
  Cancel: Nd,
  isAxiosError: Id,
  spread: Fd,
  toFormData: Dd,
  AxiosHeaders: jd,
  HttpStatusCode: Bd,
  formToJSON: Ud,
  getAdapter: $d,
  mergeConfig: Hd,
} = se;
var un = ((e) => (
  (e[(e.error = -1)] = "error"),
  (e[(e.success = 0)] = "success"),
  (e[(e.needAuthorization = 401)] = "needAuthorization"),
  (e[(e.banned = 4030)] = "banned"),
  (e[(e.sandboxFull = 4122)] = "sandboxFull"),
  (e[(e.redeemCodeExpired = 4203)] = "redeemCodeExpired"),
  (e[(e.redeemCodeInvalid = 4204)] = "redeemCodeInvalid"),
  e
))(un || {});
const sd = () => {
    let e = () => {};
    const t = new Promise((n) => {
      e = n;
    });
    return [e, t];
  },
  { CancelToken: od } = se,
  id = Math.random().toString().slice(2),
  ld = 1 * 60 * 1e3,
  ad = "https://mgx.dev/api",
  cd = od.source(),
  ud = se.create({ baseURL: ad, timeout: ld }),
  mo = (e) => un.success === +e,
  fd = async (e) => {
    const t = cd;
    (e.cancelToken = e.cancelToken || t.token), (e.headers = e.headers || {});
    function n(r) {
      if (/^\/chats\/[^/]+\/.storage\//.test(e.url || "")) return;
      (r || this.message).startsWith("timeout")
        ? console.error({
            content:
              "Request timed out. Please check your network or try again later.",
          })
        : console.error({ content: r || this.message });
    }
    try {
      const r = await ud.request(e),
        { data: s } = r;
      return (
        (s.message = s.message || ""),
        (s.isRequestSuccess = mo(s.code)),
        (s.showRequestErrorMessage = n.bind(s)),
        s
      );
    } catch (r) {
      if (r.message === id) {
        const [, l] = sd();
        return l;
      }
      const s = r.response;
      if (!s) {
        const l = { code: un.error, message: r.message, isRequestSuccess: !1 };
        return (l.showRequestErrorMessage = n.bind(l)), l;
      }
      const { data: o } = s;
      if (typeof o == "string") {
        const l = {
          code: un.error,
          message: r.message || s.statusText,
          isRequestSuccess: !1,
        };
        return (l.showRequestErrorMessage = n.bind(l)), l;
      }
      o &&
        ((o.message = o.message || r.message || ""),
        (o.isRequestSuccess = mo(o.code)),
        (o.showRequestErrorMessage = n.bind(o)));
      const i = { code: un.error, message: r.message, isRequestSuccess: !1 };
      return (i.showRequestErrorMessage = n.bind(i)), Object.assign(i, o);
    }
  },
  dd = (e) => fd({ url: "/v1/public/domains", method: "get", params: e }),
  pd = gt({
    __name: "madeBy",
    setup(e) {
      const t = Le(!0),
        n = Le(!1),
        r = () => {
          t.value = !1;
        },
        s = {
          private: "Create My App",
          secret: "Create My App",
          public: "Explore More",
        },
        o = Le("private"),
        i = Le({
          pricing_plan: "",
          access_mode: "",
          chat_id: "",
          badge_visible: !1,
        }),
        l = Dr(() => i.value.pricing_plan === "free"),
        a = Dr(() => l.value || i.value.badge_visible),
        u = async () => {
          const h = window.location.host,
            {
              isRequestSuccess: x,
              data: m,
              showRequestErrorMessage: g,
            } = await dd({ domain: h });
          if (!x) {
            g();
            return;
          }
          (i.value = m), (o.value = m.access_mode);
        },
        c = () => {
          u();
        },
        p = () =>
          o.value !== "public"
            ? (window.open(
                "https://mgx.dev/api".replace("/api", "") || "https://mgx.dev",
                "_blank"
              ),
              !1)
            : (i.value.chat_id &&
                window.open(
                  `${
                    "https://mgx.dev/api".replace("/api", "") ||
                    "https://mgx.dev"
                  }/app/${i.value.chat_id}`,
                  "_blank"
                ),
              !1);
      return (
        Mt(() => {
          c();
        }),
        (h, x) =>
          a.value
            ? (kt(),
              mn(
                "div",
                {
                  key: 0,
                  class: Vt([
                    "mgx-made-by-wrapper",
                    { "mgx-made-by-wrapper_closed": !t.value },
                  ]),
                },
                [
                  Oe(
                    "div",
                    {
                      class: Vt([
                        "mgx-made-by",
                        { "mgx-made-by_active": n.value },
                      ]),
                      onMouseleave: x[3] || (x[3] = (m) => (n.value = !1)),
                    },
                    [
                      Oe(
                        "div",
                        {
                          class: "mgx-made-by_made",
                          onMouseover: x[0] || (x[0] = (m) => (n.value = !0)),
                          onClick: x[1] || (x[1] = (m) => (n.value = !0)),
                        },
                        [
                          ...(x[4] ||
                            (x[4] = [
                              Qa(
                                '<span data-v-7586adae>Made by</span><svg xmlns="http://www.w3.org/2000/svg" width="44" height="17" viewBox="0 0 44 17" fill="none" data-v-7586adae><path d="M8.87064 0.832031C7.04164 0.832031 5.51477 2.27567 5.15493 4.19765C5.74581 4.23295 6.30331 4.39215 6.80181 4.64962C6.87874 3.44917 7.77573 2.50196 8.87095 2.50196C10.0167 2.50196 10.9454 3.53852 10.9454 4.81718C10.9454 4.93672 10.9373 5.05413 10.9217 5.16879L9.3146 6.16143L11.1504 8.45621C12.0712 7.68318 12.6666 6.45346 12.6666 5.06853C12.6666 2.72878 10.9671 0.832031 8.87064 0.832031Z" fill="white" fill-opacity="0.98" data-v-7586adae></path><path d="M7.73632 8.42594H7.7254C7.65501 8.33186 7.58374 8.23642 7.51151 8.13969L7.34805 7.92086C6.26115 6.46689 4.72333 6.40168 3.82979 6.67601C3.02488 6.92313 2.37587 7.71051 2.514 8.76631C2.57396 9.22466 2.85191 9.5977 3.29793 9.88126C3.75716 10.1732 4.50547 10.1729 5.16939 10.0256L4.72745 12.1929C3.96612 12.1929 3.05685 11.9555 2.28942 11.4676C1.50878 10.9713 0.800784 10.1619 0.650102 9.01016C0.380015 6.94565 1.69598 5.36473 3.27809 4.879C3.58407 4.78507 3.93405 4.71626 4.31158 4.68709C4.68351 4.72585 5.1686 4.84147 5.66396 5.13783C6.96455 5.91594 7.62249 6.84923 8.66727 8.42594H9.08404C8.0943 6.96914 6.61947 4.88065 4.50487 4.67578C5.88862 4.62066 7.5902 5.10522 8.85364 6.79535L8.95687 6.93347C9.39032 7.51347 9.7551 8.00159 10.0846 8.41375H10.0956C10.166 8.50782 10.2372 8.60326 10.3095 8.69999L10.4729 8.91883C11.5598 10.3728 13.0976 10.438 13.9912 10.1637C14.7961 9.91656 15.4451 9.12918 15.307 8.07337C15.247 7.61502 14.9691 7.24199 14.523 6.95842C14.0638 6.66647 13.3155 6.66674 12.6516 6.81413L13.0935 4.64677C13.8548 4.64677 14.7641 4.88418 15.5315 5.37208C16.3122 5.86838 17.0202 6.67774 17.1709 7.82953C17.4409 9.89403 16.125 11.475 14.5429 11.9607C14.1974 12.0667 13.7959 12.1408 13.3619 12.1619C13.0014 12.1156 12.5486 11.9963 12.087 11.7201C10.7864 10.942 10.1284 10.0087 9.08364 8.43203H8.66688C9.63725 9.86033 11.0739 11.8958 13.1227 12.168C11.7763 12.1718 10.1725 11.6565 8.96732 10.0443L8.8641 9.90622C8.43068 9.32625 8.06585 8.83807 7.73632 8.42594Z" fill="white" fill-opacity="0.98" data-v-7586adae></path><path d="M12.6745 12.5579C12.3528 14.5338 10.8031 16.032 8.93982 16.032C6.84336 16.032 5.14383 14.1353 5.14383 11.7955C5.14383 10.4157 5.73494 9.18986 6.64997 8.41634L6.65755 8.40568L8.49196 10.6987L6.89004 11.6882C6.87375 11.8051 6.86529 11.9249 6.86529 12.0469C6.86529 13.3255 7.79407 14.3621 8.93978 14.3621C10.0656 14.3621 10.9819 13.3613 11.0134 12.1134C11.5161 12.3687 12.0785 12.5255 12.6745 12.5579Z" fill="white" fill-opacity="0.98" data-v-7586adae></path><path fill-rule="evenodd" clip-rule="evenodd" d="M32.757 9.28123V7.95114H35.659V11.0134L35.6543 11.0209C35.4203 11.3994 35.0462 11.7005 34.5349 11.9255C34.0303 12.1437 33.4714 12.2527 32.8592 12.2527C32.1309 12.2527 31.4831 12.0893 30.9167 11.7617C30.3504 11.4342 29.9102 10.9769 29.5965 10.3904C29.2828 9.80388 29.1263 9.13275 29.1263 8.37786C29.1263 7.61616 29.2862 6.94154 29.6068 6.35489C29.934 5.76862 30.381 5.31457 30.9473 4.99389C31.5135 4.67331 32.1408 4.51319 32.8288 4.51319C33.5164 4.51319 34.1138 4.66981 34.6198 4.98427C35.1318 5.29156 35.4785 5.68889 35.6571 6.17658L35.6661 6.20126L34.3972 6.9309L34.3827 6.90053C34.2363 6.59453 34.0272 6.35572 33.7552 6.18324C33.4838 6.0045 33.1616 5.91427 32.7882 5.91427C32.3949 5.91427 32.0424 6.01417 31.73 6.21361C31.4176 6.41297 31.1712 6.69901 30.9908 7.07302C30.8107 7.44668 30.7201 7.88136 30.7201 8.37786C30.7201 8.88794 30.8107 9.32928 30.9907 9.7028C31.1776 10.0764 31.4372 10.3624 31.7697 10.5619C32.1091 10.7615 32.5023 10.8617 32.9504 10.8617C33.4663 10.8617 33.867 10.7212 34.1565 10.4436V9.28123H32.757ZM34.4025 6.86954L34.3971 6.85896C34.267 6.59741 34.0903 6.38496 33.8669 6.22162C34.0982 6.39064 34.2796 6.61186 34.4109 6.88634L34.4054 6.87533L34.4025 6.86954Z" fill="white" fill-opacity="0.98" data-v-7586adae></path><path fill-rule="evenodd" clip-rule="evenodd" d="M43.2915 4.64727L40.6627 8.29901L43.4131 12.1332H41.5105L39.7216 9.55037L37.9226 12.1332H36.1416L38.8821 8.32928L36.2638 4.64727H38.1356L39.8231 7.07799L41.5105 4.64727H43.2915Z" fill="white" fill-opacity="0.98" data-v-7586adae></path><path fill-rule="evenodd" clip-rule="evenodd" d="M26.4193 7.4177V12.1332H27.8813V4.64727H26.7177L24.2092 8.46534L21.6907 4.64727H20.4764V12.1332H21.9282V7.39757L23.7768 10.1556H24.5809L26.4193 7.4177Z" fill="white" fill-opacity="0.98" data-v-7586adae></path></svg>',
                                2
                              ),
                            ])),
                        ],
                        32
                      ),
                      Oe(
                        "div",
                        {
                          class: "mgx-made-by_create",
                          onClick: x[2] || (x[2] = (m) => p()),
                        },
                        [
                          Oe("span", null, Eo(s[o.value]), 1),
                          x[5] ||
                            (x[5] = Oe(
                              "svg",
                              {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "13",
                                height: "13",
                                viewBox: "0 0 17 17",
                                fill: "none",
                              },
                              [
                                Oe("path", {
                                  d: "M1.98975 4.22219C1.98975 2.85252 3.10008 1.74219 4.46975 1.74219H6.2266C6.49169 1.74219 6.7066 1.95709 6.7066 2.22219C6.7066 2.48728 6.49169 2.70219 6.2266 2.70219H4.46975C3.63027 2.70219 2.94975 3.38271 2.94975 4.22219V12.2222C2.94975 13.0617 3.63027 13.7422 4.46975 13.7422H12.4697C13.3092 13.7422 13.9897 13.0617 13.9897 12.2222V10.3803C13.9897 10.1152 14.2046 9.9003 14.4697 9.9003C14.7348 9.9003 14.9497 10.1152 14.9497 10.3803V12.2222C14.9497 13.5919 13.8394 14.7022 12.4697 14.7022H4.46975C3.10008 14.7022 1.98975 13.5919 1.98975 12.2222V4.22219Z",
                                  fill: "white",
                                  "fill-opacity": "0.98",
                                }),
                                Oe("path", {
                                  d: "M9.32312 2.22219C9.32312 1.95709 9.53802 1.74219 9.80312 1.74219H14.4698C14.7349 1.74219 14.9498 1.95709 14.9498 2.22219V6.88885C14.9498 7.15395 14.7349 7.36885 14.4698 7.36885C14.2047 7.36885 13.9898 7.15395 13.9898 6.88885V3.38099L9.40913 7.96165C9.22168 8.1491 8.91776 8.1491 8.73031 7.96165C8.54286 7.7742 8.54286 7.47028 8.73031 7.28282L13.3109 2.70219H9.80312C9.53802 2.70219 9.32312 2.48728 9.32312 2.22219Z",
                                  fill: "white",
                                  "fill-opacity": "0.98",
                                }),
                              ],
                              -1
                            )),
                        ]
                      ),
                    ],
                    34
                  ),
                  Oe("div", { class: "mgx-made-by_close", onClick: r }, [
                    ...(x[6] ||
                      (x[6] = [
                        Oe(
                          "svg",
                          {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "18",
                            height: "18",
                            viewBox: "0 0 18 18",
                            fill: "none",
                          },
                          [
                            Oe("path", {
                              d: "M9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75Z",
                              fill: "#4E4E6C",
                              stroke: "#63637D",
                              "stroke-width": "1.08",
                              "stroke-linejoin": "round",
                            }),
                            Oe("path", {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              d: "M11.5033 7.26168C11.7142 7.0508 11.7142 6.70889 11.5033 6.49801C11.2925 6.28712 10.9506 6.28712 10.7397 6.49801L9.00019 8.23749L7.2607 6.49801C7.04982 6.28712 6.70791 6.28712 6.49703 6.49801C6.28615 6.70889 6.28615 7.0508 6.49703 7.26168L8.23651 9.00116L6.49703 10.7406C6.28615 10.9515 6.28615 11.2934 6.49703 11.5043C6.70791 11.7152 7.04982 11.7152 7.2607 11.5043L9.00019 9.76484L10.7397 11.5043C10.9506 11.7152 11.2925 11.7152 11.5033 11.5043C11.7142 11.2934 11.7142 10.9515 11.5033 10.7406L9.76386 9.00116L11.5033 7.26168Z",
                              fill: "white",
                              "fill-opacity": "0.98",
                            }),
                          ],
                          -1
                        ),
                      ])),
                  ]),
                ],
                2
              ))
            : xi("", !0)
      );
    },
  }),
  hd = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, s] of t) n[r] = s;
    return n;
  },
  md = hd(pd, [["__scopeId", "data-v-7586adae"]]),
  gd = (e) => {
    const { targets: t } = e,
      n = t.map((s) => document.querySelector(s.domPath)),
      r = rr(n);
    for (let s = 0; s < r.length; s++) r[s].removeAttribute("class");
  },
  bd = () => {
    if (typeof window > "u") return !1;
    const e = document.createElement("script");
    return (
      (e.src = "https://unpkg.com/tw-to-css@0.0.12/dist/cdn.min.js"),
      (e.onload = () => {
        console.log("tw-to-css loaded");
      }),
      document.head.appendChild(e),
      !0
    );
  };
bd();
const yd = (e) => window.twi(e),
  wd = (e) => {
    const { targets: t } = e,
      n = t.map((s) => document.querySelector(s.domPath)),
      r = rr(n);
    for (let s = 0; s < r.length; s++) {
      const o = r[s],
        i = e.class,
        l = _u(o.className, i),
        a = yd(l),
        u = o.getAttribute("style"),
        c = xu(u || "", a, [
          "backgroundColor",
          "borderRadius",
          "marginLeft",
          "marginTop",
          "marginBottom",
          "marginRight",
          "paddingLeft",
          "paddingTop",
          "paddingBottom",
          "paddingRight",
          "textAlign",
          "fontSize",
          "fontWeight",
          "fontFamily",
          "color",
          "background-color",
          "border-radius",
          "margin-left",
          "margin-top",
          "margin-bottom",
          "margin-right",
          "padding-left",
          "padding-top",
          "padding-bottom",
          "padding-right",
          "text-align",
          "font-size",
          "font-weight",
          "font-family",
          "opacity",
        ]);
      o.setAttribute("style", c);
    }
  },
  xd = gt({
    __name: "index",
    setup(e) {
      const t = (r) => {
        r.type === "applyTWCss"
          ? wd(r.data)
          : r.type === "applyReset" && gd(r.data);
      };
      return (
        (() => {
          tt.addListener((r) => {
            t(r);
          });
        })(),
        () => {}
      );
    },
  }),
  vd = gt({
    __name: "events",
    setup(e) {
      qe.addEventListener(
        "error",
        (n) => {
          var s, o;
          const r = n;
          try {
            const i =
              ((s = r == null ? void 0 : r.target) == null
                ? void 0
                : s.nodeName) === "SCRIPT" &&
              (r == null ? void 0 : r.target).src
                ? `get ${(r == null ? void 0 : r.target).src} failed`
                : "";
            tt.sendMessage("mgx-appview-error", {
              errMsg: i || r.message,
              stack:
                (o = r == null ? void 0 : r.error) == null ? void 0 : o.stack,
            });
          } catch {}
        },
        { passive: !0 }
      );
      const t = window.console.log;
      return (
        (window.console.log = (...n) => {
          try {
            tt.sendMessage("mgx-appview-console", { args: n });
          } catch {}
          t(...n);
        }),
        Mt(() => {
          tt.sendMessage("appViewerReady", {});
        }),
        Yo(() => {
          qe.cleanup();
        }),
        () => {}
      );
    },
  }),
  _d = gt({
    __name: "App",
    setup(e) {
      const t = window.name.includes(jc);
      return (n, r) => (
        kt(),
        mn(
          ke,
          null,
          [
            pe(Tu),
            Ho(t) ? xi("", !0) : (kt(), bi(md, { key: 0 })),
            pe(xd),
            pe(vd),
          ],
          64
        )
      );
    },
  }),
  ws = document.createElement("div");
ws.id = Dc;
document.body.appendChild(ws);
const ul = ws.attachShadow({ mode: "open" }),
  Cd = () => {
    document.querySelectorAll(`style[id="${Fc}"]`).forEach((e) => {
      var t;
      ul.appendChild(e.cloneNode(!0)),
        (t = e.parentElement) == null || t.removeChild(e),
        e.remove();
    });
  };
Cd();
const fl = document.createElement("div");
ul.appendChild(fl);
Mc(_d).mount(fl);
//# sourceMappingURL=index-4VNliDpC.js.map

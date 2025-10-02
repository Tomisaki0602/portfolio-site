import { e as createComponent, m as maybeRenderHead, r as renderTemplate } from './astro/server_CD85093t.mjs';
import 'kleur/colors';
import 'clsx';

const $$HeaderWork = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<body> <header class="header"> <div class="header_inner pc-none"> <h1><a href="../"><img src="/images/header-img.png" alt=""></a></h1> </div> <div class="header_inner sp-none"> <h1><a href="../"><img src="/images/header-img.png" alt=""></a></h1> <nav class="header_inner-nav"> <ul class="header_inner-list"> <li class="header_inner-item"> <a href="/#about">
ABOUT
</a> </li> <li class="header_inner-item"> <a href="/#skills">
SKILLS
</a> </li> <li class="header_inner-item"> <a href="/#policy">
POLICY
</a> </li> <li class="header_inner-item"> <a href="/#works">
WORKS
</a> </li> </ul> </nav> </div> </header> <!-- ハンバーガーボタンは header 外に配置 --> <button class="drawer-btn pc-none" aria-label="menu"> <span></span> <span></span> <span></span> </button> <nav class="drawer-nav pc-none"> <ul> <li><a href="/#about">ABOUT<small>私について</small></a></li> <li><a href="/#skills">SKILLS<small>スキル</small></a></li> <li><a href="/#policy">POLICY<small>大切にしていること</small></a></li> <li><a href="/#works">WORKS<small>実績</small></a></li> </ul> </nav></body>`;
}, "/Users/nomark_admin/lunar-limb/src/components/HeaderWork.astro", void 0);

const $$FooterWork = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer sub"> <div class="pagetop top-button">TOPへ戻る</div> <div class="footer-flex"> <div class="footer-nav"> <nav class="footer_inner-nav"> <ul class="footer_inner-list"> <li class="footer_inner-item"> <a href="/#about">
ABOUT
<small>私について</small> </a> </li> <li class="footer_inner-item"> <a href="/#skills">
SKILLS
<small>スキル</small> </a> </li> <li class="footer_inner-item"> <a href="/#poricy">
WORKS
<small>大切にしていること</small> </a> </li> <li class="footer_inner-item"> <a href="/#works">
WORKS
<small>実績</small> </a> </li> </ul> </nav> </div> </div> <small>&copy; 2025 Ryota Tomisaki. All Rights Reserved.</small> </footer>`;
}, "/Users/nomark_admin/lunar-limb/src/components/FooterWork.astro", void 0);

export { $$FooterWork as $, $$HeaderWork as a };

import { e as createComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CD85093t.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Form = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<form id="contact-form"> <input type="text" name="name" placeholder="\u540D\u524D" required> <input type="email" name="email" placeholder="\u30E1\u30FC\u30EB" required> <select name="type" required> <option value="">\u7A2E\u5225\u3092\u9078\u629E</option> <option value="\u8CEA\u554F">\u8CEA\u554F</option> <option value="\u76F8\u8AC7">\u76F8\u8AC7</option> <option value="\u305D\u306E\u4ED6">\u305D\u306E\u4ED6\u78BA\u8A8D</option> </select> <textarea name="message" placeholder="\u30E1\u30C3\u30BB\u30FC\u30B8" required></textarea> <button type="submit">\u9001\u4FE1</button> </form> <script type="module" src="/contact.js"><\/script>'])), maybeRenderHead());
}, "/Users/nomark_admin/lunar-limb/src/pages/form/form.astro", void 0);

const $$file = "/Users/nomark_admin/lunar-limb/src/pages/form/form.astro";
const $$url = "/form/form";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Form,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

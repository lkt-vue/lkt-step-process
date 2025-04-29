var $ = Object.defineProperty;
var G = (e, a, n) => a in e ? $(e, a, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[a] = n;
var o = (e, a, n) => G(e, typeof a != "symbol" ? a + "" : a, n);
import { defineComponent as K, mergeDefaults as Q, useSlots as W, ref as f, watch as x, computed as c, resolveComponent as b, createElementBlock as g, openBlock as h, normalizeClass as X, createBlock as E, createCommentVNode as L, createElementVNode as H, normalizeProps as Y, mergeProps as C, withDirectives as w, createVNode as M, vShow as B, Fragment as Z, renderList as J, renderSlot as ee } from "vue";
import "lkt-string-tools";
var te = ((e) => (e.Button = "button", e.Submit = "submit", e.Reset = "reset", e.Anchor = "anchor", e.Content = "content", e.Switch = "switch", e.HiddenSwitch = "hidden-switch", e.Split = "split", e.SplitLazy = "split-lazy", e.SplitEver = "split-ever", e.Tooltip = "tooltip", e.TooltipLazy = "tooltip-lazy", e.TooltipEver = "tooltip-ever", e.FileUpload = "file-upload", e.ImageUpload = "image-upload", e))(te || {}), ae = ((e) => (e.Text = "text", e.Email = "email", e.Tel = "tel", e.Password = "password", e.Search = "search", e.Number = "number", e.Color = "color", e.Range = "range", e.Textarea = "textarea", e.Html = "html", e.Date = "date", e.File = "file", e.Image = "image", e.Select = "select", e.Check = "check", e.Switch = "switch", e.Calc = "calc", e.Card = "card", e.Elements = "elements", e))(ae || {}), re = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], s, ne = (s = class {
  constructor(a) {
  }
  feed(a = {}, n = this) {
    if (typeof a == "object") for (let [l, y] of Object.entries(a)) n.assignProp(l, y);
  }
  assignProp(a, n) {
    if (!(re.includes(a) || s.lktExcludedProps.includes(a))) {
      if (s.lktDateProps.includes(a)) {
        this[a] = new Date(n);
        return;
      }
      this[a] = n;
    }
  }
}, o(s, "lktAllowUndefinedProps", []), o(s, "lktExcludedProps", []), o(s, "lktDateProps", []), o(s, "lktStrictItem", !1), o(s, "lktDefaultValues", []), s), le = ((e) => (e.Auto = "auto", e.Always = "always", e.Lazy = "lazy", e.Ever = "ever", e))(le || {}), oe = ((e) => (e.Transform = "transform", e.Height = "height", e.Display = "display", e))(oe || {}), ie = ((e) => (e.Href = "href", e.RouterLink = "router-link", e.RouterLinkBack = "router-link-back", e.Mail = "mail", e.Tel = "tel", e.Tab = "tab", e.Download = "download", e.Action = "action", e.Legacy = "", e))(ie || {}), se = ((e) => (e.Static = "static", e.Parallax = "parallax", e))(se || {}), ue = ((e) => (e.None = "", e.Field = "field", e.Button = "button", e.Anchor = "anchor", e))(ue || {}), ce = ((e) => (e.A0 = "a0", e.A1 = "a1", e.A2 = "a2", e.A3 = "a3", e.A4 = "a4", e.A5 = "a5", e.A6 = "a6", e.A7 = "a7", e.A8 = "a8", e.A9 = "a9", e))(ce || {}), de = ((e) => (e.List = "list", e.Inline = "inline", e.Count = "count", e))(de || {}), ve = ((e) => (e.MinStringLength = "min-str", e.MinNumber = "min-num", e.MaxStringLength = "max-str", e.MaxNumber = "max-num", e.Email = "email", e.Empty = "empty", e.EqualTo = "equal-to", e.MinNumbers = "min-numbers", e.MaxNumbers = "max-numbers", e.MinChars = "min-chars", e.MaxChars = "max-chars", e.MinUpperChars = "min-upper-chars", e.MaxUpperChars = "max-upper-chars", e.MinLowerChars = "min-lower-chars", e.MaxLowerChars = "max-lower-chars", e.MinSpecialChars = "min-special-chars", e.MaxSpecialChars = "max-special-chars", e))(ve || {}), pe = ((e) => (e.Ok = "ok", e.Ko = "ko", e.Info = "info", e))(pe || {}), me = ((e) => (e.StorageUnit = "unit", e.Directory = "dir", e.Image = "img", e.Video = "vid", e.File = "file", e))(me || {}), he = ((e) => (e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e))(he || {}), ke = ((e) => (e.NotDefined = "", e.Button = "button", e))(ke || {}), fe = ((e) => (e.Start = "start", e.End = "end", e))(fe || {}), xe = ((e) => (e.Create = "create", e.Update = "update", e.Read = "read", e))(xe || {}), ge = ((e) => (e.Inline = "inline", e.Modal = "modal", e))(ge || {}), ye = ((e) => (e.Top = "top", e.Bottom = "bottom", e))(ye || {}), be = ((e) => (e.Changed = "changed", e.Always = "always", e.Never = "never", e))(be || {}), Le = ((e) => (e.Manual = "manual", e.Auto = "auto", e.Delay = "delay", e))(Le || {}), Ce = ((e) => (e.Toast = "toast", e.Inline = "inline", e))(Ce || {}), we = ((e) => (e.Anchor = "anchor", e.Button = "button", e.Entry = "entry", e))(we || {}), Be = ((e) => (e.Modal = "modal", e.Confirm = "confirm", e))(Be || {}), Ae = ((e) => (e.Pages = "pages", e.PrevNext = "prev-next", e.PagesPrevNext = "pages-prev-next", e.PagesPrevNextFirstLast = "pages-prev-next-first-last", e.LoadMore = "load-more", e.Infinite = "infinite", e))(Ae || {}), Pe = ((e) => (e.None = "", e.Incremental = "incremental", e.Decremental = "decremental", e))(Pe || {}), Se = ((e) => (e.NotDefined = "", e.Hidden = "hidden", e.Integer = "integer", e.Decimal = "decimal", e.Auto = "auto", e))(Se || {}), A, Ie = (A = class extends ne {
  constructor(a = {}) {
    super();
    o(this, "modelValue", "");
    o(this, "loading", !1);
    o(this, "steps", []);
    o(this, "header", {});
    o(this, "nextButton", {});
    o(this, "prevButton", {});
    this.feed(a);
  }
}, o(A, "lktDefaultValues", ["modelValue", "loading", "steps", "header"]), A), De = ((e) => (e.Table = "table", e.Item = "item", e.Ul = "ul", e.Ol = "ol", e.Carousel = "carousel", e.Accordion = "accordion", e))(De || {}), Ee = ((e) => (e[e.Auto = 0] = "Auto", e[e.PreferItem = 1] = "PreferItem", e[e.PreferCustomItem = 2] = "PreferCustomItem", e[e.PreferColumns = 3] = "PreferColumns", e))(Ee || {}), He = ((e) => (e.NotDefined = "", e.ActionIcon = "action-icon", e))(He || {}), Me = ((e) => (e.Message = "message", e.Button = "button", e))(Me || {}), Ne = ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(Ne || {}), Te = ((e) => (e.Fixed = "fixed", e.Absolute = "absolute", e))(Te || {}), Re = ((e) => (e.Top = "top", e.Bottom = "bottom", e.Center = "center", e.ReferrerCenter = "referrer-center", e))(Re || {}), _e = ((e) => (e.Left = "left", e.Right = "right", e.Center = "center", e.LeftCorner = "left-corner", e.RightCorner = "right-corner", e))(_e || {}), Ve = ((e) => (e.LktAnchor = "lkt-anchor", e.LktLayoutAccordion = "lkt-layout-accordion", e.LktTextAccordion = "lkt-text-accordion", e.LktLayoutBox = "lkt-layout-box", e.LktTextBox = "lkt-text-box", e.LktLayoutBanner = "lkt-layout-banner", e.LktTextBanner = "lkt-text-banner", e.LktButton = "lkt-button", e.LktLayout = "lkt-layout", e.LktHeader = "lkt-header", e.LktIcon = "lkt-icon", e.LktIcons = "lkt-icons", e.LktImage = "lkt-image", e.LktText = "lkt-text", e))(Ve || {}), Fe = ((e) => (e.Grid = "grid", e.FlexRow = "flex-row", e.FlexRows = "flex-rows", e.FlexColumn = "flex-column", e))(Fe || {}), ze = ((e) => (e.None = "", e.Focus = "focus", e.Blur = "blur", e.Always = "always", e))(ze || {}), Ue = ((e) => (e.Auto = "auto", e.Local = "local", e.Remote = "remote", e))(Ue || {}), Oe = ((e) => (e.Refresh = "refresh", e.Close = "close", e.ReOpen = "reOpen", e.Exec = "exec", e.Open = "open", e))(Oe || {}), je = ((e) => (e.Asc = "asc", e.Desc = "desc", e))(je || {}), qe = ((e) => (e.Create = "create", e.Update = "update", e.Edit = "edit", e.Drop = "drop", e.Sort = "sort", e.SwitchEditMode = "switch-edit-mode", e.InlineEdit = "inline-edit", e.InlineCreate = "inline-create", e.ModalCreate = "modal-create", e.InlineCreateEver = "inline-create-ever", e))(qe || {}), $e = ((e) => (e.Lazy = "lazy", e.Ever = "ever", e))($e || {}), Ge = ((e) => (e.Page = "page", e.Element = "element", e))(Ge || {}), Ke = ((e) => (e.Quick = "quick", e.Full = "full", e))(Ke || {});
function Qe(e) {
  let a = new e(), n = {};
  if (!Array.isArray(e.lktDefaultValues)) throw new Error("lktDefaultValues must be a keys array.");
  for (let l of e.lktDefaultValues) l in a && (n[l] = a[l]);
  return n;
}
const We = { class: "lkt-step-process-buttons" }, Xe = {
  key: 1,
  class: "lkt-step-process_content"
}, Ye = { class: "lkt-grid-1" }, Ze = /* @__PURE__ */ K({
  __name: "LktStepProcess",
  props: /* @__PURE__ */ Q({
    modelValue: {},
    loading: { type: Boolean },
    steps: {},
    header: {},
    nextButton: {},
    prevButton: {}
  }, Qe(Ie)),
  emits: [
    "next",
    "prev",
    "finish",
    "update:modelValue",
    "update:loading"
  ],
  setup(e, { expose: a, emit: n }) {
    const l = e, y = W(), k = n, d = f(l.loading), v = f(l.modelValue), u = f(l.steps), P = f(null), S = f(null);
    x(() => l.loading, (t) => d.value = t), x(() => l.modelValue, (t) => v.value = t), x(d, (t) => k("update:loading", t)), x(v, (t) => k("update:modelValue", t));
    const N = c(() => {
      let t = [];
      for (let r in y) r.indexOf("step-") !== -1 && t.push(r.substring(5));
      return t;
    }), p = c(() => u.value.findIndex((t) => t.key === v.value)), i = c(() => u.value[p.value]), T = c(() => p.value === 0), R = c(() => p.value === u.value.length - 1), _ = c(() => {
      var r, m;
      let t = { ...l.prevButton };
      return (r = i.value) != null && r.prevButton && (t = { ...t, ...(m = i.value) == null ? void 0 : m.prevButton }), typeof t.disabled > "u" && (t.disabled = T.value), t;
    }), V = c(() => {
      var r, m;
      let t = { ...l.nextButton };
      return (r = i.value) != null && r.nextButton && (t = { ...t, ...(m = i.value) == null ? void 0 : m.nextButton }), typeof t.disabled > "u" && (t.disabled = R.value), t;
    }), F = c(() => {
      var t, r;
      return typeof ((t = i.value) == null ? void 0 : t.prevHidden) == "function" ? i.value.prevHidden(u.value) : typeof ((r = i.value) == null ? void 0 : r.prevHidden) == "boolean" ? i.value.prevHidden : p.value === 0;
    }), z = c(() => {
      var t, r;
      return typeof ((t = i.value) == null ? void 0 : t.nextHidden) == "function" ? i.value.nextHidden(u.value) : typeof ((r = i.value) == null ? void 0 : r.nextHidden) == "boolean" ? i.value.nextHidden : p.value === u.value.length - 1;
    }), U = c(() => {
      const t = [];
      return v.value && t.push(`step-${v.value}`), t.join(" ");
    }), O = (t) => {
      v.value = u.value[p.value + 1].key, p.value === u.value.length - 1 ? k("finish", t) : k("next", t);
    }, j = (t) => {
      v.value = u.value[p.value - 1].key, k("prev", t);
    };
    return a({
      goNext: () => {
        S.value.click();
      },
      goPrev: () => {
        P.value.click();
      },
      startLoader: () => d.value = !0,
      stopLoader: () => d.value = !1
    }), (t, r) => {
      const m = b("lkt-header"), I = b("lkt-button"), q = b("lkt-loader");
      return h(), g("article", {
        class: X(["lkt-step-process", U.value])
      }, [
        t.header && Object.keys(t.header).length > 0 ? (h(), E(m, Y(C({ key: 0 }, t.header)), null, 16)) : L("", !0),
        H("div", We, [
          w(M(I, C({
            ref_key: "prevButtonRef",
            ref: P
          }, _.value, { onClick: j }), null, 16), [
            [B, !d.value && !F.value]
          ]),
          w(M(I, C({
            ref_key: "nextButtonRef",
            ref: S
          }, V.value, { onClick: O }), null, 16), [
            [B, !d.value && !z.value]
          ])
        ]),
        d.value ? L("", !0) : (h(), g("div", Xe, [
          H("div", Ye, [
            (h(!0), g(Z, null, J(N.value, (D) => w((h(), g("div", null, [
              ee(t.$slots, "step-" + D, { config: u.value })
            ], 512)), [
              [B, D === v.value]
            ])), 256))
          ])
        ])),
        d.value ? (h(), E(q, { key: 2 })) : L("", !0)
      ], 2);
    };
  }
}), at = {
  install: (e, a = {}) => {
    e.component("lkt-step-process", Ze);
  }
};
export {
  at as default
};

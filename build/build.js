var q = Object.defineProperty;
var $ = (e, a, l) => a in e ? q(e, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[a] = l;
var i = (e, a, l) => $(e, typeof a != "symbol" ? a + "" : a, l);
import { defineComponent as G, mergeDefaults as K, useSlots as Q, ref as f, watch as x, computed as u, resolveComponent as b, createElementBlock as g, openBlock as h, normalizeClass as W, createBlock as E, createCommentVNode as L, createElementVNode as H, normalizeProps as X, mergeProps as C, withDirectives as B, createVNode as M, vShow as w, Fragment as Y, renderList as Z, renderSlot as J } from "vue";
import "lkt-string-tools";
var ee = ((e) => (e.Button = "button", e.Submit = "submit", e.Reset = "reset", e.Anchor = "anchor", e.Content = "content", e.Switch = "switch", e.HiddenSwitch = "hidden-switch", e.Split = "split", e.SplitLazy = "split-lazy", e.SplitEver = "split-ever", e.Tooltip = "tooltip", e.TooltipLazy = "tooltip-lazy", e.TooltipEver = "tooltip-ever", e.FileUpload = "file-upload", e.ImageUpload = "image-upload", e))(ee || {}), te = ((e) => (e.Text = "text", e.Email = "email", e.Tel = "tel", e.Password = "password", e.Search = "search", e.Number = "number", e.Color = "color", e.Range = "range", e.Textarea = "textarea", e.Html = "html", e.Date = "date", e.File = "file", e.Image = "image", e.Select = "select", e.Check = "check", e.Switch = "switch", e.Calc = "calc", e.Card = "card", e.Elements = "elements", e))(te || {}), ae = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], s, re = (s = class {
  constructor(a) {
  }
  feed(a = {}, l = this) {
    if (typeof a == "object") for (let [o, y] of Object.entries(a)) l.assignProp(o, y);
  }
  assignProp(a, l) {
    if (!(ae.includes(a) || s.lktExcludedProps.includes(a))) {
      if (s.lktDateProps.includes(a)) {
        this[a] = new Date(l);
        return;
      }
      this[a] = l;
    }
  }
}, i(s, "lktAllowUndefinedProps", []), i(s, "lktExcludedProps", []), i(s, "lktDateProps", []), i(s, "lktStrictItem", !1), i(s, "lktDefaultValues", []), s), ne = ((e) => (e.Auto = "auto", e.Always = "always", e.Lazy = "lazy", e.Ever = "ever", e))(ne || {}), le = ((e) => (e.Transform = "transform", e.Height = "height", e.Display = "display", e))(le || {}), oe = ((e) => (e.Href = "href", e.RouterLink = "router-link", e.RouterLinkBack = "router-link-back", e.Mail = "mail", e.Tel = "tel", e.Tab = "tab", e.Download = "download", e.Action = "action", e.Legacy = "", e))(oe || {}), ie = ((e) => (e.Static = "static", e.Parallax = "parallax", e))(ie || {}), se = ((e) => (e.None = "", e.Field = "field", e.Button = "button", e.Anchor = "anchor", e))(se || {}), ue = ((e) => (e.A0 = "a0", e.A1 = "a1", e.A2 = "a2", e.A3 = "a3", e.A4 = "a4", e.A5 = "a5", e.A6 = "a6", e.A7 = "a7", e.A8 = "a8", e.A9 = "a9", e))(ue || {}), ce = ((e) => (e.List = "list", e.Inline = "inline", e.Count = "count", e))(ce || {}), de = ((e) => (e.MinStringLength = "min-str", e.MinNumber = "min-num", e.MaxStringLength = "max-str", e.MaxNumber = "max-num", e.Email = "email", e.Empty = "empty", e.EqualTo = "equal-to", e.MinNumbers = "min-numbers", e.MaxNumbers = "max-numbers", e.MinChars = "min-chars", e.MaxChars = "max-chars", e.MinUpperChars = "min-upper-chars", e.MaxUpperChars = "max-upper-chars", e.MinLowerChars = "min-lower-chars", e.MaxLowerChars = "max-lower-chars", e.MinSpecialChars = "min-special-chars", e.MaxSpecialChars = "max-special-chars", e))(de || {}), ve = ((e) => (e.Ok = "ok", e.Ko = "ko", e.Info = "info", e))(ve || {}), pe = ((e) => (e.StorageUnit = "unit", e.Directory = "dir", e.Image = "img", e.Video = "vid", e.File = "file", e))(pe || {}), me = ((e) => (e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e))(me || {}), he = ((e) => (e.NotDefined = "", e.Button = "button", e))(he || {}), ke = ((e) => (e.Start = "start", e.End = "end", e))(ke || {}), fe = ((e) => (e.Create = "create", e.Update = "update", e.Read = "read", e))(fe || {}), xe = ((e) => (e.Inline = "inline", e.Modal = "modal", e))(xe || {}), ge = ((e) => (e.Top = "top", e.Bottom = "bottom", e))(ge || {}), ye = ((e) => (e.Changed = "changed", e.Always = "always", e.Never = "never", e))(ye || {}), be = ((e) => (e.Manual = "manual", e.Auto = "auto", e.Delay = "delay", e))(be || {}), Le = ((e) => (e.Toast = "toast", e.Inline = "inline", e))(Le || {}), Ce = ((e) => (e.Anchor = "anchor", e.Button = "button", e.Entry = "entry", e))(Ce || {}), Be = ((e) => (e.Modal = "modal", e.Confirm = "confirm", e))(Be || {}), we = ((e) => (e.Pages = "pages", e.PrevNext = "prev-next", e.PagesPrevNext = "pages-prev-next", e.PagesPrevNextFirstLast = "pages-prev-next-first-last", e.LoadMore = "load-more", e.Infinite = "infinite", e))(we || {}), Ae = ((e) => (e.None = "", e.Incremental = "incremental", e.Decremental = "decremental", e))(Ae || {}), Pe = ((e) => (e.NotDefined = "", e.Hidden = "hidden", e.Integer = "integer", e.Decimal = "decimal", e.Auto = "auto", e))(Pe || {}), A, Se = (A = class extends re {
  constructor(a = {}) {
    super();
    i(this, "modelValue", "");
    i(this, "loading", !1);
    i(this, "steps", []);
    i(this, "header", {});
    i(this, "nextButton", {});
    i(this, "prevButton", {});
    this.feed(a);
  }
}, i(A, "lktDefaultValues", ["modelValue", "loading", "steps", "header"]), A), Ie = ((e) => (e.Table = "table", e.Item = "item", e.Ul = "ul", e.Ol = "ol", e.Carousel = "carousel", e.Accordion = "accordion", e))(Ie || {}), De = ((e) => (e[e.Auto = 0] = "Auto", e[e.PreferItem = 1] = "PreferItem", e[e.PreferCustomItem = 2] = "PreferCustomItem", e[e.PreferColumns = 3] = "PreferColumns", e))(De || {}), Ee = ((e) => (e.NotDefined = "", e.ActionIcon = "action-icon", e))(Ee || {}), He = ((e) => (e.Message = "message", e.Button = "button", e))(He || {}), Me = ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(Me || {}), Ne = ((e) => (e.Fixed = "fixed", e.Absolute = "absolute", e))(Ne || {}), Te = ((e) => (e.Top = "top", e.Bottom = "bottom", e.Center = "center", e.ReferrerCenter = "referrer-center", e))(Te || {}), Re = ((e) => (e.Left = "left", e.Right = "right", e.Center = "center", e.LeftCorner = "left-corner", e.RightCorner = "right-corner", e))(Re || {}), _e = ((e) => (e.LktAnchor = "lkt-anchor", e.LktLayoutAccordion = "lkt-layout-accordion", e.LktTextAccordion = "lkt-text-accordion", e.LktLayoutBox = "lkt-layout-box", e.LktTextBox = "lkt-text-box", e.LktLayoutBanner = "lkt-layout-banner", e.LktTextBanner = "lkt-text-banner", e.LktButton = "lkt-button", e.LktLayout = "lkt-layout", e.LktHeader = "lkt-header", e.LktIcon = "lkt-icon", e.LktIcons = "lkt-icons", e.LktImage = "lkt-image", e.LktText = "lkt-text", e))(_e || {}), Ve = ((e) => (e.Grid = "grid", e.FlexRow = "flex-row", e.FlexRows = "flex-rows", e.FlexColumn = "flex-column", e))(Ve || {}), Fe = ((e) => (e.None = "", e.Focus = "focus", e.Blur = "blur", e.Always = "always", e))(Fe || {}), ze = ((e) => (e.Auto = "auto", e.Local = "local", e.Remote = "remote", e))(ze || {}), Ue = ((e) => (e.Refresh = "refresh", e.Close = "close", e.ReOpen = "reOpen", e.Exec = "exec", e.Open = "open", e))(Ue || {}), Oe = ((e) => (e.Asc = "asc", e.Desc = "desc", e))(Oe || {}), je = ((e) => (e.Create = "create", e.Update = "update", e.Edit = "edit", e.Drop = "drop", e.Sort = "sort", e.SwitchEditMode = "switch-edit-mode", e.InlineEdit = "inline-edit", e.InlineCreate = "inline-create", e.ModalCreate = "modal-create", e.InlineCreateEver = "inline-create-ever", e))(je || {}), qe = ((e) => (e.Lazy = "lazy", e.Ever = "ever", e))(qe || {}), $e = ((e) => (e.Page = "page", e.Element = "element", e))($e || {}), Ge = ((e) => (e.Quick = "quick", e.Full = "full", e))(Ge || {});
function Ke(e) {
  let a = new e(), l = {};
  if (!Array.isArray(e.lktDefaultValues)) throw new Error("lktDefaultValues must be a keys array.");
  for (let o of e.lktDefaultValues) o in a && (l[o] = a[o]);
  return l;
}
const Qe = { class: "lkt-step-process-buttons" }, We = {
  key: 1,
  class: "lkt-step-process_content"
}, Xe = { class: "lkt-grid-1" }, Ye = /* @__PURE__ */ G({
  __name: "LktStepProcess",
  props: /* @__PURE__ */ K({
    modelValue: {},
    loading: { type: Boolean },
    steps: {},
    header: {},
    nextButton: {},
    prevButton: {}
  }, Ke(Se)),
  emits: [
    "next",
    "prev",
    "finish",
    "update:modelValue",
    "update:loading"
  ],
  setup(e, { expose: a, emit: l }) {
    const o = e, y = Q(), k = l, c = f(o.loading), d = f(o.modelValue), v = f(o.steps), P = f(null), S = f(null);
    x(() => o.loading, (t) => c.value = t), x(() => o.modelValue, (t) => d.value = t), x(c, (t) => k("update:loading", t)), x(d, (t) => k("update:modelValue", t));
    const N = u(() => {
      let t = [];
      for (let n in y) n.indexOf("step-") !== -1 && t.push(n.substring(5));
      return t;
    }), m = u(() => v.value.findIndex((t) => t.key === d.value)), r = u(() => v.value[m.value]), T = u(() => m.value === 0), R = u(() => {
      var n, p;
      let t = { ...o.prevButton };
      return (n = r.value) != null && n.prevButton && (t = { ...t, ...(p = r.value) == null ? void 0 : p.prevButton }), typeof t.disabled > "u" && (t.disabled = T.value), t;
    }), _ = u(() => {
      var n, p;
      let t = { ...o.nextButton };
      return (n = r.value) != null && n.nextButton && (t = { ...t, ...(p = r.value) == null ? void 0 : p.nextButton }), t;
    }), V = u(() => {
      var t, n;
      return typeof ((t = r.value) == null ? void 0 : t.prevHidden) == "function" ? r.value.prevHidden(r.value, v.value) : typeof ((n = r.value) == null ? void 0 : n.prevHidden) == "boolean" ? r.value.prevHidden : m.value === 0;
    }), F = u(() => {
      var t, n;
      return typeof ((t = r.value) == null ? void 0 : t.nextHidden) == "function" ? r.value.nextHidden(r.value, v.value) : typeof ((n = r.value) == null ? void 0 : n.nextHidden) == "boolean" ? r.value.nextHidden : r.value.nextButton === !1;
    }), z = u(() => {
      const t = [];
      return d.value && t.push(`step-${d.value}`), t.join(" ");
    }), U = (t) => {
      d.value = v.value[m.value + 1].key, m.value === v.value.length - 1 ? k("finish", t) : k("next", t);
    }, O = (t) => {
      d.value = v.value[m.value - 1].key, k("prev", t);
    };
    return a({
      goNext: () => {
        S.value.click();
      },
      goPrev: () => {
        P.value.click();
      },
      startLoader: () => c.value = !0,
      stopLoader: () => c.value = !1
    }), (t, n) => {
      const p = b("lkt-header"), I = b("lkt-button"), j = b("lkt-loader");
      return h(), g("article", {
        class: W(["lkt-step-process", z.value])
      }, [
        t.header && Object.keys(t.header).length > 0 ? (h(), E(p, X(C({ key: 0 }, t.header)), null, 16)) : L("", !0),
        H("div", Qe, [
          B(M(I, C({
            ref_key: "prevButtonRef",
            ref: P
          }, R.value, { onClick: O }), null, 16), [
            [w, !c.value && !V.value]
          ]),
          B(M(I, C({
            ref_key: "nextButtonRef",
            ref: S
          }, _.value, { onClick: U }), null, 16), [
            [w, !c.value && !F.value]
          ])
        ]),
        c.value ? L("", !0) : (h(), g("div", We, [
          H("div", Xe, [
            (h(!0), g(Y, null, Z(N.value, (D) => B((h(), g("div", null, [
              J(t.$slots, "step-" + D, { config: v.value })
            ], 512)), [
              [w, D === d.value]
            ])), 256))
          ])
        ])),
        c.value ? (h(), E(j, { key: 2 })) : L("", !0)
      ], 2);
    };
  }
}), tt = {
  install: (e, a = {}) => {
    e.component("lkt-step-process", Ye);
  }
};
export {
  tt as default
};

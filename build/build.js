var O = Object.defineProperty;
var q = (e, a, o) => a in e ? O(e, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[a] = o;
var u = (e, a, o) => q(e, typeof a != "symbol" ? a + "" : a, o);
import { defineComponent as $, mergeDefaults as G, useSlots as K, ref as g, watch as b, computed as v, onMounted as Q, resolveComponent as w, createElementBlock as L, openBlock as f, normalizeClass as W, createBlock as B, createCommentVNode as y, createElementVNode as T, normalizeProps as X, mergeProps as A, withDirectives as P, vShow as S, Fragment as Y, renderList as Z, renderSlot as J } from "vue";
import "lkt-string-tools";
var ee = ((e) => (e.Button = "button", e.Submit = "submit", e.Reset = "reset", e.Anchor = "anchor", e.Content = "content", e.Switch = "switch", e.HiddenSwitch = "hidden-switch", e.Split = "split", e.SplitLazy = "split-lazy", e.SplitEver = "split-ever", e.Tooltip = "tooltip", e.TooltipLazy = "tooltip-lazy", e.TooltipEver = "tooltip-ever", e.FileUpload = "file-upload", e.ImageUpload = "image-upload", e))(ee || {}), te = ((e) => (e.Text = "text", e.Email = "email", e.Tel = "tel", e.Password = "password", e.Search = "search", e.Number = "number", e.Color = "color", e.Range = "range", e.Textarea = "textarea", e.Html = "html", e.Date = "date", e.File = "file", e.Image = "image", e.Select = "select", e.Check = "check", e.Switch = "switch", e.Calc = "calc", e.Card = "card", e.Elements = "elements", e))(te || {}), ae = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], i, re = (i = class {
  constructor(a) {
  }
  feed(a = {}, o = this) {
    if (typeof a == "object") for (let [n, C] of Object.entries(a)) o.assignProp(n, C);
  }
  assignProp(a, o) {
    if (!(ae.includes(a) || i.lktExcludedProps.includes(a))) {
      if (i.lktDateProps.includes(a)) {
        this[a] = new Date(o);
        return;
      }
      this[a] = o;
    }
  }
}, u(i, "lktAllowUndefinedProps", []), u(i, "lktExcludedProps", []), u(i, "lktDateProps", []), u(i, "lktStrictItem", !1), u(i, "lktDefaultValues", []), i), ne = ((e) => (e.Auto = "auto", e.Always = "always", e.Lazy = "lazy", e.Ever = "ever", e))(ne || {}), le = ((e) => (e.Transform = "transform", e.Height = "height", e.Display = "display", e))(le || {}), oe = ((e) => (e.Href = "href", e.RouterLink = "router-link", e.RouterLinkBack = "router-link-back", e.Mail = "mail", e.Tel = "tel", e.Tab = "tab", e.Download = "download", e.Action = "action", e.Legacy = "", e))(oe || {}), ue = ((e) => (e.Static = "static", e.Parallax = "parallax", e))(ue || {}), ie = ((e) => (e.None = "", e.Field = "field", e.Button = "button", e.Anchor = "anchor", e))(ie || {}), se = ((e) => (e.A0 = "a0", e.A1 = "a1", e.A2 = "a2", e.A3 = "a3", e.A4 = "a4", e.A5 = "a5", e.A6 = "a6", e.A7 = "a7", e.A8 = "a8", e.A9 = "a9", e))(se || {}), ce = ((e) => (e.List = "list", e.Inline = "inline", e.Count = "count", e))(ce || {}), de = ((e) => (e.MinStringLength = "min-str", e.MinNumber = "min-num", e.MaxStringLength = "max-str", e.MaxNumber = "max-num", e.Email = "email", e.Empty = "empty", e.EqualTo = "equal-to", e.MinNumbers = "min-numbers", e.MaxNumbers = "max-numbers", e.MinChars = "min-chars", e.MaxChars = "max-chars", e.MinUpperChars = "min-upper-chars", e.MaxUpperChars = "max-upper-chars", e.MinLowerChars = "min-lower-chars", e.MaxLowerChars = "max-lower-chars", e.MinSpecialChars = "min-special-chars", e.MaxSpecialChars = "max-special-chars", e))(de || {}), ve = ((e) => (e.Ok = "ok", e.Ko = "ko", e.Info = "info", e))(ve || {}), pe = ((e) => (e.StorageUnit = "unit", e.Directory = "dir", e.Image = "img", e.Video = "vid", e.File = "file", e))(pe || {}), me = ((e) => (e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e))(me || {}), fe = ((e) => (e.NotDefined = "", e.Button = "button", e))(fe || {}), he = ((e) => (e.Start = "start", e.End = "end", e))(he || {}), ke = ((e) => (e.Create = "create", e.Update = "update", e.Read = "read", e))(ke || {}), xe = ((e) => (e.Inline = "inline", e.Modal = "modal", e))(xe || {}), ge = ((e) => (e.Top = "top", e.Bottom = "bottom", e))(ge || {}), ye = ((e) => (e.Changed = "changed", e.Always = "always", e.Never = "never", e))(ye || {}), be = ((e) => (e.Manual = "manual", e.Auto = "auto", e.Delay = "delay", e))(be || {}), Le = ((e) => (e.Toast = "toast", e.Inline = "inline", e))(Le || {}), Be = ((e) => (e.Anchor = "anchor", e.Button = "button", e.Entry = "entry", e))(Be || {}), Ce = ((e) => (e.Modal = "modal", e.Confirm = "confirm", e))(Ce || {}), we = ((e) => (e.Pages = "pages", e.PrevNext = "prev-next", e.PagesPrevNext = "pages-prev-next", e.PagesPrevNextFirstLast = "pages-prev-next-first-last", e.LoadMore = "load-more", e.Infinite = "infinite", e))(we || {}), Ae = ((e) => (e.None = "", e.Incremental = "incremental", e.Decremental = "decremental", e))(Ae || {}), Pe = ((e) => (e.NotDefined = "", e.Hidden = "hidden", e.Integer = "integer", e.Decimal = "decimal", e.Auto = "auto", e))(Pe || {}), I, Se = (I = class extends re {
  constructor(a = {}) {
    super();
    u(this, "modelValue", "");
    u(this, "loading", !1);
    u(this, "steps", []);
    u(this, "header", {});
    u(this, "nextButton", {});
    u(this, "prevButton", {});
    this.feed(a);
  }
}, u(I, "lktDefaultValues", ["modelValue", "loading", "steps", "header"]), I), Ie = ((e) => (e.Table = "table", e.Item = "item", e.Ul = "ul", e.Ol = "ol", e.Carousel = "carousel", e.Accordion = "accordion", e))(Ie || {}), De = ((e) => (e[e.Auto = 0] = "Auto", e[e.PreferItem = 1] = "PreferItem", e[e.PreferCustomItem = 2] = "PreferCustomItem", e[e.PreferColumns = 3] = "PreferColumns", e))(De || {}), Ee = ((e) => (e.NotDefined = "", e.ActionIcon = "action-icon", e))(Ee || {}), He = ((e) => (e.Message = "message", e.Button = "button", e))(He || {}), Me = ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(Me || {}), Ne = ((e) => (e.Fixed = "fixed", e.Absolute = "absolute", e))(Ne || {}), Te = ((e) => (e.Top = "top", e.Bottom = "bottom", e.Center = "center", e.ReferrerCenter = "referrer-center", e))(Te || {}), Re = ((e) => (e.Left = "left", e.Right = "right", e.Center = "center", e.LeftCorner = "left-corner", e.RightCorner = "right-corner", e))(Re || {}), _e = ((e) => (e.LktAnchor = "lkt-anchor", e.LktLayoutAccordion = "lkt-layout-accordion", e.LktTextAccordion = "lkt-text-accordion", e.LktLayoutBox = "lkt-layout-box", e.LktTextBox = "lkt-text-box", e.LktLayoutBanner = "lkt-layout-banner", e.LktTextBanner = "lkt-text-banner", e.LktButton = "lkt-button", e.LktLayout = "lkt-layout", e.LktHeader = "lkt-header", e.LktIcon = "lkt-icon", e.LktIcons = "lkt-icons", e.LktImage = "lkt-image", e.LktText = "lkt-text", e))(_e || {}), Ve = ((e) => (e.Grid = "grid", e.FlexRow = "flex-row", e.FlexRows = "flex-rows", e.FlexColumn = "flex-column", e))(Ve || {}), Fe = ((e) => (e.None = "", e.Focus = "focus", e.Blur = "blur", e.Always = "always", e))(Fe || {}), ze = ((e) => (e.Auto = "auto", e.Local = "local", e.Remote = "remote", e))(ze || {}), Ue = ((e) => (e.Refresh = "refresh", e.Close = "close", e.ReOpen = "reOpen", e.Exec = "exec", e.Open = "open", e))(Ue || {}), je = ((e) => (e.Asc = "asc", e.Desc = "desc", e))(je || {}), Oe = ((e) => (e.Create = "create", e.Update = "update", e.Edit = "edit", e.Drop = "drop", e.Sort = "sort", e.SwitchEditMode = "switch-edit-mode", e.InlineEdit = "inline-edit", e.InlineCreate = "inline-create", e.ModalCreate = "modal-create", e.InlineCreateEver = "inline-create-ever", e))(Oe || {}), qe = ((e) => (e.Lazy = "lazy", e.Ever = "ever", e))(qe || {}), $e = ((e) => (e.Page = "page", e.Element = "element", e))($e || {}), Ge = ((e) => (e.Quick = "quick", e.Full = "full", e))(Ge || {});
function Ke(e) {
  let a = new e(), o = {};
  if (!Array.isArray(e.lktDefaultValues)) throw new Error("lktDefaultValues must be a keys array.");
  for (let n of e.lktDefaultValues) n in a && (o[n] = a[n]);
  return o;
}
const Qe = { class: "lkt-step-process-buttons" }, We = {
  key: 1,
  class: "lkt-step-process_content"
}, Xe = { class: "lkt-grid-1" }, Ye = /* @__PURE__ */ $({
  __name: "LktStepProcess",
  props: /* @__PURE__ */ G({
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
  setup(e, { expose: a, emit: o }) {
    const n = e, C = K(), x = o, p = g(n.loading), s = g(n.modelValue), c = g(n.steps), D = g(null), E = g(null);
    b(() => n.loading, (t) => p.value = t), b(() => n.modelValue, (t) => s.value = t), b(p, (t) => x("update:loading", t)), b(s, (t) => x("update:modelValue", t));
    const R = v(() => {
      let t = [];
      for (let l in C) l.indexOf("step-") !== -1 && t.push(l.substring(5));
      return t;
    }), k = v(() => c.value.findIndex((t) => t.key === s.value)), r = v(() => c.value[k.value]), _ = v(() => k.value === 0), H = v(() => {
      var l, d, m, h;
      if (((l = r.value) == null ? void 0 : l.prevButton) === !1 || n.prevButton === !1 && !((d = r.value) != null && d.prevButton))
        return !1;
      let t = { ...n.prevButton };
      return typeof ((m = r.value) == null ? void 0 : m.prevButton) == "object" && (t = { ...t, ...(h = r.value) == null ? void 0 : h.prevButton }), typeof t.disabled > "u" && (t.disabled = _.value), t;
    }), M = v(() => {
      var l, d, m, h;
      if (((l = r.value) == null ? void 0 : l.nextButton) === !1 || n.nextButton === !1 && !((d = r.value) != null && d.nextButton))
        return !1;
      let t = { ...n.nextButton };
      return typeof ((m = r.value) == null ? void 0 : m.nextButton) == "object" && (t = { ...t, ...(h = r.value) == null ? void 0 : h.nextButton }), t;
    }), V = v(() => {
      var t, l;
      if (typeof r.value == "object") {
        if (typeof ((t = r.value) == null ? void 0 : t.prevHidden) == "function")
          return r.value.prevHidden(r.value, c.value);
        if (typeof ((l = r.value) == null ? void 0 : l.prevHidden) == "boolean")
          return r.value.prevHidden;
      }
      return k.value === 0;
    }), F = v(() => {
      var t, l, d;
      return typeof r.value == "object" ? typeof ((t = r.value) == null ? void 0 : t.nextHidden) == "function" ? r.value.nextHidden(r.value, c.value) : typeof ((l = r.value) == null ? void 0 : l.nextHidden) == "boolean" ? r.value.nextHidden : ((d = r.value) == null ? void 0 : d.nextButton) === !1 : !0;
    }), z = v(() => {
      const t = [];
      return s.value && t.push(`step-${s.value}`), t.join(" ");
    }), U = (t) => {
      s.value = c.value[k.value + 1].key, k.value === c.value.length - 1 ? x("finish", t) : x("next", t);
    }, j = (t) => {
      s.value = c.value[k.value - 1].key, x("prev", t);
    };
    return a({
      goNext: () => {
        E.value.click();
      },
      goPrev: () => {
        D.value.click();
      },
      startLoader: () => p.value = !0,
      stopLoader: () => p.value = !1
    }), Q(() => {
      !s.value && c.value.length > 0 && (s.value = c.value[0].key);
    }), (t, l) => {
      const d = w("lkt-header"), m = w("lkt-button"), h = w("lkt-loader");
      return f(), L("article", {
        class: W(["lkt-step-process", z.value])
      }, [
        t.header && Object.keys(t.header).length > 0 ? (f(), B(d, X(A({ key: 0 }, t.header)), null, 16)) : y("", !0),
        T("div", Qe, [
          H.value ? P((f(), B(m, A({
            key: 0,
            ref_key: "prevButtonRef",
            ref: D
          }, H.value, { onClick: j }), null, 16)), [
            [S, !p.value && !V.value]
          ]) : y("", !0),
          M.value ? P((f(), B(m, A({
            key: 1,
            ref_key: "nextButtonRef",
            ref: E
          }, M.value, { onClick: U }), null, 16)), [
            [S, !p.value && !F.value]
          ]) : y("", !0)
        ]),
        p.value ? y("", !0) : (f(), L("div", We, [
          T("div", Xe, [
            (f(!0), L(Y, null, Z(R.value, (N) => P((f(), L("div", null, [
              J(t.$slots, "step-" + N, { config: c.value })
            ], 512)), [
              [S, N === s.value]
            ])), 256))
          ])
        ])),
        p.value ? (f(), B(h, { key: 2 })) : y("", !0)
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

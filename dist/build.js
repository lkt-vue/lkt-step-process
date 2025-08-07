var Z = Object.defineProperty;
var ee = (e, a, o) => a in e ? Z(e, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[a] = o;
var u = (e, a, o) => ee(e, typeof a != "symbol" ? a + "" : a, o);
import { defineComponent as _, useSlots as j, resolveComponent as N, createElementBlock as L, openBlock as c, withDirectives as A, createCommentVNode as b, renderSlot as P, createBlock as B, mergeProps as w, vShow as D, unref as H, mergeDefaults as te, ref as g, watch as C, computed as d, onMounted as ae, normalizeClass as re, normalizeProps as ne, createSlots as V, withCtx as F, createElementVNode as oe, Fragment as le, renderList as ie } from "vue";
import "lkt-string-tools";
import "lkt-data-state";
var ue = ((e) => (e.Button = "button", e.Submit = "submit", e.Reset = "reset", e.Anchor = "anchor", e.Content = "content", e.Switch = "switch", e.HiddenSwitch = "hidden-switch", e.Split = "split", e.SplitLazy = "split-lazy", e.SplitEver = "split-ever", e.Tooltip = "tooltip", e.TooltipLazy = "tooltip-lazy", e.TooltipEver = "tooltip-ever", e.FileUpload = "file-upload", e.ImageUpload = "image-upload", e))(ue || {}), se = ((e) => (e.Text = "text", e.Email = "email", e.Tel = "tel", e.Password = "password", e.Search = "search", e.Number = "number", e.Color = "color", e.Range = "range", e.Textarea = "textarea", e.Html = "html", e.Date = "date", e.Time = "time", e.DateTime = "datetime", e.File = "file", e.Image = "image", e.Select = "select", e.Check = "check", e.Switch = "switch", e.Calc = "calc", e.Card = "card", e.Table = "table", e.Radio = "radio", e.ToggleButtonGroup = "toggle-button-group", e))(se || {}), de = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], v, ve = (v = class {
  constructor(a) {
  }
  feed(a = {}, o = this) {
    if (typeof a == "object") for (let [r, l] of Object.entries(a)) o.assignProp(r, l);
  }
  assignProp(a, o) {
    if (!(de.includes(a) || v.lktExcludedProps.includes(a))) {
      if (v.lktDateProps.includes(a)) {
        this[a] = new Date(o);
        return;
      }
      this[a] = o;
    }
  }
}, u(v, "lktAllowUndefinedProps", []), u(v, "lktExcludedProps", []), u(v, "lktDateProps", []), u(v, "lktStrictItem", !1), u(v, "lktDefaultValues", []), v), ce = ((e) => (e.Auto = "auto", e.Always = "always", e.Lazy = "lazy", e.Ever = "ever", e))(ce || {}), pe = ((e) => (e.Transform = "transform", e.Height = "height", e.Display = "display", e))(pe || {}), me = ((e) => (e.Href = "href", e.RouterLink = "router-link", e.RouterLinkBack = "router-link-back", e.Mail = "mail", e.Tel = "tel", e.Tab = "tab", e.Download = "download", e.Action = "action", e.Legacy = "", e))(me || {}), fe = ((e) => (e.Static = "static", e.Parallax = "parallax", e))(fe || {}), ke = ((e) => (e.None = "", e.Field = "field", e.Button = "button", e.Anchor = "anchor", e.InlineDrop = "inline-drop", e.ColumnIndex = "column-index", e))(ke || {}), he = ((e) => (e.Date = "date", e.Number = "number", e.Timer = "timer", e))(he || {}), be = ((e) => (e.A0 = "a0", e.A1 = "a1", e.A2 = "a2", e.A3 = "a3", e.A4 = "a4", e.A5 = "a5", e.A6 = "a6", e.A7 = "a7", e.A8 = "a8", e.A9 = "a9", e))(be || {}), xe = ((e) => (e.List = "list", e.Inline = "inline", e.Count = "count", e.Table = "table", e))(xe || {}), ye = ((e) => (e.HTTPResponse = "http-response", e.MinStringLength = "min-str", e.MinNumber = "min-num", e.MaxStringLength = "max-str", e.MaxNumber = "max-num", e.Email = "email", e.Empty = "empty", e.EqualTo = "equal-to", e.MinNumbers = "min-numbers", e.MaxNumbers = "max-numbers", e.MinChars = "min-chars", e.MaxChars = "max-chars", e.MinUpperChars = "min-upper-chars", e.MaxUpperChars = "max-upper-chars", e.MinLowerChars = "min-lower-chars", e.MaxLowerChars = "max-lower-chars", e.MinSpecialChars = "min-special-chars", e.MaxSpecialChars = "max-special-chars", e))(ye || {}), Be = ((e) => (e.Ok = "ok", e.Ko = "ko", e.Info = "info", e))(Be || {}), ge = ((e) => (e.StorageUnit = "unit", e.Directory = "dir", e.Image = "img", e.Video = "vid", e.File = "file", e))(ge || {}), Le = ((e) => (e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e))(Le || {}), we = ((e) => (e.NotDefined = "", e.Button = "button", e))(we || {}), Ce = ((e) => (e.Start = "start", e.End = "end", e))(Ce || {}), Pe = ((e) => (e.Create = "create", e.Update = "update", e.Read = "read", e))(Pe || {}), Se = ((e) => (e.Inline = "inline", e.Modal = "modal", e))(Se || {}), I = ((e) => (e.Top = "top", e.Bottom = "bottom", e))(I || {}), M = ((e) => (e.Changed = "changed", e.Always = "always", e.Never = "never", e))(M || {}), Ne = ((e) => (e.Manual = "manual", e.Auto = "auto", e.Delay = "delay", e))(Ne || {}), Ae = ((e) => (e.Toast = "toast", e.Inline = "inline", e))(Ae || {}), De = ((e) => (e.Current = "current", e.Modifications = "modifications", e.SplitView = "split-view", e.Differences = "differences", e))(De || {}), He = ((e) => (e.Anchor = "anchor", e.Button = "button", e.Header = "header", e.Entry = "entry", e))(He || {}), Ie = ((e) => (e.Modal = "modal", e.Confirm = "confirm", e))(Ie || {}), Me = ((e) => (e.Pages = "pages", e.PrevNext = "prev-next", e.PagesPrevNext = "pages-prev-next", e.PagesPrevNextFirstLast = "pages-prev-next-first-last", e.LoadMore = "load-more", e.Infinite = "infinite", e))(Me || {}), Te = ((e) => (e.None = "", e.Incremental = "incremental", e.Decremental = "decremental", e))(Te || {}), Ee = ((e) => (e.NotDefined = "", e.Hidden = "hidden", e.Integer = "integer", e.Decimal = "decimal", e.Auto = "auto", e))(Ee || {}), S, Re = (S = class extends ve {
  constructor(a = {}) {
    super();
    u(this, "modelValue", "");
    u(this, "loading", !1);
    u(this, "steps", []);
    u(this, "header", {});
    u(this, "nextButton", {});
    u(this, "prevButton", {});
    u(this, "buttonNavPosition", "top");
    u(this, "buttonNavVisibility", "always");
    this.feed(a);
  }
}, u(S, "lktDefaultValues", ["modelValue", "loading", "steps", "header"]), S), Ve = ((e) => (e.Table = "table", e.Item = "item", e.Ul = "ul", e.Ol = "ol", e.Carousel = "carousel", e.Accordion = "accordion", e))(Ve || {}), Fe = ((e) => (e[e.Auto = 0] = "Auto", e[e.PreferItem = 1] = "PreferItem", e[e.PreferCustomItem = 2] = "PreferCustomItem", e[e.PreferColumns = 3] = "PreferColumns", e))(Fe || {}), Xe = ((e) => (e.NotDefined = "", e.ActionIcon = "action-icon", e))(Xe || {}), _e = ((e) => (e.Message = "message", e.Button = "button", e))(_e || {}), je = ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(je || {}), ze = ((e) => (e.Fixed = "fixed", e.Absolute = "absolute", e))(ze || {}), Oe = ((e) => (e.Top = "top", e.Bottom = "bottom", e.Center = "center", e.ReferrerCenter = "referrer-center", e))(Oe || {}), Ue = ((e) => (e.Left = "left", e.Right = "right", e.Center = "center", e.LeftCorner = "left-corner", e.RightCorner = "right-corner", e))(Ue || {}), $e = ((e) => (e.LktAnchor = "lkt-anchor", e.LktLayoutAccordion = "lkt-layout-accordion", e.LktTextAccordion = "lkt-text-accordion", e.LktLayoutBox = "lkt-layout-box", e.LktTextBox = "lkt-text-box", e.LktLayoutBanner = "lkt-layout-banner", e.LktTextBanner = "lkt-text-banner", e.LktButton = "lkt-button", e.LktLayout = "lkt-layout", e.LktHeader = "lkt-header", e.LktIcon = "lkt-icon", e.LktIcons = "lkt-icons", e.LktImage = "lkt-image", e.LktText = "lkt-text", e))($e || {}), Ge = ((e) => (e.Grid = "grid", e.FlexRow = "flex-row", e.FlexRows = "flex-rows", e.FlexColumn = "flex-column", e))(Ge || {}), qe = ((e) => (e.Draft = "draft", e.Public = "public", e.Scheduled = "scheduled", e))(qe || {}), Ke = ((e) => (e[e.XXS = 1] = "XXS", e[e.XS = 2] = "XS", e[e.SM = 3] = "SM", e[e.MD = 4] = "MD", e[e.LG = 5] = "LG", e[e.XL = 6] = "XL", e[e.XXL = 7] = "XXL", e))(Ke || {}), Qe = ((e) => (e.None = "", e.Focus = "focus", e.Blur = "blur", e.Always = "always", e))(Qe || {}), Je = ((e) => (e.Message = "message", e.Inline = "inline", e))(Je || {}), We = ((e) => (e.Auto = "auto", e.Local = "local", e.Remote = "remote", e))(We || {}), Ye = ((e) => (e.Refresh = "refresh", e.Close = "close", e.ReOpen = "reOpen", e.Exec = "exec", e.Open = "open", e))(Ye || {}), Ze = ((e) => (e.Asc = "asc", e.Desc = "desc", e))(Ze || {}), et = ((e) => (e.Create = "create", e.Update = "update", e.Edit = "edit", e.Drop = "drop", e.Sort = "sort", e.SwitchEditMode = "switch-edit-mode", e.InlineEdit = "inline-edit", e.InlineCreate = "inline-create", e.ModalCreate = "modal-create", e.InlineCreateEver = "inline-create-ever", e))(et || {}), tt = ((e) => (e.Lazy = "lazy", e.Ever = "ever", e))(tt || {}), at = ((e) => (e.Page = "page", e.Element = "element", e))(at || {}), rt = ((e) => (e.Quick = "quick", e.Full = "full", e))(rt || {});
function nt(e) {
  let a = new e(), o = {};
  if (!Array.isArray(e.lktDefaultValues)) throw new Error("lktDefaultValues must be a keys array.");
  for (let r of e.lktDefaultValues) r in a && (o[r] = a[r]);
  return o;
}
const ot = { class: "lkt-step-process-buttons" }, X = /* @__PURE__ */ _({
  __name: "ButtonNav",
  props: {
    prevButton: { type: [Object, Boolean] },
    nextButton: { type: [Object, Boolean] },
    isLoading: { type: Boolean },
    prevHidden: { type: Boolean },
    nextHidden: { type: Boolean }
  },
  emits: ["prev", "next"],
  setup(e, { emit: a }) {
    const o = a, r = j();
    return (l, p) => {
      const m = N("lkt-button");
      return c(), L("div", ot, [
        l.prevButton ? A((c(), B(m, w({
          key: 0,
          ref: "prevButtonRef"
        }, l.prevButton, {
          onClick: p[0] || (p[0] = (s) => o("prev"))
        }), null, 16)), [
          [D, !l.isLoading && !l.prevHidden]
        ]) : b("", !0),
        H(r)["between-buttons-ever"] ? P(l.$slots, "between-buttons-ever", { key: 1 }) : b("", !0),
        l.nextButton ? A((c(), B(m, w({
          key: 2,
          ref: "nextButtonRef"
        }, l.nextButton, {
          onClick: p[1] || (p[1] = (s) => o("next"))
        }), null, 16)), [
          [D, !l.isLoading && !l.nextHidden]
        ]) : b("", !0)
      ]);
    };
  }
}), lt = {
  key: 2,
  class: "lkt-step-process_content"
}, it = { class: "lkt-grid-1" }, ut = /* @__PURE__ */ _({
  __name: "LktStepProcess",
  props: /* @__PURE__ */ te({
    modelValue: {},
    loading: { type: Boolean },
    steps: {},
    header: {},
    nextButton: {},
    prevButton: {},
    buttonNavPosition: {},
    buttonNavVisibility: {}
  }, nt(Re)),
  emits: [
    "next",
    "prev",
    "finish",
    "update:modelValue",
    "update:loading"
  ],
  setup(e, { expose: a, emit: o }) {
    const r = e, l = j(), p = o, m = g(r.loading), s = g(r.modelValue), f = g(r.steps), z = g(null), O = g(null);
    C(() => r.loading, (t) => m.value = t), C(() => r.modelValue, (t) => s.value = t), C(m, (t) => p("update:loading", t)), C(s, (t) => p("update:modelValue", t));
    const U = d(() => {
      let t = [];
      for (let i in l) i.indexOf("step-") !== -1 && t.push(i.substring(5));
      return t;
    }), y = d(() => f.value.findIndex((t) => t.key === s.value)), n = d(() => f.value[y.value]), $ = d(() => y.value === 0), G = d(() => {
      var i, k, x, h;
      if (((i = n.value) == null ? void 0 : i.prevButton) === !1 || r.prevButton === !1 && !((k = n.value) != null && k.prevButton))
        return !1;
      let t = { ...r.prevButton };
      return typeof ((x = n.value) == null ? void 0 : x.prevButton) == "object" && (t = { ...t, ...(h = n.value) == null ? void 0 : h.prevButton }), typeof t.disabled > "u" && (t.disabled = $.value), t;
    }), q = d(() => {
      var i, k, x, h;
      if (((i = n.value) == null ? void 0 : i.nextButton) === !1 || r.nextButton === !1 && !((k = n.value) != null && k.nextButton))
        return !1;
      let t = { ...r.nextButton };
      return typeof ((x = n.value) == null ? void 0 : x.nextButton) == "object" && (t = { ...t, ...(h = n.value) == null ? void 0 : h.nextButton }), t;
    }), K = d(() => {
      var t, i;
      if (typeof n.value == "object") {
        if (typeof ((t = n.value) == null ? void 0 : t.prevHidden) == "function")
          return n.value.prevHidden(n.value, f.value);
        if (typeof ((i = n.value) == null ? void 0 : i.prevHidden) == "boolean")
          return n.value.prevHidden;
      }
      return y.value === 0;
    }), Q = d(() => {
      var t, i, k;
      return typeof n.value == "object" ? typeof ((t = n.value) == null ? void 0 : t.nextHidden) == "function" ? n.value.nextHidden(n.value, f.value) : typeof ((i = n.value) == null ? void 0 : i.nextHidden) == "boolean" ? n.value.nextHidden : ((k = n.value) == null ? void 0 : k.nextButton) === !1 : !0;
    }), J = d(() => {
      const t = [];
      return s.value && t.push(`step-${s.value}`), t.join(" ");
    }), W = d(() => r.buttonNavVisibility === M.Never ? !1 : !r.buttonNavPosition || r.buttonNavPosition === I.Top), Y = d(() => r.buttonNavVisibility === M.Never ? !1 : r.buttonNavPosition === I.Bottom), T = d(() => ({
      isLoading: m.value,
      prevHidden: K.value,
      nextHidden: Q.value,
      prevButton: G.value,
      nextButton: q.value
    })), E = (t) => {
      s.value = f.value[y.value + 1].key, y.value === f.value.length - 1 ? p("finish", t) : p("next", t);
    }, R = (t) => {
      s.value = f.value[y.value - 1].key, p("prev", t);
    };
    return a({
      goNext: () => {
        O.value.click();
      },
      goPrev: () => {
        z.value.click();
      },
      startLoader: () => m.value = !0,
      stopLoader: () => m.value = !1
    }), ae(() => {
      !s.value && f.value.length > 0 && (s.value = f.value[0].key);
    }), (t, i) => {
      const k = N("lkt-header"), x = N("lkt-loader");
      return c(), L("article", {
        class: re(["lkt-step-process", J.value])
      }, [
        t.header && Object.keys(t.header).length > 0 ? (c(), B(k, ne(w({ key: 0 }, t.header)), null, 16)) : b("", !0),
        W.value ? (c(), B(X, w({ key: 1 }, T.value, {
          onPrev: R,
          onNext: E
        }), V({ _: 2 }, [
          H(l)["between-buttons-ever"] ? {
            name: "between-buttons-ever",
            fn: F(({}) => [
              P(t.$slots, "between-buttons-ever")
            ]),
            key: "0"
          } : void 0
        ]), 1040)) : b("", !0),
        m.value ? b("", !0) : (c(), L("div", lt, [
          oe("div", it, [
            (c(!0), L(le, null, ie(U.value, (h) => A((c(), L("div", null, [
              P(t.$slots, "step-" + h, { config: f.value })
            ], 512)), [
              [D, h === s.value]
            ])), 256))
          ])
        ])),
        m.value ? (c(), B(x, { key: 3 })) : b("", !0),
        Y.value ? (c(), B(X, w({ key: 4 }, T.value, {
          onPrev: R,
          onNext: E
        }), V({ _: 2 }, [
          H(l)["between-buttons-ever"] ? {
            name: "between-buttons-ever",
            fn: F(({}) => [
              P(t.$slots, "between-buttons-ever")
            ]),
            key: "0"
          } : void 0
        ]), 1040)) : b("", !0)
      ], 2);
    };
  }
}), pt = {
  install: (e, a = {}) => {
    e.component("lkt-step-process", ut);
  }
};
export {
  pt as default
};

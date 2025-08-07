var K = Object.defineProperty;
var Q = (e, r, o) => r in e ? K(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o;
var i = (e, r, o) => Q(e, typeof r != "symbol" ? r + "" : r, o);
import { defineComponent as R, resolveComponent as S, createElementBlock as L, openBlock as d, withDirectives as N, createCommentVNode as y, createBlock as B, mergeProps as C, vShow as A, mergeDefaults as J, useSlots as W, ref as g, watch as P, computed as u, onMounted as Y, normalizeClass as Z, normalizeProps as ee, createElementVNode as te, Fragment as ae, renderList as re, renderSlot as ne } from "vue";
import "lkt-string-tools";
import "lkt-data-state";
var oe = ((e) => (e.Button = "button", e.Submit = "submit", e.Reset = "reset", e.Anchor = "anchor", e.Content = "content", e.Switch = "switch", e.HiddenSwitch = "hidden-switch", e.Split = "split", e.SplitLazy = "split-lazy", e.SplitEver = "split-ever", e.Tooltip = "tooltip", e.TooltipLazy = "tooltip-lazy", e.TooltipEver = "tooltip-ever", e.FileUpload = "file-upload", e.ImageUpload = "image-upload", e))(oe || {}), le = ((e) => (e.Text = "text", e.Email = "email", e.Tel = "tel", e.Password = "password", e.Search = "search", e.Number = "number", e.Color = "color", e.Range = "range", e.Textarea = "textarea", e.Html = "html", e.Date = "date", e.Time = "time", e.DateTime = "datetime", e.File = "file", e.Image = "image", e.Select = "select", e.Check = "check", e.Switch = "switch", e.Calc = "calc", e.Card = "card", e.Table = "table", e.Radio = "radio", e.ToggleButtonGroup = "toggle-button-group", e))(le || {}), ie = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], s, ue = (s = class {
  constructor(r) {
  }
  feed(r = {}, o = this) {
    if (typeof r == "object") for (let [a, f] of Object.entries(r)) o.assignProp(a, f);
  }
  assignProp(r, o) {
    if (!(ie.includes(r) || s.lktExcludedProps.includes(r))) {
      if (s.lktDateProps.includes(r)) {
        this[r] = new Date(o);
        return;
      }
      this[r] = o;
    }
  }
}, i(s, "lktAllowUndefinedProps", []), i(s, "lktExcludedProps", []), i(s, "lktDateProps", []), i(s, "lktStrictItem", !1), i(s, "lktDefaultValues", []), s), se = ((e) => (e.Auto = "auto", e.Always = "always", e.Lazy = "lazy", e.Ever = "ever", e))(se || {}), de = ((e) => (e.Transform = "transform", e.Height = "height", e.Display = "display", e))(de || {}), ve = ((e) => (e.Href = "href", e.RouterLink = "router-link", e.RouterLinkBack = "router-link-back", e.Mail = "mail", e.Tel = "tel", e.Tab = "tab", e.Download = "download", e.Action = "action", e.Legacy = "", e))(ve || {}), ce = ((e) => (e.Static = "static", e.Parallax = "parallax", e))(ce || {}), pe = ((e) => (e.None = "", e.Field = "field", e.Button = "button", e.Anchor = "anchor", e.InlineDrop = "inline-drop", e.ColumnIndex = "column-index", e))(pe || {}), me = ((e) => (e.Date = "date", e.Number = "number", e.Timer = "timer", e))(me || {}), fe = ((e) => (e.A0 = "a0", e.A1 = "a1", e.A2 = "a2", e.A3 = "a3", e.A4 = "a4", e.A5 = "a5", e.A6 = "a6", e.A7 = "a7", e.A8 = "a8", e.A9 = "a9", e))(fe || {}), he = ((e) => (e.List = "list", e.Inline = "inline", e.Count = "count", e.Table = "table", e))(he || {}), ke = ((e) => (e.HTTPResponse = "http-response", e.MinStringLength = "min-str", e.MinNumber = "min-num", e.MaxStringLength = "max-str", e.MaxNumber = "max-num", e.Email = "email", e.Empty = "empty", e.EqualTo = "equal-to", e.MinNumbers = "min-numbers", e.MaxNumbers = "max-numbers", e.MinChars = "min-chars", e.MaxChars = "max-chars", e.MinUpperChars = "min-upper-chars", e.MaxUpperChars = "max-upper-chars", e.MinLowerChars = "min-lower-chars", e.MaxLowerChars = "max-lower-chars", e.MinSpecialChars = "min-special-chars", e.MaxSpecialChars = "max-special-chars", e))(ke || {}), xe = ((e) => (e.Ok = "ok", e.Ko = "ko", e.Info = "info", e))(xe || {}), ye = ((e) => (e.StorageUnit = "unit", e.Directory = "dir", e.Image = "img", e.Video = "vid", e.File = "file", e))(ye || {}), be = ((e) => (e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e))(be || {}), Be = ((e) => (e.NotDefined = "", e.Button = "button", e))(Be || {}), ge = ((e) => (e.Start = "start", e.End = "end", e))(ge || {}), Le = ((e) => (e.Create = "create", e.Update = "update", e.Read = "read", e))(Le || {}), Ce = ((e) => (e.Inline = "inline", e.Modal = "modal", e))(Ce || {}), D = ((e) => (e.Top = "top", e.Bottom = "bottom", e))(D || {}), H = ((e) => (e.Changed = "changed", e.Always = "always", e.Never = "never", e))(H || {}), Pe = ((e) => (e.Manual = "manual", e.Auto = "auto", e.Delay = "delay", e))(Pe || {}), we = ((e) => (e.Toast = "toast", e.Inline = "inline", e))(we || {}), Se = ((e) => (e.Current = "current", e.Modifications = "modifications", e.SplitView = "split-view", e.Differences = "differences", e))(Se || {}), Ne = ((e) => (e.Anchor = "anchor", e.Button = "button", e.Header = "header", e.Entry = "entry", e))(Ne || {}), Ae = ((e) => (e.Modal = "modal", e.Confirm = "confirm", e))(Ae || {}), De = ((e) => (e.Pages = "pages", e.PrevNext = "prev-next", e.PagesPrevNext = "pages-prev-next", e.PagesPrevNextFirstLast = "pages-prev-next-first-last", e.LoadMore = "load-more", e.Infinite = "infinite", e))(De || {}), He = ((e) => (e.None = "", e.Incremental = "incremental", e.Decremental = "decremental", e))(He || {}), Ie = ((e) => (e.NotDefined = "", e.Hidden = "hidden", e.Integer = "integer", e.Decimal = "decimal", e.Auto = "auto", e))(Ie || {}), w, Me = (w = class extends ue {
  constructor(r = {}) {
    super();
    i(this, "modelValue", "");
    i(this, "loading", !1);
    i(this, "steps", []);
    i(this, "header", {});
    i(this, "nextButton", {});
    i(this, "prevButton", {});
    i(this, "buttonNavPosition", "top");
    i(this, "buttonNavVisibility", "always");
    this.feed(r);
  }
}, i(w, "lktDefaultValues", ["modelValue", "loading", "steps", "header"]), w), Te = ((e) => (e.Table = "table", e.Item = "item", e.Ul = "ul", e.Ol = "ol", e.Carousel = "carousel", e.Accordion = "accordion", e))(Te || {}), Ee = ((e) => (e[e.Auto = 0] = "Auto", e[e.PreferItem = 1] = "PreferItem", e[e.PreferCustomItem = 2] = "PreferCustomItem", e[e.PreferColumns = 3] = "PreferColumns", e))(Ee || {}), Re = ((e) => (e.NotDefined = "", e.ActionIcon = "action-icon", e))(Re || {}), Ve = ((e) => (e.Message = "message", e.Button = "button", e))(Ve || {}), Fe = ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(Fe || {}), Xe = ((e) => (e.Fixed = "fixed", e.Absolute = "absolute", e))(Xe || {}), _e = ((e) => (e.Top = "top", e.Bottom = "bottom", e.Center = "center", e.ReferrerCenter = "referrer-center", e))(_e || {}), je = ((e) => (e.Left = "left", e.Right = "right", e.Center = "center", e.LeftCorner = "left-corner", e.RightCorner = "right-corner", e))(je || {}), ze = ((e) => (e.LktAnchor = "lkt-anchor", e.LktLayoutAccordion = "lkt-layout-accordion", e.LktTextAccordion = "lkt-text-accordion", e.LktLayoutBox = "lkt-layout-box", e.LktTextBox = "lkt-text-box", e.LktLayoutBanner = "lkt-layout-banner", e.LktTextBanner = "lkt-text-banner", e.LktButton = "lkt-button", e.LktLayout = "lkt-layout", e.LktHeader = "lkt-header", e.LktIcon = "lkt-icon", e.LktIcons = "lkt-icons", e.LktImage = "lkt-image", e.LktText = "lkt-text", e))(ze || {}), Oe = ((e) => (e.Grid = "grid", e.FlexRow = "flex-row", e.FlexRows = "flex-rows", e.FlexColumn = "flex-column", e))(Oe || {}), Ue = ((e) => (e.Draft = "draft", e.Public = "public", e.Scheduled = "scheduled", e))(Ue || {}), $e = ((e) => (e[e.XXS = 1] = "XXS", e[e.XS = 2] = "XS", e[e.SM = 3] = "SM", e[e.MD = 4] = "MD", e[e.LG = 5] = "LG", e[e.XL = 6] = "XL", e[e.XXL = 7] = "XXL", e))($e || {}), Ge = ((e) => (e.None = "", e.Focus = "focus", e.Blur = "blur", e.Always = "always", e))(Ge || {}), qe = ((e) => (e.Message = "message", e.Inline = "inline", e))(qe || {}), Ke = ((e) => (e.Auto = "auto", e.Local = "local", e.Remote = "remote", e))(Ke || {}), Qe = ((e) => (e.Refresh = "refresh", e.Close = "close", e.ReOpen = "reOpen", e.Exec = "exec", e.Open = "open", e))(Qe || {}), Je = ((e) => (e.Asc = "asc", e.Desc = "desc", e))(Je || {}), We = ((e) => (e.Create = "create", e.Update = "update", e.Edit = "edit", e.Drop = "drop", e.Sort = "sort", e.SwitchEditMode = "switch-edit-mode", e.InlineEdit = "inline-edit", e.InlineCreate = "inline-create", e.ModalCreate = "modal-create", e.InlineCreateEver = "inline-create-ever", e))(We || {}), Ye = ((e) => (e.Lazy = "lazy", e.Ever = "ever", e))(Ye || {}), Ze = ((e) => (e.Page = "page", e.Element = "element", e))(Ze || {}), et = ((e) => (e.Quick = "quick", e.Full = "full", e))(et || {});
function tt(e) {
  let r = new e(), o = {};
  if (!Array.isArray(e.lktDefaultValues)) throw new Error("lktDefaultValues must be a keys array.");
  for (let a of e.lktDefaultValues) a in r && (o[a] = r[a]);
  return o;
}
const at = { class: "lkt-step-process-buttons" }, E = /* @__PURE__ */ R({
  __name: "ButtonNav",
  props: {
    prevButton: { type: [Object, Boolean] },
    nextButton: { type: [Object, Boolean] },
    isLoading: { type: Boolean },
    prevHidden: { type: Boolean },
    nextHidden: { type: Boolean }
  },
  emits: ["prev", "next"],
  setup(e, { emit: r }) {
    const o = r;
    return (a, f) => {
      const h = S("lkt-button");
      return d(), L("div", at, [
        a.prevButton ? N((d(), B(h, C({
          key: 0,
          ref: "prevButtonRef"
        }, a.prevButton, {
          onClick: f[0] || (f[0] = (m) => o("prev"))
        }), null, 16)), [
          [A, !a.isLoading && !a.prevHidden]
        ]) : y("", !0),
        a.nextButton ? N((d(), B(h, C({
          key: 1,
          ref: "nextButtonRef"
        }, a.nextButton, {
          onClick: f[1] || (f[1] = (m) => o("next"))
        }), null, 16)), [
          [A, !a.isLoading && !a.nextHidden]
        ]) : y("", !0)
      ]);
    };
  }
}), rt = {
  key: 2,
  class: "lkt-step-process_content"
}, nt = { class: "lkt-grid-1" }, ot = /* @__PURE__ */ R({
  __name: "LktStepProcess",
  props: /* @__PURE__ */ J({
    modelValue: {},
    loading: { type: Boolean },
    steps: {},
    header: {},
    nextButton: {},
    prevButton: {},
    buttonNavPosition: {},
    buttonNavVisibility: {}
  }, tt(Me)),
  emits: [
    "next",
    "prev",
    "finish",
    "update:modelValue",
    "update:loading"
  ],
  setup(e, { expose: r, emit: o }) {
    const a = e, f = W(), h = o, m = g(a.loading), v = g(a.modelValue), c = g(a.steps), V = g(null), F = g(null);
    P(() => a.loading, (t) => m.value = t), P(() => a.modelValue, (t) => v.value = t), P(m, (t) => h("update:loading", t)), P(v, (t) => h("update:modelValue", t));
    const X = u(() => {
      let t = [];
      for (let l in f) l.indexOf("step-") !== -1 && t.push(l.substring(5));
      return t;
    }), b = u(() => c.value.findIndex((t) => t.key === v.value)), n = u(() => c.value[b.value]), _ = u(() => b.value === 0), j = u(() => {
      var l, p, x, k;
      if (((l = n.value) == null ? void 0 : l.prevButton) === !1 || a.prevButton === !1 && !((p = n.value) != null && p.prevButton))
        return !1;
      let t = { ...a.prevButton };
      return typeof ((x = n.value) == null ? void 0 : x.prevButton) == "object" && (t = { ...t, ...(k = n.value) == null ? void 0 : k.prevButton }), typeof t.disabled > "u" && (t.disabled = _.value), t;
    }), z = u(() => {
      var l, p, x, k;
      if (((l = n.value) == null ? void 0 : l.nextButton) === !1 || a.nextButton === !1 && !((p = n.value) != null && p.nextButton))
        return !1;
      let t = { ...a.nextButton };
      return typeof ((x = n.value) == null ? void 0 : x.nextButton) == "object" && (t = { ...t, ...(k = n.value) == null ? void 0 : k.nextButton }), t;
    }), O = u(() => {
      var t, l;
      if (typeof n.value == "object") {
        if (typeof ((t = n.value) == null ? void 0 : t.prevHidden) == "function")
          return n.value.prevHidden(n.value, c.value);
        if (typeof ((l = n.value) == null ? void 0 : l.prevHidden) == "boolean")
          return n.value.prevHidden;
      }
      return b.value === 0;
    }), U = u(() => {
      var t, l, p;
      return typeof n.value == "object" ? typeof ((t = n.value) == null ? void 0 : t.nextHidden) == "function" ? n.value.nextHidden(n.value, c.value) : typeof ((l = n.value) == null ? void 0 : l.nextHidden) == "boolean" ? n.value.nextHidden : ((p = n.value) == null ? void 0 : p.nextButton) === !1 : !0;
    }), $ = u(() => {
      const t = [];
      return v.value && t.push(`step-${v.value}`), t.join(" ");
    }), G = u(() => a.buttonNavVisibility === H.Never ? !1 : !a.buttonNavPosition || a.buttonNavPosition === D.Top), q = u(() => a.buttonNavVisibility === H.Never ? !1 : a.buttonNavPosition === D.Bottom), I = u(() => ({
      isLoading: m.value,
      prevHidden: O.value,
      nextHidden: U.value,
      prevButton: j.value,
      nextButton: z.value
    })), M = (t) => {
      v.value = c.value[b.value + 1].key, b.value === c.value.length - 1 ? h("finish", t) : h("next", t);
    }, T = (t) => {
      v.value = c.value[b.value - 1].key, h("prev", t);
    };
    return r({
      goNext: () => {
        F.value.click();
      },
      goPrev: () => {
        V.value.click();
      },
      startLoader: () => m.value = !0,
      stopLoader: () => m.value = !1
    }), Y(() => {
      !v.value && c.value.length > 0 && (v.value = c.value[0].key);
    }), (t, l) => {
      const p = S("lkt-header"), x = S("lkt-loader");
      return d(), L("article", {
        class: Z(["lkt-step-process", $.value])
      }, [
        t.header && Object.keys(t.header).length > 0 ? (d(), B(p, ee(C({ key: 0 }, t.header)), null, 16)) : y("", !0),
        G.value ? (d(), B(E, C({ key: 1 }, I.value, {
          onPrev: T,
          onNext: M
        }), null, 16)) : y("", !0),
        m.value ? y("", !0) : (d(), L("div", rt, [
          te("div", nt, [
            (d(!0), L(ae, null, re(X.value, (k) => N((d(), L("div", null, [
              ne(t.$slots, "step-" + k, { config: c.value })
            ], 512)), [
              [A, k === v.value]
            ])), 256))
          ])
        ])),
        m.value ? (d(), B(x, { key: 3 })) : y("", !0),
        q.value ? (d(), B(E, C({ key: 4 }, I.value, {
          onPrev: T,
          onNext: M
        }), null, 16)) : y("", !0)
      ], 2);
    };
  }
}), dt = {
  install: (e, r = {}) => {
    e.component("lkt-step-process", ot);
  }
};
export {
  dt as default
};

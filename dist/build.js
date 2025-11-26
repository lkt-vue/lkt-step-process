var ie = Object.defineProperty;
var ce = (e, a, u) => a in e ? ie(e, a, { enumerable: !0, configurable: !0, writable: !0, value: u }) : e[a] = u;
var s = (e, a, u) => ce(e, typeof a != "symbol" ? a + "" : a, u);
import { defineComponent as ee, useSlots as te, ref as w, resolveComponent as O, createElementBlock as y, openBlock as l, withDirectives as K, createCommentVNode as f, createBlock as L, mergeProps as N, vShow as Q, unref as _, renderSlot as E, normalizeProps as H, Fragment as F, renderList as ae, mergeDefaults as ve, watch as R, computed as d, onMounted as de, normalizeClass as pe, createSlots as J, withCtx as W, guardReactiveProps as Y, createElementVNode as fe } from "vue";
import "lkt-string-tools";
import "lkt-object-tools";
import "lkt-data-state";
var me = ((e) => (e.Button = "button", e.Submit = "submit", e.Reset = "reset", e.Anchor = "anchor", e.Content = "content", e.Switch = "switch", e.HiddenSwitch = "hidden-switch", e.Split = "split", e.SplitLazy = "split-lazy", e.SplitEver = "split-ever", e.Tooltip = "tooltip", e.TooltipLazy = "tooltip-lazy", e.TooltipEver = "tooltip-ever", e.FileUpload = "file-upload", e.ImageUpload = "image-upload", e))(me || {}), ke = ((e) => (e.Text = "text", e.Email = "email", e.Tel = "tel", e.Password = "password", e.Search = "search", e.Number = "number", e.Color = "color", e.Range = "range", e.Textarea = "textarea", e.Html = "html", e.Date = "date", e.Time = "time", e.DateTime = "datetime", e.File = "file", e.Image = "image", e.Select = "select", e.Check = "check", e.Switch = "switch", e.Calc = "calc", e.Card = "card", e.Table = "table", e.Radio = "radio", e.ToggleButtonGroup = "toggle-button-group", e))(ke || {}), he = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], p, ye = (p = class {
  constructor(a) {
  }
  feed(a = {}, u = this) {
    if (typeof a == "object") for (let [n, m] of Object.entries(a)) u.assignProp(n, m);
  }
  assignProp(a, u) {
    if (!(he.includes(a) || p.lktExcludedProps.includes(a))) {
      if (p.lktDateProps.includes(a)) {
        this[a] = new Date(u);
        return;
      }
      this[a] = u;
    }
  }
}, s(p, "lktAllowUndefinedProps", []), s(p, "lktExcludedProps", []), s(p, "lktDateProps", []), s(p, "lktStrictItem", !1), s(p, "lktDefaultValues", []), p), xe = ((e) => (e.Auto = "auto", e.Always = "always", e.Lazy = "lazy", e.Ever = "ever", e))(xe || {}), be = ((e) => (e.Transform = "transform", e.Height = "height", e.Display = "display", e))(be || {}), Se = ((e) => (e.Href = "href", e.RouterLink = "router-link", e.RouterLinkBack = "router-link-back", e.Mail = "mail", e.Tel = "tel", e.Tab = "tab", e.Download = "download", e.Action = "action", e.Legacy = "", e))(Se || {}), Be = ((e) => (e.Static = "static", e.Parallax = "parallax", e))(Be || {}), ge = ((e) => (e.None = "", e.Field = "field", e.Button = "button", e.Anchor = "anchor", e.InlineDrop = "inline-drop", e.ColumnIndex = "column-index", e))(ge || {}), Le = ((e) => (e.Date = "date", e.Number = "number", e.Timer = "timer", e))(Le || {}), Ne = ((e) => (e.A0 = "a0", e.A1 = "a1", e.A2 = "a2", e.A3 = "a3", e.A4 = "a4", e.A5 = "a5", e.A6 = "a6", e.A7 = "a7", e.A8 = "a8", e.A9 = "a9", e))(Ne || {}), Ce = ((e) => (e.List = "list", e.Inline = "inline", e.Count = "count", e.Table = "table", e))(Ce || {}), Pe = ((e) => (e.HTTPResponse = "http-response", e.MinStringLength = "min-str", e.MinNumber = "min-num", e.MaxStringLength = "max-str", e.MaxNumber = "max-num", e.Email = "email", e.Empty = "empty", e.EqualTo = "equal-to", e.MinNumbers = "min-numbers", e.MaxNumbers = "max-numbers", e.MinChars = "min-chars", e.MaxChars = "max-chars", e.MinUpperChars = "min-upper-chars", e.MaxUpperChars = "max-upper-chars", e.MinLowerChars = "min-lower-chars", e.MaxLowerChars = "max-lower-chars", e.MinSpecialChars = "min-special-chars", e.MaxSpecialChars = "max-special-chars", e))(Pe || {}), we = ((e) => (e.Ok = "ok", e.Ko = "ko", e.Info = "info", e))(we || {}), Ie = ((e) => (e.StorageUnit = "unit", e.Directory = "dir", e.Image = "img", e.Video = "vid", e.File = "file", e))(Ie || {}), Ae = ((e) => (e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e))(Ae || {}), De = ((e) => (e.NotDefined = "", e.Button = "button", e))(De || {}), Me = ((e) => (e.Start = "start", e.End = "end", e))(Me || {}), Te = ((e) => (e.Create = "create", e.Update = "update", e.Read = "read", e))(Te || {}), Re = ((e) => (e.Inline = "inline", e.Modal = "modal", e))(Re || {}), X = ((e) => (e.Top = "top", e.Bottom = "bottom", e))(X || {}), z = ((e) => (e.Changed = "changed", e.Always = "always", e.Never = "never", e))(z || {}), Ee = ((e) => (e.Manual = "manual", e.Auto = "auto", e.Delay = "delay", e))(Ee || {}), He = ((e) => (e.Toast = "toast", e.Inline = "inline", e))(He || {}), Oe = ((e) => (e.Current = "current", e.Modifications = "modifications", e.SplitView = "split-view", e.Differences = "differences", e))(Oe || {}), _e = ((e) => (e.Anchor = "anchor", e.Button = "button", e.Header = "header", e.Entry = "entry", e))(_e || {}), Ve = ((e) => (e.Modal = "modal", e.Confirm = "confirm", e))(Ve || {}), je = ((e) => (e.Pages = "pages", e.PrevNext = "prev-next", e.PagesPrevNext = "pages-prev-next", e.PagesPrevNextFirstLast = "pages-prev-next-first-last", e.LoadMore = "load-more", e.Infinite = "infinite", e))(je || {}), Fe = ((e) => (e.None = "", e.Incremental = "incremental", e.Decremental = "decremental", e))(Fe || {}), Xe = ((e) => (e.NotDefined = "", e.Hidden = "hidden", e.Integer = "integer", e.Decimal = "decimal", e.Auto = "auto", e))(Xe || {}), j, ze = (j = class extends ye {
  constructor(a = {}) {
    super();
    s(this, "modelValue", "");
    s(this, "loading", !1);
    s(this, "steps", []);
    s(this, "header", {});
    s(this, "nextButton", {});
    s(this, "prevButton", {});
    s(this, "buttonNavPosition", "top");
    s(this, "buttonNavVisibility", "always");
    this.feed(a);
  }
}, s(j, "lktDefaultValues", ["modelValue", "loading", "steps", "header", "nextButton", "prevButton", "buttonNavPosition", "buttonNavVisibility"]), j), Ue = ((e) => (e.Table = "table", e.Item = "item", e.Ul = "ul", e.Ol = "ol", e.Carousel = "carousel", e.Accordion = "accordion", e))(Ue || {}), $e = ((e) => (e[e.Auto = 0] = "Auto", e[e.PreferItem = 1] = "PreferItem", e[e.PreferCustomItem = 2] = "PreferCustomItem", e[e.PreferColumns = 3] = "PreferColumns", e))($e || {}), Ge = ((e) => (e.NotDefined = "", e.ActionIcon = "action-icon", e))(Ge || {}), qe = ((e) => (e.Message = "message", e.Button = "button", e))(qe || {}), Ke = ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(Ke || {}), Qe = ((e) => (e.Fixed = "fixed", e.Absolute = "absolute", e))(Qe || {}), Je = ((e) => (e.Top = "top", e.Bottom = "bottom", e.Center = "center", e.ReferrerCenter = "referrer-center", e))(Je || {}), We = ((e) => (e.Left = "left", e.Right = "right", e.Center = "center", e.LeftCorner = "left-corner", e.RightCorner = "right-corner", e))(We || {}), Ye = ((e) => (e.LktAnchor = "lkt-anchor", e.LktLayoutAccordion = "lkt-layout-accordion", e.LktTextAccordion = "lkt-text-accordion", e.LktLayoutBox = "lkt-layout-box", e.LktTextBox = "lkt-text-box", e.LktLayoutBanner = "lkt-layout-banner", e.LktTextBanner = "lkt-text-banner", e.LktButton = "lkt-button", e.LktLayout = "lkt-layout", e.LktHeader = "lkt-header", e.LktIcon = "lkt-icon", e.LktIcons = "lkt-icons", e.LktImage = "lkt-image", e.LktText = "lkt-text", e))(Ye || {}), Ze = ((e) => (e.Grid = "grid", e.FlexRow = "flex-row", e.FlexRows = "flex-rows", e.FlexColumn = "flex-column", e))(Ze || {}), et = ((e) => (e.Draft = "draft", e.Public = "public", e.Scheduled = "scheduled", e))(et || {}), tt = ((e) => (e[e.XXS = 1] = "XXS", e[e.XS = 2] = "XS", e[e.SM = 3] = "SM", e[e.MD = 4] = "MD", e[e.LG = 5] = "LG", e[e.XL = 6] = "XL", e[e.XXL = 7] = "XXL", e))(tt || {}), at = ((e) => (e.None = "", e.Focus = "focus", e.Blur = "blur", e.Always = "always", e))(at || {}), nt = ((e) => (e.Message = "message", e.Inline = "inline", e))(nt || {}), rt = ((e) => (e.Auto = "auto", e.Local = "local", e.Remote = "remote", e))(rt || {}), ot = ((e) => (e.Refresh = "refresh", e.Close = "close", e.ReOpen = "reOpen", e.Exec = "exec", e.Open = "open", e))(ot || {}), lt = ((e) => (e.Asc = "asc", e.Desc = "desc", e))(lt || {}), ut = ((e) => (e.Create = "create", e.Update = "update", e.Edit = "edit", e.Drop = "drop", e.Sort = "sort", e.SwitchEditMode = "switch-edit-mode", e.InlineEdit = "inline-edit", e.InlineCreate = "inline-create", e.ModalCreate = "modal-create", e.InlineCreateEver = "inline-create-ever", e))(ut || {}), st = ((e) => (e.Lazy = "lazy", e.Ever = "ever", e))(st || {}), it = ((e) => (e.Page = "page", e.Element = "element", e))(it || {}), ct = ((e) => (e.Quick = "quick", e.Full = "full", e))(ct || {});
function vt(e) {
  let a = new e(), u = {};
  if (!Array.isArray(e.lktDefaultValues)) throw new Error("lktDefaultValues must be a keys array.");
  for (let n of e.lktDefaultValues) n in a && (u[n] = a[n]);
  return u;
}
const dt = { class: "lkt-step-process--nav" }, pt = {
  key: 1,
  class: "lkt-step-process--nav-info"
}, ft = {
  key: 1,
  class: "lkt-step-process--dots"
}, Z = /* @__PURE__ */ ee({
  __name: "ButtonNav",
  props: {
    prevButton: { type: [Object, Boolean] },
    nextButton: { type: [Object, Boolean] },
    isLoading: { type: Boolean },
    currentStep: {},
    currentStepIndex: {},
    amountOfSteps: {},
    dots: { type: Boolean },
    dotsNumbers: { type: Boolean }
  },
  emits: ["prev", "next"],
  setup(e, { expose: a, emit: u }) {
    const n = te(), m = w(null), x = w(null);
    return a({
      goNext: () => {
        x.value.click();
      },
      goPrev: () => {
        m.value.click();
      }
    }), (r, c) => {
      const i = O("lkt-button"), C = O("lkt-dot");
      return l(), y("div", dt, [
        r.prevButton ? K((l(), L(i, N({
          key: 0,
          ref_key: "prevButtonRef",
          ref: m
        }, r.prevButton, { class: "is-prev-button" }), null, 16)), [
          [Q, !r.isLoading]
        ]) : f("", !0),
        _(n)["nav-info"] || r.dots && r.amountOfSteps > 0 ? (l(), y("div", pt, [
          _(n)["nav-info"] ? E(r.$slots, "nav-info", H(N({ key: 0 }, {
            currentStep: r.currentStep,
            currentStepIndex: r.currentStepIndex,
            amountOfSteps: r.amountOfSteps
          }))) : f("", !0),
          r.dots && r.amountOfSteps > 0 ? (l(), y("div", ft, [
            (l(!0), y(F, null, ae(r.amountOfSteps, (T) => (l(), L(C, N({ ref_for: !0 }, {
              text: r.dotsNumbers ? T : "",
              class: T === r.currentStepIndex + 1 ? "is-active" : ""
            }), null, 16))), 256))
          ])) : f("", !0)
        ])) : f("", !0),
        r.nextButton ? K((l(), L(i, N({
          key: 2,
          ref_key: "nextButtonRef",
          ref: x
        }, r.nextButton, { class: "is-next-button" }), null, 16)), [
          [Q, !r.isLoading]
        ]) : f("", !0)
      ]);
    };
  }
}), mt = {
  key: 2,
  class: "lkt-step-process--content"
}, kt = { class: "lkt-grid-1" }, ht = { key: 0 }, yt = /* @__PURE__ */ ee({
  __name: "LktStepProcess",
  props: /* @__PURE__ */ ve({
    modelValue: {},
    loading: { type: Boolean },
    steps: {},
    header: {},
    nextButton: {},
    prevButton: {},
    buttonNavPosition: {},
    buttonNavVisibility: {},
    dots: { type: Boolean },
    dotsNumbers: { type: Boolean }
  }, vt(ze)),
  emits: [
    "next",
    "prev",
    "finish",
    "update:modelValue",
    "update:loading"
  ],
  setup(e, { expose: a, emit: u }) {
    const n = e, m = te(), x = u, r = w(n.loading), c = w(n.modelValue), i = w(n.steps), C = w(null);
    R(() => n.loading, (t) => r.value = t), R(() => n.modelValue, (t) => c.value = t), R(r, (t) => x("update:loading", t)), R(c, (t) => x("update:modelValue", t));
    const T = d(() => {
      let t = [];
      for (let k in m) k.indexOf("step-") !== -1 && t.push(k.substring(5));
      return t;
    }), P = d(() => i.value.findIndex((t) => t.key === c.value)), o = d(() => i.value[P.value]), ne = d(() => P.value === 0), U = d(() => {
      var b, S, v, h, B, I, A, D;
      if (((b = o.value) == null ? void 0 : b.prevButton) === !1 || n.prevButton === !1 && !((S = o.value) != null && S.prevButton) || typeof o.value == "object" && (typeof ((v = o.value) == null ? void 0 : v.prevHidden) == "function" && o.value.prevHidden(o.value, i.value) || typeof ((h = o.value) == null ? void 0 : h.prevHidden) == "boolean" && ((B = o.value) == null ? void 0 : B.prevHidden) === !0))
        return !1;
      let t = { ...n.prevButton };
      typeof ((I = o.value) == null ? void 0 : I.prevButton) == "object" && (t = { ...t, ...(A = o.value) == null ? void 0 : A.prevButton }), typeof t.disabled > "u" && (t.disabled = ne.value);
      const k = (D = t.events) == null ? void 0 : D.click;
      return {
        ...t,
        events: {
          ...t.events,
          click: (g) => {
            var M;
            typeof k == "function" && k(g), ((M = g.httpResponse) == null ? void 0 : M.success) !== !1 && se(g);
          }
        }
      };
    }), $ = d(() => {
      var b, S, v, h, B, I, A, D;
      if (((b = o.value) == null ? void 0 : b.nextButton) === !1 || n.nextButton === !1 && !((S = o.value) != null && S.nextButton) || typeof o.value == "object" && (typeof ((v = o.value) == null ? void 0 : v.nextHidden) == "function" && o.value.nextHidden(o.value, i.value) || typeof ((h = o.value) == null ? void 0 : h.nextHidden) == "boolean" && ((B = o.value) == null ? void 0 : B.nextHidden) === !0))
        return !1;
      let t = { ...n.nextButton };
      typeof ((I = o.value) == null ? void 0 : I.nextButton) == "object" && (t = { ...t, ...(A = o.value) == null ? void 0 : A.nextButton });
      const k = (D = t.events) == null ? void 0 : D.click;
      return {
        ...t,
        events: {
          ...t.events,
          click: (g) => {
            var M;
            typeof k == "function" && k(g), ((M = g.httpResponse) == null ? void 0 : M.success) !== !1 && ue(g);
          }
        }
      };
    }), re = d(() => {
      const t = [];
      return c.value && t.push(`step-${c.value}`), t.join(" ");
    }), oe = d(() => n.buttonNavVisibility === z.Never ? !1 : !n.buttonNavPosition || n.buttonNavPosition === X.Top), le = d(() => n.buttonNavVisibility === z.Never ? !1 : n.buttonNavPosition === X.Bottom), V = d(() => i.value.length), G = d(() => ({
      isLoading: r.value,
      prevButton: U.value,
      nextButton: $.value,
      currentStep: c.value,
      currentStepIndex: P.value,
      amountOfSteps: V.value,
      dots: n.dots,
      dotsNumbers: n.dotsNumbers
    })), q = d(() => typeof U.value == "object" || typeof $.value == "object" || n.dots || typeof m["nav-info"] < "u"), ue = (t) => {
      c.value = i.value[P.value + 1].key, P.value === i.value.length - 1 ? x("finish", t) : x("next", t);
    }, se = (t) => {
      c.value = i.value[P.value - 1].key, x("prev", t);
    };
    return a({
      goNext: () => {
        C.value.goNext();
      },
      goPrev: () => {
        C.value.goPrev();
      },
      startLoader: () => r.value = !0,
      stopLoader: () => r.value = !1
    }), de(() => {
      !c.value && i.value.length > 0 && (c.value = i.value[0].key);
    }), (t, k) => {
      const b = O("lkt-header"), S = O("lkt-loader");
      return l(), y("article", {
        class: pe(["lkt-step-process", re.value])
      }, [
        t.header && Object.keys(t.header).length > 0 ? (l(), L(b, H(N({ key: 0 }, t.header)), null, 16)) : f("", !0),
        oe.value && q.value ? (l(), L(Z, N({
          key: 1,
          ref_key: "navRef",
          ref: C
        }, G.value), J({ _: 2 }, [
          _(m)["nav-info"] ? {
            name: "nav-info",
            fn: W(({ currentStep: v, currentStepIndex: h, amountOfSteps: B }) => [
              E(t.$slots, "nav-info", H(Y({
                currentStep: v,
                currentStepIndex: h,
                amountOfSteps: V.value
              })))
            ]),
            key: "0"
          } : void 0
        ]), 1040)) : f("", !0),
        r.value ? f("", !0) : (l(), y("div", mt, [
          fe("div", kt, [
            (l(!0), y(F, null, ae(T.value, (v) => (l(), y(F, null, [
              v === c.value ? (l(), y("div", ht, [
                E(t.$slots, "step-" + v, { config: i.value })
              ])) : f("", !0)
            ], 64))), 256))
          ])
        ])),
        r.value ? (l(), L(S, { key: 3 })) : f("", !0),
        le.value && q.value ? (l(), L(Z, N({
          key: 4,
          ref_key: "navRef",
          ref: C
        }, G.value), J({ _: 2 }, [
          _(m)["nav-info"] ? {
            name: "nav-info",
            fn: W(({ currentStep: v, currentStepIndex: h, amountOfSteps: B }) => [
              E(t.$slots, "nav-info", H(Y({
                currentStep: v,
                currentStepIndex: h,
                amountOfSteps: V.value
              })))
            ]),
            key: "0"
          } : void 0
        ]), 1040)) : f("", !0)
      ], 2);
    };
  }
}), Lt = {
  install: (e, a = {}) => {
    e.component("lkt-step-process", yt);
  }
};
export {
  Lt as default
};

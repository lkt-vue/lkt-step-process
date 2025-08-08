var oe = Object.defineProperty;
var le = (e, a, l) => a in e ? oe(e, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[a] = l;
var i = (e, a, l) => le(e, typeof a != "symbol" ? a + "" : a, l);
import { defineComponent as K, useSlots as Q, ref as N, resolveComponent as M, createElementBlock as g, openBlock as s, withDirectives as E, createCommentVNode as h, createElementVNode as J, createBlock as L, mergeProps as C, vShow as O, renderSlot as A, unref as V, normalizeProps as D, Fragment as W, renderList as Y, mergeDefaults as ue, watch as I, computed as p, onMounted as ie, normalizeClass as se, createSlots as $, withCtx as U, guardReactiveProps as G } from "vue";
import "lkt-string-tools";
import "lkt-data-state";
var de = ((e) => (e.Button = "button", e.Submit = "submit", e.Reset = "reset", e.Anchor = "anchor", e.Content = "content", e.Switch = "switch", e.HiddenSwitch = "hidden-switch", e.Split = "split", e.SplitLazy = "split-lazy", e.SplitEver = "split-ever", e.Tooltip = "tooltip", e.TooltipLazy = "tooltip-lazy", e.TooltipEver = "tooltip-ever", e.FileUpload = "file-upload", e.ImageUpload = "image-upload", e))(de || {}), ve = ((e) => (e.Text = "text", e.Email = "email", e.Tel = "tel", e.Password = "password", e.Search = "search", e.Number = "number", e.Color = "color", e.Range = "range", e.Textarea = "textarea", e.Html = "html", e.Date = "date", e.Time = "time", e.DateTime = "datetime", e.File = "file", e.Image = "image", e.Select = "select", e.Check = "check", e.Switch = "switch", e.Calc = "calc", e.Card = "card", e.Table = "table", e.Radio = "radio", e.ToggleButtonGroup = "toggle-button-group", e))(ve || {}), ce = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], v, pe = (v = class {
  constructor(a) {
  }
  feed(a = {}, l = this) {
    if (typeof a == "object") for (let [n, y] of Object.entries(a)) l.assignProp(n, y);
  }
  assignProp(a, l) {
    if (!(ce.includes(a) || v.lktExcludedProps.includes(a))) {
      if (v.lktDateProps.includes(a)) {
        this[a] = new Date(l);
        return;
      }
      this[a] = l;
    }
  }
}, i(v, "lktAllowUndefinedProps", []), i(v, "lktExcludedProps", []), i(v, "lktDateProps", []), i(v, "lktStrictItem", !1), i(v, "lktDefaultValues", []), v), me = ((e) => (e.Auto = "auto", e.Always = "always", e.Lazy = "lazy", e.Ever = "ever", e))(me || {}), fe = ((e) => (e.Transform = "transform", e.Height = "height", e.Display = "display", e))(fe || {}), ke = ((e) => (e.Href = "href", e.RouterLink = "router-link", e.RouterLinkBack = "router-link-back", e.Mail = "mail", e.Tel = "tel", e.Tab = "tab", e.Download = "download", e.Action = "action", e.Legacy = "", e))(ke || {}), he = ((e) => (e.Static = "static", e.Parallax = "parallax", e))(he || {}), xe = ((e) => (e.None = "", e.Field = "field", e.Button = "button", e.Anchor = "anchor", e.InlineDrop = "inline-drop", e.ColumnIndex = "column-index", e))(xe || {}), ye = ((e) => (e.Date = "date", e.Number = "number", e.Timer = "timer", e))(ye || {}), be = ((e) => (e.A0 = "a0", e.A1 = "a1", e.A2 = "a2", e.A3 = "a3", e.A4 = "a4", e.A5 = "a5", e.A6 = "a6", e.A7 = "a7", e.A8 = "a8", e.A9 = "a9", e))(be || {}), Se = ((e) => (e.List = "list", e.Inline = "inline", e.Count = "count", e.Table = "table", e))(Se || {}), Be = ((e) => (e.HTTPResponse = "http-response", e.MinStringLength = "min-str", e.MinNumber = "min-num", e.MaxStringLength = "max-str", e.MaxNumber = "max-num", e.Email = "email", e.Empty = "empty", e.EqualTo = "equal-to", e.MinNumbers = "min-numbers", e.MaxNumbers = "max-numbers", e.MinChars = "min-chars", e.MaxChars = "max-chars", e.MinUpperChars = "min-upper-chars", e.MaxUpperChars = "max-upper-chars", e.MinLowerChars = "min-lower-chars", e.MaxLowerChars = "max-lower-chars", e.MinSpecialChars = "min-special-chars", e.MaxSpecialChars = "max-special-chars", e))(Be || {}), ge = ((e) => (e.Ok = "ok", e.Ko = "ko", e.Info = "info", e))(ge || {}), Le = ((e) => (e.StorageUnit = "unit", e.Directory = "dir", e.Image = "img", e.Video = "vid", e.File = "file", e))(Le || {}), Ce = ((e) => (e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e))(Ce || {}), Ne = ((e) => (e.NotDefined = "", e.Button = "button", e))(Ne || {}), Pe = ((e) => (e.Start = "start", e.End = "end", e))(Pe || {}), we = ((e) => (e.Create = "create", e.Update = "update", e.Read = "read", e))(we || {}), Ie = ((e) => (e.Inline = "inline", e.Modal = "modal", e))(Ie || {}), _ = ((e) => (e.Top = "top", e.Bottom = "bottom", e))(_ || {}), F = ((e) => (e.Changed = "changed", e.Always = "always", e.Never = "never", e))(F || {}), Ae = ((e) => (e.Manual = "manual", e.Auto = "auto", e.Delay = "delay", e))(Ae || {}), De = ((e) => (e.Toast = "toast", e.Inline = "inline", e))(De || {}), Me = ((e) => (e.Current = "current", e.Modifications = "modifications", e.SplitView = "split-view", e.Differences = "differences", e))(Me || {}), Te = ((e) => (e.Anchor = "anchor", e.Button = "button", e.Header = "header", e.Entry = "entry", e))(Te || {}), Re = ((e) => (e.Modal = "modal", e.Confirm = "confirm", e))(Re || {}), He = ((e) => (e.Pages = "pages", e.PrevNext = "prev-next", e.PagesPrevNext = "pages-prev-next", e.PagesPrevNextFirstLast = "pages-prev-next-first-last", e.LoadMore = "load-more", e.Infinite = "infinite", e))(He || {}), Ee = ((e) => (e.None = "", e.Incremental = "incremental", e.Decremental = "decremental", e))(Ee || {}), Oe = ((e) => (e.NotDefined = "", e.Hidden = "hidden", e.Integer = "integer", e.Decimal = "decimal", e.Auto = "auto", e))(Oe || {}), H, Ve = (H = class extends pe {
  constructor(a = {}) {
    super();
    i(this, "modelValue", "");
    i(this, "loading", !1);
    i(this, "steps", []);
    i(this, "header", {});
    i(this, "nextButton", {});
    i(this, "prevButton", {});
    i(this, "buttonNavPosition", "top");
    i(this, "buttonNavVisibility", "always");
    this.feed(a);
  }
}, i(H, "lktDefaultValues", ["modelValue", "loading", "steps", "header", "nextButton", "prevButton", "buttonNavPosition", "buttonNavVisibility"]), H), _e = ((e) => (e.Table = "table", e.Item = "item", e.Ul = "ul", e.Ol = "ol", e.Carousel = "carousel", e.Accordion = "accordion", e))(_e || {}), Fe = ((e) => (e[e.Auto = 0] = "Auto", e[e.PreferItem = 1] = "PreferItem", e[e.PreferCustomItem = 2] = "PreferCustomItem", e[e.PreferColumns = 3] = "PreferColumns", e))(Fe || {}), Xe = ((e) => (e.NotDefined = "", e.ActionIcon = "action-icon", e))(Xe || {}), je = ((e) => (e.Message = "message", e.Button = "button", e))(je || {}), ze = ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(ze || {}), $e = ((e) => (e.Fixed = "fixed", e.Absolute = "absolute", e))($e || {}), Ue = ((e) => (e.Top = "top", e.Bottom = "bottom", e.Center = "center", e.ReferrerCenter = "referrer-center", e))(Ue || {}), Ge = ((e) => (e.Left = "left", e.Right = "right", e.Center = "center", e.LeftCorner = "left-corner", e.RightCorner = "right-corner", e))(Ge || {}), qe = ((e) => (e.LktAnchor = "lkt-anchor", e.LktLayoutAccordion = "lkt-layout-accordion", e.LktTextAccordion = "lkt-text-accordion", e.LktLayoutBox = "lkt-layout-box", e.LktTextBox = "lkt-text-box", e.LktLayoutBanner = "lkt-layout-banner", e.LktTextBanner = "lkt-text-banner", e.LktButton = "lkt-button", e.LktLayout = "lkt-layout", e.LktHeader = "lkt-header", e.LktIcon = "lkt-icon", e.LktIcons = "lkt-icons", e.LktImage = "lkt-image", e.LktText = "lkt-text", e))(qe || {}), Ke = ((e) => (e.Grid = "grid", e.FlexRow = "flex-row", e.FlexRows = "flex-rows", e.FlexColumn = "flex-column", e))(Ke || {}), Qe = ((e) => (e.Draft = "draft", e.Public = "public", e.Scheduled = "scheduled", e))(Qe || {}), Je = ((e) => (e[e.XXS = 1] = "XXS", e[e.XS = 2] = "XS", e[e.SM = 3] = "SM", e[e.MD = 4] = "MD", e[e.LG = 5] = "LG", e[e.XL = 6] = "XL", e[e.XXL = 7] = "XXL", e))(Je || {}), We = ((e) => (e.None = "", e.Focus = "focus", e.Blur = "blur", e.Always = "always", e))(We || {}), Ye = ((e) => (e.Message = "message", e.Inline = "inline", e))(Ye || {}), Ze = ((e) => (e.Auto = "auto", e.Local = "local", e.Remote = "remote", e))(Ze || {}), et = ((e) => (e.Refresh = "refresh", e.Close = "close", e.ReOpen = "reOpen", e.Exec = "exec", e.Open = "open", e))(et || {}), tt = ((e) => (e.Asc = "asc", e.Desc = "desc", e))(tt || {}), at = ((e) => (e.Create = "create", e.Update = "update", e.Edit = "edit", e.Drop = "drop", e.Sort = "sort", e.SwitchEditMode = "switch-edit-mode", e.InlineEdit = "inline-edit", e.InlineCreate = "inline-create", e.ModalCreate = "modal-create", e.InlineCreateEver = "inline-create-ever", e))(at || {}), rt = ((e) => (e.Lazy = "lazy", e.Ever = "ever", e))(rt || {}), nt = ((e) => (e.Page = "page", e.Element = "element", e))(nt || {}), ot = ((e) => (e.Quick = "quick", e.Full = "full", e))(ot || {});
function lt(e) {
  let a = new e(), l = {};
  if (!Array.isArray(e.lktDefaultValues)) throw new Error("lktDefaultValues must be a keys array.");
  for (let n of e.lktDefaultValues) n in a && (l[n] = a[n]);
  return l;
}
const ut = { class: "lkt-step-process--nav" }, it = { class: "lkt-step-process--nav-info" }, st = {
  key: 1,
  class: "lkt-step-process--dots"
}, q = /* @__PURE__ */ K({
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
  setup(e, { expose: a, emit: l }) {
    const n = l, y = Q(), x = N(null), m = N(null);
    return a({
      goNext: () => {
        m.value.click();
      },
      goPrev: () => {
        x.value.click();
      }
    }), (r, u) => {
      const P = M("lkt-button"), T = M("lkt-dot");
      return s(), g("div", ut, [
        r.prevButton ? E((s(), L(P, C({
          key: 0,
          ref_key: "prevButtonRef",
          ref: x
        }, r.prevButton, {
          class: "is-prev-button",
          onClick: u[0] || (u[0] = (c) => n("prev"))
        }), null, 16)), [
          [O, !r.isLoading]
        ]) : h("", !0),
        J("div", it, [
          V(y)["nav-info"] ? A(r.$slots, "nav-info", D(C({ key: 0 }, {
            currentStep: r.currentStep,
            currentStepIndex: r.currentStepIndex,
            amountOfSteps: r.amountOfSteps
          }))) : h("", !0),
          r.dots && r.amountOfSteps > 0 ? (s(), g("div", st, [
            (s(!0), g(W, null, Y(r.amountOfSteps, (c) => (s(), L(T, C({ ref_for: !0 }, {
              text: r.dotsNumbers ? c : "",
              class: c === r.currentStepIndex + 1 ? "is-active" : ""
            }), null, 16))), 256))
          ])) : h("", !0)
        ]),
        r.nextButton ? E((s(), L(P, C({
          key: 1,
          ref_key: "nextButtonRef",
          ref: m
        }, r.nextButton, {
          class: "is-next-button",
          onClick: u[1] || (u[1] = (c) => n("next"))
        }), null, 16)), [
          [O, !r.isLoading]
        ]) : h("", !0)
      ]);
    };
  }
}), dt = {
  key: 2,
  class: "lkt-step-process--content"
}, vt = { class: "lkt-grid-1" }, ct = /* @__PURE__ */ K({
  __name: "LktStepProcess",
  props: /* @__PURE__ */ ue({
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
  }, lt(Ve)),
  emits: [
    "next",
    "prev",
    "finish",
    "update:modelValue",
    "update:loading"
  ],
  setup(e, { expose: a, emit: l }) {
    const n = e, y = Q(), x = l, m = N(n.loading), r = N(n.modelValue), u = N(n.steps), P = N(null);
    I(() => n.loading, (t) => m.value = t), I(() => n.modelValue, (t) => r.value = t), I(m, (t) => x("update:loading", t)), I(r, (t) => x("update:modelValue", t));
    const T = p(() => {
      let t = [];
      for (let f in y) f.indexOf("step-") !== -1 && t.push(f.substring(5));
      return t;
    }), c = p(() => u.value.findIndex((t) => t.key === r.value)), o = p(() => u.value[c.value]), Z = p(() => c.value === 0), ee = p(() => {
      var f, b, S, d, k, B, w;
      if (((f = o.value) == null ? void 0 : f.prevButton) === !1 || n.prevButton === !1 && !((b = o.value) != null && b.prevButton) || typeof o.value == "object" && (typeof ((S = o.value) == null ? void 0 : S.prevHidden) == "function" && o.value.prevHidden(o.value, u.value) || typeof ((d = o.value) == null ? void 0 : d.prevHidden) == "boolean" && ((k = o.value) == null ? void 0 : k.prevHidden) === !0))
        return !1;
      let t = { ...n.prevButton };
      return typeof ((B = o.value) == null ? void 0 : B.prevButton) == "object" && (t = { ...t, ...(w = o.value) == null ? void 0 : w.prevButton }), typeof t.disabled > "u" && (t.disabled = Z.value), t;
    }), te = p(() => {
      var f, b, S, d, k, B, w;
      if (((f = o.value) == null ? void 0 : f.nextButton) === !1 || n.nextButton === !1 && !((b = o.value) != null && b.nextButton) || typeof o.value == "object" && (typeof ((S = o.value) == null ? void 0 : S.nextHidden) == "function" && o.value.nextHidden(o.value, u.value) || typeof ((d = o.value) == null ? void 0 : d.nextHidden) == "boolean" && ((k = o.value) == null ? void 0 : k.nextHidden) === !0))
        return !1;
      let t = { ...n.nextButton };
      return typeof ((B = o.value) == null ? void 0 : B.nextButton) == "object" && (t = { ...t, ...(w = o.value) == null ? void 0 : w.nextButton }), t;
    }), ae = p(() => {
      const t = [];
      return r.value && t.push(`step-${r.value}`), t.join(" ");
    }), re = p(() => n.buttonNavVisibility === F.Never ? !1 : !n.buttonNavPosition || n.buttonNavPosition === _.Top), ne = p(() => n.buttonNavVisibility === F.Never ? !1 : n.buttonNavPosition === _.Bottom), R = p(() => u.value.length), X = p(() => ({
      isLoading: m.value,
      prevButton: ee.value,
      nextButton: te.value,
      currentStep: r.value,
      currentStepIndex: c.value,
      amountOfSteps: R.value,
      dots: n.dots,
      dotsNumbers: n.dotsNumbers
    })), j = (t) => {
      r.value = u.value[c.value + 1].key, c.value === u.value.length - 1 ? x("finish", t) : x("next", t);
    }, z = (t) => {
      r.value = u.value[c.value - 1].key, x("prev", t);
    };
    return a({
      goNext: () => {
        P.value.click();
      },
      goPrev: () => {
        P.value.click();
      },
      startLoader: () => m.value = !0,
      stopLoader: () => m.value = !1
    }), ie(() => {
      !r.value && u.value.length > 0 && (r.value = u.value[0].key);
    }), (t, f) => {
      const b = M("lkt-header"), S = M("lkt-loader");
      return s(), g("article", {
        class: se(["lkt-step-process", ae.value])
      }, [
        t.header && Object.keys(t.header).length > 0 ? (s(), L(b, D(C({ key: 0 }, t.header)), null, 16)) : h("", !0),
        re.value ? (s(), L(q, C({ key: 1 }, X.value, {
          onPrev: z,
          onNext: j
        }), $({ _: 2 }, [
          V(y)["nav-info"] ? {
            name: "nav-info",
            fn: U(({ currentStep: d, currentStepIndex: k, amountOfSteps: B }) => [
              A(t.$slots, "nav-info", D(G({
                currentStep: d,
                currentStepIndex: k,
                amountOfSteps: R.value
              })))
            ]),
            key: "0"
          } : void 0
        ]), 1040)) : h("", !0),
        m.value ? h("", !0) : (s(), g("div", dt, [
          J("div", vt, [
            (s(!0), g(W, null, Y(T.value, (d) => E((s(), g("div", null, [
              A(t.$slots, "step-" + d, { config: u.value })
            ], 512)), [
              [O, d === r.value]
            ])), 256))
          ])
        ])),
        m.value ? (s(), L(S, { key: 3 })) : h("", !0),
        ne.value ? (s(), L(q, C({ key: 4 }, X.value, {
          onPrev: z,
          onNext: j
        }), $({ _: 2 }, [
          V(y)["nav-info"] ? {
            name: "nav-info",
            fn: U(({ currentStep: d, currentStepIndex: k, amountOfSteps: B }) => [
              A(t.$slots, "nav-info", D(G({
                currentStep: d,
                currentStepIndex: k,
                amountOfSteps: R.value
              })))
            ]),
            key: "0"
          } : void 0
        ]), 1040)) : h("", !0)
      ], 2);
    };
  }
}), ht = {
  install: (e, a = {}) => {
    e.component("lkt-step-process", ct);
  }
};
export {
  ht as default
};

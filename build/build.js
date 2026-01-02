var de = Object.defineProperty;
var ve = (e, t, u) => t in e ? de(e, t, { enumerable: !0, configurable: !0, writable: !0, value: u }) : e[t] = u;
var n = (e, t, u) => ve(e, typeof t != "symbol" ? t + "" : t, u);
import { ref as k, defineComponent as ae, useSlots as re, resolveComponent as F, createElementBlock as B, openBlock as v, withDirectives as q, createCommentVNode as g, createBlock as N, mergeProps as D, vShow as Q, unref as _, renderSlot as H, normalizeProps as V, Fragment as W, renderList as ne, mergeDefaults as pe, watch as E, computed as b, onMounted as fe, normalizeClass as me, createSlots as Y, withCtx as Z, guardReactiveProps as ee, createElementVNode as ye } from "vue";
import "lkt-string-tools";
import "lkt-object-tools";
import "lkt-data-state";
var ke = ((e) => (e.Button = "button", e.Submit = "submit", e.Reset = "reset", e.Anchor = "anchor", e.Content = "content", e.Switch = "switch", e.HiddenSwitch = "hidden-switch", e.Split = "split", e.SplitLazy = "split-lazy", e.SplitEver = "split-ever", e.Tooltip = "tooltip", e.TooltipLazy = "tooltip-lazy", e.TooltipEver = "tooltip-ever", e.FileUpload = "file-upload", e.ImageUpload = "image-upload", e.InvisibleWrapper = "invisible-wrapper", e.Menu = "menu", e.Tab = "tab", e))(ke || {}), he = ((e) => (e.Text = "text", e.Email = "email", e.Tel = "tel", e.Password = "password", e.Search = "search", e.Number = "number", e.Color = "color", e.Range = "range", e.Textarea = "textarea", e.Html = "html", e.Date = "date", e.Time = "time", e.DateTime = "datetime", e.File = "file", e.Image = "image", e.Select = "select", e.Check = "check", e.Switch = "switch", e.Calc = "calc", e.Card = "card", e.Table = "table", e.Radio = "radio", e.ToggleButtonGroup = "toggle-button-group", e.DayOfWeek = "day-of-week", e))(he || {}), be = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], x, xe = (x = class {
  constructor(t) {
  }
  feed(t = {}, u = this) {
    if (typeof t == "object") for (let [r, S] of Object.entries(t)) u.assignProp(r, S);
  }
  assignProp(t, u) {
    if (!(be.includes(t) || x.lktExcludedProps.includes(t))) {
      if (x.lktDateProps.includes(t)) {
        this[t] = new Date(u);
        return;
      }
      this[t] = u;
    }
  }
}, n(x, "lktAllowUndefinedProps", []), n(x, "lktExcludedProps", []), n(x, "lktDateProps", []), n(x, "lktStrictItem", !1), n(x, "lktDefaultValues", []), x), ge = ((e) => (e.Auto = "auto", e.Always = "always", e.Lazy = "lazy", e.Ever = "ever", e))(ge || {}), Se = ((e) => (e.Transform = "transform", e.Height = "height", e.Display = "display", e))(Se || {}), Be = ((e) => (e.Href = "href", e.RouterLink = "router-link", e.RouterLinkBack = "router-link-back", e.Mail = "mail", e.Tel = "tel", e.Tab = "tab", e.Download = "download", e.Action = "action", e.Legacy = "", e))(Be || {}), Le = ((e) => (e.Static = "static", e.Parallax = "parallax", e))(Le || {}), Ae = ((e) => (e.None = "", e.Field = "field", e.Button = "button", e.Anchor = "anchor", e.Content = "content", e.InlineDrop = "inline-drop", e.ColumnIndex = "column-index", e))(Ae || {}), Ce = ((e) => (e.Date = "date", e.Number = "number", e.Timer = "timer", e.Chrono = "chrono", e))(Ce || {}), Me = ((e) => (e.Auto = "auto", e.Progress = "progress", e))(Me || {}), Ne = ((e) => (e.A0 = "a0", e.A1 = "a1", e.A2 = "a2", e.A3 = "a3", e.A4 = "a4", e.A5 = "a5", e.A6 = "a6", e.A7 = "a7", e.A8 = "a8", e.A9 = "a9", e))(Ne || {}), De = ((e) => (e.List = "list", e.Inline = "inline", e.Count = "count", e.Table = "table", e))(De || {}), Pe = ((e) => (e.HTTPResponse = "http-response", e.MinStringLength = "min-str", e.MinNumber = "min-num", e.MaxStringLength = "max-str", e.MaxNumber = "max-num", e.Email = "email", e.Empty = "empty", e.EqualTo = "equal-to", e.MinNumbers = "min-numbers", e.MaxNumbers = "max-numbers", e.MinChars = "min-chars", e.MaxChars = "max-chars", e.MinUpperChars = "min-upper-chars", e.MaxUpperChars = "max-upper-chars", e.MinLowerChars = "min-lower-chars", e.MaxLowerChars = "max-lower-chars", e.MinSpecialChars = "min-special-chars", e.MaxSpecialChars = "max-special-chars", e))(Pe || {}), Te = ((e) => (e.Ok = "ok", e.Ko = "ko", e.Info = "info", e))(Te || {}), we = ((e) => (e.StorageUnit = "unit", e.Directory = "dir", e.Image = "img", e.Video = "vid", e.File = "file", e))(we || {}), Ie = ((e) => (e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e))(Ie || {}), Oe = ((e) => (e.NotDefined = "", e.Button = "button", e))(Oe || {}), Re = ((e) => (e.Start = "start", e.End = "end", e))(Re || {}), Ee = ((e) => (e.Create = "create", e.Update = "update", e.Read = "read", e))(Ee || {}), He = ((e) => (e.Inline = "inline", e.Modal = "modal", e))(He || {}), X = ((e) => (e.Top = "top", e.Bottom = "bottom", e.Hidden = "hidden", e))(X || {}), U = ((e) => (e.Changed = "changed", e.Always = "always", e.Never = "never", e))(U || {}), Ve = ((e) => (e.Manual = "manual", e.Auto = "auto", e.Delay = "delay", e))(Ve || {}), Fe = ((e) => (e.Toast = "toast", e.Inline = "inline", e.Silent = "silent", e))(Fe || {}), _e = ((e) => (e.Current = "current", e.Modifications = "modifications", e.SplitView = "split-view", e.Differences = "differences", e))(_e || {}), je = ((e) => (e.Hidden = "hidden", e.Always = "always", e.TabList = "tablist", e))(je || {}), ze = ((e) => (e.Anchor = "anchor", e.Button = "button", e.Header = "header", e.Entry = "entry", e))(ze || {}), We = ((e) => (e.Modal = "modal", e.Confirm = "confirm", e))(We || {}), Xe = ((e) => (e.Pages = "pages", e.PrevNext = "prev-next", e.PagesPrevNext = "pages-prev-next", e.PagesPrevNextFirstLast = "pages-prev-next-first-last", e.LoadMore = "load-more", e.Infinite = "infinite", e.TimelineAsc = "timeline-asc", e.TimelineDesc = "timeline-desc", e.TimelineAscDesc = "timeline-asc-desc", e))(Xe || {}), Ue = ((e) => (e.None = "", e.Incremental = "incremental", e.Decremental = "decremental", e))(Ue || {}), $e = ((e) => (e.NotDefined = "", e.Hidden = "hidden", e.Integer = "integer", e.Decimal = "decimal", e.Auto = "auto", e))($e || {}), Je = ((e) => (e.Bar = "bar", e.Circle = "circle", e))(Je || {}), z, Ge = (z = class extends xe {
  constructor(t = {}) {
    super();
    n(this, "modelValue", "");
    n(this, "loading", !1);
    n(this, "steps", []);
    n(this, "header", {});
    n(this, "nextButton", {});
    n(this, "prevButton", {});
    n(this, "buttonNavPosition", "top");
    n(this, "buttonNavVisibility", "always");
    this.feed(t);
  }
}, n(z, "lktDefaultValues", ["modelValue", "loading", "steps", "header", "nextButton", "prevButton", "buttonNavPosition", "buttonNavVisibility"]), z), Ke = ((e) => (e.Table = "table", e.Item = "item", e.Ul = "ul", e.Ol = "ol", e.Carousel = "carousel", e.Accordion = "accordion", e.Calendar = "calendar", e))(Ke || {}), qe = ((e) => (e[e.Auto = 0] = "Auto", e[e.PreferItem = 1] = "PreferItem", e[e.PreferCustomItem = 2] = "PreferCustomItem", e[e.PreferColumns = 3] = "PreferColumns", e))(qe || {}), Qe = ((e) => (e.NotDefined = "", e.ActionIcon = "action-icon", e))(Qe || {}), Ye = ((e) => (e.Message = "message", e.Button = "button", e))(Ye || {}), Ze = ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(Ze || {}), et = ((e) => (e.Fixed = "fixed", e.Absolute = "absolute", e))(et || {}), tt = ((e) => (e.Top = "top", e.Bottom = "bottom", e.Center = "center", e.ReferrerCenter = "referrer-center", e))(tt || {}), at = ((e) => (e.Left = "left", e.Right = "right", e.Center = "center", e.LeftCorner = "left-corner", e.RightCorner = "right-corner", e))(at || {}), rt = ((e) => (e.Relative = "relative", e.Full = "full", e))(rt || {}), nt = ((e) => (e.LktAnchor = "lkt-anchor", e.LktLayoutAccordion = "lkt-layout-accordion", e.LktTextAccordion = "lkt-text-accordion", e.LktLayoutBox = "lkt-layout-box", e.LktTextBox = "lkt-text-box", e.LktLayoutBanner = "lkt-layout-banner", e.LktTextBanner = "lkt-text-banner", e.LktButton = "lkt-button", e.LktLayout = "lkt-layout", e.LktHeader = "lkt-header", e.LktIcon = "lkt-icon", e.LktIcons = "lkt-icons", e.LktImage = "lkt-image", e.LktText = "lkt-text", e))(nt || {}), ot = ((e) => (e.Grid = "grid", e.FlexRow = "flex-row", e.FlexRows = "flex-rows", e.FlexColumn = "flex-column", e))(ot || {}), lt = ((e) => (e.Draft = "draft", e.Public = "public", e.Scheduled = "scheduled", e))(lt || {}), st = ((e) => (e[e.XXS = 1] = "XXS", e[e.XS = 2] = "XS", e[e.SM = 3] = "SM", e[e.MD = 4] = "MD", e[e.LG = 5] = "LG", e[e.XL = 6] = "XL", e[e.XXL = 7] = "XXL", e))(st || {}), ut = ((e) => (e.PrevButton = "prev", e.NextButton = "next", e.DatePicker = "datePicker", e.GoToCurrent = "goToCurrent", e))(ut || {}), it = ((e) => (e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday", e))(it || {}), ct = ((e) => (e.None = "", e.Focus = "focus", e.Blur = "blur", e.Always = "always", e))(ct || {}), dt = ((e) => (e.Error = "error", e.Errors = "errors", e.All = "all", e))(dt || {}), vt = ((e) => (e.Message = "message", e.Inline = "inline", e))(vt || {}), pt = ((e) => (e.Auto = "auto", e.Local = "local", e.Remote = "remote", e.External = "external", e))(pt || {}), ft = ((e) => (e.Text = "text", e.Textarea = "textarea", e.Html = "html", e.Many = "many", e))(ft || {}), mt = ((e) => (e.Refresh = "refresh", e.Close = "close", e.ReOpen = "reOpen", e.Exec = "exec", e.Open = "open", e))(mt || {}), yt = ((e) => (e.Asc = "asc", e.Desc = "desc", e))(yt || {}), kt = ((e) => (e.Always = "always", e.Lazy = "lazy", e.Ever = "ever", e))(kt || {}), ht = ((e) => (e.Create = "create", e.Update = "update", e.Edit = "edit", e.Drop = "drop", e.Sort = "sort", e.SwitchEditMode = "switch-edit-mode", e.InlineEdit = "inline-edit", e.InlineCreate = "inline-create", e.ModalCreate = "modal-create", e.InlineCreateEver = "inline-create-ever", e))(ht || {}), bt = ((e) => (e.Lazy = "lazy", e.Ever = "ever", e))(bt || {}), xt = ((e) => (e.Page = "page", e.Element = "element", e))(xt || {}), p;
p = class {
}, n(p, "lktAppSize", k(4)), n(p, "lktAdminEnabled", k(!0)), n(p, "lktAppLoading", k(!0)), n(p, "lktAppReady", k(!1)), n(p, "lktAppSetup", k({})), n(p, "lktMainMenu"), n(p, "lktBottomBar"), n(p, "hasMainHeader", !0), n(p, "hasMainMenu", !0), n(p, "hasBottomBar", !0), n(p, "replaceMainMenuButtonWithBack", !1), n(p, "setup"), n(p, "mainHeader", k(void 0));
var d;
d = class {
  static setup(t) {
    t.firstDayOfWeek && (d.firstDayOfWeek.value = t.firstDayOfWeek), t.days && (d.days = t.days), t.months && (d.months = t.months), t.smDays && (d.smDays = t.smDays), t.smMonths && (d.smMonths = t.smMonths);
  }
  static getDaysAsOptions() {
    let t = [], u = d.firstDayOfWeek.value;
    for (let r = u; r < 7; ++r) t.push({ value: r, label: d.days[r] });
    --u;
    for (let r = u; r >= 0; --r) t.push({ value: r, label: d.days[r] });
    return t;
  }
}, n(d, "firstDayOfWeek", k(0)), n(d, "days", ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]), n(d, "months", ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]), n(d, "smDays", ["Sun", "Mon", "Tu", "Wed", "Th", "Fri", "Sat"]), n(d, "smMonths", ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]);
var gt = ((e) => (e.Quick = "quick", e.Full = "full", e))(gt || {});
function St(e) {
  let t = new e(), u = {};
  if (!Array.isArray(e.lktDefaultValues)) throw new Error("lktDefaultValues must be a keys array.");
  for (let r of e.lktDefaultValues) r in t && (u[r] = t[r]);
  return u;
}
const Bt = { class: "lkt-step-process--nav" }, Lt = {
  key: 1,
  class: "lkt-step-process--nav-info"
}, At = {
  key: 1,
  class: "lkt-step-process--dots"
}, te = /* @__PURE__ */ ae({
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
  setup(e, { expose: t, emit: u }) {
    const r = re(), S = k(null), L = k(null);
    return t({
      goNext: () => {
        L.value.click();
      },
      goPrev: () => {
        S.value.click();
      }
    }), (o, h) => {
      const i = F("lkt-button"), P = F("lkt-dot");
      return v(), B("div", Bt, [
        o.prevButton ? q((v(), N(i, D({
          key: 0,
          ref_key: "prevButtonRef",
          ref: S
        }, o.prevButton, { class: "is-prev-button" }), null, 16)), [
          [Q, !o.isLoading]
        ]) : g("", !0),
        _(r)["nav-info"] || o.dots && o.amountOfSteps > 0 ? (v(), B("div", Lt, [
          _(r)["nav-info"] ? H(o.$slots, "nav-info", V(D({ key: 0 }, {
            currentStep: o.currentStep,
            currentStepIndex: o.currentStepIndex,
            amountOfSteps: o.amountOfSteps
          }))) : g("", !0),
          o.dots && o.amountOfSteps > 0 ? (v(), B("div", At, [
            (v(!0), B(W, null, ne(o.amountOfSteps, (R) => (v(), N(P, D({ ref_for: !0 }, {
              text: o.dotsNumbers ? R : "",
              class: R === o.currentStepIndex + 1 ? "is-active" : ""
            }), null, 16))), 256))
          ])) : g("", !0)
        ])) : g("", !0),
        o.nextButton ? q((v(), N(i, D({
          key: 2,
          ref_key: "nextButtonRef",
          ref: L
        }, o.nextButton, { class: "is-next-button" }), null, 16)), [
          [Q, !o.isLoading]
        ]) : g("", !0)
      ]);
    };
  }
}), Ct = {
  key: 2,
  class: "lkt-step-process--content"
}, Mt = { class: "lkt-grid-1" }, Nt = { key: 0 }, Dt = /* @__PURE__ */ ae({
  __name: "LktStepProcess",
  props: /* @__PURE__ */ pe({
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
  }, St(Ge)),
  emits: [
    "next",
    "prev",
    "finish",
    "update:modelValue",
    "update:loading"
  ],
  setup(e, { expose: t, emit: u }) {
    const r = e, S = re(), L = u, o = k(r.loading), h = k(r.modelValue), i = k(r.steps), P = k(null);
    E(() => r.loading, (a) => o.value = a), E(() => r.modelValue, (a) => h.value = a), E(o, (a) => L("update:loading", a)), E(h, (a) => L("update:modelValue", a));
    const R = b(() => {
      let a = [];
      for (let l in S) l.indexOf("step-") !== -1 && a.push(l.substring(5));
      return a;
    }), A = b(() => i.value.findIndex((a) => a.key === h.value)), s = b(() => i.value[A.value]), oe = b(() => A.value === 0), $ = b(() => {
      var f, m, c, y, C, T, w, I;
      if (((f = s.value) == null ? void 0 : f.prevButton) === !1 || r.prevButton === !1 && !((m = s.value) != null && m.prevButton) || typeof s.value == "object" && (typeof ((c = s.value) == null ? void 0 : c.prevHidden) == "function" && s.value.prevHidden(s.value, i.value) || typeof ((y = s.value) == null ? void 0 : y.prevHidden) == "boolean" && ((C = s.value) == null ? void 0 : C.prevHidden) === !0))
        return !1;
      let a = { ...r.prevButton };
      typeof ((T = s.value) == null ? void 0 : T.prevButton) == "object" && (a = { ...a, ...(w = s.value) == null ? void 0 : w.prevButton }), typeof a.disabled > "u" && (a.disabled = oe.value);
      const l = (I = a.events) == null ? void 0 : I.click;
      return {
        ...a,
        events: {
          ...a.events,
          click: (M) => {
            var O;
            typeof l == "function" && l(M), ((O = M.httpResponse) == null ? void 0 : O.success) !== !1 && ce(M);
          }
        }
      };
    }), J = b(() => {
      var f, m, c, y, C, T, w, I;
      if (((f = s.value) == null ? void 0 : f.nextButton) === !1 || r.nextButton === !1 && !((m = s.value) != null && m.nextButton) || typeof s.value == "object" && (typeof ((c = s.value) == null ? void 0 : c.nextHidden) == "function" && s.value.nextHidden(s.value, i.value) || typeof ((y = s.value) == null ? void 0 : y.nextHidden) == "boolean" && ((C = s.value) == null ? void 0 : C.nextHidden) === !0))
        return !1;
      let a = { ...r.nextButton };
      typeof ((T = s.value) == null ? void 0 : T.nextButton) == "object" && (a = { ...a, ...(w = s.value) == null ? void 0 : w.nextButton });
      const l = (I = a.events) == null ? void 0 : I.click;
      return {
        ...a,
        events: {
          ...a.events,
          click: (M) => {
            var O;
            typeof l == "function" && l(M), ((O = M.httpResponse) == null ? void 0 : O.success) !== !1 && ie(M);
          }
        }
      };
    }), le = b(() => {
      const a = [];
      return h.value && a.push(`step-${h.value}`), a.join(" ");
    }), se = b(() => r.buttonNavVisibility === U.Never ? !1 : !r.buttonNavPosition || r.buttonNavPosition === X.Top), ue = b(() => r.buttonNavVisibility === U.Never ? !1 : r.buttonNavPosition === X.Bottom), j = b(() => i.value.length), G = b(() => ({
      isLoading: o.value,
      prevButton: $.value,
      nextButton: J.value,
      currentStep: h.value,
      currentStepIndex: A.value,
      amountOfSteps: j.value,
      dots: r.dots,
      dotsNumbers: r.dotsNumbers
    })), K = b(() => typeof $.value == "object" || typeof J.value == "object" || r.dots || typeof S["nav-info"] < "u"), ie = (a) => {
      var m;
      let l = (m = i.value[A.value]) == null ? void 0 : m.nextKey, f = A.value + 1;
      if (typeof l == "function" && (l = l()), typeof l == "string") {
        let c = i.value.findIndex((y) => y.key === l);
        c > -1 && (f = c);
      }
      h.value = i.value[f].key, A.value === i.value.length - 1 ? L("finish", a) : L("next", a);
    }, ce = (a) => {
      var m;
      let l = (m = i.value[A.value]) == null ? void 0 : m.prevKey, f = A.value - 1;
      if (typeof l == "function" && (l = l()), typeof l == "string") {
        let c = i.value.findIndex((y) => y.key === l);
        c > -1 && (f = c);
      }
      h.value = i.value[f].key, L("prev", a);
    };
    return t({
      goNext: () => {
        P.value.goNext();
      },
      goPrev: () => {
        P.value.goPrev();
      },
      startLoader: () => o.value = !0,
      stopLoader: () => o.value = !1
    }), fe(() => {
      !h.value && i.value.length > 0 && (h.value = i.value[0].key);
    }), (a, l) => {
      const f = F("lkt-header"), m = F("lkt-loader");
      return v(), B("article", {
        class: me(["lkt-step-process", le.value])
      }, [
        a.header && Object.keys(a.header).length > 0 ? (v(), N(f, V(D({ key: 0 }, a.header)), null, 16)) : g("", !0),
        se.value && K.value ? (v(), N(te, D({
          key: 1,
          ref_key: "navRef",
          ref: P
        }, G.value), Y({ _: 2 }, [
          _(S)["nav-info"] ? {
            name: "nav-info",
            fn: Z(({ currentStep: c, currentStepIndex: y, amountOfSteps: C }) => [
              H(a.$slots, "nav-info", V(ee({
                currentStep: c,
                currentStepIndex: y,
                amountOfSteps: j.value
              })))
            ]),
            key: "0"
          } : void 0
        ]), 1040)) : g("", !0),
        o.value ? g("", !0) : (v(), B("div", Ct, [
          ye("div", Mt, [
            (v(!0), B(W, null, ne(R.value, (c) => (v(), B(W, null, [
              c === h.value ? (v(), B("div", Nt, [
                H(a.$slots, "step-" + c, { config: i.value })
              ])) : g("", !0)
            ], 64))), 256))
          ])
        ])),
        o.value ? (v(), N(m, { key: 3 })) : g("", !0),
        ue.value && K.value ? (v(), N(te, D({
          key: 4,
          ref_key: "navRef",
          ref: P
        }, G.value), Y({ _: 2 }, [
          _(S)["nav-info"] ? {
            name: "nav-info",
            fn: Z(({ currentStep: c, currentStepIndex: y, amountOfSteps: C }) => [
              H(a.$slots, "nav-info", V(ee({
                currentStep: c,
                currentStepIndex: y,
                amountOfSteps: j.value
              })))
            ]),
            key: "0"
          } : void 0
        ]), 1040)) : g("", !0)
      ], 2);
    };
  }
}), Rt = {
  install: (e, t = {}) => {
    e.component("lkt-step-process", Dt);
  }
};
export {
  Rt as default
};

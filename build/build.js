var me = Object.defineProperty;
var ye = (e, a, c) => a in e ? me(e, a, { enumerable: !0, configurable: !0, writable: !0, value: c }) : e[a] = c;
var n = (e, a, c) => ye(e, typeof a != "symbol" ? a + "" : a, c);
import { ref as k, defineComponent as re, useSlots as ne, resolveComponent as j, createElementBlock as B, openBlock as f, withDirectives as X, createCommentVNode as g, createBlock as M, mergeProps as N, vShow as U, unref as _, renderSlot as H, normalizeProps as F, Fragment as $, renderList as oe, mergeDefaults as ke, watch as E, computed as b, onMounted as he, normalizeClass as be, createSlots as Y, withCtx as ee, guardReactiveProps as te, createElementVNode as Ae } from "vue";
import "lkt-string-tools";
import "lkt-object-tools";
import "lkt-data-state";
var xe = ((e) => (e.Button = "button", e.Submit = "submit", e.Reset = "reset", e.Anchor = "anchor", e.Content = "content", e.Switch = "switch", e.HiddenSwitch = "hidden-switch", e.Split = "split", e.SplitLazy = "split-lazy", e.SplitEver = "split-ever", e.Tooltip = "tooltip", e.TooltipLazy = "tooltip-lazy", e.TooltipEver = "tooltip-ever", e.FileUpload = "file-upload", e.ImageUpload = "image-upload", e.InvisibleWrapper = "invisible-wrapper", e.Menu = "menu", e.Tab = "tab", e))(xe || {}), ge = ((e) => (e.Text = "text", e.Email = "email", e.Tel = "tel", e.Password = "password", e.Search = "search", e.Number = "number", e.Color = "color", e.Range = "range", e.Textarea = "textarea", e.Html = "html", e.Date = "date", e.Time = "time", e.DateTime = "datetime", e.File = "file", e.Image = "image", e.Select = "select", e.Check = "check", e.Switch = "switch", e.Calc = "calc", e.Card = "card", e.Table = "table", e.Radio = "radio", e.ToggleButtonGroup = "toggle-button-group", e.DayOfWeek = "day-of-week", e))(ge || {}), Se = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], A, Be = (A = class {
  constructor(a) {
  }
  feed(a = {}, c = this) {
    if (typeof a == "object") for (let [r, S] of Object.entries(a)) c.assignProp(r, S);
  }
  assignProp(a, c) {
    if (!(Se.includes(a) || A.lktExcludedProps.includes(a))) {
      if (A.lktDateProps.includes(a)) {
        this[a] = new Date(c);
        return;
      }
      this[a] = c;
    }
  }
}, n(A, "lktAllowUndefinedProps", []), n(A, "lktExcludedProps", []), n(A, "lktDateProps", []), n(A, "lktStrictItem", !1), n(A, "lktDefaultValues", []), A), we = ((e) => (e.Auto = "auto", e.Always = "always", e.Lazy = "lazy", e.Ever = "ever", e))(we || {}), Ie = ((e) => (e.Transform = "transform", e.Height = "height", e.Display = "display", e))(Ie || {}), Le = ((e) => (e.Href = "href", e.RouterLink = "router-link", e.RouterLinkBack = "router-link-back", e.Mail = "mail", e.Tel = "tel", e.Tab = "tab", e.Download = "download", e.Action = "action", e.Legacy = "", e))(Le || {}), Re = ((e) => (e.Static = "static", e.Parallax = "parallax", e))(Re || {}), Ce = ((e) => (e.None = "", e.Field = "field", e.Button = "button", e.Anchor = "anchor", e.Content = "content", e.InlineDrop = "inline-drop", e.ColumnIndex = "column-index", e))(Ce || {}), Me = ((e) => (e.Date = "date", e.Number = "number", e.Timer = "timer", e.Chrono = "chrono", e))(Me || {}), Ne = ((e) => (e.Auto = "auto", e.Progress = "progress", e))(Ne || {}), Te = ((e) => (e.A0 = "a0", e.A1 = "a1", e.A2 = "a2", e.A3 = "a3", e.A4 = "a4", e.A5 = "a5", e.A6 = "a6", e.A7 = "a7", e.A8 = "a8", e.A9 = "a9", e))(Te || {}), De = ((e) => (e.List = "list", e.Inline = "inline", e.Count = "count", e.Table = "table", e))(De || {}), Pe = ((e) => (e.HTTPResponse = "http-response", e.MinStringLength = "min-str", e.MinNumber = "min-num", e.MaxStringLength = "max-str", e.MaxNumber = "max-num", e.Email = "email", e.Empty = "empty", e.EqualTo = "equal-to", e.MinNumbers = "min-numbers", e.MaxNumbers = "max-numbers", e.MinChars = "min-chars", e.MaxChars = "max-chars", e.MinUpperChars = "min-upper-chars", e.MaxUpperChars = "max-upper-chars", e.MinLowerChars = "min-lower-chars", e.MaxLowerChars = "max-lower-chars", e.MinSpecialChars = "min-special-chars", e.MaxSpecialChars = "max-special-chars", e))(Pe || {}), Ve = ((e) => (e.Ok = "ok", e.Ko = "ko", e.Info = "info", e))(Ve || {}), Oe = ((e) => (e.StorageUnit = "unit", e.Directory = "dir", e.Image = "img", e.Video = "vid", e.File = "file", e))(Oe || {}), Ee = ((e) => (e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e))(Ee || {}), He = ((e) => (e.NotDefined = "", e.Button = "button", e))(He || {}), Fe = ((e) => (e.Start = "start", e.End = "end", e))(Fe || {}), je = ((e) => (e.Create = "create", e.Update = "update", e.Read = "read", e))(je || {}), _e = ((e) => (e.Inline = "inline", e.Modal = "modal", e))(_e || {}), J = ((e) => (e.Top = "top", e.Bottom = "bottom", e.Hidden = "hidden", e))(J || {}), G = ((e) => (e.Changed = "changed", e.Always = "always", e.Never = "never", e))(G || {}), ze = ((e) => (e.Manual = "manual", e.Auto = "auto", e.Delay = "delay", e))(ze || {}), We = ((e) => (e.Toast = "toast", e.Inline = "inline", e.Silent = "silent", e))(We || {}), Xe = ((e) => (e.Current = "current", e.Modifications = "modifications", e.SplitView = "split-view", e.Differences = "differences", e))(Xe || {}), Ue = ((e) => (e.Hidden = "hidden", e.Always = "always", e.TabList = "tablist", e))(Ue || {}), $e = ((e) => (e.Anchor = "anchor", e.Button = "button", e.Header = "header", e.Entry = "entry", e))($e || {}), Je = ((e) => (e.Modal = "modal", e.Confirm = "confirm", e))(Je || {}), Ge = ((e) => (e.Pages = "pages", e.PrevNext = "prev-next", e.PagesPrevNext = "pages-prev-next", e.PagesPrevNextFirstLast = "pages-prev-next-first-last", e.LoadMore = "load-more", e.Infinite = "infinite", e.TimelineAsc = "timeline-asc", e.TimelineDesc = "timeline-desc", e.TimelineAscDesc = "timeline-asc-desc", e))(Ge || {}), qe = ((e) => (e.None = "", e.Incremental = "incremental", e.Decremental = "decremental", e))(qe || {}), Ke = ((e) => (e.NotDefined = "", e.Hidden = "hidden", e.Integer = "integer", e.Decimal = "decimal", e.Auto = "auto", e))(Ke || {}), Qe = ((e) => (e.Bar = "bar", e.Circle = "circle", e))(Qe || {}), W, Ze = (W = class extends Be {
  constructor(a = {}) {
    super();
    n(this, "modelValue", "");
    n(this, "loading", !1);
    n(this, "steps", []);
    n(this, "header", {});
    n(this, "nextButton", {});
    n(this, "prevButton", {});
    n(this, "buttonNavPosition", "top");
    n(this, "buttonNavVisibility", "always");
    this.feed(a);
  }
}, n(W, "lktDefaultValues", ["modelValue", "loading", "steps", "header", "nextButton", "prevButton", "buttonNavPosition", "buttonNavVisibility"]), W), Ye = ((e) => (e.Table = "table", e.Item = "item", e.Ul = "ul", e.Ol = "ol", e.Carousel = "carousel", e.Accordion = "accordion", e.Calendar = "calendar", e))(Ye || {}), et = ((e) => (e[e.Auto = 0] = "Auto", e[e.PreferItem = 1] = "PreferItem", e[e.PreferCustomItem = 2] = "PreferCustomItem", e[e.PreferColumns = 3] = "PreferColumns", e))(et || {}), tt = ((e) => (e.NotDefined = "", e.ActionIcon = "action-icon", e))(tt || {}), at = ((e) => (e.Message = "message", e.Button = "button", e))(at || {}), rt = ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(rt || {}), nt = ((e) => (e.Fixed = "fixed", e.Absolute = "absolute", e))(nt || {}), ot = ((e) => (e.Top = "top", e.Bottom = "bottom", e.Center = "center", e.ReferrerCenter = "referrer-center", e))(ot || {}), st = ((e) => (e.Left = "left", e.Right = "right", e.Center = "center", e.LeftCorner = "left-corner", e.RightCorner = "right-corner", e))(st || {}), lt = ((e) => (e.Relative = "relative", e.Full = "full", e))(lt || {}), it = ((e) => (e.LktAnchor = "lkt-anchor", e.LktLayoutAccordion = "lkt-layout-accordion", e.LktTextAccordion = "lkt-text-accordion", e.LktLayoutBox = "lkt-layout-box", e.LktTextBox = "lkt-text-box", e.LktLayoutBanner = "lkt-layout-banner", e.LktTextBanner = "lkt-text-banner", e.LktButton = "lkt-button", e.LktLayout = "lkt-layout", e.LktHeader = "lkt-header", e.LktIcon = "lkt-icon", e.LktIcons = "lkt-icons", e.LktImage = "lkt-image", e.LktText = "lkt-text", e))(it || {}), ut = ((e) => (e.Grid = "grid", e.FlexRow = "flex-row", e.FlexRows = "flex-rows", e.FlexColumn = "flex-column", e))(ut || {}), ct = ((e) => (e.Draft = "draft", e.Public = "public", e.Scheduled = "scheduled", e))(ct || {}), dt = ((e) => (e[e.XXS = 1] = "XXS", e[e.XS = 2] = "XS", e[e.SM = 3] = "SM", e[e.MD = 4] = "MD", e[e.LG = 5] = "LG", e[e.XL = 6] = "XL", e[e.XXL = 7] = "XXL", e))(dt || {}), vt = ((e) => (e.PrevButton = "prev", e.NextButton = "next", e.DatePicker = "datePicker", e.GoToCurrent = "goToCurrent", e))(vt || {}), pt = ((e) => (e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday", e))(pt || {}), ft = ((e) => (e.None = "", e.Focus = "focus", e.Blur = "blur", e.Always = "always", e))(ft || {}), mt = ((e) => (e.Error = "error", e.Errors = "errors", e.All = "all", e))(mt || {}), yt = ((e) => (e.Message = "message", e.Inline = "inline", e))(yt || {}), kt = ((e) => (e.Auto = "auto", e.Local = "local", e.Remote = "remote", e.External = "external", e))(kt || {}), ht = ((e) => (e.Text = "text", e.Textarea = "textarea", e.Html = "html", e.Many = "many", e))(ht || {}), bt = ((e) => (e.Refresh = "refresh", e.Close = "close", e.ReOpen = "reOpen", e.Exec = "exec", e.Open = "open", e))(bt || {}), At = ((e) => (e.Asc = "asc", e.Desc = "desc", e))(At || {}), x = ((e) => (e[e.RendersAndVisibleIfActive = 1] = "RendersAndVisibleIfActive", e[e.AlwaysRendersVisibleIfActive = 2] = "AlwaysRendersVisibleIfActive", e[e.AlwaysRendersVisibleAfterFirstActive = 3] = "AlwaysRendersVisibleAfterFirstActive", e[e.AlwaysRendersAlwaysVisible = 4] = "AlwaysRendersAlwaysVisible", e[e.RendersAfterFirstActiveVisibleIfActive = 5] = "RendersAfterFirstActiveVisibleIfActive", e))(x || {}), xt = ((e) => (e.Always = "always", e.Lazy = "lazy", e.Ever = "ever", e))(xt || {}), gt = ((e) => (e.Create = "create", e.Update = "update", e.Edit = "edit", e.Drop = "drop", e.Sort = "sort", e.SwitchEditMode = "switch-edit-mode", e.InlineEdit = "inline-edit", e.InlineCreate = "inline-create", e.ModalCreate = "modal-create", e.InlineCreateEver = "inline-create-ever", e))(gt || {}), St = ((e) => (e.Lazy = "lazy", e.Ever = "ever", e))(St || {}), Bt = ((e) => (e.Page = "page", e.Element = "element", e))(Bt || {}), m;
m = class {
}, n(m, "lktAppSize", k(4)), n(m, "lktAdminEnabled", k(!0)), n(m, "lktAppLoading", k(!0)), n(m, "lktAppReady", k(!1)), n(m, "lktAppSetup", k({})), n(m, "lktMainMenu"), n(m, "lktBottomBar"), n(m, "hasMainHeader", !0), n(m, "hasMainMenu", !0), n(m, "hasBottomBar", !0), n(m, "replaceMainMenuButtonWithBack", !1), n(m, "setup"), n(m, "mainHeader", k(void 0));
var p;
p = class {
  static setup(a) {
    a.firstDayOfWeek && (p.firstDayOfWeek.value = a.firstDayOfWeek), a.days && (p.days = a.days), a.months && (p.months = a.months), a.smDays && (p.smDays = a.smDays), a.smMonths && (p.smMonths = a.smMonths);
  }
  static getDaysAsOptions() {
    let a = [], c = p.firstDayOfWeek.value;
    for (let r = c; r < 7; ++r) a.push({ value: r, label: p.days[r] });
    --c;
    for (let r = c; r >= 0; --r) a.push({ value: r, label: p.days[r] });
    return a;
  }
}, n(p, "firstDayOfWeek", k(0)), n(p, "days", ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]), n(p, "months", ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]), n(p, "smDays", ["Sun", "Mon", "Tu", "Wed", "Th", "Fri", "Sat"]), n(p, "smMonths", ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]);
var wt = ((e) => (e.Quick = "quick", e.Full = "full", e))(wt || {});
function It(e) {
  let a = new e(), c = {};
  if (!Array.isArray(e.lktDefaultValues)) throw new Error("lktDefaultValues must be a keys array.");
  for (let r of e.lktDefaultValues) r in a && (c[r] = a[r]);
  return c;
}
const Lt = { class: "lkt-step-process--nav" }, Rt = {
  key: 1,
  class: "lkt-step-process--nav-info"
}, Ct = {
  key: 1,
  class: "lkt-step-process--dots"
}, ae = /* @__PURE__ */ re({
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
  setup(e, { expose: a, emit: c }) {
    const r = ne(), S = k(null), w = k(null);
    return a({
      goNext: () => {
        w.value.click();
      },
      goPrev: () => {
        S.value.click();
      }
    }), (s, y) => {
      const l = j("lkt-button"), T = j("lkt-dot");
      return f(), B("div", Lt, [
        s.prevButton ? X((f(), M(l, N({
          key: 0,
          ref_key: "prevButtonRef",
          ref: S
        }, s.prevButton, { class: "is-prev-button" }), null, 16)), [
          [U, !s.isLoading]
        ]) : g("", !0),
        _(r)["nav-info"] || s.dots && s.amountOfSteps > 0 ? (f(), B("div", Rt, [
          _(r)["nav-info"] ? H(s.$slots, "nav-info", F(N({ key: 0 }, {
            currentStep: s.currentStep,
            currentStepIndex: s.currentStepIndex,
            amountOfSteps: s.amountOfSteps
          }))) : g("", !0),
          s.dots && s.amountOfSteps > 0 ? (f(), B("div", Ct, [
            (f(!0), B($, null, oe(s.amountOfSteps, (L) => (f(), M(T, N({ ref_for: !0 }, {
              text: s.dotsNumbers ? L : "",
              class: L === s.currentStepIndex + 1 ? "is-active" : ""
            }), null, 16))), 256))
          ])) : g("", !0)
        ])) : g("", !0),
        s.nextButton ? X((f(), M(l, N({
          key: 2,
          ref_key: "nextButtonRef",
          ref: w
        }, s.nextButton, { class: "is-next-button" }), null, 16)), [
          [U, !s.isLoading]
        ]) : g("", !0)
      ]);
    };
  }
}), Mt = {
  key: 2,
  class: "lkt-step-process--content"
}, Nt = { class: "lkt-grid-1" }, Tt = { key: 0 }, Dt = /* @__PURE__ */ re({
  __name: "LktStepProcess",
  props: /* @__PURE__ */ ke({
    modelValue: {},
    loading: { type: Boolean },
    steps: {},
    header: {},
    nextButton: { type: [Boolean, Object] },
    prevButton: { type: [Boolean, Object] },
    buttonNavPosition: {},
    buttonNavVisibility: {},
    dots: { type: Boolean },
    dotsNumbers: { type: Boolean }
  }, It(Ze)),
  emits: [
    "next",
    "prev",
    "finish",
    "update:modelValue",
    "update:loading"
  ],
  setup(e, { expose: a, emit: c }) {
    const r = e, S = ne(), w = c, s = k(r.loading), y = k(r.modelValue), l = k(r.steps), T = k({}), L = k(null);
    E(() => r.loading, (t) => s.value = t), E(() => r.modelValue, (t) => y.value = t), E(s, (t) => w("update:loading", t)), E(y, (t) => {
      T.value[t] = !0, w("update:modelValue", t);
    });
    const se = b(() => {
      let t = [];
      for (let o in S) o.indexOf("step-") !== -1 && t.push(o.substring(5));
      return t;
    }), I = b(() => l.value.findIndex((t) => t.key === y.value)), u = b(() => l.value[I.value]), le = b(() => I.value === 0), q = b(() => {
      var d, v, i, h, R, D, P, V;
      if (((d = u.value) == null ? void 0 : d.prevButton) === !1 || r.prevButton === !1 && !((v = u.value) != null && v.prevButton) || typeof u.value == "object" && (typeof ((i = u.value) == null ? void 0 : i.prevHidden) == "function" && u.value.prevHidden(u.value, l.value) || typeof ((h = u.value) == null ? void 0 : h.prevHidden) == "boolean" && ((R = u.value) == null ? void 0 : R.prevHidden) === !0))
        return !1;
      let t = { ...r.prevButton };
      typeof ((D = u.value) == null ? void 0 : D.prevButton) == "object" && (t = { ...t, ...(P = u.value) == null ? void 0 : P.prevButton }), typeof t.disabled > "u" && (t.disabled = le.value);
      const o = (V = t.events) == null ? void 0 : V.click;
      return {
        ...t,
        events: {
          ...t.events,
          click: (C) => {
            var O;
            typeof o == "function" && o(C), ((O = C.httpResponse) == null ? void 0 : O.success) !== !1 && ve(C);
          }
        }
      };
    }), K = b(() => {
      var d, v, i, h, R, D, P, V;
      if (((d = u.value) == null ? void 0 : d.nextButton) === !1 || r.nextButton === !1 && !((v = u.value) != null && v.nextButton) || typeof u.value == "object" && (typeof ((i = u.value) == null ? void 0 : i.nextHidden) == "function" && u.value.nextHidden(u.value, l.value) || typeof ((h = u.value) == null ? void 0 : h.nextHidden) == "boolean" && ((R = u.value) == null ? void 0 : R.nextHidden) === !0))
        return !1;
      let t = { ...r.nextButton };
      typeof ((D = u.value) == null ? void 0 : D.nextButton) == "object" && (t = { ...t, ...(P = u.value) == null ? void 0 : P.nextButton });
      const o = (V = t.events) == null ? void 0 : V.click;
      return {
        ...t,
        events: {
          ...t.events,
          click: (C) => {
            var O;
            typeof o == "function" && o(C), ((O = C.httpResponse) == null ? void 0 : O.success) !== !1 && de(C);
          }
        }
      };
    }), ie = b(() => {
      const t = [];
      return y.value && t.push(`step-${y.value}`), t.join(" ");
    }), ue = b(() => r.buttonNavVisibility === G.Never ? !1 : !r.buttonNavPosition || r.buttonNavPosition === J.Top), ce = b(() => r.buttonNavVisibility === G.Never ? !1 : r.buttonNavPosition === J.Bottom), z = b(() => l.value.length), Q = b(() => ({
      isLoading: s.value,
      prevButton: q.value,
      nextButton: K.value,
      currentStep: y.value,
      currentStepIndex: I.value,
      amountOfSteps: z.value,
      dots: r.dots,
      dotsNumbers: r.dotsNumbers
    })), Z = b(() => typeof q.value == "object" || typeof K.value == "object" || r.dots || typeof S["nav-info"] < "u"), de = (t) => {
      var v;
      let o = (v = l.value[I.value]) == null ? void 0 : v.nextKey, d = I.value + 1;
      if (typeof o == "function" && (o = o()), typeof o == "string") {
        let i = l.value.findIndex((h) => h.key === o);
        i > -1 && (d = i);
      }
      y.value = l.value[d].key, I.value === l.value.length - 1 ? w("finish", t) : w("next", t);
    }, ve = (t) => {
      var v;
      let o = (v = l.value[I.value]) == null ? void 0 : v.prevKey, d = I.value - 1;
      if (typeof o == "function" && (o = o()), typeof o == "string") {
        let i = l.value.findIndex((h) => h.key === o);
        i > -1 && (d = i);
      }
      y.value = l.value[d].key, w("prev", t);
    }, pe = (t) => {
      var d, v;
      const o = l.value.findIndex((i) => i.key === t);
      if (o > -1 && ((d = l.value[o]) != null && d.renderType))
        switch ((v = l.value[o]) == null ? void 0 : v.renderType) {
          case x.AlwaysRendersAlwaysVisible:
          case x.AlwaysRendersVisibleAfterFirstActive:
          case x.AlwaysRendersVisibleIfActive:
            return !0;
          case x.RendersAndVisibleIfActive:
            return t === y.value;
          case x.RendersAfterFirstActiveVisibleIfActive:
            return T.value[t] === !0;
        }
      return t === y.value;
    }, fe = (t) => {
      var d, v;
      const o = l.value.findIndex((i) => i.key === t);
      if (o > -1 && ((d = l.value[o]) != null && d.renderType))
        switch ((v = l.value[o]) == null ? void 0 : v.renderType) {
          case x.AlwaysRendersAlwaysVisible:
            return !0;
          case x.AlwaysRendersVisibleAfterFirstActive:
            return T.value[t] === !0;
          case x.AlwaysRendersVisibleIfActive:
          case x.RendersAndVisibleIfActive:
          case x.RendersAfterFirstActiveVisibleIfActive:
            return t === y.value;
        }
      return !0;
    };
    return a({
      goNext: () => {
        L.value.goNext();
      },
      goPrev: () => {
        L.value.goPrev();
      },
      startLoader: () => s.value = !0,
      stopLoader: () => s.value = !1
    }), he(() => {
      !y.value && l.value.length > 0 && (y.value = l.value[0].key);
    }), (t, o) => {
      const d = j("lkt-header"), v = j("lkt-loader");
      return f(), B("article", {
        class: be(["lkt-step-process", ie.value])
      }, [
        t.header && Object.keys(t.header).length > 0 ? (f(), M(d, F(N({ key: 0 }, t.header)), null, 16)) : g("", !0),
        ue.value && Z.value ? (f(), M(ae, N({
          key: 1,
          ref_key: "navRef",
          ref: L
        }, Q.value), Y({ _: 2 }, [
          _(S)["nav-info"] ? {
            name: "nav-info",
            fn: ee(({ currentStep: i, currentStepIndex: h, amountOfSteps: R }) => [
              H(t.$slots, "nav-info", F(te({
                currentStep: i,
                currentStepIndex: h,
                amountOfSteps: z.value
              })))
            ]),
            key: "0"
          } : void 0
        ]), 1040)) : g("", !0),
        s.value ? g("", !0) : (f(), B("div", Mt, [
          Ae("div", Nt, [
            (f(!0), B($, null, oe(se.value, (i) => (f(), B($, null, [
              pe(i) ? X((f(), B("div", Tt, [
                H(t.$slots, "step-" + i, { config: l.value })
              ], 512)), [
                [U, fe(i)]
              ]) : g("", !0)
            ], 64))), 256))
          ])
        ])),
        s.value ? (f(), M(v, { key: 3 })) : g("", !0),
        ce.value && Z.value ? (f(), M(ae, N({
          key: 4,
          ref_key: "navRef",
          ref: L
        }, Q.value), Y({ _: 2 }, [
          _(S)["nav-info"] ? {
            name: "nav-info",
            fn: ee(({ currentStep: i, currentStepIndex: h, amountOfSteps: R }) => [
              H(t.$slots, "nav-info", F(te({
                currentStep: i,
                currentStepIndex: h,
                amountOfSteps: z.value
              })))
            ]),
            key: "0"
          } : void 0
        ]), 1040)) : g("", !0)
      ], 2);
    };
  }
}), Ft = {
  install: (e, a = {}) => {
    e.component("lkt-step-process", Dt);
  }
};
export {
  Ft as default
};

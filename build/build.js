var ye = Object.defineProperty;
var xe = (e, a, v) => a in e ? ye(e, a, { enumerable: !0, configurable: !0, writable: !0, value: v }) : e[a] = v;
var n = (e, a, v) => xe(e, typeof a != "symbol" ? a + "" : a, v);
import { ref as f, defineComponent as re, useSlots as oe, computed as x, resolveComponent as z, createElementBlock as I, createCommentVNode as h, unref as O, openBlock as y, withDirectives as $, createBlock as M, mergeProps as N, vShow as J, renderSlot as H, normalizeProps as j, Fragment as q, renderList as le, mergeDefaults as ke, watch as E, onMounted as be, normalizeClass as he, createSlots as ee, withCtx as te, guardReactiveProps as ae, createElementVNode as Ae } from "vue";
import "lkt-string-tools";
import "lkt-object-tools";
import "lkt-data-state";
var Se = ((e) => (e.Button = "button", e.Submit = "submit", e.Reset = "reset", e.Anchor = "anchor", e.Content = "content", e.Switch = "switch", e.HiddenSwitch = "hidden-switch", e.Split = "split", e.SplitLazy = "split-lazy", e.SplitEver = "split-ever", e.Tooltip = "tooltip", e.TooltipLazy = "tooltip-lazy", e.TooltipEver = "tooltip-ever", e.FileUpload = "file-upload", e.ImageUpload = "image-upload", e.InvisibleWrapper = "invisible-wrapper", e.Menu = "menu", e.Tab = "tab", e))(Se || {}), ge = ((e) => (e.Text = "text", e.Email = "email", e.Tel = "tel", e.Password = "password", e.Search = "search", e.Number = "number", e.Color = "color", e.Range = "range", e.Textarea = "textarea", e.Html = "html", e.Date = "date", e.Time = "time", e.DateTime = "datetime", e.File = "file", e.Image = "image", e.Select = "select", e.Check = "check", e.Switch = "switch", e.Calc = "calc", e.Card = "card", e.Table = "table", e.Radio = "radio", e.ToggleButtonGroup = "toggle-button-group", e.DayOfWeek = "day-of-week", e))(ge || {}), Be = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], b, Ce = (b = class {
  constructor(a) {
  }
  feed(a = {}, v = this) {
    if (typeof a == "object") for (let [r, g] of Object.entries(a)) v.assignProp(r, g);
  }
  assignProp(a, v) {
    if (!(Be.includes(a) || b.lktExcludedProps.includes(a))) {
      if (b.lktDateProps.includes(a)) {
        this[a] = new Date(v);
        return;
      }
      this[a] = v;
    }
  }
}, n(b, "lktAllowUndefinedProps", []), n(b, "lktExcludedProps", []), n(b, "lktDateProps", []), n(b, "lktStrictItem", !1), n(b, "lktDefaultValues", []), b), Ie = ((e) => (e.Auto = "auto", e.Always = "always", e.Lazy = "lazy", e.Ever = "ever", e))(Ie || {}), we = ((e) => (e.Transform = "transform", e.Height = "height", e.Display = "display", e))(we || {}), Le = ((e) => (e.Href = "href", e.RouterLink = "router-link", e.RouterLinkReplace = "router-link-replace", e.RouterLinkBack = "router-link-back", e.Mail = "mail", e.Tel = "tel", e.Tab = "tab", e.Download = "download", e.Action = "action", e.Legacy = "", e))(Le || {}), Re = ((e) => (e.Static = "static", e.Parallax = "parallax", e))(Re || {}), Te = ((e) => (e.None = "", e.Field = "field", e.Button = "button", e.Anchor = "anchor", e.Content = "content", e.InlineDrop = "inline-drop", e.ColumnIndex = "column-index", e))(Te || {}), De = ((e) => (e.Date = "date", e.Number = "number", e.Timer = "timer", e.Chrono = "chrono", e))(De || {}), Me = ((e) => (e.Auto = "auto", e.Progress = "progress", e))(Me || {}), Ne = ((e) => (e.A0 = "a0", e.A1 = "a1", e.A2 = "a2", e.A3 = "a3", e.A4 = "a4", e.A5 = "a5", e.A6 = "a6", e.A7 = "a7", e.A8 = "a8", e.A9 = "a9", e))(Ne || {}), Pe = ((e) => (e.List = "list", e.Inline = "inline", e.Count = "count", e.Table = "table", e))(Pe || {}), Ve = ((e) => (e.HTTPResponse = "http-response", e.MinStringLength = "min-str", e.MinNumber = "min-num", e.MaxStringLength = "max-str", e.MaxNumber = "max-num", e.Email = "email", e.Empty = "empty", e.EqualTo = "equal-to", e.MinNumbers = "min-numbers", e.MaxNumbers = "max-numbers", e.MinChars = "min-chars", e.MaxChars = "max-chars", e.MinUpperChars = "min-upper-chars", e.MaxUpperChars = "max-upper-chars", e.MinLowerChars = "min-lower-chars", e.MaxLowerChars = "max-lower-chars", e.MinSpecialChars = "min-special-chars", e.MaxSpecialChars = "max-special-chars", e))(Ve || {}), Fe = ((e) => (e.Ok = "ok", e.Ko = "ko", e.Info = "info", e))(Fe || {}), Oe = ((e) => (e.StorageUnit = "unit", e.Directory = "dir", e.Image = "img", e.Video = "vid", e.File = "file", e))(Oe || {}), Ee = ((e) => (e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e))(Ee || {}), He = ((e) => (e.NotDefined = "", e.Button = "button", e))(He || {}), je = ((e) => (e.Start = "start", e.End = "end", e))(je || {}), ze = ((e) => (e[e.NotDefined = 0] = "NotDefined", e[e.SwapIconAndDot = 1] = "SwapIconAndDot", e))(ze || {}), We = ((e) => (e.Create = "create", e.Update = "update", e.Read = "read", e))(We || {}), Xe = ((e) => (e.Inline = "inline", e.Modal = "modal", e))(Xe || {}), G = ((e) => (e.Top = "top", e.Bottom = "bottom", e.Hidden = "hidden", e))(G || {}), Q = ((e) => (e.Changed = "changed", e.Always = "always", e.Never = "never", e))(Q || {}), Ue = ((e) => (e.Manual = "manual", e.Auto = "auto", e.Delay = "delay", e))(Ue || {}), $e = ((e) => (e.Toast = "toast", e.Inline = "inline", e.Silent = "silent", e))($e || {}), Je = ((e) => (e.Current = "current", e.Modifications = "modifications", e.SplitView = "split-view", e.Differences = "differences", e))(Je || {}), qe = ((e) => (e.Hidden = "hidden", e.Always = "always", e.TabList = "tablist", e))(qe || {}), Ge = ((e) => (e.Anchor = "anchor", e.Button = "button", e.Header = "header", e.Entry = "entry", e))(Ge || {}), Qe = ((e) => (e.Modal = "modal", e.Confirm = "confirm", e))(Qe || {}), Ye = ((e) => (e.Pages = "pages", e.PrevNext = "prev-next", e.PagesPrevNext = "pages-prev-next", e.PagesPrevNextFirstLast = "pages-prev-next-first-last", e.LoadMore = "load-more", e.Infinite = "infinite", e.TimelineAsc = "timeline-asc", e.TimelineDesc = "timeline-desc", e.TimelineAscDesc = "timeline-asc-desc", e))(Ye || {}), Ke = ((e) => (e.None = "", e.Incremental = "incremental", e.Decremental = "decremental", e))(Ke || {}), Ze = ((e) => (e.NotDefined = "", e.Hidden = "hidden", e.Integer = "integer", e.Decimal = "decimal", e.Auto = "auto", e))(Ze || {}), _e = ((e) => (e.Bar = "bar", e.Circle = "circle", e))(_e || {}), U, et = (U = class extends Ce {
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
}, n(U, "lktDefaultValues", ["modelValue", "loading", "steps", "header", "nextButton", "prevButton", "buttonNavPosition", "buttonNavVisibility"]), U), tt = ((e) => (e.Table = "table", e.Item = "item", e.Ul = "ul", e.Ol = "ol", e.Carousel = "carousel", e.Accordion = "accordion", e.Calendar = "calendar", e))(tt || {}), at = ((e) => (e[e.Auto = 0] = "Auto", e[e.PreferItem = 1] = "PreferItem", e[e.PreferCustomItem = 2] = "PreferCustomItem", e[e.PreferColumns = 3] = "PreferColumns", e))(at || {}), nt = ((e) => (e.NotDefined = "", e.ActionIcon = "action-icon", e))(nt || {}), rt = ((e) => (e.Message = "message", e.Button = "button", e))(rt || {}), ot = ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(ot || {}), lt = ((e) => (e.Fixed = "fixed", e.Absolute = "absolute", e))(lt || {}), it = ((e) => (e.Top = "top", e.Bottom = "bottom", e.Center = "center", e.ReferrerCenter = "referrer-center", e))(it || {}), st = ((e) => (e.Left = "left", e.Right = "right", e.Center = "center", e.LeftCorner = "left-corner", e.RightCorner = "right-corner", e))(st || {}), ut = ((e) => (e.Relative = "relative", e.Full = "full", e))(ut || {}), ct = ((e) => (e.LktAnchor = "lkt-anchor", e.LktLayoutAccordion = "lkt-layout-accordion", e.LktTextAccordion = "lkt-text-accordion", e.LktLayoutBox = "lkt-layout-box", e.LktTextBox = "lkt-text-box", e.LktLayoutBanner = "lkt-layout-banner", e.LktTextBanner = "lkt-text-banner", e.LktButton = "lkt-button", e.LktLayout = "lkt-layout", e.LktHeader = "lkt-header", e.LktIcon = "lkt-icon", e.LktIcons = "lkt-icons", e.LktImage = "lkt-image", e.LktText = "lkt-text", e))(ct || {}), dt = ((e) => (e.Grid = "grid", e.FlexRow = "flex-row", e.FlexRows = "flex-rows", e.FlexColumn = "flex-column", e))(dt || {}), vt = ((e) => (e.Draft = "draft", e.Public = "public", e.Scheduled = "scheduled", e))(vt || {}), ft = ((e) => (e[e.NeverLoaded = 0] = "NeverLoaded", e[e.Ready = 1] = "Ready", e[e.Loading = 2] = "Loading", e[e.Failed = 3] = "Failed", e[e.RequiredRefresh = 4] = "RequiredRefresh", e))(ft || {}), pt = ((e) => (e[e.XXS = 1] = "XXS", e[e.XS = 2] = "XS", e[e.SM = 3] = "SM", e[e.MD = 4] = "MD", e[e.LG = 5] = "LG", e[e.XL = 6] = "XL", e[e.XXL = 7] = "XXL", e))(pt || {}), mt = ((e) => (e.PrevButton = "prev", e.NextButton = "next", e.DatePicker = "datePicker", e.GoToCurrent = "goToCurrent", e))(mt || {}), yt = ((e) => (e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday", e))(yt || {}), xt = ((e) => (e.None = "", e.Focus = "focus", e.Blur = "blur", e.Always = "always", e))(xt || {}), kt = ((e) => (e.Error = "error", e.Errors = "errors", e.All = "all", e))(kt || {}), bt = ((e) => (e.Message = "message", e.Inline = "inline", e))(bt || {}), ht = ((e) => (e.Auto = "auto", e.Local = "local", e.Remote = "remote", e.External = "external", e))(ht || {}), At = ((e) => (e.Text = "text", e.Textarea = "textarea", e.Html = "html", e.Many = "many", e))(At || {}), St = ((e) => (e.Refresh = "refresh", e.Close = "close", e.ReOpen = "reOpen", e.Exec = "exec", e.Open = "open", e))(St || {}), gt = ((e) => (e.Asc = "asc", e.Desc = "desc", e))(gt || {}), S = ((e) => (e[e.RendersAndVisibleIfActive = 1] = "RendersAndVisibleIfActive", e[e.AlwaysRendersVisibleIfActive = 2] = "AlwaysRendersVisibleIfActive", e[e.AlwaysRendersVisibleAfterFirstActive = 3] = "AlwaysRendersVisibleAfterFirstActive", e[e.AlwaysRendersAlwaysVisible = 4] = "AlwaysRendersAlwaysVisible", e[e.RendersAfterFirstActiveVisibleIfActive = 5] = "RendersAfterFirstActiveVisibleIfActive", e))(S || {}), Bt = ((e) => (e.Always = "always", e.Lazy = "lazy", e.Ever = "ever", e))(Bt || {}), Ct = ((e) => (e.Create = "create", e.Update = "update", e.Edit = "edit", e.Drop = "drop", e.Sort = "sort", e.SwitchEditMode = "switch-edit-mode", e.InlineEdit = "inline-edit", e.InlineCreate = "inline-create", e.ModalCreate = "modal-create", e.InlineCreateEver = "inline-create-ever", e))(Ct || {}), It = ((e) => (e[e.Auto = 0] = "Auto", e[e.Light = 1] = "Light", e[e.Dark = 2] = "Dark", e))(It || {}), wt = ((e) => (e.Lazy = "lazy", e.Ever = "ever", e))(wt || {}), Lt = ((e) => (e.Page = "page", e.Element = "element", e))(Lt || {}), d;
d = class {
}, n(d, "lktAppSize", f(4)), n(d, "lktAdminEnabled", f(!0)), n(d, "lktAppLoading", f(!0)), n(d, "lktAppReady", f(!1)), n(d, "lktAppSetup", f({})), n(d, "appSetupChangedCallback"), n(d, "lktMainMenu"), n(d, "lktBottomBar"), n(d, "hasMainHeader", !0), n(d, "hasMainMenu", !0), n(d, "hasBottomBar", !0), n(d, "replaceMainMenuButtonWithBack", !1), n(d, "setup"), n(d, "i18nStatus", f(0)), n(d, "setupStatus", f(0)), n(d, "mainHeader", f(void 0)), n(d, "lktAppThemeModeConfig", f(0)), n(d, "lktAppThemeModeDetected", f("light")), n(d, "lktAppThemeMode", f("light"));
var m;
m = class {
  static setup(a) {
    a.firstDayOfWeek && (m.firstDayOfWeek.value = a.firstDayOfWeek), a.days && (m.days = a.days), a.months && (m.months = a.months), a.smDays && (m.smDays = a.smDays), a.smMonths && (m.smMonths = a.smMonths);
  }
  static getDaysAsOptions() {
    let a = [], v = m.firstDayOfWeek.value;
    for (let r = v; r < 7; ++r) a.push({ value: r, label: m.days[r] });
    --v;
    for (let r = v; r >= 0; --r) a.push({ value: r, label: m.days[r] });
    return a;
  }
}, n(m, "firstDayOfWeek", f(0)), n(m, "days", ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]), n(m, "months", ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]), n(m, "smDays", ["Sun", "Mon", "Tu", "Wed", "Th", "Fri", "Sat"]), n(m, "smMonths", ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]);
var Rt = ((e) => (e.Quick = "quick", e.Full = "full", e.Static = "static", e))(Rt || {});
function Tt(e) {
  let a = new e(), v = {};
  if (!Array.isArray(e.lktDefaultValues)) throw new Error("lktDefaultValues must be a keys array.");
  for (let r of e.lktDefaultValues) r in a && (v[r] = a[r]);
  return v;
}
const Dt = {
  key: 0,
  class: "lkt-step-process--nav"
}, Mt = {
  key: 1,
  class: "lkt-step-process--nav-info"
}, Nt = {
  key: 1,
  class: "lkt-step-process--dots"
}, ne = /* @__PURE__ */ re({
  __name: "ButtonNav",
  props: {
    prevButton: { type: [Object, Boolean] },
    nextButton: { type: [Object, Boolean] },
    isLoading: { type: Boolean },
    currentStep: {},
    currentStepConfig: {},
    currentStepIndex: {},
    visibleStepIndex: {},
    amountOfSteps: {},
    dots: { type: Boolean },
    dotsNumbers: { type: Boolean }
  },
  emits: ["prev", "next"],
  setup(e, { expose: a, emit: v }) {
    const r = e, g = oe(), w = f(null), B = f(null);
    a({
      goNext: () => {
        B.value.click();
      },
      goPrev: () => {
        w.value.click();
      }
    });
    const p = x(() => {
      var i, L;
      return typeof ((i = r.currentStepConfig) == null ? void 0 : i.excludedFromTotalCount) == "function" ? !r.currentStepConfig.excludedFromTotalCount() : typeof ((L = r.currentStepConfig) == null ? void 0 : L.excludedFromTotalCount) == "boolean" ? !r.currentStepConfig.excludedFromTotalCount : !0;
    });
    return (i, L) => {
      const R = z("lkt-button"), W = z("lkt-dot");
      return e.prevButton || e.nextButton || p.value && (O(g)["nav-info"] || e.dots && e.amountOfSteps > 0) ? (y(), I("div", Dt, [
        e.prevButton ? $((y(), M(R, N({
          key: 0,
          ref_key: "prevButtonRef",
          ref: w
        }, e.prevButton, { class: "is-prev-button" }), null, 16)), [
          [J, !e.isLoading]
        ]) : h("", !0),
        p.value && (O(g)["nav-info"] || e.dots && e.amountOfSteps > 0) ? (y(), I("div", Mt, [
          O(g)["nav-info"] ? H(i.$slots, "nav-info", j(N({ key: 0 }, {
            visibleStep: e.visibleStepIndex,
            currentStep: e.currentStep,
            currentStepIndex: e.currentStepIndex,
            amountOfSteps: e.amountOfSteps
          }))) : h("", !0),
          e.dots && e.amountOfSteps > 0 && p.value ? (y(), I("div", Nt, [
            (y(!0), I(q, null, le(e.amountOfSteps, (A) => (y(), M(W, N({ ref_for: !0 }, {
              text: e.dotsNumbers ? A : "",
              class: A === e.visibleStepIndex ? "is-active" : ""
            }), null, 16))), 256))
          ])) : h("", !0)
        ])) : h("", !0),
        e.nextButton ? $((y(), M(R, N({
          key: 2,
          ref_key: "nextButtonRef",
          ref: B
        }, e.nextButton, { class: "is-next-button" }), null, 16)), [
          [J, !e.isLoading]
        ]) : h("", !0)
      ])) : h("", !0);
    };
  }
}), Pt = {
  key: 2,
  class: "lkt-step-process--content"
}, Vt = { class: "lkt-grid-1" }, Ft = { key: 0 }, Ot = /* @__PURE__ */ re({
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
  }, Tt(et)),
  emits: [
    "next",
    "prev",
    "finish",
    "update:modelValue",
    "update:loading"
  ],
  setup(e, { expose: a, emit: v }) {
    const r = e, g = oe(), w = v, B = f(r.loading), p = f(r.modelValue), i = f(r.steps), L = f({}), R = f(null);
    E(() => r.loading, (t) => B.value = t), E(() => r.modelValue, (t) => p.value = t), E(B, (t) => w("update:loading", t)), E(p, (t) => {
      L.value[t] = !0, w("update:modelValue", t);
    });
    const W = x(() => {
      let t = [];
      for (let o in g) o.indexOf("step-") !== -1 && t.push(o.substring(5));
      return t;
    }), A = x(() => i.value.findIndex((t) => t.key === p.value)), ie = x(() => {
      let t = i.value.findIndex((l) => l.key === p.value), o = t;
      for (let l = 0; l < t; ++l) {
        let u = !1, s = i.value[l].excludedFromTotalCount;
        typeof s == "function" ? u = s() === !0 : typeof s == "boolean" && (u = s === !0), u && --o;
      }
      return o + 1;
    }), c = x(() => i.value[A.value]), se = x(() => A.value === 0), Y = x(() => {
      var l, u, s, k, T, C, P, V;
      if (((l = c.value) == null ? void 0 : l.prevButton) === !1 || r.prevButton === !1 && !((u = c.value) != null && u.prevButton) || typeof c.value == "object" && (typeof ((s = c.value) == null ? void 0 : s.prevHidden) == "function" && c.value.prevHidden(c.value, i.value) || typeof ((k = c.value) == null ? void 0 : k.prevHidden) == "boolean" && ((T = c.value) == null ? void 0 : T.prevHidden) === !0))
        return !1;
      let t = { ...r.prevButton };
      typeof ((C = c.value) == null ? void 0 : C.prevButton) == "object" && (t = { ...t, ...(P = c.value) == null ? void 0 : P.prevButton }), typeof t.disabled > "u" && (t.disabled = se.value);
      const o = (V = t.events) == null ? void 0 : V.click;
      return {
        ...t,
        events: {
          ...t.events,
          click: (D) => {
            var F;
            typeof o == "function" && o(D), ((F = D.httpResponse) == null ? void 0 : F.success) !== !1 && fe(D);
          }
        }
      };
    }), K = x(() => {
      var l, u, s, k, T, C, P, V;
      if (((l = c.value) == null ? void 0 : l.nextButton) === !1 || r.nextButton === !1 && !((u = c.value) != null && u.nextButton) || typeof c.value == "object" && (typeof ((s = c.value) == null ? void 0 : s.nextHidden) == "function" && c.value.nextHidden(c.value, i.value) || typeof ((k = c.value) == null ? void 0 : k.nextHidden) == "boolean" && ((T = c.value) == null ? void 0 : T.nextHidden) === !0))
        return !1;
      let t = { ...r.nextButton };
      typeof ((C = c.value) == null ? void 0 : C.nextButton) == "object" && (t = { ...t, ...(P = c.value) == null ? void 0 : P.nextButton });
      const o = (V = t.events) == null ? void 0 : V.click;
      return {
        ...t,
        events: {
          ...t.events,
          click: (D) => {
            var F;
            typeof o == "function" && o(D), ((F = D.httpResponse) == null ? void 0 : F.success) !== !1 && ve(D);
          }
        }
      };
    }), ue = x(() => {
      const t = [];
      return p.value && t.push(`step-${p.value}`), t.join(" ");
    }), ce = x(() => r.buttonNavVisibility === Q.Never ? !1 : !r.buttonNavPosition || r.buttonNavPosition === G.Top), de = x(() => r.buttonNavVisibility === Q.Never ? !1 : r.buttonNavPosition === G.Bottom), X = x(() => {
      let t = 0;
      return i.value.forEach((o) => {
        let l = !1;
        typeof o.excludedFromTotalCount == "function" ? l = o.excludedFromTotalCount() === !0 : typeof o.excludedFromTotalCount == "boolean" && (l = o.excludedFromTotalCount === !0), l || ++t;
      }), t;
    }), Z = x(() => ({
      isLoading: B.value,
      prevButton: Y.value,
      nextButton: K.value,
      currentStep: p.value,
      currentStepConfig: c.value,
      currentStepIndex: A.value,
      visibleStepIndex: ie.value,
      amountOfSteps: X.value,
      dots: r.dots,
      dotsNumbers: r.dotsNumbers
    })), _ = x(() => typeof Y.value == "object" || typeof K.value == "object" || r.dots || typeof g["nav-info"] < "u"), ve = (t) => {
      var u;
      let o = (u = i.value[A.value]) == null ? void 0 : u.nextKey, l = A.value + 1;
      if (typeof o == "function" && (o = o()), typeof o == "string") {
        let s = i.value.findIndex((k) => k.key === o);
        s > -1 && (l = s);
      }
      p.value = i.value[l].key, A.value === i.value.length - 1 ? w("finish", t) : w("next", t);
    }, fe = (t) => {
      var u;
      let o = (u = i.value[A.value]) == null ? void 0 : u.prevKey, l = A.value - 1;
      if (typeof o == "function" && (o = o()), typeof o == "string") {
        let s = i.value.findIndex((k) => k.key === o);
        s > -1 && (l = s);
      }
      p.value = i.value[l].key, w("prev", t);
    }, pe = (t) => {
      var l, u;
      const o = i.value.findIndex((s) => s.key === t);
      if (o > -1 && ((l = i.value[o]) != null && l.renderType))
        switch ((u = i.value[o]) == null ? void 0 : u.renderType) {
          case S.AlwaysRendersAlwaysVisible:
          case S.AlwaysRendersVisibleAfterFirstActive:
          case S.AlwaysRendersVisibleIfActive:
            return !0;
          case S.RendersAndVisibleIfActive:
            return t === p.value;
          case S.RendersAfterFirstActiveVisibleIfActive:
            return L.value[t] === !0;
        }
      return t === p.value;
    }, me = (t) => {
      var l, u;
      const o = i.value.findIndex((s) => s.key === t);
      if (o > -1 && ((l = i.value[o]) != null && l.renderType))
        switch ((u = i.value[o]) == null ? void 0 : u.renderType) {
          case S.AlwaysRendersAlwaysVisible:
            return !0;
          case S.AlwaysRendersVisibleAfterFirstActive:
            return L.value[t] === !0;
          case S.AlwaysRendersVisibleIfActive:
          case S.RendersAndVisibleIfActive:
          case S.RendersAfterFirstActiveVisibleIfActive:
            return t === p.value;
        }
      return !0;
    };
    return a({
      goNext: () => {
        R.value.goNext();
      },
      goPrev: () => {
        R.value.goPrev();
      },
      startLoader: () => B.value = !0,
      stopLoader: () => B.value = !1
    }), be(() => {
      !p.value && i.value.length > 0 && (p.value = i.value[0].key);
    }), (t, o) => {
      const l = z("lkt-header"), u = z("lkt-loader");
      return y(), I("article", {
        class: he(["lkt-step-process", ue.value])
      }, [
        e.header && Object.keys(e.header).length > 0 ? (y(), M(l, j(N({ key: 0 }, e.header)), null, 16)) : h("", !0),
        ce.value && _.value ? (y(), M(ne, N({
          key: 1,
          ref_key: "navRef",
          ref: R
        }, Z.value), ee({ _: 2 }, [
          O(g)["nav-info"] ? {
            name: "nav-info",
            fn: te(({ currentStep: s, currentStepIndex: k, amountOfSteps: T, visibleStep: C }) => [
              H(t.$slots, "nav-info", j(ae({
                visibleStep: C,
                currentStep: s,
                currentStepIndex: k,
                amountOfSteps: X.value
              })))
            ]),
            key: "0"
          } : void 0
        ]), 1040)) : h("", !0),
        B.value ? h("", !0) : (y(), I("div", Pt, [
          Ae("div", Vt, [
            (y(!0), I(q, null, le(W.value, (s) => (y(), I(q, null, [
              pe(s) ? $((y(), I("div", Ft, [
                H(t.$slots, "step-" + s, { config: i.value })
              ], 512)), [
                [J, me(s)]
              ]) : h("", !0)
            ], 64))), 256))
          ])
        ])),
        B.value ? (y(), M(u, { key: 3 })) : h("", !0),
        de.value && _.value ? (y(), M(ne, N({
          key: 4,
          ref_key: "navRef",
          ref: R
        }, Z.value), ee({ _: 2 }, [
          O(g)["nav-info"] ? {
            name: "nav-info",
            fn: te(({ currentStep: s, currentStepIndex: k, amountOfSteps: T, visibleStep: C }) => [
              H(t.$slots, "nav-info", j(ae({
                visibleStep: C,
                currentStep: s,
                currentStepIndex: k,
                amountOfSteps: X.value
              })))
            ]),
            key: "0"
          } : void 0
        ]), 1040)) : h("", !0)
      ], 2);
    };
  }
}), Xt = {
  install: (e, a = {}) => {
    e.component("lkt-step-process", Ot);
  }
};
export {
  Xt as default
};

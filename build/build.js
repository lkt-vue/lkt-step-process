var he = Object.defineProperty;
var Ae = (e, a, f) => a in e ? he(e, a, { enumerable: !0, configurable: !0, writable: !0, value: f }) : e[a] = f;
var n = (e, a, f) => Ae(e, typeof a != "symbol" ? a + "" : a, f);
import { ref as p, defineComponent as ue, useSlots as se, computed as b, resolveComponent as U, createElementBlock as D, createCommentVNode as g, unref as j, openBlock as y, withDirectives as Q, createBlock as V, mergeProps as F, vShow as Y, renderSlot as W, normalizeProps as X, Fragment as K, renderList as ce, mergeDefaults as Se, watch as z, onMounted as ge, normalizeClass as Be, createSlots as re, withCtx as oe, guardReactiveProps as le, createElementVNode as Ce } from "vue";
import "lkt-string-tools";
import "lkt-object-tools";
import "lkt-data-state";
var Ie = ((e) => (e.Button = "button", e.Submit = "submit", e.Reset = "reset", e.Anchor = "anchor", e.Content = "content", e.Switch = "switch", e.HiddenSwitch = "hidden-switch", e.Split = "split", e.SplitLazy = "split-lazy", e.SplitEver = "split-ever", e.Tooltip = "tooltip", e.TooltipLazy = "tooltip-lazy", e.TooltipEver = "tooltip-ever", e.FileUpload = "file-upload", e.ImageUpload = "image-upload", e.InvisibleWrapper = "invisible-wrapper", e.Menu = "menu", e.Tab = "tab", e))(Ie || {}), we = ((e) => (e.Text = "text", e.Email = "email", e.Tel = "tel", e.Password = "password", e.Search = "search", e.Number = "number", e.Color = "color", e.Range = "range", e.Textarea = "textarea", e.Html = "html", e.Date = "date", e.Time = "time", e.DateTime = "datetime", e.File = "file", e.Image = "image", e.Select = "select", e.Check = "check", e.Switch = "switch", e.Calc = "calc", e.Card = "card", e.Table = "table", e.Radio = "radio", e.ToggleButtonGroup = "toggle-button-group", e.DayOfWeek = "day-of-week", e))(we || {}), Le = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], S, Re = (S = class {
  constructor(a) {
  }
  feed(a = {}, f = this) {
    if (typeof a == "object") for (let [r, R] of Object.entries(a)) f.assignProp(r, R);
  }
  assignProp(a, f) {
    if (!(Le.includes(a) || S.lktExcludedProps.includes(a))) {
      if (S.lktDateProps.includes(a)) {
        this[a] = new Date(f);
        return;
      }
      this[a] = f;
    }
  }
}, n(S, "lktAllowUndefinedProps", []), n(S, "lktExcludedProps", []), n(S, "lktDateProps", []), n(S, "lktStrictItem", !1), n(S, "lktDefaultValues", []), S), Te = ((e) => (e.Auto = "auto", e.Always = "always", e.Lazy = "lazy", e.Ever = "ever", e))(Te || {}), De = ((e) => (e.Transform = "transform", e.Height = "height", e.Display = "display", e))(De || {}), Me = ((e) => (e.Href = "href", e.RouterLink = "router-link", e.RouterLinkReplace = "router-link-replace", e.RouterLinkBack = "router-link-back", e.Mail = "mail", e.Tel = "tel", e.Tab = "tab", e.Download = "download", e.Action = "action", e.Legacy = "", e))(Me || {}), Ne = ((e) => (e.Static = "static", e.Parallax = "parallax", e))(Ne || {}), Pe = ((e) => (e.None = "", e.Field = "field", e.Button = "button", e.Anchor = "anchor", e.Content = "content", e.InlineDrop = "inline-drop", e.ColumnIndex = "column-index", e))(Pe || {}), Ve = ((e) => (e.Date = "date", e.Number = "number", e.Timer = "timer", e.Chrono = "chrono", e))(Ve || {}), Fe = ((e) => (e.Auto = "auto", e.Progress = "progress", e))(Fe || {}), Oe = ((e) => (e.A0 = "a0", e.A1 = "a1", e.A2 = "a2", e.A3 = "a3", e.A4 = "a4", e.A5 = "a5", e.A6 = "a6", e.A7 = "a7", e.A8 = "a8", e.A9 = "a9", e))(Oe || {}), Ee = ((e) => (e.List = "list", e.Inline = "inline", e.Count = "count", e.Table = "table", e))(Ee || {}), He = ((e) => (e.HTTPResponse = "http-response", e.MinStringLength = "min-str", e.MinNumber = "min-num", e.MaxStringLength = "max-str", e.MaxNumber = "max-num", e.Email = "email", e.Empty = "empty", e.EqualTo = "equal-to", e.MinNumbers = "min-numbers", e.MaxNumbers = "max-numbers", e.MinChars = "min-chars", e.MaxChars = "max-chars", e.MinUpperChars = "min-upper-chars", e.MaxUpperChars = "max-upper-chars", e.MinLowerChars = "min-lower-chars", e.MaxLowerChars = "max-lower-chars", e.MinSpecialChars = "min-special-chars", e.MaxSpecialChars = "max-special-chars", e))(He || {}), je = ((e) => (e.Ok = "ok", e.Ko = "ko", e.Info = "info", e))(je || {}), ze = ((e) => (e.StorageUnit = "unit", e.Directory = "dir", e.Image = "img", e.Video = "vid", e.File = "file", e))(ze || {}), We = ((e) => (e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e))(We || {}), Xe = ((e) => (e.NotDefined = "", e.Button = "button", e))(Xe || {}), Ue = ((e) => (e.Start = "start", e.End = "end", e))(Ue || {}), $e = ((e) => (e[e.NotDefined = 0] = "NotDefined", e[e.SwapIconAndDot = 1] = "SwapIconAndDot", e))($e || {}), Je = ((e) => (e.Create = "create", e.Update = "update", e.Read = "read", e))(Je || {}), qe = ((e) => (e.Inline = "inline", e.Modal = "modal", e))(qe || {}), Z = ((e) => (e.Top = "top", e.Bottom = "bottom", e.Hidden = "hidden", e))(Z || {}), _ = ((e) => (e.Changed = "changed", e.Always = "always", e.Never = "never", e))(_ || {}), Ge = ((e) => (e.Manual = "manual", e.Auto = "auto", e.Delay = "delay", e))(Ge || {}), Qe = ((e) => (e.Toast = "toast", e.Inline = "inline", e.Silent = "silent", e))(Qe || {}), Ye = ((e) => (e.Current = "current", e.Modifications = "modifications", e.SplitView = "split-view", e.Differences = "differences", e))(Ye || {}), Ke = ((e) => (e.Hidden = "hidden", e.Always = "always", e.TabList = "tablist", e))(Ke || {}), Ze = ((e) => (e.Anchor = "anchor", e.Button = "button", e.Header = "header", e.Entry = "entry", e))(Ze || {}), _e = ((e) => (e.Modal = "modal", e.Confirm = "confirm", e))(_e || {}), et = ((e) => (e.Pages = "pages", e.PrevNext = "prev-next", e.PagesPrevNext = "pages-prev-next", e.PagesPrevNextFirstLast = "pages-prev-next-first-last", e.LoadMore = "load-more", e.Infinite = "infinite", e.TimelineAsc = "timeline-asc", e.TimelineDesc = "timeline-desc", e.TimelineAscDesc = "timeline-asc-desc", e))(et || {}), tt = ((e) => (e.None = "", e.Incremental = "incremental", e.Decremental = "decremental", e))(tt || {}), at = ((e) => (e.NotDefined = "", e.Hidden = "hidden", e.Integer = "integer", e.Decimal = "decimal", e.Auto = "auto", e))(at || {}), nt = ((e) => (e.Bar = "bar", e.Circle = "circle", e))(nt || {}), G, rt = (G = class extends Re {
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
}, n(G, "lktDefaultValues", ["modelValue", "loading", "steps", "header", "nextButton", "prevButton", "buttonNavPosition", "buttonNavVisibility"]), G), ot = ((e) => (e.Table = "table", e.Item = "item", e.Ul = "ul", e.Ol = "ol", e.Carousel = "carousel", e.Accordion = "accordion", e.Calendar = "calendar", e))(ot || {}), lt = ((e) => (e[e.Auto = 0] = "Auto", e[e.PreferItem = 1] = "PreferItem", e[e.PreferCustomItem = 2] = "PreferCustomItem", e[e.PreferColumns = 3] = "PreferColumns", e))(lt || {}), it = ((e) => (e.NotDefined = "", e.ActionIcon = "action-icon", e))(it || {}), ut = ((e) => (e.Message = "message", e.Button = "button", e))(ut || {}), st = ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(st || {}), ct = ((e) => (e.Fixed = "fixed", e.Absolute = "absolute", e))(ct || {}), dt = ((e) => (e.Top = "top", e.Bottom = "bottom", e.Center = "center", e.ReferrerCenter = "referrer-center", e))(dt || {}), vt = ((e) => (e.Left = "left", e.Right = "right", e.Center = "center", e.LeftCorner = "left-corner", e.RightCorner = "right-corner", e))(vt || {}), ft = ((e) => (e.Relative = "relative", e.Full = "full", e))(ft || {}), pt = ((e) => (e.LktAnchor = "lkt-anchor", e.LktLayoutAccordion = "lkt-layout-accordion", e.LktTextAccordion = "lkt-text-accordion", e.LktLayoutBox = "lkt-layout-box", e.LktTextBox = "lkt-text-box", e.LktLayoutBanner = "lkt-layout-banner", e.LktTextBanner = "lkt-text-banner", e.LktButton = "lkt-button", e.LktLayout = "lkt-layout", e.LktHeader = "lkt-header", e.LktIcon = "lkt-icon", e.LktIcons = "lkt-icons", e.LktImage = "lkt-image", e.LktText = "lkt-text", e))(pt || {}), mt = ((e) => (e.Grid = "grid", e.FlexRow = "flex-row", e.FlexRows = "flex-rows", e.FlexColumn = "flex-column", e))(mt || {}), yt = ((e) => (e.Draft = "draft", e.Public = "public", e.Scheduled = "scheduled", e))(yt || {}), xt = ((e) => (e[e.NeverLoaded = 0] = "NeverLoaded", e[e.Ready = 1] = "Ready", e[e.Loading = 2] = "Loading", e[e.Failed = 3] = "Failed", e[e.RequiredRefresh = 4] = "RequiredRefresh", e))(xt || {}), kt = ((e) => (e[e.XXS = 1] = "XXS", e[e.XS = 2] = "XS", e[e.SM = 3] = "SM", e[e.MD = 4] = "MD", e[e.LG = 5] = "LG", e[e.XL = 6] = "XL", e[e.XXL = 7] = "XXL", e))(kt || {}), bt = ((e) => (e.PrevButton = "prev", e.NextButton = "next", e.DatePicker = "datePicker", e.GoToCurrent = "goToCurrent", e))(bt || {}), ht = ((e) => (e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday", e))(ht || {}), At = ((e) => (e.None = "", e.Focus = "focus", e.Blur = "blur", e.Always = "always", e))(At || {}), St = ((e) => (e.Error = "error", e.Errors = "errors", e.All = "all", e))(St || {}), gt = ((e) => (e.Message = "message", e.Inline = "inline", e))(gt || {}), Bt = ((e) => (e.Auto = "auto", e.Local = "local", e.Remote = "remote", e.External = "external", e))(Bt || {}), Ct = ((e) => (e.Text = "text", e.Textarea = "textarea", e.Html = "html", e.Many = "many", e))(Ct || {}), It = ((e) => (e.Refresh = "refresh", e.Close = "close", e.ReOpen = "reOpen", e.Exec = "exec", e.Open = "open", e))(It || {}), wt = ((e) => (e.Asc = "asc", e.Desc = "desc", e))(wt || {}), L = ((e) => (e[e.RendersAndVisibleIfActive = 1] = "RendersAndVisibleIfActive", e[e.AlwaysRendersVisibleIfActive = 2] = "AlwaysRendersVisibleIfActive", e[e.AlwaysRendersVisibleAfterFirstActive = 3] = "AlwaysRendersVisibleAfterFirstActive", e[e.AlwaysRendersAlwaysVisible = 4] = "AlwaysRendersAlwaysVisible", e[e.RendersAfterFirstActiveVisibleIfActive = 5] = "RendersAfterFirstActiveVisibleIfActive", e))(L || {}), Lt = ((e) => (e.Always = "always", e.Lazy = "lazy", e.Ever = "ever", e))(Lt || {}), Rt = ((e) => (e.Create = "create", e.Update = "update", e.Edit = "edit", e.Drop = "drop", e.Sort = "sort", e.SwitchEditMode = "switch-edit-mode", e.InlineEdit = "inline-edit", e.InlineCreate = "inline-create", e.ModalCreate = "modal-create", e.InlineCreateEver = "inline-create-ever", e))(Rt || {}), Tt = ((e) => (e[e.Auto = 0] = "Auto", e[e.Light = 1] = "Light", e[e.Dark = 2] = "Dark", e))(Tt || {}), Dt = ((e) => (e.Lazy = "lazy", e.Ever = "ever", e))(Dt || {}), Mt = ((e) => (e.Page = "page", e.Element = "element", e))(Mt || {}), d;
d = class {
}, n(d, "lktAppSize", p(4)), n(d, "lktAdminEnabled", p(!0)), n(d, "lktAppLoading", p(!0)), n(d, "lktAppReady", p(!1)), n(d, "lktAppSetup", p({})), n(d, "appSetupChangedCallback"), n(d, "lktMainMenu"), n(d, "lktBottomBar"), n(d, "hasMainHeader", !0), n(d, "hasMainMenu", !0), n(d, "hasBottomBar", !0), n(d, "replaceMainMenuButtonWithBack", !1), n(d, "setup"), n(d, "i18nStatus", p(0)), n(d, "setupStatus", p(0)), n(d, "mainHeader", p(void 0)), n(d, "lktAppThemeModeConfig", p(0)), n(d, "lktAppThemeModeDetected", p("light")), n(d, "lktAppThemeMode", p("light"));
var m;
m = class {
  static setup(a) {
    a.firstDayOfWeek && (m.firstDayOfWeek.value = a.firstDayOfWeek), a.days && (m.days = a.days), a.months && (m.months = a.months), a.smDays && (m.smDays = a.smDays), a.smMonths && (m.smMonths = a.smMonths);
  }
  static getDaysAsOptions() {
    let a = [], f = m.firstDayOfWeek.value;
    for (let r = f; r < 7; ++r) a.push({ value: r, label: m.days[r] });
    --f;
    for (let r = f; r >= 0; --r) a.push({ value: r, label: m.days[r] });
    return a;
  }
}, n(m, "firstDayOfWeek", p(0)), n(m, "days", ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]), n(m, "months", ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]), n(m, "smDays", ["Sun", "Mon", "Tu", "Wed", "Th", "Fri", "Sat"]), n(m, "smMonths", ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]);
var Nt = ((e) => (e.Quick = "quick", e.Full = "full", e.Static = "static", e))(Nt || {});
function Pt(e) {
  let a = new e(), f = {};
  if (!Array.isArray(e.lktDefaultValues)) throw new Error("lktDefaultValues must be a keys array.");
  for (let r of e.lktDefaultValues) r in a && (f[r] = a[r]);
  return f;
}
const Vt = {
  key: 0,
  class: "lkt-step-process--nav"
}, Ft = {
  key: 1,
  class: "lkt-step-process--nav-info"
}, Ot = {
  key: 1,
  class: "lkt-step-process--dots"
}, ie = /* @__PURE__ */ ue({
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
  setup(e, { expose: a, emit: f }) {
    const r = e, R = se(), M = p(null), T = p(null);
    a({
      goNext: () => {
        T.value.click();
      },
      goPrev: () => {
        M.value.click();
      }
    });
    const v = b(() => {
      var u, N;
      return typeof ((u = r.currentStepConfig) == null ? void 0 : u.excludedFromTotalCount) == "function" ? !r.currentStepConfig.excludedFromTotalCount() : typeof ((N = r.currentStepConfig) == null ? void 0 : N.excludedFromTotalCount) == "boolean" ? !r.currentStepConfig.excludedFromTotalCount : !0;
    });
    return (u, N) => {
      const P = U("lkt-button"), $ = U("lkt-dot");
      return e.prevButton || e.nextButton || v.value && (j(R)["nav-info"] || e.dots && e.amountOfSteps > 0) ? (y(), D("div", Vt, [
        e.prevButton ? Q((y(), V(P, F({
          key: 0,
          ref_key: "prevButtonRef",
          ref: M
        }, e.prevButton, { class: "is-prev-button" }), null, 16)), [
          [Y, !e.isLoading]
        ]) : g("", !0),
        v.value && (j(R)["nav-info"] || e.dots && e.amountOfSteps > 0) ? (y(), D("div", Ft, [
          j(R)["nav-info"] ? W(u.$slots, "nav-info", X(F({ key: 0 }, {
            visibleStep: e.visibleStepIndex,
            currentStep: e.currentStep,
            currentStepIndex: e.currentStepIndex,
            amountOfSteps: e.amountOfSteps
          }))) : g("", !0),
          e.dots && e.amountOfSteps > 0 && v.value ? (y(), D("div", Ot, [
            (y(!0), D(K, null, ce(e.amountOfSteps, (B) => (y(), V($, F({ ref_for: !0 }, {
              text: e.dotsNumbers ? B : "",
              class: B === e.visibleStepIndex ? "is-active" : ""
            }), null, 16))), 256))
          ])) : g("", !0)
        ])) : g("", !0),
        e.nextButton ? Q((y(), V(P, F({
          key: 2,
          ref_key: "nextButtonRef",
          ref: T
        }, e.nextButton, { class: "is-next-button" }), null, 16)), [
          [Y, !e.isLoading]
        ]) : g("", !0)
      ])) : g("", !0);
    };
  }
}), Et = {
  key: 2,
  class: "lkt-step-process--content"
}, Ht = { class: "lkt-grid-1" }, jt = { key: 0 }, zt = /* @__PURE__ */ ue({
  __name: "LktStepProcess",
  props: /* @__PURE__ */ Se({
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
  }, Pt(rt)),
  emits: [
    "next",
    "prev",
    "finish",
    "update:modelValue",
    "update:loading"
  ],
  setup(e, { expose: a, emit: f }) {
    const r = e, R = se(), M = f, T = p(r.loading), v = p(r.modelValue), u = p(r.steps), N = p({}), P = p(null);
    z(() => r.loading, (t) => T.value = t), z(() => r.modelValue, (t) => v.value = t), z(T, (t) => M("update:loading", t)), z(v, (t) => {
      N.value[t] = !0, M("update:modelValue", t);
    });
    const $ = b(() => {
      let t = [];
      for (let i in R) i.indexOf("step-") !== -1 && t.push(i.substring(5));
      return t;
    }), B = b(() => u.value.findIndex((t) => t.key === v.value)), de = b(() => {
      let t = u.value.findIndex((o) => o.key === v.value), i = t;
      for (let o = 0; o < t; ++o) {
        let c = !1, s = u.value[o].excludedFromTotalCount;
        typeof s == "function" ? c = s() === !0 : typeof s == "boolean" && (c = s === !0), c && --i;
      }
      return i + 1;
    }), l = b(() => u.value[B.value]), ve = b(() => B.value === 0), ee = b(() => {
      var o, c, s, x, h, k, C, I;
      if (((o = l.value) == null ? void 0 : o.prevButton) === !1 || r.prevButton === !1 && !((c = l.value) != null && c.prevButton) || typeof l.value == "object" && (typeof ((s = l.value) == null ? void 0 : s.prevHidden) == "function" && l.value.prevHidden(l.value, u.value) || typeof ((x = l.value) == null ? void 0 : x.prevHidden) == "boolean" && ((h = l.value) == null ? void 0 : h.prevHidden) === !0))
        return !1;
      let t = { ...r.prevButton };
      typeof ((k = l.value) == null ? void 0 : k.prevButton) == "object" && (t = { ...t, ...(C = l.value) == null ? void 0 : C.prevButton }), typeof t.disabled > "u" && (t.disabled = ve.value);
      const i = (I = t.events) == null ? void 0 : I.click;
      return {
        ...t,
        events: {
          ...t.events,
          click: (A) => {
            var w;
            typeof i == "function" && i(A), ((w = A.httpResponse) == null ? void 0 : w.success) !== !1 && xe(A);
          }
        }
      };
    }), te = b(() => {
      var o, c, s, x, h, k, C, I;
      if (((o = l.value) == null ? void 0 : o.nextButton) === !1 || r.nextButton === !1 && !((c = l.value) != null && c.nextButton) || typeof l.value == "object" && (typeof ((s = l.value) == null ? void 0 : s.nextHidden) == "function" && l.value.nextHidden(l.value, u.value) || typeof ((x = l.value) == null ? void 0 : x.nextHidden) == "boolean" && ((h = l.value) == null ? void 0 : h.nextHidden) === !0))
        return !1;
      let t = { ...r.nextButton };
      typeof ((k = l.value) == null ? void 0 : k.nextButton) == "object" && (t = { ...t, ...(C = l.value) == null ? void 0 : C.nextButton });
      const i = (I = t.events) == null ? void 0 : I.click;
      return {
        ...t,
        events: {
          ...t.events,
          click: (A) => {
            var w;
            typeof i == "function" && i(A), ((w = A.httpResponse) == null ? void 0 : w.success) !== !1 && ye(A);
          }
        }
      };
    }), fe = b(() => {
      const t = [];
      return v.value && t.push(`step-${v.value}`), t.join(" ");
    }), pe = b(() => r.buttonNavVisibility === _.Never ? !1 : !r.buttonNavPosition || r.buttonNavPosition === Z.Top), me = b(() => r.buttonNavVisibility === _.Never ? !1 : r.buttonNavPosition === Z.Bottom), J = b(() => {
      let t = 0;
      return u.value.forEach((i) => {
        let o = !1;
        typeof i.excludedFromTotalCount == "function" ? o = i.excludedFromTotalCount() === !0 : typeof i.excludedFromTotalCount == "boolean" && (o = i.excludedFromTotalCount === !0), o || ++t;
      }), t;
    }), ae = b(() => ({
      isLoading: T.value,
      prevButton: ee.value,
      nextButton: te.value,
      currentStep: v.value,
      currentStepConfig: l.value,
      currentStepIndex: B.value,
      visibleStepIndex: de.value,
      amountOfSteps: J.value,
      dots: r.dots,
      dotsNumbers: r.dotsNumbers
    })), ne = b(() => typeof ee.value == "object" || typeof te.value == "object" || r.dots || typeof R["nav-info"] < "u"), ye = (t) => {
      var x, h, k, C, I, A, w, O, E;
      let i = v.value, o = (x = u.value[B.value]) == null ? void 0 : x.nextKey, c = B.value + 1;
      if (typeof o == "function" && (o = o()), typeof o == "string") {
        let H = u.value.findIndex((q) => q.key === o);
        H > -1 && (c = H);
      }
      let s = u.value[c].key;
      typeof ((k = (h = l.value) == null ? void 0 : h.events) == null ? void 0 : k.leave) == "function" && ((I = (C = l.value) == null ? void 0 : C.events) == null || I.leave({ to: s })), v.value = s, typeof ((w = (A = l.value) == null ? void 0 : A.events) == null ? void 0 : w.enter) == "function" && ((E = (O = l.value) == null ? void 0 : O.events) == null || E.enter({ from: i })), B.value === u.value.length - 1 ? M("finish", t) : M("next", t);
    }, xe = (t) => {
      var x, h, k, C, I, A, w, O, E;
      let i = v.value, o = (x = u.value[B.value]) == null ? void 0 : x.prevKey, c = B.value - 1;
      if (typeof o == "function" && (o = o()), typeof o == "string") {
        let H = u.value.findIndex((q) => q.key === o);
        H > -1 && (c = H);
      }
      let s = u.value[c].key;
      typeof ((k = (h = l.value) == null ? void 0 : h.events) == null ? void 0 : k.leave) == "function" && ((I = (C = l.value) == null ? void 0 : C.events) == null || I.leave({ to: s })), v.value = s, typeof ((w = (A = l.value) == null ? void 0 : A.events) == null ? void 0 : w.enter) == "function" && ((E = (O = l.value) == null ? void 0 : O.events) == null || E.enter({ from: i })), M("prev", t);
    }, ke = (t) => {
      var o, c;
      const i = u.value.findIndex((s) => s.key === t);
      if (i > -1 && ((o = u.value[i]) != null && o.renderType))
        switch ((c = u.value[i]) == null ? void 0 : c.renderType) {
          case L.AlwaysRendersAlwaysVisible:
          case L.AlwaysRendersVisibleAfterFirstActive:
          case L.AlwaysRendersVisibleIfActive:
            return !0;
          case L.RendersAndVisibleIfActive:
            return t === v.value;
          case L.RendersAfterFirstActiveVisibleIfActive:
            return N.value[t] === !0;
        }
      return t === v.value;
    }, be = (t) => {
      var o, c;
      const i = u.value.findIndex((s) => s.key === t);
      if (i > -1 && ((o = u.value[i]) != null && o.renderType))
        switch ((c = u.value[i]) == null ? void 0 : c.renderType) {
          case L.AlwaysRendersAlwaysVisible:
            return !0;
          case L.AlwaysRendersVisibleAfterFirstActive:
            return N.value[t] === !0;
          case L.AlwaysRendersVisibleIfActive:
          case L.RendersAndVisibleIfActive:
          case L.RendersAfterFirstActiveVisibleIfActive:
            return t === v.value;
        }
      return !0;
    };
    return a({
      goNext: () => {
        P.value.goNext();
      },
      goPrev: () => {
        P.value.goPrev();
      },
      startLoader: () => T.value = !0,
      stopLoader: () => T.value = !1
    }), ge(() => {
      !v.value && u.value.length > 0 && (v.value = u.value[0].key);
    }), (t, i) => {
      const o = U("lkt-header"), c = U("lkt-loader");
      return y(), D("article", {
        class: Be(["lkt-step-process", fe.value])
      }, [
        e.header && Object.keys(e.header).length > 0 ? (y(), V(o, X(F({ key: 0 }, e.header)), null, 16)) : g("", !0),
        pe.value && ne.value ? (y(), V(ie, F({
          key: 1,
          ref_key: "navRef",
          ref: P
        }, ae.value), re({ _: 2 }, [
          j(R)["nav-info"] ? {
            name: "nav-info",
            fn: oe(({ currentStep: s, currentStepIndex: x, amountOfSteps: h, visibleStep: k }) => [
              W(t.$slots, "nav-info", X(le({
                visibleStep: k,
                currentStep: s,
                currentStepIndex: x,
                amountOfSteps: J.value
              })))
            ]),
            key: "0"
          } : void 0
        ]), 1040)) : g("", !0),
        T.value ? g("", !0) : (y(), D("div", Et, [
          Ce("div", Ht, [
            (y(!0), D(K, null, ce($.value, (s) => (y(), D(K, null, [
              ke(s) ? Q((y(), D("div", jt, [
                W(t.$slots, "step-" + s, { config: u.value })
              ], 512)), [
                [Y, be(s)]
              ]) : g("", !0)
            ], 64))), 256))
          ])
        ])),
        T.value ? (y(), V(c, { key: 3 })) : g("", !0),
        me.value && ne.value ? (y(), V(ie, F({
          key: 4,
          ref_key: "navRef",
          ref: P
        }, ae.value), re({ _: 2 }, [
          j(R)["nav-info"] ? {
            name: "nav-info",
            fn: oe(({ currentStep: s, currentStepIndex: x, amountOfSteps: h, visibleStep: k }) => [
              W(t.$slots, "nav-info", X(le({
                visibleStep: k,
                currentStep: s,
                currentStepIndex: x,
                amountOfSteps: J.value
              })))
            ]),
            key: "0"
          } : void 0
        ]), 1040)) : g("", !0)
      ], 2);
    };
  }
}), qt = {
  install: (e, a = {}) => {
    e.component("lkt-step-process", zt);
  }
};
export {
  qt as default
};

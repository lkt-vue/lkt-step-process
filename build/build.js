var re = Object.defineProperty;
var ne = (e, a, o) => a in e ? re(e, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[a] = o;
var u = (e, a, o) => ne(e, typeof a != "symbol" ? a + "" : a, o);
import { defineComponent as G, useSlots as q, resolveComponent as M, createElementBlock as P, openBlock as p, withDirectives as T, createCommentVNode as x, renderSlot as N, createBlock as B, mergeProps as L, vShow as H, unref as R, normalizeProps as A, mergeDefaults as oe, ref as C, watch as I, computed as c, onMounted as le, normalizeClass as ue, createSlots as z, withCtx as _, guardReactiveProps as U, createElementVNode as ie, Fragment as se, renderList as de } from "vue";
import "lkt-string-tools";
import "lkt-data-state";
var ve = ((e) => (e.Button = "button", e.Submit = "submit", e.Reset = "reset", e.Anchor = "anchor", e.Content = "content", e.Switch = "switch", e.HiddenSwitch = "hidden-switch", e.Split = "split", e.SplitLazy = "split-lazy", e.SplitEver = "split-ever", e.Tooltip = "tooltip", e.TooltipLazy = "tooltip-lazy", e.TooltipEver = "tooltip-ever", e.FileUpload = "file-upload", e.ImageUpload = "image-upload", e))(ve || {}), ce = ((e) => (e.Text = "text", e.Email = "email", e.Tel = "tel", e.Password = "password", e.Search = "search", e.Number = "number", e.Color = "color", e.Range = "range", e.Textarea = "textarea", e.Html = "html", e.Date = "date", e.Time = "time", e.DateTime = "datetime", e.File = "file", e.Image = "image", e.Select = "select", e.Check = "check", e.Switch = "switch", e.Calc = "calc", e.Card = "card", e.Table = "table", e.Radio = "radio", e.ToggleButtonGroup = "toggle-button-group", e))(ce || {}), pe = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], d, me = (d = class {
  constructor(a) {
  }
  feed(a = {}, o = this) {
    if (typeof a == "object") for (let [r, l] of Object.entries(a)) o.assignProp(r, l);
  }
  assignProp(a, o) {
    if (!(pe.includes(a) || d.lktExcludedProps.includes(a))) {
      if (d.lktDateProps.includes(a)) {
        this[a] = new Date(o);
        return;
      }
      this[a] = o;
    }
  }
}, u(d, "lktAllowUndefinedProps", []), u(d, "lktExcludedProps", []), u(d, "lktDateProps", []), u(d, "lktStrictItem", !1), u(d, "lktDefaultValues", []), d), fe = ((e) => (e.Auto = "auto", e.Always = "always", e.Lazy = "lazy", e.Ever = "ever", e))(fe || {}), ke = ((e) => (e.Transform = "transform", e.Height = "height", e.Display = "display", e))(ke || {}), he = ((e) => (e.Href = "href", e.RouterLink = "router-link", e.RouterLinkBack = "router-link-back", e.Mail = "mail", e.Tel = "tel", e.Tab = "tab", e.Download = "download", e.Action = "action", e.Legacy = "", e))(he || {}), xe = ((e) => (e.Static = "static", e.Parallax = "parallax", e))(xe || {}), be = ((e) => (e.None = "", e.Field = "field", e.Button = "button", e.Anchor = "anchor", e.InlineDrop = "inline-drop", e.ColumnIndex = "column-index", e))(be || {}), ye = ((e) => (e.Date = "date", e.Number = "number", e.Timer = "timer", e))(ye || {}), Se = ((e) => (e.A0 = "a0", e.A1 = "a1", e.A2 = "a2", e.A3 = "a3", e.A4 = "a4", e.A5 = "a5", e.A6 = "a6", e.A7 = "a7", e.A8 = "a8", e.A9 = "a9", e))(Se || {}), ge = ((e) => (e.List = "list", e.Inline = "inline", e.Count = "count", e.Table = "table", e))(ge || {}), Be = ((e) => (e.HTTPResponse = "http-response", e.MinStringLength = "min-str", e.MinNumber = "min-num", e.MaxStringLength = "max-str", e.MaxNumber = "max-num", e.Email = "email", e.Empty = "empty", e.EqualTo = "equal-to", e.MinNumbers = "min-numbers", e.MaxNumbers = "max-numbers", e.MinChars = "min-chars", e.MaxChars = "max-chars", e.MinUpperChars = "min-upper-chars", e.MaxUpperChars = "max-upper-chars", e.MinLowerChars = "min-lower-chars", e.MaxLowerChars = "max-lower-chars", e.MinSpecialChars = "min-special-chars", e.MaxSpecialChars = "max-special-chars", e))(Be || {}), Le = ((e) => (e.Ok = "ok", e.Ko = "ko", e.Info = "info", e))(Le || {}), we = ((e) => (e.StorageUnit = "unit", e.Directory = "dir", e.Image = "img", e.Video = "vid", e.File = "file", e))(we || {}), Ce = ((e) => (e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e))(Ce || {}), Pe = ((e) => (e.NotDefined = "", e.Button = "button", e))(Pe || {}), Ie = ((e) => (e.Start = "start", e.End = "end", e))(Ie || {}), Ne = ((e) => (e.Create = "create", e.Update = "update", e.Read = "read", e))(Ne || {}), Ae = ((e) => (e.Inline = "inline", e.Modal = "modal", e))(Ae || {}), E = ((e) => (e.Top = "top", e.Bottom = "bottom", e))(E || {}), V = ((e) => (e.Changed = "changed", e.Always = "always", e.Never = "never", e))(V || {}), De = ((e) => (e.Manual = "manual", e.Auto = "auto", e.Delay = "delay", e))(De || {}), Me = ((e) => (e.Toast = "toast", e.Inline = "inline", e))(Me || {}), Te = ((e) => (e.Current = "current", e.Modifications = "modifications", e.SplitView = "split-view", e.Differences = "differences", e))(Te || {}), He = ((e) => (e.Anchor = "anchor", e.Button = "button", e.Header = "header", e.Entry = "entry", e))(He || {}), Re = ((e) => (e.Modal = "modal", e.Confirm = "confirm", e))(Re || {}), Ee = ((e) => (e.Pages = "pages", e.PrevNext = "prev-next", e.PagesPrevNext = "pages-prev-next", e.PagesPrevNextFirstLast = "pages-prev-next-first-last", e.LoadMore = "load-more", e.Infinite = "infinite", e))(Ee || {}), Ve = ((e) => (e.None = "", e.Incremental = "incremental", e.Decremental = "decremental", e))(Ve || {}), Oe = ((e) => (e.NotDefined = "", e.Hidden = "hidden", e.Integer = "integer", e.Decimal = "decimal", e.Auto = "auto", e))(Oe || {}), D, Fe = (D = class extends me {
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
}, u(D, "lktDefaultValues", ["modelValue", "loading", "steps", "header"]), D), Xe = ((e) => (e.Table = "table", e.Item = "item", e.Ul = "ul", e.Ol = "ol", e.Carousel = "carousel", e.Accordion = "accordion", e))(Xe || {}), je = ((e) => (e[e.Auto = 0] = "Auto", e[e.PreferItem = 1] = "PreferItem", e[e.PreferCustomItem = 2] = "PreferCustomItem", e[e.PreferColumns = 3] = "PreferColumns", e))(je || {}), ze = ((e) => (e.NotDefined = "", e.ActionIcon = "action-icon", e))(ze || {}), _e = ((e) => (e.Message = "message", e.Button = "button", e))(_e || {}), Ue = ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(Ue || {}), $e = ((e) => (e.Fixed = "fixed", e.Absolute = "absolute", e))($e || {}), Ge = ((e) => (e.Top = "top", e.Bottom = "bottom", e.Center = "center", e.ReferrerCenter = "referrer-center", e))(Ge || {}), qe = ((e) => (e.Left = "left", e.Right = "right", e.Center = "center", e.LeftCorner = "left-corner", e.RightCorner = "right-corner", e))(qe || {}), Ke = ((e) => (e.LktAnchor = "lkt-anchor", e.LktLayoutAccordion = "lkt-layout-accordion", e.LktTextAccordion = "lkt-text-accordion", e.LktLayoutBox = "lkt-layout-box", e.LktTextBox = "lkt-text-box", e.LktLayoutBanner = "lkt-layout-banner", e.LktTextBanner = "lkt-text-banner", e.LktButton = "lkt-button", e.LktLayout = "lkt-layout", e.LktHeader = "lkt-header", e.LktIcon = "lkt-icon", e.LktIcons = "lkt-icons", e.LktImage = "lkt-image", e.LktText = "lkt-text", e))(Ke || {}), Qe = ((e) => (e.Grid = "grid", e.FlexRow = "flex-row", e.FlexRows = "flex-rows", e.FlexColumn = "flex-column", e))(Qe || {}), Je = ((e) => (e.Draft = "draft", e.Public = "public", e.Scheduled = "scheduled", e))(Je || {}), We = ((e) => (e[e.XXS = 1] = "XXS", e[e.XS = 2] = "XS", e[e.SM = 3] = "SM", e[e.MD = 4] = "MD", e[e.LG = 5] = "LG", e[e.XL = 6] = "XL", e[e.XXL = 7] = "XXL", e))(We || {}), Ye = ((e) => (e.None = "", e.Focus = "focus", e.Blur = "blur", e.Always = "always", e))(Ye || {}), Ze = ((e) => (e.Message = "message", e.Inline = "inline", e))(Ze || {}), et = ((e) => (e.Auto = "auto", e.Local = "local", e.Remote = "remote", e))(et || {}), tt = ((e) => (e.Refresh = "refresh", e.Close = "close", e.ReOpen = "reOpen", e.Exec = "exec", e.Open = "open", e))(tt || {}), at = ((e) => (e.Asc = "asc", e.Desc = "desc", e))(at || {}), rt = ((e) => (e.Create = "create", e.Update = "update", e.Edit = "edit", e.Drop = "drop", e.Sort = "sort", e.SwitchEditMode = "switch-edit-mode", e.InlineEdit = "inline-edit", e.InlineCreate = "inline-create", e.ModalCreate = "modal-create", e.InlineCreateEver = "inline-create-ever", e))(rt || {}), nt = ((e) => (e.Lazy = "lazy", e.Ever = "ever", e))(nt || {}), ot = ((e) => (e.Page = "page", e.Element = "element", e))(ot || {}), lt = ((e) => (e.Quick = "quick", e.Full = "full", e))(lt || {});
function ut(e) {
  let a = new e(), o = {};
  if (!Array.isArray(e.lktDefaultValues)) throw new Error("lktDefaultValues must be a keys array.");
  for (let r of e.lktDefaultValues) r in a && (o[r] = a[r]);
  return o;
}
const it = { class: "lkt-step-process-buttons" }, $ = /* @__PURE__ */ G({
  __name: "ButtonNav",
  props: {
    prevButton: { type: [Object, Boolean] },
    nextButton: { type: [Object, Boolean] },
    isLoading: { type: Boolean },
    currentStep: {},
    currentStepIndex: {},
    amountOfSteps: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: a }) {
    const o = a, r = q();
    return (l, m) => {
      const f = M("lkt-button");
      return p(), P("div", it, [
        l.prevButton ? T((p(), B(f, L({
          key: 0,
          ref: "prevButtonRef"
        }, l.prevButton, {
          onClick: m[0] || (m[0] = (i) => o("prev"))
        }), null, 16)), [
          [H, !l.isLoading]
        ]) : x("", !0),
        R(r)["between-buttons-ever"] ? N(l.$slots, "between-buttons-ever", A(L({ key: 1 }, {
          currentStep: l.currentStep,
          currentStepIndex: l.currentStepIndex,
          amountOfSteps: l.amountOfSteps
        }))) : x("", !0),
        l.nextButton ? T((p(), B(f, L({
          key: 2,
          ref: "nextButtonRef"
        }, l.nextButton, {
          onClick: m[1] || (m[1] = (i) => o("next"))
        }), null, 16)), [
          [H, !l.isLoading]
        ]) : x("", !0)
      ]);
    };
  }
}), st = {
  key: 2,
  class: "lkt-step-process_content"
}, dt = { class: "lkt-grid-1" }, vt = /* @__PURE__ */ G({
  __name: "LktStepProcess",
  props: /* @__PURE__ */ oe({
    modelValue: {},
    loading: { type: Boolean },
    steps: {},
    header: {},
    nextButton: {},
    prevButton: {},
    buttonNavPosition: {},
    buttonNavVisibility: {}
  }, ut(Fe)),
  emits: [
    "next",
    "prev",
    "finish",
    "update:modelValue",
    "update:loading"
  ],
  setup(e, { expose: a, emit: o }) {
    const r = e, l = q(), m = o, f = C(r.loading), i = C(r.modelValue), v = C(r.steps), K = C(null), Q = C(null);
    I(() => r.loading, (t) => f.value = t), I(() => r.modelValue, (t) => i.value = t), I(f, (t) => m("update:loading", t)), I(i, (t) => m("update:modelValue", t));
    const J = c(() => {
      let t = [];
      for (let k in l) k.indexOf("step-") !== -1 && t.push(k.substring(5));
      return t;
    }), g = c(() => v.value.findIndex((t) => t.key === i.value)), n = c(() => v.value[g.value]), W = c(() => g.value === 0), Y = c(() => {
      var k, b, y, s, h, S, w;
      if (((k = n.value) == null ? void 0 : k.prevButton) === !1 || r.prevButton === !1 && !((b = n.value) != null && b.prevButton) || typeof n.value == "object" && (typeof ((y = n.value) == null ? void 0 : y.prevHidden) == "function" && n.value.prevHidden(n.value, v.value) || typeof ((s = n.value) == null ? void 0 : s.prevHidden) == "boolean" && ((h = n.value) == null ? void 0 : h.prevHidden) === !0))
        return !1;
      let t = { ...r.prevButton };
      return typeof ((S = n.value) == null ? void 0 : S.prevButton) == "object" && (t = { ...t, ...(w = n.value) == null ? void 0 : w.prevButton }), typeof t.disabled > "u" && (t.disabled = W.value), t;
    }), Z = c(() => {
      var k, b, y, s, h, S, w;
      if (((k = n.value) == null ? void 0 : k.nextButton) === !1 || r.nextButton === !1 && !((b = n.value) != null && b.nextButton) || typeof n.value == "object" && (typeof ((y = n.value) == null ? void 0 : y.nextHidden) == "function" && n.value.nextHidden(n.value, v.value) || typeof ((s = n.value) == null ? void 0 : s.nextHidden) == "boolean" && ((h = n.value) == null ? void 0 : h.nextHidden) === !0))
        return !1;
      let t = { ...r.nextButton };
      return typeof ((S = n.value) == null ? void 0 : S.nextButton) == "object" && (t = { ...t, ...(w = n.value) == null ? void 0 : w.nextButton }), t;
    }), ee = c(() => {
      const t = [];
      return i.value && t.push(`step-${i.value}`), t.join(" ");
    }), te = c(() => r.buttonNavVisibility === V.Never ? !1 : !r.buttonNavPosition || r.buttonNavPosition === E.Top), ae = c(() => r.buttonNavVisibility === V.Never ? !1 : r.buttonNavPosition === E.Bottom), O = c(() => ({
      isLoading: f.value,
      prevButton: Y.value,
      nextButton: Z.value,
      currentStep: i.value,
      currentStepIndex: g.value
    })), F = c(() => v.value.length), X = (t) => {
      i.value = v.value[g.value + 1].key, g.value === v.value.length - 1 ? m("finish", t) : m("next", t);
    }, j = (t) => {
      i.value = v.value[g.value - 1].key, m("prev", t);
    };
    return a({
      goNext: () => {
        Q.value.click();
      },
      goPrev: () => {
        K.value.click();
      },
      startLoader: () => f.value = !0,
      stopLoader: () => f.value = !1
    }), le(() => {
      !i.value && v.value.length > 0 && (i.value = v.value[0].key);
    }), (t, k) => {
      const b = M("lkt-header"), y = M("lkt-loader");
      return p(), P("article", {
        class: ue(["lkt-step-process", ee.value])
      }, [
        t.header && Object.keys(t.header).length > 0 ? (p(), B(b, A(L({ key: 0 }, t.header)), null, 16)) : x("", !0),
        te.value ? (p(), B($, L({ key: 1 }, O.value, {
          onPrev: j,
          onNext: X
        }), z({ _: 2 }, [
          R(l)["between-buttons-ever"] ? {
            name: "between-buttons-ever",
            fn: _(({ currentStep: s, currentStepIndex: h, amountOfSteps: S }) => [
              N(t.$slots, "between-buttons-ever", A(U({
                currentStep: s,
                currentStepIndex: h,
                amountOfSteps: F.value
              })))
            ]),
            key: "0"
          } : void 0
        ]), 1040)) : x("", !0),
        f.value ? x("", !0) : (p(), P("div", st, [
          ie("div", dt, [
            (p(!0), P(se, null, de(J.value, (s) => T((p(), P("div", null, [
              N(t.$slots, "step-" + s, { config: v.value })
            ], 512)), [
              [H, s === i.value]
            ])), 256))
          ])
        ])),
        f.value ? (p(), B(y, { key: 3 })) : x("", !0),
        ae.value ? (p(), B($, L({ key: 4 }, O.value, {
          onPrev: j,
          onNext: X
        }), z({ _: 2 }, [
          R(l)["between-buttons-ever"] ? {
            name: "between-buttons-ever",
            fn: _(({ currentStep: s, currentStepIndex: h, amountOfSteps: S }) => [
              N(t.$slots, "between-buttons-ever", A(U({
                currentStep: s,
                currentStepIndex: h,
                amountOfSteps: F.value
              })))
            ]),
            key: "0"
          } : void 0
        ]), 1040)) : x("", !0)
      ], 2);
    };
  }
}), kt = {
  install: (e, a = {}) => {
    e.component("lkt-step-process", vt);
  }
};
export {
  kt as default
};

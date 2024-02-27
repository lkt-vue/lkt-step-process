import { defineComponent as K, useSlots as M, ref as c, computed as l, resolveComponent as S, openBlock as u, createElementBlock as o, normalizeClass as Q, createElementVNode as f, toDisplayString as U, renderSlot as m, createCommentVNode as _, withDirectives as y, createVNode as H, withCtx as B, unref as D, vShow as h, Fragment as W, renderList as X, createBlock as Y } from "vue";
const Z = {
  key: 0,
  class: "lkt-step-process_header"
}, ee = { class: "lkt-step-process_header-title" }, te = { class: "lkt-step-process_header-slot" }, re = { class: "lkt-step-process-buttons" }, le = { key: 1 }, ne = { key: 1 }, ae = {
  key: 1,
  class: "lkt-step-process_content"
}, ue = { class: "lkt-grid-1" }, oe = { name: "LktStepProcess", inheritAttrs: !1 }, se = /* @__PURE__ */ K({
  ...oe,
  props: {
    modelValue: { type: Object, required: !1, default: () => ({ step: 1, steps: [], data: {} }) },
    title: { type: String, default: "" },
    nextText: { type: String, default: "Next" },
    prevText: { type: String, default: "Back" },
    nextValidator: { type: Function, required: !1, default: () => !0 },
    prevValidator: { type: Function, required: !1, default: () => !0 }
  },
  emits: ["next", "prev", "finish"],
  setup(v, { expose: g, emit: N }) {
    const s = v, p = M(), x = N, n = c(!1), e = c(s.modelValue), V = c(null), b = c(null), L = l(() => n.value ? !1 : s.title || !!p["post-title"]), R = l(() => {
      let r = [];
      for (let k in p)
        k.indexOf("step-") !== -1 && r.push(k.substring(5));
      return r;
    }), d = l(() => e.value.step ? e.value.step : !e.value.steps || !e.value.steps[0] ? null : e.value.steps[0].name), a = l(() => e.value.steps.findIndex((r) => r.name === d.value)), t = l(() => e.value.steps[a.value]), $ = l(() => typeof t.value.prevValidator == "function" ? t.value.prevValidator(e.value) : typeof t.value.prevValidator == "boolean" ? t.value.prevValidator : typeof s.prevValidator == "function" ? s.prevValidator(e.value) : !0), P = l(() => typeof t.value.nextValidator == "function" ? t.value.nextValidator(e.value) : typeof t.value.nextValidator == "boolean" ? t.value.nextValidator : typeof s.nextValidator == "function" ? s.nextValidator(e.value) : !0), j = l(() => a.value === 0 || !$.value), q = l(() => a.value === e.value.steps.length - 1 || !P.value), w = l(() => typeof t.value.prevHidden == "function" ? t.value.prevHidden(e.value) : typeof t.value.prevHidden == "boolean" ? t.value.prevHidden : a.value === 0), F = l(() => typeof t.value.nextHidden == "function" ? t.value.nextHidden(e.value) : typeof t.value.nextHidden == "boolean" ? t.value.nextHidden : a.value === e.value.steps.length - 1), E = l(() => typeof t.value.prevConfirm == "string" ? t.value.prevConfirm : ""), I = l(() => typeof t.value.nextConfirm == "string" ? t.value.nextConfirm : ""), O = l(() => typeof t.value.nextResource == "string" ? t.value.nextResource : ""), T = l(() => typeof t.value.nextResourceData == "object" ? t.value.nextResourceData : {}), z = l(() => {
      const r = ["lkt-step-process"];
      return d.value && r.push(`step-${d.value}`), r.join(" ");
    }), A = (r) => {
      e.value.step = e.value.steps[a.value + 1].name, a.value === e.value.steps.length - 1 ? x("finish", r) : x("next", r);
    }, G = (r) => {
      e.value.step = e.value.steps[a.value - 1].name, x("prev", r);
    };
    return g({
      goNext: () => {
        b.value.click();
      },
      goPrev: () => {
        V.value.click();
      },
      startLoader: () => n.value = !0,
      stopLoader: () => n.value = !1
    }), (r, k) => {
      const C = S("lkt-button"), J = S("lkt-loader");
      return u(), o("article", {
        class: Q(z.value)
      }, [
        L.value ? (u(), o("header", Z, [
          f("h1", ee, U(v.title), 1),
          f("div", te, [
            m(r.$slots, "post-title", {
              config: e.value,
              loading: n.value
            })
          ])
        ])) : _("", !0),
        f("div", re, [
          y(H(C, {
            ref: (i) => V.value = i,
            palette: "danger",
            disabled: j.value,
            "confirm-modal": E.value,
            onClick: G
          }, {
            default: B(() => [
              D(p)["button-prev"] ? m(r.$slots, "button-prev", {
                key: 0,
                config: e.value
              }) : (u(), o("span", le, "Back"))
            ]),
            _: 3
          }, 8, ["disabled", "confirm-modal"]), [
            [h, !n.value && !w.value]
          ]),
          y(H(C, {
            ref: (i) => b.value = i,
            palette: "success",
            disabled: q.value,
            "confirm-modal": I.value,
            resource: O.value,
            "resource-data": T.value,
            onClick: A
          }, {
            default: B(() => [
              D(p)["button-next"] ? m(r.$slots, "button-next", {
                key: 0,
                config: e.value
              }) : (u(), o("span", ne, "Next"))
            ]),
            _: 3
          }, 8, ["disabled", "confirm-modal", "resource", "resource-data"]), [
            [h, !n.value && !F.value]
          ])
        ]),
        n.value ? _("", !0) : (u(), o("div", ae, [
          f("div", ue, [
            (u(!0), o(W, null, X(R.value, (i) => y((u(), o("div", null, [
              m(r.$slots, "step-" + i, { config: e.value })
            ], 512)), [
              [h, i === d.value]
            ])), 256))
          ])
        ])),
        n.value ? (u(), Y(J, { key: 2 })) : _("", !0)
      ], 2);
    };
  }
}), ve = {
  install: (v, g = {}) => {
    v.component("lkt-step-process", se);
  }
};
export {
  ve as default
};

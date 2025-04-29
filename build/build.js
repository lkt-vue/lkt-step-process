import { defineComponent as K, useSlots as M, ref as c, computed as n, resolveComponent as S, createElementBlock as o, openBlock as u, normalizeClass as Q, createCommentVNode as y, createElementVNode as f, createBlock as U, toDisplayString as W, renderSlot as m, withDirectives as _, createVNode as H, withCtx as N, unref as B, vShow as g, Fragment as X, renderList as Y } from "vue";
const Z = {
  key: 0,
  class: "lkt-step-process_header"
}, ee = { class: "lkt-step-process_header-title" }, te = { class: "lkt-step-process_header-slot" }, re = { class: "lkt-step-process-buttons" }, ne = { key: 1 }, le = { key: 1 }, ae = {
  key: 1,
  class: "lkt-step-process_content"
}, ue = { class: "lkt-grid-1" }, oe = /* @__PURE__ */ K({
  __name: "LktStepProcess",
  props: {
    modelValue: { type: Object, required: !1, default: () => ({ step: 1, steps: [], data: {} }) },
    title: { type: String, default: "" },
    nextText: { type: String, default: "Next" },
    prevText: { type: String, default: "Back" },
    nextValidator: { type: Function, required: !1, default: () => !0 },
    prevValidator: { type: Function, required: !1, default: () => !0 }
  },
  emits: [
    "next",
    "prev",
    "finish"
  ],
  setup(v, { expose: h, emit: D }) {
    const s = v, p = M(), x = D, l = c(!1), e = c(s.modelValue), V = c(null), b = c(null), L = n(() => l.value ? !1 : s.title || !!p["post-title"]), R = n(() => {
      let r = [];
      for (let k in p) k.indexOf("step-") !== -1 && r.push(k.substring(5));
      return r;
    }), d = n(() => e.value.step ? e.value.step : !e.value.steps || !e.value.steps[0] ? null : e.value.steps[0].name), a = n(() => e.value.steps.findIndex((r) => r.name === d.value)), t = n(() => e.value.steps[a.value]), $ = n(() => typeof t.value.prevValidator == "function" ? t.value.prevValidator(e.value) : typeof t.value.prevValidator == "boolean" ? t.value.prevValidator : typeof s.prevValidator == "function" ? s.prevValidator(e.value) : !0), P = n(() => typeof t.value.nextValidator == "function" ? t.value.nextValidator(e.value) : typeof t.value.nextValidator == "boolean" ? t.value.nextValidator : typeof s.nextValidator == "function" ? s.nextValidator(e.value) : !0), j = n(() => a.value === 0 || !$.value), q = n(() => a.value === e.value.steps.length - 1 || !P.value), w = n(() => typeof t.value.prevHidden == "function" ? t.value.prevHidden(e.value) : typeof t.value.prevHidden == "boolean" ? t.value.prevHidden : a.value === 0), F = n(() => typeof t.value.nextHidden == "function" ? t.value.nextHidden(e.value) : typeof t.value.nextHidden == "boolean" ? t.value.nextHidden : a.value === e.value.steps.length - 1), E = n(() => typeof t.value.prevConfirm == "string" ? t.value.prevConfirm : ""), I = n(() => typeof t.value.nextConfirm == "string" ? t.value.nextConfirm : ""), O = n(() => typeof t.value.nextResource == "string" ? t.value.nextResource : ""), T = n(() => typeof t.value.nextResourceData == "object" ? t.value.nextResourceData : {}), z = n(() => {
      const r = ["lkt-step-process"];
      return d.value && r.push(`step-${d.value}`), r.join(" ");
    }), A = (r) => {
      console.log("onNext: ", r), e.value.step = e.value.steps[a.value + 1].name, a.value === e.value.steps.length - 1 ? x("finish", r) : x("next", r);
    }, G = (r) => {
      e.value.step = e.value.steps[a.value - 1].name, x("prev", r);
    };
    return h({
      goNext: () => {
        b.value.click();
      },
      goPrev: () => {
        V.value.click();
      },
      startLoader: () => l.value = !0,
      stopLoader: () => l.value = !1
    }), (r, k) => {
      const C = S("lkt-button"), J = S("lkt-loader");
      return u(), o("article", {
        class: Q(z.value)
      }, [
        L.value ? (u(), o("header", Z, [
          f("h1", ee, W(v.title), 1),
          f("div", te, [
            m(r.$slots, "post-title", {
              config: e.value,
              loading: l.value
            })
          ])
        ])) : y("", !0),
        f("div", re, [
          _(H(C, {
            ref: (i) => V.value = i,
            disabled: j.value,
            "confirm-modal": E.value,
            onClick: G
          }, {
            default: N(() => [
              B(p)["button-prev"] ? m(r.$slots, "button-prev", {
                key: 0,
                config: e.value
              }) : (u(), o("span", ne, "Back"))
            ]),
            _: 3
          }, 8, ["disabled", "confirm-modal"]), [
            [g, !l.value && !w.value]
          ]),
          _(H(C, {
            ref: (i) => b.value = i,
            disabled: q.value,
            "confirm-modal": I.value,
            resource: O.value,
            "resource-data": T.value,
            onClick: A
          }, {
            default: N(() => [
              B(p)["button-next"] ? m(r.$slots, "button-next", {
                key: 0,
                config: e.value
              }) : (u(), o("span", le, "Next"))
            ]),
            _: 3
          }, 8, ["disabled", "confirm-modal", "resource", "resource-data"]), [
            [g, !l.value && !F.value]
          ])
        ]),
        l.value ? y("", !0) : (u(), o("div", ae, [
          f("div", ue, [
            (u(!0), o(X, null, Y(R.value, (i) => _((u(), o("div", null, [
              m(r.$slots, "step-" + i, { config: e.value })
            ], 512)), [
              [g, i === d.value]
            ])), 256))
          ])
        ])),
        l.value ? (u(), U(J, { key: 2 })) : y("", !0)
      ], 2);
    };
  }
}), ie = {
  install: (v, h = {}) => {
    v.component("lkt-step-process", oe);
  }
};
export {
  ie as default
};

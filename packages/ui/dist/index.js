import { defineComponent as d, openBlock as c, createElementBlock as m, renderSlot as i, createBlock as u, Teleport as p, createElementVNode as s, withModifiers as y, createTextVNode as _, toDisplayString as v, createCommentVNode as h } from "vue";
const $ = /* @__PURE__ */ d({
  __name: "Button",
  emits: ["click"],
  setup(o, { emit: a }) {
    const l = a;
    return (e, t) => (c(), m("button", {
      class: "my-button",
      onClick: t[0] || (t[0] = (n) => l("click"))
    }, [
      i(e.$slots, "default")
    ]));
  }
}), k = ["value", "placeholder"], B = /* @__PURE__ */ d({
  __name: "Input",
  props: {
    modelValue: {},
    placeholder: {}
  },
  emits: ["update:modelValue"],
  setup(o, { emit: a }) {
    const l = a, e = (t) => {
      l("update:modelValue", t.target.value);
    };
    return (t, n) => (c(), m("input", {
      value: o.modelValue,
      onInput: e,
      class: "my-input",
      placeholder: o.placeholder
    }, null, 40, k));
  }
}), b = { class: "my-modal-header" }, f = { class: "my-modal-body" }, C = { class: "my-modal-footer" }, I = /* @__PURE__ */ d({
  __name: "Modal",
  props: {
    visible: { type: Boolean },
    title: {}
  },
  emits: ["update:visible", "close"],
  setup(o, { emit: a }) {
    const l = a, e = () => {
      l("update:visible", !1), l("close");
    }, t = () => {
      e();
    };
    return (n, r) => (c(), u(p, { to: "body" }, [
      o.visible ? (c(), m("div", {
        key: 0,
        class: "my-modal-overlay",
        onClick: t
      }, [
        s("div", {
          class: "my-modal",
          onClick: r[0] || (r[0] = y(() => {
          }, ["stop"]))
        }, [
          s("div", b, [
            i(n.$slots, "header", {}, () => [
              _(v(o.title), 1)
            ]),
            s("button", {
              class: "my-modal-close",
              onClick: e
            }, "×")
          ]),
          s("div", f, [
            i(n.$slots, "default")
          ]),
          s("div", C, [
            i(n.$slots, "footer", {}, () => [
              s("button", {
                class: "my-modal-btn",
                onClick: e
              }, "关闭")
            ])
          ])
        ])
      ])) : h("", !0)
    ]));
  }
});
export {
  $ as Button,
  B as Input,
  I as Modal
};

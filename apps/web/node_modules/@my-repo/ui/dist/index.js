import { defineComponent as r, openBlock as s, createElementBlock as c, renderSlot as l } from "vue";
const p = /* @__PURE__ */ r({
  __name: "Button",
  emits: ["click"],
  setup(m, { emit: e }) {
    const n = e;
    return (o, t) => (s(), c("button", {
      class: "my-button",
      onClick: t[0] || (t[0] = (i) => n("click"))
    }, [
      l(o.$slots, "default")
    ]));
  }
});
export {
  p as Button
};

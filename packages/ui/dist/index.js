import { Teleport as e, createBlock as t, createCommentVNode as n, createElementBlock as r, createElementVNode as i, createTextVNode as a, defineComponent as o, openBlock as s, renderSlot as c, toDisplayString as l, withModifiers as u } from "vue";
//#endregion
//#region src/Button.vue
var d = /* @__PURE__ */ o({
	__name: "Button",
	emits: ["click"],
	setup(e, { emit: t }) {
		let n = t;
		return (e, t) => (s(), r("button", {
			class: "my-button",
			onClick: t[0] ||= (e) => n("click")
		}, [c(e.$slots, "default")]));
	}
}), f = ["value", "placeholder"], p = /* @__PURE__ */ o({
	__name: "Input",
	props: {
		modelValue: {},
		placeholder: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = t, i = (e) => {
			n("update:modelValue", e.target.value);
		};
		return (t, n) => (s(), r("input", {
			value: e.modelValue,
			onInput: i,
			class: "my-input",
			placeholder: e.placeholder
		}, null, 40, f));
	}
}), m = { class: "my-modal-header" }, h = { class: "my-modal-body" }, g = { class: "my-modal-footer" }, _ = /* @__PURE__ */ o({
	__name: "Modal",
	props: {
		visible: { type: Boolean },
		title: {}
	},
	emits: ["update:visible", "close"],
	setup(o, { emit: d }) {
		let f = d, p = () => {
			f("update:visible", !1), f("close");
		}, _ = () => {
			p();
		};
		return (d, f) => (s(), t(e, { to: "body" }, [o.visible ? (s(), r("div", {
			key: 0,
			class: "my-modal-overlay",
			onClick: _
		}, [i("div", {
			class: "my-modal",
			onClick: f[0] ||= u(() => {}, ["stop"])
		}, [
			i("div", m, [c(d.$slots, "header", {}, () => [a(l(o.title), 1)]), i("button", {
				class: "my-modal-close",
				onClick: p
			}, "×")]),
			i("div", h, [c(d.$slots, "default")]),
			i("div", g, [c(d.$slots, "footer", {}, () => [i("button", {
				class: "my-modal-btn",
				onClick: p
			}, "关闭")])])
		])])) : n("", !0)]));
	}
});
//#endregion
export { d as Button, p as Input, _ as Modal };

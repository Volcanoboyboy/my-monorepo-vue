<template>
  <main class="landing-page">
    <div class="landing-page__glow landing-page__glow--left"></div>
    <div class="landing-page__glow landing-page__glow--right"></div>
    <div class="landing-page__grid"></div>

    <section class="hero">
      <div class="hero__copy">
        <p class="eyebrow">Zen Repo AI 组件工作台</p>
        <h1>
          让组件开发
          <span>更聪明，也更顺手</span>
        </h1>
        <p class="hero__description">
          这是一个围绕应用、组件库与文档站点协同开发的前端工作台。
          当前版本聚焦统一视觉语言、提升联调效率，并让组件能力和文档保持同步演进。
        </p>

        <div class="hero__actions">
          <a class="hero__button hero__button--primary" href="#status">查看状态</a>
          <a class="hero__button hero__button--secondary" href="#summary">项目概览</a>
        </div>

        <div id="summary" class="hero__summary">
          <div>
            <strong>统一体验</strong>
            <span>组件、文档与应用首页采用同一套视觉基调</span>
          </div>
          <div>
            <strong>直接联调</strong>
            <span>开发态可直接消费源码，减少样式和行为偏差</span>
          </div>
          <div>
            <strong>持续扩展</strong>
            <span>当前已完成按钮、输入框、弹窗基础能力建设</span>
          </div>
        </div>
      </div>

      <div id="status" class="hero__panel">
        <div class="status-card">
          <div class="status-card__header">
            <span class="status-dot"></span>
            当前项目状态
          </div>

          <div class="status-card__metrics">
            <article>
              <small>首页风格</small>
              <strong>AI 质感</strong>
            </article>
            <article>
              <small>主视觉</small>
              <strong>青绿霓光</strong>
            </article>
            <article>
              <small>组件进度</small>
              <strong>3 / 3</strong>
            </article>
          </div>

          <div class="status-card__list">
            <div>
              <p>已完成</p>
              <span>Button、Input、Modal 组件与基础文档页已补齐</span>
            </div>
            <div>
              <p>当前重点</p>
              <span>统一样式语言、提升联调效率、增强组件一致性</span>
            </div>
            <div>
              <p>下一阶段</p>
              <span>补充更多交互态、示例场景和可发布能力</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
:global(body) {
  margin: 0;
  background:
    radial-gradient(circle at 18% 18%, rgba(0, 255, 200, 0.12), transparent 24%),
    radial-gradient(circle at 82% 16%, rgba(54, 116, 255, 0.14), transparent 24%),
    linear-gradient(135deg, #07110f 0%, #0b1817 42%, #0e1d1c 100%);
  color: #e7fff8;
  font-family: 'PingFang SC', 'Microsoft YaHei', 'Segoe UI', sans-serif;
}

:global(*) {
  box-sizing: border-box;
}

:global(a) {
  color: inherit;
  text-decoration: none;
}

.landing-page {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  padding: 24px;
}

.landing-page__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(125, 255, 220, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(125, 255, 220, 0.04) 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.55), transparent 92%);
  pointer-events: none;
}

.landing-page__glow {
  position: absolute;
  border-radius: 999px;
  filter: blur(80px);
  opacity: 0.6;
}

.landing-page__glow--left {
  top: -60px;
  left: -40px;
  width: 320px;
  height: 320px;
  background: rgba(28, 255, 203, 0.18);
}

.landing-page__glow--right {
  right: -50px;
  bottom: -60px;
  width: 320px;
  height: 320px;
  background: rgba(76, 122, 255, 0.16);
}

.hero {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(300px, 0.85fr);
  gap: 22px;
  align-items: stretch;
  max-width: 1120px;
  min-height: calc(100vh - 48px);
  margin: 0 auto;
}

.hero__copy,
.hero__panel {
  border: 1px solid rgba(129, 255, 224, 0.12);
  background: rgba(8, 21, 20, 0.66);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(18px);
}

.hero__copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 28px;
  padding: 38px;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  margin: 0 0 16px;
  padding: 7px 12px;
  border: 1px solid rgba(125, 255, 220, 0.16);
  border-radius: 999px;
  background: rgba(125, 255, 220, 0.06);
  color: #9df7df;
  font-size: 12px;
  letter-spacing: 0.08em;
}

.hero h1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.16;
  letter-spacing: -0.03em;
  font-weight: 700;
}

.hero h1 span {
  display: block;
  color: #86f7d4;
  text-shadow: 0 0 18px rgba(125, 255, 220, 0.16);
}

.hero__description {
  max-width: 620px;
  margin: 18px 0 0;
  color: rgba(220, 245, 239, 0.72);
  font-size: 15px;
  line-height: 1.9;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.hero__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 132px;
  min-height: 42px;
  padding: 0 18px;
  border-radius: 14px;
  font-size: 14px;
  font-weight: 600;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;
}

.hero__button:hover {
  transform: translateY(-1px);
}

.hero__button--primary {
  background: linear-gradient(135deg, #7cf0cf 0%, #3dc4a3 100%);
  color: #04221b;
}

.hero__button--secondary {
  border: 1px solid rgba(125, 255, 220, 0.18);
  background: rgba(255, 255, 255, 0.03);
  color: #c9fff0;
}

.hero__summary {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 24px;
}

.hero__summary div {
  padding: 16px;
  border: 1px solid rgba(125, 255, 220, 0.08);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.03);
}

.hero__summary strong {
  display: block;
  font-size: 15px;
  color: #dbfff4;
}

.hero__summary span {
  display: block;
  margin-top: 8px;
  color: rgba(220, 245, 239, 0.66);
  font-size: 13px;
  line-height: 1.7;
}

.hero__panel {
  display: flex;
  align-items: center;
  border-radius: 28px;
  padding: 24px;
}

.status-card {
  width: 100%;
  border-radius: 22px;
  border: 1px solid rgba(125, 255, 220, 0.12);
  background: linear-gradient(180deg, rgba(14, 31, 29, 0.88), rgba(9, 21, 20, 0.92));
  padding: 20px;
}

.status-card__header {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #c5fff0;
  font-size: 14px;
  font-weight: 600;
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #7cf0cf;
  box-shadow: 0 0 12px rgba(124, 240, 207, 0.52);
}

.status-card__metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-top: 18px;
}

.status-card__metrics article,
.status-card__list div {
  padding: 14px;
  border: 1px solid rgba(125, 255, 220, 0.08);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.03);
}

.status-card__metrics small,
.status-card__list p {
  display: block;
  margin: 0;
  color: rgba(200, 244, 234, 0.6);
  font-size: 12px;
}

.status-card__metrics strong {
  display: block;
  margin-top: 10px;
  color: #eefffa;
  font-size: 20px;
}

.status-card__list {
  display: grid;
  gap: 12px;
  margin-top: 18px;
}

.status-card__list span {
  display: block;
  margin-top: 8px;
  color: rgba(220, 245, 239, 0.68);
  font-size: 13px;
  line-height: 1.7;
}

@media (max-width: 900px) {
  .landing-page {
    padding: 16px;
  }

  .hero,
  .hero__summary,
  .status-card__metrics {
    grid-template-columns: 1fr;
  }

  .hero {
    min-height: auto;
  }

  .hero__copy,
  .hero__panel {
    padding: 22px;
  }

  .hero h1 {
    font-size: clamp(1.8rem, 8vw, 2.6rem);
  }
}
</style>

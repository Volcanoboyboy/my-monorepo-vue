# Zen Repo Monorepo

一个基于 `pnpm workspace` + `Turborepo` 的 Vue monorepo 示例项目，包含组件库、工具库、示例应用和文档站点。

## 项目结构

```text
.
├─ apps/
│  ├─ web/       # Vite + Vue 示例应用
│  └─ docs/      # VitePress 文档站点
├─ packages/
│  ├─ ui/        # 共享 UI 组件库
│  └─ utils/     # 通用工具函数库
├─ package.json
├─ pnpm-workspace.yaml
└─ turbo.json
```

## 包说明

### `apps/web`

- 包名：`@zen-repo/web`
- 技术栈：`Vue 3` + `Vite` + `TypeScript`
- 用途：用于本地联调和演示 `@zen-repo/ui`、`@zen-repo/utils`
- 默认端口：`3000`

### `apps/docs`

- 包名：`docs`
- 技术栈：`VitePress`
- 用途：组件文档、示例说明和对外展示

### `packages/ui`

- 包名：`@zen-repo/ui`
- 用途：共享组件库
- 当前导出：
  - `Button`
  - `Input`
  - `Modal`
- 说明：组件库入口会自动引入内部样式，应用侧直接 `import { Button } from '@zen-repo/ui'` 即可，不需要单独再引样式文件。

### `packages/utils`

- 包名：`@zen-repo/utils`
- 用途：通用工具方法
- 当前导出：
  - `formatDate`
  - `deepClone`

## 环境要求

- `Node.js` 18 及以上
- `pnpm` 10 及以上

## 安装依赖

```bash
pnpm install
```

## 根目录脚本

```bash
pnpm dev
pnpm build
pnpm lint
pnpm type-check
pnpm changeset
pnpm version
pnpm release
```

脚本说明：

- `pnpm dev`：并行启动 workspace 中定义了 `dev` 的项目
- `pnpm build`：按依赖顺序构建所有包
- `pnpm lint`：执行各子包的 lint 脚本
- `pnpm type-check`：执行各子包的类型检查
- `pnpm changeset`：生成变更记录
- `pnpm version`：根据 changeset 变更版本号
- `pnpm release`：先构建，再发布包

## 常用开发命令

### 启动示例应用

```bash
pnpm --filter @zen-repo/web dev
```

### 启动文档站点

```bash
pnpm --filter docs dev
```

### 构建 UI 组件库

```bash
pnpm --filter @zen-repo/ui build
```

### 监听 UI 组件库构建

```bash
pnpm --filter @zen-repo/ui dev
```

### 运行 UI 组件测试

```bash
pnpm --filter @zen-repo/ui test
```

### 运行工具库测试

```bash
pnpm --filter @zen-repo/utils test
```

## 联调说明

`apps/web` 已经配置了对 `@zen-repo/ui` 的 Vite alias：

- 开发态会直接解析到 `packages/ui/src/index.ts`
- 因此修改 `packages/ui/src` 下的组件和样式时，`apps/web` 可以直接联调
- UI 包入口会自动引入 `style.css`，避免出现“组件渲染了但样式没生效”的问题

如果你主要在调试组件库，推荐同时开两个终端：

```bash
pnpm --filter @zen-repo/web dev
pnpm --filter @zen-repo/ui dev
```

虽然 `web` 开发态已经可以直接吃到 `ui/src`，但保留 `ui` 的构建监听仍然有帮助：

- 可以及时更新 `dist`
- 可以更早发现打包产物或类型声明问题

## 发布说明

这个仓库已经接入 `changesets`，适合按包管理版本和发布。

一个典型发布流程如下：

```bash
pnpm changeset
pnpm version
pnpm build
pnpm release
```

## 当前能力概览

### UI 组件库

- `Button`：基础按钮组件，支持插槽和点击事件
- `Input`：输入框组件
- `Modal`：模态框组件

### 工具库

- `formatDate(date, format)`：日期格式化
- `deepClone(obj)`：基于 JSON 的深拷贝

## 后续可补充内容

- 补充每个组件的使用示例
- 为 `packages/utils` 增加构建产物与类型声明
- 为 workspace 增加统一的 lint / test pipeline
- 在 README 中补充 CI、发布目标和贡献规范

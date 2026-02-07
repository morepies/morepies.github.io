# Flow PayPal 申请站点部署说明

站点目录：`d:\AIGC\tools\flow-paypal-site`

## 1. 先改 1 个文件
编辑 `config.js`，至少修改：
- `contactEmail`：改成真实可收件邮箱（PayPal 审核会看）
- `ownerName`：你的姓名或品牌名
- `location`：服务地区

## 2. GitHub Pages 推荐方式（最稳）
1. 在 GitHub 创建一个公开仓库：`morepies.github.io`
2. 把本目录全部文件上传到仓库根目录（不是子目录）
3. 打开仓库 `Settings -> Pages`
4. `Source` 选择 `Deploy from a branch`
5. 分支选 `main`，目录选 `/ (root)`，保存
6. 等 1-3 分钟后访问：`https://morepies.github.io/`

## 3. PayPal 表单怎么填
- 你截图里“店铺链接”建议填写：`https://morepies.github.io/`
- 如果首页还没生效，可以先填仓库链接：`https://github.com/morepies/morepies.github.io`（通过率通常不如独立页面）

## 4. 提交前自检
- 首页能打开，且有产品说明、价格、联系信息
- `隐私政策 / 服务条款 / 退款政策` 三页可访问
- 联系邮箱不是占位符
- 移动端页面正常（手机打开检查）

## 5. 文件清单
- `index.html` 主页
- `privacy.html` 隐私政策
- `terms.html` 服务条款
- `refund.html` 退款政策
- `contact.html` 联系支持
- `styles.css` 样式
- `config.js` 可改配置
- `app.js` 页面配置注入
- `assets/` 展示图片

## 6. 用 Git 命令发布（可重复更新）
在 `flow-paypal-site` 目录运行：

```powershell
.\publish_example.ps1
```

说明：
- 首次会初始化仓库并推送到 `https://github.com/morepies/morepies.github.io.git`
- 之后每次改完页面，再运行一次即可更新
- 如果你仓库名不是 `morepies.github.io`，运行时传参：

```powershell
.\publish_example.ps1 -RepoUrl "https://github.com/你的用户名/你的仓库.git"
```

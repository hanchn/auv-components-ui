# auv-components-ui

### 商城组件库目录

## **1. 基础组件（Base Components）**
基础组件主要是无业务逻辑、可复用的 UI 组件，涵盖输入、展示、布局等。

### **1.1 通用组件（General）**
- `Button` 按钮 ✅
- `Icon` 图标 ✅
- `Typography` 文字排版 
- `Divider` 分割线
- `Avatar` 头像
- `Badge` 徽章
- `Tag` 标签 ✅
- `Tooltip` 文字提示 ✅
- `Popover` 气泡弹框 ✅
- `Dialog`/`Modal` 对话框/模态框 ✅
- `Notification` 消息通知 ✅
- `Progress` 进度条 ✅
- `Spinner` 加载动画 ✅
- `Skeleton` 骨架屏 ✅

### **1.2 布局组件（Layout）**
- `Grid` 栅格系统
- `Flex` 弹性布局
- `Space` 间距管理
- `Container` 容器
- `Card` 卡片
- `Collapse` 折叠面板
- `Tabs` 选项卡
- `Drawer` 抽屉
- `Sticky` 粘性布局
- `ScrollView` 滚动视图

### **1.3 表单组件（Form）**
- `Input` 输入框
- `Textarea` 多行文本输入框
- `Select` 选择器
- `Checkbox` 复选框
- `Radio` 单选框
- `Switch` 开关
- `Slider` 滑块
- `DatePicker` 日期选择器
- `TimePicker` 时间选择器
- `RangePicker` 范围选择器
- `Cascader` 级联选择器
- `Form` 表单容器
- `Upload` 文件上传
- `Rate` 评分

### **1.4 表格和数据展示（Data Display）**
- `Table` 表格
- `List` 列表
- `Tree` 树形控件
- `Pagination` 分页
- `Timeline` 时间轴
- `Statistic` 统计数值
- `Carousel` 轮播图
- `Image` 图片
- `Video` 视频
- `QRCode` 二维码

### **1.5 导航组件（Navigation）**
- `Breadcrumb` 面包屑
- `Menu` 菜单
- `Dropdown` 下拉菜单
- `Tabs` 选项卡
- `Pagination` 分页
- `Steps` 步骤条
- `Anchor` 锚点

---

## **2. 业务组件（Business Components）**
业务组件是针对商城场景的封装，直接可用于电商页面。

### **2.1 商品相关（Product）**
- `ProductCard` 商品卡片 ✅
- `ProductList` 商品列表 ✅
- `ProductDetail` 商品详情 ✅
- `SkuSelector` SKU 选择器
- `PriceTag` 价格标签
- `DiscountLabel` 折扣标签
- `StockIndicator` 库存显示
- `ProductImageGallery` 商品图片展示
- `CountdownTimer` 限时折扣倒计时

### **2.2 购物车（Cart）**
- `CartIcon` 购物车图标
- `CartList` 购物车商品列表
- `CartSummary` 购物车结算信息
- `CartCouponInput` 购物车优惠券输入框

### **2.3 订单相关（Order）**
- `OrderList` 订单列表
- `OrderCard` 订单卡片
- `OrderDetail` 订单详情
- `OrderStatus` 订单状态
- `Invoice` 电子发票展示
- `ShippingAddress` 收货地址选择

### **2.4 结算 & 支付（Checkout & Payment）**
- `CheckoutSteps` 结算步骤条
- `PaymentMethodSelector` 支付方式选择
- `BillingInfo` 账单信息
- `ShippingMethodSelector` 物流方式选择
- `OrderSummary` 订单总结
- `CouponCodeInput` 优惠券输入
- `LoyaltyPoints` 积分兑换
- `InstallmentPlan` 分期付款选项

### **2.5 用户中心（User Center）**
- `UserProfile` 用户信息
- `UserAvatar` 头像上传
- `AccountSettings` 账户设置
- `OrderHistory` 订单历史
- `Wishlist` 收藏夹
- `AddressBook` 地址管理
- `SecuritySettings` 安全设置
- `LoyaltyPointsDisplay` 积分展示

### **2.6 评价与互动（Review & Social）**
- `ReviewList` 评价列表
- `ReviewForm` 评价提交
- `RatingStars` 评分星级
- `QASection` 问答区
- `LikeButton` 点赞按钮
- `ShareButton` 社交分享

### **2.7 促销与营销（Promotion & Marketing）**
- `Banner` 促销横幅
- `CouponCard` 优惠券卡片
- `FlashSaleTimer` 限时抢购倒计时
- `ReferralProgram` 推荐好友奖励
- `SubscriptionForm` 订阅表单
- `PromoPopup` 促销弹窗
- `GiftCard` 礼品卡
- `LuckyDraw` 抽奖组件

### **2.8 搜索 & 推荐（Search & Recommendation）**
- `SearchBar` 搜索栏
- `SearchSuggestion` 搜索推荐
- `ProductRecommendation` 个性化推荐
- `RecentlyViewed` 最近浏览
- `TopSellers` 热销榜单
- `CategoryFilter` 分类筛选
- `PriceRangeFilter` 价格区间筛选

### **2.9 物流 & 追踪（Shipping & Tracking）**
- `TrackingStatus` 物流追踪状态
- `ShippingProgress` 物流进度条
- `ShippingCompanySelector` 物流公司选择
- `DeliveryEstimate` 预计送达时间
- `PickupPointSelector` 自提点选择

### **2.10 其他功能（Other Features）**
- `FeedbackForm` 用户反馈
- `HelpCenter` 帮助中心
- `LiveChat` 在线客服
- `FAQList` 常见问题
- `DarkModeToggle` 主题切换

---


### 商城页面目录

### **📌 跨境电商网站页面目录设计**
跨境电商网站通常包括 **首页、商品、购物车、结算、用户中心、支付、物流、营销活动** 等多个核心页面。以下是详细的页面目录结构。

---

## **1️⃣ 首页（Home）**
- `/` **首页（Home）**
- `/new-arrivals` **新品专区**
- `/best-sellers` **热销商品**
- `/flash-sale` **限时抢购**
- `/categories` **所有商品分类**
- `/brands` **品牌专区**
- `/offers` **优惠活动**
- `/search` **全站搜索**
- `/home/vacation` **度假风**
- `/home/holiday` **假日风** 
- `/home/family` **亲子风**
- `/home/tech` **科技风**
- `/home/minimal` **极简风**
- `/home/luxury` **奢华风**
- `/home/sports` **运动风**
- `/home/nordic` **北欧风**
- `/home/vintage` **复古风**
- `/home/anime` **二次元风**

---

## **2️⃣ 商品相关（Product）**
- `/product/:id` **商品详情**
- `/category/:category` **分类商品列表**
- `/collections/:collection` **专题商品**
- `/reviews/:id` **商品评价**
- `/compare` **商品对比**
- `/wishlist` **收藏夹**
- `/stock-check` **库存查询**

---

## **3️⃣ 购物车 & 结算（Cart & Checkout）**
- `/cart` **购物车**
- `/checkout` **结算页面**
- `/checkout/shipping` **填写收货地址**
- `/checkout/payment` **选择支付方式**
- `/checkout/review` **订单确认**
- `/checkout/success` **订单成功**
- `/order-tracking` **订单跟踪**

---

## **4️⃣ 订单管理（Order）**
- `/orders` **订单列表**
- `/order/:id` **订单详情**
- `/order/:id/invoice` **电子发票**
- `/order/:id/cancel` **订单取消**
- `/order/:id/return` **退货/换货**
- `/order/:id/refund` **退款申请**
- `/order/:id/review` **订单评价**

---

## **5️⃣ 用户中心（User Center）**
- `/account` **个人中心**
- `/account/profile` **用户信息**
- `/account/address` **地址管理**
- `/account/security` **账号安全**
- `/account/orders` **订单历史**
- `/account/wishlist` **收藏商品**
- `/account/reviews` **我的评价**
- `/account/coupons` **优惠券**
- `/account/points` **积分管理**
- `/account/refunds` **退款管理**
- `/account/subscriptions` **订阅管理**
- `/account/logout` **退出登录**

---

## **6️⃣ 物流 & 追踪（Shipping & Tracking）**
- `/shipping-methods` **物流方式**
- `/shipping-rates` **运费计算**
- `/tracking/:id` **物流追踪**
- `/shipping-faq` **物流常见问题**
- `/returns` **退货政策**
- `/customs` **关税政策**

---

## **7️⃣ 支付 & 结算（Payment）**
- `/payment-methods` **支付方式**
- `/payment/:orderId` **支付页面**
- `/payment/success` **支付成功**
- `/payment/fail` **支付失败**
- `/payment/refund/:orderId` **退款进度**
- `/installments` **分期付款**
- `/wallet` **电子钱包**
- `/gift-cards` **礼品卡**

---

## **8️⃣ 营销活动 & 促销（Promotion & Marketing）**
- `/coupons` **优惠券领取**
- `/loyalty` **会员积分**
- `/affiliate` **联盟推广**
- `/flash-sale` **限时抢购**
- `/group-buying` **拼团**
- `/lucky-draw` **抽奖活动**
- `/referral` **邀请好友**
- `/subscription` **邮件订阅**
- `/vip` **VIP 会员专区**

---

## **9️⃣ 客服 & 帮助中心（Customer Service & Help Center）**
- `/help` **帮助中心**
- `/faq` **常见问题**
- `/contact` **联系客服**
- `/return-policy` **退换货政策**
- `/privacy-policy` **隐私政策**
- `/terms-of-service` **服务条款**
- `/about` **关于我们**
- `/careers` **加入我们**
- `/blog` **跨境电商博客**
- `/partnerships` **商务合作**
- `/investor-relations` **投资者关系**

---

## **📌 10️⃣ 其他页面**
- `/404` **404 页面**
- `/maintenance` **维护页面**
- `/legal` **法律条款**
- `/sitemap` **站点地图**





import { createSSRApp, h as h$1 } from "vue";
import { renderToString } from "@vue/server-renderer";
import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { i18nVue } from "laravel-vue-i18n";
const Dashboard$f = "ড্যাশবোর্ড";
const Logout$f = "লগআউট";
const Tickets$f = "টিকিট";
const Chat$f = "চ্যাট";
const FAQs$f = "প্রশ্নোত্তর";
const Blog$f = "ব্লগ";
const More$f = "আরও";
const Notes$f = "নোট";
const Contacts$f = "যোগাযোগ";
const Organizations$f = "প্রতিষ্ঠান";
const Users$f = "ব্যবহারকারীরা";
const Customers$f = "গ্রাহকরা";
const Settings$f = "সেটিংস";
const Global$f = "গ্লোবাল";
const Categories$f = "শ্রেণীসমূহ";
const Status$f = "অবস্থা";
const Priorities$f = "অগ্রাধিকার";
const Departments$f = "বিভাগসমূহ";
const Types$f = "ধরন";
const Pusher$f = "পুশার";
const Contact$f = "যোগাযোগ";
const Services$f = "সেবা";
const Filter$f = "ফিল্টার";
const Trashed$f = "মুছে ফেলা";
const Reset$f = "পুনরায় সেট করুন";
const Name$f = "নাম";
const Email$f = "ইমেইল";
const Phone$f = "ফোন";
const Country$f = "দেশ";
const City$f = "শহর";
const Address$f = "ঠিকানা";
const Password$f = "পাসওয়ার্ড";
const Role$f = "ভূমিকা";
const Photo$f = "ছবি";
const Technical$f = "প্রযুক্তিগত";
const Hardware$f = "হার্ডওয়্যার";
const Development$f = "উন্নয়ন";
const Management$f = "ব্যবস্থাপনা";
const Admin$f = "অ্যাডমিন";
const Software$f = "সফটওয়্যার";
const Service$f = "সেবা";
const Event$f = "ইভেন্ট";
const Average$f = "গড়";
const Seconds$f = "সেকেন্ড";
const Month$f = "মাস";
const Months$e = "মাসসমূহ";
const Day$f = "দিন";
const Days$e = "দিনসমূহ";
const Hours$f = "ঘণ্টা";
const Hour$e = "ঘণ্টা";
const Minutes$f = "মিনিট";
const Minute$e = "মিনিট";
const Key$e = "কি";
const Subject$f = "বিষয়";
const Priority$f = "অগ্রাধিকার";
const Updated$f = "আপডেট করা হয়েছে";
const Customer$f = "গ্রাহক";
const Department$e = "বিভাগ";
const Category$f = "শ্রেণী";
const Created$f = "তৈরি করা হয়েছে";
const Save$f = "সংরক্ষণ করুন";
const Ticket$e = "টিকিট";
const FAQ$e = "প্রশ্নোত্তর";
const Title$e = "শিরোনাম";
const Details$e = "বিস্তারিত";
const Note$e = "নোট";
const Submit$f = "জমা দিন";
const Cancel$f = "বাতিল করুন";
const Organization$e = "প্রতিষ্ঠান";
const Province$e = "প্রদেশ";
const State$e = "রাজ্য";
const Delete$f = "মুছুন";
const Update$f = "আপডেট করুন";
const Create$f = "তৈরি করুন";
const Location$f = "অবস্থান";
const Privacy$e = "গোপনীয়তা";
const Company$e = "কোম্পানি";
const Subscribe$e = "সাবস্ক্রাইব";
const Login$f = "লগইন";
const Hello$f = "হ্যালো";
const Registration$e = "নিবন্ধন";
const bd = {
  "Edit Profile": "প্রোফাইল সম্পাদনা করুন",
  Dashboard: Dashboard$f,
  Logout: Logout$f,
  Tickets: Tickets$f,
  Chat: Chat$f,
  FAQs: FAQs$f,
  Blog: Blog$f,
  "Knowledge Base": "জ্ঞানভিত্তিক তথ্য",
  More: More$f,
  Notes: Notes$f,
  Contacts: Contacts$f,
  Organizations: Organizations$f,
  Users: Users$f,
  Customers: Customers$f,
  Settings: Settings$f,
  Global: Global$f,
  Categories: Categories$f,
  Status: Status$f,
  Priorities: Priorities$f,
  Departments: Departments$f,
  Types: Types$f,
  "Email Templates": "ইমেইল টেমপ্লেট",
  "SMTP Mail": "SMTP মেইল",
  Pusher: Pusher$f,
  "Pusher Chat": "পুশার চ্যাট",
  "Front Pages": "সামনের পৃষ্ঠাসমূহ",
  Contact: Contact$f,
  Services: Services$f,
  "Privacy Policy": "গোপনীয়তা নীতি",
  "Terms of Services": "পরিষেবার শর্তাবলী",
  Filter: Filter$f,
  Trashed: Trashed$f,
  "Trashed With": "মুছে ফেলা সহ",
  "Only Trashed": "শুধুমাত্র মুছে ফেলা",
  "Search...": "অনুসন্ধান...",
  Reset: Reset$f,
  Name: Name$f,
  Email: Email$f,
  Phone: Phone$f,
  Country: Country$f,
  "Create User": "ব্যবহারকারী তৈরি করুন",
  "First Name": "প্রথম নাম",
  "First name": "প্রথম নাম",
  "Last Name": "শেষ নাম",
  "Last name": "শেষ নাম",
  City: City$f,
  Address: Address$f,
  Password: Password$f,
  Role: Role$f,
  Photo: Photo$f,
  "New Tickets": "নতুন টিকিট",
  "Open Tickets": "খোলা টিকিট",
  "Closed Tickets": "বন্ধ টিকিট",
  "Unassigned Tickets": "অবর্দিষ্ট টিকিট",
  "Ticket by department": "বিভাগ অনুযায়ী টিকিট",
  "Ticket by type": "ধরন অনুযায়ী টিকিট",
  "Top ticket creator": "শীর্ষ টিকিট নির্মাতা",
  "Ticket history": "টিকিট ইতিহাস",
  "First Response Time": "প্রথম প্রতিক্রিয়া সময়",
  "Last Response Time": "সর্বশেষ প্রতিক্রিয়া সময়",
  Technical: Technical$f,
  Hardware: Hardware$f,
  Development: Development$f,
  Management: Management$f,
  Admin: Admin$f,
  Software: Software$f,
  Service: Service$f,
  Event: Event$f,
  Average: Average$f,
  Seconds: Seconds$f,
  "this month": "এই মাস",
  "last month": "গত মাস",
  Month: Month$f,
  Months: Months$e,
  Day: Day$f,
  Days: Days$e,
  Hours: Hours$f,
  Hour: Hour$e,
  Minutes: Minutes$f,
  Minute: Minute$e,
  Key: Key$e,
  Subject: Subject$f,
  "Attach files": "ফাইল সংযুক্ত করুন",
  Priority: Priority$f,
  "Date": "তারিখ",
  Updated: Updated$f,
  Customer: Customer$f,
  Department: Department$e,
  "Assigned to": "নির্ধারিত",
  "Ticket type": "টিকিট ধরন",
  Category: Category$f,
  Created: Created$f,
  "Request Details": "অনুরোধের বিবরণ",
  "Attach File": "ফাইল সংযুক্ত করুন",
  "Delete Ticket": "টিকিট মুছুন",
  Save: Save$f,
  "Ticket discussion": "টিকিট আলোচনা",
  Ticket: Ticket$e,
  FAQ: FAQ$e,
  "Create Ticket": "টিকিট তৈরি করুন",
  "New Ticket": "নতুন টিকিট",
  "Create FAQ": "প্রশ্নোত্তর তৈরি করুন",
  "Filter by priority": "অগ্রাধিকারের মাধ্যমে ফিল্টার করুন",
  "Filter by status": "অবস্থার মাধ্যমে ফিল্টার করুন",
  "Delete FAQ": "প্রশ্নোত্তর মুছুন",
  Title: Title$e,
  Details: Details$e,
  Note: Note$e,
  Submit: Submit$f,
  Cancel: Cancel$f,
  "Delete note": "নোট মুছুন",
  Organization: Organization$e,
  Province: Province$e,
  State: State$e,
  "Postal code": "পোস্টাল কোড",
  "Delete Organization": "প্রতিষ্ঠান মুছুন",
  "Update Organization": "প্রতিষ্ঠান আপডেট করুন",
  Delete: Delete$f,
  Update: Update$f,
  Create: Create$f,
  "Create Customer": "গ্রাহক তৈরি করুন",
  "Manage Users": "ব্যবহারকারী পরিচালনা করুন",
  "Default Language": "ডিফল্ট ভাষা",
  "Email Notifications": "ইমেইল বিজ্ঞপ্তি",
  "Create ticket by new customer": "নতুন গ্রাহকের দ্বারা টিকিট তৈরি করুন",
  "Create ticket from dashboard": "ড্যাশবোর্ড থেকে টিকিট তৈরি করুন",
  "Status or priority changes": "অবস্থা বা অগ্রাধিকার পরিবর্তন",
  "Create a new user": "নতুন ব্যবহারকারী তৈরি করুন",
  "Email Template": "ইমেইল টেমপ্লেট",
  "SMTP Host": "SMTP হোস্ট",
  "SMTP Port": "SMTP পোর্ট",
  "SMTP Username": "SMTP ব্যবহারকারীর নাম",
  "SMTP Password": "SMTP পাসওয়ার্ড",
  Location: Location$f,
  "Phone number": "ফোন নম্বর",
  "Email address": "ইমেইল ঠিকানা",
  "Add New": "নতুন যোগ করুন",
  Privacy: Privacy$e,
  Company: Company$e,
  Subscribe: Subscribe$e,
  Login: Login$f,
  "Submit ticket": "টিকিট জমা দিন",
  "terms and conditions": "শর্তাবলী এবং শর্তসমূহ",
  "I agree with the": "আমি এর সাথে সম্মত",
  "Don’t have account?": "অ্যাকাউন্ট নেই?",
  "Remember Me": "আমাকে মনে রাখবেন",
  "Reset Password": "পাসওয়ার্ড পুনরায় সেট করুন",
  "Already have an account?": "ইতিমধ্যে একটি অ্যাকাউন্ট আছে?",
  "Good Morning": "সুপ্রভাত",
  "Good Noon": "শুভ মধ্যাহ্ন",
  "Good Evening": "শুভ সন্ধ্যা",
  "Good Afternoon": "শুভ অপরাহ্ন",
  Hello: Hello$f,
  "Forgot your password?": "আপনার পাসওয়ার্ড ভুলে গেছেন?",
  "Send Password Reset Link": "পাসওয়ার্ড পুনরায় সেট করার লিংক পাঠান",
  Registration: Registration$e
};
const __vite_glob_1_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Address: Address$f,
  Admin: Admin$f,
  Average: Average$f,
  Blog: Blog$f,
  Cancel: Cancel$f,
  Categories: Categories$f,
  Category: Category$f,
  Chat: Chat$f,
  City: City$f,
  Company: Company$e,
  Contact: Contact$f,
  Contacts: Contacts$f,
  Country: Country$f,
  Create: Create$f,
  Created: Created$f,
  Customer: Customer$f,
  Customers: Customers$f,
  Dashboard: Dashboard$f,
  Day: Day$f,
  Days: Days$e,
  Delete: Delete$f,
  Department: Department$e,
  Departments: Departments$f,
  Details: Details$e,
  Development: Development$f,
  Email: Email$f,
  Event: Event$f,
  FAQ: FAQ$e,
  FAQs: FAQs$f,
  Filter: Filter$f,
  Global: Global$f,
  Hardware: Hardware$f,
  Hello: Hello$f,
  Hour: Hour$e,
  Hours: Hours$f,
  Key: Key$e,
  Location: Location$f,
  Login: Login$f,
  Logout: Logout$f,
  Management: Management$f,
  Minute: Minute$e,
  Minutes: Minutes$f,
  Month: Month$f,
  Months: Months$e,
  More: More$f,
  Name: Name$f,
  Note: Note$e,
  Notes: Notes$f,
  Organization: Organization$e,
  Organizations: Organizations$f,
  Password: Password$f,
  Phone: Phone$f,
  Photo: Photo$f,
  Priorities: Priorities$f,
  Priority: Priority$f,
  Privacy: Privacy$e,
  Province: Province$e,
  Pusher: Pusher$f,
  Registration: Registration$e,
  Reset: Reset$f,
  Role: Role$f,
  Save: Save$f,
  Seconds: Seconds$f,
  Service: Service$f,
  Services: Services$f,
  Settings: Settings$f,
  Software: Software$f,
  State: State$e,
  Status: Status$f,
  Subject: Subject$f,
  Submit: Submit$f,
  Subscribe: Subscribe$e,
  Technical: Technical$f,
  Ticket: Ticket$e,
  Tickets: Tickets$f,
  Title: Title$e,
  Trashed: Trashed$f,
  Types: Types$f,
  Update: Update$f,
  Updated: Updated$f,
  Users: Users$f,
  default: bd
}, Symbol.toStringTag, { value: "Module" }));
const Dashboard$e = "仪表板";
const Logout$e = "退出登录";
const Tickets$e = "工单";
const Chat$e = "聊天";
const FAQs$e = "常见问题";
const Blog$e = "博客";
const More$e = "更多";
const Notes$e = "笔记";
const Contacts$e = "联系人";
const Organizations$e = "组织";
const Users$e = "用户";
const Customers$e = "客户";
const Settings$e = "设置";
const Global$e = "全局";
const Categories$e = "类别";
const Status$e = "状态";
const Priorities$e = "优先级";
const Departments$e = "部门";
const Types$e = "类型";
const Pusher$e = "推送";
const Contact$e = "联系";
const Services$e = "服务";
const Filter$e = "筛选";
const Trashed$e = "已删除";
const Reset$e = "重置";
const Name$e = "姓名";
const Email$e = "电子邮件";
const Phone$e = "电话";
const Country$e = "国家";
const City$e = "城市";
const Address$e = "地址";
const Password$e = "密码";
const Role$e = "角色";
const Photo$e = "照片";
const Technical$e = "技术";
const Hardware$e = "硬件";
const Development$e = "开发";
const Management$e = "管理";
const Admin$e = "管理员";
const Software$e = "软件";
const Service$e = "服务";
const Event$e = "事件";
const Average$e = "平均";
const Seconds$e = "秒";
const Month$e = "月份";
const Months$d = "月份";
const Day$e = "天";
const Days$d = "天数";
const Hours$e = "小时";
const Hour$d = "小时";
const Minutes$e = "分钟";
const Minute$d = "分钟";
const Key$d = "键值";
const Subject$e = "主题";
const Priority$e = "优先级";
const Updated$e = "已更新";
const Customer$e = "客户";
const Department$d = "部门";
const Category$e = "类别";
const Created$e = "已创建";
const Save$e = "保存";
const Ticket$d = "工单";
const FAQ$d = "常见问题";
const Title$d = "标题";
const Details$d = "详情";
const Note$d = "备注";
const Submit$e = "提交";
const Cancel$e = "取消";
const Organization$d = "组织";
const Province$d = "省份";
const State$d = "州";
const Delete$e = "删除";
const Update$e = "更新";
const Create$e = "创建";
const Location$e = "位置";
const Privacy$d = "隐私";
const Company$d = "公司";
const Subscribe$d = "订阅";
const Login$e = "登录";
const Hello$e = "你好";
const Registration$d = "注册";
const cn = {
  "Edit Profile": "编辑个人资料",
  Dashboard: Dashboard$e,
  Logout: Logout$e,
  Tickets: Tickets$e,
  Chat: Chat$e,
  FAQs: FAQs$e,
  Blog: Blog$e,
  "Knowledge Base": "知识库",
  More: More$e,
  Notes: Notes$e,
  Contacts: Contacts$e,
  Organizations: Organizations$e,
  Users: Users$e,
  Customers: Customers$e,
  Settings: Settings$e,
  Global: Global$e,
  Categories: Categories$e,
  Status: Status$e,
  Priorities: Priorities$e,
  Departments: Departments$e,
  Types: Types$e,
  "Email Templates": "邮件模板",
  "SMTP Mail": "SMTP 邮件",
  Pusher: Pusher$e,
  "Pusher Chat": "推送聊天",
  "Front Pages": "前端页面",
  Contact: Contact$e,
  Services: Services$e,
  "Privacy Policy": "隐私政策",
  "Terms of Services": "服务条款",
  Filter: Filter$e,
  Trashed: Trashed$e,
  "Trashed With": "包含已删除",
  "Only Trashed": "仅显示已删除",
  "Search...": "搜索...",
  Reset: Reset$e,
  Name: Name$e,
  Email: Email$e,
  Phone: Phone$e,
  Country: Country$e,
  "Create User": "创建用户",
  "First Name": "名字",
  "First name": "名字",
  "Last Name": "姓氏",
  "Last name": "姓氏",
  City: City$e,
  Address: Address$e,
  Password: Password$e,
  Role: Role$e,
  Photo: Photo$e,
  "New Tickets": "新工单",
  "Open Tickets": "已打开的工单",
  "Closed Tickets": "已关闭的工单",
  "Unassigned Tickets": "未分配的工单",
  "Ticket by department": "按部门分类的工单",
  "Ticket by type": "按类型分类的工单",
  "Top ticket creator": "工单创建者排名",
  "Ticket history": "工单历史",
  "First Response Time": "首次响应时间",
  "Last Response Time": "最后响应时间",
  Technical: Technical$e,
  Hardware: Hardware$e,
  Development: Development$e,
  Management: Management$e,
  Admin: Admin$e,
  Software: Software$e,
  Service: Service$e,
  Event: Event$e,
  Average: Average$e,
  Seconds: Seconds$e,
  "this month": "本月",
  "last month": "上月",
  Month: Month$e,
  Months: Months$d,
  Day: Day$e,
  Days: Days$d,
  Hours: Hours$e,
  Hour: Hour$d,
  Minutes: Minutes$e,
  Minute: Minute$d,
  Key: Key$d,
  Subject: Subject$e,
  "Attach files": "附件",
  Priority: Priority$e,
  "Date": "日期",
  Updated: Updated$e,
  Customer: Customer$e,
  Department: Department$d,
  "Assigned to": "分配给",
  "Ticket type": "工单类型",
  Category: Category$e,
  Created: Created$e,
  "Request Details": "请求详情",
  "Attach File": "附加文件",
  "Delete Ticket": "删除工单",
  Save: Save$e,
  "Ticket discussion": "工单讨论",
  Ticket: Ticket$d,
  FAQ: FAQ$d,
  "Create Ticket": "创建工单",
  "New Ticket": "新工单",
  "Create FAQ": "创建常见问题",
  "Filter by priority": "按优先级筛选",
  "Filter by status": "按状态筛选",
  "Delete FAQ": "删除常见问题",
  Title: Title$d,
  Details: Details$d,
  Note: Note$d,
  Submit: Submit$e,
  Cancel: Cancel$e,
  "Delete note": "删除备注",
  Organization: Organization$d,
  Province: Province$d,
  State: State$d,
  "Postal code": "邮政编码",
  "Delete Organization": "删除组织",
  "Update Organization": "更新组织",
  Delete: Delete$e,
  Update: Update$e,
  Create: Create$e,
  "Create Customer": "创建客户",
  "Manage Users": "管理用户",
  "Default Language": "默认语言",
  "Email Notifications": "邮件通知",
  "Create ticket by new customer": "新客户创建工单",
  "Create ticket from dashboard": "从仪表板创建工单",
  "Status or priority changes": "状态或优先级变更",
  "Create a new user": "创建新用户",
  "Email Template": "邮件模板",
  "SMTP Host": "SMTP 主机",
  "SMTP Port": "SMTP 端口",
  "SMTP Username": "SMTP 用户名",
  "SMTP Password": "SMTP 密码",
  Location: Location$e,
  "Phone number": "电话号码",
  "Email address": "电子邮件地址",
  "Add New": "新增",
  Privacy: Privacy$d,
  Company: Company$d,
  Subscribe: Subscribe$d,
  Login: Login$e,
  "Submit ticket": "提交工单",
  "terms and conditions": "条款和条件",
  "I agree with the": "我同意",
  "Don’t have account?": "没有账户？",
  "Remember Me": "记住我",
  "Reset Password": "重置密码",
  "Already have an account?": "已有账户？",
  "Good Morning": "早上好",
  "Good Noon": "中午好",
  "Good Evening": "晚上好",
  "Good Afternoon": "下午好",
  Hello: Hello$e,
  "Forgot your password?": "忘记密码？",
  "Send Password Reset Link": "发送密码重置链接",
  Registration: Registration$d
};
const __vite_glob_1_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Address: Address$e,
  Admin: Admin$e,
  Average: Average$e,
  Blog: Blog$e,
  Cancel: Cancel$e,
  Categories: Categories$e,
  Category: Category$e,
  Chat: Chat$e,
  City: City$e,
  Company: Company$d,
  Contact: Contact$e,
  Contacts: Contacts$e,
  Country: Country$e,
  Create: Create$e,
  Created: Created$e,
  Customer: Customer$e,
  Customers: Customers$e,
  Dashboard: Dashboard$e,
  Day: Day$e,
  Days: Days$d,
  Delete: Delete$e,
  Department: Department$d,
  Departments: Departments$e,
  Details: Details$d,
  Development: Development$e,
  Email: Email$e,
  Event: Event$e,
  FAQ: FAQ$d,
  FAQs: FAQs$e,
  Filter: Filter$e,
  Global: Global$e,
  Hardware: Hardware$e,
  Hello: Hello$e,
  Hour: Hour$d,
  Hours: Hours$e,
  Key: Key$d,
  Location: Location$e,
  Login: Login$e,
  Logout: Logout$e,
  Management: Management$e,
  Minute: Minute$d,
  Minutes: Minutes$e,
  Month: Month$e,
  Months: Months$d,
  More: More$e,
  Name: Name$e,
  Note: Note$d,
  Notes: Notes$e,
  Organization: Organization$d,
  Organizations: Organizations$e,
  Password: Password$e,
  Phone: Phone$e,
  Photo: Photo$e,
  Priorities: Priorities$e,
  Priority: Priority$e,
  Privacy: Privacy$d,
  Province: Province$d,
  Pusher: Pusher$e,
  Registration: Registration$d,
  Reset: Reset$e,
  Role: Role$e,
  Save: Save$e,
  Seconds: Seconds$e,
  Service: Service$e,
  Services: Services$e,
  Settings: Settings$e,
  Software: Software$e,
  State: State$d,
  Status: Status$e,
  Subject: Subject$e,
  Submit: Submit$e,
  Subscribe: Subscribe$d,
  Technical: Technical$e,
  Ticket: Ticket$d,
  Tickets: Tickets$e,
  Title: Title$d,
  Trashed: Trashed$e,
  Types: Types$e,
  Update: Update$e,
  Updated: Updated$e,
  Users: Users$e,
  default: cn
}, Symbol.toStringTag, { value: "Module" }));
const Dashboard$d = "Dashboard";
const Logout$d = "Abmelden";
const Tickets$d = "Tickets";
const Chat$d = "Chat";
const FAQs$d = "Häufig gestellte Fragen";
const Blog$d = "Blog";
const More$d = "Mehr";
const Notes$d = "Notizen";
const Contacts$d = "Kontakte";
const Organizations$d = "Organisationen";
const Users$d = "Benutzer";
const Customers$d = "Kunden";
const Settings$d = "Einstellungen";
const Global$d = "Global";
const Categories$d = "Kategorien";
const Status$d = "Status";
const Priorities$d = "Prioritäten";
const Departments$d = "Abteilungen";
const Types$d = "Typen";
const Pusher$d = "Pusher";
const Contact$d = "Kontakt";
const Services$d = "Dienstleistungen";
const Filter$d = "Filter";
const Trashed$d = "Gelöscht";
const Reset$d = "Zurücksetzen";
const Name$d = "Name";
const Email$d = "E-Mail";
const Phone$d = "Telefon";
const Country$d = "Land";
const City$d = "Stadt";
const Address$d = "Adresse";
const Password$d = "Passwort";
const Role$d = "Rolle";
const Photo$d = "Foto";
const Technical$d = "Technisch";
const Hardware$d = "Hardware";
const Development$d = "Entwicklung";
const Management$d = "Management";
const Admin$d = "Admin";
const Software$d = "Software";
const Service$d = "Dienst";
const Event$d = "Ereignis";
const Average$d = "Durchschnitt";
const Seconds$d = "Sekunden";
const Month$d = "Monat";
const Months$c = "Monate";
const Day$d = "Tag";
const Days$c = "Tage";
const Hours$d = "Stunden";
const Hour$c = "Stunde";
const Minutes$d = "Minuten";
const Minute$c = "Minute";
const Key$c = "Schlüssel";
const Subject$d = "Betreff";
const Priority$d = "Priorität";
const Updated$d = "Aktualisiert";
const Customer$d = "Kunde";
const Department$c = "Abteilung";
const Category$d = "Kategorie";
const Created$d = "Erstellt";
const Save$d = "Speichern";
const Ticket$c = "Ticket";
const FAQ$c = "FAQ";
const Title$c = "Titel";
const Details$c = "Details";
const Note$c = "Notiz";
const Submit$d = "Absenden";
const Cancel$d = "Abbrechen";
const Organization$c = "Organisation";
const Province$c = "Provinz";
const State$c = "Bundesland";
const Delete$d = "Löschen";
const Update$d = "Aktualisieren";
const Create$d = "Erstellen";
const Location$d = "Standort";
const Privacy$c = "Datenschutz";
const Company$c = "Unternehmen";
const Subscribe$c = "Abonnieren";
const Login$d = "Anmelden";
const Hello$d = "Hallo";
const Registration$c = "Registrierung";
const de = {
  "Edit Profile": "Profil bearbeiten",
  Dashboard: Dashboard$d,
  Logout: Logout$d,
  Tickets: Tickets$d,
  Chat: Chat$d,
  FAQs: FAQs$d,
  Blog: Blog$d,
  "Knowledge Base": "Wissensdatenbank",
  More: More$d,
  Notes: Notes$d,
  Contacts: Contacts$d,
  Organizations: Organizations$d,
  Users: Users$d,
  Customers: Customers$d,
  Settings: Settings$d,
  Global: Global$d,
  Categories: Categories$d,
  Status: Status$d,
  Priorities: Priorities$d,
  Departments: Departments$d,
  Types: Types$d,
  "Email Templates": "E-Mail-Vorlagen",
  "SMTP Mail": "SMTP-Mail",
  Pusher: Pusher$d,
  "Pusher Chat": "Pusher-Chat",
  "Front Pages": "Startseiten",
  Contact: Contact$d,
  Services: Services$d,
  "Privacy Policy": "Datenschutzrichtlinie",
  "Terms of Services": "Nutzungsbedingungen",
  Filter: Filter$d,
  Trashed: Trashed$d,
  "Trashed With": "Mit gelöscht",
  "Only Trashed": "Nur gelöscht",
  "Search...": "Suche...",
  Reset: Reset$d,
  Name: Name$d,
  Email: Email$d,
  Phone: Phone$d,
  Country: Country$d,
  "Create User": "Benutzer erstellen",
  "First Name": "Vorname",
  "First name": "Vorname",
  "Last Name": "Nachname",
  "Last name": "Nachname",
  City: City$d,
  Address: Address$d,
  Password: Password$d,
  Role: Role$d,
  Photo: Photo$d,
  "New Tickets": "Neue Tickets",
  "Open Tickets": "Offene Tickets",
  "Closed Tickets": "Geschlossene Tickets",
  "Unassigned Tickets": "Nicht zugewiesene Tickets",
  "Ticket by department": "Tickets nach Abteilung",
  "Ticket by type": "Tickets nach Typ",
  "Top ticket creator": "Top-Ticket-Ersteller",
  "Ticket history": "Ticketverlauf",
  "First Response Time": "Erste Reaktionszeit",
  "Last Response Time": "Letzte Reaktionszeit",
  Technical: Technical$d,
  Hardware: Hardware$d,
  Development: Development$d,
  Management: Management$d,
  Admin: Admin$d,
  Software: Software$d,
  Service: Service$d,
  Event: Event$d,
  Average: Average$d,
  Seconds: Seconds$d,
  "this month": "diesen Monat",
  "last month": "letzten Monat",
  Month: Month$d,
  Months: Months$c,
  Day: Day$d,
  Days: Days$c,
  Hours: Hours$d,
  Hour: Hour$c,
  Minutes: Minutes$d,
  Minute: Minute$c,
  Key: Key$c,
  Subject: Subject$d,
  "Attach files": "Dateien anhängen",
  Priority: Priority$d,
  "Date": "Datum",
  Updated: Updated$d,
  Customer: Customer$d,
  Department: Department$c,
  "Assigned to": "Zugewiesen an",
  "Ticket type": "Tickettyp",
  Category: Category$d,
  Created: Created$d,
  "Request Details": "Anfragedetails",
  "Attach File": "Datei anhängen",
  "Delete Ticket": "Ticket löschen",
  Save: Save$d,
  "Ticket discussion": "Ticket-Diskussion",
  Ticket: Ticket$c,
  FAQ: FAQ$c,
  "Create Ticket": "Ticket erstellen",
  "New Ticket": "Neues Ticket",
  "Create FAQ": "FAQ erstellen",
  "Filter by priority": "Nach Priorität filtern",
  "Filter by status": "Nach Status filtern",
  "Delete FAQ": "FAQ löschen",
  Title: Title$c,
  Details: Details$c,
  Note: Note$c,
  Submit: Submit$d,
  Cancel: Cancel$d,
  "Delete note": "Notiz löschen",
  Organization: Organization$c,
  Province: Province$c,
  State: State$c,
  "Postal code": "Postleitzahl",
  "Delete Organization": "Organisation löschen",
  "Update Organization": "Organisation aktualisieren",
  Delete: Delete$d,
  Update: Update$d,
  Create: Create$d,
  "Create Customer": "Kunde erstellen",
  "Manage Users": "Benutzer verwalten",
  "Default Language": "Standardsprache",
  "Email Notifications": "E-Mail-Benachrichtigungen",
  "Create ticket by new customer": "Ticket durch neuen Kunden erstellen",
  "Create ticket from dashboard": "Ticket vom Dashboard erstellen",
  "Status or priority changes": "Status- oder Prioritätsänderungen",
  "Create a new user": "Neuen Benutzer erstellen",
  "Email Template": "E-Mail-Vorlage",
  "SMTP Host": "SMTP-Host",
  "SMTP Port": "SMTP-Port",
  "SMTP Username": "SMTP-Benutzername",
  "SMTP Password": "SMTP-Passwort",
  Location: Location$d,
  "Phone number": "Telefonnummer",
  "Email address": "E-Mail-Adresse",
  "Add New": "Neu hinzufügen",
  Privacy: Privacy$c,
  Company: Company$c,
  Subscribe: Subscribe$c,
  Login: Login$d,
  "Submit ticket": "Ticket einreichen",
  "terms and conditions": "Allgemeine Geschäftsbedingungen",
  "I agree with the": "Ich stimme zu",
  "Don’t have account?": "Kein Konto?",
  "Remember Me": "Angemeldet bleiben",
  "Reset Password": "Passwort zurücksetzen",
  "Already have an account?": "Bereits ein Konto?",
  "Good Morning": "Guten Morgen",
  "Good Noon": "Guten Mittag",
  "Good Evening": "Guten Abend",
  "Good Afternoon": "Guten Nachmittag",
  Hello: Hello$d,
  "Forgot your password?": "Passwort vergessen?",
  "Send Password Reset Link": "Passwort-Zurücksetzungslink senden",
  Registration: Registration$c
};
const __vite_glob_1_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Address: Address$d,
  Admin: Admin$d,
  Average: Average$d,
  Blog: Blog$d,
  Cancel: Cancel$d,
  Categories: Categories$d,
  Category: Category$d,
  Chat: Chat$d,
  City: City$d,
  Company: Company$c,
  Contact: Contact$d,
  Contacts: Contacts$d,
  Country: Country$d,
  Create: Create$d,
  Created: Created$d,
  Customer: Customer$d,
  Customers: Customers$d,
  Dashboard: Dashboard$d,
  Day: Day$d,
  Days: Days$c,
  Delete: Delete$d,
  Department: Department$c,
  Departments: Departments$d,
  Details: Details$c,
  Development: Development$d,
  Email: Email$d,
  Event: Event$d,
  FAQ: FAQ$c,
  FAQs: FAQs$d,
  Filter: Filter$d,
  Global: Global$d,
  Hardware: Hardware$d,
  Hello: Hello$d,
  Hour: Hour$c,
  Hours: Hours$d,
  Key: Key$c,
  Location: Location$d,
  Login: Login$d,
  Logout: Logout$d,
  Management: Management$d,
  Minute: Minute$c,
  Minutes: Minutes$d,
  Month: Month$d,
  Months: Months$c,
  More: More$d,
  Name: Name$d,
  Note: Note$c,
  Notes: Notes$d,
  Organization: Organization$c,
  Organizations: Organizations$d,
  Password: Password$d,
  Phone: Phone$d,
  Photo: Photo$d,
  Priorities: Priorities$d,
  Priority: Priority$d,
  Privacy: Privacy$c,
  Province: Province$c,
  Pusher: Pusher$d,
  Registration: Registration$c,
  Reset: Reset$d,
  Role: Role$d,
  Save: Save$d,
  Seconds: Seconds$d,
  Service: Service$d,
  Services: Services$d,
  Settings: Settings$d,
  Software: Software$d,
  State: State$c,
  Status: Status$d,
  Subject: Subject$d,
  Submit: Submit$d,
  Subscribe: Subscribe$c,
  Technical: Technical$d,
  Ticket: Ticket$c,
  Tickets: Tickets$d,
  Title: Title$c,
  Trashed: Trashed$d,
  Types: Types$d,
  Update: Update$d,
  Updated: Updated$d,
  Users: Users$d,
  default: de
}, Symbol.toStringTag, { value: "Module" }));
const Dashboard$c = "Dashboard";
const Logout$c = "Logout";
const Tickets$c = "Tickets";
const Chat$c = "Chat";
const FAQs$c = "FAQs";
const Blog$c = "Blog";
const More$c = "More";
const Notes$c = "Notes";
const Contacts$c = "Contacts";
const Organizations$c = "Organizations";
const Users$c = "Users";
const Customers$c = "Customers";
const Settings$c = "Settings";
const Global$c = "Global";
const Categories$c = "Categories";
const Status$c = "Status";
const Priorities$c = "Priorities";
const Departments$c = "Departments";
const Types$c = "Types";
const Pusher$c = "Pusher";
const Contact$c = "Contact";
const Services$c = "Services";
const Filter$c = "Filter";
const Trashed$c = "Trashed";
const Reset$c = "Reset";
const Name$c = "Name";
const Email$c = "Email";
const Phone$c = "Phone";
const Country$c = "Country";
const City$c = "City";
const Address$c = "Address";
const Password$c = "Password";
const Role$c = "Role";
const Photo$c = "Photo";
const Technical$c = "Technical";
const Hardware$c = "Hardware";
const Development$c = "Development";
const Management$c = "Management";
const Admin$c = "Admin";
const Software$c = "Software";
const Service$c = "Service";
const Event$c = "Event";
const Average$c = "Average";
const Seconds$c = "Seconds";
const Month$c = "Month";
const Months$b = "Months";
const Day$c = "Day";
const Days$b = "Days";
const Hours$c = "Hours";
const Hour$b = "Hour";
const Minutes$c = "Minutes";
const Minute$b = "Minute";
const Key$b = "Key";
const Subject$c = "Subject";
const Priority$c = "Priority";
const Updated$c = "Updated";
const Customer$c = "Customer";
const Department$b = "Department";
const Category$c = "Category";
const Created$c = "Created";
const Save$c = "Save";
const Ticket$b = "Ticket";
const FAQ$b = "FAQ";
const Title$b = "Title";
const Type = "Type";
const Details$b = "Details";
const Note$b = "Note";
const Submit$c = "Submit";
const Cancel$c = "Cancel";
const Organization$b = "Organization";
const Province$b = "Province";
const State$b = "State";
const Delete$c = "Delete";
const Update$c = "Update";
const Create$c = "Create";
const Statuses = "Statuses";
const Slug = "Slug";
const Location$c = "Location";
const Icon$1 = "Icon";
const Tag = "Tag";
const Privacy$b = "Privacy";
const Bottom = "Bottom";
const Company$b = "Company";
const Subscribe$b = "Subscribe";
const Login$c = "Login";
const Faqs = "Faqs";
const Active = "Active";
const Inactive = "Inactive";
const Browse = "Browse";
const Knowledge = "Knowledge";
const Languages = "Languages";
const User = "User";
const Home = "Home";
const Register$1 = "Register";
const Newsletter = "Newsletter";
const Hello$c = "Hello";
const Registration$b = "Registration";
const en = {
  "Edit Profile": "Edit Profile",
  Dashboard: Dashboard$c,
  Logout: Logout$c,
  Tickets: Tickets$c,
  Chat: Chat$c,
  FAQs: FAQs$c,
  Blog: Blog$c,
  "Knowledge Base": "Knowledge Base",
  More: More$c,
  Notes: Notes$c,
  Contacts: Contacts$c,
  Organizations: Organizations$c,
  Users: Users$c,
  Customers: Customers$c,
  Settings: Settings$c,
  Global: Global$c,
  Categories: Categories$c,
  Status: Status$c,
  Priorities: Priorities$c,
  Departments: Departments$c,
  Types: Types$c,
  "Email Templates": "Email Templates",
  "SMTP Mail": "SMTP Mail",
  Pusher: Pusher$c,
  "Pusher Chat": "Pusher Chat",
  "Front Pages": "Front Pages",
  Contact: Contact$c,
  Services: Services$c,
  "Privacy Policy": "Privacy Policy",
  "Terms of Services": "Terms of Services",
  Filter: Filter$c,
  Trashed: Trashed$c,
  "Trashed With": "Trashed With",
  "Only Trashed": "Only Trashed",
  "Search...": "Search...",
  Reset: Reset$c,
  Name: Name$c,
  Email: Email$c,
  Phone: Phone$c,
  Country: Country$c,
  "Create User": "Create User",
  "First Name": "First Name",
  "First name": "First name",
  "Last Name": "Last Name",
  "Last name": "Last name",
  City: City$c,
  Address: Address$c,
  Password: Password$c,
  Role: Role$c,
  Photo: Photo$c,
  "New Tickets": "New Tickets",
  "Open Tickets": "Open Tickets",
  "Closed Tickets": "Closed Tickets",
  "Unassigned Tickets": "Unassigned Tickets",
  "Ticket by department": "Ticket by department",
  "Ticket by type": "Ticket by type",
  "Top ticket creator": "Top ticket creator",
  "Ticket history": "Ticket history",
  "First Response Time": "First Response Time",
  "Last Response Time": "Last Response Time",
  Technical: Technical$c,
  Hardware: Hardware$c,
  Development: Development$c,
  Management: Management$c,
  Admin: Admin$c,
  Software: Software$c,
  Service: Service$c,
  Event: Event$c,
  Average: Average$c,
  Seconds: Seconds$c,
  "this month": "this month",
  "last month": "last month",
  Month: Month$c,
  Months: Months$b,
  Day: Day$c,
  Days: Days$b,
  Hours: Hours$c,
  Hour: Hour$b,
  Minutes: Minutes$c,
  Minute: Minute$b,
  Key: Key$b,
  Subject: Subject$c,
  "Attach files": "Attach files",
  Priority: Priority$c,
  "Date": "Date",
  Updated: Updated$c,
  Customer: Customer$c,
  Department: Department$b,
  "Assigned to": "Assigned to",
  "Ticket type": "Ticket type",
  Category: Category$c,
  Created: Created$c,
  "Request Details": "Request Details",
  "Attach File": "Attach File",
  "Delete Ticket": "Delete Ticket",
  Save: Save$c,
  "Ticket discussion": "Ticket discussion",
  "Comment histories for this ticket will be available here.": "Comment histories for this ticket will be available here.",
  Ticket: Ticket$b,
  "Comment histories": "Comment histories",
  "Comment history": "Comment history",
  "Write a comment and press enter to send...": "Write a comment and press enter to send...",
  "Click on a conversation from left to see the histories.": "Click on a conversation from left to see the histories.",
  "Type a message...": "Type a message...",
  FAQ: FAQ$b,
  "Create Ticket": "Create Ticket",
  "New Ticket": "New Ticket",
  "Create FAQ": "Create FAQ",
  "Filter by priority": "Filter by priority",
  "Filter by status": "Filter by status",
  "Filter by role": "Filter by role",
  "Delete FAQ": "Delete FAQ",
  "Update FAQ": "Update FAQ",
  "Create Knowledge Base": "Create Knowledge Base",
  Title: Title$b,
  Type,
  Details: Details$b,
  "Delete knowledge base": "Delete knowledge base",
  "Update knowledge base": "Update knowledge base",
  Note: Note$b,
  "No ticket found.": "No ticket found.",
  "note details here...": "note details here...",
  Submit: Submit$c,
  Cancel: Cancel$c,
  "Delete note": "Delete note",
  "Create Contact": "Create Contact",
  Organization: Organization$b,
  "Delete Contact": "Delete Contact",
  "Update Contact": "Update Contact",
  "Create Organization": "Create Organization",
  Province: Province$b,
  State: State$b,
  "Postal code": "Postal code",
  "Delete Organization": "Delete Organization",
  "Update Organization": "Update Organization",
  Delete: Delete$c,
  Update: Update$c,
  Create: Create$c,
  "Create Customer": "Create Customer",
  "Manage Users": "Manage Users",
  "Delete User": "Delete User",
  "Update User": "Update User",
  "Are you sure you want to delete this user?": "Are you sure you want to delete this user?",
  "App Name": "App Name",
  "Default Language": "Default Language",
  "Email Notifications": "Email Notifications",
  "Create ticket by new customer": "Create ticket by new customer",
  "Create ticket from dashboard": "Create ticket from dashboard",
  "Notification for the first comment": "Notification for the first comment",
  "User got assigned for a task": "User got assigned for a task",
  "Status or priority changes": "Status or priority changes",
  "Create a new user": "Create a new user",
  "Cron Job Instruction": "Cron Job Instruction",
  "If you would like to send mail without delaying you need to set a cron job for that with once per minute.": "If you would like to send mail without delaying you need to set a cron job for that with once per minute.",
  "Create Category": "Create Category",
  "Create New": "Create New",
  Statuses,
  "Create Status": "Create Status",
  Slug,
  "Create Priority": "Create Priority",
  "Create Department": "Create Department",
  "Create Type": "Create Type",
  "Email Template": "Email Template",
  "Email Html": "Email Html",
  "Update Template": "Update Template",
  "SMTP Host": "SMTP Host",
  "SMTP Port": "SMTP Port",
  "SMTP Username": "SMTP Username",
  "SMTP Password": "SMTP Password",
  "Mail Encryption": "Mail Encryption",
  "From Address": "From Address",
  "From Name": "From Name",
  "Pusher App ID": "Pusher App ID",
  "Pusher App Key": "Pusher App Key",
  "Pusher App Secret": "Pusher App Secret",
  "Pusher App Cluster": "Pusher App Cluster",
  Location: Location$c,
  "Phone number": "Phone number",
  "Email address": "Email address",
  "Email Address": "Email Address",
  "Location address": "Location address",
  "Email details": "Email details",
  "Location details": "Location details",
  "Location map": "Location map",
  "Add New": "Add New",
  Icon: Icon$1,
  Tag,
  Privacy: Privacy$b,
  "List information": "List information",
  Bottom,
  "List items": "List items",
  "Page Content": "Page Content",
  "Frequently Asked Questions": "Frequently Asked Questions",
  "Contact us": "Contact us",
  "Useful Link": "Useful Link",
  Company: Company$b,
  Subscribe: Subscribe$b,
  Login: Login$c,
  "Submit ticket": "Submit ticket",
  "Login HelpDesk": "Login HelpDesk",
  Faqs,
  "Filter Ticket By": "Filter Ticket By",
  "Assign To": "Assign To",
  "No conversation found.": "No conversation found.",
  "No faqs found.": "No faqs found.",
  "Faq Description": "Faq Description",
  Active,
  Inactive,
  Browse,
  Knowledge,
  Languages,
  User,
  "No languages found.": "No languages found.",
  "User roles": "User roles",
  "No organizations found.": "No organizations found.",
  Home,
  "Create a ticket": "Create a ticket",
  "Open a ticket": "Open a ticket",
  "Select a category": "Select a category",
  "Select a type": "Select a type",
  "Select a department": "Select a department",
  "Start Chat": "Start Chat",
  "Confirm Password": "Confirm Password",
  "No customers found.": "No customers found.",
  "No knowledge base found.": "No knowledge base found.",
  "Create Post": "Create Post",
  "Feature image": "Feature image",
  "Select type": "Select type",
  "Create a new post": "Create a new post",
  "No post base found.": "No post base found.",
  "Is Active": "Is Active",
  "All Posts": "All Posts",
  "Search your query in the FAQ items...": "Search your query in the FAQ items...",
  Register: Register$1,
  "Useful Links": "Useful Links",
  Newsletter,
  "Your email address": "Your email address",
  "Join our newsletter service.": "Join our newsletter service.",
  "terms and conditions": "terms and conditions",
  "I agree with the": "I agree with the",
  "Don’t have account?": "Don’t have account?",
  "Remember Me": "Remember Me",
  "Reset Password": "Reset Password",
  "Already have an account?": "Already have an account?",
  "Good Morning": "Good Morning",
  "Good Noon": "Good Noon",
  "Good Evening": "Good Evening",
  "Good Afternoon": "Good Afternoon",
  Hello: Hello$c,
  "Forgot your password?": "Forgot your password?",
  "Send Password Reset Link": "Send Password Reset Link",
  Registration: Registration$b
};
const __vite_glob_1_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Active,
  Address: Address$c,
  Admin: Admin$c,
  Average: Average$c,
  Blog: Blog$c,
  Bottom,
  Browse,
  Cancel: Cancel$c,
  Categories: Categories$c,
  Category: Category$c,
  Chat: Chat$c,
  City: City$c,
  Company: Company$b,
  Contact: Contact$c,
  Contacts: Contacts$c,
  Country: Country$c,
  Create: Create$c,
  Created: Created$c,
  Customer: Customer$c,
  Customers: Customers$c,
  Dashboard: Dashboard$c,
  Day: Day$c,
  Days: Days$b,
  Delete: Delete$c,
  Department: Department$b,
  Departments: Departments$c,
  Details: Details$b,
  Development: Development$c,
  Email: Email$c,
  Event: Event$c,
  FAQ: FAQ$b,
  FAQs: FAQs$c,
  Faqs,
  Filter: Filter$c,
  Global: Global$c,
  Hardware: Hardware$c,
  Hello: Hello$c,
  Home,
  Hour: Hour$b,
  Hours: Hours$c,
  Icon: Icon$1,
  Inactive,
  Key: Key$b,
  Knowledge,
  Languages,
  Location: Location$c,
  Login: Login$c,
  Logout: Logout$c,
  Management: Management$c,
  Minute: Minute$b,
  Minutes: Minutes$c,
  Month: Month$c,
  Months: Months$b,
  More: More$c,
  Name: Name$c,
  Newsletter,
  Note: Note$b,
  Notes: Notes$c,
  Organization: Organization$b,
  Organizations: Organizations$c,
  Password: Password$c,
  Phone: Phone$c,
  Photo: Photo$c,
  Priorities: Priorities$c,
  Priority: Priority$c,
  Privacy: Privacy$b,
  Province: Province$b,
  Pusher: Pusher$c,
  Register: Register$1,
  Registration: Registration$b,
  Reset: Reset$c,
  Role: Role$c,
  Save: Save$c,
  Seconds: Seconds$c,
  Service: Service$c,
  Services: Services$c,
  Settings: Settings$c,
  Slug,
  Software: Software$c,
  State: State$b,
  Status: Status$c,
  Statuses,
  Subject: Subject$c,
  Submit: Submit$c,
  Subscribe: Subscribe$b,
  Tag,
  Technical: Technical$c,
  Ticket: Ticket$b,
  Tickets: Tickets$c,
  Title: Title$b,
  Trashed: Trashed$c,
  Type,
  Types: Types$c,
  Update: Update$c,
  Updated: Updated$c,
  User,
  Users: Users$c,
  default: en
}, Symbol.toStringTag, { value: "Module" }));
const Dashboard$b = "Tablero";
const Logout$b = "Cerrar sesión";
const Tickets$b = "Tickets";
const Chat$b = "Chat";
const FAQs$b = "Preguntas frecuentes";
const Blog$b = "Blog";
const More$b = "Más";
const Notes$b = "Notas";
const Contacts$b = "Contactos";
const Organizations$b = "Organizaciones";
const Users$b = "Usuarios";
const Customers$b = "Clientes";
const Settings$b = "Configuraciones";
const Global$b = "Global";
const Categories$b = "Categorías";
const Status$b = "Estado";
const Priorities$b = "Prioridades";
const Departments$b = "Departamentos";
const Types$b = "Tipos";
const Pusher$b = "Pusher";
const Contact$b = "Contacto";
const Services$b = "Servicios";
const Filter$b = "Filtrar";
const Trashed$b = "Eliminado";
const Reset$b = "Restablecer";
const Name$b = "Nombre";
const Email$b = "Correo electrónico";
const Phone$b = "Teléfono";
const Country$b = "País";
const City$b = "Ciudad";
const Address$b = "Dirección";
const Password$b = "Contraseña";
const Role$b = "Rol";
const Photo$b = "Foto";
const Technical$b = "Técnico";
const Hardware$b = "Hardware";
const Development$b = "Desarrollo";
const Management$b = "Gestión";
const Admin$b = "Administrador";
const Software$b = "Software";
const Service$b = "Servicio";
const Event$b = "Evento";
const Average$b = "Promedio";
const Seconds$b = "Segundos";
const Month$b = "Mes";
const Months$a = "Meses";
const Day$b = "Día";
const Days$a = "Días";
const Hours$b = "Horas";
const Hour$a = "Hora";
const Minutes$b = "Minutos";
const Minute$a = "Minuto";
const Key$a = "Clave";
const Subject$b = "Asunto";
const Priority$b = "Prioridad";
const Updated$b = "Actualizado";
const Customer$b = "Cliente";
const Department$a = "Departamento";
const Category$b = "Categoría";
const Created$b = "Creado";
const Save$b = "Guardar";
const Ticket$a = "Ticket";
const FAQ$a = "Preguntas frecuentes";
const Title$a = "Título";
const Details$a = "Detalles";
const Note$a = "Nota";
const Submit$b = "Enviar";
const Cancel$b = "Cancelar";
const Organization$a = "Organización";
const Province$a = "Provincia";
const State$a = "Estado";
const Delete$b = "Eliminar";
const Update$b = "Actualizar";
const Create$b = "Crear";
const Location$b = "Ubicación";
const Privacy$a = "Privacidad";
const Company$a = "Empresa";
const Subscribe$a = "Suscribirse";
const Login$b = "Iniciar sesión";
const Hello$b = "Hola";
const Registration$a = "Registro";
const es = {
  "Edit Profile": "Editar perfil",
  Dashboard: Dashboard$b,
  Logout: Logout$b,
  Tickets: Tickets$b,
  Chat: Chat$b,
  FAQs: FAQs$b,
  Blog: Blog$b,
  "Knowledge Base": "Base de conocimientos",
  More: More$b,
  Notes: Notes$b,
  Contacts: Contacts$b,
  Organizations: Organizations$b,
  Users: Users$b,
  Customers: Customers$b,
  Settings: Settings$b,
  Global: Global$b,
  Categories: Categories$b,
  Status: Status$b,
  Priorities: Priorities$b,
  Departments: Departments$b,
  Types: Types$b,
  "Email Templates": "Plantillas de correo",
  "SMTP Mail": "Correo SMTP",
  Pusher: Pusher$b,
  "Pusher Chat": "Chat de Pusher",
  "Front Pages": "Páginas principales",
  Contact: Contact$b,
  Services: Services$b,
  "Privacy Policy": "Política de privacidad",
  "Terms of Services": "Términos de servicio",
  Filter: Filter$b,
  Trashed: Trashed$b,
  "Trashed With": "Eliminado con",
  "Only Trashed": "Solo eliminados",
  "Search...": "Buscar...",
  Reset: Reset$b,
  Name: Name$b,
  Email: Email$b,
  Phone: Phone$b,
  Country: Country$b,
  "Create User": "Crear usuario",
  "First Name": "Nombre",
  "First name": "Nombre",
  "Last Name": "Apellido",
  "Last name": "Apellido",
  City: City$b,
  Address: Address$b,
  Password: Password$b,
  Role: Role$b,
  Photo: Photo$b,
  "New Tickets": "Nuevos tickets",
  "Open Tickets": "Tickets abiertos",
  "Closed Tickets": "Tickets cerrados",
  "Unassigned Tickets": "Tickets sin asignar",
  "Ticket by department": "Tickets por departamento",
  "Ticket by type": "Tickets por tipo",
  "Top ticket creator": "Creador de tickets destacado",
  "Ticket history": "Historial de tickets",
  "First Response Time": "Tiempo de primera respuesta",
  "Last Response Time": "Tiempo de última respuesta",
  Technical: Technical$b,
  Hardware: Hardware$b,
  Development: Development$b,
  Management: Management$b,
  Admin: Admin$b,
  Software: Software$b,
  Service: Service$b,
  Event: Event$b,
  Average: Average$b,
  Seconds: Seconds$b,
  "this month": "este mes",
  "last month": "el mes pasado",
  Month: Month$b,
  Months: Months$a,
  Day: Day$b,
  Days: Days$a,
  Hours: Hours$b,
  Hour: Hour$a,
  Minutes: Minutes$b,
  Minute: Minute$a,
  Key: Key$a,
  Subject: Subject$b,
  "Attach files": "Adjuntar archivos",
  Priority: Priority$b,
  "Date": "Fecha",
  Updated: Updated$b,
  Customer: Customer$b,
  Department: Department$a,
  "Assigned to": "Asignado a",
  "Ticket type": "Tipo de ticket",
  Category: Category$b,
  Created: Created$b,
  "Request Details": "Detalles de la solicitud",
  "Attach File": "Adjuntar archivo",
  "Delete Ticket": "Eliminar ticket",
  Save: Save$b,
  "Ticket discussion": "Discusión del ticket",
  Ticket: Ticket$a,
  FAQ: FAQ$a,
  "Create Ticket": "Crear ticket",
  "New Ticket": "Nuevo ticket",
  "Create FAQ": "Crear pregunta frecuente",
  "Filter by priority": "Filtrar por prioridad",
  "Filter by status": "Filtrar por estado",
  "Delete FAQ": "Eliminar pregunta frecuente",
  Title: Title$a,
  Details: Details$a,
  Note: Note$a,
  Submit: Submit$b,
  Cancel: Cancel$b,
  "Delete note": "Eliminar nota",
  Organization: Organization$a,
  Province: Province$a,
  State: State$a,
  "Postal code": "Código postal",
  "Delete Organization": "Eliminar organización",
  "Update Organization": "Actualizar organización",
  Delete: Delete$b,
  Update: Update$b,
  Create: Create$b,
  "Create Customer": "Crear cliente",
  "Manage Users": "Administrar usuarios",
  "Default Language": "Idioma predeterminado",
  "Email Notifications": "Notificaciones por correo",
  "Create ticket by new customer": "Crear ticket para nuevo cliente",
  "Create ticket from dashboard": "Crear ticket desde el tablero",
  "Status or priority changes": "Cambio de estado o prioridad",
  "Create a new user": "Crear un nuevo usuario",
  "Email Template": "Plantilla de correo",
  "SMTP Host": "Servidor SMTP",
  "SMTP Port": "Puerto SMTP",
  "SMTP Username": "Usuario SMTP",
  "SMTP Password": "Contraseña SMTP",
  Location: Location$b,
  "Phone number": "Número de teléfono",
  "Email address": "Correo electrónico",
  "Add New": "Agregar nuevo",
  Privacy: Privacy$a,
  Company: Company$a,
  Subscribe: Subscribe$a,
  Login: Login$b,
  "Submit ticket": "Enviar ticket",
  "terms and conditions": "términos y condiciones",
  "I agree with the": "Estoy de acuerdo con",
  "Don’t have account?": "¿No tienes cuenta?",
  "Remember Me": "Recuérdame",
  "Reset Password": "Restablecer contraseña",
  "Already have an account?": "¿Ya tienes una cuenta?",
  "Good Morning": "Buenos días",
  "Good Noon": "Buenas tardes",
  "Good Evening": "Buenas noches",
  "Good Afternoon": "Buenas tardes",
  Hello: Hello$b,
  "Forgot your password?": "¿Olvidaste tu contraseña?",
  "Send Password Reset Link": "Enviar enlace para restablecer contraseña",
  Registration: Registration$a
};
const __vite_glob_1_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Address: Address$b,
  Admin: Admin$b,
  Average: Average$b,
  Blog: Blog$b,
  Cancel: Cancel$b,
  Categories: Categories$b,
  Category: Category$b,
  Chat: Chat$b,
  City: City$b,
  Company: Company$a,
  Contact: Contact$b,
  Contacts: Contacts$b,
  Country: Country$b,
  Create: Create$b,
  Created: Created$b,
  Customer: Customer$b,
  Customers: Customers$b,
  Dashboard: Dashboard$b,
  Day: Day$b,
  Days: Days$a,
  Delete: Delete$b,
  Department: Department$a,
  Departments: Departments$b,
  Details: Details$a,
  Development: Development$b,
  Email: Email$b,
  Event: Event$b,
  FAQ: FAQ$a,
  FAQs: FAQs$b,
  Filter: Filter$b,
  Global: Global$b,
  Hardware: Hardware$b,
  Hello: Hello$b,
  Hour: Hour$a,
  Hours: Hours$b,
  Key: Key$a,
  Location: Location$b,
  Login: Login$b,
  Logout: Logout$b,
  Management: Management$b,
  Minute: Minute$a,
  Minutes: Minutes$b,
  Month: Month$b,
  Months: Months$a,
  More: More$b,
  Name: Name$b,
  Note: Note$a,
  Notes: Notes$b,
  Organization: Organization$a,
  Organizations: Organizations$b,
  Password: Password$b,
  Phone: Phone$b,
  Photo: Photo$b,
  Priorities: Priorities$b,
  Priority: Priority$b,
  Privacy: Privacy$a,
  Province: Province$a,
  Pusher: Pusher$b,
  Registration: Registration$a,
  Reset: Reset$b,
  Role: Role$b,
  Save: Save$b,
  Seconds: Seconds$b,
  Service: Service$b,
  Services: Services$b,
  Settings: Settings$b,
  Software: Software$b,
  State: State$a,
  Status: Status$b,
  Subject: Subject$b,
  Submit: Submit$b,
  Subscribe: Subscribe$a,
  Technical: Technical$b,
  Ticket: Ticket$a,
  Tickets: Tickets$b,
  Title: Title$a,
  Trashed: Trashed$b,
  Types: Types$b,
  Update: Update$b,
  Updated: Updated$b,
  Users: Users$b,
  default: es
}, Symbol.toStringTag, { value: "Module" }));
const Dashboard$a = "Tableau de bord";
const Logout$a = "Se déconnecter";
const Tickets$a = "Tickets";
const Chat$a = "Chat";
const FAQs$a = "FAQs";
const Blog$a = "Blog";
const More$a = "Plus";
const Notes$a = "Notes";
const Contacts$a = "Contacts";
const Organizations$a = "Organisations";
const Users$a = "Utilisateurs";
const Customers$a = "Clients";
const Settings$a = "Paramètres";
const Global$a = "Global";
const Categories$a = "Catégories";
const Status$a = "Statut";
const Priorities$a = "Priorités";
const Departments$a = "Départements";
const Types$a = "Types";
const Pusher$a = "Pusher";
const Contact$a = "Contact";
const Services$a = "Services";
const Filter$a = "Filtrer";
const Trashed$a = "Supprimé";
const Reset$a = "Réinitialiser";
const Name$a = "Nom";
const Email$a = "E-mail";
const Phone$a = "Téléphone";
const Country$a = "Pays";
const City$a = "Ville";
const Address$a = "Adresse";
const Password$a = "Mot de passe";
const Role$a = "Rôle";
const Photo$a = "Photo";
const Technical$a = "Technique";
const Hardware$a = "Matériel";
const Development$a = "Développement";
const Management$a = "Gestion";
const Admin$a = "Administrateur";
const Software$a = "Logiciel";
const Service$a = "Service";
const Event$a = "Événement";
const Average$a = "Moyenne";
const Seconds$a = "Secondes";
const Month$a = "Mois";
const Months$9 = "Mois";
const Day$a = "Jour";
const Days$9 = "Jours";
const Hours$a = "Heures";
const Hour$9 = "Heure";
const Minutes$a = "Minutes";
const Minute$9 = "Minute";
const Key$9 = "Clé";
const Subject$a = "Sujet";
const Priority$a = "Priorité";
const Updated$a = "Mis à jour";
const Customer$a = "Client";
const Department$9 = "Département";
const Category$a = "Catégorie";
const Created$a = "Créé";
const Save$a = "Enregistrer";
const Ticket$9 = "Ticket";
const FAQ$9 = "FAQ";
const Title$9 = "Titre";
const Details$9 = "Détails";
const Note$9 = "Note";
const Submit$a = "Soumettre";
const Cancel$a = "Annuler";
const Organization$9 = "Organisation";
const Province$9 = "Province";
const State$9 = "État";
const Delete$a = "Supprimer";
const Update$a = "Mettre à jour";
const Create$a = "Créer";
const Location$a = "Emplacement";
const Privacy$9 = "Confidentialité";
const Company$9 = "Entreprise";
const Subscribe$9 = "S'abonner";
const Login$a = "Connexion";
const Hello$a = "Hello";
const Registration$9 = "Inscription";
const fr = {
  "Edit Profile": "Modifier le profil",
  Dashboard: Dashboard$a,
  Logout: Logout$a,
  Tickets: Tickets$a,
  Chat: Chat$a,
  FAQs: FAQs$a,
  Blog: Blog$a,
  "Knowledge Base": "Base de connaissances",
  More: More$a,
  Notes: Notes$a,
  Contacts: Contacts$a,
  Organizations: Organizations$a,
  Users: Users$a,
  Customers: Customers$a,
  Settings: Settings$a,
  Global: Global$a,
  Categories: Categories$a,
  Status: Status$a,
  Priorities: Priorities$a,
  Departments: Departments$a,
  Types: Types$a,
  "Email Templates": "Modèles d'email",
  "SMTP Mail": "Courrier SMTP",
  Pusher: Pusher$a,
  "Pusher Chat": "Chat Pusher",
  "Front Pages": "Pages principales",
  Contact: Contact$a,
  Services: Services$a,
  "Privacy Policy": "Politique de confidentialité",
  "Terms of Services": "Conditions d'utilisation",
  Filter: Filter$a,
  Trashed: Trashed$a,
  "Trashed With": "Supprimé avec",
  "Only Trashed": "Uniquement supprimé",
  "Search...": "Rechercher...",
  Reset: Reset$a,
  Name: Name$a,
  Email: Email$a,
  Phone: Phone$a,
  Country: Country$a,
  "Create User": "Créer un utilisateur",
  "First Name": "Prénom",
  "First name": "Prénom",
  "Last Name": "Nom de famille",
  "Last name": "Nom de famille",
  City: City$a,
  Address: Address$a,
  Password: Password$a,
  Role: Role$a,
  Photo: Photo$a,
  "New Tickets": "Nouveaux tickets",
  "Open Tickets": "Tickets ouverts",
  "Closed Tickets": "Tickets fermés",
  "Unassigned Tickets": "Tickets non attribués",
  "Ticket by department": "Ticket par département",
  "Ticket by type": "Ticket par type",
  "Top ticket creator": "Meilleur créateur de tickets",
  "Ticket history": "Historique des tickets",
  "First Response Time": "Temps de première réponse",
  "Last Response Time": "Temps de dernière réponse",
  Technical: Technical$a,
  Hardware: Hardware$a,
  Development: Development$a,
  Management: Management$a,
  Admin: Admin$a,
  Software: Software$a,
  Service: Service$a,
  Event: Event$a,
  Average: Average$a,
  Seconds: Seconds$a,
  "this month": "ce mois-ci",
  "last month": "le mois dernier",
  Month: Month$a,
  Months: Months$9,
  Day: Day$a,
  Days: Days$9,
  Hours: Hours$a,
  Hour: Hour$9,
  Minutes: Minutes$a,
  Minute: Minute$9,
  Key: Key$9,
  Subject: Subject$a,
  "Attach files": "Joindre des fichiers",
  Priority: Priority$a,
  "Date": "Date",
  Updated: Updated$a,
  Customer: Customer$a,
  Department: Department$9,
  "Assigned to": "Attribué à",
  "Ticket type": "Type de ticket",
  Category: Category$a,
  Created: Created$a,
  "Request Details": "Détails de la demande",
  "Attach File": "Joindre un fichier",
  "Delete Ticket": "Supprimer le ticket",
  Save: Save$a,
  "Ticket discussion": "Discussion sur le ticket",
  Ticket: Ticket$9,
  FAQ: FAQ$9,
  "Create Ticket": "Créer un ticket",
  "New Ticket": "Nouveau ticket",
  "Create FAQ": "Créer une FAQ",
  "Filter by priority": "Filtrer par priorité",
  "Filter by status": "Filtrer par statut",
  "Delete FAQ": "Supprimer la FAQ",
  Title: Title$9,
  Details: Details$9,
  Note: Note$9,
  Submit: Submit$a,
  Cancel: Cancel$a,
  "Delete note": "Supprimer la note",
  Organization: Organization$9,
  Province: Province$9,
  State: State$9,
  "Postal code": "Code postal",
  "Delete Organization": "Supprimer l'organisation",
  "Update Organization": "Mettre à jour l'organisation",
  Delete: Delete$a,
  Update: Update$a,
  Create: Create$a,
  "Create Customer": "Créer un client",
  "Manage Users": "Gérer les utilisateurs",
  "Default Language": "Langue par défaut",
  "Email Notifications": "Notifications par e-mail",
  "Create ticket by new customer": "Créer un ticket par un nouveau client",
  "Create ticket from dashboard": "Créer un ticket depuis le tableau de bord",
  "Status or priority changes": "Changement de statut ou de priorité",
  "Create a new user": "Créer un nouvel utilisateur",
  "Email Template": "Modèle d'e-mail",
  "SMTP Host": "Hôte SMTP",
  "SMTP Port": "Port SMTP",
  "SMTP Username": "Nom d'utilisateur SMTP",
  "SMTP Password": "Mot de passe SMTP",
  Location: Location$a,
  "Phone number": "Numéro de téléphone",
  "Email address": "Adresse e-mail",
  "Add New": "Ajouter",
  Privacy: Privacy$9,
  Company: Company$9,
  Subscribe: Subscribe$9,
  Login: Login$a,
  "Submit ticket": "Soumettre un ticket",
  "terms and conditions": "termes et conditions",
  "I agree with the": "J'accepte les",
  "Don’t have account?": "Vous n'avez pas de compte?",
  "Remember Me": "Se souvenir de moi",
  "Reset Password": "Réinitialisation du mot de passe",
  "Already have an account?": "Vous avez déjà un compte ?",
  "Good Morning": "Bonjour",
  "Good Noon": "Bon après-midi",
  "Good Evening": "Bonsoir",
  "Good Afternoon": "Bon après-midi",
  Hello: Hello$a,
  "Forgot your password?": "Mot de passe oublié?",
  "Send Password Reset Link": "Envoyer le lien de réinitialisation du mot de passe",
  Registration: Registration$9
};
const __vite_glob_1_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Address: Address$a,
  Admin: Admin$a,
  Average: Average$a,
  Blog: Blog$a,
  Cancel: Cancel$a,
  Categories: Categories$a,
  Category: Category$a,
  Chat: Chat$a,
  City: City$a,
  Company: Company$9,
  Contact: Contact$a,
  Contacts: Contacts$a,
  Country: Country$a,
  Create: Create$a,
  Created: Created$a,
  Customer: Customer$a,
  Customers: Customers$a,
  Dashboard: Dashboard$a,
  Day: Day$a,
  Days: Days$9,
  Delete: Delete$a,
  Department: Department$9,
  Departments: Departments$a,
  Details: Details$9,
  Development: Development$a,
  Email: Email$a,
  Event: Event$a,
  FAQ: FAQ$9,
  FAQs: FAQs$a,
  Filter: Filter$a,
  Global: Global$a,
  Hardware: Hardware$a,
  Hello: Hello$a,
  Hour: Hour$9,
  Hours: Hours$a,
  Key: Key$9,
  Location: Location$a,
  Login: Login$a,
  Logout: Logout$a,
  Management: Management$a,
  Minute: Minute$9,
  Minutes: Minutes$a,
  Month: Month$a,
  Months: Months$9,
  More: More$a,
  Name: Name$a,
  Note: Note$9,
  Notes: Notes$a,
  Organization: Organization$9,
  Organizations: Organizations$a,
  Password: Password$a,
  Phone: Phone$a,
  Photo: Photo$a,
  Priorities: Priorities$a,
  Priority: Priority$a,
  Privacy: Privacy$9,
  Province: Province$9,
  Pusher: Pusher$a,
  Registration: Registration$9,
  Reset: Reset$a,
  Role: Role$a,
  Save: Save$a,
  Seconds: Seconds$a,
  Service: Service$a,
  Services: Services$a,
  Settings: Settings$a,
  Software: Software$a,
  State: State$9,
  Status: Status$a,
  Subject: Subject$a,
  Submit: Submit$a,
  Subscribe: Subscribe$9,
  Technical: Technical$a,
  Ticket: Ticket$9,
  Tickets: Tickets$a,
  Title: Title$9,
  Trashed: Trashed$a,
  Types: Types$a,
  Update: Update$a,
  Updated: Updated$a,
  Users: Users$a,
  default: fr
}, Symbol.toStringTag, { value: "Module" }));
const Dashboard$9 = "לוח מחוונים";
const Logout$9 = "התנתקות";
const Tickets$9 = "כרטיסים";
const Chat$9 = "צ'אט";
const FAQs$9 = "שאלות נפוצות";
const Blog$9 = "בלוג";
const More$9 = "עוד";
const Notes$9 = "הערות";
const Contacts$9 = "אנשי קשר";
const Organizations$9 = "ארגונים";
const Users$9 = "משתמשים";
const Customers$9 = "לקוחות";
const Settings$9 = "הגדרות";
const Global$9 = "גלובלי";
const Categories$9 = "קטגוריות";
const Status$9 = "סטטוס";
const Priorities$9 = "עדיפויות";
const Departments$9 = "מחלקות";
const Types$9 = "סוגים";
const Pusher$9 = "פושר";
const Contact$9 = "צור קשר";
const Services$9 = "שירותים";
const Filter$9 = "סינון";
const Trashed$9 = "נמחק";
const Reset$9 = "איפוס";
const Name$9 = "שם";
const Email$9 = "אימייל";
const Phone$9 = "טלפון";
const Country$9 = "מדינה";
const City$9 = "עיר";
const Address$9 = "כתובת";
const Password$9 = "סיסמה";
const Role$9 = "תפקיד";
const Photo$9 = "תמונה";
const Technical$9 = "טכני";
const Hardware$9 = "חומרה";
const Development$9 = "פיתוח";
const Management$9 = "ניהול";
const Admin$9 = "מנהל";
const Software$9 = "תוכנה";
const Service$9 = "שירות";
const Event$9 = "אירוע";
const Average$9 = "ממוצע";
const Seconds$9 = "שניות";
const Month$9 = "חודש";
const Months$8 = "חודשים";
const Day$9 = "יום";
const Days$8 = "ימים";
const Hours$9 = "שעות";
const Hour$8 = "שעה";
const Minutes$9 = "דקות";
const Minute$8 = "דקה";
const Key$8 = "מפתח";
const Subject$9 = "נושא";
const Priority$9 = "עדיפות";
const Updated$9 = "עודכן";
const Customer$9 = "לקוח";
const Department$8 = "מחלקה";
const Category$9 = "קטגוריה";
const Created$9 = "נוצר";
const Save$9 = "שמור";
const Ticket$8 = "כרטיס";
const FAQ$8 = "שאלות נפוצות";
const Title$8 = "כותרת";
const Details$8 = "פרטים";
const Note$8 = "הערה";
const Submit$9 = "שלח";
const Cancel$9 = "ביטול";
const Organization$8 = "ארגון";
const Province$8 = "מחוז";
const State$8 = "מדינה";
const Delete$9 = "מחק";
const Update$9 = "עדכן";
const Create$9 = "צור";
const Location$9 = "מיקום";
const Privacy$8 = "פרטיות";
const Company$8 = "חברה";
const Subscribe$8 = "הירשם";
const Login$9 = "התחבר";
const Hello$9 = "שלום";
const Registration$8 = "הרשמה";
const he = {
  "Edit Profile": "ערוך פרופיל",
  Dashboard: Dashboard$9,
  Logout: Logout$9,
  Tickets: Tickets$9,
  Chat: Chat$9,
  FAQs: FAQs$9,
  Blog: Blog$9,
  "Knowledge Base": "בסיס ידע",
  More: More$9,
  Notes: Notes$9,
  Contacts: Contacts$9,
  Organizations: Organizations$9,
  Users: Users$9,
  Customers: Customers$9,
  Settings: Settings$9,
  Global: Global$9,
  Categories: Categories$9,
  Status: Status$9,
  Priorities: Priorities$9,
  Departments: Departments$9,
  Types: Types$9,
  "Email Templates": "תבניות אימייל",
  "SMTP Mail": "דואר SMTP",
  Pusher: Pusher$9,
  "Pusher Chat": "צ'אט פושר",
  "Front Pages": "עמודים ראשיים",
  Contact: Contact$9,
  Services: Services$9,
  "Privacy Policy": "מדיניות פרטיות",
  "Terms of Services": "תנאי שירות",
  Filter: Filter$9,
  Trashed: Trashed$9,
  "Trashed With": "נמחק עם",
  "Only Trashed": "רק נמחק",
  "Search...": "חיפוש...",
  Reset: Reset$9,
  Name: Name$9,
  Email: Email$9,
  Phone: Phone$9,
  Country: Country$9,
  "Create User": "צור משתמש",
  "First Name": "שם פרטי",
  "First name": "שם פרטי",
  "Last Name": "שם משפחה",
  "Last name": "שם משפחה",
  City: City$9,
  Address: Address$9,
  Password: Password$9,
  Role: Role$9,
  Photo: Photo$9,
  "New Tickets": "כרטיסים חדשים",
  "Open Tickets": "כרטיסים פתוחים",
  "Closed Tickets": "כרטיסים סגורים",
  "Unassigned Tickets": "כרטיסים לא מוקצים",
  "Ticket by department": "כרטיס לפי מחלקה",
  "Ticket by type": "כרטיס לפי סוג",
  "Top ticket creator": "יוצר הכרטיסים המוביל",
  "Ticket history": "היסטוריית כרטיסים",
  "First Response Time": "זמן תגובה ראשוני",
  "Last Response Time": "זמן תגובה אחרון",
  Technical: Technical$9,
  Hardware: Hardware$9,
  Development: Development$9,
  Management: Management$9,
  Admin: Admin$9,
  Software: Software$9,
  Service: Service$9,
  Event: Event$9,
  Average: Average$9,
  Seconds: Seconds$9,
  "this month": "החודש",
  "last month": "החודש שעבר",
  Month: Month$9,
  Months: Months$8,
  Day: Day$9,
  Days: Days$8,
  Hours: Hours$9,
  Hour: Hour$8,
  Minutes: Minutes$9,
  Minute: Minute$8,
  Key: Key$8,
  Subject: Subject$9,
  "Attach files": "צרף קבצים",
  Priority: Priority$9,
  "Date": "תאריך",
  Updated: Updated$9,
  Customer: Customer$9,
  Department: Department$8,
  "Assigned to": "מוקצה ל",
  "Ticket type": "סוג כרטיס",
  Category: Category$9,
  Created: Created$9,
  "Request Details": "פרטי בקשה",
  "Attach File": "צרף קובץ",
  "Delete Ticket": "מחק כרטיס",
  Save: Save$9,
  "Ticket discussion": "דיון בכרטיס",
  Ticket: Ticket$8,
  FAQ: FAQ$8,
  "Create Ticket": "צור כרטיס",
  "New Ticket": "כרטיס חדש",
  "Create FAQ": "צור שאלות נפוצות",
  "Filter by priority": "סינון לפי עדיפות",
  "Filter by status": "סינון לפי סטטוס",
  "Delete FAQ": "מחק שאלות נפוצות",
  Title: Title$8,
  Details: Details$8,
  Note: Note$8,
  Submit: Submit$9,
  Cancel: Cancel$9,
  "Delete note": "מחק הערה",
  Organization: Organization$8,
  Province: Province$8,
  State: State$8,
  "Postal code": "מיקוד",
  "Delete Organization": "מחק ארגון",
  "Update Organization": "עדכן ארגון",
  Delete: Delete$9,
  Update: Update$9,
  Create: Create$9,
  "Create Customer": "צור לקוח",
  "Manage Users": "ניהול משתמשים",
  "Default Language": "שפת ברירת מחדל",
  "Email Notifications": "התראות במייל",
  "Create ticket by new customer": "צור כרטיס ללקוח חדש",
  "Create ticket from dashboard": "צור כרטיס מלוח המחוונים",
  "Status or priority changes": "שינוי סטטוס או עדיפות",
  "Create a new user": "צור משתמש חדש",
  "Email Template": "תבנית אימייל",
  "SMTP Host": "שרת SMTP",
  "SMTP Port": "יציאת SMTP",
  "SMTP Username": "שם משתמש SMTP",
  "SMTP Password": "סיסמת SMTP",
  Location: Location$9,
  "Phone number": "מספר טלפון",
  "Email address": "כתובת אימייל",
  "Add New": "הוסף חדש",
  Privacy: Privacy$8,
  Company: Company$8,
  Subscribe: Subscribe$8,
  Login: Login$9,
  "Submit ticket": "שלח כרטיס",
  "terms and conditions": "תנאים והגבלות",
  "I agree with the": "אני מסכים ל",
  "Don’t have account?": "אין לך חשבון?",
  "Remember Me": "זכור אותי",
  "Reset Password": "אפס סיסמה",
  "Already have an account?": "כבר יש לך חשבון?",
  "Good Morning": "בוקר טוב",
  "Good Noon": "צהריים טובים",
  "Good Evening": "ערב טוב",
  "Good Afternoon": "אחר הצהריים טובים",
  Hello: Hello$9,
  "Forgot your password?": "שכחת את הסיסמה שלך?",
  "Send Password Reset Link": "שלח קישור לאיפוס סיסמה",
  Registration: Registration$8
};
const __vite_glob_1_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Address: Address$9,
  Admin: Admin$9,
  Average: Average$9,
  Blog: Blog$9,
  Cancel: Cancel$9,
  Categories: Categories$9,
  Category: Category$9,
  Chat: Chat$9,
  City: City$9,
  Company: Company$8,
  Contact: Contact$9,
  Contacts: Contacts$9,
  Country: Country$9,
  Create: Create$9,
  Created: Created$9,
  Customer: Customer$9,
  Customers: Customers$9,
  Dashboard: Dashboard$9,
  Day: Day$9,
  Days: Days$8,
  Delete: Delete$9,
  Department: Department$8,
  Departments: Departments$9,
  Details: Details$8,
  Development: Development$9,
  Email: Email$9,
  Event: Event$9,
  FAQ: FAQ$8,
  FAQs: FAQs$9,
  Filter: Filter$9,
  Global: Global$9,
  Hardware: Hardware$9,
  Hello: Hello$9,
  Hour: Hour$8,
  Hours: Hours$9,
  Key: Key$8,
  Location: Location$9,
  Login: Login$9,
  Logout: Logout$9,
  Management: Management$9,
  Minute: Minute$8,
  Minutes: Minutes$9,
  Month: Month$9,
  Months: Months$8,
  More: More$9,
  Name: Name$9,
  Note: Note$8,
  Notes: Notes$9,
  Organization: Organization$8,
  Organizations: Organizations$9,
  Password: Password$9,
  Phone: Phone$9,
  Photo: Photo$9,
  Priorities: Priorities$9,
  Priority: Priority$9,
  Privacy: Privacy$8,
  Province: Province$8,
  Pusher: Pusher$9,
  Registration: Registration$8,
  Reset: Reset$9,
  Role: Role$9,
  Save: Save$9,
  Seconds: Seconds$9,
  Service: Service$9,
  Services: Services$9,
  Settings: Settings$9,
  Software: Software$9,
  State: State$8,
  Status: Status$9,
  Subject: Subject$9,
  Submit: Submit$9,
  Subscribe: Subscribe$8,
  Technical: Technical$9,
  Ticket: Ticket$8,
  Tickets: Tickets$9,
  Title: Title$8,
  Trashed: Trashed$9,
  Types: Types$9,
  Update: Update$9,
  Updated: Updated$9,
  Users: Users$9,
  default: he
}, Symbol.toStringTag, { value: "Module" }));
const Dashboard$8 = "Dashboard";
const Logout$8 = "Disconnetti";
const Tickets$8 = "Biglietti";
const Chat$8 = "Chat";
const FAQs$8 = "Domande frequenti";
const Blog$8 = "Blog";
const More$8 = "Altro";
const Notes$8 = "Note";
const Contacts$8 = "Contatti";
const Organizations$8 = "Organizzazioni";
const Users$8 = "Utenti";
const Customers$8 = "Clienti";
const Settings$8 = "Impostazioni";
const Global$8 = "Globale";
const Categories$8 = "Categorie";
const Status$8 = "Stato";
const Priorities$8 = "Priorità";
const Departments$8 = "Dipartimenti";
const Types$8 = "Tipi";
const Pusher$8 = "Pusher";
const Contact$8 = "Contatto";
const Services$8 = "Servizi";
const Filter$8 = "Filtro";
const Trashed$8 = "Cestinato";
const Reset$8 = "Reimposta";
const Name$8 = "Nome";
const Email$8 = "Email";
const Phone$8 = "Telefono";
const Country$8 = "Paese";
const City$8 = "Città";
const Address$8 = "Indirizzo";
const Password$8 = "Password";
const Role$8 = "Ruolo";
const Photo$8 = "Foto";
const Technical$8 = "Tecnico";
const Hardware$8 = "Hardware";
const Development$8 = "Sviluppo";
const Management$8 = "Gestione";
const Admin$8 = "Amministratore";
const Software$8 = "Software";
const Service$8 = "Servizio";
const Event$8 = "Evento";
const Average$8 = "Media";
const Seconds$8 = "Secondi";
const Month$8 = "Mese";
const Months$7 = "Mesi";
const Day$8 = "Giorno";
const Days$7 = "Giorni";
const Hours$8 = "Ore";
const Hour$7 = "Ora";
const Minutes$8 = "Minuti";
const Minute$7 = "Minuto";
const Key$7 = "Chiave";
const Subject$8 = "Oggetto";
const Priority$8 = "Priorità";
const Updated$8 = "Aggiornato";
const Customer$8 = "Cliente";
const Department$7 = "Dipartimento";
const Category$8 = "Categoria";
const Created$8 = "Creato";
const Save$8 = "Salva";
const Ticket$7 = "Biglietto";
const FAQ$7 = "FAQ";
const Title$7 = "Titolo";
const Details$7 = "Dettagli";
const Note$7 = "Nota";
const Submit$8 = "Invia";
const Cancel$8 = "Annulla";
const Organization$7 = "Organizzazione";
const Province$7 = "Provincia";
const State$7 = "Stato";
const Delete$8 = "Elimina";
const Update$8 = "Aggiorna";
const Create$8 = "Crea";
const Location$8 = "Posizione";
const Privacy$7 = "Privacy";
const Company$7 = "Azienda";
const Subscribe$7 = "Iscriviti";
const Login$8 = "Accedi";
const Hello$8 = "Ciao";
const Registration$7 = "Registrazione";
const it = {
  "Edit Profile": "Modifica profilo",
  Dashboard: Dashboard$8,
  Logout: Logout$8,
  Tickets: Tickets$8,
  Chat: Chat$8,
  FAQs: FAQs$8,
  Blog: Blog$8,
  "Knowledge Base": "Base di conoscenza",
  More: More$8,
  Notes: Notes$8,
  Contacts: Contacts$8,
  Organizations: Organizations$8,
  Users: Users$8,
  Customers: Customers$8,
  Settings: Settings$8,
  Global: Global$8,
  Categories: Categories$8,
  Status: Status$8,
  Priorities: Priorities$8,
  Departments: Departments$8,
  Types: Types$8,
  "Email Templates": "Modelli email",
  "SMTP Mail": "Posta SMTP",
  Pusher: Pusher$8,
  "Pusher Chat": "Chat Pusher",
  "Front Pages": "Pagine principali",
  Contact: Contact$8,
  Services: Services$8,
  "Privacy Policy": "Informativa sulla privacy",
  "Terms of Services": "Termini di servizio",
  Filter: Filter$8,
  Trashed: Trashed$8,
  "Trashed With": "Cestinato con",
  "Only Trashed": "Solo cestinato",
  "Search...": "Cerca...",
  Reset: Reset$8,
  Name: Name$8,
  Email: Email$8,
  Phone: Phone$8,
  Country: Country$8,
  "Create User": "Crea utente",
  "First Name": "Nome",
  "First name": "Nome",
  "Last Name": "Cognome",
  "Last name": "Cognome",
  City: City$8,
  Address: Address$8,
  Password: Password$8,
  Role: Role$8,
  Photo: Photo$8,
  "New Tickets": "Nuovi biglietti",
  "Open Tickets": "Biglietti aperti",
  "Closed Tickets": "Biglietti chiusi",
  "Unassigned Tickets": "Biglietti non assegnati",
  "Ticket by department": "Biglietti per dipartimento",
  "Ticket by type": "Biglietti per tipo",
  "Top ticket creator": "Maggior creatore di biglietti",
  "Ticket history": "Storico biglietti",
  "First Response Time": "Tempo di prima risposta",
  "Last Response Time": "Tempo di ultima risposta",
  Technical: Technical$8,
  Hardware: Hardware$8,
  Development: Development$8,
  Management: Management$8,
  Admin: Admin$8,
  Software: Software$8,
  Service: Service$8,
  Event: Event$8,
  Average: Average$8,
  Seconds: Seconds$8,
  "this month": "questo mese",
  "last month": "mese scorso",
  Month: Month$8,
  Months: Months$7,
  Day: Day$8,
  Days: Days$7,
  Hours: Hours$8,
  Hour: Hour$7,
  Minutes: Minutes$8,
  Minute: Minute$7,
  Key: Key$7,
  Subject: Subject$8,
  "Attach files": "Allega file",
  Priority: Priority$8,
  "Date": "Data",
  Updated: Updated$8,
  Customer: Customer$8,
  Department: Department$7,
  "Assigned to": "Assegnato a",
  "Ticket type": "Tipo di biglietto",
  Category: Category$8,
  Created: Created$8,
  "Request Details": "Dettagli della richiesta",
  "Attach File": "Allega file",
  "Delete Ticket": "Elimina biglietto",
  Save: Save$8,
  "Ticket discussion": "Discussione biglietto",
  Ticket: Ticket$7,
  FAQ: FAQ$7,
  "Create Ticket": "Crea biglietto",
  "New Ticket": "Nuovo biglietto",
  "Create FAQ": "Crea FAQ",
  "Filter by priority": "Filtra per priorità",
  "Filter by status": "Filtra per stato",
  "Delete FAQ": "Elimina FAQ",
  Title: Title$7,
  Details: Details$7,
  Note: Note$7,
  Submit: Submit$8,
  Cancel: Cancel$8,
  "Delete note": "Elimina nota",
  Organization: Organization$7,
  Province: Province$7,
  State: State$7,
  "Postal code": "Codice postale",
  "Delete Organization": "Elimina organizzazione",
  "Update Organization": "Aggiorna organizzazione",
  Delete: Delete$8,
  Update: Update$8,
  Create: Create$8,
  "Create Customer": "Crea cliente",
  "Manage Users": "Gestisci utenti",
  "Default Language": "Lingua predefinita",
  "Email Notifications": "Notifiche email",
  "Create ticket by new customer": "Crea biglietto per nuovo cliente",
  "Create ticket from dashboard": "Crea biglietto dalla dashboard",
  "Status or priority changes": "Modifiche di stato o priorità",
  "Create a new user": "Crea un nuovo utente",
  "Email Template": "Modello email",
  "SMTP Host": "Host SMTP",
  "SMTP Port": "Porta SMTP",
  "SMTP Username": "Nome utente SMTP",
  "SMTP Password": "Password SMTP",
  Location: Location$8,
  "Phone number": "Numero di telefono",
  "Email address": "Indirizzo email",
  "Add New": "Aggiungi nuovo",
  Privacy: Privacy$7,
  Company: Company$7,
  Subscribe: Subscribe$7,
  Login: Login$8,
  "Submit ticket": "Invia biglietto",
  "terms and conditions": "termini e condizioni",
  "I agree with the": "Accetto",
  "Don’t have account?": "Non hai un account?",
  "Remember Me": "Ricordami",
  "Reset Password": "Reimposta password",
  "Already have an account?": "Hai già un account?",
  "Good Morning": "Buongiorno",
  "Good Noon": "Buon mezzogiorno",
  "Good Evening": "Buonasera",
  "Good Afternoon": "Buon pomeriggio",
  Hello: Hello$8,
  "Forgot your password?": "Hai dimenticato la password?",
  "Send Password Reset Link": "Invia link per reimpostare la password",
  Registration: Registration$7
};
const __vite_glob_1_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Address: Address$8,
  Admin: Admin$8,
  Average: Average$8,
  Blog: Blog$8,
  Cancel: Cancel$8,
  Categories: Categories$8,
  Category: Category$8,
  Chat: Chat$8,
  City: City$8,
  Company: Company$7,
  Contact: Contact$8,
  Contacts: Contacts$8,
  Country: Country$8,
  Create: Create$8,
  Created: Created$8,
  Customer: Customer$8,
  Customers: Customers$8,
  Dashboard: Dashboard$8,
  Day: Day$8,
  Days: Days$7,
  Delete: Delete$8,
  Department: Department$7,
  Departments: Departments$8,
  Details: Details$7,
  Development: Development$8,
  Email: Email$8,
  Event: Event$8,
  FAQ: FAQ$7,
  FAQs: FAQs$8,
  Filter: Filter$8,
  Global: Global$8,
  Hardware: Hardware$8,
  Hello: Hello$8,
  Hour: Hour$7,
  Hours: Hours$8,
  Key: Key$7,
  Location: Location$8,
  Login: Login$8,
  Logout: Logout$8,
  Management: Management$8,
  Minute: Minute$7,
  Minutes: Minutes$8,
  Month: Month$8,
  Months: Months$7,
  More: More$8,
  Name: Name$8,
  Note: Note$7,
  Notes: Notes$8,
  Organization: Organization$7,
  Organizations: Organizations$8,
  Password: Password$8,
  Phone: Phone$8,
  Photo: Photo$8,
  Priorities: Priorities$8,
  Priority: Priority$8,
  Privacy: Privacy$7,
  Province: Province$7,
  Pusher: Pusher$8,
  Registration: Registration$7,
  Reset: Reset$8,
  Role: Role$8,
  Save: Save$8,
  Seconds: Seconds$8,
  Service: Service$8,
  Services: Services$8,
  Settings: Settings$8,
  Software: Software$8,
  State: State$7,
  Status: Status$8,
  Subject: Subject$8,
  Submit: Submit$8,
  Subscribe: Subscribe$7,
  Technical: Technical$8,
  Ticket: Ticket$7,
  Tickets: Tickets$8,
  Title: Title$7,
  Trashed: Trashed$8,
  Types: Types$8,
  Update: Update$8,
  Updated: Updated$8,
  Users: Users$8,
  default: it
}, Symbol.toStringTag, { value: "Module" }));
const Dashboard$7 = "Prietaisų skydelis";
const Logout$7 = "Atsijungti";
const Tickets$7 = "Bilietai";
const Chat$7 = "Pokalbis";
const FAQs$7 = "DUK";
const Blog$7 = "Tinklaraštis";
const More$7 = "Daugiau";
const Notes$7 = "Pastabos";
const Contacts$7 = "Kontaktai";
const Organizations$7 = "Organizacijos";
const Users$7 = "Vartotojai";
const Customers$7 = "Klientai";
const Settings$7 = "Nustatymai";
const Global$7 = "Visuotiniai";
const Categories$7 = "Kategorijos";
const Status$7 = "Būsena";
const Priorities$7 = "Prioritetai";
const Departments$7 = "Skyriai";
const Types$7 = "Tipai";
const Pusher$7 = "Pusher";
const Contact$7 = "Kontaktas";
const Services$7 = "Paslaugos";
const Filter$7 = "Filtruoti";
const Trashed$7 = "Ištrinta";
const Reset$7 = "Atstatyti";
const Name$7 = "Vardas";
const Email$7 = "El. paštas";
const Phone$7 = "Telefonas";
const Country$7 = "Šalis";
const City$7 = "Miestas";
const Address$7 = "Adresas";
const Password$7 = "Slaptažodis";
const Role$7 = "Vaidmuo";
const Photo$7 = "Nuotrauka";
const Technical$7 = "Techninis";
const Hardware$7 = "Aparatinė įranga";
const Development$7 = "Plėtra";
const Management$7 = "Valdymas";
const Admin$7 = "Administratorius";
const Software$7 = "Programinė įranga";
const Service$7 = "Paslauga";
const Event$7 = "Renginys";
const Average$7 = "Vidutinis";
const Seconds$7 = "Sekundės";
const Month$7 = "Mėnuo";
const Months$6 = "Mėnesiai";
const Day$7 = "Diena";
const Days$6 = "Dienos";
const Hours$7 = "Valandos";
const Hour$6 = "Valanda";
const Minutes$7 = "Minutės";
const Minute$6 = "Minutė";
const Key$6 = "Raktas";
const Subject$7 = "Tema";
const Priority$7 = "Prioritetas";
const Updated$7 = "Atnaujinta";
const Customer$7 = "Klientas";
const Department$6 = "Skyrius";
const Category$7 = "Kategorija";
const Created$7 = "Sukurta";
const Save$7 = "Išsaugoti";
const Ticket$6 = "Bilietas";
const FAQ$6 = "DUK";
const Title$6 = "Pavadinimas";
const Details$6 = "Išsami informacija";
const Note$6 = "Pastaba";
const Submit$7 = "Pateikti";
const Cancel$7 = "Atšaukti";
const Organization$6 = "Organizacija";
const Province$6 = "Apskritis";
const State$6 = "Valstija";
const Delete$7 = "Ištrinti";
const Update$7 = "Atnaujinti";
const Create$7 = "Sukurti";
const Location$7 = "Vieta";
const Privacy$6 = "Privatumas";
const Company$6 = "Įmonė";
const Subscribe$6 = "Prenumeruoti";
const Login$7 = "Prisijungti";
const Hello$7 = "Labas";
const Registration$6 = "Registracija";
const lt = {
  "Edit Profile": "Redaguoti profilį",
  Dashboard: Dashboard$7,
  Logout: Logout$7,
  Tickets: Tickets$7,
  Chat: Chat$7,
  FAQs: FAQs$7,
  Blog: Blog$7,
  "Knowledge Base": "Žinių bazė",
  More: More$7,
  Notes: Notes$7,
  Contacts: Contacts$7,
  Organizations: Organizations$7,
  Users: Users$7,
  Customers: Customers$7,
  Settings: Settings$7,
  Global: Global$7,
  Categories: Categories$7,
  Status: Status$7,
  Priorities: Priorities$7,
  Departments: Departments$7,
  Types: Types$7,
  "Email Templates": "El. pašto šablonai",
  "SMTP Mail": "SMTP paštas",
  Pusher: Pusher$7,
  "Pusher Chat": "Pusher pokalbis",
  "Front Pages": "Priekiniai puslapiai",
  Contact: Contact$7,
  Services: Services$7,
  "Privacy Policy": "Privatumo politika",
  "Terms of Services": "Paslaugų sąlygos",
  Filter: Filter$7,
  Trashed: Trashed$7,
  "Trashed With": "Ištrinta su",
  "Only Trashed": "Tik ištrinti",
  "Search...": "Paieška...",
  Reset: Reset$7,
  Name: Name$7,
  Email: Email$7,
  Phone: Phone$7,
  Country: Country$7,
  "Create User": "Sukurti vartotoją",
  "First Name": "Vardas",
  "First name": "Vardas",
  "Last Name": "Pavardė",
  "Last name": "Pavardė",
  City: City$7,
  Address: Address$7,
  Password: Password$7,
  Role: Role$7,
  Photo: Photo$7,
  "New Tickets": "Nauji bilietai",
  "Open Tickets": "Atidaryti bilietai",
  "Closed Tickets": "Uždaryti bilietai",
  "Unassigned Tickets": "Nepriskirti bilietai",
  "Ticket by department": "Bilietas pagal skyrių",
  "Ticket by type": "Bilietas pagal tipą",
  "Top ticket creator": "Geriausias bilietų kūrėjas",
  "Ticket history": "Bilietų istorija",
  "First Response Time": "Pirmasis atsakymo laikas",
  "Last Response Time": "Paskutinis atsakymo laikas",
  Technical: Technical$7,
  Hardware: Hardware$7,
  Development: Development$7,
  Management: Management$7,
  Admin: Admin$7,
  Software: Software$7,
  Service: Service$7,
  Event: Event$7,
  Average: Average$7,
  Seconds: Seconds$7,
  "this month": "šį mėnesį",
  "last month": "praeitą mėnesį",
  Month: Month$7,
  Months: Months$6,
  Day: Day$7,
  Days: Days$6,
  Hours: Hours$7,
  Hour: Hour$6,
  Minutes: Minutes$7,
  Minute: Minute$6,
  Key: Key$6,
  Subject: Subject$7,
  "Attach files": "Prisegti failus",
  Priority: Priority$7,
  "Date": "Data",
  Updated: Updated$7,
  Customer: Customer$7,
  Department: Department$6,
  "Assigned to": "Priskirta",
  "Ticket type": "Bilieto tipas",
  Category: Category$7,
  Created: Created$7,
  "Request Details": "Užklausos informacija",
  "Attach File": "Prisegti failą",
  "Delete Ticket": "Ištrinti bilietą",
  Save: Save$7,
  "Ticket discussion": "Bilietų diskusija",
  Ticket: Ticket$6,
  FAQ: FAQ$6,
  "Create Ticket": "Sukurti bilietą",
  "New Ticket": "Naujas bilietas",
  "Create FAQ": "Sukurti DUK",
  "Filter by priority": "Filtruoti pagal prioritetą",
  "Filter by status": "Filtruoti pagal būseną",
  "Delete FAQ": "Ištrinti DUK",
  Title: Title$6,
  Details: Details$6,
  Note: Note$6,
  Submit: Submit$7,
  Cancel: Cancel$7,
  "Delete note": "Ištrinti pastabą",
  Organization: Organization$6,
  Province: Province$6,
  State: State$6,
  "Postal code": "Pašto kodas",
  "Delete Organization": "Ištrinti organizaciją",
  "Update Organization": "Atnaujinti organizaciją",
  Delete: Delete$7,
  Update: Update$7,
  Create: Create$7,
  "Create Customer": "Sukurti klientą",
  "Manage Users": "Tvarkyti vartotojus",
  "Default Language": "Numatytoji kalba",
  "Email Notifications": "El. pašto pranešimai",
  "Create ticket by new customer": "Sukurti bilietą naujam klientui",
  "Create ticket from dashboard": "Sukurti bilietą iš prietaisų skydelio",
  "Status or priority changes": "Būsenos ar prioriteto pakeitimai",
  "Create a new user": "Sukurti naują vartotoją",
  "Email Template": "El. pašto šablonas",
  "SMTP Host": "SMTP serveris",
  "SMTP Port": "SMTP prievadas",
  "SMTP Username": "SMTP vartotojo vardas",
  "SMTP Password": "SMTP slaptažodis",
  Location: Location$7,
  "Phone number": "Telefono numeris",
  "Email address": "El. pašto adresas",
  "Add New": "Pridėti naują",
  Privacy: Privacy$6,
  Company: Company$6,
  Subscribe: Subscribe$6,
  Login: Login$7,
  "Submit ticket": "Pateikti bilietą",
  "terms and conditions": "Taisyklės ir sąlygos",
  "I agree with the": "Aš sutinku su",
  "Don’t have account?": "Neturite paskyros?",
  "Remember Me": "Prisiminti mane",
  "Reset Password": "Atkurti slaptažodį",
  "Already have an account?": "Jau turite paskyrą?",
  "Good Morning": "Labas rytas",
  "Good Noon": "Gera diena",
  "Good Evening": "Labas vakaras",
  "Good Afternoon": "Gera popietė",
  Hello: Hello$7,
  "Forgot your password?": "Pamiršote slaptažodį?",
  "Send Password Reset Link": "Siųsti slaptažodžio atkūrimo nuorodą",
  Registration: Registration$6
};
const __vite_glob_1_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Address: Address$7,
  Admin: Admin$7,
  Average: Average$7,
  Blog: Blog$7,
  Cancel: Cancel$7,
  Categories: Categories$7,
  Category: Category$7,
  Chat: Chat$7,
  City: City$7,
  Company: Company$6,
  Contact: Contact$7,
  Contacts: Contacts$7,
  Country: Country$7,
  Create: Create$7,
  Created: Created$7,
  Customer: Customer$7,
  Customers: Customers$7,
  Dashboard: Dashboard$7,
  Day: Day$7,
  Days: Days$6,
  Delete: Delete$7,
  Department: Department$6,
  Departments: Departments$7,
  Details: Details$6,
  Development: Development$7,
  Email: Email$7,
  Event: Event$7,
  FAQ: FAQ$6,
  FAQs: FAQs$7,
  Filter: Filter$7,
  Global: Global$7,
  Hardware: Hardware$7,
  Hello: Hello$7,
  Hour: Hour$6,
  Hours: Hours$7,
  Key: Key$6,
  Location: Location$7,
  Login: Login$7,
  Logout: Logout$7,
  Management: Management$7,
  Minute: Minute$6,
  Minutes: Minutes$7,
  Month: Month$7,
  Months: Months$6,
  More: More$7,
  Name: Name$7,
  Note: Note$6,
  Notes: Notes$7,
  Organization: Organization$6,
  Organizations: Organizations$7,
  Password: Password$7,
  Phone: Phone$7,
  Photo: Photo$7,
  Priorities: Priorities$7,
  Priority: Priority$7,
  Privacy: Privacy$6,
  Province: Province$6,
  Pusher: Pusher$7,
  Registration: Registration$6,
  Reset: Reset$7,
  Role: Role$7,
  Save: Save$7,
  Seconds: Seconds$7,
  Service: Service$7,
  Services: Services$7,
  Settings: Settings$7,
  Software: Software$7,
  State: State$6,
  Status: Status$7,
  Subject: Subject$7,
  Submit: Submit$7,
  Subscribe: Subscribe$6,
  Technical: Technical$7,
  Ticket: Ticket$6,
  Tickets: Tickets$7,
  Title: Title$6,
  Trashed: Trashed$7,
  Types: Types$7,
  Update: Update$7,
  Updated: Updated$7,
  Users: Users$7,
  default: lt
}, Symbol.toStringTag, { value: "Module" }));
const Dashboard$6 = "Dashboard";
const Logout$6 = "Uitloggen";
const Tickets$6 = "Tickets";
const Chat$6 = "Chat";
const FAQs$6 = "Veelgestelde vragen";
const Blog$6 = "Blog";
const More$6 = "Meer";
const Notes$6 = "Notities";
const Contacts$6 = "Contacten";
const Organizations$6 = "Organisaties";
const Users$6 = "Gebruikers";
const Customers$6 = "Klanten";
const Settings$6 = "Instellingen";
const Global$6 = "Globaal";
const Categories$6 = "Categorieën";
const Status$6 = "Status";
const Priorities$6 = "Prioriteiten";
const Departments$6 = "Afdelingen";
const Types$6 = "Typen";
const Pusher$6 = "Pusher";
const Contact$6 = "Contact";
const Services$6 = "Diensten";
const Filter$6 = "Filter";
const Trashed$6 = "Verwijderd";
const Reset$6 = "Resetten";
const Name$6 = "Naam";
const Email$6 = "E-mail";
const Phone$6 = "Telefoon";
const Country$6 = "Land";
const City$6 = "Stad";
const Address$6 = "Adres";
const Password$6 = "Wachtwoord";
const Role$6 = "Rol";
const Photo$6 = "Foto";
const Technical$6 = "Technisch";
const Hardware$6 = "Hardware";
const Development$6 = "Ontwikkeling";
const Management$6 = "Management";
const Admin$6 = "Beheerder";
const Software$6 = "Software";
const Service$6 = "Service";
const Event$6 = "Evenement";
const Average$6 = "Gemiddeld";
const Seconds$6 = "Seconden";
const Month$6 = "Maand";
const Months$5 = "Maanden";
const Day$6 = "Dag";
const Days$5 = "Dagen";
const Hours$6 = "Uren";
const Hour$5 = "Uur";
const Minutes$6 = "Minuten";
const Minute$5 = "Minuut";
const Key$5 = "Sleutel";
const Subject$6 = "Onderwerp";
const Priority$6 = "Prioriteit";
const Updated$6 = "Bijgewerkt";
const Customer$6 = "Klant";
const Department$5 = "Afdeling";
const Category$6 = "Categorie";
const Created$6 = "Aangemaakt";
const Save$6 = "Opslaan";
const Ticket$5 = "Ticket";
const FAQ$5 = "Veelgestelde vragen";
const Title$5 = "Titel";
const Details$5 = "Details";
const Note$5 = "Notitie";
const Submit$6 = "Verzenden";
const Cancel$6 = "Annuleren";
const Organization$5 = "Organisatie";
const Province$5 = "Provincie";
const State$5 = "Staat";
const Delete$6 = "Verwijderen";
const Update$6 = "Bijwerken";
const Create$6 = "Aanmaken";
const Location$6 = "Locatie";
const Privacy$5 = "Privacy";
const Company$5 = "Bedrijf";
const Subscribe$5 = "Abonneren";
const Login$6 = "Inloggen";
const Hello$6 = "Hallo";
const Registration$5 = "Registratie";
const nl = {
  "Edit Profile": "Profiel bewerken",
  Dashboard: Dashboard$6,
  Logout: Logout$6,
  Tickets: Tickets$6,
  Chat: Chat$6,
  FAQs: FAQs$6,
  Blog: Blog$6,
  "Knowledge Base": "Kennisbank",
  More: More$6,
  Notes: Notes$6,
  Contacts: Contacts$6,
  Organizations: Organizations$6,
  Users: Users$6,
  Customers: Customers$6,
  Settings: Settings$6,
  Global: Global$6,
  Categories: Categories$6,
  Status: Status$6,
  Priorities: Priorities$6,
  Departments: Departments$6,
  Types: Types$6,
  "Email Templates": "E-mailsjablonen",
  "SMTP Mail": "SMTP Mail",
  Pusher: Pusher$6,
  "Pusher Chat": "Pusher Chat",
  "Front Pages": "Voorpagina's",
  Contact: Contact$6,
  Services: Services$6,
  "Privacy Policy": "Privacybeleid",
  "Terms of Services": "Servicevoorwaarden",
  Filter: Filter$6,
  Trashed: Trashed$6,
  "Trashed With": "Verwijderd met",
  "Only Trashed": "Alleen verwijderd",
  "Search...": "Zoeken...",
  Reset: Reset$6,
  Name: Name$6,
  Email: Email$6,
  Phone: Phone$6,
  Country: Country$6,
  "Create User": "Gebruiker aanmaken",
  "First Name": "Voornaam",
  "First name": "Voornaam",
  "Last Name": "Achternaam",
  "Last name": "Achternaam",
  City: City$6,
  Address: Address$6,
  Password: Password$6,
  Role: Role$6,
  Photo: Photo$6,
  "New Tickets": "Nieuwe tickets",
  "Open Tickets": "Open tickets",
  "Closed Tickets": "Gesloten tickets",
  "Unassigned Tickets": "Niet-toegewezen tickets",
  "Ticket by department": "Ticket per afdeling",
  "Ticket by type": "Ticket per type",
  "Top ticket creator": "Beste ticketmaker",
  "Ticket history": "Tickethistorie",
  "First Response Time": "Eerste reactietijd",
  "Last Response Time": "Laatste reactietijd",
  Technical: Technical$6,
  Hardware: Hardware$6,
  Development: Development$6,
  Management: Management$6,
  Admin: Admin$6,
  Software: Software$6,
  Service: Service$6,
  Event: Event$6,
  Average: Average$6,
  Seconds: Seconds$6,
  "this month": "deze maand",
  "last month": "vorige maand",
  Month: Month$6,
  Months: Months$5,
  Day: Day$6,
  Days: Days$5,
  Hours: Hours$6,
  Hour: Hour$5,
  Minutes: Minutes$6,
  Minute: Minute$5,
  Key: Key$5,
  Subject: Subject$6,
  "Attach files": "Bestanden bijvoegen",
  Priority: Priority$6,
  "Date": "Datum",
  Updated: Updated$6,
  Customer: Customer$6,
  Department: Department$5,
  "Assigned to": "Toegewezen aan",
  "Ticket type": "Tickettype",
  Category: Category$6,
  Created: Created$6,
  "Request Details": "Verzoekdetails",
  "Attach File": "Bestand bijvoegen",
  "Delete Ticket": "Ticket verwijderen",
  Save: Save$6,
  "Ticket discussion": "Ticketdiscussie",
  Ticket: Ticket$5,
  FAQ: FAQ$5,
  "Create Ticket": "Ticket aanmaken",
  "New Ticket": "Nieuw ticket",
  "Create FAQ": "Veelgestelde vraag aanmaken",
  "Filter by priority": "Filter op prioriteit",
  "Filter by status": "Filter op status",
  "Delete FAQ": "Veelgestelde vraag verwijderen",
  Title: Title$5,
  Details: Details$5,
  Note: Note$5,
  Submit: Submit$6,
  Cancel: Cancel$6,
  "Delete note": "Notitie verwijderen",
  Organization: Organization$5,
  Province: Province$5,
  State: State$5,
  "Postal code": "Postcode",
  "Delete Organization": "Organisatie verwijderen",
  "Update Organization": "Organisatie bijwerken",
  Delete: Delete$6,
  Update: Update$6,
  Create: Create$6,
  "Create Customer": "Klant aanmaken",
  "Manage Users": "Gebruikers beheren",
  "Default Language": "Standaardtaal",
  "Email Notifications": "E-mailmeldingen",
  "Create ticket by new customer": "Ticket aanmaken door nieuwe klant",
  "Create ticket from dashboard": "Ticket aanmaken vanuit dashboard",
  "Status or priority changes": "Status- of prioriteitswijzigingen",
  "Create a new user": "Nieuwe gebruiker aanmaken",
  "Email Template": "E-mailsjabloon",
  "SMTP Host": "SMTP Host",
  "SMTP Port": "SMTP Poort",
  "SMTP Username": "SMTP Gebruikersnaam",
  "SMTP Password": "SMTP Wachtwoord",
  Location: Location$6,
  "Phone number": "Telefoonnummer",
  "Email address": "E-mailadres",
  "Add New": "Nieuw toevoegen",
  Privacy: Privacy$5,
  Company: Company$5,
  Subscribe: Subscribe$5,
  Login: Login$6,
  "Submit ticket": "Ticket indienen",
  "terms and conditions": "Algemene voorwaarden",
  "I agree with the": "Ik ga akkoord met de",
  "Don’t have account?": "Heb je geen account?",
  "Remember Me": "Onthoud mij",
  "Reset Password": "Wachtwoord opnieuw instellen",
  "Already have an account?": "Heb je al een account?",
  "Good Morning": "Goedemorgen",
  "Good Noon": "Goedemiddag",
  "Good Evening": "Goedenavond",
  "Good Afternoon": "Goedemiddag",
  Hello: Hello$6,
  "Forgot your password?": "Wachtwoord vergeten?",
  "Send Password Reset Link": "Wachtwoordherstellink verzenden",
  Registration: Registration$5
};
const __vite_glob_1_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Address: Address$6,
  Admin: Admin$6,
  Average: Average$6,
  Blog: Blog$6,
  Cancel: Cancel$6,
  Categories: Categories$6,
  Category: Category$6,
  Chat: Chat$6,
  City: City$6,
  Company: Company$5,
  Contact: Contact$6,
  Contacts: Contacts$6,
  Country: Country$6,
  Create: Create$6,
  Created: Created$6,
  Customer: Customer$6,
  Customers: Customers$6,
  Dashboard: Dashboard$6,
  Day: Day$6,
  Days: Days$5,
  Delete: Delete$6,
  Department: Department$5,
  Departments: Departments$6,
  Details: Details$5,
  Development: Development$6,
  Email: Email$6,
  Event: Event$6,
  FAQ: FAQ$5,
  FAQs: FAQs$6,
  Filter: Filter$6,
  Global: Global$6,
  Hardware: Hardware$6,
  Hello: Hello$6,
  Hour: Hour$5,
  Hours: Hours$6,
  Key: Key$5,
  Location: Location$6,
  Login: Login$6,
  Logout: Logout$6,
  Management: Management$6,
  Minute: Minute$5,
  Minutes: Minutes$6,
  Month: Month$6,
  Months: Months$5,
  More: More$6,
  Name: Name$6,
  Note: Note$5,
  Notes: Notes$6,
  Organization: Organization$5,
  Organizations: Organizations$6,
  Password: Password$6,
  Phone: Phone$6,
  Photo: Photo$6,
  Priorities: Priorities$6,
  Priority: Priority$6,
  Privacy: Privacy$5,
  Province: Province$5,
  Pusher: Pusher$6,
  Registration: Registration$5,
  Reset: Reset$6,
  Role: Role$6,
  Save: Save$6,
  Seconds: Seconds$6,
  Service: Service$6,
  Services: Services$6,
  Settings: Settings$6,
  Software: Software$6,
  State: State$5,
  Status: Status$6,
  Subject: Subject$6,
  Submit: Submit$6,
  Subscribe: Subscribe$5,
  Technical: Technical$6,
  Ticket: Ticket$5,
  Tickets: Tickets$6,
  Title: Title$5,
  Trashed: Trashed$6,
  Types: Types$6,
  Update: Update$6,
  Updated: Updated$6,
  Users: Users$6,
  default: nl
}, Symbol.toStringTag, { value: "Module" }));
const php_en = {
  "auth.failed": "These credentials do not match our records.",
  "auth.password": "The provided password is incorrect.",
  "auth.throttle": "Too many login attempts. Please try again in :seconds seconds.",
  "pagination.previous": "&laquo; Previous",
  "pagination.next": "Next &raquo;",
  "passwords.reset": "Your password has been reset.",
  "passwords.sent": "We have emailed your password reset link.",
  "passwords.throttled": "Please wait before retrying.",
  "passwords.token": "This password reset token is invalid.",
  "passwords.user": "We can't find a user with that email address.",
  "validation.accepted": "The :attribute field must be accepted.",
  "validation.accepted_if": "The :attribute field must be accepted when :other is :value.",
  "validation.active_url": "The :attribute field must be a valid URL.",
  "validation.after": "The :attribute field must be a date after :date.",
  "validation.after_or_equal": "The :attribute field must be a date after or equal to :date.",
  "validation.alpha": "The :attribute field must only contain letters.",
  "validation.alpha_dash": "The :attribute field must only contain letters, numbers, dashes, and underscores.",
  "validation.alpha_num": "The :attribute field must only contain letters and numbers.",
  "validation.array": "The :attribute field must be an array.",
  "validation.ascii": "The :attribute field must only contain single-byte alphanumeric characters and symbols.",
  "validation.before": "The :attribute field must be a date before :date.",
  "validation.before_or_equal": "The :attribute field must be a date before or equal to :date.",
  "validation.between.array": "The :attribute field must have between :min and :max items.",
  "validation.between.file": "The :attribute field must be between :min and :max kilobytes.",
  "validation.between.numeric": "The :attribute field must be between :min and :max.",
  "validation.between.string": "The :attribute field must be between :min and :max characters.",
  "validation.boolean": "The :attribute field must be true or false.",
  "validation.can": "The :attribute field contains an unauthorized value.",
  "validation.confirmed": "The :attribute field confirmation does not match.",
  "validation.current_password": "The password is incorrect.",
  "validation.date": "The :attribute field must be a valid date.",
  "validation.date_equals": "The :attribute field must be a date equal to :date.",
  "validation.date_format": "The :attribute field must match the format :format.",
  "validation.decimal": "The :attribute field must have :decimal decimal places.",
  "validation.declined": "The :attribute field must be declined.",
  "validation.declined_if": "The :attribute field must be declined when :other is :value.",
  "validation.different": "The :attribute field and :other must be different.",
  "validation.digits": "The :attribute field must be :digits digits.",
  "validation.digits_between": "The :attribute field must be between :min and :max digits.",
  "validation.dimensions": "The :attribute field has invalid image dimensions.",
  "validation.distinct": "The :attribute field has a duplicate value.",
  "validation.doesnt_end_with": "The :attribute field must not end with one of the following: :values.",
  "validation.doesnt_start_with": "The :attribute field must not start with one of the following: :values.",
  "validation.email": "The :attribute field must be a valid email address.",
  "validation.ends_with": "The :attribute field must end with one of the following: :values.",
  "validation.enum": "The selected :attribute is invalid.",
  "validation.exists": "The selected :attribute is invalid.",
  "validation.extensions": "The :attribute field must have one of the following extensions: :values.",
  "validation.file": "The :attribute field must be a file.",
  "validation.filled": "The :attribute field must have a value.",
  "validation.gt.array": "The :attribute field must have more than :value items.",
  "validation.gt.file": "The :attribute field must be greater than :value kilobytes.",
  "validation.gt.numeric": "The :attribute field must be greater than :value.",
  "validation.gt.string": "The :attribute field must be greater than :value characters.",
  "validation.gte.array": "The :attribute field must have :value items or more.",
  "validation.gte.file": "The :attribute field must be greater than or equal to :value kilobytes.",
  "validation.gte.numeric": "The :attribute field must be greater than or equal to :value.",
  "validation.gte.string": "The :attribute field must be greater than or equal to :value characters.",
  "validation.hex_color": "The :attribute field must be a valid hexadecimal color.",
  "validation.image": "The :attribute field must be an image.",
  "validation.in": "The selected :attribute is invalid.",
  "validation.in_array": "The :attribute field must exist in :other.",
  "validation.integer": "The :attribute field must be an integer.",
  "validation.ip": "The :attribute field must be a valid IP address.",
  "validation.ipv4": "The :attribute field must be a valid IPv4 address.",
  "validation.ipv6": "The :attribute field must be a valid IPv6 address.",
  "validation.json": "The :attribute field must be a valid JSON string.",
  "validation.lowercase": "The :attribute field must be lowercase.",
  "validation.lt.array": "The :attribute field must have less than :value items.",
  "validation.lt.file": "The :attribute field must be less than :value kilobytes.",
  "validation.lt.numeric": "The :attribute field must be less than :value.",
  "validation.lt.string": "The :attribute field must be less than :value characters.",
  "validation.lte.array": "The :attribute field must not have more than :value items.",
  "validation.lte.file": "The :attribute field must be less than or equal to :value kilobytes.",
  "validation.lte.numeric": "The :attribute field must be less than or equal to :value.",
  "validation.lte.string": "The :attribute field must be less than or equal to :value characters.",
  "validation.mac_address": "The :attribute field must be a valid MAC address.",
  "validation.max.array": "The :attribute field must not have more than :max items.",
  "validation.max.file": "The :attribute field must not be greater than :max kilobytes.",
  "validation.max.numeric": "The :attribute field must not be greater than :max.",
  "validation.max.string": "The :attribute field must not be greater than :max characters.",
  "validation.max_digits": "The :attribute field must not have more than :max digits.",
  "validation.mimes": "The :attribute field must be a file of type: :values.",
  "validation.mimetypes": "The :attribute field must be a file of type: :values.",
  "validation.min.array": "The :attribute field must have at least :min items.",
  "validation.min.file": "The :attribute field must be at least :min kilobytes.",
  "validation.min.numeric": "The :attribute field must be at least :min.",
  "validation.min.string": "The :attribute field must be at least :min characters.",
  "validation.min_digits": "The :attribute field must have at least :min digits.",
  "validation.missing": "The :attribute field must be missing.",
  "validation.missing_if": "The :attribute field must be missing when :other is :value.",
  "validation.missing_unless": "The :attribute field must be missing unless :other is :value.",
  "validation.missing_with": "The :attribute field must be missing when :values is present.",
  "validation.missing_with_all": "The :attribute field must be missing when :values are present.",
  "validation.multiple_of": "The :attribute field must be a multiple of :value.",
  "validation.not_in": "The selected :attribute is invalid.",
  "validation.not_regex": "The :attribute field format is invalid.",
  "validation.numeric": "The :attribute field must be a number.",
  "validation.password.letters": "The :attribute field must contain at least one letter.",
  "validation.password.mixed": "The :attribute field must contain at least one uppercase and one lowercase letter.",
  "validation.password.numbers": "The :attribute field must contain at least one number.",
  "validation.password.symbols": "The :attribute field must contain at least one symbol.",
  "validation.password.uncompromised": "The given :attribute has appeared in a data leak. Please choose a different :attribute.",
  "validation.present": "The :attribute field must be present.",
  "validation.present_if": "The :attribute field must be present when :other is :value.",
  "validation.present_unless": "The :attribute field must be present unless :other is :value.",
  "validation.present_with": "The :attribute field must be present when :values is present.",
  "validation.present_with_all": "The :attribute field must be present when :values are present.",
  "validation.prohibited": "The :attribute field is prohibited.",
  "validation.prohibited_if": "The :attribute field is prohibited when :other is :value.",
  "validation.prohibited_unless": "The :attribute field is prohibited unless :other is in :values.",
  "validation.prohibits": "The :attribute field prohibits :other from being present.",
  "validation.regex": "The :attribute field format is invalid.",
  "validation.required": "The :attribute field is required.",
  "validation.required_array_keys": "The :attribute field must contain entries for: :values.",
  "validation.required_if": "The :attribute field is required when :other is :value.",
  "validation.required_if_accepted": "The :attribute field is required when :other is accepted.",
  "validation.required_unless": "The :attribute field is required unless :other is in :values.",
  "validation.required_with": "The :attribute field is required when :values is present.",
  "validation.required_with_all": "The :attribute field is required when :values are present.",
  "validation.required_without": "The :attribute field is required when :values is not present.",
  "validation.required_without_all": "The :attribute field is required when none of :values are present.",
  "validation.same": "The :attribute field must match :other.",
  "validation.size.array": "The :attribute field must contain :size items.",
  "validation.size.file": "The :attribute field must be :size kilobytes.",
  "validation.size.numeric": "The :attribute field must be :size.",
  "validation.size.string": "The :attribute field must be :size characters.",
  "validation.starts_with": "The :attribute field must start with one of the following: :values.",
  "validation.string": "The :attribute field must be a string.",
  "validation.timezone": "The :attribute field must be a valid timezone.",
  "validation.unique": "The :attribute has already been taken.",
  "validation.uploaded": "The :attribute failed to upload.",
  "validation.uppercase": "The :attribute field must be uppercase.",
  "validation.url": "The :attribute field must be a valid URL.",
  "validation.ulid": "The :attribute field must be a valid ULID.",
  "validation.uuid": "The :attribute field must be a valid UUID.",
  "validation.custom.attribute-name.rule-name": "custom-message"
};
const __vite_glob_1_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: php_en
}, Symbol.toStringTag, { value: "Module" }));
const Dashboard$5 = "Pulpit";
const Logout$5 = "Wyloguj się";
const Tickets$5 = "Zgłoszenia";
const Chat$5 = "Czat";
const FAQs$5 = "FAQ";
const Blog$5 = "Blog";
const More$5 = "Więcej";
const Notes$5 = "Notatki";
const Contacts$5 = "Kontakty";
const Organizations$5 = "Organizacje";
const Users$5 = "Użytkownicy";
const Customers$5 = "Klienci";
const Settings$5 = "Ustawienia";
const Global$5 = "Globalne";
const Categories$5 = "Kategorie";
const Status$5 = "Status";
const Priorities$5 = "Priorytety";
const Departments$5 = "Działy";
const Types$5 = "Typy";
const Pusher$5 = "Pusher";
const Contact$5 = "Kontakt";
const Services$5 = "Usługi";
const Filter$5 = "Filtr";
const Trashed$5 = "Usunięte";
const Reset$5 = "Resetuj";
const Name$5 = "Nazwa";
const Email$5 = "E-mail";
const Phone$5 = "Telefon";
const Country$5 = "Kraj";
const City$5 = "Miasto";
const Address$5 = "Adres";
const Password$5 = "Hasło";
const Role$5 = "Rola";
const Photo$5 = "Zdjęcie";
const Technical$5 = "Techniczne";
const Hardware$5 = "Sprzęt";
const Development$5 = "Rozwój";
const Management$5 = "Zarządzanie";
const Admin$5 = "Administrator";
const Software$5 = "Oprogramowanie";
const Service$5 = "Usługa";
const Event$5 = "Wydarzenie";
const Average$5 = "Średnia";
const Seconds$5 = "Sekundy";
const Month$5 = "Miesiąc";
const Months$4 = "Miesiące";
const Day$5 = "Dzień";
const Days$4 = "Dni";
const Hours$5 = "Godziny";
const Hour$4 = "Godzina";
const Minutes$5 = "Minuty";
const Minute$4 = "Minuta";
const Key$4 = "Klucz";
const Subject$5 = "Temat";
const Priority$5 = "Priorytet";
const Updated$5 = "Zaktualizowano";
const Customer$5 = "Klient";
const Department$4 = "Dział";
const Category$5 = "Kategoria";
const Created$5 = "Utworzono";
const Save$5 = "Zapisz";
const Ticket$4 = "Zgłoszenie";
const FAQ$4 = "FAQ";
const Title$4 = "Tytuł";
const Details$4 = "Szczegóły";
const Note$4 = "Notatka";
const Submit$5 = "Prześlij";
const Cancel$5 = "Anuluj";
const Organization$4 = "Organizacja";
const Province$4 = "Prowincja";
const State$4 = "Stan";
const Delete$5 = "Usuń";
const Update$5 = "Aktualizuj";
const Create$5 = "Utwórz";
const Location$5 = "Lokalizacja";
const Privacy$4 = "Prywatność";
const Company$4 = "Firma";
const Subscribe$4 = "Subskrybuj";
const Login$5 = "Zaloguj się";
const Hello$5 = "Cześć";
const Registration$4 = "Rejestracja";
const pl = {
  "Edit Profile": "Edytuj profil",
  Dashboard: Dashboard$5,
  Logout: Logout$5,
  Tickets: Tickets$5,
  Chat: Chat$5,
  FAQs: FAQs$5,
  Blog: Blog$5,
  "Knowledge Base": "Baza wiedzy",
  More: More$5,
  Notes: Notes$5,
  Contacts: Contacts$5,
  Organizations: Organizations$5,
  Users: Users$5,
  Customers: Customers$5,
  Settings: Settings$5,
  Global: Global$5,
  Categories: Categories$5,
  Status: Status$5,
  Priorities: Priorities$5,
  Departments: Departments$5,
  Types: Types$5,
  "Email Templates": "Szablony e-mail",
  "SMTP Mail": "Poczta SMTP",
  Pusher: Pusher$5,
  "Pusher Chat": "Pusher czat",
  "Front Pages": "Strony główne",
  Contact: Contact$5,
  Services: Services$5,
  "Privacy Policy": "Polityka prywatności",
  "Terms of Services": "Warunki korzystania",
  Filter: Filter$5,
  Trashed: Trashed$5,
  "Trashed With": "Usunięte z",
  "Only Trashed": "Tylko usunięte",
  "Search...": "Szukaj...",
  Reset: Reset$5,
  Name: Name$5,
  Email: Email$5,
  Phone: Phone$5,
  Country: Country$5,
  "Create User": "Utwórz użytkownika",
  "First Name": "Imię",
  "First name": "Imię",
  "Last Name": "Nazwisko",
  "Last name": "Nazwisko",
  City: City$5,
  Address: Address$5,
  Password: Password$5,
  Role: Role$5,
  Photo: Photo$5,
  "New Tickets": "Nowe zgłoszenia",
  "Open Tickets": "Otwarte zgłoszenia",
  "Closed Tickets": "Zamknięte zgłoszenia",
  "Unassigned Tickets": "Nieprzypisane zgłoszenia",
  "Ticket by department": "Zgłoszenia według działu",
  "Ticket by type": "Zgłoszenia według typu",
  "Top ticket creator": "Najczęściej tworzący zgłoszenia",
  "Ticket history": "Historia zgłoszeń",
  "First Response Time": "Czas pierwszej odpowiedzi",
  "Last Response Time": "Czas ostatniej odpowiedzi",
  Technical: Technical$5,
  Hardware: Hardware$5,
  Development: Development$5,
  Management: Management$5,
  Admin: Admin$5,
  Software: Software$5,
  Service: Service$5,
  Event: Event$5,
  Average: Average$5,
  Seconds: Seconds$5,
  "this month": "ten miesiąc",
  "last month": "zeszły miesiąc",
  Month: Month$5,
  Months: Months$4,
  Day: Day$5,
  Days: Days$4,
  Hours: Hours$5,
  Hour: Hour$4,
  Minutes: Minutes$5,
  Minute: Minute$4,
  Key: Key$4,
  Subject: Subject$5,
  "Attach files": "Załącz pliki",
  Priority: Priority$5,
  "Date": "Data",
  Updated: Updated$5,
  Customer: Customer$5,
  Department: Department$4,
  "Assigned to": "Przypisane do",
  "Ticket type": "Typ zgłoszenia",
  Category: Category$5,
  Created: Created$5,
  "Request Details": "Szczegóły żądania",
  "Attach File": "Załącz plik",
  "Delete Ticket": "Usuń zgłoszenie",
  Save: Save$5,
  "Ticket discussion": "Dyskusja o zgłoszeniu",
  Ticket: Ticket$4,
  FAQ: FAQ$4,
  "Create Ticket": "Utwórz zgłoszenie",
  "New Ticket": "Nowe zgłoszenie",
  "Create FAQ": "Utwórz FAQ",
  "Filter by priority": "Filtruj według priorytetu",
  "Filter by status": "Filtruj według statusu",
  "Delete FAQ": "Usuń FAQ",
  Title: Title$4,
  Details: Details$4,
  Note: Note$4,
  Submit: Submit$5,
  Cancel: Cancel$5,
  "Delete note": "Usuń notatkę",
  Organization: Organization$4,
  Province: Province$4,
  State: State$4,
  "Postal code": "Kod pocztowy",
  "Delete Organization": "Usuń organizację",
  "Update Organization": "Aktualizuj organizację",
  Delete: Delete$5,
  Update: Update$5,
  Create: Create$5,
  "Create Customer": "Utwórz klienta",
  "Manage Users": "Zarządzaj użytkownikami",
  "Default Language": "Domyślny język",
  "Email Notifications": "Powiadomienia e-mail",
  "Create ticket by new customer": "Utwórz zgłoszenie przez nowego klienta",
  "Create ticket from dashboard": "Utwórz zgłoszenie z pulpitu",
  "Status or priority changes": "Zmiany statusu lub priorytetu",
  "Create a new user": "Utwórz nowego użytkownika",
  "Email Template": "Szablon e-mail",
  "SMTP Host": "Host SMTP",
  "SMTP Port": "Port SMTP",
  "SMTP Username": "Nazwa użytkownika SMTP",
  "SMTP Password": "Hasło SMTP",
  Location: Location$5,
  "Phone number": "Numer telefonu",
  "Email address": "Adres e-mail",
  "Add New": "Dodaj nowy",
  Privacy: Privacy$4,
  Company: Company$4,
  Subscribe: Subscribe$4,
  Login: Login$5,
  "Submit ticket": "Prześlij zgłoszenie",
  "terms and conditions": "warunki i zasady",
  "I agree with the": "Zgadzam się z",
  "Don’t have account?": "Nie masz konta?",
  "Remember Me": "Zapamiętaj mnie",
  "Reset Password": "Zresetuj hasło",
  "Already have an account?": "Masz już konto?",
  "Good Morning": "Dzień dobry",
  "Good Noon": "Dzień dobry",
  "Good Evening": "Dobry wieczór",
  "Good Afternoon": "Dobry popołudnie",
  Hello: Hello$5,
  "Forgot your password?": "Zapomniałeś hasła?",
  "Send Password Reset Link": "Wyślij link do resetowania hasła",
  Registration: Registration$4
};
const __vite_glob_1_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Address: Address$5,
  Admin: Admin$5,
  Average: Average$5,
  Blog: Blog$5,
  Cancel: Cancel$5,
  Categories: Categories$5,
  Category: Category$5,
  Chat: Chat$5,
  City: City$5,
  Company: Company$4,
  Contact: Contact$5,
  Contacts: Contacts$5,
  Country: Country$5,
  Create: Create$5,
  Created: Created$5,
  Customer: Customer$5,
  Customers: Customers$5,
  Dashboard: Dashboard$5,
  Day: Day$5,
  Days: Days$4,
  Delete: Delete$5,
  Department: Department$4,
  Departments: Departments$5,
  Details: Details$4,
  Development: Development$5,
  Email: Email$5,
  Event: Event$5,
  FAQ: FAQ$4,
  FAQs: FAQs$5,
  Filter: Filter$5,
  Global: Global$5,
  Hardware: Hardware$5,
  Hello: Hello$5,
  Hour: Hour$4,
  Hours: Hours$5,
  Key: Key$4,
  Location: Location$5,
  Login: Login$5,
  Logout: Logout$5,
  Management: Management$5,
  Minute: Minute$4,
  Minutes: Minutes$5,
  Month: Month$5,
  Months: Months$4,
  More: More$5,
  Name: Name$5,
  Note: Note$4,
  Notes: Notes$5,
  Organization: Organization$4,
  Organizations: Organizations$5,
  Password: Password$5,
  Phone: Phone$5,
  Photo: Photo$5,
  Priorities: Priorities$5,
  Priority: Priority$5,
  Privacy: Privacy$4,
  Province: Province$4,
  Pusher: Pusher$5,
  Registration: Registration$4,
  Reset: Reset$5,
  Role: Role$5,
  Save: Save$5,
  Seconds: Seconds$5,
  Service: Service$5,
  Services: Services$5,
  Settings: Settings$5,
  Software: Software$5,
  State: State$4,
  Status: Status$5,
  Subject: Subject$5,
  Submit: Submit$5,
  Subscribe: Subscribe$4,
  Technical: Technical$5,
  Ticket: Ticket$4,
  Tickets: Tickets$5,
  Title: Title$4,
  Trashed: Trashed$5,
  Types: Types$5,
  Update: Update$5,
  Updated: Updated$5,
  Users: Users$5,
  default: pl
}, Symbol.toStringTag, { value: "Module" }));
const Dashboard$4 = "Painel de Controle";
const Logout$4 = "Sair";
const Tickets$4 = "Tickets";
const Chat$4 = "Chat";
const FAQs$4 = "Perguntas Frequentes";
const Blog$4 = "Blog";
const More$4 = "Mais";
const Notes$4 = "Notas";
const Contacts$4 = "Contatos";
const Organizations$4 = "Organizações";
const Users$4 = "Usuários";
const Customers$4 = "Clientes";
const Settings$4 = "Configurações";
const Global$4 = "Global";
const Categories$4 = "Categorias";
const Status$4 = "Status";
const Priorities$4 = "Prioridades";
const Departments$4 = "Departamentos";
const Types$4 = "Tipos";
const Pusher$4 = "Pusher";
const Contact$4 = "Contato";
const Services$4 = "Serviços";
const Filter$4 = "Filtrar";
const Trashed$4 = "Lixeira";
const Reset$4 = "Redefinir";
const Name$4 = "Nome";
const Email$4 = "Email";
const Phone$4 = "Telefone";
const Country$4 = "País";
const City$4 = "Cidade";
const Address$4 = "Endereço";
const Password$4 = "Senha";
const Role$4 = "Função";
const Photo$4 = "Foto";
const Technical$4 = "Técnico";
const Hardware$4 = "Hardware";
const Development$4 = "Desenvolvimento";
const Management$4 = "Gestão";
const Admin$4 = "Administrador";
const Software$4 = "Software";
const Service$4 = "Serviço";
const Event$4 = "Evento";
const Average$4 = "Média";
const Seconds$4 = "Segundos";
const Month$4 = "Mês";
const Months$3 = "Meses";
const Day$4 = "Dia";
const Days$3 = "Dias";
const Hours$4 = "Horas";
const Hour$3 = "Hora";
const Minutes$4 = "Minutos";
const Minute$3 = "Minuto";
const Key$3 = "Chave";
const Subject$4 = "Assunto";
const Priority$4 = "Prioridade";
const Updated$4 = "Atualizado";
const Customer$4 = "Cliente";
const Department$3 = "Departamento";
const Category$4 = "Categoria";
const Created$4 = "Criado";
const Save$4 = "Salvar";
const Ticket$3 = "Ticket";
const FAQ$3 = "Perguntas Frequentes";
const Title$3 = "Título";
const Details$3 = "Detalhes";
const Note$3 = "Nota";
const Submit$4 = "Enviar";
const Cancel$4 = "Cancelar";
const Organization$3 = "Organização";
const Province$3 = "Província";
const State$3 = "Estado";
const Delete$4 = "Excluir";
const Update$4 = "Atualizar";
const Create$4 = "Criar";
const Location$4 = "Localização";
const Privacy$3 = "Privacidade";
const Company$3 = "Empresa";
const Subscribe$3 = "Inscrever-se";
const Login$4 = "Entrar";
const Hello$4 = "Olá";
const Registration$3 = "Cadastro";
const pt = {
  "Edit Profile": "Editar Perfil",
  Dashboard: Dashboard$4,
  Logout: Logout$4,
  Tickets: Tickets$4,
  Chat: Chat$4,
  FAQs: FAQs$4,
  Blog: Blog$4,
  "Knowledge Base": "Base de Conhecimento",
  More: More$4,
  Notes: Notes$4,
  Contacts: Contacts$4,
  Organizations: Organizations$4,
  Users: Users$4,
  Customers: Customers$4,
  Settings: Settings$4,
  Global: Global$4,
  Categories: Categories$4,
  Status: Status$4,
  Priorities: Priorities$4,
  Departments: Departments$4,
  Types: Types$4,
  "Email Templates": "Modelos de Email",
  "SMTP Mail": "Email SMTP",
  Pusher: Pusher$4,
  "Pusher Chat": "Chat Pusher",
  "Front Pages": "Páginas Iniciais",
  Contact: Contact$4,
  Services: Services$4,
  "Privacy Policy": "Política de Privacidade",
  "Terms of Services": "Termos de Serviço",
  Filter: Filter$4,
  Trashed: Trashed$4,
  "Trashed With": "Excluído Com",
  "Only Trashed": "Somente Excluídos",
  "Search...": "Pesquisar...",
  Reset: Reset$4,
  Name: Name$4,
  Email: Email$4,
  Phone: Phone$4,
  Country: Country$4,
  "Create User": "Criar Usuário",
  "First Name": "Primeiro Nome",
  "First name": "Primeiro nome",
  "Last Name": "Sobrenome",
  "Last name": "Sobrenome",
  City: City$4,
  Address: Address$4,
  Password: Password$4,
  Role: Role$4,
  Photo: Photo$4,
  "New Tickets": "Novos Tickets",
  "Open Tickets": "Tickets Abertos",
  "Closed Tickets": "Tickets Fechados",
  "Unassigned Tickets": "Tickets Não Atribuídos",
  "Ticket by department": "Tickets por departamento",
  "Ticket by type": "Tickets por tipo",
  "Top ticket creator": "Maior criador de tickets",
  "Ticket history": "Histórico de tickets",
  "First Response Time": "Tempo de Primeira Resposta",
  "Last Response Time": "Tempo da Última Resposta",
  Technical: Technical$4,
  Hardware: Hardware$4,
  Development: Development$4,
  Management: Management$4,
  Admin: Admin$4,
  Software: Software$4,
  Service: Service$4,
  Event: Event$4,
  Average: Average$4,
  Seconds: Seconds$4,
  "this month": "este mês",
  "last month": "mês passado",
  Month: Month$4,
  Months: Months$3,
  Day: Day$4,
  Days: Days$3,
  Hours: Hours$4,
  Hour: Hour$3,
  Minutes: Minutes$4,
  Minute: Minute$3,
  Key: Key$3,
  Subject: Subject$4,
  "Attach files": "Anexar arquivos",
  Priority: Priority$4,
  "Date": "Data",
  Updated: Updated$4,
  Customer: Customer$4,
  Department: Department$3,
  "Assigned to": "Atribuído a",
  "Ticket type": "Tipo de Ticket",
  Category: Category$4,
  Created: Created$4,
  "Request Details": "Detalhes da Solicitação",
  "Attach File": "Anexar Arquivo",
  "Delete Ticket": "Excluir Ticket",
  Save: Save$4,
  "Ticket discussion": "Discussão do Ticket",
  Ticket: Ticket$3,
  FAQ: FAQ$3,
  "Create Ticket": "Criar Ticket",
  "New Ticket": "Novo Ticket",
  "Create FAQ": "Criar Pergunta Frequente",
  "Filter by priority": "Filtrar por prioridade",
  "Filter by status": "Filtrar por status",
  "Delete FAQ": "Excluir Pergunta Frequente",
  Title: Title$3,
  Details: Details$3,
  Note: Note$3,
  Submit: Submit$4,
  Cancel: Cancel$4,
  "Delete note": "Excluir nota",
  Organization: Organization$3,
  Province: Province$3,
  State: State$3,
  "Postal code": "Código Postal",
  "Delete Organization": "Excluir Organização",
  "Update Organization": "Atualizar Organização",
  Delete: Delete$4,
  Update: Update$4,
  Create: Create$4,
  "Create Customer": "Criar Cliente",
  "Manage Users": "Gerenciar Usuários",
  "Default Language": "Idioma Padrão",
  "Email Notifications": "Notificações por Email",
  "Create ticket by new customer": "Criar ticket por novo cliente",
  "Create ticket from dashboard": "Criar ticket do painel",
  "Status or priority changes": "Mudanças de status ou prioridade",
  "Create a new user": "Criar um novo usuário",
  "Email Template": "Modelo de Email",
  "SMTP Host": "Host SMTP",
  "SMTP Port": "Porta SMTP",
  "SMTP Username": "Usuário SMTP",
  "SMTP Password": "Senha SMTP",
  Location: Location$4,
  "Phone number": "Número de telefone",
  "Email address": "Endereço de email",
  "Add New": "Adicionar Novo",
  Privacy: Privacy$3,
  Company: Company$3,
  Subscribe: Subscribe$3,
  Login: Login$4,
  "Submit ticket": "Enviar Ticket",
  "terms and conditions": "termos e condições",
  "I agree with the": "Eu concordo com",
  "Don’t have account?": "Não tem uma conta?",
  "Remember Me": "Lembrar-me",
  "Reset Password": "Redefinir Senha",
  "Already have an account?": "Já tem uma conta?",
  "Good Morning": "Bom dia",
  "Good Noon": "Boa tarde",
  "Good Evening": "Boa noite",
  "Good Afternoon": "Boa tarde",
  Hello: Hello$4,
  "Forgot your password?": "Esqueceu sua senha?",
  "Send Password Reset Link": "Enviar link de redefinição de senha",
  Registration: Registration$3
};
const __vite_glob_1_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Address: Address$4,
  Admin: Admin$4,
  Average: Average$4,
  Blog: Blog$4,
  Cancel: Cancel$4,
  Categories: Categories$4,
  Category: Category$4,
  Chat: Chat$4,
  City: City$4,
  Company: Company$3,
  Contact: Contact$4,
  Contacts: Contacts$4,
  Country: Country$4,
  Create: Create$4,
  Created: Created$4,
  Customer: Customer$4,
  Customers: Customers$4,
  Dashboard: Dashboard$4,
  Day: Day$4,
  Days: Days$3,
  Delete: Delete$4,
  Department: Department$3,
  Departments: Departments$4,
  Details: Details$3,
  Development: Development$4,
  Email: Email$4,
  Event: Event$4,
  FAQ: FAQ$3,
  FAQs: FAQs$4,
  Filter: Filter$4,
  Global: Global$4,
  Hardware: Hardware$4,
  Hello: Hello$4,
  Hour: Hour$3,
  Hours: Hours$4,
  Key: Key$3,
  Location: Location$4,
  Login: Login$4,
  Logout: Logout$4,
  Management: Management$4,
  Minute: Minute$3,
  Minutes: Minutes$4,
  Month: Month$4,
  Months: Months$3,
  More: More$4,
  Name: Name$4,
  Note: Note$3,
  Notes: Notes$4,
  Organization: Organization$3,
  Organizations: Organizations$4,
  Password: Password$4,
  Phone: Phone$4,
  Photo: Photo$4,
  Priorities: Priorities$4,
  Priority: Priority$4,
  Privacy: Privacy$3,
  Province: Province$3,
  Pusher: Pusher$4,
  Registration: Registration$3,
  Reset: Reset$4,
  Role: Role$4,
  Save: Save$4,
  Seconds: Seconds$4,
  Service: Service$4,
  Services: Services$4,
  Settings: Settings$4,
  Software: Software$4,
  State: State$3,
  Status: Status$4,
  Subject: Subject$4,
  Submit: Submit$4,
  Subscribe: Subscribe$3,
  Technical: Technical$4,
  Ticket: Ticket$3,
  Tickets: Tickets$4,
  Title: Title$3,
  Trashed: Trashed$4,
  Types: Types$4,
  Update: Update$4,
  Updated: Updated$4,
  Users: Users$4,
  default: pt
}, Symbol.toStringTag, { value: "Module" }));
const Dashboard$3 = "لوحة التحكم";
const Logout$3 = "تسجيل الخروج";
const Tickets$3 = "التذاكر";
const Chat$3 = "الدردشة";
const FAQs$3 = "الأسئلة الشائعة";
const Blog$3 = "المدونة";
const More$3 = "المزيد";
const Notes$3 = "الملاحظات";
const Contacts$3 = "جهات الاتصال";
const Organizations$3 = "المنظمات";
const Users$3 = "المستخدمون";
const Customers$3 = "العملاء";
const Settings$3 = "الإعدادات";
const Global$3 = "عام";
const Categories$3 = "الفئات";
const Status$3 = "الحالة";
const Priorities$3 = "الأولويات";
const Departments$3 = "الأقسام";
const Types$3 = "الأنواع";
const Pusher$3 = "الدافع";
const Contact$3 = "اتصل";
const Services$3 = "الخدمات";
const Filter$3 = "تصفية";
const Trashed$3 = "المحذوفات";
const Reset$3 = "إعادة ضبط";
const Name$3 = "الاسم";
const Email$3 = "البريد الإلكتروني";
const Phone$3 = "الهاتف";
const Country$3 = "الدولة";
const City$3 = "المدينة";
const Address$3 = "العنوان";
const Password$3 = "كلمة المرور";
const Role$3 = "الدور";
const Photo$3 = "الصورة";
const Technical$3 = "تقني";
const Hardware$3 = "الأجهزة";
const Development$3 = "التطوير";
const Management$3 = "الإدارة";
const Admin$3 = "المسؤول";
const Software$3 = "البرمجيات";
const Service$3 = "الخدمة";
const Event$3 = "الحدث";
const Average$3 = "المتوسط";
const Seconds$3 = "ثواني";
const Month$3 = "شهر";
const Months$2 = "أشهر";
const Day$3 = "يوم";
const Days$2 = "أيام";
const Hours$3 = "ساعات";
const Hour$2 = "ساعة";
const Minutes$3 = "دقائق";
const Minute$2 = "دقيقة";
const Key$2 = "المفتاح";
const Subject$3 = "الموضوع";
const Priority$3 = "الأولوية";
const Updated$3 = "محدث";
const Customer$3 = "العميل";
const Department$2 = "القسم";
const Category$3 = "الفئة";
const Created$3 = "تم الإنشاء";
const Save$3 = "حفظ";
const Ticket$2 = "التذكرة";
const FAQ$2 = "الأسئلة الشائعة";
const Title$2 = "العنوان";
const Details$2 = "التفاصيل";
const Note$2 = "ملاحظة";
const Submit$3 = "إرسال";
const Cancel$3 = "إلغاء";
const Organization$2 = "المنظمة";
const Province$2 = "المقاطعة";
const State$2 = "الولاية";
const Delete$3 = "حذف";
const Update$3 = "تحديث";
const Create$3 = "إنشاء";
const Location$3 = "الموقع";
const Privacy$2 = "الخصوصية";
const Company$2 = "الشركة";
const Subscribe$2 = "اشترك";
const Login$3 = "تسجيل الدخول";
const Hello$3 = "مرحبا";
const Registration$2 = "التسجيل";
const sa = {
  "Edit Profile": "تعديل الملف الشخصي",
  Dashboard: Dashboard$3,
  Logout: Logout$3,
  Tickets: Tickets$3,
  Chat: Chat$3,
  FAQs: FAQs$3,
  Blog: Blog$3,
  "Knowledge Base": "قاعدة المعرفة",
  More: More$3,
  Notes: Notes$3,
  Contacts: Contacts$3,
  Organizations: Organizations$3,
  Users: Users$3,
  Customers: Customers$3,
  Settings: Settings$3,
  Global: Global$3,
  Categories: Categories$3,
  Status: Status$3,
  Priorities: Priorities$3,
  Departments: Departments$3,
  Types: Types$3,
  "Email Templates": "قوالب البريد الإلكتروني",
  "SMTP Mail": "بريد SMTP",
  Pusher: Pusher$3,
  "Pusher Chat": "دردشة الدفع",
  "Front Pages": "الصفحات الأمامية",
  Contact: Contact$3,
  Services: Services$3,
  "Privacy Policy": "سياسة الخصوصية",
  "Terms of Services": "شروط الخدمة",
  Filter: Filter$3,
  Trashed: Trashed$3,
  "Trashed With": "المحذوف مع",
  "Only Trashed": "المحذوف فقط",
  "Search...": "بحث...",
  Reset: Reset$3,
  Name: Name$3,
  Email: Email$3,
  Phone: Phone$3,
  Country: Country$3,
  "Create User": "إنشاء مستخدم",
  "First Name": "الاسم الأول",
  "First name": "الاسم الأول",
  "Last Name": "الاسم الأخير",
  "Last name": "الاسم الأخير",
  City: City$3,
  Address: Address$3,
  Password: Password$3,
  Role: Role$3,
  Photo: Photo$3,
  "New Tickets": "التذاكر الجديدة",
  "Open Tickets": "التذاكر المفتوحة",
  "Closed Tickets": "التذاكر المغلقة",
  "Unassigned Tickets": "التذاكر غير المعينة",
  "Ticket by department": "التذاكر حسب القسم",
  "Ticket by type": "التذاكر حسب النوع",
  "Top ticket creator": "أكثر منشئ التذاكر",
  "Ticket history": "سجل التذاكر",
  "First Response Time": "وقت الاستجابة الأول",
  "Last Response Time": "آخر وقت استجابة",
  Technical: Technical$3,
  Hardware: Hardware$3,
  Development: Development$3,
  Management: Management$3,
  Admin: Admin$3,
  Software: Software$3,
  Service: Service$3,
  Event: Event$3,
  Average: Average$3,
  Seconds: Seconds$3,
  "this month": "هذا الشهر",
  "last month": "الشهر الماضي",
  Month: Month$3,
  Months: Months$2,
  Day: Day$3,
  Days: Days$2,
  Hours: Hours$3,
  Hour: Hour$2,
  Minutes: Minutes$3,
  Minute: Minute$2,
  Key: Key$2,
  Subject: Subject$3,
  "Attach files": "إرفاق الملفات",
  Priority: Priority$3,
  "Date": "التاريخ",
  Updated: Updated$3,
  Customer: Customer$3,
  Department: Department$2,
  "Assigned to": "مُسند إلى",
  "Ticket type": "نوع التذكرة",
  Category: Category$3,
  Created: Created$3,
  "Request Details": "تفاصيل الطلب",
  "Attach File": "إرفاق ملف",
  "Delete Ticket": "حذف التذكرة",
  Save: Save$3,
  "Ticket discussion": "مناقشة التذكرة",
  Ticket: Ticket$2,
  FAQ: FAQ$2,
  "Create Ticket": "إنشاء تذكرة",
  "New Ticket": "تذكرة جديدة",
  "Create FAQ": "إنشاء سؤال شائع",
  "Filter by priority": "تصفية حسب الأولوية",
  "Filter by status": "تصفية حسب الحالة",
  "Delete FAQ": "حذف السؤال الشائع",
  Title: Title$2,
  Details: Details$2,
  Note: Note$2,
  Submit: Submit$3,
  Cancel: Cancel$3,
  "Delete note": "حذف الملاحظة",
  Organization: Organization$2,
  Province: Province$2,
  State: State$2,
  "Postal code": "الرمز البريدي",
  "Delete Organization": "حذف المنظمة",
  "Update Organization": "تحديث المنظمة",
  Delete: Delete$3,
  Update: Update$3,
  Create: Create$3,
  "Create Customer": "إنشاء عميل",
  "Manage Users": "إدارة المستخدمين",
  "Default Language": "اللغة الافتراضية",
  "Email Notifications": "إشعارات البريد الإلكتروني",
  "Create ticket by new customer": "إنشاء تذكرة بواسطة عميل جديد",
  "Create ticket from dashboard": "إنشاء تذكرة من لوحة التحكم",
  "Status or priority changes": "تغييرات الحالة أو الأولوية",
  "Create a new user": "إنشاء مستخدم جديد",
  "Email Template": "قالب البريد الإلكتروني",
  "SMTP Host": "مضيف SMTP",
  "SMTP Port": "منفذ SMTP",
  "SMTP Username": "اسم مستخدم SMTP",
  "SMTP Password": "كلمة مرور SMTP",
  Location: Location$3,
  "Phone number": "رقم الهاتف",
  "Email address": "عنوان البريد الإلكتروني",
  "Add New": "إضافة جديد",
  Privacy: Privacy$2,
  Company: Company$2,
  Subscribe: Subscribe$2,
  Login: Login$3,
  "Submit ticket": "إرسال التذكرة",
  "terms and conditions": "الشروط والأحكام",
  "I agree with the": "أنا أوافق على",
  "Don’t have account?": "ليس لديك حساب؟",
  "Remember Me": "تذكرني",
  "Reset Password": "إعادة تعيين كلمة المرور",
  "Already have an account?": "هل لديك حساب بالفعل؟",
  "Good Morning": "صباح الخير",
  "Good Noon": "ظهر سعيد",
  "Good Evening": "مساء الخير",
  "Good Afternoon": "مساء الخير",
  Hello: Hello$3,
  "Forgot your password?": "هل نسيت كلمة المرور؟",
  "Send Password Reset Link": "إرسال رابط إعادة تعيين كلمة المرور",
  Registration: Registration$2
};
const __vite_glob_1_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Address: Address$3,
  Admin: Admin$3,
  Average: Average$3,
  Blog: Blog$3,
  Cancel: Cancel$3,
  Categories: Categories$3,
  Category: Category$3,
  Chat: Chat$3,
  City: City$3,
  Company: Company$2,
  Contact: Contact$3,
  Contacts: Contacts$3,
  Country: Country$3,
  Create: Create$3,
  Created: Created$3,
  Customer: Customer$3,
  Customers: Customers$3,
  Dashboard: Dashboard$3,
  Day: Day$3,
  Days: Days$2,
  Delete: Delete$3,
  Department: Department$2,
  Departments: Departments$3,
  Details: Details$2,
  Development: Development$3,
  Email: Email$3,
  Event: Event$3,
  FAQ: FAQ$2,
  FAQs: FAQs$3,
  Filter: Filter$3,
  Global: Global$3,
  Hardware: Hardware$3,
  Hello: Hello$3,
  Hour: Hour$2,
  Hours: Hours$3,
  Key: Key$2,
  Location: Location$3,
  Login: Login$3,
  Logout: Logout$3,
  Management: Management$3,
  Minute: Minute$2,
  Minutes: Minutes$3,
  Month: Month$3,
  Months: Months$2,
  More: More$3,
  Name: Name$3,
  Note: Note$2,
  Notes: Notes$3,
  Organization: Organization$2,
  Organizations: Organizations$3,
  Password: Password$3,
  Phone: Phone$3,
  Photo: Photo$3,
  Priorities: Priorities$3,
  Priority: Priority$3,
  Privacy: Privacy$2,
  Province: Province$2,
  Pusher: Pusher$3,
  Registration: Registration$2,
  Reset: Reset$3,
  Role: Role$3,
  Save: Save$3,
  Seconds: Seconds$3,
  Service: Service$3,
  Services: Services$3,
  Settings: Settings$3,
  Software: Software$3,
  State: State$2,
  Status: Status$3,
  Subject: Subject$3,
  Submit: Submit$3,
  Subscribe: Subscribe$2,
  Technical: Technical$3,
  Ticket: Ticket$2,
  Tickets: Tickets$3,
  Title: Title$2,
  Trashed: Trashed$3,
  Types: Types$3,
  Update: Update$3,
  Updated: Updated$3,
  Users: Users$3,
  default: sa
}, Symbol.toStringTag, { value: "Module" }));
const Dashboard$2 = "Instrumentpanel";
const Logout$2 = "Logga ut";
const Tickets$2 = "Biljetter";
const Chat$2 = "Chatt";
const FAQs$2 = "Vanliga frågor";
const Blog$2 = "Blogg";
const More$2 = "Mer";
const Notes$2 = "Anteckningar";
const Contacts$2 = "Kontakter";
const Organizations$2 = "Organisationer";
const Users$2 = "Användare";
const Customers$2 = "Kunder";
const Settings$2 = "Inställningar";
const Global$2 = "Global";
const Categories$2 = "Kategorier";
const Status$2 = "Status";
const Priorities$2 = "Prioriteringar";
const Departments$2 = "Avdelningar";
const Types$2 = "Typer";
const Pusher$2 = "Pusher";
const Contact$2 = "Kontakt";
const Services$2 = "Tjänster";
const Filter$2 = "Filtrera";
const Trashed$2 = "Borttaget";
const Reset$2 = "Återställ";
const Name$2 = "Namn";
const Email$2 = "E-post";
const Phone$2 = "Telefon";
const Country$2 = "Land";
const City$2 = "Stad";
const Address$2 = "Adress";
const Password$2 = "Lösenord";
const Role$2 = "Roll";
const Photo$2 = "Foto";
const Technical$2 = "Teknisk";
const Hardware$2 = "Hårdvara";
const Development$2 = "Utveckling";
const Management$2 = "Ledning";
const Admin$2 = "Admin";
const Software$2 = "Mjukvara";
const Service$2 = "Tjänst";
const Event$2 = "Händelse";
const Average$2 = "Genomsnitt";
const Seconds$2 = "Sekunder";
const Month$2 = "Månad";
const Months$1 = "Månader";
const Day$2 = "Dag";
const Days$1 = "Dagar";
const Hours$2 = "Timmar";
const Hour$1 = "Timme";
const Minutes$2 = "Minuter";
const Minute$1 = "Minut";
const Key$1 = "Nyckel";
const Subject$2 = "Ämne";
const Priority$2 = "Prioritet";
const Updated$2 = "Uppdaterad";
const Customer$2 = "Kund";
const Department$1 = "Avdelning";
const Category$2 = "Kategori";
const Created$2 = "Skapad";
const Save$2 = "Spara";
const Ticket$1 = "Biljett";
const FAQ$1 = "FAQ";
const Title$1 = "Titel";
const Details$1 = "Detaljer";
const Note$1 = "Anteckning";
const Submit$2 = "Skicka in";
const Cancel$2 = "Avbryt";
const Organization$1 = "Organisation";
const Province$1 = "Provins";
const State$1 = "Stat";
const Delete$2 = "Radera";
const Update$2 = "Uppdatera";
const Create$2 = "Skapa";
const Location$2 = "Plats";
const Privacy$1 = "Sekretess";
const Company$1 = "Företag";
const Subscribe$1 = "Prenumerera";
const Login$2 = "Logga in";
const Hello$2 = "Hej";
const Registration$1 = "Registrering";
const se = {
  "Edit Profile": "Redigera profil",
  Dashboard: Dashboard$2,
  Logout: Logout$2,
  Tickets: Tickets$2,
  Chat: Chat$2,
  FAQs: FAQs$2,
  Blog: Blog$2,
  "Knowledge Base": "Kunskapsbas",
  More: More$2,
  Notes: Notes$2,
  Contacts: Contacts$2,
  Organizations: Organizations$2,
  Users: Users$2,
  Customers: Customers$2,
  Settings: Settings$2,
  Global: Global$2,
  Categories: Categories$2,
  Status: Status$2,
  Priorities: Priorities$2,
  Departments: Departments$2,
  Types: Types$2,
  "Email Templates": "E-postmallar",
  "SMTP Mail": "SMTP-mejl",
  Pusher: Pusher$2,
  "Pusher Chat": "Pusher Chatt",
  "Front Pages": "Framsidor",
  Contact: Contact$2,
  Services: Services$2,
  "Privacy Policy": "Integritetspolicy",
  "Terms of Services": "Användarvillkor",
  Filter: Filter$2,
  Trashed: Trashed$2,
  "Trashed With": "Borttaget med",
  "Only Trashed": "Endast borttaget",
  "Search...": "Sök...",
  Reset: Reset$2,
  Name: Name$2,
  Email: Email$2,
  Phone: Phone$2,
  Country: Country$2,
  "Create User": "Skapa användare",
  "First Name": "Förnamn",
  "First name": "Förnamn",
  "Last Name": "Efternamn",
  "Last name": "Efternamn",
  City: City$2,
  Address: Address$2,
  Password: Password$2,
  Role: Role$2,
  Photo: Photo$2,
  "New Tickets": "Nya biljetter",
  "Open Tickets": "Öppna biljetter",
  "Closed Tickets": "Stängda biljetter",
  "Unassigned Tickets": "Oallokerade biljetter",
  "Ticket by department": "Biljetter per avdelning",
  "Ticket by type": "Biljetter per typ",
  "Top ticket creator": "Topp biljett skapare",
  "Ticket history": "Biljetthistorik",
  "First Response Time": "Första svarstid",
  "Last Response Time": "Senaste svarstid",
  Technical: Technical$2,
  Hardware: Hardware$2,
  Development: Development$2,
  Management: Management$2,
  Admin: Admin$2,
  Software: Software$2,
  Service: Service$2,
  Event: Event$2,
  Average: Average$2,
  Seconds: Seconds$2,
  "this month": "denna månad",
  "last month": "förra månaden",
  Month: Month$2,
  Months: Months$1,
  Day: Day$2,
  Days: Days$1,
  Hours: Hours$2,
  Hour: Hour$1,
  Minutes: Minutes$2,
  Minute: Minute$1,
  Key: Key$1,
  Subject: Subject$2,
  "Attach files": "Bifoga filer",
  Priority: Priority$2,
  "Date": "Datum",
  Updated: Updated$2,
  Customer: Customer$2,
  Department: Department$1,
  "Assigned to": "Tilldelad till",
  "Ticket type": "Biljettyp",
  Category: Category$2,
  Created: Created$2,
  "Request Details": "Begär detaljer",
  "Attach File": "Bifoga fil",
  "Delete Ticket": "Radera biljett",
  Save: Save$2,
  "Ticket discussion": "Biljett diskussion",
  Ticket: Ticket$1,
  FAQ: FAQ$1,
  "Create Ticket": "Skapa biljett",
  "New Ticket": "Ny biljett",
  "Create FAQ": "Skapa FAQ",
  "Filter by priority": "Filtrera efter prioritet",
  "Filter by status": "Filtrera efter status",
  "Delete FAQ": "Radera FAQ",
  Title: Title$1,
  Details: Details$1,
  Note: Note$1,
  Submit: Submit$2,
  Cancel: Cancel$2,
  "Delete note": "Radera anteckning",
  Organization: Organization$1,
  Province: Province$1,
  State: State$1,
  "Postal code": "Postnummer",
  "Delete Organization": "Radera organisation",
  "Update Organization": "Uppdatera organisation",
  Delete: Delete$2,
  Update: Update$2,
  Create: Create$2,
  "Create Customer": "Skapa kund",
  "Manage Users": "Hantera användare",
  "Default Language": "Standard språk",
  "Email Notifications": "E-postaviseringar",
  "Create ticket by new customer": "Skapa biljett av ny kund",
  "Create ticket from dashboard": "Skapa biljett från instrumentpanelen",
  "Status or priority changes": "Status eller prioritet ändringar",
  "Create a new user": "Skapa en ny användare",
  "Email Template": "E-postmall",
  "SMTP Host": "SMTP-värd",
  "SMTP Port": "SMTP-port",
  "SMTP Username": "SMTP-användarnamn",
  "SMTP Password": "SMTP-lösenord",
  Location: Location$2,
  "Phone number": "Telefonnummer",
  "Email address": "E-postadress",
  "Add New": "Lägg till ny",
  Privacy: Privacy$1,
  Company: Company$1,
  Subscribe: Subscribe$1,
  Login: Login$2,
  "Submit ticket": "Skicka in biljett",
  "terms and conditions": "villkor och bestämmelser",
  "I agree with the": "Jag godkänner",
  "Don’t have account?": "Har du inget konto?",
  "Remember Me": "Kom ihåg mig",
  "Reset Password": "Återställ lösenord",
  "Already have an account?": "Har du redan ett konto?",
  "Good Morning": "God morgon",
  "Good Noon": "God middag",
  "Good Evening": "God kväll",
  "Good Afternoon": "God eftermiddag",
  Hello: Hello$2,
  "Forgot your password?": "Glömt ditt lösenord?",
  "Send Password Reset Link": "Skicka länk för lösenordsåterställning",
  Registration: Registration$1
};
const __vite_glob_1_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Address: Address$2,
  Admin: Admin$2,
  Average: Average$2,
  Blog: Blog$2,
  Cancel: Cancel$2,
  Categories: Categories$2,
  Category: Category$2,
  Chat: Chat$2,
  City: City$2,
  Company: Company$1,
  Contact: Contact$2,
  Contacts: Contacts$2,
  Country: Country$2,
  Create: Create$2,
  Created: Created$2,
  Customer: Customer$2,
  Customers: Customers$2,
  Dashboard: Dashboard$2,
  Day: Day$2,
  Days: Days$1,
  Delete: Delete$2,
  Department: Department$1,
  Departments: Departments$2,
  Details: Details$1,
  Development: Development$2,
  Email: Email$2,
  Event: Event$2,
  FAQ: FAQ$1,
  FAQs: FAQs$2,
  Filter: Filter$2,
  Global: Global$2,
  Hardware: Hardware$2,
  Hello: Hello$2,
  Hour: Hour$1,
  Hours: Hours$2,
  Key: Key$1,
  Location: Location$2,
  Login: Login$2,
  Logout: Logout$2,
  Management: Management$2,
  Minute: Minute$1,
  Minutes: Minutes$2,
  Month: Month$2,
  Months: Months$1,
  More: More$2,
  Name: Name$2,
  Note: Note$1,
  Notes: Notes$2,
  Organization: Organization$1,
  Organizations: Organizations$2,
  Password: Password$2,
  Phone: Phone$2,
  Photo: Photo$2,
  Priorities: Priorities$2,
  Priority: Priority$2,
  Privacy: Privacy$1,
  Province: Province$1,
  Pusher: Pusher$2,
  Registration: Registration$1,
  Reset: Reset$2,
  Role: Role$2,
  Save: Save$2,
  Seconds: Seconds$2,
  Service: Service$2,
  Services: Services$2,
  Settings: Settings$2,
  Software: Software$2,
  State: State$1,
  Status: Status$2,
  Subject: Subject$2,
  Submit: Submit$2,
  Subscribe: Subscribe$1,
  Technical: Technical$2,
  Ticket: Ticket$1,
  Tickets: Tickets$2,
  Title: Title$1,
  Trashed: Trashed$2,
  Types: Types$2,
  Update: Update$2,
  Updated: Updated$2,
  Users: Users$2,
  default: se
}, Symbol.toStringTag, { value: "Module" }));
const Dashboard$1 = "Kontrol Paneli";
const Logout$1 = "Çıkış Yap";
const Tickets$1 = "Biletler";
const Chat$1 = "Sohbet";
const FAQs$1 = "SSS";
const Blog$1 = "Blog";
const More$1 = "Daha Fazla";
const Notes$1 = "Notlar";
const Contacts$1 = "Kişiler";
const Organizations$1 = "Organizasyonlar";
const Users$1 = "Kullanıcılar";
const Customers$1 = "Müşteriler";
const Settings$1 = "Ayarlar";
const Global$1 = "Küresel";
const Categories$1 = "Kategoriler";
const Status$1 = "Durum";
const Priorities$1 = "Öncelikler";
const Departments$1 = "Departmanlar";
const Types$1 = "Türler";
const Pusher$1 = "Pusher";
const Contact$1 = "İletişim";
const Services$1 = "Hizmetler";
const Filter$1 = "Filtrele";
const Trashed$1 = "Çöp Kutusu";
const Reset$1 = "Sıfırla";
const Name$1 = "Ad";
const Email$1 = "E-posta";
const Phone$1 = "Telefon";
const Country$1 = "Ülke";
const City$1 = "Şehir";
const Address$1 = "Adres";
const Password$1 = "Şifre";
const Role$1 = "Rol";
const Photo$1 = "Fotoğraf";
const Technical$1 = "Teknik";
const Hardware$1 = "Donanım";
const Development$1 = "Geliştirme";
const Management$1 = "Yönetim";
const Admin$1 = "Yönetici";
const Software$1 = "Yazılım";
const Service$1 = "Hizmet";
const Event$1 = "Etkinlik";
const Average$1 = "Ortalama";
const Seconds$1 = "Saniye";
const Month$1 = "Ay";
const Months = "Aylar";
const Day$1 = "Gün";
const Days = "Günler";
const Hours$1 = "Saatler";
const Hour = "Saat";
const Minutes$1 = "Dakika";
const Minute = "Dakika";
const Key = "Anahtar";
const Subject$1 = "Konu";
const Priority$1 = "Öncelik";
const Updated$1 = "Güncellendi";
const Customer$1 = "Müşteri";
const Department = "Departman";
const Category$1 = "Kategori";
const Created$1 = "Oluşturuldu";
const Save$1 = "Kaydet";
const Ticket = "Bilet";
const FAQ = "SSS";
const Title = "Başlık";
const Details = "Detaylar";
const Note = "Not";
const Submit$1 = "Gönder";
const Cancel$1 = "İptal";
const Organization = "Organizasyon";
const Province = "Bölge";
const State = "Eyalet";
const Delete$1 = "Sil";
const Update$1 = "Güncelle";
const Create$1 = "Oluştur";
const Location$1 = "Konum";
const Privacy = "Gizlilik";
const Company = "Şirket";
const Subscribe = "Abone Ol";
const Login$1 = "Giriş Yap";
const Hello$1 = "Merhaba";
const Registration = "Kayıt";
const tr = {
  "Edit Profile": "Profili Düzenle",
  Dashboard: Dashboard$1,
  Logout: Logout$1,
  Tickets: Tickets$1,
  Chat: Chat$1,
  FAQs: FAQs$1,
  Blog: Blog$1,
  "Knowledge Base": "Bilgi Bankası",
  More: More$1,
  Notes: Notes$1,
  Contacts: Contacts$1,
  Organizations: Organizations$1,
  Users: Users$1,
  Customers: Customers$1,
  Settings: Settings$1,
  Global: Global$1,
  Categories: Categories$1,
  Status: Status$1,
  Priorities: Priorities$1,
  Departments: Departments$1,
  Types: Types$1,
  "Email Templates": "E-posta Şablonları",
  "SMTP Mail": "SMTP Posta",
  Pusher: Pusher$1,
  "Pusher Chat": "Pusher Sohbet",
  "Front Pages": "Ön Sayfalar",
  Contact: Contact$1,
  Services: Services$1,
  "Privacy Policy": "Gizlilik Politikası",
  "Terms of Services": "Hizmet Şartları",
  Filter: Filter$1,
  Trashed: Trashed$1,
  "Trashed With": "Çöp Kutusundakiler",
  "Only Trashed": "Sadece Çöp Kutusundakiler",
  "Search...": "Ara...",
  Reset: Reset$1,
  Name: Name$1,
  Email: Email$1,
  Phone: Phone$1,
  Country: Country$1,
  "Create User": "Kullanıcı Oluştur",
  "First Name": "Ad",
  "First name": "Ad",
  "Last Name": "Soyad",
  "Last name": "Soyad",
  City: City$1,
  Address: Address$1,
  Password: Password$1,
  Role: Role$1,
  Photo: Photo$1,
  "New Tickets": "Yeni Biletler",
  "Open Tickets": "Açık Biletler",
  "Closed Tickets": "Kapalı Biletler",
  "Unassigned Tickets": "Atanmamış Biletler",
  "Ticket by department": "Departmana Göre Bilet",
  "Ticket by type": "Türüne Göre Bilet",
  "Top ticket creator": "En Çok Bilet Oluşturan",
  "Ticket history": "Bilet Geçmişi",
  "First Response Time": "İlk Yanıt Süresi",
  "Last Response Time": "Son Yanıt Süresi",
  Technical: Technical$1,
  Hardware: Hardware$1,
  Development: Development$1,
  Management: Management$1,
  Admin: Admin$1,
  Software: Software$1,
  Service: Service$1,
  Event: Event$1,
  Average: Average$1,
  Seconds: Seconds$1,
  "this month": "bu ay",
  "last month": "geçen ay",
  Month: Month$1,
  Months,
  Day: Day$1,
  Days,
  Hours: Hours$1,
  Hour,
  Minutes: Minutes$1,
  Minute,
  Key,
  Subject: Subject$1,
  "Attach files": "Dosya Ekle",
  Priority: Priority$1,
  "Date": "Tarih",
  Updated: Updated$1,
  Customer: Customer$1,
  Department,
  "Assigned to": "Atanan",
  "Ticket type": "Bilet Türü",
  Category: Category$1,
  Created: Created$1,
  "Request Details": "Talep Detayları",
  "Attach File": "Dosya Ekle",
  "Delete Ticket": "Bileti Sil",
  Save: Save$1,
  "Ticket discussion": "Bilet Tartışması",
  Ticket,
  FAQ,
  "Create Ticket": "Bilet Oluştur",
  "New Ticket": "Yeni Bilet",
  "Create FAQ": "SSS Oluştur",
  "Filter by priority": "Önceliğe Göre Filtrele",
  "Filter by status": "Duruma Göre Filtrele",
  "Delete FAQ": "SSS Sil",
  Title,
  Details,
  Note,
  Submit: Submit$1,
  Cancel: Cancel$1,
  "Delete note": "Notu Sil",
  Organization,
  Province,
  State,
  "Postal code": "Posta Kodu",
  "Delete Organization": "Organizasyonu Sil",
  "Update Organization": "Organizasyonu Güncelle",
  Delete: Delete$1,
  Update: Update$1,
  Create: Create$1,
  "Create Customer": "Müşteri Oluştur",
  "Manage Users": "Kullanıcıları Yönet",
  "Default Language": "Varsayılan Dil",
  "Email Notifications": "E-posta Bildirimleri",
  "Create ticket by new customer": "Yeni Müşteri İçin Bilet Oluştur",
  "Create ticket from dashboard": "Kontrol Panelinden Bilet Oluştur",
  "Status or priority changes": "Durum veya Öncelik Değişiklikleri",
  "Create a new user": "Yeni Kullanıcı Oluştur",
  "Email Template": "E-posta Şablonu",
  "SMTP Host": "SMTP Sunucusu",
  "SMTP Port": "SMTP Bağlantı Noktası",
  "SMTP Username": "SMTP Kullanıcı Adı",
  "SMTP Password": "SMTP Şifresi",
  Location: Location$1,
  "Phone number": "Telefon Numarası",
  "Email address": "E-posta Adresi",
  "Add New": "Yeni Ekle",
  Privacy,
  Company,
  Subscribe,
  Login: Login$1,
  "Submit ticket": "Bilet Gönder",
  "terms and conditions": "şartlar ve koşullar",
  "I agree with the": "Kabul ediyorum",
  "Don’t have account?": "Hesabınız yok mu?",
  "Remember Me": "Beni Hatırla",
  "Reset Password": "Şifreyi Sıfırla",
  "Already have an account?": "Zaten bir hesabınız var mı?",
  "Good Morning": "Günaydın",
  "Good Noon": "Tünaydın",
  "Good Evening": "İyi Akşamlar",
  "Good Afternoon": "İyi Günler",
  Hello: Hello$1,
  "Forgot your password?": "Şifrenizi mi unuttunuz?",
  "Send Password Reset Link": "Şifre Sıfırlama Bağlantısını Gönder",
  Registration
};
const __vite_glob_1_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Address: Address$1,
  Admin: Admin$1,
  Average: Average$1,
  Blog: Blog$1,
  Cancel: Cancel$1,
  Categories: Categories$1,
  Category: Category$1,
  Chat: Chat$1,
  City: City$1,
  Company,
  Contact: Contact$1,
  Contacts: Contacts$1,
  Country: Country$1,
  Create: Create$1,
  Created: Created$1,
  Customer: Customer$1,
  Customers: Customers$1,
  Dashboard: Dashboard$1,
  Day: Day$1,
  Days,
  Delete: Delete$1,
  Department,
  Departments: Departments$1,
  Details,
  Development: Development$1,
  Email: Email$1,
  Event: Event$1,
  FAQ,
  FAQs: FAQs$1,
  Filter: Filter$1,
  Global: Global$1,
  Hardware: Hardware$1,
  Hello: Hello$1,
  Hour,
  Hours: Hours$1,
  Key,
  Location: Location$1,
  Login: Login$1,
  Logout: Logout$1,
  Management: Management$1,
  Minute,
  Minutes: Minutes$1,
  Month: Month$1,
  Months,
  More: More$1,
  Name: Name$1,
  Note,
  Notes: Notes$1,
  Organization,
  Organizations: Organizations$1,
  Password: Password$1,
  Phone: Phone$1,
  Photo: Photo$1,
  Priorities: Priorities$1,
  Priority: Priority$1,
  Privacy,
  Province,
  Pusher: Pusher$1,
  Registration,
  Reset: Reset$1,
  Role: Role$1,
  Save: Save$1,
  Seconds: Seconds$1,
  Service: Service$1,
  Services: Services$1,
  Settings: Settings$1,
  Software: Software$1,
  State,
  Status: Status$1,
  Subject: Subject$1,
  Submit: Submit$1,
  Subscribe,
  Technical: Technical$1,
  Ticket,
  Tickets: Tickets$1,
  Title,
  Trashed: Trashed$1,
  Types: Types$1,
  Update: Update$1,
  Updated: Updated$1,
  Users: Users$1,
  default: tr
}, Symbol.toStringTag, { value: "Module" }));
const Dashboard = "ڈیش بورڈ";
const Logout = "لاگ آؤٹ";
const Tickets = "ٹکٹس";
const Chat = "چیٹ";
const FAQs = "عمومی سوالات";
const Blog = "بلاگ";
const More = "مزید";
const Notes = "نوٹس";
const Contacts = "رابطے";
const Organizations = "تنظیمیں";
const Users = "صارفین";
const Customers = "گاہک";
const Settings = "ترتیبات";
const Global = "عالمی";
const Categories = "زمرے";
const Status = "حیثیت";
const Priorities = "ترجیحات";
const Departments = "محکمے";
const Types = "اقسام";
const Pusher = "پشر";
const Contact = "رابطہ";
const Services = "خدمات";
const Filter = "فلٹر";
const Trashed = "رد شدہ";
const Reset = "ری سیٹ";
const Name = "نام";
const Email = "ای میل";
const Phone = "فون";
const Country = "ملک";
const City = "شہر";
const Address = "پتہ";
const Password = "پاس ورڈ";
const Role = "کردار";
const Photo = "تصویر";
const Technical = "تکنیکی";
const Hardware = "ہارڈویئر";
const Development = "ڈیولپمنٹ";
const Management = "انتظامیہ";
const Admin = "ایڈمن";
const Software = "سافٹ ویئر";
const Service = "سروس";
const Event = "واقعہ";
const Average = "اوسط";
const Seconds = "سیکنڈ";
const Month = "ماہ";
const Day = "دن";
const Hours = "گھنٹے";
const Minutes = "منٹ";
const Subject = "موضوع";
const Priority = "ترجیح";
const Updated = "تازہ کاری شدہ";
const Customer = "گاہک";
const Category = "زمرہ";
const Created = "تخلیق کردہ";
const Save = "محفوظ کریں";
const Submit = "جمع کرائیں";
const Cancel = "منسوخ کریں";
const Delete = "حذف کریں";
const Update = "تازہ کاری";
const Create = "تخلیق کریں";
const Location = "مقام";
const Icon = "آئیکن";
const Login = "لاگ ان";
const Register = "رجسٹر";
const Hello = "ہیلو";
const ur = {
  "Edit Profile": "پروفائل میں ترمیم کریں",
  Dashboard,
  Logout,
  Tickets,
  Chat,
  FAQs,
  Blog,
  "Knowledge Base": "معلومات کی بنیاد",
  More,
  Notes,
  Contacts,
  Organizations,
  Users,
  Customers,
  Settings,
  Global,
  Categories,
  Status,
  Priorities,
  Departments,
  Types,
  "Email Templates": "ای میل ٹیمپلیٹس",
  "SMTP Mail": "SMTP میل",
  Pusher,
  "Pusher Chat": "پشر چیٹ",
  "Front Pages": "فرنٹ پیجز",
  Contact,
  Services,
  "Privacy Policy": "رازداری کی پالیسی",
  "Terms of Services": "خدمات کی شرائط",
  Filter,
  Trashed,
  "Trashed With": "کے ساتھ رد شدہ",
  "Only Trashed": "صرف رد شدہ",
  "Search...": "تلاش کریں...",
  Reset,
  Name,
  Email,
  Phone,
  Country,
  "Create User": "صارف بنائیں",
  "First Name": "پہلا نام",
  "Last Name": "آخری نام",
  City,
  Address,
  Password,
  Role,
  Photo,
  "New Tickets": "نئے ٹکٹس",
  "Open Tickets": "کھلے ٹکٹس",
  "Closed Tickets": "بند ٹکٹس",
  "Unassigned Tickets": "غیر منسوب ٹکٹس",
  "Ticket by department": "محکمے کے لحاظ سے ٹکٹ",
  "Ticket by type": "قسم کے لحاظ سے ٹکٹ",
  "Top ticket creator": "ٹاپ ٹکٹ تخلیق کار",
  "Ticket history": "ٹکٹ کی تاریخ",
  "First Response Time": "پہلی ردعمل کا وقت",
  "Last Response Time": "آخری ردعمل کا وقت",
  Technical,
  Hardware,
  Development,
  Management,
  Admin,
  Software,
  Service,
  Event,
  Average,
  Seconds,
  "this month": "اس ماہ",
  "last month": "گزشتہ ماہ",
  Month,
  Day,
  Hours,
  Minutes,
  Subject,
  "Attach files": "فائل منسلک کریں",
  Priority,
  "Date": "تاریخ",
  Updated,
  Customer,
  "Assigned to": "مقرر کردہ",
  "Ticket type": "ٹکٹ کی قسم",
  Category,
  Created,
  "Request Details": "درخواست کی تفصیلات",
  "Attach File": "فائل منسلک کریں",
  "Delete Ticket": "ٹکٹ حذف کریں",
  Save,
  "Ticket discussion": "ٹکٹ مباحثہ",
  "Comment histories": "تبصروں کی تاریخ",
  "Write a comment and press enter to send...": "تبصرہ لکھیں اور بھیجنے کے لئے انٹر دبائیں...",
  "Type a message...": "پیغام ٹائپ کریں...",
  "Create Ticket": "ٹکٹ بنائیں",
  "New Ticket": "نیا ٹکٹ",
  "Create FAQ": "عمومی سوال بنائیں",
  Submit,
  Cancel,
  Delete,
  Update,
  Create,
  "Are you sure you want to delete this user?": "کیا آپ واقعی اس صارف کو حذف کرنا چاہتے ہیں؟",
  "Default Language": "طے شدہ زبان",
  "Email Notifications": "ای میل اطلاعات",
  "Cron Job Instruction": "کرون جاب ہدایات",
  "Create New": "نیا بنائیں",
  "SMTP Host": "SMTP ہوسٹ",
  "SMTP Port": "SMTP پورٹ",
  "SMTP Username": "SMTP صارف نام",
  "SMTP Password": "SMTP پاس ورڈ",
  "Mail Encryption": "میل انکرپشن",
  "From Address": "بھیجنے والا پتہ",
  Location,
  Icon,
  "Contact us": "ہم سے رابطہ کریں",
  Login,
  Register,
  "Good Morning": "صبح بخیر",
  "Good Noon": "دوپہر بخیر",
  "Good Evening": "شام بخیر",
  "Good Afternoon": "سہ پہر بخیر",
  Hello,
  "Forgot your password?": "پاس ورڈ بھول گئے؟",
  "Send Password Reset Link": "پاس ورڈ ری سیٹ لنک بھیجیں"
};
const __vite_glob_1_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Address,
  Admin,
  Average,
  Blog,
  Cancel,
  Categories,
  Category,
  Chat,
  City,
  Contact,
  Contacts,
  Country,
  Create,
  Created,
  Customer,
  Customers,
  Dashboard,
  Day,
  Delete,
  Departments,
  Development,
  Email,
  Event,
  FAQs,
  Filter,
  Global,
  Hardware,
  Hello,
  Hours,
  Icon,
  Location,
  Login,
  Logout,
  Management,
  Minutes,
  Month,
  More,
  Name,
  Notes,
  Organizations,
  Password,
  Phone,
  Photo,
  Priorities,
  Priority,
  Pusher,
  Register,
  Reset,
  Role,
  Save,
  Seconds,
  Service,
  Services,
  Settings,
  Software,
  Status,
  Subject,
  Submit,
  Technical,
  Tickets,
  Trashed,
  Types,
  Update,
  Updated,
  Users,
  default: ur
}, Symbol.toStringTag, { value: "Module" }));
async function resolvePageComponent(path, pages) {
  for (const p2 of Array.isArray(path) ? path : [path]) {
    const page = pages[p2];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
function t() {
  return t = Object.assign ? Object.assign.bind() : function(t4) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var r2 = arguments[e2];
      for (var n2 in r2) ({}).hasOwnProperty.call(r2, n2) && (t4[n2] = r2[n2]);
    }
    return t4;
  }, t.apply(null, arguments);
}
var e = String.prototype.replace, r = /%20/g, n = "RFC3986", o = { default: n, formatters: { RFC1738: function(t4) {
  return e.call(t4, r, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738", RFC3986: n }, i = Object.prototype.hasOwnProperty, u = Array.isArray, a = function() {
  for (var t4 = [], e2 = 0; e2 < 256; ++e2) t4.push("%" + ((e2 < 16 ? "0" : "") + e2.toString(16)).toUpperCase());
  return t4;
}(), s = function(t4, e2) {
  for (var r2 = e2 && e2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, n2 = 0; n2 < t4.length; ++n2) void 0 !== t4[n2] && (r2[n2] = t4[n2]);
  return r2;
}, f = { arrayToObject: s, assign: function(t4, e2) {
  return Object.keys(e2).reduce(function(t5, r2) {
    return t5[r2] = e2[r2], t5;
  }, t4);
}, combine: function(t4, e2) {
  return [].concat(t4, e2);
}, compact: function(t4) {
  for (var e2 = [{ obj: { o: t4 }, prop: "o" }], r2 = [], n2 = 0; n2 < e2.length; ++n2) for (var o2 = e2[n2], i2 = o2.obj[o2.prop], a2 = Object.keys(i2), s2 = 0; s2 < a2.length; ++s2) {
    var f2 = a2[s2], c2 = i2[f2];
    "object" == typeof c2 && null !== c2 && -1 === r2.indexOf(c2) && (e2.push({ obj: i2, prop: f2 }), r2.push(c2));
  }
  return function(t5) {
    for (; t5.length > 1; ) {
      var e3 = t5.pop(), r3 = e3.obj[e3.prop];
      if (u(r3)) {
        for (var n3 = [], o3 = 0; o3 < r3.length; ++o3) void 0 !== r3[o3] && n3.push(r3[o3]);
        e3.obj[e3.prop] = n3;
      }
    }
  }(e2), t4;
}, decode: function(t4, e2, r2) {
  var n2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === r2) return n2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n2);
  } catch (t5) {
    return n2;
  }
}, encode: function(t4, e2, r2, n2, i2) {
  if (0 === t4.length) return t4;
  var u2 = t4;
  if ("symbol" == typeof t4 ? u2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (u2 = String(t4)), "iso-8859-1" === r2) return escape(u2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
    return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
  });
  for (var s2 = "", f2 = 0; f2 < u2.length; ++f2) {
    var c2 = u2.charCodeAt(f2);
    45 === c2 || 46 === c2 || 95 === c2 || 126 === c2 || c2 >= 48 && c2 <= 57 || c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122 || i2 === o.RFC1738 && (40 === c2 || 41 === c2) ? s2 += u2.charAt(f2) : c2 < 128 ? s2 += a[c2] : c2 < 2048 ? s2 += a[192 | c2 >> 6] + a[128 | 63 & c2] : c2 < 55296 || c2 >= 57344 ? s2 += a[224 | c2 >> 12] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2] : (c2 = 65536 + ((1023 & c2) << 10 | 1023 & u2.charCodeAt(f2 += 1)), s2 += a[240 | c2 >> 18] + a[128 | c2 >> 12 & 63] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2]);
  }
  return s2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, e2) {
  if (u(t4)) {
    for (var r2 = [], n2 = 0; n2 < t4.length; n2 += 1) r2.push(e2(t4[n2]));
    return r2;
  }
  return e2(t4);
}, merge: function t2(e2, r2, n2) {
  if (!r2) return e2;
  if ("object" != typeof r2) {
    if (u(e2)) e2.push(r2);
    else {
      if (!e2 || "object" != typeof e2) return [e2, r2];
      (n2 && (n2.plainObjects || n2.allowPrototypes) || !i.call(Object.prototype, r2)) && (e2[r2] = true);
    }
    return e2;
  }
  if (!e2 || "object" != typeof e2) return [e2].concat(r2);
  var o2 = e2;
  return u(e2) && !u(r2) && (o2 = s(e2, n2)), u(e2) && u(r2) ? (r2.forEach(function(r3, o3) {
    if (i.call(e2, o3)) {
      var u2 = e2[o3];
      u2 && "object" == typeof u2 && r3 && "object" == typeof r3 ? e2[o3] = t2(u2, r3, n2) : e2.push(r3);
    } else e2[o3] = r3;
  }), e2) : Object.keys(r2).reduce(function(e3, o3) {
    var u2 = r2[o3];
    return e3[o3] = i.call(e3, o3) ? t2(e3[o3], u2, n2) : u2, e3;
  }, o2);
} }, c = Object.prototype.hasOwnProperty, l = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, e2) {
  return t4 + "[" + e2 + "]";
}, repeat: function(t4) {
  return t4;
} }, p = Array.isArray, h = String.prototype.split, y = Array.prototype.push, d = function(t4, e2) {
  y.apply(t4, p(e2) ? e2 : [e2]);
}, g = Date.prototype.toISOString, b = o.default, v = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: f.encode, encodeValuesOnly: false, format: b, formatter: o.formatters[b], indices: false, serializeDate: function(t4) {
  return g.call(t4);
}, skipNulls: false, strictNullHandling: false }, m = function t3(e2, r2, n2, o2, i2, u2, a2, s2, c2, l2, y2, g2, b2, m2) {
  var j2, w2 = e2;
  if ("function" == typeof a2 ? w2 = a2(r2, w2) : w2 instanceof Date ? w2 = l2(w2) : "comma" === n2 && p(w2) && (w2 = f.maybeMap(w2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), null === w2) {
    if (o2) return u2 && !b2 ? u2(r2, v.encoder, m2, "key", y2) : r2;
    w2 = "";
  }
  if ("string" == typeof (j2 = w2) || "number" == typeof j2 || "boolean" == typeof j2 || "symbol" == typeof j2 || "bigint" == typeof j2 || f.isBuffer(w2)) {
    if (u2) {
      var $2 = b2 ? r2 : u2(r2, v.encoder, m2, "key", y2);
      if ("comma" === n2 && b2) {
        for (var O2 = h.call(String(w2), ","), E2 = "", R2 = 0; R2 < O2.length; ++R2) E2 += (0 === R2 ? "" : ",") + g2(u2(O2[R2], v.encoder, m2, "value", y2));
        return [g2($2) + "=" + E2];
      }
      return [g2($2) + "=" + g2(u2(w2, v.encoder, m2, "value", y2))];
    }
    return [g2(r2) + "=" + g2(String(w2))];
  }
  var S2, x2 = [];
  if (void 0 === w2) return x2;
  if ("comma" === n2 && p(w2)) S2 = [{ value: w2.length > 0 ? w2.join(",") || null : void 0 }];
  else if (p(a2)) S2 = a2;
  else {
    var N2 = Object.keys(w2);
    S2 = s2 ? N2.sort(s2) : N2;
  }
  for (var T2 = 0; T2 < S2.length; ++T2) {
    var k2 = S2[T2], C = "object" == typeof k2 && void 0 !== k2.value ? k2.value : w2[k2];
    if (!i2 || null !== C) {
      var _ = p(w2) ? "function" == typeof n2 ? n2(r2, k2) : r2 : r2 + (c2 ? "." + k2 : "[" + k2 + "]");
      d(x2, t3(C, _, n2, o2, i2, u2, a2, s2, c2, l2, y2, g2, b2, m2));
    }
  }
  return x2;
}, j = Object.prototype.hasOwnProperty, w = Array.isArray, $ = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: f.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, O = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, e2) {
    return String.fromCharCode(parseInt(e2, 10));
  });
}, E = function(t4, e2) {
  return t4 && "string" == typeof t4 && e2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, R = function(t4, e2, r2, n2) {
  if (t4) {
    var o2 = r2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = r2.depth > 0 && /(\[[^[\]]*])/.exec(o2), a2 = u2 ? o2.slice(0, u2.index) : o2, s2 = [];
    if (a2) {
      if (!r2.plainObjects && j.call(Object.prototype, a2) && !r2.allowPrototypes) return;
      s2.push(a2);
    }
    for (var f2 = 0; r2.depth > 0 && null !== (u2 = i2.exec(o2)) && f2 < r2.depth; ) {
      if (f2 += 1, !r2.plainObjects && j.call(Object.prototype, u2[1].slice(1, -1)) && !r2.allowPrototypes) return;
      s2.push(u2[1]);
    }
    return u2 && s2.push("[" + o2.slice(u2.index) + "]"), function(t5, e3, r3, n3) {
      for (var o3 = n3 ? e3 : E(e3, r3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, a3 = t5[i3];
        if ("[]" === a3 && r3.parseArrays) u3 = [].concat(o3);
        else {
          u3 = r3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var s3 = "[" === a3.charAt(0) && "]" === a3.charAt(a3.length - 1) ? a3.slice(1, -1) : a3, f3 = parseInt(s3, 10);
          r3.parseArrays || "" !== s3 ? !isNaN(f3) && a3 !== s3 && String(f3) === s3 && f3 >= 0 && r3.parseArrays && f3 <= r3.arrayLimit ? (u3 = [])[f3] = o3 : "__proto__" !== s3 && (u3[s3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(s2, e2, r2, n2);
  }
}, S = function(t4, e2) {
  var r2 = /* @__PURE__ */ function(t5) {
    return $;
  }();
  if ("" === t4 || null == t4) return r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n2 = "string" == typeof t4 ? function(t5, e3) {
    var r3, n3 = {}, o3 = (e3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(e3.delimiter, Infinity === e3.parameterLimit ? void 0 : e3.parameterLimit), i3 = -1, u3 = e3.charset;
    if (e3.charsetSentinel) for (r3 = 0; r3 < o3.length; ++r3) 0 === o3[r3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[r3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[r3] && (u3 = "iso-8859-1"), i3 = r3, r3 = o3.length);
    for (r3 = 0; r3 < o3.length; ++r3) if (r3 !== i3) {
      var a3, s3, c2 = o3[r3], l2 = c2.indexOf("]="), p2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
      -1 === p2 ? (a3 = e3.decoder(c2, $.decoder, u3, "key"), s3 = e3.strictNullHandling ? null : "") : (a3 = e3.decoder(c2.slice(0, p2), $.decoder, u3, "key"), s3 = f.maybeMap(E(c2.slice(p2 + 1), e3), function(t6) {
        return e3.decoder(t6, $.decoder, u3, "value");
      })), s3 && e3.interpretNumericEntities && "iso-8859-1" === u3 && (s3 = O(s3)), c2.indexOf("[]=") > -1 && (s3 = w(s3) ? [s3] : s3), n3[a3] = j.call(n3, a3) ? f.combine(n3[a3], s3) : s3;
    }
    return n3;
  }(t4, r2) : t4, o2 = r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(n2), u2 = 0; u2 < i2.length; ++u2) {
    var a2 = i2[u2], s2 = R(a2, n2[a2], r2, "string" == typeof t4);
    o2 = f.merge(o2, s2, r2);
  }
  return f.compact(o2);
};
class x {
  constructor(t4, e2, r2) {
    var n2, o2;
    this.name = t4, this.definition = e2, this.bindings = null != (n2 = e2.bindings) ? n2 : {}, this.wheres = null != (o2 = e2.wheres) ? o2 : {}, this.config = r2;
  }
  get template() {
    const t4 = `${this.origin}/${this.definition.uri}`.replace(/\/+$/, "");
    return "" === t4 ? "/" : t4;
  }
  get origin() {
    return this.config.absolute ? this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ""}` : this.config.url : "";
  }
  get parameterSegments() {
    var t4, e2;
    return null != (t4 = null == (e2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : e2.map((t5) => ({ name: t5.replace(/{|\??}/g, ""), required: !/\?}$/.test(t5) }))) ? t4 : [];
  }
  matchesUrl(t4) {
    var e2;
    if (!this.definition.methods.includes("GET")) return false;
    const r2 = this.template.replace(/[.*+$()[\]]/g, "\\$&").replace(/(\/?){([^}?]*)(\??)}/g, (t5, e3, r3, n3) => {
      var o3;
      const i3 = `(?<${r3}>${(null == (o3 = this.wheres[r3]) ? void 0 : o3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return n3 ? `(${e3}${i3})?` : `${e3}${i3}`;
    }).replace(/^\w+:\/\//, ""), [n2, o2] = t4.replace(/^\w+:\/\//, "").split("?"), i2 = null != (e2 = new RegExp(`^${r2}/?$`).exec(n2)) ? e2 : new RegExp(`^${r2}/?$`).exec(decodeURI(n2));
    if (i2) {
      for (const t5 in i2.groups) i2.groups[t5] = "string" == typeof i2.groups[t5] ? decodeURIComponent(i2.groups[t5]) : i2.groups[t5];
      return { params: i2.groups, query: S(o2) };
    }
    return false;
  }
  compile(t4) {
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, (e2, r2, n2) => {
      var o2, i2;
      if (!n2 && [null, void 0].includes(t4[r2])) throw new Error(`Ziggy error: '${r2}' parameter is required for route '${this.name}'.`);
      if (this.wheres[r2] && !new RegExp(`^${n2 ? `(${this.wheres[r2]})?` : this.wheres[r2]}$`).test(null != (i2 = t4[r2]) ? i2 : "")) throw new Error(`Ziggy error: '${r2}' parameter '${t4[r2]}' does not match required format '${this.wheres[r2]}' for route '${this.name}'.`);
      return encodeURI(null != (o2 = t4[r2]) ? o2 : "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/, "$1/").replace(/\/+$/, "") : this.template;
  }
}
class N extends String {
  constructor(e2, r2, n2 = true, o2) {
    if (super(), this.t = null != o2 ? o2 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, this.t = t({}, this.t, { absolute: n2 }), e2) {
      if (!this.t.routes[e2]) throw new Error(`Ziggy error: route '${e2}' is not in the route list.`);
      this.i = new x(e2, this.t.routes[e2], this.t), this.u = this.l(r2);
    }
  }
  toString() {
    const e2 = Object.keys(this.u).filter((t4) => !this.i.parameterSegments.some(({ name: e3 }) => e3 === t4)).filter((t4) => "_query" !== t4).reduce((e3, r2) => t({}, e3, { [r2]: this.u[r2] }), {});
    return this.i.compile(this.u) + function(t4, e3) {
      var r2, n2 = t4, i2 = function(t5) {
        if (!t5) return v;
        if (null != t5.encoder && "function" != typeof t5.encoder) throw new TypeError("Encoder has to be a function.");
        var e4 = t5.charset || v.charset;
        if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var r3 = o.default;
        if (void 0 !== t5.format) {
          if (!c.call(o.formatters, t5.format)) throw new TypeError("Unknown format option provided.");
          r3 = t5.format;
        }
        var n3 = o.formatters[r3], i3 = v.filter;
        return ("function" == typeof t5.filter || p(t5.filter)) && (i3 = t5.filter), { addQueryPrefix: "boolean" == typeof t5.addQueryPrefix ? t5.addQueryPrefix : v.addQueryPrefix, allowDots: void 0 === t5.allowDots ? v.allowDots : !!t5.allowDots, charset: e4, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : v.charsetSentinel, delimiter: void 0 === t5.delimiter ? v.delimiter : t5.delimiter, encode: "boolean" == typeof t5.encode ? t5.encode : v.encode, encoder: "function" == typeof t5.encoder ? t5.encoder : v.encoder, encodeValuesOnly: "boolean" == typeof t5.encodeValuesOnly ? t5.encodeValuesOnly : v.encodeValuesOnly, filter: i3, format: r3, formatter: n3, serializeDate: "function" == typeof t5.serializeDate ? t5.serializeDate : v.serializeDate, skipNulls: "boolean" == typeof t5.skipNulls ? t5.skipNulls : v.skipNulls, sort: "function" == typeof t5.sort ? t5.sort : null, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : v.strictNullHandling };
      }(e3);
      "function" == typeof i2.filter ? n2 = (0, i2.filter)("", n2) : p(i2.filter) && (r2 = i2.filter);
      var u2 = [];
      if ("object" != typeof n2 || null === n2) return "";
      var a2 = l[e3 && e3.arrayFormat in l ? e3.arrayFormat : e3 && "indices" in e3 ? e3.indices ? "indices" : "repeat" : "indices"];
      r2 || (r2 = Object.keys(n2)), i2.sort && r2.sort(i2.sort);
      for (var s2 = 0; s2 < r2.length; ++s2) {
        var f2 = r2[s2];
        i2.skipNulls && null === n2[f2] || d(u2, m(n2[f2], f2, a2, i2.strictNullHandling, i2.skipNulls, i2.encode ? i2.encoder : null, i2.filter, i2.sort, i2.allowDots, i2.serializeDate, i2.format, i2.formatter, i2.encodeValuesOnly, i2.charset));
      }
      var h2 = u2.join(i2.delimiter), y2 = true === i2.addQueryPrefix ? "?" : "";
      return i2.charsetSentinel && (y2 += "iso-8859-1" === i2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), h2.length > 0 ? y2 + h2 : "";
    }(t({}, e2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: (t4, e3) => "boolean" == typeof t4 ? Number(t4) : e3(t4) });
  }
  p(e2) {
    e2 ? this.t.absolute && e2.startsWith("/") && (e2 = this.h().host + e2) : e2 = this.v();
    let r2 = {};
    const [n2, o2] = Object.entries(this.t.routes).find(([t4, n3]) => r2 = new x(t4, n3, this.t).matchesUrl(e2)) || [void 0, void 0];
    return t({ name: n2 }, r2, { route: o2 });
  }
  v() {
    const { host: t4, pathname: e2, search: r2 } = this.h();
    return (this.t.absolute ? t4 + e2 : e2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + r2;
  }
  current(e2, r2) {
    const { name: n2, params: o2, query: i2, route: u2 } = this.p();
    if (!e2) return n2;
    const a2 = new RegExp(`^${e2.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(n2);
    if ([null, void 0].includes(r2) || !a2) return a2;
    const s2 = new x(n2, u2, this.t);
    r2 = this.l(r2, s2);
    const f2 = t({}, o2, i2);
    if (Object.values(r2).every((t4) => !t4) && !Object.values(f2).some((t4) => void 0 !== t4)) return true;
    const c2 = (t4, e3) => Object.entries(t4).every(([t5, r3]) => Array.isArray(r3) && Array.isArray(e3[t5]) ? r3.every((r4) => e3[t5].includes(r4)) : "object" == typeof r3 && "object" == typeof e3[t5] && null !== r3 && null !== e3[t5] ? c2(r3, e3[t5]) : e3[t5] == r3);
    return c2(r2, f2);
  }
  h() {
    var t4, e2, r2, n2, o2, i2;
    const { host: u2 = "", pathname: a2 = "", search: s2 = "" } = "undefined" != typeof window ? window.location : {};
    return { host: null != (t4 = null == (e2 = this.t.location) ? void 0 : e2.host) ? t4 : u2, pathname: null != (r2 = null == (n2 = this.t.location) ? void 0 : n2.pathname) ? r2 : a2, search: null != (o2 = null == (i2 = this.t.location) ? void 0 : i2.search) ? o2 : s2 };
  }
  get params() {
    const { params: e2, query: r2 } = this.p();
    return t({}, e2, r2);
  }
  get routeParams() {
    return this.p().params;
  }
  get queryParams() {
    return this.p().query;
  }
  has(t4) {
    return this.t.routes.hasOwnProperty(t4);
  }
  l(e2 = {}, r2 = this.i) {
    null != e2 || (e2 = {}), e2 = ["string", "number"].includes(typeof e2) ? [e2] : e2;
    const n2 = r2.parameterSegments.filter(({ name: t4 }) => !this.t.defaults[t4]);
    return Array.isArray(e2) ? e2 = e2.reduce((e3, r3, o2) => t({}, e3, n2[o2] ? { [n2[o2].name]: r3 } : "object" == typeof r3 ? r3 : { [r3]: "" }), {}) : 1 !== n2.length || e2[n2[0].name] || !e2.hasOwnProperty(Object.values(r2.bindings)[0]) && !e2.hasOwnProperty("id") || (e2 = { [n2[0].name]: e2 }), t({}, this.m(r2), this.j(e2, r2));
  }
  m(e2) {
    return e2.parameterSegments.filter(({ name: t4 }) => this.t.defaults[t4]).reduce((e3, { name: r2 }, n2) => t({}, e3, { [r2]: this.t.defaults[r2] }), {});
  }
  j(e2, { bindings: r2, parameterSegments: n2 }) {
    return Object.entries(e2).reduce((e3, [o2, i2]) => {
      if (!i2 || "object" != typeof i2 || Array.isArray(i2) || !n2.some(({ name: t4 }) => t4 === o2)) return t({}, e3, { [o2]: i2 });
      if (!i2.hasOwnProperty(r2[o2])) {
        if (!i2.hasOwnProperty("id")) throw new Error(`Ziggy error: object passed as '${o2}' parameter is missing route model binding key '${r2[o2]}'.`);
        r2[o2] = "id";
      }
      return t({}, e3, { [o2]: i2[r2[o2]] });
    }, {});
  }
  valueOf() {
    return this.toString();
  }
}
function T(t4, e2, r2, n2) {
  const o2 = new N(t4, e2, r2, n2);
  return t4 ? o2.toString() : o2;
}
const k = { install(t4, e2) {
  const r2 = (t5, r3, n2, o2 = e2) => T(t5, r3, n2, o2);
  parseInt(t4.version) > 2 ? (t4.config.globalProperties.route = r2, t4.provide("route", r2)) : t4.mixin({ methods: { route: r2 } });
} };
const appName = "HelpDesk";
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, /* @__PURE__ */ Object.assign({ "./Pages/Auth/ForgotPassword.vue": () => import("./assets/ForgotPassword-BuEX4fPs.js"), "./Pages/Auth/ForgotPasswordInput.vue": () => import("./assets/ForgotPasswordInput-BzN8L1t7.js"), "./Pages/Auth/Login.vue": () => import("./assets/Login-CsqjUCk6.js"), "./Pages/Auth/Register.vue": () => import("./assets/Register-BjrdYLIM.js"), "./Pages/Blank.vue": () => import("./assets/Blank-BldM4C5p.js"), "./Pages/Blogs/ByCategory.vue": () => import("./assets/ByCategory-BBNNVKMH.js"), "./Pages/Blogs/Create.vue": () => import("./assets/Create-CbN97_ri.js"), "./Pages/Blogs/Edit.vue": () => import("./assets/Edit-DNiyor7F.js"), "./Pages/Blogs/Index.vue": () => import("./assets/Index-DWXHWktB.js"), "./Pages/Categories/Create.vue": () => import("./assets/Create-DSPHG74A.js"), "./Pages/Categories/Edit.vue": () => import("./assets/Edit-df0TkaeX.js"), "./Pages/Categories/Index.vue": () => import("./assets/Index-CskKFcfz.js"), "./Pages/Chat/Index.vue": () => import("./assets/Index-CMZs3w1g.js"), "./Pages/Cities/Create.vue": () => import("./assets/Create-Y_VgGbgj.js"), "./Pages/Cities/Edit.vue": () => import("./assets/Edit-DjX5lagL.js"), "./Pages/Cities/Index.vue": () => import("./assets/Index-DTR-Mkt6.js"), "./Pages/Contacts/Create.vue": () => import("./assets/Create-BmNQ6C86.js"), "./Pages/Contacts/Edit.vue": () => import("./assets/Edit-CvBpSo3L.js"), "./Pages/Contacts/Index.vue": () => import("./assets/Index-Cqpx8RnQ.js"), "./Pages/Customers/Create.vue": () => import("./assets/Create-D40AoC0D.js"), "./Pages/Customers/Edit.vue": () => import("./assets/Edit-D7ajYOEb.js"), "./Pages/Customers/Index.vue": () => import("./assets/Index-DSzz6_jk.js"), "./Pages/Dashboard/Index.vue": () => import("./assets/Index-d5kRB2Ji.js"), "./Pages/Departments/Create.vue": () => import("./assets/Create-_lcgF9DT.js"), "./Pages/Departments/Edit.vue": () => import("./assets/Edit-DGKd-Qo2.js"), "./Pages/Departments/Index.vue": () => import("./assets/Index-DXXMjCOc.js"), "./Pages/EmailTemplates/Edit.vue": () => import("./assets/Edit-mOY8-WxB.js"), "./Pages/EmailTemplates/Index.vue": () => import("./assets/Index-DlcHWuql.js"), "./Pages/Error.vue": () => import("./assets/Error-CCxgwbjU.js"), "./Pages/Faqs/Create.vue": () => import("./assets/Create-D6bjZeuA.js"), "./Pages/Faqs/Edit.vue": () => import("./assets/Edit-58LTCr0Y.js"), "./Pages/Faqs/Index.vue": () => import("./assets/Index-D-McUGdP.js"), "./Pages/Faqs/Site.vue": () => import("./assets/Site-BXGjM5N_.js"), "./Pages/FrontPages/Contact.vue": () => import("./assets/Contact-69asEAqK.js"), "./Pages/FrontPages/Footer.vue": () => import("./assets/Footer-ButKZsfH.js"), "./Pages/FrontPages/Home.vue": () => import("./assets/Home-N4Yfri1q.js"), "./Pages/FrontPages/PrivacyPolicy.vue": () => import("./assets/PrivacyPolicy-DKkvrOIH.js"), "./Pages/FrontPages/Services.vue": () => import("./assets/Services-BzOGzmhZ.js"), "./Pages/FrontPages/TermsOfServices.vue": () => import("./assets/TermsOfServices-D2fNbnLt.js"), "./Pages/KnowledgeBase/Create.vue": () => import("./assets/Create-C54PSWLD.js"), "./Pages/KnowledgeBase/Det.vue": () => import("./assets/Det-DDqrSPdb.js"), "./Pages/KnowledgeBase/Edit.vue": () => import("./assets/Edit-DZ_Bor_2.js"), "./Pages/KnowledgeBase/Index.vue": () => import("./assets/Index-DW3H2Pyk.js"), "./Pages/Landing/Blog/ByType.vue": () => import("./assets/ByType-BnbjZGRW.js"), "./Pages/Landing/Blog/Details.vue": () => import("./assets/Details-BnMEWUAv.js"), "./Pages/Landing/Blog/Index.vue": () => import("./assets/Index-D74XZj-d.js"), "./Pages/Landing/Contact.vue": () => import("./assets/Contact-BW-Wg-cp.js"), "./Pages/Landing/FAQ.vue": () => import("./assets/FAQ-CVADsfZJ.js"), "./Pages/Landing/Home.vue": () => import("./assets/Home-_w9_xPse.js"), "./Pages/Landing/KnowledgeBase/ByType.vue": () => import("./assets/ByType-DPfKHBL8.js"), "./Pages/Landing/KnowledgeBase/Details.vue": () => import("./assets/Details-Dsb8KSlE.js"), "./Pages/Landing/KnowledgeBase/Index.vue": () => import("./assets/Index-BX8jAXqL.js"), "./Pages/Landing/OpenTicket.vue": () => import("./assets/OpenTicket-B8N-YrEg.js"), "./Pages/Landing/PrivacyPolicy.vue": () => import("./assets/PrivacyPolicy-B7CG5TbR.js"), "./Pages/Landing/Services.vue": () => import("./assets/Services-Q_WlF1Z0.js"), "./Pages/Landing/TermsOfServices.vue": () => import("./assets/TermsOfServices-CluwVVo2.js"), "./Pages/Languages/Create.vue": () => import("./assets/Create-CJmUeeqR.js"), "./Pages/Languages/Edit.vue": () => import("./assets/Edit-CBbn1R_j.js"), "./Pages/Languages/Index.vue": () => import("./assets/Index-CUMqQbyf.js"), "./Pages/Notes/Index.vue": () => import("./assets/Index-CUsPDJuC.js"), "./Pages/Organizations/Create.vue": () => import("./assets/Create-BMpbpW5r.js"), "./Pages/Organizations/Edit.vue": () => import("./assets/Edit-DytgoKe6.js"), "./Pages/Organizations/Index.vue": () => import("./assets/Index-CpW931l4.js"), "./Pages/PendingUsers/Index.vue": () => import("./assets/Index-B66AW3NN.js"), "./Pages/Priorities/Create.vue": () => import("./assets/Create-DeSFVYpS.js"), "./Pages/Priorities/Edit.vue": () => import("./assets/Edit-BQKQrT_W.js"), "./Pages/Priorities/Index.vue": () => import("./assets/Index-BUG6Vjdc.js"), "./Pages/Reports/Index.vue": () => import("./assets/Index-DLK2N4Z_.js"), "./Pages/Roles/Create.vue": () => import("./assets/Create-Bll6SZyn.js"), "./Pages/Roles/Edit.vue": () => import("./assets/Edit-BKZcpQm-.js"), "./Pages/Roles/Index.vue": () => import("./assets/Index-CtGPKDPp.js"), "./Pages/Settings/Index.vue": () => import("./assets/Index-B5Pp3UZ8.js"), "./Pages/Settings/Piping.vue": () => import("./assets/Piping-BIPeFY6O.js"), "./Pages/Settings/Pusher.vue": () => import("./assets/Pusher-Csur_CTO.js"), "./Pages/Settings/Smtp.vue": () => import("./assets/Smtp-67v_JTCe.js"), "./Pages/Settings/Update.vue": () => import("./assets/Update-KTxUiV29.js"), "./Pages/Statuses/Create.vue": () => import("./assets/Create-BdOtmlQy.js"), "./Pages/Statuses/Edit.vue": () => import("./assets/Edit-BuUScM54.js"), "./Pages/Statuses/Index.vue": () => import("./assets/Index-sJ0g6pQd.js"), "./Pages/Tickets/Create.vue": () => import("./assets/Create-CIEKH9Ki.js"), "./Pages/Tickets/Edit.vue": () => import("./assets/Edit-Bx1lWiFg.js"), "./Pages/Tickets/Index.vue": () => import("./assets/Index-Cm2UWc1U.js"), "./Pages/Tickets/builder.vue": () => import("./assets/builder-DiOeWdtd.js"), "./Pages/Types/Create.vue": () => import("./assets/Create-BsXsA9NI.js"), "./Pages/Types/Edit.vue": () => import("./assets/Edit-D0RxpKSW.js"), "./Pages/Types/Index.vue": () => import("./assets/Index-DnHyF_pd.js"), "./Pages/Users/Create.vue": () => import("./assets/Create-C7BoHV_o.js"), "./Pages/Users/Edit.vue": () => import("./assets/Edit-DgR34OTI.js"), "./Pages/Users/EditProfile.vue": () => import("./assets/EditProfile-CF55jdIH.js"), "./Pages/Users/Index.vue": () => import("./assets/Index-CC-Cz2Tg.js") })),
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h$1(App, props) }).use(plugin).use(k, {
        ...page.props.ziggy,
        location: new URL(page.props.ziggy.location)
      }).use(i18nVue, {
        lang: "en",
        resolve: (lang) => {
          const langs = /* @__PURE__ */ Object.assign({ "../../lang/bd.json": __vite_glob_1_0, "../../lang/cn.json": __vite_glob_1_1, "../../lang/de.json": __vite_glob_1_2, "../../lang/en.json": __vite_glob_1_3, "../../lang/es.json": __vite_glob_1_4, "../../lang/fr.json": __vite_glob_1_5, "../../lang/he.json": __vite_glob_1_6, "../../lang/it.json": __vite_glob_1_7, "../../lang/lt.json": __vite_glob_1_8, "../../lang/nl.json": __vite_glob_1_9, "../../lang/php_en.json": __vite_glob_1_10, "../../lang/pl.json": __vite_glob_1_11, "../../lang/pt.json": __vite_glob_1_12, "../../lang/sa.json": __vite_glob_1_13, "../../lang/se.json": __vite_glob_1_14, "../../lang/tr.json": __vite_glob_1_15, "../../lang/ur.json": __vite_glob_1_16 });
          return langs[`../../lang/${lang}.json`].default;
        }
      });
    }
  })
);

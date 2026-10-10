import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUp,
  Bell,
  Box,
  CalendarDays,
  CalendarRange,
  ChartNoAxesColumnIncreasing,
  ChevronDown,
  ChevronLeft,
  FileText,
  House,
  Link as LinkIcon,
  MessageSquareMore,
  Plus,
  Settings,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MenaFlowMark } from "@/components/menaflow-brand";
import { SocialIcon, type SocialPlatform } from "@/components/social-icon";
import robotImage from "@/assets/menaflow-robot.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MenaFlow | الرئيسية" },
      {
        name: "description",
        content: "منصتك الذكية لإدارة حساباتك الاجتماعية، المحتوى والمحادثات في مكان واحد.",
      },
      { property: "og:title", content: "MenaFlow | الرئيسية" },
      { property: "og:description", content: "حساباتك الاجتماعية وأحدث الأنشطة مع MenaFlow." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { label: "المنتجات", value: "24", growth: "12%", icon: Box, tone: "amber", to: "/products" as const },
  { label: "المنشورات", value: "18", growth: "38%", icon: CalendarRange, tone: "violet", to: "/posts" as const },
  { label: "المحادثات", value: "34", growth: "19%", icon: MessageSquareMore, tone: "blue", to: "/chats" as const },
  { label: "الطلبات", value: "12", growth: "20%", icon: CalendarDays, tone: "green", to: "/orders" as const },
];
const platforms: { platform: SocialPlatform; label: string }[] = [
  { platform: "whatsapp", label: "واتساب" },
  { platform: "facebook", label: "فيسبوك" },
  { platform: "instagram", label: "إنستغرام" },
];
const navigation = [
  { label: "الرئيسية", icon: House },
  { label: "المحتوى", icon: FileText },
  { label: "المنصات", icon: Share2 },
  { label: "التقارير", icon: ChartNoAxesColumnIncreasing },
  { label: "الإعدادات", icon: Settings },
];

function Index() {
  return (
    <main className="dashboard-shell" dir="rtl">
      <header className="dashboard-header">
        <div className="account-profile">
          <span className="profile-mark">
            <MenaFlowMark />
          </span>
          <div>
            <p>أحمد محمد أحمد</p>
            <span>مدير الحساب</span>
          </div>
          <ChevronDown className="account-chevron" />
        </div>
        <div className="brand-wordmark" dir="ltr">
          <MenaFlowMark />
          <span>MenaFlow</span>
        </div>
        <Button
          variant="dashboardIcon"
          size="icon"
          className="notification-button"
          aria-label="الإشعارات، 3 إشعارات جديدة"
        >
          <Bell />
          <span className="notification-count">3</span>
        </Button>
      </header>

      <section className="welcome-section" aria-labelledby="welcome-title">
        <div className="welcome-copy">
          <h1 id="welcome-title">
            مرحباً بك في <bdi>MenaFlow</bdi>
          </h1>
          <p>
            منصتك الذكية لإدارة جميع حساباتك الاجتماعية
            <br />
            بأدوات متطورة وموظف خدمة عملاء يعمل <bdi>24/7</bdi>
          </p>
          <Button asChild variant="dashboard" className="connect-button">
            <Link to="/connect-accounts">
              <LinkIcon />
              <span>اربط حساباتك الآن</span>
              <ChevronLeft />
            </Link>
          </Button>
        </div>
        <img
          className="welcome-art"
          src={robotImage}
          alt="روبوت MenaFlow مع أيقونات التواصل الاجتماعي"
          width={1024}
          height={768}
        />
        <div className="carousel-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="stats-section" aria-label="ملخص الحساب">
        {stats.map(({ label, value, growth, icon: Icon, tone, to }) => (
          <Link to={to} className="stat-item transition hover:shadow-md" key={label}>
            <span className={`stat-icon stat-${tone}`}>
              <Icon />
            </span>
            <h2>{label}</h2>
            <strong>{value}</strong>
            <span className="stat-growth" dir="ltr">
              <ArrowUp />
              {growth}
            </span>
          </Link>
        ))}
      </section>

      <section className="platforms-section" aria-labelledby="platforms-title">
        <h2 id="platforms-title" className="section-title">
          منصاتك المتصلة
        </h2>
        <div className="platform-grid">
          {platforms.map(({ platform, label }) => (
            <Link
              to="/connect-accounts"
              className="platform-item platform-tile-link"
              key={platform}
              aria-label={`ربط حساب ${label}`}
            >
              <SocialIcon platform={platform} />
              <h3>{label}</h3>
              <span className="platform-add platform-tile-add">
                <Plus />
              </span>
              <span>ربط الحساب</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="activities-section" aria-labelledby="activities-title">
        <div className="section-heading">
          <h2 id="activities-title" className="section-title">
            <FileText />
            أحدث الأنشطة
          </h2>
          <Button variant="ghost" className="view-all">
            عرض الكل
            <ChevronLeft />
          </Button>
        </div>
        <div className="activity-list">
          <div className="activity-row">
            <SocialIcon platform="instagram" />
            <div>
              <p>
                تم نشر منشور جديد على <bdi>Instagram</bdi>
              </p>
              <span>منذ 5 دقائق</span>
            </div>
            <ChevronLeft />
          </div>
          <div className="activity-row">
            <span className="activity-icon activity-blue">
              <MessageSquareMore />
            </span>
            <div>
              <p>رسالة جديدة من عميل</p>
              <span>منذ 12 دقيقة</span>
            </div>
            <ChevronLeft />
          </div>
          <div className="activity-row">
            <span className="activity-icon activity-amber">
              <CalendarDays />
            </span>
            <div>
              <p>
                تم تأكيد طلب رقم <bdi>#1024</bdi>
              </p>
              <span>منذ 25 دقيقة</span>
            </div>
            <ChevronLeft />
          </div>
          <div className="activity-row">
            <SocialIcon platform="whatsapp" />
            <div>
              <p>تم استلام منتج جديد من واتساب</p>
              <span>منذ ساعة</span>
            </div>
            <ChevronLeft />
          </div>
        </div>
      </section>

      <nav className="bottom-navigation" aria-label="القائمة الرئيسية">
        {navigation.map(({ label, icon: Icon }, index) => (
          <Button
            key={label}
            variant="dashboardNav"
            className={index === 0 ? "nav-active" : ""}
            aria-current={index === 0 ? "page" : undefined}
          >
            <Icon />
            <span>{label}</span>
          </Button>
        ))}
      </nav>
    </main>
  );
}

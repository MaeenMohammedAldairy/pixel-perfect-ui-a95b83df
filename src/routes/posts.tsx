import { createFileRoute } from "@tanstack/react-router";
import { CalendarRange, Eye, Heart, MessageSquare, MoreVertical, Pencil } from "lucide-react";
import { Card, SectionPage } from "@/components/section-page";
import { SocialIcon, type SocialPlatform } from "@/components/social-icon";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/posts")({
  head: () => ({
    meta: [
      { title: "MenaFlow | المنشورات" },
      { name: "description", content: "أنشئ وادر منشوراتك على جميع منصات التواصل." },
      { property: "og:title", content: "MenaFlow | المنشورات" },
      { property: "og:description", content: "إدارة منشورات فيسبوك وإنستجرام وواتساب." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Posts,
});

const posts: { p: SocialPlatform; text: string; date: string; likes: number; comments: number; views: string }[] = [
  { p: "instagram", text: "متجاتنا الجديدة متوفرة الآن بجودة عالية وأسعار مميزة!", date: "2025/05/10", likes: 412, comments: 56, views: "2.8k" },
  { p: "facebook", text: "نحن هنا لنساعدك في تحقيق أهدافك التسويقية!", date: "2025/05/08", likes: 298, comments: 34, views: "1.8k" },
  { p: "instagram", text: "خصم خاص لفترة محدودة 50% لا تفوت الفرصة!", date: "2025/05/05", likes: 620, comments: 112, views: "112" },
  { p: "whatsapp", text: "مرحباً! 👋 هل تحتاج إلى مساعدة؟", date: "2025/05/03", likes: 145, comments: 27, views: "892" },
];
const map: Record<string, SocialPlatform> = { "منشورات فيسبوك": "facebook", "منشورات إنستجرام": "instagram", "منشورات واتساب": "whatsapp" };

function Posts() {
  return (
    <SectionPage
      icon={CalendarRange}
      tone="violet"
      title="المنشورات"
      description="أنشئ وادر منشوراتك على جميع منصات التواصل، ووصول إلى جمهورك بشكل أوسع"
      filters={["الكل", "منشورات فيسبوك", "منشورات إنستجرام", "منشورات واتساب"]}
      active="المحتوى"
      beforeFilters={
        <Button className="h-12 w-full rounded-xl text-base font-bold">
          إنشاء منشور جديد <Pencil />
        </Button>
      }
    >
      {(f) =>
        posts
          .filter((x) => f === "الكل" || map[f] === x.p)
          .map((x) => (
            <Card key={x.text}>
              <div className="flex items-start gap-3">
                <SocialIcon platform={x.p} />
                <p className="flex-1 font-semibold leading-7">{x.text}</p>
                <MoreVertical className="size-5 text-muted-foreground" />
              </div>
              <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                <span>{x.date}</span>
                <span className="flex items-center gap-1"><MessageSquare className="size-3.5" />{x.comments}</span>
                <span className="flex items-center gap-1"><Heart className="size-3.5" />{x.likes}</span>
                <span className="flex items-center gap-1"><Eye className="size-3.5" />{x.views}</span>
              </div>
            </Card>
          ))
      }
    </SectionPage>
  );
}

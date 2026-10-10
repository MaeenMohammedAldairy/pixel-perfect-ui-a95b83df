import { createFileRoute } from "@tanstack/react-router";
import { Box, CircleCheck, CircleX, ChevronLeft, ShoppingBag, Truck } from "lucide-react";
import { Card, SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/orders")({
  head: () => ({
    meta: [
      { title: "MenaFlow | الطلبات" },
      { name: "description", content: "تابع طلباتك وأدر شحناتك وقدم أفضل خدمة لعملائك." },
      { property: "og:title", content: "MenaFlow | الطلبات" },
      { property: "og:description", content: "متابعة حالة الطلبات والشحنات." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Orders,
});

const tones = {
  "قيد المعالجة": { icon: Box, cls: "stat-amber" },
  "تم الشحن": { icon: Truck, cls: "stat-blue" },
  مكتملة: { icon: CircleCheck, cls: "stat-green" },
  ملغاة: { icon: CircleX, cls: "bg-destructive/10 text-destructive" },
} as const;
const orders: { id: string; date: string; total: string; count: number; status: keyof typeof tones }[] = [
  { id: "#1024", date: "2025/05/30", total: "59.99", count: 2, status: "قيد المعالجة" },
  { id: "#1023", date: "2025/05/15", total: "29.99", count: 1, status: "تم الشحن" },
  { id: "#1022", date: "2025/05/07", total: "99.00", count: 3, status: "مكتملة" },
  { id: "#1021", date: "2025/05/05", total: "19.99", count: 1, status: "ملغاة" },
];

function Orders() {
  return (
    <SectionPage
      icon={ShoppingBag}
      tone="green"
      title="الطلبات"
      description="تابع طلباتك، وأدر شحناتك، وقدم أفضل خدمة لعملائك"
      filters={["الكل", "قيد المعالجة", "تم الشحن", "مكتملة", "ملغاة"]}
      active=""
    >
      {(f) =>
        orders
          .filter((o) => f === "الكل" || o.status === f)
          .map((o) => {
            const t = tones[o.status];
            return (
              <Card key={o.id}>
                <div className="flex items-center gap-4">
                  <span className={`flex size-14 shrink-0 items-center justify-center rounded-full ${t.cls}`}>
                    <t.icon className="size-7" />
                  </span>
                  <div className="flex-1 space-y-1 text-sm">
                    <span className={`inline-block rounded-full px-3 py-0.5 text-xs font-bold ${t.cls}`}>{o.status}</span>
                    <p className="font-semibold"><bdi>{o.id}</bdi> - <bdi>{o.date}</bdi></p>
                    <p className="text-muted-foreground">إجمالي الطلب: <b className="text-foreground" dir="ltr">$ {o.total}</b></p>
                    <p className="text-muted-foreground">عدد المنتجات: {o.count}</p>
                  </div>
                  <ChevronLeft className="text-muted-foreground" />
                </div>
              </Card>
            );
          })
      }
    </SectionPage>
  );
}

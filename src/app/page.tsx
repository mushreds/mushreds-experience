import nextDynamic from "next/dynamic";

export const dynamic = "force-dynamic";

const MainExperience = nextDynamic(
  () => import("@/components/MainExperience").then((mod) => mod.MainExperience),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <MainExperience />
    </main>
  );
}

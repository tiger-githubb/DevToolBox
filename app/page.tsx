import Hero from "@/components/Hero";
import CategoryTabs from "@/components/CategoryTabs";
import { ToolCard } from "@/components/ToolCard";
import ToolCardsLayout from "@/components/ToolCardsLayout";

export default function Home() {
  return (
    <>
    <Hero />
    <CategoryTabs/>
    <ToolCardsLayout/>
    </>
  );
}

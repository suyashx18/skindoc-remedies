import { FloatingNavbar } from "@/components/navbars/floating-navbar";
import { CarouselHero } from "@/components/heros/carousel-hero";
import SkinConcernSearch from "@/components/search/skin-concern-search";
import { ThreeColumnImageCards } from "@/components/feature/three-column-image-cards";
import { CardHoverStats } from "@/components/stats/card-hover-stats";
import { CenteredTeamCards } from "@/components/teams/centered-team-cards";
import { MasonryTestimonialGrid } from "@/components/testimonials/masonry-testimonial-grid";
import { NewsletterFooter } from "@/components/footers/newsletter-footer";
import Script from "next/script";

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <FloatingNavbar />
      <CarouselHero />
      <SkinConcernSearch />
      <ThreeColumnImageCards />
      <CardHoverStats />
      <CenteredTeamCards />
      <MasonryTestimonialGrid />
      <NewsletterFooter />
      <Script src="https://cdn.jotfor.ms/agent/embedjs/019932d81fb47bb69ca58304864789a8e076/embed.js" strategy="afterInteractive" />
    </main>
  );
}
"use client";

import CourseGrid from "@/components/CourseGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import PlacementStats from "@/components/PlacementStats";
import TrainingShowcase from "@/components/TrainingShowcase";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import AwardsGallery from "@/components/AwardsGallery";
import FAQSection from "@/components/FAQSection";
import LeadForm from "@/components/LeadForm";
import FinalCTA from "@/components/FinalCTA";

/** Below-the-fold sections loaded in a separate chunk after first paint. */
export default function DeferredHomeSections() {
  return (
    <>
      <CourseGrid />
      <WhyChooseUs />
      <PlacementStats />
      <TrainingShowcase />
      <TestimonialsSlider />
      <AwardsGallery />
      <FAQSection />
      <LeadForm />
      <FinalCTA />
    </>
  );
}

import CaseStudyListing from "@/components/content/CaseStudyListing";
import { contentList, getCaseStudies } from "@/lib/cms";
import { caseStudyCard } from "@/lib/cms-content";

export default async function CaseStudiesPage() {
  const { docs, unavailable } = await contentList(getCaseStudies);
  return <CaseStudyListing caseStudies={docs.map(caseStudyCard)} unavailable={unavailable} />;
}

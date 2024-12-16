import Founders from "@/components/AboutCompany/OurFounder";
import Grid from "@/components/AboutCompany/Grid";
import SustainableD from "@/components/AboutCompany/SustainableD";
import OurStoryD from "@/components/AboutCompany/OurstoryD";
import AboutOurcompany from "@/components/AboutCompany/AboutOurcompany";
import { Timeline } from "../ui/timeline";
import { OurCompanyItem } from "./types/constant";

interface MainLayoutProps {
  companyData: OurCompanyItem;
}

export default function MainLayout({ companyData }: MainLayoutProps) {
  return (
    <main className="bg-black  ">
      <AboutOurcompany companyData={companyData} />
      <SustainableD companyData={companyData} />
      <OurStoryD companyData={companyData} />
      <Founders companyData={companyData} />
      <Timeline companyData={companyData} />
      <Grid companyData={companyData} />
      <div className="bg-black">
      {/* <TeamPage companyData={companyData} /> */}
      </div>
    </main>
  );
}

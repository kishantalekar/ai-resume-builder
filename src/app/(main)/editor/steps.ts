import { EditorFormProps } from "@/lib/types";
import GeneralInfoForm from "./forms/GeneralInfoForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import WorkExperienceForm from "./forms/WorkExperienceForm";
import EducationalForm from "./forms/EducationalForm";
import SkillsForm from "./forms/SkillsForm";
import SummaryForm from "./forms/SummaryForm";

export const steps: {
  title: string;
  component: React.ComponentType<EditorFormProps>;
  key: string;
}[] = [
  {
    title: "General info",
    component: GeneralInfoForm,
    key: "general-info",
  },
  {
    title: "Personal info",
    component: PersonalInfoForm,
    key: "personal-info",
  },
  {
    title: "Work Experience",
    component: WorkExperienceForm,
    key: "work-experience",
  },
  {
    title: "Education",
    component: EducationalForm,
    key: "education",
  },
  {
    title: "Skills",
    component: SkillsForm,
    key: "skills",
  },
  {
    title: "Summary",
    component: SummaryForm,
    key: "summary",
  },
];

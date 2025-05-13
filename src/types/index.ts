export interface Procedure {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
  documents: string[];
  steps: string[];
  tips: string[];
  timeframe: string;
  countrySpecifics: Record<string, string>;
  faq: {
    question: string;
    answer: string;
  }[];
}
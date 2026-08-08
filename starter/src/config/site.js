const SITE_URL = import.meta.env.PUBLIC_SITE_URL || "https://softwaredecisionguide.com";

export const siteConfig = {
  title: "Software Decision Guide",
  author: "Software Decision Guide",
  url: SITE_URL,
  utm: {
    source: SITE_URL,
    medium: "referral",
    campaign: "navigation",
  },
  meta: {
    title: "Software Decision Guide",
    description: "Structured CRM and business software decision guides for teams comparing software options.",
    keywords: "CRM selection, CRM decision guide, business software, software comparison, CRM tracking, marketing attribution, software buying guide",
    image: `${SITE_URL}/assets/preview.jpg`,
    twitterHandle: "",
  },
  social: {
    github: "",
  },
};

export type MenuItem = {
  title: string;
  href: string;
};

export const solutionCategories = [
  "Software Services",
  "Digital Signage Products",
  "Software Platforms",
  "Industries",
] as const;

export type Category = (typeof solutionCategories)[number];

export const categoryLinks: Record<Category, string> = {
  "Software Services": "/software-services",
  "Digital Signage Products": "/digital-signage-products",
  "Software Platforms": "/software-platforms",
  Industries: "/industries",
};

export const menuContent: Record<Category, MenuItem[]> = {
  "Software Services": [
    { title: "Software Development", href: "/software-services/software-development" },
    { title: "Mobile App Development", href: "/software-services/mobile-app-development" },
    { title: "Application Modernization", href: "/software-services/application-modernization" },
    { title: "Web App Development", href: "/software-services/web-app-development" },
    { title: "Enterprise Software Solutions", href: "/software-services/enterprise-software-solutions" },
    { title: "API Integration", href: "/software-services/api-integration" },
    { title: "CRM Development", href: "/software-services/crm-development" },
    { title: "ERP Development", href: "/software-services/erp-development" },
    { title: "UI/UX Design", href: "/software-services/ui-ux-design" },
    { title: "SaaS Development", href: "/software-services/saas-development" },
    { title: "Cloud Consulting", href: "/software-services/cloud-consulting" },
  ],

  "Digital Signage Products": [
    { title: "A Type Standee", href: "/digital-signage-products/a-type-standee" },
    { title: "D Type Standee", href: "/digital-signage-products/d-type-standee" },
    { title: "Wall Mounted Standee", href: "/digital-signage-products/wall-mounted-standee" },
    { title: "Floor Mounted Standee", href: "/digital-signage-products/floor-mounted-standee" },
    { title: "Self Ordering Kiosk", href: "/digital-signage-products/self-ordering-kiosk" },
    { title: "LFD Display", href: "/digital-signage-products/lfd-display" },
    { title: "LED Display", href: "/digital-signage-products/led-display" },
    { title: "Interactive Teaching Display", href: "/digital-signage-products/interactive-teaching-display" },
  ],

  "Software Platforms": [
    { title: "CRM Software", href: "/software-platforms/crm-software" },
    { title: "ERP Software", href: "/software-platforms/erp-software" },
    { title: "Signage Application", href: "/software-platforms/signage-application" },
    { title: "Cloud Signage Software", href: "/software-platforms/cloud-signage-software" },
    { title: "Virtual Trail Room", href: "/software-platforms/virtual-trail-room" },
  ],

  Industries: [
    { title: "Health Care", href: "/industries/health-care" },
    { title: "Education Tech", href: "/industries/education-tech" },
    { title: "Finance Tech", href: "/industries/finance-tech" },
    { title: "Property Tech", href: "/industries/property-tech" },
    { title: "Retail", href: "/industries/retail" },
    { title: "Transport", href: "/industries/transport" },
    { title: "Telecom", href: "/industries/telecom" },
    { title: "Automotive", href: "/industries/automotive" },
    { title: "Insurance Tech", href: "/industries/insurance-tech" },
    { title: "Travel & Hospitality", href: "/industries/travel-hospitality" },
    { title: "Facility Management", href: "/industries/facility-management" },
    { title: "Media & Entertainment", href: "/industries/media-entertainment" },
  ],
};

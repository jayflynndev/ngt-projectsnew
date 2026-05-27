export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export const services: ServiceItem[] = [
  {
    title: "Office Refit & Refurbishment",
    description:
      "Modern workspace upgrades, partitions, finishes and electrical fit-out for productive offices.",
    icon: "🏢",
  },
  {
    title: "Shop Fitting",
    description:
      "Retail fit-outs, fixture installation and space layouts designed to support your trading environment.",
    icon: "🛍️",
  },
  {
    title: "Warehousing Refit & Refurbishment",
    description:
      "Warehouse fit-out, mezzanine installation and logistics space planning for commercial sites.",
    icon: "🏭",
  },
  {
    title: "Building Maintenance",
    description:
      "Responsive maintenance, repairs and planned works to keep your property operational and safe.",
    icon: "🔧",
  },
  {
    title: "Dilapidation",
    description:
      "Practical reinstatement and dilapidation works to meet lease obligations and handback schedules.",
    icon: "📝",
  },
  {
    title: "External Works",
    description:
      "Fencing, surfacing, drainage and paving solutions for yards, car parks and site boundaries.",
    icon: "🌳",
  },
];

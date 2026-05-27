export interface CaseStudy {
  slug: string;
  title: string;
  location: string;
  image: string;
  client: string;
  scope: string;
  description: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "provident-warrington",
    title: "Provident",
    location: "Warrington",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80",
    client: "Provident",
    scope:
      "Office refurbishment, partitions, ceilings, lighting and floor finishes.",
    description:
      "A commercial interior refurbishment delivering modern office spaces with a focus on productivity and style.",
  },
  {
    slug: "bespoke-counter-huddersfield",
    title: "Bespoke Counter",
    location: "Huddersfield",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    client: "Bespoke Counter",
    scope:
      "Retail fit-out, bespoke counters, lighting and decorative finishes.",
    description:
      "A premium retail fit-out project delivering a polished counter area and customer-focused environment.",
  },
  {
    slug: "provident-preston",
    title: "Provident",
    location: "Preston",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    client: "Provident",
    scope:
      "Interior refurbishment, facilities upgrade and workspace enhancements.",
    description:
      "A high-quality refurbishment for a commercial office setting, completed on time and within budget.",
  },
  {
    slug: "fencing-gorton",
    title: "Fencing",
    location: "Gorton",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    client: "Gorton Facility",
    scope:
      "External works including fencing, surfacing and drainage improvements.",
    description:
      "A site boundary and external works upgrade for a commercial property in the North West.",
  },
  {
    slug: "provident-rotherham",
    title: "Provident",
    location: "Rotherham",
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1f?auto=format&fit=crop&w=1200&q=80",
    client: "Provident",
    scope: "Refurbishment and fit-out for interior commercial spaces.",
    description:
      "A case study featuring a complete interior transformation for a busy business location.",
  },
];

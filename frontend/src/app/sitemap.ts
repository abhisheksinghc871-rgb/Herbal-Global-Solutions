import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.herbalglobalsolutions.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.herbalglobalsolutions.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.herbalglobalsolutions.com/products",
      lastModified: new Date(),
    },
    {
      url: "https://www.herbalglobalsolutions.com/industries",
      lastModified: new Date(),
    },
    {
      url: "https://www.herbalglobalsolutions.com/contact",
      lastModified: new Date(),
    },
  ];
}
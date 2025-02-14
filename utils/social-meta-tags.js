// Updated generateSocialMeta.js
export const generateSocialMeta = (data) => {
  const defaults = {
    siteName: "Shantibari",
    twitterHandle: "@ShantibariBD",
    imageDimensions: { width: 1200, height: 630 },
  };

  return {
    title: data.title || defaults.siteName,
    meta: [
      {
        property: "og:title",
        content: data.ogTitle || data.title || defaults.siteName,
      },
      {
        property: "og:description",
        content:
          data.ogDescription ||
          data.description ||
          "Women Empowerment Platform",
      },
      {
        property: "og:image",
        content:
          data.image ||
          "https://res.cloudinary.com/db5yniogx/image/upload/v1737380953/sbarioglogo_snkepr.png",
      },
      { property: "og:url", content: data.url || window.location.href },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: defaults.siteName },
      {
        property: "og:image:width",
        content: data.imageDimensions?.width || defaults.imageDimensions.width,
      },
      {
        property: "og:image:height",
        content:
          data.imageDimensions?.height || defaults.imageDimensions.height,
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: defaults.twitterHandle },
      {
        name: "twitter:title",
        content: data.ogTitle || data.title || defaults.siteName,
      },
      {
        name: "twitter:description",
        content:
          data.ogDescription ||
          data.description ||
          "Women Empowerment Platform",
      },
      {
        name: "twitter:image",
        content:
          data.image ||
          "https://res.cloudinary.com/db5yniogx/image/upload/v1737380953/sbarioglogo_snkepr.png",
      },
    ],
  };
};

export const generateSocialMeta = (data) => {
  return {
    title: data.title || "Shantibari",
    meta: [
      {
        property: "og:title",
        content: data.ogTitle || data.title || "Shantibari",
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
      {
        property: "og:url",
        content: data.url || window.location.href,
      },
    ],
  };
};

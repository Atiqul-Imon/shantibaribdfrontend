import { Helmet } from "react-helmet-async";
import { generateSocialMeta } from "../../utils/social-meta-tags";

export const useSocialMeta = (data) => {
  const metaData = generateSocialMeta({
    ...data,
    url: data.url || window.location.href,
  });

  return (
    <Helmet>
      <title>{metaData.title}</title>
      {metaData.meta.map((tag, index) => (
        <meta key={index} property={tag.property} content={tag.content} />
      ))}
      <link rel="canonical" href={metaData.url} />
    </Helmet>
  );
};

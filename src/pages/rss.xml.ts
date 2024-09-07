import siteMeta from '@/site-meta';
import rss from '@astrojs/rss';

export const get = async () => {
  return rss({
    title: siteMeta.title,
    description: siteMeta.description,
    site: import.meta.env.SITE,
    items: [],
  });
};

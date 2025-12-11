import { getCollection } from "astro:content";
import { siteConfig } from "../config/site";

export async function GET() {
  const notes = (await getCollection("notes")).map((entry) => ({
    title: entry.data.title,
    link: `${siteConfig.url}/notes/${entry.slug}/`,
    date: entry.data.date,
    description: entry.data.summary,
  }));

  const build = (await getCollection("build")).map((entry) => ({
    title: entry.data.title,
    link: `${siteConfig.url}/build/${entry.slug}/`,
    date: entry.data.date,
    description: entry.data.summary ?? "Build log update",
  }));

  const items = [...notes, ...build].sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, 25);

  const xmlItems = items
    .map(
      (item) => `
        <item>
          <title><![CDATA[${item.title}]]></title>
          <link>${item.link}</link>
          <guid>${item.link}</guid>
          <pubDate>${item.date.toUTCString()}</pubDate>
          <description><![CDATA[${item.description}]]></description>
        </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>${siteConfig.title}</title>
        <link>${siteConfig.url}</link>
        <description>${siteConfig.description}</description>
        ${xmlItems}
      </channel>
    </rss>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

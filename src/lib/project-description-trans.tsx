import type { ReactElement } from 'react';

const INLINE_TOKEN_PATTERN = /\*([^*]+)\*|_([^_]+)_|\[([^\]]+)\]\(#(\d+)\)/g;
const LEGACY_HTML_PATTERN = /<\/?(p|a|strong|em|span|br)\b/i;

export interface ParsedProjectParagraph {
  template: string;
  components: Record<string, ReactElement>;
}

export function isLegacyHtmlDescription(description: string): boolean {
  return LEGACY_HTML_PATTERN.test(description);
}

export function splitProjectDescription(description: string): string[] {
  return description
    .split('<nl>')
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

export function parseProjectParagraph(
  paragraph: string,
  additionalLinks: string[] = []
): ParsedProjectParagraph {
  const components: Record<string, ReactElement> = {
    emphasis: <em />,
    accent: <span className="text-accent" />,
  };

  let template = '';
  let cursor = 0;
  let linkComponentCount = 0;

  for (const match of paragraph.matchAll(INLINE_TOKEN_PATTERN)) {
    const tokenStart = match.index ?? 0;
    const tokenEnd = tokenStart + match[0].length;

    template += paragraph.slice(cursor, tokenStart);

    const italicValue = match[1];
    const accentValue = match[2];
    const linkLabel = match[3];
    const linkIndexValue = match[4];

    if (italicValue) {
      template += `<emphasis>${italicValue}</emphasis>`;
    } else if (accentValue) {
      template += `<accent>${accentValue}</accent>`;
    } else if (linkLabel && linkIndexValue) {
      const rawIndex = Number.parseInt(linkIndexValue, 10);
      const resolvedHref = additionalLinks[rawIndex] ?? additionalLinks[rawIndex - 1];

      if (resolvedHref) {
        const linkTag = `projectLink${linkComponentCount}`;
        components[linkTag] = (
          <a
            href={resolvedHref}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-dotted underline-offset-4"
          />
        );
        template += `<${linkTag}>${linkLabel}</${linkTag}>`;
        linkComponentCount += 1;
      } else {
        template += linkLabel;
      }
    }

    cursor = tokenEnd;
  }

  template += paragraph.slice(cursor);

  return { template, components };
}

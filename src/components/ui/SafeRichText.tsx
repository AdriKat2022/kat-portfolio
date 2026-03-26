import { Fragment, type ReactNode } from 'react';

interface SafeRichTextProps {
  html: string;
  className?: string;
}

const ALLOWED_LINK_SCHEMAS = /^(https?:\/\/|mailto:|tel:|\/|#)/i;

function toSafeHref(href: string | null): string | null {
  if (!href) return null;
  return ALLOWED_LINK_SCHEMAS.test(href) ? href : null;
}

function renderNode(node: ChildNode, key: string): ReactNode {
  if (node.nodeType === Node.TEXT_NODE) {
    return <Fragment key={key}>{node.textContent}</Fragment>;
  }

  if (node.nodeType !== Node.ELEMENT_NODE) {
    return null;
  }

  const element = node as HTMLElement;
  const tagName = element.tagName.toLowerCase();
  const children = Array.from(element.childNodes).map((child, idx) =>
    renderNode(child, `${key}-${idx}`)
  );

  if (tagName === 'br') {
    return <br key={key} />;
  }

  if (tagName === 'a') {
    const safeHref = toSafeHref(element.getAttribute('href'));

    if (!safeHref) {
      return <Fragment key={key}>{children}</Fragment>;
    }

    return (
      <a key={key} href={safeHref} target="_blank" rel="noopener noreferrer" className="underline decoration-dotted underline-offset-4">
        {children}
      </a>
    );
  }

  if (tagName === 'strong') {
    return <strong key={key}>{children}</strong>;
  }

  if (tagName === 'em') {
    return <em key={key}>{children}</em>;
  }

  if (tagName === 'span') {
    const className = element.classList.contains('text-accent') ? 'text-accent' : undefined;
    return (
      <span key={key} className={className}>
        {children}
      </span>
    );
  }

  if (tagName === 'p') {
    return <p key={key}>{children}</p>;
  }

  return <Fragment key={key}>{children}</Fragment>;
}

export function SafeRichText({ html, className }: SafeRichTextProps) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const nodes = Array.from(doc.body.childNodes);

  return <div className={className}>{nodes.map((node, idx) => renderNode(node, `safe-${idx}`))}</div>;
}
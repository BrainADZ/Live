/* eslint-disable @next/next/no-img-element */
import { createElement, Fragment, type CSSProperties, type ReactNode } from "react";
import { mediaAlt, mediaURL, safeURL, type Media, type RichText as EditorState, type RichTextNode } from "@/lib/cms-content";

function alignment(node: RichTextNode): CSSProperties {
  const format = typeof node.format === "string" ? node.format : "";
  return {
    ...( ["left", "center", "right", "justify", "start", "end"].includes(format) ? { textAlign: format as CSSProperties["textAlign"] } : {}),
    ...(node.indent ? { paddingInlineStart: `${Math.min(node.indent, 10) * 1.5}rem` } : {}),
  };
}

function renderNode(node: RichTextNode, key: number): ReactNode {
  const children = node.children?.map(renderNode);
  const props = { style: alignment(node), dir: node.direction || undefined };
  switch (node.type) {
    case "text": {
      let text: ReactNode = node.text || "";
      const format = typeof node.format === "number" ? node.format : 0;
      if (format & 1) text = <strong>{text}</strong>;
      if (format & 2) text = <em>{text}</em>;
      if (format & 4) text = <s>{text}</s>;
      if (format & 8) text = <u>{text}</u>;
      if (format & 16) text = <code>{text}</code>;
      if (format & 32) text = <sub>{text}</sub>;
      if (format & 64) text = <sup>{text}</sup>;
      return <Fragment key={key}>{text}</Fragment>;
    }
    case "root": return <Fragment key={key}>{children}</Fragment>;
    case "paragraph": return <p key={key} {...props}>{children?.length ? children : <br />}</p>;
    case "heading": return createElement(/^h[1-6]$/.test(node.tag || "") ? node.tag! : "h2", { ...props, key }, children);
    case "quote": return <blockquote key={key} {...props}>{children}</blockquote>;
    case "linebreak": return <br key={key} />;
    case "horizontalrule": return <hr key={key} />;
    case "tab": return <Fragment key={key}>{"\t"}</Fragment>;
    case "list": return node.listType === "number" ? <ol key={key} {...props} start={node.start}>{children}</ol> : <ul key={key} {...props}>{children}</ul>;
    case "listitem": return <li key={key} {...props}>{typeof node.checked === "boolean" && <input type="checkbox" checked={node.checked} readOnly aria-label="Checklist item" />} {children}</li>;
    case "link":
    case "autolink": {
      const relation = node.fields?.doc;
      const document = typeof relation?.value === "object" ? relation.value : undefined;
      const prefix = relation?.relationTo === "blog-posts" ? "/blog" : relation?.relationTo === "case-studies" ? "/case-studies" : undefined;
      const href = safeURL(node.fields?.linkType === "internal" ? (prefix && document?.slug ? `${prefix}/${encodeURIComponent(document.slug)}` : undefined) : node.fields?.url);
      return href ? <a key={key} href={href} target={node.fields?.newTab ? "_blank" : undefined} rel={node.fields?.newTab ? "noopener noreferrer" : undefined}>{children}</a> : <Fragment key={key}>{children}</Fragment>;
    }
    case "upload": {
      const media = node.value && typeof node.value === "object" ? node.value as Media : undefined;
      const src = mediaURL(media);
      return src ? <figure key={key}><img src={src} alt={mediaAlt(media || null, "Article illustration")} width={media?.width || undefined} height={media?.height || undefined} loading="lazy" />{media?.caption && <figcaption>{media.caption}</figcaption>}</figure> : null;
    }
    case "relationship": {
      const doc = node.value && typeof node.value === "object" && "slug" in node.value ? node.value : undefined;
      const prefix = node.relationTo === "blog-posts" ? "/blog" : node.relationTo === "case-studies" ? "/case-studies" : undefined;
      return doc?.slug && prefix ? <p key={key}><a href={`${prefix}/${encodeURIComponent(doc.slug)}`}>{doc.title || doc.slug}</a></p> : null;
    }
    case "table": return <div className="cms-table-scroll" key={key}><table><tbody>{children}</tbody></table></div>;
    case "tablerow": return <tr key={key} {...props}>{children}</tr>;
    case "tablecell": return createElement(node.headerState ? "th" : "td", { ...props, key, colSpan: node.colSpan || 1, rowSpan: node.rowSpan || 1 }, children);
    case "block":
      if (node.fields?.blockType === "faq") return <section className="cms-faq" key={key}>
        {node.fields.heading && <h2>{node.fields.heading}</h2>}
        {node.fields.items?.map((item, index) => <details key={index}><summary>{item.question}</summary><p className="whitespace-pre-line">{item.answer}</p></details>)}
      </section>;
      return null;
    default: return <Fragment key={key}>{children}</Fragment>;
  }
}

export default function RichText({ content }: { content?: EditorState | null }) {
  return content?.root ? <div className="cms-rich-text">{renderNode(content.root, 0)}</div> : null;
}

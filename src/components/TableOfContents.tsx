import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  title: string;
  level: number;
}

export function TableOfContents() {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Extract headings from the document
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    const items: TocItem[] = headings.map((heading, index) => {
      if (!heading.id) {
        heading.id = `heading-${index}`;
      }
      return {
        id: heading.id,
        title: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1))
      };
    });
    setTocItems(items);

    // Set up intersection observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (tocItems.length === 0) return null;

  return (
    <div className="hidden xl:block fixed right-6 top-24 w-64 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
      <div className="space-y-1">
        <h4 className="text-sm font-semibold text-foreground mb-3">On this page</h4>
        {tocItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToHeading(item.id)}
            className={`block w-full text-left text-sm py-1 px-2 rounded transition-colors ${
              activeId === item.id
                ? "text-accent font-medium bg-accent/10"
                : "text-muted-foreground hover:text-foreground"
            } ${item.level === 1 ? "font-medium" : ""} ${
              item.level > 2 ? `ml-${(item.level - 2) * 4}` : ""
            }`}
            style={{ 
              marginLeft: item.level > 2 ? `${(item.level - 2) * 1}rem` : undefined 
            }}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}
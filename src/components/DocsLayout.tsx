import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "./Header";
import { DocsSidebar } from "./DocsSidebar";
import { TableOfContents } from "./TableOfContents";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="dark min-h-screen bg-background">
      <SidebarProvider defaultOpen={true}>
        <div className="min-h-screen flex w-full">
          <DocsSidebar />
          
          <div className="flex-1 flex flex-col">
            <Header />
            
            <main className="flex-1 relative">
              <div className="container max-w-5xl mx-auto px-6 py-8">
                <div className="prose prose-invert max-w-none">
                  {children}
                </div>
              </div>
              
              <TableOfContents />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}
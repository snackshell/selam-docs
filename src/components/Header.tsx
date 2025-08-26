import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center space-x-4">
          <SidebarTrigger className="md:hidden" />
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-lg font-bold text-accent-foreground">S</span>
            </div>
            <span className="font-bold text-lg">SelamAPI Platform</span>
          </div>
        </div>
        
        <div className="flex-1" />
        
        <nav className="flex items-center space-x-6">
          <a 
            href="#docs" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Docs
          </a>
          <a 
            href="#api-reference" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            API Reference
          </a>
          <a 
            href="#login" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Log in
          </a>
          <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90">
            Sign up
          </Button>
        </nav>
      </div>
    </header>
  );
}
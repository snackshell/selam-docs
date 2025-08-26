import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Search, ChevronDown, ChevronRight, Book, Zap, Brain, Settings, FileText, Image, Mic, Code } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";

interface NavItem {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const navigationGroups: NavGroup[] = [
  {
    title: "Get started",
    items: [
      { title: "Overview", url: "/", icon: Book },
      { title: "Quickstart", url: "/quickstart", icon: Zap },
      { title: "Models", url: "/models", icon: Brain },
      { title: "Pricing", url: "/pricing", icon: Settings },
    ]
  },
  {
    title: "Core concepts",
    items: [
      { title: "Text generation", url: "/text-generation", icon: FileText },
      { title: "Images and vision", url: "/images-vision", icon: Image },
      { title: "Audio and speech", url: "/audio-speech", icon: Mic },
      { title: "Structured output", url: "/structured-output", icon: Code },
    ]
  }
];

export function DocsSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedGroups, setExpandedGroups] = useState<string[]>([
    "Get started", 
    "Core concepts"
  ]);

  const collapsed = state === "collapsed";
  const isActive = (path: string) => currentPath === path;
  
  const toggleGroup = (groupTitle: string) => {
    setExpandedGroups(prev => 
      prev.includes(groupTitle) 
        ? prev.filter(g => g !== groupTitle)
        : [...prev, groupTitle]
    );
  };

  const filteredGroups = navigationGroups.map(group => ({
    ...group,
    items: group.items.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(group => group.items.length > 0);

  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarContent className="custom-scrollbar">
        {/* Search */}
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-muted border-border h-9"
            />
            <kbd className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-muted-foreground bg-muted-foreground/10 px-1.5 py-0.5 rounded">
              ⌘K
            </kbd>
          </div>
        </div>

        {/* Navigation Groups */}
        {filteredGroups.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel 
              className="flex items-center justify-between cursor-pointer hover:text-foreground transition-colors"
              onClick={() => !collapsed && toggleGroup(group.title)}
            >
              <span>{group.title}</span>
              {!collapsed && (
                expandedGroups.includes(group.title) ? 
                  <ChevronDown className="h-4 w-4" /> : 
                  <ChevronRight className="h-4 w-4" />
              )}
            </SidebarGroupLabel>
            
            {(expandedGroups.includes(group.title) || collapsed) && (
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <NavLink
                          to={item.url}
                          className={({ isActive: linkActive }) =>
                            `flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                              linkActive || isActive(item.url)
                                ? "bg-sidebar-accent text-sidebar-primary font-medium"
                                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                            }`
                          }
                        >
                          <item.icon className="h-4 w-4 flex-shrink-0" />
                          {!collapsed && <span>{item.title}</span>}
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            )}
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
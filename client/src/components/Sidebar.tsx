import { Home, User, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useLocation } from "wouter";
import { characters } from "@/lib/hamletData";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Users, label: "People", path: "/characters" },
  { icon: User, label: "Profile", path: "/profile" },
];

export function Sidebar() {
  const [location] = useLocation();
  const hamlet = characters.find((c) => c.id === "hamlet")!;

  return (
    <div className="w-72 h-screen sticky top-0 flex flex-col border-r border-border px-4 py-4">
      <div className="mb-4">
        <svg
          viewBox="0 0 24 24"
          className="h-8 w-8 text-primary"
          fill="currentColor"
          data-testid="logo"
        >
          <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
        </svg>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location === item.path;

          return (
            <Link key={item.path} href={item.path}>
              <Button
                variant="ghost"
                className={`w-full justify-start gap-4 text-lg h-12 ${
                  isActive ? "font-bold" : ""
                }`}
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                <Icon className="h-6 w-6" />
                {item.label}
              </Button>
            </Link>
          );
        })}
      </nav>

      <div className="space-y-3">
        <Button className="w-full" size="lg" data-testid="button-compose">
          Post
        </Button>

        <div className="flex items-center gap-3 p-3 rounded-full hover-elevate active-elevate-2">
          <Avatar className="h-10 w-10" data-testid="avatar-sidebar">
            <AvatarImage src={hamlet.avatar} alt={hamlet.name} />
            <AvatarFallback>{hamlet.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm truncate" data-testid="text-sidebar-name">
              {hamlet.name}
            </p>
            <p className="text-xs text-muted-foreground truncate" data-testid="text-sidebar-username">
              {hamlet.username}
            </p>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

import { Home, Map, Info, Mail } from "lucide-react";
import Index from "./pages/Index.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Plan Trip",
    to: "/plan",
    icon: <Map className="h-4 w-4" />,
    page: <Index />, // Temporarily using Index page for all routes
  },
  {
    title: "About",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <Index />, // Temporarily using Index page for all routes
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Mail className="h-4 w-4" />,
    page: <Index />, // Temporarily using Index page for all routes
  },
];
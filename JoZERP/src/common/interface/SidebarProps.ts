export interface SidebarProps {
  children?: React.ReactNode;
  isMobileOpen: boolean;
  toggleMobileMenu: () => void;
}
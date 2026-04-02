import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";
import "../../styles/Sidebar.css";
import {LayoutDashboard,IdCard,GraduationCap,Building2,Receipt,Wallet,Users,Briefcase,FileCheck,UserCheck,LogOut,X} from "lucide-react";
import type { MenuItem } from "../interface/MenuItem";
import type { SidebarProps } from '../interface/SidebarProps';
import { Strings } from "../../utils/Strings";
const Sidebar: React.FC<SidebarProps> = ({ children, isMobileOpen, toggleMobileMenu }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const menuItems: MenuItem[] = [
    { name: Strings.SIDEBAR.MENU.DASHBOARD, icon: LayoutDashboard, path: "/dashboard/dashboard" },
    { name: Strings.SIDEBAR.MENU.ADMISSIONS, icon: IdCard, path: "/dashboard/admissions" },
    { name: Strings.SIDEBAR.MENU.ACADEMICS, icon: GraduationCap, path: "/dashboard/academics" },
    { name: Strings.SIDEBAR.MENU.HOSTEL_MANAGEMENT, icon: Building2, path: "/dashboard/hostel-management" },
    { name: Strings.SIDEBAR.MENU.FEE_COLLECTION, icon: Receipt, path: "/dashboard/fee-collection" },
    { name: Strings.SIDEBAR.MENU.FEE_MANAGEMENT, icon: Wallet, path: "/dashboard/fee_management" },
    { name: Strings.SIDEBAR.MENU.STUDENT_MANAGEMENT, icon: Users, path: "/dashboard/student-management" },
    { name: Strings.SIDEBAR.MENU.TRAINING_PLACEMENT, icon: Briefcase, path: "/dashboard/training-placement" },
    { name: Strings.SIDEBAR.MENU.EXAM_MANAGEMENT, icon: FileCheck, path: "/dashboard/exam-management" },
    { name: Strings.SIDEBAR.MENU.ALUMNI_FOOTPRINT, icon: UserCheck, path: "/dashboard/alumni-footprint" }
  ];

  const showLabels = open || isMobileOpen;

  return (
     <div className="cm-container">
      {/* Mobile Overlay */}
      {isMobileOpen && <div className="cm-sidebar-overlay" onClick={toggleMobileMenu}></div>}

      {/* Sidebar */}
      <div className={`cm-sidebar ${open ? "cm-expanded" : "cm-collapsed"} ${isMobileOpen ? "cm-mobile-open" : ""}`}
        onMouseEnter={() => !isMobileOpen && setOpen(true)} 
        onMouseLeave={() => !isMobileOpen && setOpen(false)}>
        
        {/* Header */}
        <div className="cm-sidebar-header">
          {!showLabels ? (
            <div className="cm-logo-collapsed"><img src={logo} alt="logo" /></div>
          ) : (
            <div className="cm-logo-section">
              <img src={logo} alt="logo" className="cm-logo-img" />
              <div className="cm-logo-text">
                <h2>{Strings.SIDEBAR.LOGO.TITLE}</h2><p>{Strings.SIDEBAR.LOGO.SUBTITLE}</p>
              </div>
            </div>
          )}
          
          {isMobileOpen && (
            <button className="cm-close-sidebar-btn" onClick={toggleMobileMenu}>
              <X size={24} />
            </button>
          )}
        </div>

        {/* Menu */}
        <div className="cm-menu">
          {menuItems.map((item) => {
            const Icon=item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.name} to={item.path} className={`cm-menu-item ${isActive ? "cm-active" : ""}`}
                style={{ textDecoration: 'none' }} onClick={() => isMobileOpen && toggleMobileMenu()}>
                <Icon size={22} strokeWidth={isActive?2.5:2} />
                {showLabels && <span>{item.name}</span>}
                {isActive && <div className="cm-active-indicator"></div>}
              </Link>
            );
          })}
        </div>
        {/* Logout */}
        <div className="cm-logout">
          <LogOut size={22} strokeWidth={2} />
          {showLabels && <span>{Strings.SIDEBAR.MENU.LOGOUT}</span>}
        </div>
      </div>

      {/* Content Area */}
      <div className="cm-content">
        {children}
      </div>
    </div>
  );
};

export default Sidebar;

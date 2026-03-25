"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, Home, Settings, Users, FolderOpen } from "lucide-react";
import { cn } from "../../lib/utils";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { icon: <Home size={20} />, label: "Dashboard" },
    { icon: <Users size={20} />, label: "Customers" },
    { icon: <FolderOpen size={20} />, label: "Projects" },
    { icon: <Settings size={20} />, label: "Settings" },
  ];

  return (
    <motion.aside
      initial={false}
      animate={{ width: isOpen ? 250 : 80 }}
      className="h-screen bg-slate-900 border-r border-slate-800 text-white flex flex-col p-4 shadow-xl relative z-20"
    >
      <div className="flex items-center justify-between mb-8 overflow-hidden h-10">
        <motion.span 
          animate={{ opacity: isOpen ? 1 : 0 }}
          className={cn(
            "font-bold text-xl tracking-wider text-teal-400 whitespace-nowrap",
            !isOpen && "hidden"
          )}
        >
          ERP SYSTEM
        </motion.span>
        <button 
          onClick={toggleSidebar}
          className="p-2 hover:bg-slate-800 rounded-lg transition-colors absolute right-4"
        >
          <Menu size={24} className="text-slate-300" />
        </button>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item, index) => (
          <div 
            key={index}
            className={cn(
              "flex items-center gap-4 p-3 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer",
              !isOpen && "justify-center"
            )}
          >
            <div className="text-teal-400 min-w-[20px]">{item.icon}</div>
            <motion.span
              animate={{ opacity: isOpen ? 1 : 0 }}
              className={cn(
                "font-medium whitespace-nowrap",
                !isOpen && "hidden"
              )}
            >
              {item.label}
            </motion.span>
          </div>
        ))}
      </nav>
    </motion.aside>
  );
};

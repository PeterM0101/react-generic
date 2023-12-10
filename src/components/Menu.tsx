import React from "react";
import { NavLink } from "react-router-dom";

interface MenuItem {
  id: number;
  link: string;
  name: string;
}

const menu: MenuItem[] = [
  { id: 1, link: "/about", name: "About" },
  { id: 2, link: "/list", name: "List" },
];

const Menu = () => {
  return (
    <nav className="h-10 bg-amber-200 flex justify-center gap-6">
      {menu.map((menuItem: MenuItem) => (
        <NavLink key={menuItem.id} to={menuItem.link}>
          {menuItem.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Menu;

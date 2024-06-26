"use client";
import Link from "next/link";
import { useContext } from "react";
import { ContextoMenu } from "../menuContext";

const itemsNavBar = ["home", "about", "products", "contact"];

export const ToggleMenu: React.FC = (): React.ReactElement => {
  const { statusMenu, setStatusMenu } = useContext(ContextoMenu);
  return (
    <div className="bg-white md:hidden">
      {statusMenu && (
        <ul className="flex flex-col ">
          {itemsNavBar.map((item) => (
            <Link href={`/${item}`} key={item}>
              <li className="py-4 px-6 border-b border-slate-300" key={item}>
                {item}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};
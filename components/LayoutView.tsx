import { useTheme } from "next-themes";
import Link from "next/link";
import { ChangeEvent, PropsWithChildren, useEffect, useState } from "react";

const LayoutView = (props: PropsWithChildren<Record<never, any>>) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTheme("DARK");
    } else {
      setTheme("LIGHT");
    }
  };

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">gunwoongPark</Link>
            </li>
            <li>
              <Link href="/repos">Repositories</Link>
            </li>
          </ul>
        </nav>

        <input
          type="checkbox"
          checked={theme === "DARK"}
          onChange={toggleTheme}
        />
      </header>
      <main>{props.children}</main>
    </>
  );
};

export default LayoutView;

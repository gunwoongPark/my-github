import Link from "next/link";
import { ChangeEvent, PropsWithChildren, useEffect, useState } from "react";
import type { ThemeType } from "../type";
import { isNotNil } from "../util";

const LayoutView = (props: PropsWithChildren<Record<never, any>>) => {
  const [theme, setTheme] = useState<ThemeType | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTheme(document.body.className as ThemeType);
    }
  }, []);

  const toggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    if (typeof window !== "undefined") {
      if (e.target.checked) {
        document.body.className = "DARK";
        setTheme("DARK");
        window.localStorage.setItem("theme", "DARK");
      } else {
        document.body.className = "LIGHT";
        setTheme("LIGHT");
        window.localStorage.setItem("theme", "LIGHT");
      }
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

        {isNotNil(theme) && (
          <input
            type="checkbox"
            checked={theme === "DARK"}
            onChange={toggleTheme}
          />
        )}
      </header>
      <main>{props.children}</main>
    </>
  );
};

export default LayoutView;

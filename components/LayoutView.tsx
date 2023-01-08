import Link from "next/link";
import { ChangeEvent, PropsWithChildren, useEffect, useState } from "react";

const LayoutView = (props: PropsWithChildren<Record<never, any>>) => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTheme(document.body.className);
    }
  }, []);

  const toggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    if (typeof window !== "undefined") {
      if (e.target.checked) {
        document.body.className = "dark-theme";
        setTheme("dark-theme");
        window.localStorage.setItem("theme", "dark-theme");
      } else {
        document.body.className = "light-theme";
        setTheme("light-theme");
        window.localStorage.setItem("theme", "light-theme");
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

        <input
          type="checkbox"
          checked={theme === "dark-theme"}
          onChange={toggleTheme}
        />
      </header>
      <main>{props.children}</main>
    </>
  );
};

export default LayoutView;

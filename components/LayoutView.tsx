import Link from "next/link";
import { PropsWithChildren, useContext, useEffect } from "react";
import { themeContext } from "../context/ThemeProvider";

const LayoutView = (props: PropsWithChildren<Record<never, any>>) => {
  const value = useContext(themeContext);

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
          checked={value?.theme.mode === "DARK"}
          onChange={value?.toggleTheme}
        />
      </header>
      <main>{props.children}</main>
    </>
  );
};

export default LayoutView;

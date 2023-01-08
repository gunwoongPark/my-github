import Link from "next/link";
import { PropsWithChildren, useContext } from "react";
import { useTheme } from "styled-components";
import { themeContext } from "../context/CustomThemeProvider";

const LayoutView = (props: PropsWithChildren<Record<never, any>>) => {
  const customThemeContext = useContext(themeContext);

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
          checked={customThemeContext?.theme.mode === "DARK"}
          onChange={customThemeContext?.toggleTheme}
        />
      </header>
      <main>{props.children}</main>
    </>
  );
};

export default LayoutView;

import Link from "next/link";
import { PropsWithChildren, useContext, useEffect } from "react";
import styled from "styled-components";
import { themeContext } from "../context/CustomThemeProvider";

const LayoutView = (props: PropsWithChildren<Record<never, any>>) => {
  const context = useContext(themeContext);

  useEffect(() => {
    console.log(context);
  }, [context]);

  return (
    <S.Container>
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
          checked={context?.value === "DARK"}
          onChange={context?.action}
        />
      </header>
      <main>{props.children}</main>
    </S.Container>
  );
};

export default LayoutView;

const S = {
  Container: styled.div`
    background-color: ${(props) => props.theme.backgroundColor};
  `,
};

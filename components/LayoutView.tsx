import Link from "next/link";
import { PropsWithChildren } from "react";

const LayoutView = (props: PropsWithChildren<Record<never, any>>) => {
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
      </header>
      <main>{props.children}</main>
    </>
  );
};

export default LayoutView;

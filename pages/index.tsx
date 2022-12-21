import styled from "styled-components";

export default function HomePage() {
  return <H1>HELLO NEXT</H1>;
}

const H1 = styled.h1`
  color: blue;
`;

export async function getStaticProps() {
  return {
    props: {},
  };
}

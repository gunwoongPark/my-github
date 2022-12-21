import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useEffect } from "react";
import styled from "styled-components";
import userApi from "../lib/api/user";
import { UserRes } from "../lib/api/user/schema";

export default function HomePage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  useEffect(() => {
    console.log(props.userInformation);
  }, [props.userInformation]);

  return <H1>HELLO NEXT</H1>;
}

const H1 = styled.h1`
  color: blue;
`;

export const getStaticProps: GetStaticProps<{
  userInformation: UserRes;
}> = async () => {
  const userInformation = await userApi.fetchUser();

  if (!userInformation) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      userInformation,
    },
  };
};

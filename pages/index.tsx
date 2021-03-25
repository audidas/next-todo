import React from "react";
import { NextPage } from "next";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const index: NextPage = () => {
  return (
    <Container>
      <h1>반갑다 스타일드 컴포넌트</h1>
      <h2>반갑다 스타일드 컴포넌트</h2>
      <p>반갑다 스타일드 컴포넌트</p>
      <ul>
        <li>반갑다 스타일드 컴포넌트</li>
      </ul>
      <a>반갑다 스타일드 컴포넌트</a>
      <span>반갑다 스타일드 컴포넌트</span>
    </Container>
  );
};

export default index;

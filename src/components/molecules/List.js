import React from "react";
import styled from "styled-components";
import ListItem from "../atoms/ListItem";

const StyledUl = styled.ul``;

const List = ({ text }) => (
  <StyledUl>
    {text.map((el) => {
      return <ListItem bold>{el}</ListItem>;
    })}
  </StyledUl>
);

export default List;

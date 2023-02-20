import React from "react";
import styled from "styled-components";

import { icons } from "../../utils/icons";

export interface IconProps {
  name: string;
}

const Icon = ({ name }: IconProps) => {
  const SVGIcon = icons[name.toLocaleLowerCase()];

  if (!SVGIcon) {
    return null;
  }

  return (
    <SVGIconContainer data-testid="icon">
      <SVGIcon />
    </SVGIconContainer>
  );
};

const SVGIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
`;

export default Icon;

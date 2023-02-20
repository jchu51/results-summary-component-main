import React from "react";
import styled from "styled-components";
import Icon from "./icon";

export interface ScoreBarProps {
  category: string;
  score: number;
  icon: string;
  color: string;
  maxScore?: number;
}

const ScoreBar = ({
  category,
  score,
  maxScore = 100,
  color,
}: ScoreBarProps) => (
  <ScoreBarContainer data-testid="scoreBar" color={color}>
    <ScoreBarCategory>
      <Icon name={category} />
      <ScoreBarCategoryText data-testid="scoreBarCategoryText" color={color}>
        {category}
      </ScoreBarCategoryText>
    </ScoreBarCategory>
    <ScoreBarScore>
      <ScoreBarScoreNumber data-testid="ScoreBarScoreNumber" opacity={1}>
        {score}
      </ScoreBarScoreNumber>
      <ScoreBarScoreNumber data-testid="ScoreBarScoreMaxNumber" opacity={0.5}>
        / {maxScore}
      </ScoreBarScoreNumber>
    </ScoreBarScore>
  </ScoreBarContainer>
);

const ScoreBarContainer = styled.div`
  height: 54px;
  display: flex;
  background-color: ${({ color, theme }) => {
    switch (color) {
      case "red":
        return theme.colors.lightPrimary.lightRed;
      case "yellow":
        return theme.colors.lightPrimary.orangeyYellow;
      case "green":
        return theme.colors.lightPrimary.greenTeal;
      case "blue":
        return theme.colors.lightPrimary.cobaltBlue;
      default:
        return theme.colors.lightPrimary.black;
    }
  }};
  margin: 16px 0;
  padding: 0 8px;
  border-radius: 8px;
`;

const ScoreBarCategory = styled.div`
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-basis: 70%;
`;

const ScoreBarCategoryText = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${({ color, theme }) => {
    switch (color) {
      case "red":
        return theme.colors.primary.lightRed;
      case "yellow":
        return theme.colors.primary.orangeyYellow;
      case "green":
        return theme.colors.primary.greenTeal;
      case "blue":
        return theme.colors.primary.cobaltBlue;
      default:
        return theme.colors.primary.black;
    }
  }};
`;

const ScoreBarScore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 30%;
`;
const ScoreBarScoreNumber = styled.span<{ opacity?: number }>`
  opacity: ${(props) => props.opacity};
  padding: 0 4px;
`;

export default ScoreBar;

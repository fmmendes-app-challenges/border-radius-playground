import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
`;

interface SquareParams {
  radiusParams: {
    'top-left': {
      x: string;
      y: string;
    };
    'top-right': {
      x: string;
      y: string;
    };
    'bottom-right': {
      x: string;
      y: string;
    };
    'bottom-left': {
      x: string;
      y: string;
    };
  };
}

export const Square = styled.div<SquareParams>`
  margin: 50px;

  width: 30vh;
  height: 30vh;
  background: #395c6b;
  ${(props) => css`
    border-radius: ${props.radiusParams['top-left'].x}
      ${props.radiusParams['top-right'].x}
      ${props.radiusParams['bottom-right'].x}
      ${props.radiusParams['bottom-left'].x} /
      ${props.radiusParams['top-left'].y} ${props.radiusParams['top-right'].y}
      ${props.radiusParams['bottom-right'].y}
      ${props.radiusParams['bottom-left'].y};
  `}
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vh;

  table {
    table-layout: fixed;
    min-width: 50%;
    border-collapse: collapse;

    thead,
    tbody {
      text-align: center;
    }

    th,
    td {
      padding: 4px;

      &:first-child {
        text-align: right;
      }
    }
  }

  label {
    input {
      background: #fff;
      border: none;
      padding: 8px;
      width: 7vh;
      text-align: center;
    }
  }

  button {
    background: #395c6b;
    border: none;
    margin-top: 10px;

    padding: 12px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;

    transition: background-color 0.3s;

    &:hover {
      background: ${shade(0.3, '#395c6b')};
    }
  }
`;

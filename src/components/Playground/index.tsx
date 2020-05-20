import React, { useState, useCallback } from 'react';

import { Container, Square, Controls } from './styles';

interface RadiusParams {
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
}

interface HandleInputsParams {
  corner: string;
  mainAxis: 'x' | 'y';
  crossAxis: 'x' | 'y';
  value: string;
}

const Playground: React.FC = () => {
  const [radiusParams, setRadiusParams] = useState({
    'top-left': {
      x: '0px',
      y: '0px',
    },
    'top-right': {
      x: '0px',
      y: '0px',
    },
    'bottom-right': {
      x: '0px',
      y: '0px',
    },
    'bottom-left': {
      x: '0px',
      y: '0px',
    },
  } as RadiusParams);

  const handleInputChange = useCallback(
    ({ corner, mainAxis, crossAxis, value }: HandleInputsParams) => {
      if (
        corner === 'top-left' ||
        corner === 'top-right' ||
        corner === 'bottom-left' ||
        corner === 'bottom-right'
      ) {
        setRadiusParams((oldParams) => {
          const newParams = {
            ...oldParams,
            [corner]: {
              [mainAxis]: value,
              [crossAxis]: oldParams[corner][crossAxis],
            },
          };

          return newParams;
        });
      } else {
      }
    },
    [],
  );

  const handleCopy = useCallback(() => {
    const borderRadiusCSS = `border-radius: ${radiusParams['top-left'].x}
    ${radiusParams['top-right'].x}
    ${radiusParams['bottom-right'].x}
    ${radiusParams['bottom-left'].x} /
    ${radiusParams['top-left'].y} ${radiusParams['top-right'].y}
    ${radiusParams['bottom-right'].y}
    ${radiusParams['bottom-left'].y};`;

    navigator.clipboard.writeText(borderRadiusCSS);
  }, [radiusParams]);

  return (
    <Container>
      <Square radiusParams={radiusParams} />
      <Controls>
        <table>
          <thead>
            <tr>
              <th>Corner</th>
              <th>X</th>
              <th>Y</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(radiusParams).map(([key, value]) => (
              <tr key={key}>
                <td>{key}:</td>
                <td>
                  <label htmlFor={`${key}-x`}>
                    <input
                      type="text"
                      id={`${key}-x`}
                      value={`${value.x}`}
                      onChange={(event) => {
                        handleInputChange({
                          corner: key,
                          mainAxis: 'x',
                          crossAxis: 'y',
                          value: event.target.value,
                        });
                      }}
                    />
                  </label>
                </td>
                <td>
                  <label htmlFor={`${key}-y`}>
                    <input
                      type="text"
                      id={`${key}-y`}
                      value={`${value.y}`}
                      onChange={(event) =>
                        handleInputChange({
                          corner: key,
                          mainAxis: 'y',
                          crossAxis: 'x',
                          value: event.target.value,
                        })
                      }
                    />
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" onClick={handleCopy}>
          Copy border-radius CSS
        </button>
      </Controls>
    </Container>
  );
};

export default Playground;

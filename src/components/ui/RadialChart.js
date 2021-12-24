import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import useObjectState from "app/hooks/state/useObjectState";
import styled from "styled-components";

const DEFAULT_COLOR = '#436db2';

const RadialChart = ({ radius, progress, strokeWidth, color, withoutLabel }) => {
  const [state, setState] = useObjectState({})

  useEffect(() => {
    //initial animation
    setTimeout(() => {
      setState({ setStrokeLength: true });
    });
  }, []);

  const { setStrokeLength } = state;
  const circleRadius = Math.min(radius, 10);
  const circumference = 2 * 3.14 * circleRadius;
  const strokeLength = setStrokeLength ? (circumference / 100) * progress : 0;

  return (
    <StyledChart noProgress={strokeLength === 0}>
      <svg viewBox={`0 0 ${radius*2} ${radius*2}`} width={radius*2} height={radius*2}>
        <circle
          className="radial-chart-total"
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          cx={radius}
          cy={radius}
          r={circleRadius}
        />
        <circle
          className="radial-chart-progress"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={`${strokeLength},${circumference}`}
          strokeLinecap="round"
          fill="none"
          cx={radius}
          cy={radius}
          r={circleRadius}
        />
        {/*<text x="50%" y="50%" textAnchor="middle" stroke="#000000" strokeWidth=".5px" fontSize=".6em" dy=".3em">{progress}%</text>*/}
      </svg>
      {!withoutLabel && (
        <>
          {progress}%
        </>
      )}
    </StyledChart>
  );
}

RadialChart.defaultProps = {
  radius: 15,
  progress: 100,
  strokeWidth: 4,
  color: DEFAULT_COLOR
};

RadialChart.propTypes = {
  className: PropTypes.string,
  radius: PropTypes.number,
  strokeWidth: PropTypes.number,
  color: PropTypes.string,
  progress: PropTypes.number,
};

const StyledChart = styled.div`
  position: relative;
  display: inline-block;
  transition: all 0.3s ease-in;
  .radial-chart.no-progress .radial-chart-progress {
    opacity: 0;
  }
  .radial-chart-total {
    opacity: 0.2;
  }
  .radial-chart-progress {
    opacity: ${({noProgress}) => noProgress ? 0 : 1};
    transform: rotate(270deg);
    transform-origin: center;
    transition: all 0.6s cubic-bezier(0.58, 0.16, 0.5, 1.14);
    transition-delay: 0.3s;
  }
`;

export default RadialChart;

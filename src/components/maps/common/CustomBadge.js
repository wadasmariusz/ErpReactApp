import React from "react";
import styled from "styled-components";

const changeColorLightness = (lightness) => (hexColor) => {
  if (!hexColor) return '#F8F8F8';
  const color = parseInt(hexColor.replace('#', ''), 16);
  if (isNaN(color)) return '#F8F8F8'
  const r = (color & 0xFF0000) / 0x10 ** 4;
  const g = (color & 0x00FF00) / 0x10 ** 2;
  const b = (color & 0x0000FF);

  const changedR = Math.max(0, Math.min(r + lightness, 0xF8)).toString(16);
  const changedG = Math.max(0, Math.min(g + lightness, 0xF8)).toString(16);
  const changedB = Math.max(0, Math.min(b + lightness, 0xF8)).toString(16);

  return `#${changedR}${changedG}${changedB}`;
}

const StyledBadge = styled.span`
  color: ${({color}) => color ?? 'black'};
  background-color: ${({color, lighten}) => lighten(color) ?? 'white'};
  font-weight: bold;
`

export const CustomBadge = ({lightness = 100, ...props}) => <StyledBadge
  lighten={changeColorLightness(lightness)} {...props} />

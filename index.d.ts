import React, { PureComponent, Component } from 'react'

type fontTypes = 'light' | 'bold' | 'regular' | 'lightItalic' | 'italic' | 'boldItalic'

export interface HeaderProps {
  backgroundColor?: string,
  left?: string | Element,
  leftColor?: string,
  leftPress?: () => void,
  center?: string | Element,
  centerSize?: number,
  centerFontType?: fontTypes,
  centerColor?: string,
  right?: string | Element,
  rightColor?: string,
  rightPress?: () => void,
  leftTestId?: string,
  rightTestId?: string,
  leftSize?: number,
  rightSize?: number,
}

export class Header extends PureComponent<HeaderProps> { }
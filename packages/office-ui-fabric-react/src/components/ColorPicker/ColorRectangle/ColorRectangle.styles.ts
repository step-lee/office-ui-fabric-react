import { IColorRectangleStyleProps, IColorRectangleStyles } from './ColorRectangle.types';
import { HighContrastSelector } from '../../../Styling';

export const getStyles = (props: IColorRectangleStyleProps): IColorRectangleStyles => {
  const { className, theme } = props;
  const { palette, effects } = theme;

  return {
    root: [
      'ms-ColorPicker-colorRect',
      {
        position: 'relative',
        marginBottom: 8,
        border: `1px solid ${palette.neutralLighter}`,
        borderRadius: effects.roundedCorner2,
        selectors: {
          [HighContrastSelector]: {
            MsHighContrastAdjust: 'none'
          }
        }
      },
      className
    ],
    light: [
      'ms-ColorPicker-light',
      {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: 'linear-gradient(to right, white 0%, transparent 100%)'
      }
    ],
    dark: [
      'ms-ColorPicker-dark',
      {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: 'linear-gradient(to bottom, transparent 0, #000 100%)'
      }
    ],
    thumb: [
      'ms-ColorPicker-thumb',
      {
        position: 'absolute',
        width: 20,
        height: 20,
        background: 'white',
        border: `1px solid ${palette.neutralSecondaryAlt}`,
        borderRadius: '50%',
        boxShadow: effects.elevation8,
        transform: 'translate(-50%, -50%)',
        selectors: {
          ':before': {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            border: `2px solid ${palette.white}`,
            borderRadius: '50%',
            boxSizing: 'border-box',
            content: '""'
          }
        }
      }
    ]
  };
};

import * as React from 'react';
import { IStyle, ITheme } from '../../Styling';
import { IStyleFunctionOrObject, IRenderFunction } from '../../Utilities';

/**
 * {@docCategory DetailsList}
 */
export interface IDetailsRowCheckProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Theme provided by High-Order Component.
   */
  theme?: ITheme;

  /**
   * Style override
   */
  styles?: IStyleFunctionOrObject<IDetailsRowCheckStyleProps, IDetailsRowCheckStyles>;

  /**
   * Is the check part of the header in a DetailsList
   */
  isHeader?: boolean;

  /**
   * Whether or not this check is selected
   */
  selected?: boolean;

  /**
   * Is any selected - also true for isSelectionModal
   */
  anySelected?: boolean;

  /**
   * Can this checkbox be selectable
   */
  canSelect: boolean;

  /**
   * Is this in compact mode?
   */
  compact?: boolean;

  /**
   * Optional className to attach to the slider root element.
   */
  className?: string;

  /**
   * The classname to be passed down to Check component
   */
  checkClassName?: string;

  /**
   * Whether or not this checkbox is visible
   */
  isVisible?: boolean;

  /**
   * If provided, can be used to render a custom checkbox
   */
  onRenderDetailsCheckbox?: IRenderFunction<IDetailsCheckboxProps>;
}

/**
 * {@docCategory DetailsList}
 */
export type IDetailsRowCheckStyleProps = Required<Pick<IDetailsRowCheckProps, 'theme'>> &
  Pick<IDetailsRowCheckProps, 'compact' | 'isHeader' | 'selected' | 'anySelected' | 'canSelect' | 'className'> & {
    /** Is checkbox visible */
    isVisible?: boolean;
  };

/**
 * {@docCategory DetailsList}
 */
export interface IDetailsRowCheckStyles {
  root: IStyle;
  /** @deprecated Use `root` (they're applied to the same element) */
  check: IStyle;
  isDisabled: IStyle;
}

export interface IDetailsCheckboxProps {
  checked: boolean;
}

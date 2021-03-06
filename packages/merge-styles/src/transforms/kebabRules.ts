const rules: { [key: string]: string } = {
  MozOsxFontSmoothing: '-moz-osx-font-smoothing',
  MsHighContrastAdjust: '-ms-high-contrast-adjust',
  WebkitFontSmoothing: '-webkit-font-smoothing',
  WebkitOverflowScrolling: '-webkit-overflow-scrolling',
  WebkitTapHighlightColor: '-webkit-tap-highlight-color',
  alignContent: 'align-content',
  alignItems: 'align-items',
  alignSelf: 'align-self',
  animation: 'animation',
  animationDelay: 'animation-delay',
  animationDirection: 'animation-direction',
  animationDuration: 'animation-duration',
  animationFillMode: 'animation-fill-mode',
  animationIterationCount: 'animation-iteration-count',
  animationName: 'animation-name',
  animationTimingFunction: 'animation-timing-function',
  background: 'background',
  backgroundClip: 'background-clip',
  backgroundColor: 'background-color',
  backgroundImage: 'background-image',
  backgroundPosition: 'background-position',
  border: 'border',
  borderBottom: 'border-bottom',
  borderBottomColor: 'border-bottom-color',
  borderBottomStyle: 'border-bottom-style',
  borderBottomWidth: 'border-bottom-width',
  borderCollapse: 'border-collapse',
  borderColor: 'border-color',
  borderLeft: 'border-left',
  borderRadius: 'border-radius',
  borderRight: 'border-right',
  borderStyle: 'border-style',
  borderTop: 'border-top',
  borderTopColor: 'border-top-color',
  borderTopLeftRadius: 'border-top-left-radius',
  borderTopRightRadius: 'border-top-right-radius',
  borderTopStyle: 'border-top-style',
  borderTopWidth: 'border-top-width',
  borderWidth: 'border-width',
  bordercolor: 'bordercolor',
  bottom: 'bottom',
  boxShadow: 'box-shadow',
  boxSizing: 'box-sizing',
  clear: 'clear',
  color: 'color',
  content: 'content',
  cursor: 'cursor',
  display: 'display',
  fill: 'fill',
  flex: 'flex',
  flexBasis: 'flex-basis',
  flexDirection: 'flex-direction',
  flexGrow: 'flex-grow',
  flexShrink: 'flex-shrink',
  flexWrap: 'flex-wrap',
  float: 'float',
  font: 'font',
  fontFamily: 'font-family',
  fontSize: 'font-size',
  fontStyle: 'font-style',
  fontWeight: 'font-weight',
  height: 'height',
  justifyContent: 'justify-content',
  left: 'left',
  lineHeight: 'line-height',
  listStyle: 'list-style',
  listStyleType: 'list-style-type',
  marginBottom: 'margin-bottom',
  marginLeft: 'margin-left',
  marginRight: 'margin-right',
  marginTop: 'margin-top',
  maxHeight: 'max-height',
  maxWidth: 'max-width',
  minHeight: 'min-height',
  minWidth: 'min-width',
  mozOsxFontSmoothing: 'moz-osx-font-smoothing',
  objectFit: 'object-fit',
  opacity: 'opacity',
  order: 'order',
  outline: 'outline',
  outlineColor: 'outline-color',
  outlineOffset: 'outline-offset',
  overflow: 'overflow',
  overflowWrap: 'overflow-wrap',
  overflowX: 'overflow-x',
  overflowY: 'overflow-y',
  paddingBottom: 'padding-bottom',
  paddingLeft: 'padding-left',
  paddingRight: 'padding-right',
  paddingTop: 'padding-top',
  perspective: 'perspective',
  pointerEvents: 'pointer-events',
  position: 'position',
  resize: 'resize',
  right: 'right',
  speak: 'speak',
  src: 'src',
  tableLayout: 'table-layout',
  textAlign: 'text-align',
  textDecoration: 'text-decoration',
  textOverflow: 'text-overflow',
  textTransform: 'text-transform',
  top: 'top',
  transform: 'transform',
  transformOrigin: 'transform-origin',
  transition: 'transition',
  transitionDelay: 'transition-delay',
  transitionDuration: 'transition-duration',
  transitionProperty: 'transition-property',
  transitionTimingFunction: 'transition-timing-function',
  userSelect: 'user-select',
  verticalAlign: 'vertical-align',
  visibility: 'visibility',
  webkitFontSmoothing: 'webkit-font-smoothing',
  whiteSpace: 'white-space',
  width: 'width',
  wordBreak: 'word-break',
  wordWrap: 'word-wrap',
  zIndex: 'z-index'
};

export function kebabRules(rulePairs: (string | number)[], index: number): void {
  const rule: string = rulePairs[index] as string;

  rulePairs[index] = rules[rule] = rules[rule] || rule.replace(/([A-Z])/g, '-$1').toLowerCase();
}

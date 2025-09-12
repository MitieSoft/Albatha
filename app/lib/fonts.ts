// Font utility functions for the project
export const getFontFamily = (isRTL: boolean): string => {
  return isRTL ? 'GE SS Two' : 'Univers';
};

export const getFontClasses = (isRTL: boolean): string => {
  return isRTL ? 'font-arabic' : 'font-english';
};

export const getFontStyle = (isRTL: boolean): React.CSSProperties => {
  return {
    fontFamily: isRTL ? 'GE SS Two, Segoe UI, Tahoma, Arial, sans-serif' : 'Univers, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
  };
};

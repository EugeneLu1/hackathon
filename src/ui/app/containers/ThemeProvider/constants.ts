export enum ActionTypes {
  TOGGLE_DARK_MODE = 'app/ThemeProvider/TOGGLE_DARK_MODE',
}

export enum Palette {
  PRIMARY_COLOR = '#0275DB',
  PRIMARY_CONTRAST_HOVER_COLOR = '#4360AC',
  YELLOW_COLOR = '#fbedb2',
  YELLOW_CONTRAST_COLOR = '#c08d44',
  YELLOW_HOVER_COLOR = '#f7d64c',
  YELLOW_CONTRAST_HOVER_COLOR = '#d1722a',
  GREEN_COLOR = '#cbecde',
  GREEN_CONTRAST_COLOR = '#55917c',
  GREEN_HOVER_COLOR = '#77d8b3',
  GREEN_CONTRAST_HOVER_COLOR = '#477462',
  GREY_COLOR = '#e0e0e0',
  GREY_CONTRAST_COLOR = '#666',
  GREY_HOVER_COLOR = '#9e9e9e',
  GREY_CONTRAST_HOVER_COLOR = '#eee',
  RED_COLOR = '#ff9f9f',
  RED_CONTRAST_COLOR = '#ab4a44',
  ORANGE_COLOR = '#ffcc9d',
  ORANGE_CONTRAST_COLOR = '#b4763d',
  BLUE_COLOR = '#c5ddfc',
  BLUE_CONTRAST_COLOR = '#446f92',
}

// page offsets for overlays / positioned elements
export enum Offsets {
  OVERLAY_OFFSET_PRIMARY_NAV = 48 + 1, // navigation bar + 1px border
  OVERLAY_OFFSET_PAGE_NAV = OVERLAY_OFFSET_PRIMARY_NAV + 40 + 32 + 4, // + in-page navigation + top margin + box-shadow
  OVERLAY_OFFSET_PAGE_HEADING = 40 + 32 + 32, // page header + headar top/bottom margins
}

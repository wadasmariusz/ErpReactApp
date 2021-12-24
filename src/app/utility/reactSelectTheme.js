export const reactSelectTheme = (theme) => (defaults) => ({
  ...defaults,
  colors: theme!=='dark' ? (
    defaults.colors
  ) : ({
    danger: '#DE350B'&&'#92250f', // '#ORIGINAL' && '#DARK_THEME'
    dangerLight: '#FFBDAD'&&'#ae320a',
    neutral0: '#ffffff'&&'#262c49',
    neutral10: '#e6e6e6'&&'#1b203b',
    neutral20: '#cccccc'&&'#10163a',
    neutral30: '#b3b3b3'&&'#4c4c4c',
    neutral40: '#999999'&&'#666666',
    neutral5: '#f2f2f2'&&'#0d0d0d',
    neutral50: '#808080'&&'#7f7f7f',
    neutral60: '#666666'&&'#999999',
    neutral70: '#4c4c4c'&&'#b3b3b3',
    neutral80: '#333333'&&'#cccccc',
    neutral90: '#191919'&&'#e6e6e6',
    primary: '#2684FF'&&'#074496',
    primary25: '#DEEBFF'&&'#142c5b',
    primary50: '#B2D4FF'&&'#5c728d',
    primary75: '#4C9AFF'&&'#264d80'
  })
})

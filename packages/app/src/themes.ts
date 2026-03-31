import {
  createBaseThemeOptions,
  createUnifiedTheme,
  genPageTheme,
  palettes,
  shapes,
} from '@backstage/theme';

const pageThemeOverrides = {
  home: genPageTheme({ colors: ['#1f2937', '#ffbd59'], shape: shapes.wave }),
  documentation: genPageTheme({ colors: ['#1f2937', '#ffbd59'], shape: shapes.wave2 }),
  tool: genPageTheme({ colors: ['#1f2937', '#007bff'], shape: shapes.round }),
  service: genPageTheme({ colors: ['#1f2937', '#ffbd59'], shape: shapes.wave }),
  website: genPageTheme({ colors: ['#1f2937', '#007bff'], shape: shapes.wave }),
  library: genPageTheme({ colors: ['#1f2937', '#ffbd59'], shape: shapes.wave2 }),
  other: genPageTheme({ colors: ['#1f2937', '#ffbd59'], shape: shapes.wave }),
  app: genPageTheme({ colors: ['#1f2937', '#ffbd59'], shape: shapes.wave }),
  apis: genPageTheme({ colors: ['#1f2937', '#007bff'], shape: shapes.wave2 }),
};

export const lightTheme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: {
      ...palettes.light,
      primary: {
        main: '#ffbd59',
        light: '#ffcc66',
        dark: '#ffb347',
        contrastText: '#1f2937',
      },
      secondary: {
        main: '#007bff',
        light: '#3395ff',
        dark: '#0056b3',
        contrastText: '#ffffff',
      },
      error: {
        main: '#dc2626',
        light: '#fee2e2',
        dark: '#b91c1c',
        contrastText: '#ffffff',
      },
      warning: {
        main: '#ffbd59',
        contrastText: '#1f2937',
      },
      success: {
        main: '#10d876',
        light: '#0ec468',
        dark: '#0aa855',
        contrastText: '#ffffff',
      },
      info: {
        main: '#007bff',
        contrastText: '#ffffff',
      },
      background: {
        default: '#f5f5f5',
        paper: '#ffffff',
      },
      text: {
        primary: '#1f2937',
        secondary: '#666666',
        disabled: '#9ca3af',
      },
      navigation: {
        background: '#1f2937',
        indicator: '#ffbd59',
        color: '#ffffff',
        selectedColor: '#ffbd59',
        navItem: {
          hoverBackground: 'rgba(255, 189, 89, 0.12)',
        },
        submenu: {
          background: '#111827',
        },
      },
    },
  }),
  defaultPageTheme: 'home',
  pageTheme: pageThemeOverrides,
  components: {
    BackstageHeader: {
      styleOverrides: {
        header: {
          background: '#1f2937',
          boxShadow: 'none',
          borderBottom: '2px solid #ffbd59',
        },
        title: {
          color: '#ffffff',
        },
        subtitle: {
          color: '#9ca3af',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          background: 'linear-gradient(135deg, #ffd080 0%, #ffbd59 50%, #ffb347 100%)',
          boxShadow: '0 2px 6px rgba(255, 189, 89, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
          color: '#1f2937',
          fontWeight: 700,
          '&:hover': {
            background: 'linear-gradient(135deg, #ffe099 0%, #ffcc66 50%, #ffbd59 100%)',
            boxShadow: '0 3px 10px rgba(255, 189, 89, 0.4), inset 0 1px 0 rgba(255,255,255,0.25)',
          },
          '&:active': {
            background: 'linear-gradient(135deg, #ffb347 0%, #ffaa33 100%)',
            boxShadow: '0 1px 3px rgba(255, 189, 89, 0.25)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #3395ff 0%, #007bff 50%, #0056b3 100%)',
          boxShadow: '0 2px 6px rgba(0, 123, 255, 0.3), inset 0 1px 0 rgba(255,255,255,0.15)',
          fontWeight: 700,
          '&:hover': {
            background: 'linear-gradient(135deg, #55aaff 0%, #3395ff 50%, #007bff 100%)',
            boxShadow: '0 3px 10px rgba(0, 123, 255, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
          },
        },
      },
    },
  },
});

export const darkTheme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: {
      ...palettes.dark,
      primary: {
        main: '#ffbd59',
        light: '#ffcc66',
        dark: '#ffb347',
        contrastText: '#1f2937',
      },
      secondary: {
        main: '#007bff',
        light: '#3395ff',
        dark: '#0056b3',
        contrastText: '#ffffff',
      },
      error: {
        main: '#dc2626',
        light: '#fee2e2',
        dark: '#b91c1c',
        contrastText: '#ffffff',
      },
      warning: {
        main: '#ffbd59',
        contrastText: '#1f2937',
      },
      success: {
        main: '#10d876',
        light: '#0ec468',
        dark: '#0aa855',
        contrastText: '#ffffff',
      },
      info: {
        main: '#007bff',
        contrastText: '#ffffff',
      },
      background: {
        default: '#111827',
        paper: '#1f2937',
      },
      text: {
        primary: '#f9fafb',
        secondary: '#9ca3af',
        disabled: '#4b5563',
      },
      navigation: {
        background: '#0f172a',
        indicator: '#ffbd59',
        color: '#d1d5db',
        selectedColor: '#ffbd59',
        navItem: {
          hoverBackground: 'rgba(255, 189, 89, 0.12)',
        },
        submenu: {
          background: '#0a0f1a',
        },
      },
    },
  }),
  defaultPageTheme: 'home',
  pageTheme: pageThemeOverrides,
  components: {
    BackstageHeader: {
      styleOverrides: {
        header: {
          background: '#0f172a',
          boxShadow: 'none',
          borderBottom: '2px solid #ffbd59',
        },
        title: {
          color: '#ffffff',
        },
        subtitle: {
          color: '#9ca3af',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          background: 'linear-gradient(135deg, #ffd080 0%, #ffbd59 50%, #ffb347 100%)',
          boxShadow: '0 2px 6px rgba(255, 189, 89, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
          color: '#1f2937',
          fontWeight: 700,
          '&:hover': {
            background: 'linear-gradient(135deg, #ffe099 0%, #ffcc66 50%, #ffbd59 100%)',
            boxShadow: '0 3px 10px rgba(255, 189, 89, 0.4), inset 0 1px 0 rgba(255,255,255,0.25)',
          },
          '&:active': {
            background: 'linear-gradient(135deg, #ffb347 0%, #ffaa33 100%)',
            boxShadow: '0 1px 3px rgba(255, 189, 89, 0.25)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #3395ff 0%, #007bff 50%, #0056b3 100%)',
          boxShadow: '0 2px 6px rgba(0, 123, 255, 0.3), inset 0 1px 0 rgba(255,255,255,0.15)',
          fontWeight: 700,
          '&:hover': {
            background: 'linear-gradient(135deg, #55aaff 0%, #3395ff 50%, #007bff 100%)',
            boxShadow: '0 3px 10px rgba(0, 123, 255, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
          },
        },
      },
    },
  },
});

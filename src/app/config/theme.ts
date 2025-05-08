import { createTheme } from '@mantine/core';

/**
 * https://mantine.dev/theming/theme-object/
 */

export default createTheme({
  fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  fontSmoothing: true,
  activeClassName: 'active'

  // components: {
  //   ActionIcon: ActionIcon.extend({
  //     styles: (theme, { color }) => ({
  //       root: {
  //         '&:hover': {
  //           backgroundColor: theme.colors[color || 'gray'][0]
  //         }
  //       }
  //     })
  //   })
  // }
});

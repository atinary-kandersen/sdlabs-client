import { createTheme, Timeline, Tooltip } from '@mantine/core';
import timelineStyles from '../../lib/common/components/Timeline/Timeline.module.css';

/**
 * https://mantine.dev/theming/theme-object/
 */

export default createTheme({
  fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  fontSmoothing: true,
  activeClassName: 'active',
  cursorType: 'pointer',
  components: {
    Timeline: Timeline.extend({
      classNames: {
        itemBullet: timelineStyles.itemBullet
      }
    }),
    Tooltip: Tooltip.extend({
      defaultProps: {
        openDelay: 250,
        offset: 10,
        bg: 'var(--mantine-color-gray-7)'
      }
    })
  }
});

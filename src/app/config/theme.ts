import { createTheme, Timeline } from '@mantine/core';
import timelineStyles from '../../lib/common/components/Timeline/Timeline.module.css';

/**
 * https://mantine.dev/theming/theme-object/
 */

export default createTheme({
  fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  fontSmoothing: true,
  activeClassName: 'active',

  components: {
    Timeline: Timeline.extend({
      classNames: {
        itemBullet: timelineStyles.itemBullet
      }
    })
  }
});

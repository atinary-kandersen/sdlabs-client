import { MantineProvider } from '@mantine/core';
import type { ReactNode } from 'react';
import { render } from 'vitest-browser-react';
import theme from '../../app/config/theme';

export default function mantineRender(ui: ReactNode) {
  return render(<MantineProvider theme={theme}>{ui}</MantineProvider>);
}

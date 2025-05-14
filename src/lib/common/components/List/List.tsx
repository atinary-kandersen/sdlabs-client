import type { ReactNode } from 'react';
import ListItem from './ListItem';

export default function List({ children }: { children: ReactNode }) {
  return <div className="wa-stack wa-gap-2xs">{children}</div>;
}

List.Item = ListItem;

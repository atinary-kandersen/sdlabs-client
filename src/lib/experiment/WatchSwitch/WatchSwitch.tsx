import { Switch, Tooltip } from '@mantine/core';

export default function WatchSwitch({ watched, setWatch }: { watched: boolean; setWatch: (watch: boolean) => void }) {
  return (
    <Tooltip label="Watch this experiment" withArrow>
      <div>
        <Switch
          size="md"
          color="blue.6"
          checked={watched}
          onChange={event => setWatch(event.currentTarget.checked)}
          onLabel={
            <wa-icon name="eye" variant={watched ? 'regular' : 'light'} style={{ color: watched ? 'white' : 'gray', fontSize: '1rem' }}></wa-icon>
          }
          offLabel={
            <wa-icon
              name="eye-slash"
              variant={watched ? 'regular' : 'light'}
              style={{ color: watched ? 'var(--mantine-color-blue-7)' : 'var(--mantine-color-gray-5)', fontSize: '1rem' }}
            ></wa-icon>
          }
        />
      </div>
    </Tooltip>
  );
}

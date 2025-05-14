import { Group, Stack, Text } from '@mantine/core';
import type { FileWithPath } from '@mantine/dropzone';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import styles from './DatasetDropzone.module.css';

export default function DatasetDropzone({ onDrop }: { onDrop: (files: FileWithPath[]) => void }) {
  return (
    <Dropzone onDrop={onDrop} accept={[MIME_TYPES.csv]} maxSize={5 * 1024 ** 2} className={styles.dropzone}>
      <Group justify="center" gap="xl" mih={100} style={{ pointerEvents: 'none' }}>
        <wa-icon name="upload" style={{ color: 'var(--mantine-color-blue-6)', fontSize: '3rem' }} />
        <Stack gap="0.3rem">
          <Text size="xl" inline>
            Drag your dataset here or click to select files
          </Text>
          <Text size="sm" c="dimmed" inline mt={7}>
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </Stack>
      </Group>
    </Dropzone>
  );
}

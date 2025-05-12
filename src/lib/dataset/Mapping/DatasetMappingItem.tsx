import { Select, Switch, TextInput } from '@mantine/core';
import classNames from 'classnames';
import styles from './DatasetMapping.module.css';
import { ColumnType, MappingDefinition } from './types';

export default function MappingItem({
  item,
  isValid,
  onUpdate
}: {
  item: MappingDefinition;
  isValid: boolean;
  onUpdate: (item: MappingDefinition) => void;
}) {
  const toggleDisabled = () => onUpdate({ ...item, disabled: !item.disabled });
  const changeColumnType = (columnType: ColumnType) => onUpdate({ ...item, columnType });

  return (
    <tr className={classNames(styles.mappingTableRow, { [styles.mappingTableRowDisabled]: item.disabled })}>
      <td className={styles.mappingTableCell}>
        <Switch checked={item.disabled === false} onChange={toggleDisabled}></Switch>
      </td>
      <td className={styles.mappingTableCell}>
        <TextInput value={item.columnName} readOnly disabled={item.disabled} className={styles.mappingFormControl}></TextInput>
      </td>
      <td className={styles.mappingTableCell}>
        {!item.disabled && <wa-icon name="arrow-right-long" style={{ color: 'var(--wa-color-gray-70)' }}></wa-icon>}
      </td>
      <td className={styles.mappingTableCell}>
        <Select
          data={[
            { value: 'parameter', label: 'Parameter' },
            { value: 'measurement', label: 'Measurement' },
            { value: 'both', label: 'Both' }
          ]}
          value={item.columnType}
          placeholder="Select"
          disabled={item.disabled === true}
          className={styles.mappingFormControl}
          onChange={value => changeColumnType(value as ColumnType)}
        />
      </td>
      <td className={styles.mappingTableCell} style={{ minWidth: 50 }}>
        {isValid && <wa-icon name="circle-check" style={{ fontSize: '1.2rem', color: item.disabled ? 'lightgray' : 'green' }}></wa-icon>}
      </td>
    </tr>
  );
}

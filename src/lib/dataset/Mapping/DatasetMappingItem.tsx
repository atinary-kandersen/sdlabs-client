import classNames from 'classnames';
import { ChangeEvent } from 'react';
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
        <wa-switch checked={item.disabled === false} onChange={toggleDisabled}></wa-switch>
      </td>
      <td className={styles.mappingTableCell}>
        <wa-input value={item.columnName} appearance="filled" readonly disabled={item.disabled} class={styles.mappingFormControl}></wa-input>
      </td>
      <td className={styles.mappingTableCell}>
        {!item.disabled && <wa-icon name="arrow-right-long" style={{ color: 'var(--wa-color-gray-70)' }}></wa-icon>}
      </td>
      <td className={styles.mappingTableCell}>
        <wa-select
          value={item.columnType}
          placeholder="Select"
          disabled={item.disabled === true}
          class={styles.mappingFormControl}
          onInput={(event: ChangeEvent<HTMLSelectElement>) => {
            changeColumnType(event.target.value as ColumnType);
            event.stopPropagation();
            event.preventDefault();
          }}
        >
          <wa-option value="parameter">Parameter</wa-option>
          <wa-option value="measurement">Measurement</wa-option>
          <wa-option value="both">Both</wa-option>
        </wa-select>
      </td>
      <td className={styles.mappingTableCell}>
        {isValid && <wa-icon name="circle-check" style={{ fontSize: '1.2rem', color: item.disabled ? 'initial' : 'green;' }}></wa-icon>}
      </td>
    </tr>
  );
}

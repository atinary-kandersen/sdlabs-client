import { useState } from 'react';
import MappingItem from './DatasetMappingItem';
import type { DatasetDefinition, MappingDefinition } from './types';

function validateMappingItem(item: MappingDefinition): boolean {
  return item.disabled || ['parameter', 'measurement', 'both'].includes(item.columnType);
}

export default function DatasetMapping({ datasetDefinition }: { datasetDefinition: DatasetDefinition }) {
  const [mappingItems, setMappingItems] = useState<Array<MappingDefinition>>(datasetDefinition.map(column => ({ ...column, disabled: false })));

  const updateMappingItem = (newItem: MappingDefinition) => {
    const item = mappingItems.find(item => item.columnName === newItem.columnName)!;
    item.columnType = newItem.columnType;
    item.disabled = newItem.disabled;
    setMappingItems([...mappingItems]);
  };

  return (
    <table>
      <tbody>
        {mappingItems.map((item, index) => (
          <MappingItem key={index} item={item} isValid={validateMappingItem(item)} onUpdate={updateMappingItem} />
        ))}
      </tbody>
    </table>
  );
}

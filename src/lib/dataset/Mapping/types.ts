export type ColumnType = 'parameter' | 'measurement' | 'both' | 'unknown';
export type MappingDefinition = { columnName: string; columnType: ColumnType; disabled: boolean };
export type DatasetDefinition = Array<Pick<MappingDefinition, 'columnName' | 'columnType'>>;

import { TextInput } from '@mantine/core';
import type { KeyboardEvent } from 'react';
import commonStyles from '../../common/styles/common.module.css';

export default function MultipleParameterNameInput({ onEnter }: { onEnter: (names: string[]) => void }) {
  function onKeyUp(e: KeyboardEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    if (e.key === 'Enter' && value.length > 0) {
      const input = e.target as HTMLInputElement;
      const delimiter = value.includes(',') ? ',' : ';';
      const names = input.value
        .split(delimiter)
        .map(name => name.trim())
        .filter(name => name.length > 0);
      onEnter(names);
      input.value = '';
      input.focus();
    }
  }

  return (
    <div className="wa-stack wa-gap-xs">
      <TextInput
        label="Enter parameter names"
        placeholder="Ex: pH, temperature, pressure"
        onKeyUp={onKeyUp}
        autoCorrect="off"
        autoComplete="off"
        spellCheck="false"
      ></TextInput>
      <div className={commonStyles.hintText}>You can enter multiple parameter names delimited by comma (,) or semi-colon (;).</div>
    </div>
  );
}

export default function MultipleParameterNameInput({ onEnter }: { onEnter: (names: string[]) => void }) {
  function onKeyPress(e: KeyboardEvent) {
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
    <wa-input
      aut
      inputmode="text"
      placeholder="Ex: pH, temperature, pressure"
      hint="You can enter multiple parameter names delimited by comma (,) or semi-colon (;)."
      onKeyPress={onKeyPress}
      autocorrect="off"
      autocomplete="off"
      spellcheck="off"
    ></wa-input>
  );
}

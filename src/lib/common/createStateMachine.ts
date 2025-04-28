type StateTransition<StateType> = Record<'target', StateType>;

type StateDefinition<StateType> = Record<
  'transitions',
  Record<string, StateTransition<StateType>>
> &
  Partial<Record<'onEnter' | 'onExit', (state: StateType) => void>>;

type MachineDefinition<StateType extends string | number | symbol> = Record<
  StateType,
  StateDefinition<StateType>
>;

export function createStateMachine<StateType extends string>(
  initialState: StateType,
  machineDefinition: MachineDefinition<StateType>
) {
  let currentState: StateType = initialState;
  const machine = {
    value: initialState,
    transition(event: string) {
      const currentStateDefinition = machineDefinition[currentState];
      const destinationTransition = currentStateDefinition.transitions[event];
      if (!destinationTransition) {
        console.warn(
          `destinationTransition "${event}" is not defined in transition.`
        );
        return;
      }
      const destinationState = destinationTransition.target;
      const destinationStateDefinition = machineDefinition[destinationState];

      if (typeof currentStateDefinition.onExit === 'function') {
        currentStateDefinition.onExit(currentState);
      }
      if (typeof destinationStateDefinition.onEnter === 'function') {
        destinationStateDefinition.onEnter(currentState);
      }

      currentState = destinationState;
      machine.value = destinationState;
      return machine.value;
    }
  };
  return machine;
}

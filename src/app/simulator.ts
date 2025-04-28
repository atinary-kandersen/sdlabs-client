// import { createStateMachine } from '../lib/common/createStateMachine';
// import socket from './config/socket';
// import { updateLiveExperiment } from './state/actions';
// import { ExperimentState, LiveExperiment } from './state/store';

// const machine = createStateMachine<ExperimentState>('ready', {
//   ready: {
//     transitions: {
//       stop: {
//         target: 'stopped'
//       }
//     }
//   },
//   running: {
//     transitions: {
//       stop: {
//         target: 'stopped'
//       },
//       pause: {
//         target: 'paused'
//       }
//     }
//   },
//   stopped: {
//     transitions: {
//       start: {
//         target: 'running'
//       }
//     }
//   },
//   paused: {
//     transitions: {
//       start: {
//         target: 'running'
//       }
//     }
//   }
// });

// console.log('machine.value', machine.value);
// machine.transition('stop');
// console.log('machine.value', machine.value);
// machine.transition('start');
// console.log('machine.value', machine.value);
// machine.transition('pause');
// console.log('machine.value', machine.value);
// // useStore.subscribe((state, prevState) => {
// //   const liveExperiments = state.liveExperiments.forEach(exp => {
// //     if (exp.progress === 100) {}
// //   });
// // });

// socket.on('experimentUpdate', (experimentId: string, update: LiveExperiment) =>
//   updateLiveExperiment(experimentId, update)
// );

// export const startExperiment = (experimentId: string) => {
//   socket.emit('experimentUpdate', experimentId, {
//     state: 'running',
//     progress: 30
//   });

//   updateLiveExperiment(experimentId, { progress: 0, state: 'running' });
//   // Array.from({ length: 10 }).forEach((_, index) =>
//   //   setTimeout(
//   //     () =>
//   //       socket.emit('experimentUpdate', experimentId, {
//   //         progress: ++index * 10,
//   //         state: 'running'
//   //       }),
//   //     index * 1000
//   //   )
//   // );
// };

// export const resetExperiment = (experimentId: string) =>
//   updateLiveExperiment(experimentId, { progress: 0, state: 'ready' });

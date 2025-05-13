import React from 'react';

export type User = components['schemas']['User'];
export type UserType = components['schemas']['UserType'];
export type Experiment = components['schemas']['Experiment'];
export type ExperimentId = Experiment['id'];

export type ParameterType = 'numerical' | 'categorical';

export type ParameterId = string;

export type Parameter = {
  id: string;
  name: string;
  type: ParameterType;
  min?: number;
  max?: number;
};

const p: Parameter = { name: 'test', type: 'int' };

export type Dataset = {
  id: string;
  name: string;
  type: string;
  bytes: number;
  created: Date;
  addedBy: User;
};

export type FakeUser = {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
};

type CustomElementType = React.DetailedHTMLProps;

declare module 'react/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      'wa-icon': CustomElementType;
    }
  }
}

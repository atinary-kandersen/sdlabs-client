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

type CustomElementType = React.DetailedHTMLProps & React.DetailsHTMLAttributes;

declare module 'react/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      'wa-button': CustomElementType;
      'wa-badge': CustomElementType;
      'wa-spinner': CustomElementType;
      'wa-tag': CustomElementType;
      'wa-icon': CustomElementType;
      'wa-icon-button': CustomElementType;
      'wa-textarea': CustomElementType;
      'wa-relative-time': CustomElementType;
      'wa-input': CustomElementType;
      'wa-dropdown': CustomElementType;
      'wa-menu': CustomElementType;
      'wa-menu-item': CustomElementType;
      'wa-card': CustomElementType;
      'wa-avatar': CustomElementType;
      'wa-details': CustomElementType;
      'wa-select': CustomElementType;
      'wa-option': CustomElementType;
      'wa-switch': CustomElementType;
      'wa-tooltip': CustomElementType;
      'wa-progress-bar': CustomElementType;
      'wa-progress-ring': CustomElementType;
      'wa-divider': CustomElementType;
      'wa-tab-group': CustomElementType;
      'wa-tab': CustomElementType;
      'wa-tab-panel': CustomElementType;
      'wa-dialog': CustomElementType;
      'wa-format-bytes': CustomElementType;
      'wa-format-date': CustomElementType;
      'wa-checkbox': CustomElementType;
      'wa-button-group': CustomElementType;
      'wa-callout': CustomElementType;
      'wa-breadcrumb': CustomElementType;
      'wa-breadcrumb-item': CustomElementType;
    }
  }
}

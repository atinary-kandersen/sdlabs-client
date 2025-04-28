import React from 'react';

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
    }
  }
}

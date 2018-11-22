import React from 'react';
import Responsive from 'react-responsive';

export const Desktop = props => <Responsive {...props} minWidth={768} />;
export const Mobile = props => <Responsive {...props} maxWidth={767} />;

export const isDesktop = typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)').matches : false;
export const isMobile = typeof window !== 'undefined' ? window.matchMedia('(max-width: 767px)').matches : false;
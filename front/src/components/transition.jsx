import React from 'react';
import { CSSTransition } from 'react-transition-group';
import style from '../style.module.css'; // Importa tu archivo de estilos

const TransitionWrapper = ({ children, classNames, timeout }) => (
  <CSSTransition classNames={classNames} timeout={timeout}>
    {children}
  </CSSTransition>
);

export default TransitionWrapper;
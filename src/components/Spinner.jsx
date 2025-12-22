import React from 'react';
import './Spinner.css';

export default function Spinner({ size = 48 }) {
  const style = { width: size, height: size };
  return (
    <div className="sk-spinner" style={style} aria-hidden="true">
      <div className="sk-circle" />
    </div>
  );
}

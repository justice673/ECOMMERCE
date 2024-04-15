import React from 'react';
import './Banner.css';

export default function Banner({pageTitle,bgClass}) {
  return (
    <div className={`banner ${bgClass}`}>
        <h1>{pageTitle}</h1>
    </div>
  )
}

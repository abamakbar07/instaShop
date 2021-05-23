import React from 'react'
import './style.css'

export const ButtonPrimary = (props) => (
   <div className={`primary btn title ${props.className}`} onClick={props.onClick}>{props.text}</div>
)

export const ButtonSecondary = (props) => (
   <div className={`secondary btn title ${props.className}`} onClick={props.onClick}>{props.text}</div>
)

export const ButtonArrowPrimary = (props) => (
  <div className={`arrow primary btn title ${props.className}`} onClick={props.onClick}>
    <span>{props.text}</span>
  </div>
);

export const ButtonArrowSecondary = (props) => (
  <div className={`arrow secondary btn title ${props.className}`} onClick={props.onClick}>
    <span>{props.text}</span>
  </div>
);


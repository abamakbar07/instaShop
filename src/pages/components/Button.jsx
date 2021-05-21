import React from 'react'
import './style.css'

export const ButtonPrimary = (props) => (
   <div className={`primary btn title ${props.className}`}>{props.text}</div>
)

export const ButtonSecondary = (props) => (
   <div className={`secondary btn title ${props.className}`}>{props.text}</div>
)

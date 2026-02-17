'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import './Button.css'

const CommonButton = ({
  buttonText = "Click Here",
  route = "/",
  padding = "10px 28px",
  bgColor = "#ffffff",
  hoverBgColor = "#540b0e",
  fontSize = "15px",
  textColor = "#000000",
  hoverTextColor = "#ffffff"
}) => {

  const router = useRouter()

  return (
    <button
      onClick={() => router.push(route)}
      className="common-button"
      style={{
        padding: padding,
        backgroundColor: bgColor,
        fontSize: fontSize,
        '--hover-bg': hoverBgColor,
        '--text-color': textColor,
        '--hover-text-color': hoverTextColor
      }}
    >
      <span className="text">{buttonText}</span>
    </button>
  )
}

export default CommonButton;

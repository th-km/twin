import React from "react"
import tw from "twin.macro"
import { css } from "@emotion/core"

const Button = ({ children, primary, secondary, gradient, ...props }) => {
  return (
    <button
      {...props}
      css={[
        tw`px-3 py-2 text-base rounded-md bg-gray-500 text-white`,
        primary && tw`bg-blue-500`,
        secondary && tw`bg-green-500`,
        gradient &&
          css`
            background: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
          `,
      ]}
    >
      {children}
    </button>
  )
}

export default Button

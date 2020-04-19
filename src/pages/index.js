import React from "react"
import tw from "twin.macro"

import Button from "../components/button"

export default () => (
  <main tw="max-w-4xl mx-auto">
    <div tw="flex items-center justify-center h-screen">
      <div tw="grid grid-cols-4 gap-4">
        <Button>Click me</Button>
        <Button primary>Click me</Button>
        <Button secondary>Click me</Button>
        <Button gradient>Click me</Button>
      </div>
    </div>
  </main>
)

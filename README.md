# Gatsby with Twin

Best of both worlds Tailwind with Emotion 🤷‍♂️


## Quick start

1. Install dependencies `npm i twin.macro @emotion/core gatsby-plugin-emotion`
2. Create a `gatsby-browser.js` file and import tailwind's base styles
    ```js
    import "tailwindcss/dist/base.css"
    ```
3. Edit your `gatsby-config.js`
   ```js
     module.exports = {
      plugins: ["gatsby-plugin-emotion"]
    }
   ```
4. Run `gatsby develop`

## Examples

page/index.js

```js
import React from "react"
import tw from "twin.macro"

import Button from "../components/button"

export default () => {
  return (
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
}
```

components/button.js

```js
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
```

## Notes

An alternative version with plain CSS can be found [here](https://github.com/th-km/gatsby-tailwind).

Read more about Twin [here](https://github.com/ben-rogerson/twin.macro).

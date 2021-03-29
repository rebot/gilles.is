/** @jsx jsx */

import React from "react"
import {Helmet} from "react-helmet"
import { jsx, useColorMode } from "theme-ui"

const IndexPage = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <>
      <Helmet>
        <title>Gilles.is</title>
      </Helmet>
      <header>
        <h2>Gilles.is</h2>
        <hr/>
      </header>
      <nav>

      </nav>
      <main>
        <h1>Saying Hello</h1>
        <span>
          <a href="">#tag001</a>&nbsp;
          <a href="">#tag002</a>&nbsp;
          <a href="">#tag003</a>&nbsp;
          <a href="">#tag004</a>&nbsp;
          <a href="">#tag005</a>&nbsp;
        </span>
        <p>Hi, my name is Gilles. I'm comming from Belgium and work as a civil engineer. In my spare time, I like to hack some small project together. These project have always been related with programming. More recently I also started to play around with microcontrollers, smart home devices, etc.</p>
        <button
          onClick={(e) => {
            setColorMode(colorMode === 'default' ? 'dark' : 'default')
          }}>
          Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
        </button>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default IndexPage
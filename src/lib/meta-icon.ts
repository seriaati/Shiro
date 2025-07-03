import type { FC } from 'react'
import * as React from 'react'

import { PhSunBold } from '~/components/icons/appearance'
import {
  EmojiAngry,
  EmojiFlushed,
  EmojiFrownOpen,
  EmojiGrimace,
  EmojiGrinSquintTears,
  EmojiMeh,
  EmojiSadCry,
  EmojiSadTear,
  EmojiSmile,
  EmojiTired,
} from '~/components/icons/emoji'
import {
  BiCloudLightningRainFill,
  BiCloudRainFill,
  MdiCloud,
  MdiSnowflake,
  RiSunCloudyFill,
} from '~/components/icons/weather'

export const weather2icon = (weather: string) => {
  const map: Record<string, FC> = {
    晴: PhSunBold,
    多雲: RiSunCloudyFill,
    陰: MdiCloud,
    雪: MdiSnowflake,
    雨: BiCloudRainFill,
    雷雨: BiCloudLightningRainFill,
  }
  return React.createElement(map[weather] || PhSunBold)
}

export const mood2icon = (mood: string) => {
  const map: Record<string, FC> = {
    開心: EmojiSmile,
    傷心: EmojiSadTear,
    大哭: EmojiSadCry,
    生氣: EmojiAngry,
    痛苦: EmojiTired,
    悲哀: EmojiMeh,
    不快: EmojiMeh,
    激動: EmojiGrinSquintTears,
    擔心: EmojiFrownOpen,
    可怕: EmojiGrimace,
    可惡: EmojiAngry,
    絕望: EmojiFrownOpen,
    焦慮: EmojiFlushed,
  }
  return React.createElement(map[mood] || EmojiSmile)
}

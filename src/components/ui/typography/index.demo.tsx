import type { DocumentComponent, DocumentPageMeta } from 'storybook/typings'

import { EllipsisHorizontalTextWithTooltip } from './EllipsisWithTooltip'

export const EllipsisTextWithTooltipDemo: DocumentComponent = () => {
  return (
    <EllipsisHorizontalTextWithTooltip width="12rem">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
    </EllipsisHorizontalTextWithTooltip>
  )
}

EllipsisTextWithTooltipDemo.meta = {
  title: '文本溢出省略 + 提示',
  description: '如果文本溢出則省略，省略時伴隨 Tooltip 提示',
}

export const metadata: DocumentPageMeta = {
  title: '文本溢出',
  description: '一個簡單的處理文本溢出省略的組件',
}

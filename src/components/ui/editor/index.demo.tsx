import type { DocumentComponent } from 'storybook/typings'

import { WebAppProviders } from '~/providers/root'

import { MilkdownEditor } from './Milkdown'

// :::warning
// _here be dragons_
// :::

// :::banner {error}
// _here be dragons_
// :::

// :::gallery
// https://loremflickr.com/640/480/city?1
// https://loremflickr.com/640/480/city?2
// https://loremflickr.com/640/480/city?3
// ![](https://loremflickr.com/640/480/city?4 'Image')
// :::

export const EditorDemo: DocumentComponent = () => {
  return (
    <WebAppProviders>
      <div className="m-auto w-[60ch] border p-2">
        <MilkdownEditor
          initialMarkdown={`::iframe{src="https://saul-mirone.github.io"}
> 1111
> 2222


\`\`\`excalidraw
{"type":"excalidraw/clipboard","elements":[{"id":"PmE_-ljCxW_Xt7-aTwGCG","type":"rectangle","x":3201.9504923319187,"y":2568.8218349216327,"width":125.64409355058388,"height":45.82037362686515,"angle":0,"strokeColor":"#f08c00","backgroundColor":"transparent","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"roundness":{"type":3},"seed":159580388,"version":8,"versionNonce":108767588,"isDeleted":false,"boundElements":null,"updated":1706773637699,"link":null,"locked":false}],"files":{}}
\`\`\`


\`\`\`js
const a = 1
\`\`\`


\`\`\`mermaid
flowchart TD
    1([手動打 tag 發布一個 release]) -->
    2([CI 監視 release 的發布 開始構建和發布]) -->
    3([雲構建打包產物 zip 發布到 GitHub Release]) -- SSH 連接到服務器-->
    4([執行部署腳本]) -->
    5([下載構建產物解壓]) -->
    6([直接運行或使用 PM2 託管])
\`\`\`


## Alerts


> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

~~11~~

aa||aaa11||aaaa |||aaa|||

1111111111111112222222222 ~~22222~~ **a** aaaaaaaaaaaa..

:::grid[cols=3,gap=4]

Grid 1

Grid 2

Grid 3

https://loremflickr.com/640/480/city?1

https://loremflickr.com/640/480/city?2

https://loremflickr.com/640/480/city?3

![](https://loremflickr.com/640/480/city?4 'Image')

![](https://loremflickr.com/640/480/city?4 'Image')

![](https://loremflickr.com/640/480/city?4 'Image')


`}
        />
      </div>
    </WebAppProviders>
  )
}

EditorDemo.meta = {
  title: 'Editor',
}

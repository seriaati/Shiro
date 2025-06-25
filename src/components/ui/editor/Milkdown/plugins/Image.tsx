import type { MilkdownPlugin } from '@milkdown/ctx'
import { imageSchema } from '@milkdown/preset-commonmark'
import { $view } from '@milkdown/utils'
import { useNodeViewContext } from '@prosemirror-adapter/react'
import type { FC } from 'react'
import { useCallback, useRef, useState } from 'react'

import { useIsMobile } from '~/atoms/hooks'
import { MotionButtonBase, StyledButton } from '~/components/ui/button'
import { FloatPopover } from '~/components/ui/float-popover'
import { Form, FormInput } from '~/components/ui/form'
import { FixedZoomedImage } from '~/components/ui/image'
import { useCurrentModal, useModalStack } from '~/components/ui/modal'
import { getToken } from '~/lib/cookie'
import { toast } from '~/lib/toast'

import type { PluginCtx } from './types'

const base64ToFile = (base64: string) => {
  const arr = base64.split(',')
  const mime = arr[0].match(/:(.*?);/)![1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], 'image.png', { type: mime })
}
const Image = () => {
  const { node, setAttrs } = useNodeViewContext()

  const { src, alt, title } = node.attrs

  const isMobile = useIsMobile()
  const isOnline = src.startsWith('http')
  const handleUploadImage = () => {
    if (src.startsWith('http')) return
    const formData = new FormData()
    formData.append('file', base64ToFile(src))
    formData.append('token', getToken()!)

    fetch('/api/s3', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.url) {
          toast.success('上傳成功')
          setAttrs({ src: data.url })
        } else {
          toast.error('上傳失敗')
        }
      })
      .catch((error: any) => {
        console.error(error)
        toast.error(`上傳失敗${error?.message}`)
      })
  }

  const modal = useModalStack()
  return (
    <div className="center my-4 flex">
      <div className="group relative inline-block">
        <FixedZoomedImage
          className="max-h-[80vh]"
          src={src}
          containerWidth={isMobile ? 450 : 600}
        />

        <div className="absolute bottom-1 left-1 z-10 opacity-0 duration-200 group-hover:opacity-100">
          <StyledButton
            onClick={() => {
              modal.present({
                title: '編輯圖片',
                content: () => (
                  <ImageEdit
                    onSubmit={(state) => {
                      setAttrs(state)
                    }}
                    src={src}
                    alt={alt}
                    title={title}
                  />
                ),
              })
            }}
            variant="secondary"
            className="center box-content flex size-6 rounded-full p-2"
          >
            <i className="i-mingcute-edit-line text-[16px]" />
          </StyledButton>
        </div>
        {!isOnline && (
          <FloatPopover
            type="tooltip"
            placement="right"
            triggerElement={
              <MotionButtonBase
                onClick={handleUploadImage}
                className="center absolute bottom-1 right-1 box-content flex rounded-full bg-base-100 text-red-500"
              >
                <i className="i-mingcute-warning-line text-[24px]" />
              </MotionButtonBase>
            }
          >
            此圖片是一個內嵌圖片，還沒有上傳到服務器，點擊上傳到服務器（需要配置
            S3）
          </FloatPopover>
        )}
      </div>
    </div>
  )
}

export const ImagePlugin: (pluginCtx: PluginCtx) => MilkdownPlugin[] = ({
  nodeViewFactory,
}) => [
  $view(imageSchema.node, () =>
    nodeViewFactory({
      component: Image,
    }),
  ),
]

interface ImageEditData {
  src: string
  alt?: string
  title?: string
}
interface ImageEditProps extends ImageEditData {
  onSubmit: (data: ImageEditData) => void
}
const ImageEdit: FC<ImageEditProps> = ({ onSubmit, src, alt, title }) => {
  const currentModel = useCurrentModal()
  const inputs = useRef([
    {
      name: 'src',
      placeholder: 'https://',
      rules: [
        {
          validator: (value: string) => value.startsWith('http'),
          message: '請輸入正確的圖片鏈接 https://',
        },
      ],
    },
    {
      name: 'alt',
      placeholder: '圖片信息',
      rules: [
        {
          validator: (value: string) => value.length <= 200,
          message: '圖片信息不能超过200個字符',
        },
      ],
    },
    {
      name: 'title',
      placeholder: '圖片標題',
      rules: [
        {
          validator: (value: string) => value.length <= 50,
          message: '圖片標題不能超过50個字符',
        },
      ],
    },
  ]).current

  const handleSubmit = () => {
    onSubmit(state)
    currentModel.dismiss()
  }

  const [state, setState] = useState({
    src,
    alt: alt || '',
    title: title || '',
  } as ImageEditData)

  const setValue = useCallback((key: keyof typeof state, value: string) => {
    setState((prevState) => ({ ...prevState, [key]: value }))
  }, [])
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.name as keyof typeof state, e.target.value)
  }, [])

  return (
    <Form className="w-[300px] space-y-4 text-center" onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <FormInput
          key={input.name}
          value={(state as any)[input.name]}
          onChange={handleChange}
          {...input}
        />
      ))}

      <StyledButton variant="primary" type="submit">
        好
      </StyledButton>
    </Form>
  )
}

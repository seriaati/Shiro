import { useQuery } from '@tanstack/react-query'

import { MotionButtonBase } from '~/components/ui/button'
import { toast } from '~/lib/toast'

export const Hitokoto = () => {
  const {
    data: hitokoto,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['hitokoto'],
    queryFn: () =>
      fetchHitokoto([
        SentenceType.動畫,
        SentenceType.原創,
        SentenceType.哲學,
        SentenceType.文學,
      ]),
    refetchInterval: 1000 * 60 * 60 * 24,
    staleTime: Infinity,
    select(data) {
      const postfix = Object.values({
        from: data.from,
        from_who: data.from_who,
        creator: data.creator,
      }).find(Boolean)
      if (!data.hitokoto) {
        return '沒有獲取到句子信息'
      } else {
        return data.hitokoto + (postfix ? ` —— ${postfix}` : '')
      }
    },
  })

  if (!hitokoto) return null
  if (isLoading) return <div className="loading loading-dots" />
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="leading-normal">{hitokoto}</span>
      <div className="ml-0 flex items-center space-x-2">
        <MotionButtonBase onClick={() => refetch()}>
          <i className="i-mingcute-refresh-2-line" />
        </MotionButtonBase>

        <MotionButtonBase
          onClick={() => {
            navigator.clipboard.writeText(hitokoto)
            toast.success('已複製')
            toast.info(hitokoto)
          }}
        >
          <i className="i-mingcute-copy-line" />
        </MotionButtonBase>
      </div>
    </div>
  )
}

export enum SentenceType {
  '動畫' = 'a',
  '漫畫' = 'b',
  '遊戲' = 'c',
  '文學' = 'd',
  '原創' = 'e',
  '來自網絡' = 'f',
  '其他' = 'g',
  '影視' = 'h',
  '詩詞' = 'i',
  '網易雲' = 'j',
  '哲學' = 'k',
  '抖機靈' = 'l',
}
export const fetchHitokoto = async (
  type: SentenceType[] | SentenceType = SentenceType.文學,
) => {
  const json = await fetch(
    `https://v1.hitokoto.cn/${
      Array.isArray(type)
        ? `?${type.map((t) => `c=${t}`).join('&')}`
        : `?c=${type}`
    }`,
  )
  const data = (await (json.json() as unknown)) as {
    id: number
    hitokoto: string
    type: string
    from: string
    from_who: string
    creator: string
    creator_uid: number
    reviewer: number
    uuid: string
    created_at: string
  }

  return data
}

'use client'

import dayjs from 'dayjs'
import type { FC } from 'react'

import { Divider } from '~/components/ui/divider'
import { toast } from '~/lib/toast'
import { useCurrentPostDataSelector } from '~/providers/post/CurrentPostDataProvider'
import { useAggregationSelector } from '~/providers/root/aggregation-data-provider'

export const PostCopyright: FC = () => {
  const name = useAggregationSelector((data) => data.user.name)

  const webUrl = useAggregationSelector((data) => data.url.webUrl)
  const data = useCurrentPostDataSelector(
    (data) => {
      if (!webUrl) return null
      if (!data) return null
      return {
        title: data.title,
        link: `${webUrl}/posts/${data.category.slug}/${data.slug}`,
        date: data.modified,
      }
    },
    [webUrl],
  )
  if (!data) return null
  const { title, link, date } = data
  return (
    <section
      className="mt-4 text-sm leading-loose text-gray-600 dark:text-neutral-400"
      id="copyright"
    >
      <p>文章標題：{title}</p>
      <p>文章作者：{name}</p>
      <p>
        文章鏈接：<span>{link}</span>{' '}
        <a
          onClick={() => {
            navigator.clipboard.writeText(link)
            toast.success('已複製文章鏈接')
          }}
          data-hide-print
          className="cursor-pointer select-none"
        >
          [複製]
        </a>
      </p>
      <p>
        最後修改時間:{' '}
        {date ? dayjs(date).format('YYYY 年 MM 月 DD 日 H:mm') : '暂没有修改过'}
      </p>
      <Divider />
      <div>
        <p>
          商業轉載請聯繫站長獲得授權，非商業轉載請註明本文出處及文章鏈接，您可以自由地在任何媒體以任何形式複製和分發作品，也可以修改和創作，但是分發衍生作品時必須採用相同的許可協議。
          <br />
          本文採用
          <a
            className="shiro-link--underline"
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          >
            CC BY-NC-SA 4.0 - 非商業性使用 - 相同方式共享 4.0 國際
          </a>
          進行許可。
        </p>
      </div>
    </section>
  )
}

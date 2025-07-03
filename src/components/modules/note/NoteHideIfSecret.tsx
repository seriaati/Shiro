'use client'

import dayjs from 'dayjs'
import { useEffect, useMemo } from 'react'

import { useIsLogged } from '~/atoms/hooks'
import { toast } from '~/lib/toast'
import { useCurrentNoteDataSelector } from '~/providers/note/CurrentNoteDataProvider'

export const NoteHideIfSecret: Component = ({ children }) => {
  const noteSecret = useCurrentNoteDataSelector((data) => data?.data.publicAt)

  const noteId = useCurrentNoteDataSelector((data) => data?.data.nid)
  const secretDate = useMemo(() => new Date(noteSecret!), [noteSecret])
  const isSecret = noteSecret ? dayjs(noteSecret).isAfter(new Date()) : false

  const isLogged = useIsLogged()

  useEffect(() => {
    if (!noteId) return
    let timer: any
    const timeout = +secretDate - Date.now()
    // https://stackoverflow.com/questions/3468607/why-does-settimeout-break-for-large-millisecond-delay-values
    const MAX_TIMEOUT = (2 ^ 31) - 1
    if (isSecret && timeout && timeout < MAX_TIMEOUT) {
      timer = setTimeout(() => {
        toast.info('刷新以查看解鎖的文章', { autoClose: false })
      }, timeout)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [isSecret, secretDate, noteId])

  if (!noteId) return null

  if (isSecret) {
    const dateFormat = noteSecret
      ? Intl.DateTimeFormat('zh-cn', {
          hour12: false,
          hour: 'numeric',
          minute: 'numeric',
          year: 'numeric',
          day: 'numeric',
          month: 'long',
        }).format(new Date(noteSecret))
      : ''

    if (isLogged) {
      return (
        <>
          <div className="my-6 text-center">
            <p>這是一篇非公開的文章。(將在 {dateFormat} 解鎖)</p>
            <p>現在處於登錄狀態，預覽模式：</p>
          </div>
          {children}
        </>
      )
    }
    return (
      <div className="my-6 text-center">
        這篇文章暫時沒有公開呢，將會在 {dateFormat} 解鎖，再等等哦
      </div>
    )
  }
  return children
}

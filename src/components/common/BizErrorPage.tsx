import type { FC } from 'react'

export const BizErrorPage: FC<{
  bizMessage: string
  status: number
}> = ({ bizMessage, status }) => {
  return (
    <div className="center flex min-h-[calc(100vh-10rem)] flex-col">
      <h2 className="mb-5 flex flex-col gap-2 text-center">
        <p>數據接口請求出現錯誤</p>
        <p>
          HTTP Status: <strong>{status}</strong>
        </p>
        <p>
          錯誤信息：<strong>{bizMessage}</strong>
        </p>
      </h2>
    </div>
  )
}

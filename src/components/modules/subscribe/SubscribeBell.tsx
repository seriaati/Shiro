'use client'

import type { SubscribeTypeToBitMap } from '@mx-space/api-client'
import type { FC } from 'react'

import { MotionButtonBase } from '~/components/ui/button'

import { useIsEnableSubscribe, usePresentSubscribeModal } from './hooks'

type SubscribeType = keyof typeof SubscribeTypeToBitMap
interface SubscribeBellProps {
  defaultType: SubscribeType[] | SubscribeType
}
export const SubscribeBell: FC<SubscribeBellProps> = (props) => {
  const { defaultType } = props
  const canSubscribe = useIsEnableSubscribe()
  const { present } = usePresentSubscribeModal(
    ([] as SubscribeType[]).concat(defaultType),
  )

  if (!canSubscribe) {
    return null
  }

  return (
    <div
      className="mb-6 flex flex-col items-center justify-center p-4"
      data-hide-print
    >
      <p className="text-gray-1 leading-8 opacity-80">
        站點已開啟郵件訂閱，點亮小鈴鐺，訂閱最新文章哦~
      </p>
      <MotionButtonBase onClick={present}>
        <span className="sr-only">訂閱</span>
        <i className="icon-[material-symbols--notifications-active-outline] mt-4 scale-150 text-3xl text-accent opacity-50 transition-opacity hover:opacity-100" />
      </MotionButtonBase>
    </div>
  )
}

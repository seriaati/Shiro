import type { CommentModel } from '@mx-space/api-client'
import { CommentState } from '@mx-space/api-client'
import { useContext } from 'react'

import { MotionButtonBase } from '~/components/ui/button'
import { useModalStack } from '~/components/ui/modal'
import {
  useDeleteCommentMutation,
  useUpdateCommentStateMutation,
} from '~/queries/hooks/comment'

import { DeleteConfirmButton } from '../../shared/DeleteConfirmButton'
import {
  CommentStateContext,
  useSetCommentSelectionKeys,
} from './CommentContext'
import { ReplyModal } from './ReplyModal'

export const CommentAction = (props: { comment: CommentModel }) => {
  const currentState = useContext(CommentStateContext)

  const { id, author } = props.comment

  const setSelectionKeys = useSetCommentSelectionKeys()

  const omitCurrentId = () => {
    setSelectionKeys((keys) => {
      const set = new Set(keys)
      set.delete(id)
      return set
    })
  }

  const { present } = useModalStack()

  const { mutateAsync: updateCommentState } = useUpdateCommentStateMutation({
    onSuccess: () => {
      omitCurrentId()
    },
  })

  const { mutateAsync: deleteComment } = useDeleteCommentMutation({
    onSuccess: () => {
      omitCurrentId()
    },
  })

  return (
    <div className="mt-2 flex items-center justify-end gap-4 lg:justify-start">
      {currentState === CommentState.Unread && (
        <MotionButtonBase
          className="text-accent"
          onClick={() => {
            updateCommentState({ id, state: CommentState.Read })
          }}
        >
          已讀
        </MotionButtonBase>
      )}
      <MotionButtonBase
        className="text-primary"
        onClick={() => {
          present({
            title: `回復 ${author}`,
            content: () => <ReplyModal {...props} />,
            clickOutsideToDismiss: false,
          })
        }}
      >
        回復
      </MotionButtonBase>
      {currentState === CommentState.Unread && (
        <MotionButtonBase
          className="hover:text-orange-500"
          onClick={() => {
            updateCommentState({ id, state: CommentState.Junk })
          }}
        >
          標記垃圾
        </MotionButtonBase>
      )}
      {currentState !== CommentState.Unread && (
        <DeleteConfirmButton
          onDelete={async () => {
            deleteComment({
              id,
            })
          }}
        />
      )}
    </div>
  )
}

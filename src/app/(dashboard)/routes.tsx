import type { ReactNode } from 'react'

import { IconParkOutlineTopic } from '~/components/icons/ParkOutlineTopicIcon'

export type DashboardRoute = {
  title: string
  icon: ReactNode
  redirect?: string

  parent?: DashboardRoute
  children?: DashboardRoute[]

  path: string
}
const Dashboard = 'Dashboard'
export const dashboardRoutes = {
  title: Dashboard,
  icon: 'dashboard',
  redirect: '/dashboard',
  path: '/dashboard',

  children: [
    {
      title: '儀錶盤',
      icon: <i className="icon-[mingcute--dashboard-line]" />,

      path: '',
    },
    {
      title: '文稿',
      icon: <i className="icon-[mingcute--code-line]" />,
      redirect: '/dashboard/posts/list',
      path: '/posts',
      children: [
        {
          title: '列表',
          icon: <i className="icon-[mingcute--table-2-line]" />,
          path: '/list',
        },
        {
          title: '編輯',
          icon: <i className="icon-[mingcute--pen-line]" />,
          path: '/edit',
        },
        {
          title: '分類/標籤',
          icon: <i className="icon-[mingcute--pen-line]" />,
          path: '/category',
        },
      ],
    },
    {
      title: '手記',
      icon: <i className="icon-[mingcute--quill-pen-line]" />,
      redirect: '/dashboard/notes/list',
      path: '/notes',
      children: [
        {
          title: '列表',
          icon: <i className="icon-[mingcute--table-2-line]" />,
          path: '/list',
        },
        {
          title: '編輯',
          icon: <i className="icon-[mingcute--pen-line]" />,
          path: '/edit',
        },
        {
          title: '話題',
          icon: <IconParkOutlineTopic />,
          path: '/topics',
        },
      ],
    },
    {
      title: '評論',
      icon: <i className="icon-[mingcute--comment-line]" />,
      path: '/comments',
    },
    {
      title: '頁面',
      icon: <i className="icon-[mingcute--file-line]" />,
      path: '/pages',
    },
    {
      title: '完整功能與其他設置',
      icon: <i className="icon-[mingcute--settings-1-line]" />,
      path: '/vue',
    },
  ],
} as DashboardRoute

const dashboardRoute2ObjectMap = new Map<string, DashboardRoute>()

function traverseDashboardRoute(route: DashboardRoute, parentPath?: string) {
  const jointPath = parent ? `${parentPath || ''}${route.path}` : route.path
  dashboardRoute2ObjectMap.set(jointPath, route)
  if (route.children) {
    route.children.forEach((child) => {
      traverseDashboardRoute(child, jointPath)
    })
  }
}

traverseDashboardRoute(dashboardRoutes)

export function useParentRouteObject(path: string) {
  return dashboardRoute2ObjectMap.get(path.split('/').slice(0, -1).join('/'))
}

export { dashboardRoute2ObjectMap }

function attachRouteParent(route: DashboardRoute, parent?: DashboardRoute) {
  if (parent && parent.title !== Dashboard) {
    route.parent = parent
  }
  if (route.children) {
    route.children.forEach((child) => {
      attachRouteParent(child, route)
    })
  }
}
attachRouteParent(dashboardRoutes)

export const flattedRoutes = [...dashboardRoute2ObjectMap.entries()].filter(
  ([k, v]) => {
    if (v.redirect) return false
    return true
  },
) as [string, DashboardRoute][]

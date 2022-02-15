import { useStore } from "@/store";

export default function usePermission(pageName: string, crud: string) {
  const store = useStore()
  const permission = `system:${pageName}:${crud}`
  const { permissions } = store.state.login

  /**
   * every()是对数组中每一项运行给定函数，如果该函数对每一项返回true,则返回true。
   * some()是对数组中每一项运行给定函数，如果该函数对任一项返回true，则返回true。
   *
   * some一直在找符合条件的值，一旦找到，则不会继续迭代下去。
   * every从迭代开始，一旦有一个不符合条件，则不会继续迭代下去。
   */
  return permissions.some((item) => item === permission)
}

import { Ref, ref } from "vue"

import PageContent from "@/components/page-content"

export default function usePageSearch(): [Ref, () => void, (queryInfo: any) => void] {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleResetClick = () => {
    pageContentRef.value?.getListData()
  }
  const handleSearchClick = (queryInfo: any) => {
    pageContentRef.value?.getListData(queryInfo)
  }

  return [pageContentRef, handleResetClick, handleSearchClick]
}

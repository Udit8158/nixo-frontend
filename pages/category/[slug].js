import { useRouter } from 'next/router'
import React from 'react'

const CategoryPage = () => {
    const router = useRouter()
    const {slug} = router.query
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  )
}

export default CategoryPage

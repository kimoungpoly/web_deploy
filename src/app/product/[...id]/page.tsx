import React from 'react'
export type ParamProps = {
    id: string | number
}
const page: React.FC<{params: ParamProps}> = ({params})=> {
  const id = params.id;
  return (
    <div>
      Detail page {id}
    </div>
  )
}

export default page
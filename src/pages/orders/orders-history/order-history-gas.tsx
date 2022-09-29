import React from 'react'
import Pagination from '../../../components/pagination/pagination'

function OrderHistoryGas() {
  return (
    <div className="card-body p-0">

      <Pagination ItemsComponent={OrderHistoryGas} />
    </div>
  )
}

export default OrderHistoryGas
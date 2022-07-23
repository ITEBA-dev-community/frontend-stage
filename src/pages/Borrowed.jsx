import React from 'react'
import BorrowedCard from '../components/Borrowed/BorrowedCard'
import DataMock from '../components/mockData'
import PageHeader from '../components/PageHeader'

function Borrowed() {
  return (
    <>
        <PageHeader label={"Sedang Dipinjam"} previousUrl={'/'} />
        {DataMock.borrowing.map((item) => {
            return (
              <BorrowedCard key={item.id} thumbnail={item.thumbnail} title={item.title} deadline={item.deadline} />  
            )
        })
        }
        
    </>
  )
}

export default Borrowed
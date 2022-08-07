import React from 'react'
import HistoryCard from '../components/HistoryCard'
import PageHeader from '../components/PageHeader'
import DataMock from '../components/mockData'

function LoanHistory() {
  return (
    <>
        <PageHeader label={"Riwayat Pinjam"} previousUrl={'/account'} />
        {/* Pass API data to history card */}
        {DataMock.history.map((data, index) =>(
        <HistoryCard key={index} thumbnail={data.thumbnail} title={data.title} author={data.author} history={data.history} reviewUrl={data.url} />
        ))}
    </>
  )
}

export default LoanHistory
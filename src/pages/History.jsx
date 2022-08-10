import React from 'react'
import HistoryCard from '../components/HistoryCard'
import DataMock from '../components/mockData'
import TopNav from '../components/TopNav'

function History() {
  return (
    <>
    <TopNav label={"History Book"} />
    {/* Pass API data to history card */}
    {DataMock.history.map((data, index) =>(
      <HistoryCard key={index} thumbnail={data.thumbnail} title={data.title} author={data.author} history={data.history} reviewUrl={data.url} />
    ))}
    </>
  )
}

export default History;
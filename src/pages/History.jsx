import React from 'react'
import HistoryCard from '../components/History/HistoryCard'
import mockHistory from '../components/History/mockHistory'

function History() {
  return (
    <>
    {/* Pass API data to history card */}
    {mockHistory.length > 0 && mockHistory.map((data, index) =>(
      <HistoryCard key={index} thumbnail={data.thumbnail} title={data.title} author={data.author} history={data.history} reviewUrl={data.url} />
    ))}
    </>
  )
}

export default History
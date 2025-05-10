import React from 'react'
import GridLoader from 'react-spinners/GridLoader'
const Spinner = ({loading}) => {
    const override = {
      display: "block",
      margin: "100px auto",
    }
  return (
    <GridLoader
    color="#36d7b7"
    loading={loading}
    cssOverride={override}
    size={15}
    />
  )
}

export default Spinner
import React from "react"

const SequenceItem = ({ data }) => (
  <div className="sequence mb-4">
    <img src={data.icon} alt="sequence icon" className="sequence-icon" />
    <p className="text-white">{data.text}</p>
  </div>
)

export default SequenceItem

import Agent from '@/components/Agent'
import React from 'react'

const page = () => {
  return (
    <>
    <h1>Interview Generation</h1>
    <Agent userName={"You"} userId="user1" type="generate" />
    </>
  )
}

export default page

import React, {useState} from 'react'

export default function Register () {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  return <form>
    <input value={name} />
    <input value={password} />
  </form>
}
import React, { createContext, ReactNode, useState } from 'react'
export interface ITransactions {
  amount: number
  id: number
  sender?: {
    name: string
    email: string
  }
  receiver?: {
    name: string
    email: string
  }
  logs: {
    createdAt: string
  }[]
}

export interface IUserData {
  password: string
  name: string
  email: string
  balance: string
  receivedTransactions?: ITransactions
  sentTransactions?: ITransactions
}

interface IAuthContextProps {
  userData: IUserData
  setUserData: React.Dispatch<React.SetStateAction<IUserData>>
  authorized: boolean
  setAuthorized: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = createContext<IAuthContextProps>({
  userData: {
    name: '',
    email: '',
    balance: '',
    password: '',
  },
  setUserData: () => {},
  authorized: false,
  setAuthorized: () => {},
})

const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userData, setUserData] = useState<IUserData>({
    name: '',
    email: '',
    balance: '',
    password: '',
  })
  const [authorized, setAuthorized] = useState(false)

  return (
    <AuthContext.Provider
      value={{ userData, setUserData, authorized, setAuthorized }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider

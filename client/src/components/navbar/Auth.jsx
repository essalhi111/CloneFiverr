import { React , createContext , useState, useContext} from 'react'

// Auth => Authentication  

const AuthContext = createContext(null) 

export const AuthProvider = ({children}) => {

    const [user1 , setUser] = useState(null)

    const logina = (user1)=>{
        setUser(user1)
    }
    const logout = ()=>{
        setUser(null)
    }

  return (
        <AuthContext.Provider value={{user1 , logina , logout}}>
            {children}
        </AuthContext.Provider>
  )
}
export const useAuth = ()=>{
    return useContext(AuthContext)
} 
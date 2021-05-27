import React, {createContext, useState} from 'react'
// import { children } from 'react'

// 2. initialize context

const initCompaniesContext = {
   companies: []  
}
// 3. create context

export const CompaniesContext = createContext(initCompaniesContext)

// 4. make provider => value / children

export const CompaniesContextProvider = ({ children }) => {
   const [companies, setCompanies] = useState(
      initCompaniesContext.companies);
   return (
      <CompaniesContextProvider value={companies, setCompanies}>
         {children}
      </CompaniesContextProvider>
   )
}
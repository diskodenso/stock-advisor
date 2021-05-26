import React, {createContext, useState} from 'react'
import { Children } from 'react'

// 2. initialize context

const initCompaniesContext = {
   companies: []  
}
// 3. create context

const CompaniesContext = createContext(initCompaniesContext)

// 4. make provider => value / children

export const CompaniesContextProvider = ({ Children }) => {
   const [companies, setCompanies] = useState(
      initCompaniesContext.companies);
   return (
      <CompaniesContextProvider value={companies, setCompanies}>
         {Children}
      </CompaniesContextProvider>
   )
}
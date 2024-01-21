import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

import SearchPng from './assets/search.svg'

export const Home = () => {
  return (
    <div className="h-s h-[lvh - 64px] mt-[300px] flex items-center justify-evenly gap-4 max-sm:mt-[100px] max-sm:flex-col">
      <div className="flex w-[550px] flex-col gap-5 max-sm:w-auto">
        <div className="flex flex-col gap-5 ">
          <small className="text-xm font-bold text-teal-600">Bem-vindo!</small>
          <h1 className="text-xl font-bold max-sm:text-lg">
            Explore os resultados do INSE 2021 aqui!
          </h1>
          <p className="text-muted-foreground">
            Descubra insights valiosos e análises abrangentes ao acessar os
            resultados do Índice Nacional de Satisfação do Estudante (INSE) de
            2021.
          </p>
        </div>
        <Link to="/dashboard">
          <Button className="mt-6 self-start bg-teal-700 dark:bg-teal-500">
            Acessar o dashboard
          </Button>
        </Link>
      </div>
      <div>
        <img
          src={SearchPng}
          alt="Ícone de busca"
          className="w-[340px] max-sm:w-[300px]"
        />
      </div>
    </div>
  )
}

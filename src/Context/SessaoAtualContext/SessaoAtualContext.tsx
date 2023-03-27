import { createContext, ReactNode } from "react";

interface CurrentSession {
    user: string;
    children: React.ReactNode;
}

export const SessaoAtualContext = createContext({});

export const SessaoAtualProvider = ({ children }: CurrentSession) => {

    const usuarioAtual = (usuario: string) => {

    }

    return (

        <SessaoAtualContext.Provider value={{ usuarioAtual }}>
            {children}
        </SessaoAtualContext.Provider>

    )
}
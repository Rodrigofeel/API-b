import { useState } from "react";
import { PesquisarInput } from "./components/pesquisarInput";
import { Botao } from "./components/pesquisarBotao";
import { TabelaPais } from "./components/tabelaPais";
import type { Pais } from "./types/pais";
import { api } from "./services/api";
import axios from "axios";

export default function App() {
  const [buscar, setBuscar] = useState("");
  const [pais, setPais] = useState<Pais | null>(null);
  const [erroBusca, setErroBusca] = useState(false);

  async function buscarPaises() {
    if (!buscar.trim()) return;

    setErroBusca(false);
    setPais(null);
    try {
      const response = await api.get<Pais[]>(
        `/name/${buscar}?fields=name,capital,region,population,languages,flags`,
      );
      //guarda somente o primeiro país [0]
      if (response.data.length > 0) {
        setPais(response.data[0]);
      } else {
        setErroBusca(true);
      }
    } catch (erro) {
      setErroBusca(true);
      if (axios.isAxiosError(erro)) {
        console.error("Erro da API:", erro.response?.data);
      }
      setPais(null);
    }
  }

  return (
    <div className="min-h-screen flex flex-col -pt-60 items-center justify-center">
      <h1 className="text-4xl font-bold mb-12 text-[#fff8f8]">Buscar País</h1>

      <div className="flex gap-5 mb-10">
        <PesquisarInput
          value={buscar}
          onChange={setBuscar}
          onEnter={buscarPaises}
          className="rounded-lg  px-4 py-2 border text-white border-gray-300 focus:ring-2 focus:outline-none"
        />
        <Botao
          onClick={buscarPaises}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Pesquisar
        </Botao>
      </div>
      <div className="w-full max-w-2xl px-6 self-center sm:self-auto sm:ml-20"></div>
      {erroBusca && !pais && (
        <p className="text-[#f11818]">País não encontrado.</p>
      )}

      {pais && (
        <div className="text-white">
          <TabelaPais pais={pais} />
        </div>
      )}
    </div>
  );
}

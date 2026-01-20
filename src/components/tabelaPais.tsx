import type { Pais } from "../types/pais";

interface TabelaPaises {
  pais: Pais;
}

export function TabelaPais({ pais }: TabelaPaises) {
  return (
    <div>
      <h2>{pais.name.common}</h2>
      <p>Capital: {pais.capital?.join(", ")}</p>
      <p>Região: {pais.region}</p>
      <p>População: {pais.population.toLocaleString("pt-BR")}</p>
      <p>
        Idiomas:{" "}
        {pais.languages ? Object.values(pais.languages).join(", ") : "N/A"}
      </p>
      <img src={pais.flags?.svg} alt={`${pais.name.common}`} width="100" />
    </div>
  );
}

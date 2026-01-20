# Consumindo API Rest countries

essa aplicação esta consumindo a API https://restcountries.com/

## Funcionalidades

- Trazer informaçoes sobre um determinado país (Capital, Região, População, Lingua e Bandeira)

## Stack utilizada

- Typescript
- Vite
- Axios
- Tailwild

## Arquitetura do projeto

src/

    components/   (Contém os conponents input, botao e tabela)
    services/     (Contém a configuração do Axios)
    types/        (Contém a interface definindo o formato dos dados)
    App.tsx       (Aqui está a lógica de negócio e a renderização)

Essa separação foi pensando em organização, manutenção e reutilização.

## Resumo da contruçao do projeto

- Todos components tem interfaces próprias com tipagem garantindo contrados definidos e mantendo as boas práticas
  ex:

```
interface BotaoPai {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}
```

- Regra de negócio bem estruturada com filtragem, seleção, estados, validação e tratamento de erro.

```
async function buscarPaises() {
    if (!buscar.trim()) return;

    setErroBusca(false);
    setPais(null);
    try {
      const response = await api.get<Pais[]>(
        `/name/${buscar}?fields=name,capital,region,population,languages,flags`,
      );
      //guarda somente o primeiro pais [0]
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

```

## Deploy

### Como fazer deploy:

- **Faça fork ou clone do repositório**

```bash
git clone
```

## Referência

- [Docs REST Coutries](https://restcountries.com/)
- [Docs Axios](https://axios-http.com/ptbr/docs/intro)
- [Tipar a prop 'onClick'](https://stackoverflow.com/questions/68117023/react-typescript-passing-onclick-as-a-prop)
- [Video aula consumindo API com Axios](https://www.youtube.com/watch?v=aspjB87OWnw)

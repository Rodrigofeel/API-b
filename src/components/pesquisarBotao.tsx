// define os tipps das props do componente
interface BotaoPai {
  children: React.ReactNode; //para permitir passar texto ou outros elementos filhos
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; //recebe uma funçao de evento de clique do mouse em um botao
  className?: string;
  type?: "button" | "submit" | "reset";
}

export function Botao({
  children,
  onClick,
  type = "button",
  className = "",
}: BotaoPai) {
  return (
    <button onClick={onClick} className={className} type={type}>
      {children}
    </button>
  );
}

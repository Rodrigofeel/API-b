interface Pesquisar {
  value: string;
  onChange: (texto: string) => void;
  onEnter?: () => void;
  placeholder?: string;
  className?: string;
}

export function PesquisarInput({
  value,
  onEnter,
  onChange,
  placeholder = "Digite o nome do país",
  className = "",
}: Pesquisar) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onEnter) {
      onEnter(); //executa quando apertar enter
    }
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)} //define o valor atual da propriedade OnChange
      onKeyDown={handleKeyDown}
      className={className}
    />
  );
}

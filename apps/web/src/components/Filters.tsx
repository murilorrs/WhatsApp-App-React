// Componente que vai criar o Design dos filtros de grupos e mensagens não lidas
import React from 'react';
// Componentes da biblioteca ShadCn
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'; 
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
// Ícone de funil da lib React Icons
import { IoMdFunnel } from 'react-icons/io';

// Definição das propriedades vão ser passadas pelo componente que usar o filtro
interface FiltersProps {
  filterGroup: boolean;
  filterUnread: boolean;
  onToggleGroup: () => void;
  onToggleUnread: () => void;
  type: number; // Tipo pra definir qual será o tipo de filtro (funil ou botões)
}

const Filters: React.FC<FiltersProps> = ({ filterGroup, filterUnread, onToggleGroup, onToggleUnread, type }) => {
  return (
    // Checa o tipo do filtro, o 1 é para o funíl
    type === 1 ? (
      <Popover>
        <PopoverTrigger>
          <button className="btn">
            <IoMdFunnel className="text-2xl text-white" /> {/* Icone de funil*/}
          </button>
        </PopoverTrigger>

        {/* Conteúdo quando abre o funíl */}
        <PopoverContent className="bg-customLighterGreen border-none p-4">
          <div className="space-y-2">
            <h2 className="text-white mb-2 font-bold">Filtros</h2>
            {/* Toggle como botões para manter o botão ativo depois de clicar */}
            <Toggle
              className={`w-full bg-customFilter text-white border-none hover:bg-customDarkGreen ${filterUnread ? 'font-bold' : ''}`}
              onClick={onToggleUnread}>
              Conversas não lidas
            </Toggle>
            <Toggle
              className={`w-full bg-customFilter text-white border-none hover:bg-customDarkGreen ${filterGroup ? 'font-bold' : ''}`}
              onClick={onToggleGroup}>
              Grupos
            </Toggle>
          </div>
        </PopoverContent>

      </Popover>

      // Caso o type seja outro, monta o mesmo componente mas com botões invés de funíl 
    ) : (
      <ToggleGroup type="multiple">
        <ToggleGroupItem
          value="Unread" 
          onClick={onToggleUnread}
          className={`w-full bg-customFilter text-white border-none hover:bg-customDarkGreen ${filterUnread ? 'font-bold' : ''}`}>

          Unread
        </ToggleGroupItem>

        <ToggleGroupItem 
          value="Groups" 
          onClick={onToggleGroup}
          className={`w-full bg-customFilter text-white border-none hover:bg-customDarkGreen ${filterGroup ? 'font-bold' : ''}`}>
          Groups
        </ToggleGroupItem>
      </ToggleGroup>
    )
  );
};

export default Filters;

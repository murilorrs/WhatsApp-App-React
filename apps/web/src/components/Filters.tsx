import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'; 
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { IoMdFunnel } from 'react-icons/io';

interface FiltersProps {
  filterGroup: boolean;
  filterUnread: boolean;
  onToggleGroup: () => void;
  onToggleUnread: () => void;
  type: number; 
}

const Filters: React.FC<FiltersProps> = ({ filterGroup, filterUnread, onToggleGroup, onToggleUnread, type }) => {
  return (
    type === 1 ? (
      <Popover>
        <PopoverTrigger>
          <button className="btn">
            <IoMdFunnel className="text-2xl text-white" /> 
          </button>
        </PopoverTrigger>

        <PopoverContent className="bg-customLighterGreen border-none p-4">
          <div className="space-y-2">
            <h2 className="text-white mb-2 font-bold">Filtros</h2>
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

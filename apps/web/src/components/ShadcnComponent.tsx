import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { IoMdFunnel } from "react-icons/io";

interface ShadcnComponentProps {
  type: number;
}

const ShadcnComponent: React.FC<ShadcnComponentProps> = ({ type }) => {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <button className="btn">
            {type === 1 ? <IoMdFunnel className="text-2xl"/> : 'Trigger text'}
          </button>
        </PopoverTrigger>
        <PopoverContent className="bg-customLighterGreen border-none p-4">
            <div className="space-y-2">
              <h2 className="text-white mb-2 font-bold">Conversas</h2>
              <Button className="w-full bg-customLighterGreen text-white border-none hover:bg-customDarkGreen">
                Conversas não lidas
              </Button>
              <Button className="w-full bg-customLighterGreen text-white border-none hover:bg-customDarkGreen">
                Grupos
              </Button>
            </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ShadcnComponent;

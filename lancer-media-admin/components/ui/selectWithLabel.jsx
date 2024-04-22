import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectWithLabel({ id, label, values, selected }) {
  return (
    <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
      <Label htmlFor={id} className="shrink-0 w-32 font-medium">
        {label}
      </Label>
      <Select defaultValue={selected} id={id} name={id}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={`Select a ${label}`} />
        </SelectTrigger>
        <SelectContent>
          {values.map((value, index) => {
            return <SelectItem key={`select_${id}_${index}`} value={value.id}>{value.name}</SelectItem>
          })}
        </SelectContent>
      </Select>
    </div>
  );
}

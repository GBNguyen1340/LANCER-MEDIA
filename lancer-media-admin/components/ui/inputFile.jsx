import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputFile({label, name}) {
  return (
    <div className="flex flex-col gap-4 py-4 lg:flex-row">
      <Label className="shrink-0 w-32 font-medium" htmlFor="picture">
        {label}
      </Label>
      <div>
        <Input id="picture" name={name} type="file" className="w-full rounded-lg px-2 font-medium" />
      </div>
    </div>
  );
}

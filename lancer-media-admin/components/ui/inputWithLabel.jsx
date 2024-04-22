import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function InputWithLabel({ id, label, value, type, ...props }) {
  return (
    <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
      <Label htmlFor={id} className="shrink-0 w-32 font-medium">
        {label}
      </Label>
      {type === "textarea" ? (
        <Textarea id={id} name={id} placeholder={label} defaultValue={value} {...props}/>
      ) : (
        <Input type={type ?? "text"} id={id} name={id} placeholder={label} defaultValue={value} {...props}/>
      )}
    </div>
  );
}

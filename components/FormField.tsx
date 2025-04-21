import React from "react";
import { FormDescription, FormItem, FormMessage } from "./ui/form";
import { FormControl } from "./ui/form";
import { Input } from "./ui/input";
import { FormLabel } from "./ui/form";
import { Control, Controller, FieldValues, Path } from "react-hook-form";



interface FormFieldProps<T extends FieldValues>{
    control:Control<T>,
    name:Path<T>,
    label:string,
    placeholder:string,
    type?:"name"|"email"|"password"|"file"|"text"
}

const FormField = ({name,control,label,placeholder,type="text"}:FormFieldProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="label">{label}</FormLabel>
        <FormControl> 
          <Input className="input" placeholder={placeholder} {...field} type={type} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormField;

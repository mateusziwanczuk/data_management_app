import { FormEventHandler, MouseEventHandler } from "react";

export interface FormProps {
  onSubmit: FormEventHandler;
}

export interface InputProps {
  name: string;
  type?: string;
  value?: string;
  required?: boolean;
  onChange?: FormEventHandler;
  placeholder?: string;
  checked?: boolean;
}

export interface AuthTextProps {
  onClick?: MouseEventHandler;
}
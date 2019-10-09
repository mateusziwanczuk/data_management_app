export interface FormProps {
  onSubmit: any;
}

export interface InputProps {
  name: string;
  type?: string;
  value?: string;
  required?: boolean;
  onChange?: any;
  placeholder?: string;
  checked?: boolean;
}

export interface AuthTextProps {
  onClick?: any;
}
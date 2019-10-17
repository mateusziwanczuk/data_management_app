import { History } from 'history';

export interface ChildComponentProps {
    history : History
}

export interface NewOrderValues {
    first_name: string;
    last_name: string;
    email: string;
    service_expire_date: string;
    client_number: string;
    order_number: string;
    order_type: "standard" | "priority" | '';
    transfer_fee: string;
}
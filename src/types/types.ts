export interface NewOrderValues {
    first_name: string;
    last_name: string;
    email: string;
    service_expire_date: string;
    client_number: string;
    order_number: string;
    order_type: "standard" | "priority";
    consultant: string;
    transfer_fee: string;
}
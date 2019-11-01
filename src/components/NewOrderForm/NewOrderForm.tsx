import React, { useState, ChangeEvent, FormEvent } from 'react';
import { PageHeader } from '../PageHeader/PageHeader';
import { InitialFormValues } from '../../_helpers/InitialValues.helpers';
import { NewOrderValues } from '../../_types/types';
import { formatInputFeeValue, formatDateValue } from '../../_helpers/InputFormatters.helpers';
import { isDateValid } from '../../_helpers/InputValidation.helpers';
import { Container, FlexContainer, Button, Error } from '../../uiComponents/app';
import { Input, Label, Form, LabelRadio, InputRadio } from '../../uiComponents/form';
import './NewOrderForm.css';

export const NewOrderForm: React.FC = () => {
  const [inputsValues, setInputsValues] = useState<NewOrderValues>(InitialFormValues);
  const [isFormValid, handleFormValidation] = useState<boolean | undefined>(undefined);
  const [isValidating, startValidation] = useState<boolean>(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (event && isFormValid) {
      console.log(inputsValues)
    } else {
      startValidation(true)
    }
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setInputsValues((inputsValues: NewOrderValues) => ({...inputsValues, [event.target.name]: event.target.value}));
    checkFormValidation();
  }

  const checkFormValidation = () => {
    return first_name.length > 0
      && last_name.length > 0
      && email.length > 0
      && service_expire_date.length > 0
      && isDateValid(service_expire_date)
      && client_number.length > 0
      && order_number.length > 0
      && order_type.length > 0
      && transfer_fee.length > 0
      ? handleFormValidation(true)
      : handleFormValidation(false)
  }

  const validateInputValue = (value: string) => {
    return value.length === 0 ? <Error>This field is required</Error> : null
  }

  const validateDateInput = (value: string) => {
    return !isDateValid(value) ? <Error>Invalid date format (DD/MM/YYYY)</Error> : null
  }

  const { first_name, last_name, email, service_expire_date, client_number, order_number, order_type, transfer_fee } = inputsValues

  return (
    <>
      <PageHeader title={'New order'} />
      <Container>
        <Form onSubmit={handleSubmit}>
          <FlexContainer>
            <Label>First name
              <Input 
                name="first_name" 
                onChange={handleInputChange} 
                value={first_name}
              />
              { isValidating && validateInputValue(first_name) }
            </Label>
            <Label>Last name
              <Input name="last_name" onChange={handleInputChange} value={last_name}/>
              { isValidating && validateInputValue(last_name) }
            </Label>
          </FlexContainer>
          <Label>E-mail
            <Input name="email" onChange={handleInputChange} value={email}/>
            { isValidating && validateInputValue(email) }
          </Label>
          <Label>Service expire date
            <Input 
              name="service_expire_date" 
              onChange={handleInputChange} 
              value={formatDateValue(service_expire_date)}
              placeholder={'DD/MM/YYYY'}
            />
            { isValidating && validateDateInput(formatDateValue(service_expire_date)) }
          </Label>
          <FlexContainer>
            <Label>Client number
              <Input name="client_number" onChange={handleInputChange} value={client_number} />
              { isValidating && validateInputValue(client_number) }
            </Label>
            <Label>Order number
              <Input name="order_number" onChange={handleInputChange} value={order_number}/>
              { isValidating && validateInputValue(order_number) }
            </Label>
          </FlexContainer>
          <span className={'OrderTypeHeader'}>Order type</span>
          <FlexContainer>
            <LabelRadio>Standard
              <InputRadio name="order_type" value="standard" onChange={handleInputChange}/>
            </LabelRadio>
            <LabelRadio>Priority
              <InputRadio name="order_type" value="priority" onChange={handleInputChange}/>
            </LabelRadio>
          </FlexContainer>
          <Label>
            { isValidating && validateInputValue(order_type) }
          </Label>
          <Label>Transfer fee
            <Input 
              name="transfer_fee" 
              onChange={handleInputChange} 
              value={formatInputFeeValue(transfer_fee)} 
              placeholder={'€'}
            />
            { isValidating && validateInputValue(formatInputFeeValue(transfer_fee)) }
          </Label>
          <Button>SUBMIT</Button>
        </Form>
      </Container>
    </>
  );
}
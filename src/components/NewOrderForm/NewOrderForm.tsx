import React, { useState, ChangeEvent, FormEvent } from 'react';
import { PageHeader } from '../PageHeader/PageHeader'
import { Container, FlexContainer, Label, LabelRadio, Input, InputRadio, Button, Error } from '../../UIElements/Components';
import { InitialFormValues } from '../../helpers/InitialValues.helpers';
import { NewOrderValues } from '../../types/types'
import { formatInputFeeValue, formatDateValue } from '../../helpers/InputFormatters.helpers';
import { isDateValid } from '../../helpers/InputValidation.helpers';
import './NewOrderForm.css'

export const NewOrderForm: React.FC = () => {
  const [inputsValues, setInputsValues] = useState<NewOrderValues>(InitialFormValues);
  const [isFormValid, handleFormValidation] = useState<boolean | undefined>(undefined)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    checkFormValidation();

    if (event && isFormValid) {
      return console.log(inputsValues)
    } 
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setInputsValues((inputsValues: NewOrderValues) => ({...inputsValues, [event.target.name]: event.target.value}));
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

  const showValidationError = (value: string) => {
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
        <form onSubmit={handleSubmit}>
          <FlexContainer>
            <Label>First name
              <Input 
                name="first_name" 
                onChange={handleInputChange} 
                value={first_name}
              />
              { isFormValid === false && showValidationError(first_name) }
            </Label>
            <Label>Last name
              <Input name="last_name" onChange={handleInputChange} value={last_name}/>
              { isFormValid === false && showValidationError(last_name) }
            </Label>
          </FlexContainer>
          <Label>E-mail
            <Input name="email" onChange={handleInputChange} value={email}/>
            { isFormValid === false && showValidationError(email) }
          </Label>
          <Label>Service expire date
            <Input 
              name="service_expire_date" 
              onChange={handleInputChange} 
              value={formatDateValue(service_expire_date)}
              placeholder={'DD/MM/YYYY'}
            />
            { isFormValid === false && validateDateInput(formatDateValue(service_expire_date)) }
          </Label>
          <FlexContainer>
            <Label>Client number
              <Input name="client_number" onChange={handleInputChange} value={client_number} />
              { isFormValid === false && showValidationError(client_number) }
            </Label>
            <Label>Order number
              <Input name="order_number" onChange={handleInputChange} value={order_number}/>
              { isFormValid === false && showValidationError(order_number) }
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
            { isFormValid === false && showValidationError(order_type) }
          </Label>
          <Label>Transfer fee
            <Input 
              name="transfer_fee" 
              onChange={handleInputChange} 
              value={formatInputFeeValue(transfer_fee)} 
              placeholder={'€'}
            />
            { isFormValid === false && showValidationError(formatInputFeeValue(transfer_fee)) }
          </Label>
          <Button>SUBMIT</Button>
        </form>
      </Container>
    </>
  );
}
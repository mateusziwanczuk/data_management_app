import React, { useState, ChangeEvent, FormEvent } from 'react';
import { PageHeader } from '../PageHeader/PageHeader'
import { Container, FlexContainer, Label, LabelRadio, Input, InputRadio, Button } from '../../UIElements/Components';
import { InitialFormValues } from '../../helpers/InitialValues.helpers';
import { NewOrderValues } from '../../types/types'
import './NewOrderForm.css'
import { formatInputFeeValues } from '../../helpers/FormValidation.helpers';

export const NewOrderForm: React.FC = () => {
  const [inputsValues, setInputsValues] = useState<NewOrderValues>(InitialFormValues);
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();

      console.log(inputsValues)
    }
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setInputsValues((inputsValues: NewOrderValues) => ({...inputsValues, [event.target.name]: event.target.value}));
  }

  return (
    <>
      <PageHeader title={'New order'} />
      <Container>
        <form onSubmit={handleSubmit}>
          <FlexContainer>
            <Label>First name
              <Input name="first_name" onChange={handleInputChange} value={inputsValues.first_name}/>
            </Label>
            <Label>Last name
              <Input name="last_name" onChange={handleInputChange} value={inputsValues.last_name}/>
            </Label>
          </FlexContainer>
          <Label>E-mail
            <Input name="email" onChange={handleInputChange} value={inputsValues.email}/>
          </Label>
          <Label>Service expire date
            <Input name="service_expire_date" onChange={handleInputChange} value={inputsValues.service_expire_date}/>
          </Label>
          <FlexContainer>
            <Label>Client number
              <Input name="client_number" onChange={handleInputChange} value={inputsValues.client_number} />
            </Label>
            <Label>Order number
              <Input name="order_number" onChange={handleInputChange} value={inputsValues.order_number}/>
            </Label>
          </FlexContainer>
          <span className={'OrderTypeHeader'}>Order type</span>
          <FlexContainer>
            <LabelRadio>Standard
              <InputRadio name="order_type" value="standard" />
            </LabelRadio>
            <LabelRadio>Priority
              <InputRadio name="order_type" value="priority" />
            </LabelRadio>
          </FlexContainer>
          <Label>Consultant
            <Input name="consultant" onChange={handleInputChange} value={inputsValues.consultant} />
          </Label>
          <Label>Transfer fee
            <Input name="transfer_fee" onChange={handleInputChange} value={formatInputFeeValues(inputsValues.transfer_fee)} />
          </Label>
          <Button>SUBMIT</Button>
        </form>
      </Container>
    </>
  );
}
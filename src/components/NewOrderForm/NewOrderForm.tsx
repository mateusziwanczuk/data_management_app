import React from 'react';
import { PageHeader } from '../PageHeader/PageHeader'
import { Container, FlexContainer, Label, LabelRadio, Input, InputRadio, Button } from '../../UIElements/Components';
import './NewOrderForm.css'

export const NewOrderForm: React.FC = () => {
  return (
    <>
      <PageHeader title={'New order'} />
      <Container>
        <form>
          <FlexContainer>
            <Label>First name
              <Input name="first_name" />
            </Label>
            <Label>Last name
              <Input name="last_name" />
            </Label>
          </FlexContainer>
          <Label>E-mail
            <Input name="user_email" />
          </Label>
          <Label>Service expire date
            <Input name="expire_date" />
          </Label>
          <FlexContainer>
            <Label>Client number
              <Input name="client_number" />
            </Label>
            <Label>Order number
              <Input name="order_number" />
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
            <Input name="consultant" />
          </Label>
          <Label>Transfer fee
            <Input name="transfer_fee" />
          </Label>
          <Button>SUBMIT</Button>
        </form>
      </Container>
    </>
  );
}
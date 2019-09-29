import React from 'react';
import { PageHeader } from '../PageHeader/PageHeader'
import { Container, FlexContainer, Label, Input } from '../UIElements/UIElements';
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

          Order type
          <FlexContainer>
            <label>Standard
              <Input type="radio" name="order_type" value="standard" />
            </label>
            <label>Priority
              <Input type="radio" name="order_type" value="priority" />
            </label>
          </FlexContainer>

          <Label>Consultant
            <Input name="consultant" />
          </Label>
          <Label>Transfer fee
            <Input name="transfer_fee" />
          </Label>

          <button>SUBMIT</button>
        </form>
      </Container>
    </>
  );
}
import { Container, Input, Button, Title } from "./styles/opt-form";

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Title = function OptFormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src="images/icons/chevron-right.png" alt="chevron" />
    </Button>
  );
};

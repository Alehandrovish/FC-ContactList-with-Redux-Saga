import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import {
  deleteContact,
  addContact,
  editContact,
} from "../../store/slices/contactSlice";
import TextInputField from "../TextInputField/TextInputField";
import "./ContactForm.css";

function ContactForm({ formikRef }) {
  const formData = useSelector((state) => state.personData);

  const id = formData.id;

  const dispatch = useDispatch();

  function onFormSubmit(values, actions) {
    if (values.id) {
      dispatch(editContact(values));
    } else {
      dispatch(addContact({ ...values, id: nanoid() }));
    }
    actions.resetForm({
      values: formData,
    });
  }

  function onDeleteContact() {
    dispatch(deleteContact(id));
  }

  const regexValidator = (regex) =>
    function (message) {
      return this.test("regex-validator", message, function (value) {
        const { path, createError } = this;

        if (!value) return true;

        return regex.test(value) || createError({ path, message });
      });
    };

  Yup.addMethod(
    Yup.string,
    "myValidationEmail",
    regexValidator(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
  );

  Yup.addMethod(Yup.string, "myValidationPhone", regexValidator(/^\+?\d{12}$/));

  const shema = Yup.object().shape({
    email: Yup.string()
      .myValidationEmail("Not correct email name")
      .required("Email is required"),
    phone: Yup.string()
      .myValidationPhone("Not correct phone number")
      .required("Phone is required"),
  });

  const contactForm = ({ isValid, setFieldValue }) => {
    return (
      <Form>
        <div className="input-block">
          <TextInputField name="firstName" label="First name"></TextInputField>
          <TextInputField name="lastName" label="Last name"></TextInputField>
          <TextInputField name="email" label="Email"></TextInputField>
          <TextInputField name="phone" label="Phone"></TextInputField>
        </div>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={5}>
          <Button
            variant="outlined"
            type="submit"
            startIcon={<SaveIcon />}
            disabled={!isValid}
          >
            Save
          </Button>
          {formData.id ? (
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              type="button"
              onClick={onDeleteContact}
            >
              Delete
            </Button>
          ) : (
            ""
          )}
        </Stack>
      </Form>
    );
  };

  return (
    <Formik
      initialValues={formData}
      onSubmit={onFormSubmit}
      validationSchema={shema}
      enableReinitialize
      innerRef={formikRef}
    >
      {contactForm}
    </Formik>
  );
}

export default ContactForm;

import {
  Box,
  Button,
  TextField,
  Card,
  CardContent,
  useTheme,
  Snackbar,
  Alert,
} from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useMediaQuery } from '@mui/material';
import Header from '../../components/header';
import { tokens } from '../../theme';
import { useState } from 'react';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  address1: '',
  address2: '',
};

const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  email: yup.string().email('Invalid Email').required('Required'),
  contact: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Required'),
  address1: yup.string().required('Required'),
  address2: yup.string().required('Required'),
});

const Form = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery('(min-width:950px)');
  const handleFormSubmit = (value) => {
    if (value) {
      handleClick();
      console.log(value);
    }
  };

  return (
    <Box m="20px" height="100%">
      <Header title="CREATE USER" subtitle="Create New User Profile" />
      <Box display="flex" justifyContent="center">
        <Card
          sx={{
            borderRadius: '20px',
            backgroundColor: colors.primary[400],
            width: isNonMobile ? '45%' : '100%',
            boxShadow: `0px 3px 8px ${colors.primary[300]}`,
          }}
        >
          <CardContent>
            <Formik
              onSubmit={handleFormSubmit}
              initialValues={initialValues}
              validationSchema={userSchema}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                isValid,
                dirty,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                      '& > div': {
                        gridColumn: isNonMobile ? undefined : 'span 4',
                      },
                    }}
                  >
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="text"
                      label="First Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.firstName}
                      name="firstName"
                      error={Boolean(touched.firstName && errors.firstName)}
                      helperText={touched.firstName && errors.firstName}
                      sx={{ gridColumn: 'span 2' }}
                    />
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="text"
                      label="Last Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.lastName}
                      name="lastName"
                      error={Boolean(touched.lastName && errors.lastName)}
                      helperText={touched.lastName && errors.lastName}
                      sx={{ gridColumn: 'span 2' }}
                    />
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="text"
                      label="Email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      name="email"
                      error={Boolean(touched.email && errors.email)}
                      helperText={touched.email && errors.email}
                      sx={{ gridColumn: 'span 4' }}
                    />
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="text"
                      label="Contact Number"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.contact}
                      name="contact"
                      error={Boolean(touched.contact && errors.contact)}
                      helperText={touched.contact && errors.contact}
                      sx={{ gridColumn: 'span 4' }}
                    />
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="text"
                      label="Address 1"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.address1}
                      name="address1"
                      error={Boolean(touched.address1 && errors.address1)}
                      helperText={touched.address1 && errors.address1}
                      sx={{ gridColumn: 'span 4' }}
                    />
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="text"
                      label="Address 2"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.address2}
                      name="address2"
                      error={Boolean(touched.address2 && errors.address2)}
                      helperText={touched.address2 && errors.address2}
                      sx={{ gridColumn: 'span 4' }}
                    />
                  </Box>
                  <Box display="flex" justifyContent="end" mt="20px">
                    <Button
                      type="submit"
                      color="secondary"
                      variant="contained"
                      disabled={!(isValid && dirty)}
                    >
                      Create New User
                    </Button>
                  </Box>
                </form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%', color: 'white' }}
        >
          User Created Successfully
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Form;

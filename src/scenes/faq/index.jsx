import { Box, useTheme, Typography } from '@mui/material';
import Header from '../../components/header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { ExpandMoreOutlined } from '@mui/icons-material';
import { tokens } from '../../theme';
const questions = [
  {
    qus: 'What is the best way to learn React?',
    ans: 'The best way to learn React is to practice by building small projects and reading the official documentation.',
  },
  {
    qus: 'How do I get started with React?',
    ans: 'To get started with React, you can start by learning the basics of JavaScript and then move on to learning React by reading the official documentation and building small projects.',
  },
  {
    qus: 'What is the difference between React and Angular?',
    ans: 'React is a JavaScript library for building user interfaces, while Angular is a full-fledged framework for building web applications. React is more flexible and lightweight, while Angular is more opinionated and provides more built-in features.',
  },
  {
    qus: 'How do I debug my React code?',
    ans: 'You can use the browser developer tools to debug your React code. You can also use debugging tools like React Developer Tools to inspect and debug your React components.',
  },
  {
    qus: 'What is the best way to style my React components?',
    ans: 'You can use CSS or CSS-in-JS libraries like styled-components to style your React components. You can also use CSS preprocessors like Sass or Less to write more efficient and maintainable CSS code.',
  },
];
const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Box p="20px" maxHeight="75vh" overflow="auto">
        {questions.map((record) => (
          <Accordion
            defaultExpanded
            sx={{ backgroundColor: colors.primary[400] }}
          >
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
              <Typography color={colors.greenAccent[500]} variant="h5">
                {record.qus}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6">{record.ans}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQ;

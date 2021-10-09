import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Layout from './Layout';
import Jumbotron from './Jumbotron';

export default function ServicePage({
  backgroundImage,
  title,
}) {
  return (
    <Layout maxWidth="xl">
      <Box sx={{ minHeight: 'calc(100vh - 163px)' }} sx={{ mt: 9 }}>
        <Jumbotron 
          backgroundImage={backgroundImage} 
          title={title}
        />
        <Container maxWidth="lg">
        <Typography
            component="p"
            color="text.primary"
            sx={{ my: 3 }}
          >
            Aliqua do mollit qui nulla irure. Culpa sunt sint cillum aliquip esse sit. Velit magna ad veniam cillum aliquip Lorem.
            Aute nostrud officia voluptate fugiat. Duis incididunt ut cupidatat deserunt. Consequat eu tempor magna laborum. Nisi officia cupidatat cillum aliquip aliquip nulla aliquip. 
            Ut aliqua irure sit ex proident Lorem elit et deserunt enim amet. Duis nulla veniam dolore exercitation eiusmod excepteur excepteur ullamco duis eu id. Aliqua fugiat proident ut culpa labore officia incididunt do est dolor ut sunt exercitation eiusmod.
          </Typography>
        </Container>
      </Box>
    </Layout>
  );
}

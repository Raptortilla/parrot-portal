import { ReactNode } from 'react';
import TopBar from './TopBar';
import { Box, Container } from '@mui/material';
import SideBar from './SideBar';

type TProps = {
  children?: ReactNode;
};

const MainLayout = ({ children }: TProps) => {
  const TOPBAR_HEIGHT = '64px';

  return (
    <>
      <TopBar height={TOPBAR_HEIGHT} />
      <Box sx={{ display: 'flex' }}>
        <SideBar topBarHeight={TOPBAR_HEIGHT} />
        <Container sx={{ mt: TOPBAR_HEIGHT, pt: 4 }}>{children}</Container>
      </Box>
    </>
  );
};

export default MainLayout;

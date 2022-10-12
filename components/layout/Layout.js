import { AppBar, Box, Container, CssBaseline, Toolbar, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import Link from 'next/link';
import classes from '../../utils/classes';

 const Layout = ({title , description , children}) =>{
    const theme = createTheme({
        typography : {
            h1 : {
                fontSize : '1.6rem',
                fontWeight : 400,
                margin : '1rem 0',
            },
            h2 : {
                fontSize : '1.4rem',
                fontWeight : 400,
                margin : '1rem 0', 
            }
        },
        palette : {
            mode : 'light',
            primary : {
                main : '#f0c000',
            },
            secondary : {
                main : '#208080'
            }
        },
    })
    return(
        <>
            <Head>
                <title>{title ? `${title} - sanity` : 'sanity'}</title>
                {description && <meta name='description' content={description}></meta>}
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <AppBar position='static' sx={classes.appbar}>
                    <Toolbar sx={classes.toolbar}>
                        <Link href={'/'}>
                        <Typography  sx={classes.brand}>amazona</Typography>
                        </Link>
                    </Toolbar>
                </AppBar>
                <Container component={'main'} sx={classes.main}>{children}</Container>
                <Box component={'footer'} sx={classes.footer}>
                    <Typography>All Rights reserved. Sanity Amazona</Typography>
                </Box>
            </ThemeProvider>
        </>
    )
}
export default Layout;
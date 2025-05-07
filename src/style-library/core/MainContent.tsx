import { Box, Container, Typography, Button, Card, CardContent, Grid } from '@mui/material';
import { ThemeSwitcher } from './ThemeSwitcher';

function MainContent() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          OpenScience Platform
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom>
          Colaboración científica abierta
        </Typography>

        <Card sx={{ mb: 4 }}>
          <ThemeSwitcher />
        </Card>

        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Publicaciones
                </Typography>
                <Typography variant="body2">Accede a publicaciones científicas abiertas</Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Explorar
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Datos
                </Typography>
                <Typography variant="body2">
                  Conjuntos de datos abiertos para investigación
                </Typography>
                <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                  Ver datos
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid>
            <Card component="div">
              <CardContent>
                <Typography variant="h5" component="div">
                  Colabora
                </Typography>
                <Typography variant="body2">Únete a proyectos científicos abiertos</Typography>
                <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
                  Participar
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default MainContent;

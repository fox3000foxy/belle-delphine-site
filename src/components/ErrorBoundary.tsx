import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Container maxWidth="md">
          <Box
            sx={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              gap: 3,
            }}>
            <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '4rem' }, fontWeight: 700 }}>
              Oops! 😅
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Something went wrong
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500 }}>
              Don't worry, it's not your fault. Try refreshing the page or come back later.
            </Typography>
            {this.state.error && (
              <Box
                sx={{
                  p: 2,
                  bgcolor: 'error.light',
                  borderRadius: 2,
                  maxWidth: 600,
                  overflow: 'auto',
                }}>
                <Typography variant="body2" sx={{ fontFamily: 'monospace', textAlign: 'left' }}>
                  {this.state.error.toString()}
                </Typography>
              </Box>
            )}
            <Button variant="contained" size="large" onClick={this.handleReload}>
              Reload Page
            </Button>
          </Box>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

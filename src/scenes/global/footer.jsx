import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import { LinkedIn, GitHub, Twitter } from '@mui/icons-material';
function Footer() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="footer" style={{ backgroundColor: colors.primary[400] }}>
      <Box>
        <Typography>
          Designed and Developed by{' '}
          <a
            href="https://ahmad-shobasi.github.io/Ahmad-Shobasi-Personal-website"
            target="_blank"
            rel="noreferrer"
            style={{
              color: colors.blueAccent[500],
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            Ahmad Shobasi
          </a>{' '}
        </Typography>
      </Box>
      <Box>
        <Typography>Copyright © {year} Ahmad Shobasi</Typography>
      </Box>
      <Box>
        <ul style={{ display: 'flex' }} className="footer-icons">
          <li>
            <a
              href="https://www.linkedin.com/in/ahmad-shobasi-7a0547243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
              style={{
                color: colors.grey[100],
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              <LinkedIn />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ahmad-shobasi"
              target="_blank"
              rel="noreferrer"
              style={{
                color: colors.grey[100],
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              <GitHub />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/Ahmed_Shobasi?s=09"
              target="_blank"
              rel="noreferrer"
              style={{
                color: colors.grey[100],
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              <Twitter />
            </a>
          </li>
        </ul>
      </Box>
    </footer>
  );
}

export default Footer;

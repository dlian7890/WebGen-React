import React from 'react';
import Box from '@mui/material/Box';
import './Footer.css';

const Footer = () => {
  return (
    <Box component='footer' class='footer'>
      <div className='footer-links'>
        <a
          target='_blank'
          rel='noopener'
          class='footer-link'
          href='https://github.com/web4bio/webgen'
        >
          GitHub
        </a>
        <a
          target='_blank'
          rel='noopener'
          class='footer-link'
          href='http://firebrowse.org/api-docs/'
        >
          Firebrowse API
        </a>
        <a
          target='_blank'
          rel='noopener'
          class='footer-link'
          href='https://gdc.cancer.gov/'
        >
          NCI Genomic Data Commons
        </a>
        <a
          target='_blank'
          rel='noopener'
          class='footer-link'
          href='https://www.stonybrook.edu/commcms/vertically-integrated-projects/teams/_team_page/team_page.php?team=WebGen%20(Web%20Genomics)'
        >
          Stony Brook University VIP
        </a>
      </div>

      <div class='footer-link'>
        Contact: richard.moffitt@stonybrookmedicine.edu
      </div>

      <div class='footer-copyright'>
        <div>© WebGen 2020 All Rights Reserved</div>
      </div>
    </Box>
  );
};

export default Footer;

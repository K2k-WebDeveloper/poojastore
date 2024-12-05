import { Button } from "@headlessui/react";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-alice-carousel";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-[#FF9829] text-white text-center mt-10"
        container
        sx={{ bgcolor: "#FF9829", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Puja Samagri
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Puja Items
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Puja Statues{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Puja Ornaments
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Puja Statue Cloths
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Puja Cloths
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Why We Celebrate
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Puja Vidhi
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Puja Mantra{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Puja Timing
            </Button>
          </div>
          
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Puja Steps
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              How to Do
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              When to Do{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Why to Do
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Book Pandit
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
            Personal Puja
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
            Group Puja{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
            Recorded Sessions
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
            Audio Book
            </Button>
          </div>
        </Grid>
        <Grid className="pt-20" item xs={12}>
            <Typography variant="body2" component="p" align="center">
                &copy; 2024 K2k It Support Pvt Ltd. All Right reserved
            </Typography>
            <Typography variant="body2" component="p" align="center">
             Made with love by Our Team for You.
            </Typography>
            <Typography variant="body2" component="p" align="center">
             Product made by{''}
             <Link href="" color="inherit" underline="always">
             K2k IT Pvt Ltd.
             </Link>{''}
             from{''}
             <Link href="" color="inherit" underline="always">
             www.k2k-it-ai.solutions.com
             </Link>
            </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

import { Avatar, Button, Link, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import { Link as RouterLink } from "react-router-dom";

import mags from "../../../images/cs/mags.png";
import library from "../../../images/cs/library.png";
import price from "../../../images/cs/price.png";
import contacts from "../../../images/cs/contacts.png";
import community from "../../../images/cs/community.png";

import Profile from "../../../components/profile/profile";

import spsLogo from "../../../images/homePage/IEEE-SPS_Logo.png";
import { sps } from "../../../data/profile";

const Cs = () => {
  const classes = useStyles();
  return (
    <div className={classes.cs}>
      <section className={classes.cs__groupPhoto}>
        <div className={classes.cs__groupPhoto__container}>
          <img
            src={require("../../../images/sps/SPS.JPG").default}
            alt="grpPhoto"
            className={classes.cs__groupPhoto__container__image}
          />
        </div>
        <div className={classes.header}>
          <div className={classes.header__content}>
            <div className={classes.logo}>
              <img src={spsLogo} alt="csLogo" className={classes.logo__image} />
            </div>
            <div className={classes.header__text}>
              <Typography variant="h6">
                 The Signal Processing Society is a dynamic organization that is the preeminent source of signal processing information and resources to a global community. We do this by: being a one-stop source of signal processing resources; providing a variety of high quality resources to a variety of users in formats customized to their interests; adapting to a rapidly changing technical community; and being intimately involved in the education of signal processing professionals at all levels.
              </Typography>
              <Link
                href="https://ieeespsgs.org/"
                rel="noopener"
                target="_blank"
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.cs__joinus}>
        <Typography variant="h4" className={classes.cs__joinus__text}>
          "Our goal is to encourage involvement, and provide opportunities for
          students to build valuable skills."
        </Typography>
        <RouterLink to="/joinus" className={classes.link}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.Joinus__button}
          >
            Join Us
          </Button>
        </RouterLink>
      </section>
      <section className={classes.cs__benefits}>
        <Typography variant="h4" className={classes.cs__benefits__text}>
          SPS MEMBERSHIP OFFERS
        </Typography>
        <div className={classes.cs__benefits__cards}>
          <Paper elevation={8} className={classes.cs__benefits__cards__paper}>
            <img src={mags} alt="mags" className={classes.benifits_logo} />
            <Typography variant="body1">
              Computer Magazine, our flagship publication (12 digital issues)
            </Typography>
          </Paper>
          <Paper elevation={8} className={classes.cs__benefits__cards__paper}>
            <img src={library} alt="library" className={classes.benifits_logo}/>
            <Typography variant="body1">
              Circuits and Systems Digital Library
            </Typography>
          </Paper>
          <Paper elevation={8} className={classes.cs__benefits__cards__paper}>
            <img src={price} alt="price" className={classes.benifits_logo} />
            <Typography variant="body1">
              Member pricing on optional magazines and transactions
            </Typography>
          </Paper>
          <Paper elevation={8} className={classes.cs__benefits__cards__paper}>
            <img src={contacts} alt="contacts" className={classes.benifits_logo} />
            <Typography variant="body1">Make professional contacts</Typography>
          </Paper>
          <Paper elevation={8} className={classes.cs__benefits__cards__paper}>
            <img src={community} alt="community" className={classes.benifits_logo} />
            <Typography variant="body1">
              Access more than 40 technical communities.
            </Typography>
          </Paper>
          <Paper elevation={8} className={classes.cs__benefits__cards__paper}>
            <img src={library} alt="library" className={classes.benifits_logo} />
            <Typography variant="body1">
              Online professional programs with certifiaction for all.
            </Typography>
          </Paper>
        </div>
      </section>
      <section className={classes.cs__team}>
        <Typography variant="h4" className={classes.cs__team__text}>Meet The Team</Typography>
        <div className={classes.cs__team__members}>
          {sps.map((person) => (
            <Profile 
              key = {person.name}
              name = {person.name}
              designation = {person.designation}
              emailURL = {person.emailURL}
              linkedInURL = {person.linkedInURL}
              image = {person.image}
            />

          ))}
        </div>
      </section>
      <section className={classes.cs__message}>
        <Typography variant="h4">ADVISOR MESSAGE</Typography>
        <div className={classes.cs__message__content}>
          <div className={classes.cs__message__content__person}>
            <Avatar className={classes.cs__message__content__person__image} src="https://ik.imagekit.io/ieeensakcet/profiles/Executive_Committee/tr:w-150/Rahmath_mam_20221203_BxJ7tVAzH.jpg"/>
            <Typography variant="h6">Ms. Rahmath Unnisa</Typography>
          </div>
          <Typography
            variant="subtitle1"
            className={classes.cs__message__content__text}
          >
            Joining IEEE is due to the fact that,you can have the smartest
            people in the world around you,but without collaboration the
            technology is not going to evolve. As a member of CS, I find the
            membership invaluable source of information and conduit for growth.
            I believe for lasting contribution to a discipline, you really need
            to have an organization like IEEE behind you.
          </Typography>
        </div>
      </section>
    </div>
  );
};

export default Cs;

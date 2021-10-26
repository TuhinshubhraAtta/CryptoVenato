import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";
import Particles from "react-tsparticles";

const useStyles = makeStyles((theme) => ({
  banner: {
    height: 550,
    position: "relative",
  },
  length: {
    height: 530,
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "center",
    position: "absolute",
    textAlign: "center",
    margin: 0,
    top: "10%",
    left: "50%",
    marginRight: "-50%",
    transform: `translate(${-50}%, ${3}%)`,
    borderRadius: 20,
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
    paddingRight: 30,
  },
}));

const particlesInit = (main) => {
  console.log(main);
};

const particlesLoaded = (container) => {
  console.log(container);
};

function Banner() {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Particles
        className={classes.length}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: "black",
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 6,
                opacity: 0.8,
                size: 20,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#B9F2FF",
            },
            links: {
              color: "#B9F2FF",
              distance: 100,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
              color: "white",
            }}
          >
            Crypto Venato
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Your personalised Cryptocurrency Tracker.
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;

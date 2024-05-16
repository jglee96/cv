import { Box } from "@mantine/core";
import profileUrl from "../assets/profile.jpg";
import profileWebpUrl from "../assets//profile.webp";
import classes from "./Profile.module.css";

export default function Profile() {
  return (
    <Box w="9rem" h="9rem">
      <picture>
        <source type="image/webp" srcSet={profileWebpUrl} />
        <img src={profileUrl} alt="profile image" className={classes.image} />
      </picture>
    </Box>
  );
}

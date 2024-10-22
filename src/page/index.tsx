import {
  Title,
  Text,
  Flex,
  Anchor,
  Stack,
  Badge,
  Space,
  ActionIcon,
  Group,
  Box,
  List,
} from "@mantine/core";
import { IconMail } from "@tabler/icons-react";
import { RESUME_DATA } from "../assets/resume-data";
import classes from "./index.module.css";
import Profile from "../components/Profile";
import { useMediaQuery } from "@mantine/hooks";

export default function Page() {
  const isPrint = useMediaQuery("print");
  return (
    <>
      <Group justify="space-between" wrap="nowrap">
        <Box
          maw={{
            sm: "calc(100% - 9rem - var(--mantine-spacing-md))",
            base: "100%",
          }}
        >
          <Title>{RESUME_DATA.name}</Title>
          <Text component="div" className={classes.summary}>
            {RESUME_DATA.summary}
          </Text>
        </Box>
        <Profile />
      </Group>
      <Space h="xs" />
      {!isPrint ? (
        <Group gap="xs">
          <ActionIcon
            component="a"
            variant="outline"
            href={`mailto:${RESUME_DATA.contact.email}`}
          >
            <IconMail />
          </ActionIcon>
          {RESUME_DATA.contact.social.map((item) => (
            <ActionIcon
              key={item.name}
              component="a"
              variant="outline"
              href={item.url}
            >
              <item.icon />
            </ActionIcon>
          ))}
        </Group>
      ) : (
        <List spacing={2} size="sm" center>
          <List.Item icon={<IconMail />}>{RESUME_DATA.contact.email}</List.Item>
          {RESUME_DATA.contact.social.map((item) => (
            <List.Item key={item.name} icon={<item.icon />}>
              {item.url}
            </List.Item>
          ))}
        </List>
      )}
      <Space className={classes.pageBreak} h="md" />
      <Title>Work Experience</Title>
      {RESUME_DATA.work.map((item) => (
        <Stack key={item.company} gap={2} my="md">
          <Flex justify="space-between">
            <Anchor
              fz="lg"
              fw={700}
              href={item.link}
              c="var(--mantine-color-text)"
            >
              {item.company}
            </Anchor>
            <Text>{`${item.start} - ${item.end}`}</Text>
          </Flex>
          <Text component="div">{item.title}</Text>
          <Flex gap={4} wrap="wrap">
            {item.skills.map((item) => (
              <Badge key={item} variant="outline" radius="md" size="xs">
                {item}
              </Badge>
            ))}
          </Flex>
          <Text component="div" size="sm">
            {item.description}
          </Text>
        </Stack>
      ))}
      <Title>Education</Title>
      {RESUME_DATA.education.map((item) => (
        <Stack key={item.degree} gap={2} my="md">
          <Flex justify="space-between">
            <Text fz="lg" fw={700}>
              {item.school}
            </Text>
            <Text>{`${item.start} - ${item.end}`}</Text>
          </Flex>
          <Text>{item.degree}</Text>
        </Stack>
      ))}
    </>
  );
}

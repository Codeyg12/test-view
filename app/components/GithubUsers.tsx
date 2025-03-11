"use client";

import {
  AppBar,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Toolbar,
  Typography,
} from "@mui/material";
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const users = [{id: 1, name: "John Doe", jiraTicket: "JIRA-1234"}, {id: 2, name: "Jane Doe", jiraTicket: "JIRA-1235"}, {id: 3, name: "John Smith", jiraTicket: "JIRA-1236"}, {id: 4, name: "Jane Smith", jiraTicket: "JIRA-1237"}, {id: 5, name: "John Doe", jiraTicket: "JIRA-1238"}, {id: 6, name: "Jane Doe", jiraTicket: "JIRA-1239"}, {id: 7, name: "Jane Smith", jiraTicket: "JIRA-1240"}, {id: 8, name: "John Smith", jiraTicket: "JIRA-1241"}];

const GithubUsers = () => {
  return (
    <Card
      sx={{ maxWidth: 400, minHeight: 400, maxHeight: 400, overflow: "auto" }}
      className="flex flex-col justify-start bg-slate-600"
    >
      <AppBar position="sticky" color="default">
        <CardHeader title={"Github Users"} className="text-center" />
        <Toolbar id="back-to-top-anchor" className="hidden" />
      </AppBar>
      {users.map((user, idx) => (
        <User user={user} key={idx} />
      ))}
    </Card>
    // https://mui.com/material-ui/
  );
};

const User = ({ user }: any) => {
  const { id, name, jiraTicket } = user;
  return (
    <CardContent className="flex justify-between items-center bg-slate-600">
      <Typography
        variant="h5"
        component="div"
        className="outline flex-grow pl-2 rounded-md outline-gray-300"
      >
        {name}
        <Typography>{`Jira Ticket: ${jiraTicket} `}</Typography>
      </Typography>
      <Avatar
        src={`https://avatars.githubusercontent.com/u/${id}`}
        className="ml-6"
        sx={{ width: 56, height: 56 }}
      />
    </CardContent>
  );
};

export default GithubUsers;

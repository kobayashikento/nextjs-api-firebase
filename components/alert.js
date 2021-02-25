import Link from 'next/link';

import { Typography, AppBar, Tooltip, Button } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import TodayIcon from '@material-ui/icons/Today';
import ShuffleIcon from '@material-ui/icons/Shuffle';

export default function Alert() {

    const formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }

    const randomDate = (start, end) => {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    return (
        <AppBar position="sticky" style={{
            display: "flex", justifyContent: "center", background: "rgba(234,234,234, 1)", height: "3.3vmax", alignItems: "center",
            boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px", zIndex: 100
        }}>
            <div style={{ display: "flex" }}>
                <Link href="/">
                    <Tooltip title="Home">
                        <Button>
                            <HomeIcon />
                        </Button>
                    </Tooltip>
                </Link>
                <Link as={`/apods/${formatDate(new Date())}`} href="/apods/[slug]">
                    <Tooltip title="Todays Astronomy Picture">
                        <Button>
                            <TodayIcon />
                        </Button>
                    </Tooltip>
                </Link>
                <Link as={`/apods/${formatDate(randomDate(new Date(2012, 0, 1), new Date()))}`} href="/apods/[slug]">
                    <Tooltip title="Raondom Astronomy Picture">
                        <Button>
                            <ShuffleIcon />
                        </Button>
                    </Tooltip>
                </Link>
            </div>
            <div style={{ display: "flex", color: "black", position: "absolute", right: "3%" }}>
                <Typography variant="overline">
                    <a
                        href={`https://github.com/kobayashikento/nextjs-api-firebase`} style={{ textDecoration: "underline" }}
                    >
                        Source Code
                </a>
                </Typography>
                <Typography variant="overline">
                    .
            </Typography>
            </div>
        </AppBar>
    )
}
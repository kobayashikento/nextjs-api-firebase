import { Typography } from "@material-ui/core";
import cn from 'classnames';

export default function Alert() {
    return (
        <div style={{
            display: "flex", justifyContent: "center", background: "rgba(234,234,234, 0.5)", height: "3.3vmax", alignItems: "center",
            boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px"
        }}>
            < Typography variant="overline" >
                The source code for this website is{'\u00A0'}
            </ Typography>
            <Typography variant="overline">
                <a
                    href={`https://github.com/kobayashikento/nextjs-api-firebase`} style={{ textDecoration: "underline" }}
                >
                    available on GitHub
                </a>
            </Typography>
            <Typography variant="overline">
                .
            </Typography>
        </div>
    )
}
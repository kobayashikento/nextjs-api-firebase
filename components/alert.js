import { Typography, Paper } from "@material-ui/core";

export default function Alert() {
    return (
        <Paper style={{ display: "flex", justifyContent: "center", background: "rgba(234,234,234, 0.5)", height: "2.2vmax", alignItems: "center" }}>
            <Typography variant="overline">
                The source code for this website is{'\u00A0'}
            </Typography>
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
        </Paper>
    )
}
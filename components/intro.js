
import Typography from '@material-ui/core/Typography';

export default function Intro() {
    return (
        <section style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "5.5vmax" }}>
            <Typography variant="h1" style={{ fontWeight: "bold" }}>
                APOD.
        </Typography>
            <Typography variant="h5" align="right" style={{ maxWidth: "40%" }}>
                A endless feed application showing Astronomy Pictures of the Day from NASA.
            </Typography>
        </section>
    )
}
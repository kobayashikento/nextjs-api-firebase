
import { Typography } from '@material-ui/core'
import Container from './container'

export default function Footer() {
    return (
        <footer style={{ background: "rgba(234,234,234,0.6)", boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px" }}>
            <Container>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "10vh" }}>
                    <Typography variant="h5">
                        Endless Feed Application using NASA's API
          </Typography>
                    <Typography>
                        <a
                            href={`https://github.com/kobayashikento/nextjs-api-firebase`}
                        >
                            View on GitHub
                            </a>
                    </Typography>
                </div>
            </Container >
        </footer >
    )
}
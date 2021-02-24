import { Typography } from '@material-ui/core';

export default function ApodTitle({ children }) {
    return (
        <Typography variant="h1" style={{ fontWeight: "bold", paddingTop: "4.4vmax", paddingBottom: "3.3vmax" }} dangerouslySetInnerHTML={{ __html: children }} />
    )
}
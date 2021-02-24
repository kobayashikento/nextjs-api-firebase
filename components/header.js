import Link from 'next/link';

import { Typography } from '@material-ui/core';

export default function Header() {
    return (
        <Typography className="underlineHover" variant="h4" style={{ fontWeight: "bold", paddingTop: "3.3vmax" }}>
            <Link href="/">
                APOD
      </Link>
        </Typography>
    )
}
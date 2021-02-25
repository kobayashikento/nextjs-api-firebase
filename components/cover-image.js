
import Link from 'next/link';
import { DEFAULT_IMAGE } from '../lib/constants';

export default function CoverImage({ title, url, slug, preview, focus }) {
    let tempUrl;
    try {
        tempUrl = url.includes("apod.nasa.gov") ? `url(${url})` : `url(${DEFAULT_IMAGE})`
    } catch {
        tempUrl = `url(${DEFAULT_IMAGE})`;
    }
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            {slug ? (
                <Link as={`/apods/${slug}`} href="/apods/[slug]">
                    <a aria-label={title} style={{ width: "100%" }}>
                        <div className={!focus ? "imageHover" : "imageNonHover"} style={{ backgroundImage: tempUrl, width: "100%", height: preview ? "50vh" : "70vh" }} />
                    </a>
                </Link>
            ) : (
                    <div className={!focus ? "imageHover" : "imageNonHover"} style={{ backgroundImage: tempUrl, width: "100%", height: preview ? "50vh" : "70vh" }} />
                )}
        </div>
    )
}
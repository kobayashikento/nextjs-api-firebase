
import Link from 'next/link';

export default function CoverImage({ title, url, slug, preview }) {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            {slug ? (
                <Link as={`/apods/${slug}`} href="/apods/[slug]">
                    <a aria-label={title} style={{ width: "100%" }}>
                        <div className="imageHover" style={{ backgroundImage: `url(${url})`, width: "100%", height: preview ? "40vh" : "70vh" }} />
                    </a>
                </Link>
            ) : (
                    <div className="imageHover" style={{ backgroundImage: `url(${url})`, width: "100%", height: preview ? "40vh" : "70vh" }} />
                )}
        </div>
    )
}
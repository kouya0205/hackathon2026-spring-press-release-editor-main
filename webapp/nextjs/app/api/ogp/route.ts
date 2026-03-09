import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";

function normalizeUrl(rawUrl: string): URL | null {
    const trimmed = rawUrl.trim();
    if (!trimmed) return null;

    try {
        return new URL(trimmed);
    } catch {
        try {
            return new URL(`https://${trimmed}`);
        } catch {
            return null;
        }
    }
}

function createFallbackPayload(url: URL) {
    return {
        url: url.toString(),
        title: url.hostname,
        description: "",
        image: "",
    };
}

export async function GET(request: NextRequest) {
    const rawUrl = request.nextUrl.searchParams.get("url");

    if (!rawUrl) {
        return NextResponse.json(
            { error: "URL is required" },
            { status: 400 }
        );
    }

    const parsedUrl = normalizeUrl(rawUrl);
    if (!parsedUrl) {
        return NextResponse.json(
            { error: "Invalid URL" },
            { status: 400 }
        );
    }

    const fallbackPayload = createFallbackPayload(parsedUrl);

    try {
        const response = await fetch(parsedUrl.toString(), {
            headers: {
                "User-Agent": "Mozilla/5.0 (compatible; PressReleaseEditorBot/1.0)",
            },
        });

        if (!response.ok) {
            return NextResponse.json(fallbackPayload);
        }

        const html = await response.text();
        const $ = cheerio.load(html);

        const getMetaTag = (names: string[]) => {
            for (const name of names) {
                const content =
                    $(`meta[property="${name}"]`).attr("content") ||
                    $(`meta[name="${name}"]`).attr("content");
                if (content) return content;
            }
            return null;
        };

        const title = getMetaTag(["og:title", "twitter:title"]) || $("title").text() || fallbackPayload.title;
        const description = getMetaTag(["og:description", "twitter:description", "description"]) || "";
        const image = getMetaTag(["og:image", "twitter:image"]) || "";

        return NextResponse.json({
            url: parsedUrl.toString(),
            title,
            description,
            image,
        });
    } catch (error) {
        console.error("Error fetching OGP:", error);
        return NextResponse.json(fallbackPayload);
    }
}

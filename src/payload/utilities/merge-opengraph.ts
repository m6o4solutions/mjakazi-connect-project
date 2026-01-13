import { getServerSideURL } from "@/payload/utilities/get-url";
import type { Metadata } from "next";

// default open graph metadata used across pages
const defaultOpenGraph: Metadata["openGraph"] = {
	type: "website",
	description:
		"Mjakazi Connect helps families find trusted caregivers through a curated directory with verified profiles and secure, subscription-based access.",
	images: [
		{
			url: `${getServerSideURL()}/abstract-image-1.jpg`,
		},
	],
	siteName: "Mjakazi Connect",
	title: "Mjakazi Connect",
};

// merges provided open graph data with defaults to ensure required fields exist
const mergeOpenGraph = (og?: Metadata["openGraph"]): Metadata["openGraph"] => {
	return {
		...defaultOpenGraph,
		...og,
		// keep custom images if provided, otherwise use default ones
		images: og?.images ? og.images : defaultOpenGraph.images,
	};
};

export { mergeOpenGraph };

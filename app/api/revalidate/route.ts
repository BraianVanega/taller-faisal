import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { revalidatePrismicPages } from "@prismicio/next";
import { TAG_BLOG } from "@/lib/blog";

// Webhook de Prismic: se llama al publicar o despublicar contenido.
export async function POST(request: Request) {
	const body = await request.json();

	const secreto = process.env.PRISMIC_WEBHOOK_SECRET;
	if (secreto && body.secret !== secreto) {
		return NextResponse.json({ error: "Secreto inválido" }, { status: 401 });
	}

	if (body.type === "api-update") {
		revalidatePrismicPages(body.documents ?? []);
		// Listado del blog y sitemap (incluye posts nuevos que todavía no tenían tag).
		revalidateTag(TAG_BLOG, { expire: 0 });
	}

	return NextResponse.json({ revalidated: true, now: Date.now() });
}

import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, company, email, phone, country, business, interests } = body ?? {};
    if (!name || !company || !email || !phone || !country || !business) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log("[unifayre-lead]", {
      at: new Date().toISOString(),
      name,
      company,
      email,
      phone,
      country,
      business,
      interests,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[unifayre-lead] parse error", err);
    return NextResponse.json(
      { ok: false, error: "Invalid payload" },
      { status: 400 }
    );
  }
}

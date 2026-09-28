import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  details?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const details = (body.details ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !details || !message) {
    return NextResponse.json(
      { ok: false, error: "All fields are required" },
      { status: 422 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Invalid email address" },
      { status: 422 }
    );
  }
  if (message.length > 5000) {
    return NextResponse.json(
      { ok: false, error: "Message too long (5000 char max)" },
      { status: 422 }
    );
  }

  // In a production environment this would persist to the database or
  // forward to the committee inbox. For the demo build we simply log it.
  console.log("[LectorsBuClub] Committee submission received:", {
    name,
    email,
    details,
    messagePreview: message.slice(0, 120) + (message.length > 120 ? "…" : ""),
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json(
    {
      ok: true,
      message: "Submission received. We respond to qualified submissions only.",
    },
    { status: 200 }
  );
}

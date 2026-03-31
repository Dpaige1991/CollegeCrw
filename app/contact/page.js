import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@/lib/supabase/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const supabase = await createClient();
  const body = await request.json();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { fullName, email, subject, message } = body;

  if (!fullName || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { error: dbError } = await supabase.from("contact_messages").insert({
    user_id: user?.id ?? null,
    full_name: fullName,
    email,
    subject: subject || null,
    message,
  });

  if (dbError) {
    return NextResponse.json({ error: dbError.message }, { status: 400 });
  }

  const { error: emailError } = await resend.emails.send({
    from: "College Crw <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL_TO,
    replyTo: email,
    subject: subject || "New College Crw contact message",
    html: `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject || "—"}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  if (emailError) {
    return NextResponse.json({ error: emailError.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
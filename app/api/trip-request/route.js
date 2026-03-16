import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      fullName,
      school,
      email,
      groupSize,
      destinationInterest,
      everyoneOver21,
      notes,
      agreedToTerms,
      tripName,
      source,
    } = body;

    if (!fullName || !email) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    const subject = tripName
      ? `New College Crw Trip Interest: ${tripName}`
      : `New College Crw Trip Request`;

    const html = `
      <h2>New College Crw Submission</h2>
      <p><strong>Source:</strong> ${source || "Join Page"}</p>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>School:</strong> ${school || ""}</p>
      <p><strong>Group Size:</strong> ${groupSize || ""}</p>
      <p><strong>Destination Interest:</strong> ${destinationInterest || tripName || ""}</p>
      <p><strong>Everyone 21+:</strong> ${everyoneOver21 || ""}</p>
      <p><strong>Agreed To Terms:</strong> ${agreedToTerms ? "Yes" : "No"}</p>
      <p><strong>Notes:</strong> ${notes || ""}</p>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject,
      html,
    });

    if (process.env.GOOGLE_SCRIPT_WEBHOOK_URL) {
      await fetch(process.env.GOOGLE_SCRIPT_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          submittedAt: new Date().toISOString(),
          source: source || "Join Page",
          fullName,
          school: school || "",
          email,
          groupSize: groupSize || "",
          destinationInterest: destinationInterest || tripName || "",
          everyoneOver21: everyoneOver21 || "",
          agreedToTerms: agreedToTerms ? "Yes" : "No",
          notes: notes || "",
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Trip request error:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
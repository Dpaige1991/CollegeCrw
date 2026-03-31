import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request) {
  const supabase = await createClient();
  const body = await request.json();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const payload = {
    user_id: user?.id ?? null,
    full_name: body.fullName,
    school: body.school || null,
    email: body.email,
    group_size: body.groupSize ? Number(body.groupSize) : null,
    destination_interest: body.destinationInterest || body.tripName || null,
    everyone_over_21: body.everyoneOver21 || null,
    notes: body.notes || null,
    agreed_to_terms: Boolean(body.agreedToTerms),
    source: body.source || "join_page",
  };

  const { error } = await supabase.from("trip_requests").insert(payload);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ success: true });
}
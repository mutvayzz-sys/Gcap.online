import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO = process.env.CONTACT_EMAIL ?? "team@gcap.online";
const FROM = process.env.CONTACT_FROM ?? "Headmaster Demo Requests <noreply@gcap.online>";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, organization, email, role, platforms, workflow, notes } = body;

    if (!name || !organization || !email || !workflow) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const org = organization;

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not set — email not sent", { name, org, email, workflow, notes });
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `Demo request — ${org} (${name})`,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>New demo request</title>
</head>
<body style="margin:0;padding:0;background:#F0EFEB;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td align="center" style="padding:48px 16px;">

        <table width="540" cellpadding="0" cellspacing="0" role="presentation" style="max-width:540px;width:100%;">

          <!-- Wordmark bar -->
          <tr>
            <td style="padding-bottom:20px;">
              <span style="font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#5C5C5A;">GCAP</span>
              <span style="font-size:11px;color:#C0BFBB;margin:0 6px;">·</span>
              <span style="font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#5C5C5A;">Headmaster</span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background:#FFFFFF;border:1px solid #E2E1DC;border-radius:6px;overflow:hidden;">

              <!-- Card header — dark band -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="background:#111111;padding:28px 36px 26px;">
                    <div style="font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:8px;">Demo request</div>
                    <div style="font-size:26px;font-weight:600;color:#F9F7F3;letter-spacing:-0.4px;line-height:1.2;">${name}</div>
                    <div style="font-size:15px;color:rgba(255,255,255,0.5);margin-top:4px;">${org}</div>
                  </td>
                </tr>

                <!-- Field rows -->
                <tr>
                  <td style="padding:0 36px;">
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">

                      <tr>
                        <td style="padding:20px 0;border-bottom:1px solid #F0EFEB;">
                          <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                              <td width="120" style="font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#AEADA9;vertical-align:top;padding-top:1px;">Email</td>
                              <td style="font-size:15px;color:#111111;"><a href="mailto:${email}" style="color:#111111;text-decoration:none;">${email}</a></td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      ${role ? `
                      <tr>
                        <td style="padding:20px 0;border-bottom:1px solid #F0EFEB;">
                          <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                              <td width="120" style="font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#AEADA9;vertical-align:top;padding-top:1px;">Role</td>
                              <td style="font-size:15px;color:#111111;">${role}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>` : ""}

                      ${platforms ? `
                      <tr>
                        <td style="padding:20px 0;border-bottom:1px solid #F0EFEB;">
                          <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                              <td width="120" style="font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#AEADA9;vertical-align:top;padding-top:1px;">Platforms</td>
                              <td style="font-size:15px;color:#111111;">${platforms}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>` : ""}

                      <tr>
                        <td style="padding:20px 0;border-bottom:1px solid #F0EFEB;">
                          <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                              <td width="120" style="font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#AEADA9;vertical-align:top;padding-top:1px;">Workflow</td>
                              <td style="font-size:15px;color:#111111;line-height:1.5;">${workflow}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      ${notes ? `
                      <tr>
                        <td style="padding:20px 0;border-bottom:1px solid #F0EFEB;">
                          <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                              <td width="120" style="font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#AEADA9;vertical-align:top;padding-top:1px;">Notes</td>
                              <td style="font-size:15px;color:#5C5C5A;line-height:1.6;">${notes}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>` : ""}

                      <!-- CTA row -->
                      <tr>
                        <td style="padding:24px 0 28px;">
                          <a href="mailto:${email}?subject=Re%3A%20Headmaster%20demo%20%E2%80%94%20${encodeURIComponent(org)}"
                             style="display:inline-block;background:#111111;color:#F9F7F3;font-size:13px;font-weight:600;letter-spacing:0.04em;padding:11px 22px;border-radius:4px;text-decoration:none;">
                            Reply to ${name} &rarr;
                          </a>
                        </td>
                      </tr>

                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 4px 0;">
              <p style="margin:0;font-size:11px;color:#AEADA9;letter-spacing:0.02em;">
                Submitted via gcap.online &nbsp;·&nbsp; <a href="https://gcap.online" style="color:#AEADA9;text-decoration:none;">gcap.online</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send. Please try again or email us directly." },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: FROM,
      to: email,
      replyTo: TO,
      subject: `We received your request — ${org}`,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>Thanks for reaching out</title>
</head>
<body style="margin:0;padding:0;background:#F0EFEB;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td align="center" style="padding:48px 16px;">

        <table width="540" cellpadding="0" cellspacing="0" role="presentation" style="max-width:540px;width:100%;">

          <!-- Wordmark -->
          <tr>
            <td style="padding-bottom:20px;">
              <span style="font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#5C5C5A;">GCAP</span>
              <span style="font-size:11px;color:#C0BFBB;margin:0 6px;">·</span>
              <span style="font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#5C5C5A;">Headmaster</span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background:#FFFFFF;border:1px solid #E2E1DC;border-radius:6px;overflow:hidden;">

              <!-- Dark header -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="background:#111111;padding:28px 36px 26px;">
                    <div style="font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:8px;">Request received</div>
                    <div style="font-size:26px;font-weight:600;color:#F9F7F3;letter-spacing:-0.4px;line-height:1.2;">Thanks, ${name}.</div>
                    <div style="font-size:15px;color:rgba(255,255,255,0.5);margin-top:4px;">We'll be in touch shortly.</div>
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="padding:32px 36px 36px;">
                    <p style="margin:0 0 18px;font-size:16px;color:#111111;line-height:1.65;">
                      We've received your demo request for <strong>${org}</strong> and someone from the GCAP team will follow up with you directly.
                    </p>
                    <p style="margin:0 0 18px;font-size:15px;color:#5C5C5A;line-height:1.65;">
                      In the meantime, if you have questions or want to share more context about your workflows, just reply to this email — it goes straight to us.
                    </p>
                    <p style="margin:0 0 28px;font-size:15px;color:#5C5C5A;line-height:1.65;">
                      Headmaster is a persistent AI workforce layer built for organizations — memory, skills, automations, specialist agents, approvals, and private deployments, all in one system.
                    </p>

                    <!-- What happens next -->
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-top:1px solid #F0EFEB;margin-bottom:28px;">
                      <tr>
                        <td style="padding:20px 0 0;">
                          <div style="font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#AEADA9;margin-bottom:14px;">What happens next</div>
                          <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                              <td style="padding:8px 0;border-bottom:1px solid #F7F6F3;">
                                <table cellpadding="0" cellspacing="0" role="presentation">
                                  <tr>
                                    <td width="24" style="font-size:13px;color:#AEADA9;vertical-align:top;padding-top:1px;">01</td>
                                    <td style="font-size:14px;color:#5C5C5A;line-height:1.5;">We review your request and workflow context.</td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding:8px 0;border-bottom:1px solid #F7F6F3;">
                                <table cellpadding="0" cellspacing="0" role="presentation">
                                  <tr>
                                    <td width="24" style="font-size:13px;color:#AEADA9;vertical-align:top;padding-top:1px;">02</td>
                                    <td style="font-size:14px;color:#5C5C5A;line-height:1.5;">A team member reaches out to schedule a walkthrough.</td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding:8px 0;">
                                <table cellpadding="0" cellspacing="0" role="presentation">
                                  <tr>
                                    <td width="24" style="font-size:13px;color:#AEADA9;vertical-align:top;padding-top:1px;">03</td>
                                    <td style="font-size:14px;color:#5C5C5A;line-height:1.5;">We configure a demo around your organization's workflows.</td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                    <a href="https://gcap.online"
                       style="display:inline-block;background:#111111;color:#F9F7F3;font-size:13px;font-weight:600;letter-spacing:0.04em;padding:11px 22px;border-radius:4px;text-decoration:none;">
                      Visit gcap.online &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 4px 0;">
              <p style="margin:0;font-size:11px;color:#AEADA9;letter-spacing:0.02em;">
                GCAP Labs &nbsp;·&nbsp; <a href="https://gcap.online" style="color:#AEADA9;text-decoration:none;">gcap.online</a> &nbsp;·&nbsp; You're receiving this because you submitted a demo request.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

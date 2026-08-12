import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, city, requirement, message } = body;

    // Log or forward to CRM/Email service
    console.log('[Inquiry Received]', { name, phone, city, requirement, message, date: new Date().toISOString() });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your inquiry has been received. Our water engineering team will reach out shortly.',
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Invalid submission data.' },
      { status: 400 }
    );
  }
}

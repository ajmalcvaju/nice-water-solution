import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, inquiryType, message } = body;

    console.log('[Contact / Free Water Test Request]', {
      name,
      phone,
      email,
      inquiryType,
      message,
      date: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your request has been registered. Our water testing specialist will contact you within 30 minutes.',
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

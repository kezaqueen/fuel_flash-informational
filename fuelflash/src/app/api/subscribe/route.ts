
import { NextRequest, NextResponse } from 'next/server';
const subscribers: { name: string; phone: string; date: string }[] = [];

export async function POST(request: NextRequest) {
  try {
    const { name, phone } = await request.json();
    if (!name?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { error: 'Name and phone number are required' },
        { status: 400 }
      );
    }
    const cleanPhone = phone.replace(/\s/g, '');
    const rwPhoneRegex = /^(?:\+250|250|0)[78]\d{8}$/;

    if (!rwPhoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { error: 'Invalid Rwanda phone number' },
        { status: 400 }
      );
    }
    let normalized = cleanPhone;
    if (cleanPhone.startsWith('0')) normalized = '+250' + cleanPhone.slice(1);
    else if (cleanPhone.startsWith('250')) normalized = '+' + cleanPhone;
    if (subscribers.some(s => s.phone === normalized)) {
      return NextResponse.json(
        { error: 'This phone number is already subscribed' },
        { status: 409 }
      );
    }
    subscribers.push({
      name: name.trim(),
      phone: normalized,
      date: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: 'Subscribed successfully!' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { error: 'Server error. Please try again.' },
      { status: 500 }
    );
  }
}
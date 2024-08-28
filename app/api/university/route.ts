// app/api/university/route.ts

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const data = await request.json();
  const { 
    name, email, address, contactNumber, website, 
    adminName, adminEmail, password, subscriptionPlan, termsAccepted 
  } = data;

  if (!termsAccepted) {
    return NextResponse.json({ error: 'You must accept the terms and conditions.' }, { status: 400 });
  }

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new university
    const newUniversity = await prisma.university.create({
      data: {
        name,
        email,
        address,
        contactNumber,
        website,
        adminName,
        adminEmail,
        password: hashedPassword,
        subscriptionPlan,
        termsAccepted,
      },
    });

    return NextResponse.json(newUniversity, { status: 201 });
  } catch (error) {
    console.error(error); // Log error for debugging
    return NextResponse.json({ error: 'Unable to register university' }, { status: 500 });
  }
}
